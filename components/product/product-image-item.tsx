'use client';

import Image from 'next/image';

import { ProductImages } from '@/types/db';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';

type Props = {
  image: ProductImages;
  selectedImageIndex: number;
  handleImage: (index: number) => void;
  index: number;
};

export default function ProductImageItem({
  image,
  selectedImageIndex,
  handleImage,
  index,
}: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <li
      key={image.id}
      className='snap-center shrink-0 md:shrink relative w-full md:w-1/3 lg:w-1/4 h-full cursor-pointer'
    >
      {selectedImageIndex === index && (
        <div className='hidden md:block w-full h-1 bg-black absolute bottom-0 rounded-e-md'></div>
      )}
      {hasError ? (
        <Skeleton className='w-full h-full rounded-md' />
      ) : (
        <Image
          src={image.url}
          width={800}
          height={800}
          alt={image.url}
          onClick={() => handleImage(index)}
          className='object-cover w-full h-full rounded-md'
          onError={() => setHasError(true)}
        />
      )}
    </li>
  );
}
