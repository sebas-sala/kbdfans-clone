import { getProductById } from "@/actions/product-actions";
import ProductImageSection from "./components/product-image-section";
import ProductInfo from "./components/product-info";
import { ProductType } from "@/types/db";

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const product: ProductType | null = await getProductById(params.productId);

  if (!product) {
    return <div>Product not found...</div>;
  }

  const images = product.images;

  return (
    <main className="container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8">
      <ProductImageSection images={images} alt={product.name} />
      <ProductInfo product={product} />
    </main>
  );
};

export default ProductPage;
