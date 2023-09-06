"use client";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Drawer from "./Drawer";
import CartIcon from "./Icons/CartIcon";
import CartItem from "./CartItem";
import { CartContext } from "@/contexts/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext ? cartContext.cartItems : [];

  return (
    <Drawer
      headerText="Cart"
      size="sm"
      placement="right"
      icon={<AiOutlineShoppingCart />}
      bodyStyles="flex flex-col gap-4 justify-center items-center"
    >
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} product={item} />)
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <CartIcon />
          <p>Your cart is empty.</p>
        </div>
      )}
    </Drawer>
  );
};

export default Cart;
