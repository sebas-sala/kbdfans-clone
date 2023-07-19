"use client"
import { create } from "zustand"
import Cookie from "js-cookie"
import toast from "react-hot-toast"
import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from "@/lib/cartFetch"
import { type CartHook } from "@/types/types"
import { type User } from "@/types/db"

const useCart = create<CartHook>((set) => ({
  cartItems: [],
  setCartItems: (items) =>
    set((state) => ({
      cartItems: items,
    })),
  addToCart: (product) => {
    return new Promise<void>((resolve, reject) => {
      const userCookie = Cookie.get("user")
      if (!userCookie) {
        toast.error("Please login to continue shopping", {
          duration: 1500,
        })
        reject(new Error("User not logged in"))
        return
      }

      const { id } = JSON.parse(userCookie) as User

      toast
        .promise(fetchingCart(product, id), {
          loading: "Adding to cart...",
          success: "Product added to cart",
          error: "Something went wrong",
        })
        .then((data) => {
          set((state) => ({ cartItems: data }))
          resolve()
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  },
  clearCart: () => set({ cartItems: [] }),
  removeFromCart: async (item) => {
    const userCookie = Cookie.get("user")
    if (userCookie) {
      const { id } = JSON.parse(userCookie) as User
      if (item.quantity === 1) {
        toast
          .promise(removeItem(item.productId, id), {
            loading: "Removing item from cart...",
            success: "Item removed from cart",
            error: "Something went wrong",
          })
          .then((data) => {
            set((state) => ({ cartItems: data }))
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        toast
          .promise(decrementQuantity(item.productId, id), {
            loading: "Decreasing product quantity",
            success: "Product quantity decreased",
            error: "Something went wrong",
          })
          .then((data) => {
            set((state) => ({ cartItems: data }))
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  },
}))

export default useCart
