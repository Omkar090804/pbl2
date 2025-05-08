# PixMorph - AI Image Processing Web Application

<h1>Demo</h1> https://youtu.be/StAWxK7_89Q?si=QQ2hmCIknYeyBhSX </br>

## About

PixMorph is a powerful AI-powered image transformation platform built with Next.js. The application allows users to easily transform, restore, and enhance images using AI capabilities provided by Cloudinary's transformation services.

## Features

- **AI Image Transformations**: Apply various transformations to images:
  - Fill/Expand images
  - Restore old or damaged photos
  - Remove backgrounds
  - Object recoloring
  - And more custom transformations
- **User Authentication**: Secure user accounts and profiles via Clerk
- **Credit System**: Users can purchase credits to use for transformations
- **Transformation History**: Users can view their past transformations
- **Responsive Design**: Works across desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: MongoDB with Mongoose
- **Image Processing**: Cloudinary
- **Payments**: Stripe
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with shadcn/ui components

## Getting Started

### Prerequisites

- Node.js
- MongoDB database
- Cloudinary account
- Clerk account
- Stripe account

### Environment Variables

Create a `.env` file with the following variables:

```
# MongoDB
MONGODB_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Learn More

- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Clerk**: [Clerk Documentation](https://clerk.com/docs)
- **Cloudinary**: [Cloudinary Documentation](https://cloudinary.com/documentation)
- **Stripe**: [Stripe Documentation](https://stripe.com/docs)
- **MongoDB**: [MongoDB Documentation](https://docs.mongodb.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Clerk 
The easiest way for Authentication to your application

## Cloudinary 
For using services of AI.

## Stripe 
The easiest way for payments or credits.
