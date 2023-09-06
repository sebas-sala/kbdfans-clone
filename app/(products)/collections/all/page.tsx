import { getProductsByCategoriesId } from "@/actions/product-actions";
import { getCategories } from "@/actions/product-actions";
import FilteredProducts from "@/components/FilteredProducts";
import Filters from "@/components/Filters";

type AllProps = {
  searchParams: Record<string, string | string[]>;
};

export default async function AllPage({ searchParams }: AllProps) {
  const [products, categories] = await Promise.all([
    getProductsByCategoriesId(searchParams),
    getCategories(),
  ]);

  return (
    <>
      <h2 className="mb-20 text-center text-6xl font-bold">Products</h2>
      <section className="mx-auto container">
        <Filters categories={categories} />
        <div className="flex w-full justify-between gap-20">
          <FilteredProducts products={products} />
        </div>
      </section>
    </>
  );
}
