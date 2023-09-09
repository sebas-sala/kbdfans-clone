import { getProductsWithoutImages } from "@/actions/product-actions";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getProductsWithoutImages();

  return NextResponse.json(products);
}
