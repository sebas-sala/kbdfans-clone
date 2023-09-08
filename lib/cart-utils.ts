import { CartWithProducts } from "@/types/db";

export const getSubtotal = (cartItems: CartWithProducts[]) => {
  return cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.Product.price * cartItem.quantity;
  }, 0);
};
