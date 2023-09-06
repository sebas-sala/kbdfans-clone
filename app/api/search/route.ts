import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
    },
  });

  return NextResponse.json(products);
}
