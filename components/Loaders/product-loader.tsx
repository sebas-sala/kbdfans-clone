import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoader() {
  return (
    <>
      <div className="text-center space-y-4 ">
        {Array.from({ length: 1 }).map((_, i) => (
          <Skeleton key={i} className="mx-auto max-w-xs h-16" />
        ))}
      </div>
      <ul className="flex snap-mandatory snap-x mt-9 pb-7  overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 md:gap-14 md:overflow-x-hidden lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </ul>
    </>
  )
}
