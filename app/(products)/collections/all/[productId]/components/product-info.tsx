"use client";

import { useState } from "react";

import Button from "@/components/Button";

import useCart from "@/hooks/use-cart";

import { ProductType } from "@/types/db";

type Props = {
  product: ProductType;
};

const ProductInfo = ({ product }: Props) => {
  const { id, name, stock } = product;

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addToCart } = useCart();

  const handleClick = async () => {
    setButtonDisabled(true);
    try {
      await addToCart(product);
    } catch (error) {
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <section className="h-96 sticky top-0">
      <p>{id}</p>
      <p>{name}</p>
      <p>{stock}</p>
      <Button type="button" handleClick={handleClick} disabled={buttonDisabled}>
        Add to Cart
        {buttonDisabled && (
          <span className="ml-2 animate-spin">Loading...</span>
        )}
      </Button>
    </section>
  );
};

export default ProductInfo;
