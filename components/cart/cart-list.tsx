import useCart from "@/hooks/use-cart";
import CartIcon from "../Icons/CartIcon";
import { CartItem } from "./cart-item";

import type { ICartProduct } from "@/types/db";

type CartListProps = {
  cartItems: ICartProduct[];
};

export default function CartList({ cartItems }: CartListProps) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <ul className="overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
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
