import CartIcon from "./Icons/CartIcon";
import CartItem from "./cart-item";

import type { CartWithProducts } from "@/types/db";

type CartListProps = {
  cartItems: CartWithProducts[];
};

export default function CartList({ cartItems }: CartListProps) {
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} product={item} />)
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <CartIcon />
          <p>Your cart is empty.</p>
        </div>
      )}
    </>
  );
}
