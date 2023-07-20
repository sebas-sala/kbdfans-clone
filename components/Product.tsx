import Image from "next/image"
import Link from "next/link"
import { type Product } from "@/types/db"

const Product = ({ id, images, name, price }: Product) => {
  const firstImage = images[0].url

  return (
    <Link
      className='flex w-full sm:max-h-[450px] px-10 sm:px-0 sm:max-w-full shrink-0 sm:shrink snap-center rounded-2xl flex-col items-center gap-3 hover:shadow-lg transition'
      href={`collections/all/${id}`}
    >
      <Image
        src={firstImage}
        width={500}
        height={500}
        alt={name}
        className='left-0 top-0 h-60 w-full rounded-2xl object-cover object-center'
      />
      <div className='max-w-full px-10 p-5'>
        <p className='max-w-full truncate'>{name}</p>
        <p className='text-center'>${price}</p>
      </div>
    </Link>
  )
}

export default Product
