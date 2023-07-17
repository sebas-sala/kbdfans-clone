import { Products } from "@/types/db"
import ProductImageSection from "./components/ProductImageSection"
import ProductInfo from "./components/ProductInfo"
import { getProductById } from "@/app/api/products/products"

type Props = {
  params: {
    productId: string
  }
}

const ProductPage = async ({ params }: Props) => {
  const product: Products | null = await getProductById(params.productId)

  if (!product) {
    return <div>Product not found...</div>
  }

  const images = product.images

  return (
    <main className='container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8'>
      <ProductImageSection images={images} alt={product.name} />
      <ProductInfo product={product} />
    </main>
  )
}

export default ProductPage
