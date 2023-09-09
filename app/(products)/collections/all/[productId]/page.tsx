import ProductImageSection from "@/components/product/product-image-section";
import ProductInfo from "@/components/product/product-info";

import { getProductById } from "@/actions/product-actions";

import { ProductType } from "@/types/db";

type Props = {
  params: {
    productId: string;
  };
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductPage({ params }: Props) {
  const product: ProductType | null = await getProductById(params.productId);

  if (!product) {
    return <div>Product not found...</div>;
  }

  const images = product.images ? product.images : [];
  return (
    <main className="container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8 p-6">
      <ProductImageSection images={images} alt={product.name} />
      <ProductInfo product={product} />
    </main>
  );
}
