import { Divider } from "@chakra-ui/react";
import CartIcon from "../Icons/CartIcon";
import CartItem from "./cart-item";

import type { CartWithProducts } from "@/types/db";

type CartListProps = {
  cartItems: CartWithProducts[];
};

export default function CartList({ cartItems }: CartListProps) {
  const sortedCartItems = cartItems.sort((a, b) => {
    return a.quantity > b.quantity ? -1 : 1;
  });

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <ul className="overflow-y-auto">
          {sortedCartItems.map((item) => (
            <>
              <CartItem key={item.id} product={item} />
              <Divider />
            </>
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
