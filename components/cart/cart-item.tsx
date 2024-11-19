import Image from "next/image"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import useCart from "@/hooks/use-cart"

import type { CartWithProducts } from "@/types/db"

type CartItemProps = {
  product: CartWithProducts
}

export default function CartItem({ product }: CartItemProps) {
  const { addToCart, removeFromCart } = useCart()

  const { quantity, Product } = product
  const { images, name, price } = Product
  const image = images[0].url
  const newPrice = price * quantity

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleAddToQuantity = async () => {
    setButtonDisabled(true)
    try {
      await addToCart(Product)
    } catch (error) {
      console.error(error)
    } finally {
      setButtonDisabled(false)
    }
  }

  const handleRemoveFromQuantity = async () => {
    setButtonDisabled(true)
    try {
      await removeFromCart(product)
    } catch (error) {
      console.error(error)
    } finally {
      setButtonDisabled(false)
    }
  }

  return (
    <li className="w-full p-4 space-y-4">
      <div className="flex">
        <Image src={image} width={100} height={100} alt="product" />
        <div className="text-center">
          <p>{name}</p>
          <p>${newPrice}</p>
        </div>
      </div>

      {/* <Group attached marginTop="4">
        <IconButton
          aria-label="decrement-quantity"
          onClick={handleRemoveFromQuantity}
          disabled={buttonDisabled}
        >
          <AiOutlineMinus />
        </IconButton>
        <Button className="px-8" disabled>
          Quantity:<span className="text-center ml-2"> {quantity}</span>
        </Button>
        <IconButton
          aria-label="increase-quantity"
          onClick={handleAddToQuantity}
          disabled={buttonDisabled}
        >
          <AiOutlinePlus />
        </IconButton>
      </Group> */}
      {/* <Divider /> */}
    </li>
  )
}
