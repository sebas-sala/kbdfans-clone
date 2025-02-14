'use client';

import Link from 'next/link';
import Image from 'next/image';

import type { IProduct } from '@/types/db';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const [hasError, setHasError] = useState(false);

  const { id, name, price, images } = product;

  const firstImage = images?.[0]?.url;

  return (
    <li className='h-full max-w-full'>
      <Link
        href={`/collections/all/${id}`}
        className='px-10 sm:px-0 h-full cursor-pointer flex w-full max-w-max shrink-0 sm:shrink snap-center rounded-2xl flex-col items-center gap-3 hover:shadow-lg transition'
      >
        {images && firstImage && !hasError ? (
          <Image
            src={firstImage}
            width={500}
            height={500}
            alt={name}
            className='left-0 top-0 h-60 w-full rounded-2xl object-cover object-center'
            onError={() => setHasError(true)}
          />
        ) : (
          <Skeleton className='left-0 top-0 h-60 w-full rounded-2xl' />
        )}
        <div className='max-w-full px-10 p-5 text-center'>
          <p className='max-w-full text-pretty'>{name}</p>
          <p className='text-center'>${price}</p>
        </div>
      </Link>
    </li>
  );
}
