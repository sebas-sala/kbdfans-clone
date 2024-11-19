import Link from "next/link"
import Image from "next/image"

import type { ProductType } from "@/types/db"

export default function ProductCard({ id, images, name, price }: ProductType) {
  const firstImage = images?.[0]?.url

  return (
    <li>
      <Link
        href={`/collections/all/${id}`}
        className="px-10 sm:px-0 cursor-pointer flex w-full max-w-max shrink-0 sm:shrink snap-center rounded-2xl flex-col items-center gap-3 hover:shadow-lg transition"
      >
        {images && firstImage && (
          <Image
            src={firstImage}
            width={500}
            height={500}
            alt={name}
            className="left-0 top-0 h-60 w-full rounded-2xl object-cover object-center"
          />
        )}
        <div className="max-w-full px-10 p-5">
          <p className="max-w-full truncate">{name}</p>
          <p className="text-center">${price}</p>
        </div>
      </Link>
    </li>
  )
}
