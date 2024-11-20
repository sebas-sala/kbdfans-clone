"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="container mx-auto py-10">
      <ul className="flex flex-wrap md:gap-4 md:gap-y-14 justify-center">
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
      </ul>
    </main>
  )
}
