'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';

import { Button } from '../ui/button';
import type { ICartProduct } from '@/types/db';
import { Skeleton } from '../ui/skeleton';

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
  const image = images?.[0]?.url;
  const newPrice = quantity * price;

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const handleRemoveFromCart = async () => {
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
    <li className='w-full flex gap-2 mt-1'>
      <div>
        {image && !hasError ? (
          <Image
            src={image}
            width={100}
            height={100}
            alt='product'
            onError={() => setHasError(true)}
          />
        ) : (
          <Skeleton className='w-14 h-14' />
        )}
      </div>
      <div className='flex-1 flex justify-between'>
        <div>
          <p className='text-sm line-clamp-2'>{name}</p>
        </div>

        <div className=''>
          <div className='text-end'>${newPrice}</div>

          <div className='flex items-center border rounded-full mt-1 px-3'>
            {quantity > 1 ? (
              <Button
                onClick={handleRemoveFromCart}
                disabled={buttonDisabled || quantity === 1}
                className='hover:opacity-80 rounded-none hover:bg-transparent px-0'
                variant={'ghost'}
                size={'sm'}
              >
                <Minus className='h-4 w-4' />
              </Button>
            ) : (
              <Button
                onClick={handleRemoveFromCart}
                disabled={buttonDisabled}
                className='hover:opacity-80 rounded-none hover:bg-transparent px-0'
                variant={'ghost'}
                size={'sm'}
              >
                <X className='h-4 w-4' />
              </Button>
            )}

            <span className='text-center mx-4 flex items-center text-xs'>
              {quantity}
            </span>

            <Button
              onClick={handleAddToQuantity}
              disabled={buttonDisabled}
              className='hover:opacity-80 rounded-none hover:bg-transparent px-0'
              variant={'ghost'}
              size={'sm'}
            >
              <Plus className='h-4 w-4 text-xs' />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
