import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button } from "../ui/button";
import type { ICartProduct } from "@/types/db";

type CartItemProps = {
  product: ICartProduct;
  addToCart: (product: ICartProduct) => void;
  removeFromCart: (product: ICartProduct) => void;
};

export const CartItem = ({
  product,
  addToCart,
  removeFromCart,
}: CartItemProps) => {
  const { images, name, price, quantity } = product;
  const image = images?.[0].url;
  const newPrice = quantity * price;

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAddToQuantity = async () => {
    setButtonDisabled(true);
    try {
      await addToCart(product);
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };

  const handleRemoveFromQuantity = async () => {
    setButtonDisabled(true);
    try {
      await removeFromCart(product);
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <li className="w-full p-1 space-y-4">
      <div className="flex gap-1">
        {image && <Image src={image} width={100} height={100} alt="product" />}

        <div className="text-center">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>${newPrice}</p>
        </div>

        <div className="flex items-center">
          <Button
            aria-label="decrement-quantity"
            onClick={handleRemoveFromQuantity}
            disabled={buttonDisabled || quantity === 1}
            variant={"ghost"}
          >
            <AiOutlineMinus />
          </Button>

          <span className="text-center mx-4 flex items-center">{quantity}</span>

          <Button
            aria-label="increase-quantity"
            onClick={handleAddToQuantity}
            disabled={buttonDisabled || product.stock === quantity}
            className=""
            variant={"ghost"}
          >
            <AiOutlinePlus />
          </Button>
        </div>
      </div>
    </li>
  );
};
