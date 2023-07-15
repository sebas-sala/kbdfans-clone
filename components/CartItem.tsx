import Image from "next/image"
import { Products } from "@/types/db"

type CartItemProps = {
  product: Products
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.quantity}</span>
    </div>
  )
}

export default CartItem
