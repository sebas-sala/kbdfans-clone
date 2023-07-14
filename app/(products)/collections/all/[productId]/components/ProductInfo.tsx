"use client"

import { Products } from "@/types/db"
import Button from "@/components/Button"
import useCart from "@/hooks/useCart"

type Props = {
  product: Products
}

const ProductInfo = ({ product }: Props) => {
  const { addToCart } = useCart()

  const handleClick = () => {
    addToCart(product)
  }

  return (
    <section className='h-96 sticky top-0'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.stock}</p>
      <Button type='button' handleClick={handleClick}>
        Add to Cart
      </Button>
    </section>
  )
}

export default ProductInfo
