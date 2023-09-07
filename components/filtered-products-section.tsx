import Link from "next/link";

import FilteredProductsList from "./filtered-products-list";

import type { ProductType } from "@/types/db";

type Props = {
  title?: string;
  linkText?: string;
  href?: string;
  products: ProductType[];
};

export default async function FilteredProducts({
  title,
  linkText,
  href,
  products,
}: Props) {
  return (
    <section>
      <div className="text-center">
        {title && <h3 className="text-4xl font-semibold">{title}</h3>}
        {href && linkText && (
          <Link href={href} className="underline text-gray-400">
            {linkText}
          </Link>
        )}
      </div>
      <FilteredProductsList products={products} />
    </section>
  );
}
