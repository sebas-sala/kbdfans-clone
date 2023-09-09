import CartIcon from "../Icons/CartIcon";
import CartItem from "./cart-item";

import { sortItems } from "@/lib/cart-utils";

import type { CartWithProducts } from "@/types/db";

type CartListProps = {
  cartItems: CartWithProducts[];
};

export default function CartList({ cartItems }: CartListProps) {
  const sortedCartItems = sortItems(cartItems);
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
  );
}
