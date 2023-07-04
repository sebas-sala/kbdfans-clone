import Container from "@/components/Container"
import CategorySection from "@/components/CategorySection"
import { getProducts } from "@/utils/products"

const Categories = () => {
  const products = getProducts()

  return (
    <Container>
      <CategorySection
        title='New arrival'
        href=''
        text='Shop'
        promise={products}
      />
      <CategorySection title='PBTfans' href='' text='Shop' />
      <CategorySection title='Keyboard switches' text='Shop' href='' />
      <CategorySection
        title='Fully Assembled Keyboard'
        text='See more'
        href=''
      />
    </Container>
  )
}

export default Categories
