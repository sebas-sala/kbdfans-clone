import { ProductCard } from "@/components/product/product-card";

import type { IProduct } from "@/types/db";

type FilteredProductsListProps = {
  products: IProduct[];
  searchParams?: Record<string, string | string[]>;
};

export default async function FilteredProductsList({
  products,
  searchParams,
}: FilteredProductsListProps) {
  if (searchParams) {
    const conditions = Object.values(searchParams).map((categoryId) => {
      return Array.isArray(categoryId)
        ? categoryId.map(Number)
        : Number(categoryId);
    });
  }

  return (
    <ul className="flex flex-wrap justify-center items-center mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
