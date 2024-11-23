import FilteredProducts from "@/components/filtered-products/filtered-products-list"
import { ProductFilters } from "@/components/product/product-filters"

import { getProductsByCategoriesId } from "@/actions/product-actions"
import { getCategories } from "@/actions/product-actions"

type AllProps = {
  searchParams: Promise<Record<string, string | string[]>>
}

export default async function AllPage({ searchParams }: AllProps) {
  const searchParamsObj = await searchParams

  const [products, categories] = await Promise.all([
    getProductsByCategoriesId(searchParamsObj),
    getCategories(),
  ])

  return (
    <main className="px-8">
      <h2 className="mb-20 text-center text-6xl font-bold">Products</h2>
      <section className="mx-auto container">
        <ProductFilters categories={categories} />
        <div className="flex w-full justify-between gap-20 flex-wrap">
          <FilteredProducts
            products={products}
            searchParams={searchParamsObj}
          />
        </div>
      </section>
    </main>
  )
}
