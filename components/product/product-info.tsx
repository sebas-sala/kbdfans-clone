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

const ProductInfo = async ({ product }: Props) => {
  const { id, name, stock } = product;
  const { session } = useAuthContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addToCart } = useCart();

  const handleAddItem = () => {
    if (!session) {
      toast.error("Please login to continue shopping", {
        duration: 1500,
      });
      return;
    }
    setButtonDisabled(true);

    addToCart(product);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1500);
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
};

export default ProductInfo;
