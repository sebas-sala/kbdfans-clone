import { useEffect, useState } from "react";
import useSWR from "swr";

import { fetchProducts } from "@/services/products-services";

import { ProductType } from "@/types/db";

export default function useProductSearch(search: string) {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const { data } = useSWR<ProductType[]>("products", fetchProducts);

  useEffect(() => {
    if (search) {
      const filteredProducts = data?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filteredProducts);
      if (filteredProducts) setFilteredProducts(filteredProducts);
    }
  }, [search, data]);

  return {
    filteredProducts,
  };
}
