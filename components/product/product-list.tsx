import { ProductCard } from "./product-card";

import type { IProduct } from "@/types/db";

type ProductsListProps = {
  products: IProduct[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className="flex snap-mandatory snap-x mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
