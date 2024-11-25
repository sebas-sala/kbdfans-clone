import { ProductCard } from "@/components/product/product-card";

import { getProductsByCategory } from "@/actions/product-actions";
import { extractCategoryNumber } from "@/lib/categories-utils";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const category = (await params).category;
  const categoryNumber = extractCategoryNumber(category);

  const products = await getProductsByCategory(categoryNumber, 10);

  return (
    <main className="mx-auto container">
      <h2 className="mb-20 text-center text-6xl font-bold">Products</h2>
      {products.length > 0 ? (
        <ul className="mt-9 pb-7 sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 lg:grid-cols-3 xl:grid-cols-4 flex flex-col gap-y-7">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <p>No products found.</p>
        </div>
      )}
    </main>
  );
}
