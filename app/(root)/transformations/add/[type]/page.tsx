import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { createUser, getUserById } from '@/lib/actions/user.actions';
import { auth, clerkClient } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  console.log("User ID:", userId);

  // Try to get the user
  let user = await getUserById(userId).catch(() => null);
  
  // If user doesn't exist in MongoDB, create one
  if (!user) {
    try {
      console.log("User not found in MongoDB. Creating new user...");
      
      // Get Clerk user details
      const clerkUser = await clerkClient.users.getUser(userId);
      
      // Create user in MongoDB
      const newUser = {
        clerkId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        username: clerkUser.username || `user${userId.substring(0, 8)}`,
        firstName: clerkUser.firstName || "",
        lastName: clerkUser.lastName || "",
        photo: clerkUser.imageUrl,
      };
      
      user = await createUser(newUser);
      
      // Set public metadata
      if (user) {
        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: {
            userId: user._id,
          },
        });
        console.log("User created successfully:", user._id);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user. Please try again.");
    }
  }

  if (!user) {
    throw new Error("Failed to find or create user. Please try signing out and in again.");
  }

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage