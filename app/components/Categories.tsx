import { Suspense } from "react"
import { getProductsByCategoryId } from "../api/products/products"
import Container from "@/components/Container"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"
import Spinner from "@/components/Spinner"

const Categories = async () => {
  const keyboardsData = getProductsByCategoryId(1, 4)
  const switchesData = getProductsByCategoryId(10, 4)
  const keycapsData = getProductsByCategoryId(9, 4)
  const PCBData = getProductsByCategoryId(12, 8)

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Fully Assembled Keyboard'
          href='collections/keyboard'
          linkText='Shop'
          promise={keyboardsData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Keyboard Switches'
          linkText='Shop'
          href='collections/switches'
          promise={switchesData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Keyboard Keycaps'
          linkText='See more'
          href='collections/keycaps'
          promise={keycapsData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='PCB'
          href='collections/pcb'
          linkText='Shop'
          promise={PCBData}
        />
      </Suspense>
    </Container>
  )
}

export default Categories
