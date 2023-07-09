import { Suspense } from "react"
import Container from "@/components/Container"
import FilterSection from "./components/FilterSection"
import { getProducts } from "@/app/api/products/products"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"

export default function AllPage() {
  const products = getProducts()

  return (
    <>
      <h2 className='mb-20 text-center text-6xl font-bold'>Products</h2>
      <FilterSection />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsFetchingSection promise={products} />
        </Suspense>
      </Container>
    </>
  )
}
