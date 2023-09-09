"use client";

import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <main className="container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8">
      <section className="space-y-5">
        <Skeleton h={96} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} h={40} />
          ))}
        </ul>
      </section>
      <section className="p-10 space-y-6">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </section>
    </main>
  );
}
