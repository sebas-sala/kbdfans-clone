import { Suspense } from "react"
import Container from "@/components/Container"
import CategorySection from "@/components/CategorySection"
import { getProducts } from "@/app/api/products/products"

const Categories = () => {
  const products = getProducts()

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection
          title='New arrival'
          href=''
          text='Shop'
          promise={products}
        />
      </Suspense>
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
