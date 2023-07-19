import { instaPostsImages } from "@/data"
import { type Products } from "./db"
import { type Cart } from "./db"

export type instaPostsImagesType = {
  src: string
  alt: string
  description: string
  route: string
}

export type CategoryProps = {
  text: string
  img: string
}

export type ButtonProps = {
  text: string
}

export type ProductParams = {
  text: string
}

export type CategorySectionProps = {
  text: string
  href: string
  promise?: Promise<ProductParams[]>
}

export type navDataType = {
  href: string
  title: string
  icon?: any
}

export interface CartHook {
  cartItems: Cart[]
  setCartItems: (items: Cart[]) => void
  addToCart: (product: Product) => void
  removeFromCart: (item: Product) => void
  clearCart: () => void
}
