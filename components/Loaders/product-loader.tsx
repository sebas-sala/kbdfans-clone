"use client";

import {
  Skeleton,
  SkeletonText,
} from "@/components/ui/skeleton"

import ProductCard from "../product/product-card";

export default function ProductLoader() {
  return (
    <>
      <div className="text-center space-y-4 ">
        <SkeletonText className="text-center mx-auto max-w-xs " />
        <SkeletonText className="text-center mx-auto max-w-xs" />
      </div>
      <ul className="flex snap-mandatory snap-x mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i}>
            <ProductCard id={i} name="" price={0} stock={0} />
          </Skeleton>
        ))}
      </ul>
    </>
  );
}
