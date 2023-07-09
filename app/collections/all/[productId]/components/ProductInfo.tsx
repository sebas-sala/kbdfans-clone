import React from "react"
import { Products } from "@/types/db"

type Props = {
  product: Products
}

const ProductInfo = ({ product }: Props) => {
  return (
    <section className='space-y-10'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.stock}</p>
    </section>
  )
}

export default ProductInfo
