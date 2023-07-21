import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getAllCategoriesWithProductImage } from "@/lib/productActions"

const Collections = async () => {
  const categories = await getAllCategoriesWithProductImage()
  return (
    <main className='container mx-auto py-20'>
      <div className='flex flex-wrap md:gap-4 md:gap-y-14 justify-center'>
        {categories?.map((category) => (
          <div
            key={category.id}
            className='w-full md:w-1/2 lg:w-3/12 p-2 shadow-md'
          >
            <Link href={`collections/${category.name}`}>
              {category.productImage && (
                <Image
                  src={category.productImage}
                  width={800}
                  height={800}
                  className='object-cover w-full h-56'
                  alt={category.name}
                />
              )}
              <p>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Collections
