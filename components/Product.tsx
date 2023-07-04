import Image from "next/image"
import { Products } from "@/types/db"

const Product = ({ id, src, name, price }: Products) => {
  return (
    <div className='flex flex-col items-center gap-3 relative'>
      <Image
        src={src}
        fill
        alt={name}
        className='object-cover object-center top-0 left-0'
      />
      <div className='w-full h-80 rounded-3xl bg-green-500'>di</div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default Product
