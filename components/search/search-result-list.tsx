import SearchResultItem from "./search-result-item";

import type { ProductType } from "@/types/db";

type SearchResultListProps = {
  filteredProducts: ProductType[];
};

export default function SearchResultList({
  filteredProducts,
}: SearchResultListProps) {
  return (
    <>
      {filteredProducts.length > 0 && (
        <ul className="text-white space-y-2 p-2 max-h-56 overflow-y-auto">
          {filteredProducts.map(({ id, name }) => (
            <SearchResultItem key={id} id={id} name={name} />
          ))}
        </ul>
      )}
    </>
  );
}
