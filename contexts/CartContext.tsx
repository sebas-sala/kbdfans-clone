"use client"
import { createContext, ReactNode } from "react"
import { CartType } from "@/types/types"
import useCartStore from "@/hooks/useCart"

export const CartContext = createContext<CartType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => [],
})

type CartProps = {
  children: ReactNode
}

const CartProvider: React.FC<CartProps> = ({ children }) => {
  const cartStore = useCartStore()

  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  )
}

export default CartProvider
