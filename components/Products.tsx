import { Suspense } from "react"
import Container from "@/components/Container"
import CategorySection from "@/components/CategorySection"
import { getProducts } from "@/app/api/products/products"

const Products = () => {
  const products = getProducts()

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection title='' href='' text='' promise={products} />
      </Suspense>
    </Container>
  )
}
export default Products
