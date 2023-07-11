"use client"
import { useContext } from "react"
import { Products } from "@/types/db"
import Button from "@/components/Button"
import { CartContext } from "@/contexts/CartContext"
type Props = {
  product: Products
}

const ProductInfo = ({ product }: Props) => {
  const { addToCart, removeFromCart, cartItems, setCartItems } =
    useContext(CartContext)

  const handleClick = () => {
    addToCart(product)
    setCartItems([...cartItems, product])
  }

  return (
    <section className='space-y-10'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.stock}</p>
      <Button
        styles='px-4 py-2'
        text='Add to Cart'
        product={product}
        handleClick={handleClick}
      />
    </section>
  )
}

export default ProductInfo
