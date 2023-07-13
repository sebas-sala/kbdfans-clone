import Link from "next/link"
import Product from "./Product"
import { Products } from "@/types/db"

type Props = {
  title?: string
  linkText?: string
  href?: string
  promise: Promise<Products[]>
}

const ProductsFetchingSection = async ({
  title,
  linkText,
  href,
  promise,
}: Props) => {
  const products = await promise

  return (
    <section>
      <div className='text-center'>
        {title && <h3 className='text-4xl font-semibold'>{title}</h3>}
        {href && linkText && (
          <Link href={href} className='underline text-gray-400'>
            {linkText}
          </Link>
        )}
      </div>
      <div className='mt-9 pb-7 flex place-content-center place-items-center justify-items-center overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-2 md:gap-14 md:overflow-x-hidden lg:grid-cols-4'>
        {products?.map(({ images, id, name, price, stock }) => (
          <Product
            images={images}
            name={name}
            price={price}
            id={id}
            stock={stock}
            key={id}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductsFetchingSection
