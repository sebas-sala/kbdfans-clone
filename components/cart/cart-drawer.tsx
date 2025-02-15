'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ShoppingCart } from 'lucide-react';

import CartList from './cart-list';

import { getSubtotal } from '@/lib/cart-utils';
import useCart from '@/hooks/use-cart';

import { Button } from '../ui/button';

import { checkout } from '@/services/cart-services';
import { useCartContext } from './cart-provider';

export default function Cart() {
  const { open, setOpen } = useCartContext();
  const { cartItems, cartCount } = useCart();

  const subTotal = getSubtotal(cartItems);

  const onClose = () => setOpen(false);

  const handleCheckout = async () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.search = '';

    const res = await checkout({
      cartItems,
      success_url: currentUrl.href,
      cancel_url: currentUrl.href,
    });

    const { url } = res;

    if (url) {
      window.location.href = url;
    }
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className='relative'>
            <ShoppingCart className='cursor-pointer h-6 md:h-8' />

            {cartCount > 0 && (
              <span className='text-sm text-red-500 absolute -top-4 -right-4 font-bold'>
                {cartCount}
              </span>
            )}
          </div>
        </SheetTrigger>
        <SheetContent className='z-[70]'>
          <SheetHeader className='flex h-full flex-col'>
            <SheetTitle className='text-lg font-bold'>Cart</SheetTitle>
            <SheetDescription className='text-sm text-gray-600 sr-only'>
              Your cart
            </SheetDescription>

            <CartList cartItems={cartItems} />
          </SheetHeader>
          {cartItems.length > 0 && (
            <SheetFooter className='sticky bottom-0 ml-0 w-full block space-y-6 min-h-fit'>
              <div className='flex justify-between items-center w-full font-bold'>
                <p>Subtotal:</p>
                <p>${subTotal}</p>
              </div>
              <Button
                className='bg-black py-8 w-full m-0'
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              <Button
                className='bg-transparent text-sm text-gray-600 text-center cursor-pointer hover:bg-transparent w-full hover:text-black'
                onClick={onClose}
              >
                Or continue shopping
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
