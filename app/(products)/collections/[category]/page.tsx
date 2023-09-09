import { getProductsByCategory } from "@/actions/product-actions";
import Product from "@/components/product/product-card";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.category, 16);

  return (
    <main className="mx-auto container">
      <h2 className="mb-20 text-center text-6xl font-bold">Products</h2>
      <section className="mt-9 pb-7 sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 lg:grid-cols-3 xl:grid-cols-4 flex flex-col gap-y-7">
        {products?.map(({ images, id, name, price, stock }) => (
          <Product
            images={images}
            name={name}
            price={price}
            id={id}
            stock={stock}
            key={id}
          />
        ))}
      </section>
    </main>
  );
}
