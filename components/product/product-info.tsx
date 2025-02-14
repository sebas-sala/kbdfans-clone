'use client';

import { toast } from 'sonner';
import { useState } from 'react';

import Button from '@/components/Button';

import useCart from '@/hooks/use-cart';
import useAuthContext from '@/hooks/use-auth-context';

import type { IProduct } from '@/types/db';
import { Badge } from '../ui/badge';
import { useCartContext } from '../cart/cart-provider';

type Props = {
  product: IProduct;
};

export default function ProductInfo({ product }: Props) {
  const { name, price } = product;
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { addToCart } = useCart();

  const { open, setOpen } = useCartContext();

  const handleAddItem = async () => {
    try {
      await addToCart(product);
      setOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <section className='sticky top-0 space-y-6'>
      <p className='text-2xl font-semibold'>{name}</p>

      <Badge className='py-2'>${price} USD</Badge>

      <div>
        <Button
          type='button'
          handleClick={handleAddItem}
          disabled={buttonDisabled}
          className='mt-8 rounded-full'
        >
          Add to Cart
          {buttonDisabled && (
            <span className='ml-2 animate-spin'>Loading...</span>
          )}
        </Button>
      </div>
    </section>
  );
}
