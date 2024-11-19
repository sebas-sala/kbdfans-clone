"use client";

import {

  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerRoot,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartList from "./cart-list";

import { getSubtotal } from "@/lib/cart-utils";
import useCart from "@/hooks/use-cart";
import { useState } from "react";

export default function Cart() {

  const [open, setOpen] = useState(false)

  const { cartItems } = useCart();

  const subTotal = getSubtotal(cartItems);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <button type="button" onClick={onOpen} aria-label="Open cart drawer">
        <AiOutlineShoppingCart className="h-6 md:h-8" />
      </button>
      <DrawerRoot
        isOpen={open}
        placement="end"
        onClose={onClose}
        size={"sm"}
      >
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between">
            <p>
              Cart <span className="text-gray-400">{cartItems.length}</span>
            </p>
            <AiFillCloseCircle
              className="cursor-pointer rounded-full text-3xl text-gray-200 outline-2 outline-black hover:text-gray-400 hover:outline"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>
            <CartList cartItems={cartItems} />
          </DrawerBody>
          {cartItems.length > 0 && (
            <DrawerFooter className="bg-gray-100 sticky bottom-0 w-full block space-y-6 min-h-fit">
              <div className="flex justify-between items-center w-full font-bold">
                <p>Subtotal:</p>
                <p>${subTotal}</p>
              </div>
              <Button
                colorScheme="blackAlpha"
                // textColor="white"
                variant="solid"
                width="full"
                className="bg-black py-8"
              >
                Checkout
              </Button>
              <Button
                className="bg-transparent text-sm text-gray-600 text-center cursor-pointer hover:bg-transparent w-full hover:text-black"
                onClick={onClose}
              >
                Or continue shopping
              </Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerRoot>
    </>
  );
}
