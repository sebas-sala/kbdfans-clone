import { CategoryProps } from "@/types/types"
import Image from "next/image"
import PrimaryLink from "./PrimaryLink"

const Category = ({ text, img }: CategoryProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-12 relative'>
      <span className='z-10 text-white text-4xl font-bold'>{text}</span>
      <PrimaryLink title='more' href='' />
      <Image
        src={img}
        fill
        className='object-cover rounded-2xl'
        sizes='50vw'
        alt={text}
      />
    </div>
  )
}

export default Category
