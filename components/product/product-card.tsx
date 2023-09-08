"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { ProductType } from "@/types/db";

export default function ProductCard({ id, images, name, price }: ProductType) {
  const router = useRouter();

  const firstImage = images ? images[0].url : "";

  const handleClick = () => {
    router.push(`/collections/all/${id}`);
  };

  return (
    <li
      className="cursor-pointer flex w-full max-w-max  px-10 sm:px-0 shrink-0 sm:shrink snap-center rounded-2xl flex-col items-center gap-3 hover:shadow-lg transition"
      onClick={() => handleClick()}
    >
      <Image
        src={firstImage}
        width={500}
        height={500}
        alt={name}
        className="left-0 top-0 h-60 w-full rounded-2xl object-cover object-center"
      />
      <div className="max-w-full px-10 p-5">
        <p className="max-w-full truncate">{name}</p>
        <p className="text-center">${price}</p>
      </div>
    </li>
  );
}
