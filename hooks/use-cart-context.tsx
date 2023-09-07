import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";

export default function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
