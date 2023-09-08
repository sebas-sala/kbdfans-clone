"use client";

import { useEffect, createContext, useContext } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import useCart from "@/hooks/use-cart";
import { fetchCartByUserId } from "@/services/cart-services";

import { type CartStore } from "@/types/types";
import useAuthContext from "@/hooks/use-auth-context";

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

  const { userData } = useAuthContext();

  const setCartItems = useCart((state) => state.setCartItems);

  console.log("prueba");

  useEffect(() => {
    async function getInitialCart() {
      try {
        const supabase = createClientComponentClient();
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) return;

        const { user } = session;
        const res = await fetchCartByUserId(user.id);

        if (res) {
          setCartItems(res);
        }
      } catch (error) {
        console.error("Error fetching initial cart:", error);
      }
    }

    if (userData) {
      getInitialCart();
    }
  }, [setCartItems, userData]);

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
