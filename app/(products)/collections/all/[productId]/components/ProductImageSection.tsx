"use client"
import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ProductImages } from "@/types/db"

type Props = {
  images: ProductImages[]
  alt: string
}

const ProductImageSection = ({ images, alt }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <section className='space-y-5'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedImageIndex}
          className='h-96 w-full md:block hidden relative'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            width={800}
            height={800}
            src={images[selectedImageIndex].url}
            className='object-cover w-full h-full rounded-md'
            alt={alt}
          />
        </motion.div>
      </AnimatePresence>

      <div className='flex md:flex-wrap md:snap-none gap-4 snap-x snap-mandatory overflow-x-auto h-96 w-full md:h-40'>
        {images.map((image, index) => (
          <div
            key={image.id}
            className='snap-center shrink-0 md:shrink relative w-full md:w-1/3 lg:w-1/4 h-full cursor-pointer'
          >
            {selectedImageIndex === index && (
              <div className='hidden md:block w-full h-1 bg-black absolute bottom-0 rounded-e-md'></div>
            )}
            <Image
              src={image.url}
              width={800}
              height={800}
              alt={image.url}
              onClick={() => handleImageClick(index)}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductImageSection
