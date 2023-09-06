import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
    return NextResponse.json(categories);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
};
