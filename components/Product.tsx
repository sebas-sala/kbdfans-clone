import Image from "next/image"
import { Products } from "@/types/db"
import Link from "next/link"

const Product = ({ id, images, name, price }: Products) => {
  const firstImage = images[0].url

  return (
    <Link
      className='flex max-h-[450px] max-w-full flex-col items-center gap-3 shadow-lg'
      href={`collections/all/${id}`}
    >
      <Image
        src={firstImage}
        width={500}
        height={500}
        alt={name}
        className='left-0 top-0 h-60 w-full rounded-2xl object-cover object-center'
      />
      <div className='max-w-full px-10'>
        <p className='max-w-full truncate'>
          {name}
          rsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrsrs
        </p>
        <p>{price}</p>
      </div>
    </Link>
  )
}

export default Product
