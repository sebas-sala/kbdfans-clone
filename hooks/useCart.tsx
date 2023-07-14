"use client"
import { create } from "zustand"
import Cookie from "js-cookie"
import { addToCart as fetchingCart } from "@/lib/cart"
import type { Cart } from "@/types/types"
import { User } from "@/types/db"

const useCart = create<Cart>((set) => ({
  cartItems: [],
  setCartItems: (items) =>
    set((state) => ({
      cartItems: items,
    })),
  addToCart: async (item) => {
    const userCookie = Cookie.get("user")
    if (userCookie) {
      const { id } = JSON.parse(userCookie) as User
      set((state) => ({ cartItems: [...state.cartItems, item] }))
      await fetchingCart(item.id, id)
    }
  },
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
}))

export default useCart
