"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import Button from "@/components/Button";

import useCart from "@/hooks/use-cart";
import useAuthContext from "@/hooks/use-auth-context";

import { ProductType } from "@/types/db";

type Props = {
  product: ProductType;
};

export default function ProductInfo({ product }: Props) {
  const { id, name, stock } = product;
  const { userData } = useAuthContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addToCart } = useCart();

  const handleAddItem = async () => {
    if (!userData) {
      toast.error("Please login to continue shopping", {
        duration: 1500,
      });
      return;
    }

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
    <section className="h-96 sticky top-0">
      <p>{id}</p>
      <p>{name}</p>
      <p>{stock}</p>
      <Button
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
