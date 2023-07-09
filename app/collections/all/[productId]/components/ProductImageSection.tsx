import React from "react"
import { ProductImages } from "@/types/db"
import Image from "next/image"

type Props = {
  images: ProductImages[]
  alt: string
}

const ProductImageSection = ({ images, alt }: Props) => {
  const image = images[0].url

  return (
    <div className='relative w-1/2 h-60'>
      <Image src={image} fill className='object-cover' alt={alt} />
    </div>
  )
}

export default ProductImageSection
