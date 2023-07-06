import { Suspense } from "react"
import Container from "@/components/Container"
import CategorySection from "@/components/CategorySection"
import { fetchProducts } from "@/app/api/products/products"

const Products = () => {
  const products = fetchProducts()

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection promise={products} />
      </Suspense>
    </Container>
  )
}
export default Products
