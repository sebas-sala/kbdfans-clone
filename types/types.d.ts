import { instaPostsImages } from "@/data"
import { ReactNode, Dispatch, SetStateAction } from "react"
import { Products } from "./db"

export type instaPostsImagesType = {
  src: string
  alt: string
  description: string
  route: string
}

export interface HeroSliderProps {
  img: string
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

export interface Cart {
  cartItems: Products[]
  setCartItems: (items: Products[]) => void
  addToCart: (item: Products) => void
  removeFromCart: (itemId: string | number) => void
}
