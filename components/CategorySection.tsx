import { CategorySectionProps } from "@/types/types"
import Product from "./Product"
import UnderlineLink from "./ShopnowLink"

type Props = {
  title: string
  text: string
  href: string
  promise?: Promise<string>
}

const CategorySection = async ({ title, text, href, promise }: Props) => {
  const products = await promise

  return (
    <section className='py-10'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>{title}</h3>
        <UnderlineLink href={href} text={text} />
      </div>
      <div className='grid grid-cols-5 gap-5 mt-9'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}

export default CategorySection
