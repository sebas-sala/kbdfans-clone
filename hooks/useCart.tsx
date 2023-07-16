"use client"
import { create } from "zustand"
import Cookie from "js-cookie"
import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from "@/lib/cartFetch"
import { Cart } from "@/types/types"
import { User } from "@/types/db"

const useCart = create<Cart>((set) => ({
  cartItems: [],
  setCartItems: (items) =>
    set((state) => ({
      cartItems: items,
    })),
  addToCart: async (productId) => {
    const userCookie = Cookie.get("user")
    if (userCookie) {
      const { id } = JSON.parse(userCookie) as User
      const product = await fetchingCart(productId, id)
      set((state) => ({ cartItems: product }))
    }
  },
  clearCart: () => set({ cartItems: [] }),
  removeFromCart: async (item) => {
    const userCookie = Cookie.get("user")
    if (userCookie) {
      const { id } = JSON.parse(userCookie) as User
      if (item.quantity === 1) {
        const product = await removeItem(item.productId, id)
        set((state) => ({ cartItems: product }))
      } else {
        const product = await decrementQuantity(item.productId, id)
        set((state) => ({ cartItems: [...state.cartItems, product] }))
      }
    }
  },
}))

export default useCart
