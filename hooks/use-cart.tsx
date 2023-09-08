"use client";

import { create } from "zustand";

import toast from "react-hot-toast";

import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from "@/services/cart-services";

import { type CartStore } from "@/types/types";

const useCart = create<CartStore>((set) => ({
  cartItems: [],

  setCartItems: (items) =>
    set(() => ({
      cartItems: items,
    })),

  addToCart: async (product) => {
    await toast
      .promise(fetchingCart(product), {
        loading: "Adding to cart...",
        success: "Product added to cart",
        error: "Something went wrong",
      })
      .then((data) => {
        set(() => ({ cartItems: data }));
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  clearCart: () => set({ cartItems: [] }),

  removeFromCart: async (item) => {
    if (item.quantity <= 1) {
      await toast
        .promise(removeItem(item.productId), {
          loading: "Removing item from cart...",
          success: "Item removed from cart",
          error: "Something went wrong",
        })
        .then((data) => {
          set(() => ({ cartItems: data }));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      await toast
        .promise(decrementQuantity(item.productId), {
          loading: "Decreasing product quantity",
          success: "Product quantity decreased",
          error: "Something went wrong",
        })
        .then((data) => {
          console.log(data);
          set(() => ({ cartItems: data }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
}));

export default useCart;
