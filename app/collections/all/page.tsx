import { Suspense } from "react"
import Container from "@/components/Container"
import FilterSection from "@/app/collections/all/components/FilterSection"
import { fetchProducts } from "@/app/api/products/products"
import ProductsFetchingSection from "@/components/ProductsFetchingSection"

export default function AllPage() {
  const products = fetchProducts()

  return (
    <>
      <h2 className='text-center text-6xl font-bold mb-20'>Products</h2>
      <FilterSection />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsFetchingSection promise={products} />
        </Suspense>
      </Container>
    </>
  )
}
