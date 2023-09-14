"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";
import { create } from "zustand";

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
    const supabase = createClientComponentClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      toast.error("Please login to add to cart");
      return;
    }

    const { id } = session.user;

    await toast
      .promise(fetchingCart(product, id), {
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
    const supabase = createClientComponentClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      toast.error("Please login to add to cart");
      return;
    }

    const { id } = session.user;

    if (item.quantity <= 1) {
      await toast
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
      await toast
        .promise(decrementQuantity(item.productId, id), {
          loading: "Decreasing product quantity",
          success: "Product quantity decreased",
          error: "Something went wrong",
        })
        .then((data) => {
          set(() => ({ cartItems: data }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
}));

export default useCart;
