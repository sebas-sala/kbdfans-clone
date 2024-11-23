import Image from "next/image"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import useCart from "@/hooks/use-cart"

import type { ICartProduct } from "@/types/db"
import { Button } from "../ui/button"

type CartItemProps = {
  product: ICartProduct
}

export const CartItem = ({ product }: CartItemProps) => {
  const { addToCart, removeFromCart } = useCart()

  const { images, name, price, quantity } = product
  const image = images?.[0].url
  const newPrice = quantity * price

  const [buttonDisabled, setButtonDisabled] = useState(false)

  // const handleAddToQuantity = async () => {
  //   setButtonDisabled(true)
  //   try {
  //     await addToCart(Product)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setButtonDisabled(false)
  //   }
  // }

  // const handleRemoveFromQuantity = async () => {
  //   setButtonDisabled(true)
  //   try {
  //     await removeFromCart(product)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setButtonDisabled(false)
  //   }
  // }

  return (
    <li className="w-full p-1 space-y-4">
      <div className="flex gap-1">
        {image && <Image src={image} width={100} height={100} alt="product" />}

        <div className="text-center">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>${newPrice}</p>
        </div>

        <div className="flex items-center">
          <Button
            aria-label="decrement-quantity"
            //onClick={handleRemoveFromQuantity}
            disabled={buttonDisabled}
            variant={"ghost"}
          >
            <AiOutlineMinus />
          </Button>

          <span className="text-center mx-4 flex items-center">
            {" "}
            {quantity}
          </span>

          <Button
            aria-label="increase-quantity"
            // onClick={handleAddToQuantity}
            disabled={buttonDisabled}
            className=""
            variant={"ghost"}
          >
            <AiOutlinePlus />
          </Button>
        </div>
      </div>
    </li>
  )
}
