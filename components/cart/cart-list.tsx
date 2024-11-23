import CartIcon from "../Icons/CartIcon"
import { CartItem } from "./cart-item"

import { sortCart } from "@/lib/cart-utils"

import type { ICartProduct } from "@/types/db"

type CartListProps = {
  cartItems: ICartProduct[]
}

export default function CartList({ cartItems }: CartListProps) {
  const sortedCartItems = sortCart(cartItems)

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <ul className="overflow-y-auto">
          {sortedCartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <CartIcon />
          <p>Your cart is empty.</p>
        </div>
      )}
    </>
  )
}
