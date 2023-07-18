"use client"
import { useEffect, createContext, useContext } from "react"
import { type Cart } from "@/types/types"
import { fetchCartByUserId } from "@/lib/cartFetch"
import { AuthContext } from "@/contexts/AuthContext"
import useCart from "@/hooks/useCart"
import useSWR from "swr"

export const CartContext = createContext<Cart | undefined>(undefined)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { cartItems, removeFromCart, clearCart, setCartItems, addToCart } =
    useCart()
  const { userData } = useContext(AuthContext)

  const { data, error, isLoading } = useSWR(
    userData ? `${userData.id}` : null,
    fetchCartByUserId
  )

  useEffect(() => {
    if (data) {
      setCartItems(data)
    }
  }, [data, setCartItems])

  return (
    <CartContext.Provider
      value={{ cartItems, removeFromCart, clearCart, addToCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
