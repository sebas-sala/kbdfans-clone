"use client"

import { useEffect, useState } from "react"
import { Products } from "@/types/db"
import Button from "@/components/Button"
import useCart from "@/hooks/useCart"

type Props = {
  product: Products
}

const ProductInfo = ({ product }: Props) => {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    addToCart(product.id)
    setLoading(false)
  }

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    <section className='h-96 sticky top-0'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.stock}</p>
      <Button type='button' handleClick={handleClick}>
        Add to Cart
        {loading && <span className='ml-2 animate-spin'>Loading...</span>}
      </Button>
    </section>
  )
}

export default ProductInfo
