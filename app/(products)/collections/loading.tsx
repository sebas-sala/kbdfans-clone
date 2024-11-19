'use client'

import { Skeleton } from '@/components/ui/skeleton'
import ProductCard from '@/components/product/product-card'


export default function Loading() {
  return (
    <main className="container mx-auto">
      <ul className="flex flex-wrap md:gap-4 md:gap-y-14 justify-center">
        <Skeleton className="w-full h-60">
          <ProductCard id={0} name="" price={0} stock={0} />
        </Skeleton>
        <Skeleton className="w-full h-60">
          <ProductCard id={2} name="" price={0} stock={0} />
        </Skeleton>
      </ul>
    </main>
  )
}
