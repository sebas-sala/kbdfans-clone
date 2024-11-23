import { useEffect, useState } from "react"
import useSWR from "swr"

import { fetchProducts } from "@/services/products-services"

import { ProductType } from "@/types/db"

export default function useProductSearch(search: string) {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])

  const { data } = useSWR<ProductType[]>("products", fetchProducts)

  useEffect(() => {
    if (search) {
      const searchLetters = search.replace(/ +/g, "").toLowerCase().split("")

      const filteredProducts = data?.filter((product) => {
        const productName = product.name.toLowerCase()
        return searchLetters.every((letter) => productName.includes(letter))
      })

      if (filteredProducts) setFilteredProducts(filteredProducts)
    } else {
      setFilteredProducts([])
    }
  }, [search, data])

  return {
    filteredProducts,
  }
}
