"use client";
import { createContext, useState, ReactNode } from "react";

type CartContextType = {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
};

const CartContext = createContext<CartContextType>({
  showCart: false,
  setShowCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
