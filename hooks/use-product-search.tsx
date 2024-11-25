import { useEffect, useState } from "react";

import { fetchProducts } from "@/services/products-services";

import { IProduct } from "@/types/db";

export default function useProductSearch(search: string) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      setProducts(result);
    };

    if (!products.length) {
      fetchData();
    }
  }, [products.length]);

  useEffect(() => {
    if (search) {
      const searchLetters = search.replace(/ +/g, "").toLowerCase().split("");

      const filteredProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();
        return searchLetters.every((letter) => productName.includes(letter));
      });

      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [search, products]);

  return {
    filteredProducts,
  };
}
