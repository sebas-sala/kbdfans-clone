import type { ICartProduct } from "@/types/db";

export const getSubtotal = (cartItems: ICartProduct[]) => {
  return cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);
};

export const sortCart = (cartItems: ICartProduct[]) => {
  return cartItems.sort((a, b) => (a.quantity > b.quantity ? -1 : 1));
};
