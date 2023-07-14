"use client"
import { create } from "zustand"
import { addToCart } from "@/lib/cart"
import { CartType } from "@/types/types"

const useCart = create<CartType>((set) => ({
  cartItems: [],
  setCartItems: (items) =>
    set((state) => ({
      cartItems: items,
    })),
  addToCart: async (item, userId) => {
    set((state) => ({ cartItems: [...state.cartItems, item] }))
     await addToCart(item.Id)
  },
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
}))

export default useCart
