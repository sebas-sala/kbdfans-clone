"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { create } from "zustand";

import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from "@/services/cart-services";

import type { ICartProduct, IProduct } from "@/types/db";

type State = {
  cartItems: ICartProduct[];
  cartCount: number;
};

type Action = {
  setCartItems: (items: ICartProduct[]) => void;
  addToCart: (product: ICartProduct | IProduct) => void;
  removeFromCart: (item: ICartProduct) => void;
  clearCart: () => void;
};

const useCart = create<State & Action>((set) => ({
  cartItems: [],
  cartCount: 0,

  setCartItems: (items) => {
    set(() => ({
      cartItems: items,
    }));
  },

  addToCart: async (product) => {
    set((state) => {
      const index = state.cartItems.findIndex((item) => item.id === product.id);

      state.cartCount += 1;

      if (index !== -1) {
        const updatedCartItems = structuredClone(state.cartItems);
        const item = updatedCartItems[index];

        if (!item.quantity) {
          item.quantity = 1;
        }

        item.quantity += 1;
        updatedCartItems[index] = item;

        return { cartItems: updatedCartItems };
      } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    });

    // const supabase = createClientComponentClient()

    // const {
    //   data: { session },
    // } = await supabase.auth.getSession()

    // if (!session) {
    //   return
    // }

    // const { id } = session.user

    // await toast
    //   .promise(fetchingCart(product, id), {
    //     loading: "Adding to cart...",
    //     success: "Product added to cart",
    //     error: "Something went wrong",
    //   })
    //   .then((data) => {
    //     set(() => ({ cartItems: data }))
    //     return data
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  },

  clearCart: () => set({ cartItems: [] }),

  removeFromCart: async (item) => {
    if (!item.quantity) {
      return;
    }

    set((state) => {
      const index = state.cartItems.findIndex((item) => item.id === item.id);
      if (index !== -1) {
        const updatedCartItems = structuredClone(state.cartItems);

        const updatedItem = updatedCartItems[index];
        updatedItem.quantity -= 1;

        state.cartCount -= 1;

        return { cartItems: updatedCartItems };
      } else {
        return { cartItems: [] };
      }
    });

    // const supabase = createClientComponentClient()

    // const {
    //   data: { session },
    // } = await supabase.auth.getSession()

    // if (!session || !session.user) {
    //   set((state) => {
    //     const index = state.cartItems.findIndex((item) => item.id === item.id)
    //     if (index !== -1) {
    //       const updatedCartItems = structuredClone(state.cartItems)
    //       updatedCartItems.splice(index, 1)
    //       return { cartItems: updatedCartItems }
    //     } else {
    //       return { cartItems: [] }
    //     }
    //   })
    //   SonnerToast.success("Product removed from cart")
    //   return
    // }

    // const { id } = session.user

    // if (item.quantity <= 1) {
    //   await toast
    //     .promise(removeItem(item.productId, id), {
    //       loading: "Removing item from cart...",
    //       success: "Item removed from cart",
    //       error: "Something went wrong",
    //     })
    //     .then((data) => {
    //       set(() => ({ cartItems: data }))
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // } else {
    //   await toast
    //     .promise(decrementQuantity(item.productId, id), {
    //       loading: "Decreasing product quantity",
    //       success: "Product quantity decreased",
    //       error: "Something went wrong",
    //     })
    //     .then((data) => {
    //       set(() => ({ cartItems: data }))
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // }
  },
}));

export default useCart;
