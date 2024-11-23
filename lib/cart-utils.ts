import type { ICartProduct, ProductType } from "@/types/db"

export const getSubtotal = (cartItems: ProductType[]) => {
  return cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.stock
  }, 0)
}

export const sortCart = (cartItems: ICartProduct[]) => {
  return cartItems.sort((a, b) => (a.quantity > b.quantity ? -1 : 1))
}
