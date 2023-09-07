"use client";

import { create } from "zustand";
import Cookie from "js-cookie";
import toast from "react-hot-toast";

import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from "@/services/cart-services";

import { type CartStore } from "@/types/types";
import { type User } from "@/types/db";

const useCart = create<CartStore>((set) => ({
  cartItems: [],

  setCartItems: (items) =>
    set(() => ({
      cartItems: items,
    })),

  addToCart: async (product) => {
    toast
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
    const userCookie = Cookie.get("user");
    if (userCookie) {
      const { id } = JSON.parse(userCookie) as User;
      if (item.quantity <= 1) {
        toast
          .promise(removeItem(item.productId, id), {
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
        toast
          .promise(decrementQuantity(item.productId, id), {
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
    }
  },
}));

export default useCart;
