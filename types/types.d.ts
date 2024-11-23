import { User, type Products } from "./db"
import { type CartWithProducts } from "./db"

export type navDataType = {
  href: string
  title: string
  icon?: any
}

export interface CartStore {
  cartItems: CartWithProducts[]
  setCartItems: (items: Cart[]) => void
  addToCart: (product: Product) => void
  removeFromCart: (item: Product) => void
  clearCart: () => void
}
