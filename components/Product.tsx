"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Products } from "@/types/db"

const Product = ({ id, images, name, price }: Products) => {
  const [img, setImg] = useState("")

  useEffect(() => {
    if (images.length > 0) setImg(images[0].url)
  }, [images])

  return (
    <div className='flex max-w-full flex-col items-center gap-3 shadow-lg max-h-[450px]'>
      <Image
        src={img}
        width={500}
        height={500}
        alt={name}
        className='w-full h-60 object-cover object-center top-0 left-0 rounded-2xl'
      />
      <div className='px-10 max-w-full'>
        <p className='truncate max-w-full'>
          {name}
          rsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrs
        </p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product
