'use client';

import { createContext, use, useState } from 'react';

interface CartContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartContext = createContext({} as CartContextProps);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => use(CartContext);
