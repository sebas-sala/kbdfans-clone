"use client";

import { toast } from "sonner";
import { useState } from "react";

import Button from "@/components/Button";

import useCart from "@/hooks/use-cart";
import useAuthContext from "@/hooks/use-auth-context";

import type { IProduct } from "@/types/db";

type Props = {
  product: IProduct;
};

export default function ProductInfo({ product }: Props) {
  const { id, name, stock } = product;
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { addToCart } = useCart();
  const { userData } = useAuthContext();

  const handleAddItem = async () => {
    try {
      setButtonDisabled(true);
      await addToCart(product);
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <section className="sticky top-0">
      <p>{name}</p>
      <p>In stock: {stock}</p>
      <Button
        className="mt-4"
        type="button"
        handleClick={handleAddItem}
        disabled={buttonDisabled}
      >
        Add to Cart
        {buttonDisabled && (
          <span className="ml-2 animate-spin">Loading...</span>
        )}
      </Button>
    </section>
  );
}
