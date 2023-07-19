"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/db"
import Button from "@/components/Button"
import useCart from "@/hooks/useCart"

type Props = {
  product: Product
}

const ProductInfo = ({ product }: Props) => {
  const { addToCart } = useCart()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const handleClick = async () => {
    setButtonDisabled(true)
    try {
      await addToCart(product)
    } catch (error) {
    } finally {
      setButtonDisabled(false) // Habilitar el botón nuevamente
    }
  }

  return (
    <section className='h-96 sticky top-0'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.stock}</p>
      <Button type='button' handleClick={handleClick} disabled={buttonDisabled}>
        Add to Cart
        {buttonDisabled && (
          <span className='ml-2 animate-spin'>Loading...</span>
        )}
      </Button>
    </section>
  )
}

export default ProductInfo
