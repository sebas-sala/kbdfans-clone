import { Suspense } from "react"
import Container from "@/components/Container"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"
import { getProductsByCategoryId } from "../api/products/products"
import Spinner from "@/components/Spinner"

const Categories = async () => {
  const keyboardsData = getProductsByCategoryId(1, 5)
  const switchesData = getProductsByCategoryId(10, 5)
  const keycapsData = getProductsByCategoryId(9, 5)
  const PCBData = getProductsByCategoryId(12, 10)

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Fully Assembled Keyboard'
          href='collection/keyboard'
          linkText='Shop'
          promise={keyboardsData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Keyboard Switches'
          linkText='Shop'
          href='collection/switches'
          promise={switchesData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='Keyboard Keycaps'
          linkText='See more'
          href='collection/keycaps'
          promise={keycapsData}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductsFetchingSection
          title='PCB'
          href='collection/pcb'
          linkText='Shop'
          promise={PCBData}
        />
      </Suspense>
    </Container>
  )
}

export default Categories
