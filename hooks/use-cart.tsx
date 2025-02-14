'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { create } from 'zustand';

import {
  decrementQuantity,
  addToCart as fetchingCart,
  removeFromCart as removeItem,
} from '@/services/cart-services';

import type { ICartProduct, IProduct } from '@/types/db';

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
      cartCount: items.reduce((acc, item) => acc + item.quantity, 0),
    }));
  },

  addToCart: async (product) => {
    set((state) => {
      const updatedCart = state.cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      if (!updatedCart.some((cartItem) => cartItem.id === product.id)) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      const updatedCartCount = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return { cartItems: updatedCart, cartCount: updatedCartCount };
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
      const updatedCart = state.cartItems
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedQuantity = cartItem.quantity - 1;

            if (updatedQuantity > 0) {
              return { ...cartItem, quantity: updatedQuantity };
            }

            return null;
          }

          return cartItem;
        })
        .filter((cartItem): cartItem is ICartProduct => cartItem !== null);

      const updatedCartCount = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return { cartItems: updatedCart, cartCount: updatedCartCount };
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
