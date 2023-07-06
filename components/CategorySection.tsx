import Product from "./Product"
import UnderlineLink from "./ShopnowLink"
import { Products } from "@/types/db"

type Props = {
  title?: string
  text?: string
  href?: string
  promise: Promise<Products[]>
}

const CategorySection = async ({ title, text, href, promise }: Props) => {
  const products = await promise

  return (
    <section className='py-10'>
      <div className='text-center'>
        {title && <h3 className='text-4xl font-semibold'>{title}</h3>}
        {href && text && <UnderlineLink href={href} text={text} />}
      </div>
      <div className='flex scrollbar-hide sm:grid sm:grid-cols-2 place-content-center place-items-center justify-items-center overflow-x-auto md:overflow-x-hidden md:grid-cols-2 lg:grid-cols-4 md:gap-14 mt-9'>
        {products?.map(({ images, id, name, price, stock }) => (
          <Product
            key={id}
            images={images}
            name={name}
            price={price}
            id={id}
            stock={stock}
          />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
