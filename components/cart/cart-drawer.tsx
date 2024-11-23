"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { AiFillCloseCircle } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"

import CartList from "./cart-list"

import { getSubtotal } from "@/lib/cart-utils"
import useCart from "@/hooks/use-cart"
import { useState } from "react"
import { Button } from "../ui/button"

export default function Cart() {
  const [open, setOpen] = useState(false)

  const { cartItems } = useCart()

  const subTotal = getSubtotal(cartItems)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetTrigger asChild>
          <AiOutlineShoppingCart className="h-6 md:h-8" />
        </SheetTrigger>
        <SheetContent className="z-[70]">
          <SheetHeader className="flex h-full flex-col">
            <SheetTitle className="text-lg font-bold">Cart</SheetTitle>

            <CartList cartItems={cartItems} />
          </SheetHeader>
          {cartItems.length > 0 && (
            <SheetFooter className="sticky bottom-0 ml-0 w-full block space-y-6 min-h-fit">
              <div className="flex justify-between items-center w-full font-bold">
                <p>Subtotal:</p>
                <p>${subTotal}</p>
              </div>
              <Button className="bg-black py-8 w-full m-0">Checkout</Button>
              <Button
                className="bg-transparent text-sm text-gray-600 text-center cursor-pointer hover:bg-transparent w-full hover:text-black"
                onClick={onClose}
              >
                Or continue shopping
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
