import { useState } from "react";
import Image from "next/image";

import useCart from "@/hooks/use-cart";

import type { CartWithProducts } from "@/types/db";

type CartItemProps = {
  product: CartWithProducts;
};

export default function CartItem({ product }: CartItemProps) {
  const { addToCart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const { quantity, Product } = product;
  const { images, name, price, stock } = Product;
  const image = images[0].url;
  const newPrice = price * quantity;

  const handleAddToQuantity = async () => {
    setLoading(true);
    addToCart(Product);
    setLoading(false);
  };

  const handleRemoveFromQuantity = () => {
    removeFromCart(product);
  };

  return (
    <div className="w-full p-4">
      <div className="flex">
        <Image src={image} width={100} height={100} alt="product" />
        <div className="text-center">
          <p>{name}</p>
          <p>${newPrice}</p>
        </div>
      </div>
      <div className="flex">
        <button type="button" onClick={handleRemoveFromQuantity}>
          <span className="">-</span>
          {loading && <span>Loading...</span>}
        </button>
        <p className="px-8">
          Quantity: <span className="text-center">{quantity}</span>
        </p>
        <button type="button" onClick={handleAddToQuantity}>
          +
        </button>
      </div>
    </div>
  );
}
