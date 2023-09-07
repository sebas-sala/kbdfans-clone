import Link from "next/link";

import ProductsList from "./product-list";

import type { ProductType } from "@/types/db";

type ProductSectionProps = {
  title?: string;
  linkText?: string;
  href?: string;
  promise: Promise<ProductType[]>;
};

export default async function ProductSection({
  title,
  linkText,
  href,
  promise,
}: ProductSectionProps) {
  const products = await promise;

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
      <ProductsList products={products} />
    </section>
  );
}
