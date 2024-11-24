import { Notification } from "@/components/notification";
import ProductInfo from "@/components/product/product-info";
import ProductImageSection from "@/components/product/product-image-section";

import { getProductById } from "@/actions/product-actions";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const productId = (await params).productId;

  const product = await getProductById(productId);

  if (!product) {
    return (
      <>
        <Notification message="Product not found, please check the product id and try again" />
      </>
    );
  }

  const images = product?.images;

  return (
    <main className="container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8 p-6">
      <ProductImageSection images={images} alt={product.name} />
      <ProductInfo product={product} />
    </main>
  );
}
