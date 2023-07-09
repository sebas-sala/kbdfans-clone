import Image from "next/image"
import { Products } from "@/types/db"
import Link from "next/link"

const Product = ({ id, images, name, price }: Products) => {
  const firstImage = images[0].url

  return (
    <Link
      className='flex max-w-full flex-col items-center gap-3 shadow-lg max-h-[450px]'
      href={`collections/all/${id}`}
    >
      <Image
        src={firstImage}
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
    </Link>
  )
}

export default Product
