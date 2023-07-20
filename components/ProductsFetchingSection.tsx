import Link from "next/link"
import Product from "./Product"
import { type Product as ProductType } from "@/types/db"

type Props = {
  title?: string
  linkText?: string
  href?: string
  promise: Promise<ProductType[]>
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
      <div className='flex snap-mandatory snap-x mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4'>
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
