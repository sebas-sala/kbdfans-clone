import { getProductsWithoutImages } from "@/actions/product-actions";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getProductsWithoutImages();

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
