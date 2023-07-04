import Product from "./Product"
import UnderlineLink from "./ShopnowLink"
import { Products } from "@/types/db"

type Props = {
  title: string
  text: string
  href: string
  promise?: Promise<Products[]>
}

const CategorySection = async ({ title, text, href, promise }: Props) => {
  const products = await promise

  return (
    <section className='py-10'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>{title}</h3>
        <UnderlineLink href={href} text={text} />
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 mt-9'>
        {products?.map((product) => (
          <Product
            key={product.id}
            src={product.src}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
