"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";

import Drawer from "../Drawer";
import CartList from "./cart-list";

import useCartContext from "@/hooks/use-cart-context";

export default function Cart() {
  const { cartItems } = useCartContext();

  return (
    <Drawer
      headerText="Cart"
      size="sm"
      placement="right"
      icon={<AiOutlineShoppingCart />}
      bodyStyles="flex flex-col gap-4 justify-center items-center"
    >
      <CartList cartItems={cartItems} />
    </Drawer>
  );
}
