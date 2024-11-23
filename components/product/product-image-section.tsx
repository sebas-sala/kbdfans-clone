"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import ProductImageList from "./product-image-list"

import type { ProductImages } from "@/types/db"

type Props = {
  alt?: string
  images?: ProductImages[]
}

export default function ProductImageSection({ images, alt }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!images) {
    return null
  }

  const url = images?.[selectedImageIndex]?.url || null

  const handleImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <section className="space-y-5">
      {url && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImageIndex}
            className="w-full md:block hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={400}
              height={400}
              src={url}
              className="object-cover max-h-96 w-full rounded-md"
              alt={alt || ""}
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
