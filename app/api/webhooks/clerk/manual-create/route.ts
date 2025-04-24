import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { createUser } from "@/lib/actions/user.actions";
import { clerkClient } from "@clerk/nextjs";

export async function GET() {
  try {
    // Get the current user ID from Clerk
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Get the user data from Clerk
    const clerkUser = await clerkClient.users.getUser(userId);
    
    if (!clerkUser) {
      return NextResponse.json({ error: "User not found in Clerk" }, { status: 404 });
    }
    
    // Format the user data
    const user = {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      username: clerkUser.username || `user${clerkUser.id.substring(0, 8)}`,
      firstName: clerkUser.firstName || "",
      lastName: clerkUser.lastName || "",
      photo: clerkUser.imageUrl,
    };
    
    // Create the user in MongoDB
    const newUser = await createUser(user);
    
    if (newUser) {
      // Set public metadata
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
      
      return NextResponse.json({ 
        message: "User created successfully", 
        user: newUser 
      }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 