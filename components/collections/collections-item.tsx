'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  id: number;
  name: string;
  productImage: string | null;
};

export function CollectionItem({ id, name, productImage }: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <li key={id} className='w-full p-2 shadow-md rounded-md'>
      <Link href={`collections/${name}`}>
        {productImage && !hasError ? (
          <Image
            src={productImage}
            width={800}
            height={800}
            className='object-cover w-full h-56'
            alt={name}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className='w-full h-56 bg-gray-300' />
        )}
        <p>{name}</p>
      </Link>
    </li>
  );
}
