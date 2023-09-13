import Product from "../product/product-card";

import type { ProductType } from "@/types/db";

type FilteredProductsListProps = {
  products: ProductType[];
};

export default async function FilteredProductsList({
  products,
}: FilteredProductsListProps) {
  return (
    <ul className="flex flex-wrap justify-center items-center mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4">
      {products?.map(({ images, id, name, price, stock }) => (
        <Product
          images={images}
          name={name}
          price={price}
          id={id}
          stock={stock}
          key={id}
        />
      ))}
    </ul>
  );
}
