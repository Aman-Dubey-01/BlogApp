import { getSession } from 'next-auth/react';
import prisma from '@/utils/connect';
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const emailSlug = searchParams.get("emailSlug");

  
  try {
    const userPosts = await prisma.post.findMany({
      where: {
        ...(emailSlug && { userEmail: emailSlug }),
      },
  })

    return new NextResponse(JSON.stringify( {userPosts} , { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
