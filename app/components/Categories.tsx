import { Suspense } from "react"
import Container from "@/components/Container"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"
import { getProductsByCategory } from "@/app/api/products/products"

const Categories = async () => {
  const PCBData = getProductsByCategory(12, 10)
  const keycapsData = getProductsByCategory(9, 5)
  const switchesData = getProductsByCategory(10, 5)
  const keyboardsData = getProductsByCategory(1, 5)

  const [PCB, keycaps, switches, keyboards] = await Promise.all([
    PCBData,
    keycapsData,
    switchesData,
    keyboardsData,
  ])

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Fully Assembled Keyboard'
          href=''
          linkText='Shop'
          promise={keyboards}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Keyboard Switches'
          linkText='Shop'
          href=''
          promise={switches}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='Keyboard Keycaps'
          linkText='See more'
          href=''
          promise={keycaps}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsFetchingSection
          title='PCB'
          href=''
          linkText='Shop'
          promise={PCB}
        />
      </Suspense>
    </Container>
  )
}

export default Categories
