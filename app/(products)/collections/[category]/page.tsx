import ProductsFetchingSection from "@/components/ProductsFetchingSection"
import Container from "@/components/Container"
import React, { Suspense } from "react"
import { getProductsByCategory } from "@/app/api/products/products"

type Props = {
  params: {
    category: string
  }
}

const page = ({ params }: Props) => {
  const products = getProductsByCategory(params.category, 16)

  return (
    <>
      <h2 className='mb-20 text-center text-6xl font-bold'>Products</h2>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsFetchingSection promise={products} />
        </Suspense>
      </Container>
    </>
  )
}

export default page
