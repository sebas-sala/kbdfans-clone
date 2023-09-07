import { NextResponse } from "next/server";

import { getCategories } from "@/actions/product-actions";

export const GET = async () => {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
};
