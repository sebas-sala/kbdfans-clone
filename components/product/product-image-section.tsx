"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import ProductImageList from "./product-image-list"

import type { ProductImages } from "@/types/db"

type Props = {
  images: ProductImages[]
  alt: string
}

export default function ProductImageSection({ images, alt }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const url = images[selectedImageIndex]?.url || null

  const handleImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <section className="space-y-5">
      {url && (
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
              src={url}
              className="object-cover w-full h-full rounded-md"
              alt={alt}
              priority
            />
          </motion.div>
        </AnimatePresence>
      )}

      <ProductImageList
        images={images}
        selectedImageIndex={selectedImageIndex}
        handleImage={handleImage}
      />
    </section>
  )
}
