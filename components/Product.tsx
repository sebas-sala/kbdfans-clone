import Image from "next/image"
import { Products } from "@/types/db"
import Link from "next/link"

const Product = ({ id, images, name, price }: Products) => {
  const firstImage = images[0].url

  return (
    <Link
      className='flex max-h-[450px] max-w-full rounded-2xl flex-col items-center gap-3 hover:shadow-lg transition'
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
