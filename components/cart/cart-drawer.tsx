"use client";

import {
  Drawer as DrawerContainer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartList from "./cart-list";

import useCartContext from "@/hooks/use-cart-context";
import { getSubtotal } from "@/lib/cart-utils";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartItems } = useCartContext();

  const subTotal = getSubtotal(cartItems);

  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineShoppingCart />
      </button>
      <DrawerContainer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"sm"}
      >
        <DrawerOverlay />
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
                textColor="white"
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
      </DrawerContainer>
    </>
  );
}
