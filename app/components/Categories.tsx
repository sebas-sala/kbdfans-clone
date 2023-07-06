import { Suspense } from "react"
import Container from "@/components/Container"
import CategorySection from "@/components/CategorySection"
import { getProductsByCategory } from "@/app/api/products/products"

const Categories = () => {
  const PCB = getProductsByCategory(12, 10)
  const keycaps = getProductsByCategory(9, 5)
  const switches = getProductsByCategory(10, 5)
  const keyboards = getProductsByCategory(1, 5)

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection
          title='Fully Assembled Keyboard'
          href=''
          text='Shop'
          promise={keyboards}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection
          title='Keyboard Switches'
          text='Shop'
          href=''
          promise={switches}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection
          title='Keyboard Keycaps'
          text='See more'
          href=''
          promise={keycaps}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection title='PCB' href='' text='Shop' promise={PCB} />
      </Suspense>
    </Container>
  )
}

export default Categories
