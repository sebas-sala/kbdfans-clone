import { Suspense } from "react"
import Container from "@/components/Container"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"
import { getProductsByCategoryId } from "../api/products/products"

const Categories = async () => {
  const keyboardsData = getProductsByCategoryId(1, 5)
  const switchesData = getProductsByCategoryId(10, 5)
  const keycapsData = getProductsByCategoryId(9, 5)
  const PCBData = getProductsByCategoryId(12, 10)

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Fully Assembled Keyboard'
          href=''
          linkText='Shop'
          promise={keyboardsData}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Keyboard Switches'
          linkText='Shop'
          href=''
          promise={switchesData}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Keyboard Keycaps'
          linkText='See more'
          href=''
          promise={keycapsData}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='PCB'
          href=''
          linkText='Shop'
          promise={PCBData}
        />
      </Suspense>
    </Container>
  )
}

export default Categories
