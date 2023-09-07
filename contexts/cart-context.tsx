"use client";

import { useEffect, createContext, useContext } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import useCart from "@/hooks/use-cart";
import { fetchCartByUserId } from "@/services/cart-services";

import { type CartStore } from "@/types/types";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartStore | null>(null);

export const getInitialCart = async () => {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return;

  const { user } = session;

  const res = await fetchCartByUserId(user.id);
  return res;
};

export default function CartProvider({ children }: CartProviderProps) {
  const cartInstance = useCart();

  const setCartItems = useCart((state) => state.setCartItems);

  useEffect(() => {
    getInitialCart()
      .then((res) => {
        console.log(res);
        if (!res) return;

        setCartItems(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [setCartItems]);

  return (
    <CartContext.Provider value={cartInstance}>{children}</CartContext.Provider>
  );
}

export const useCartContext = () => {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return store;
};
