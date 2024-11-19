"use client"

import { Skeleton } from "@/components/ui/skeleton"

import ProductCard from "@/components/product/product-card"

export default function Loading() {
  return (
    <main className="mx-auto container space-y-6 py-10">
      <Skeleton className="h-12 w-full" />

      <ul className="container gap-8 mx-auto grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 16 }).map((_, i) => (
          <Skeleton key={i} className="h-56">
            <ProductCard id={i} name="" price={0} stock={0} />
          </Skeleton>
        ))}
      </ul>
    </main>
  )
}
