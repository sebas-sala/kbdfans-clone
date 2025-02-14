'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

type FeedProps = {
  src: string;
  description: string;
};

export default function Feed({ src, description }: FeedProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const NewImage = (
    <Image
      src={src}
      fill
      alt={description}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='h-full w-full object-cover shrink-0'
    />
  );

  return (
    <div
      className='relative h-full w-full cursor-pointer snap-center lg:snap-none shrink-0 lg:shrink'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {NewImage}
      {hovered && (
        <motion.div
          className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Instagram className='text-white size-10' />
        </motion.div>
      )}
    </div>
  );
}
