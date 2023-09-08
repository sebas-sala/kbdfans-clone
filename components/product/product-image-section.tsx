"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import ProductImageList from "./product-image-list";

import { ProductImages } from "@/types/db";

type Props = {
  images: ProductImages[];
  alt: string;
};

export default function ProductImageSection({ images, alt }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="space-y-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImageIndex}
          className="h-96 w-full md:block hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            width={800}
            height={800}
            src={images[selectedImageIndex].url}
            className="object-cover w-full h-full rounded-md"
            alt={alt}
          />
        </motion.div>
      </AnimatePresence>

      <ProductImageList
        images={images}
        selectedImageIndex={selectedImageIndex}
        handleImage={handleImage}
      />
    </section>
  );
}
