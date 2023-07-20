import { getProductsByCategoriesId } from "@/app/api/products/products"
import { getCategories } from "@/lib/categoriesFetch"
import FilteredProducts from "@/components/FilteredProducts"
import Filters from "@/components/Filters"

type AllProps = {
  searchParams: {
    categories: number[]
  }
}

export default async function AllPage({ searchParams }: AllProps) {
  const [products, categories] = await Promise.all([
    getProductsByCategoriesId(searchParams.categories),
    getCategories(),
  ])
  return (
    <>
      <h2 className='mb-20 text-center text-6xl font-bold'>Products</h2>
      <section className='mx-auto container'>
        <Filters categories={categories} />
        <div className='flex w-full justify-between gap-20'>
          <FilteredProducts products={products} />
        </div>
      </section>
    </>
  )
}
