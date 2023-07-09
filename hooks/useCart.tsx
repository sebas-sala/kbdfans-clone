import { create } from "zustand"
import { CartType } from "@/types/types"

const useCartStore = create<CartType>((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
}))

export default useCartStore
