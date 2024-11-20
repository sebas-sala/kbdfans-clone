"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="mx-auto container space-y-6 py-10">
      <Skeleton className="h-12 w-full" />

      <ul className="container gap-8 mx-auto grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 16 }).map((_, i) => (
          <Skeleton key={i} className="h-56" />
        ))}
      </ul>
    </main>
  )
}
