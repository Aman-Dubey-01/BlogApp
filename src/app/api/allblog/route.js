import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const searchQuery = searchParams.get("search");
  const page = searchParams.get("page");


  const POST_PER_PAGE = 4;

  let query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  if (searchQuery && searchQuery.length > 0) {
    query = {
      ...query, // Copy the existing query properties
      where: {
        title: {
          contains: searchQuery, 
          mode: 'insensitive',// Filter posts containing the search query
        },
      },
    };
     var query2 = {
      where: {
        title: {
          contains: searchQuery, 
          mode: 'insensitive',
        },
      },
    };
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(query2),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
