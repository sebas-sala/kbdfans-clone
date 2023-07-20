"use client"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { MenuItem, Checkbox } from "@chakra-ui/react"
import Menu from "@/components/Menu"
import { type Categories } from "@/types/db"

type FiltersProps = {
  categories: Categories[]
}

export default async function Filters({ categories }: FiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (categoryName: string, categoryId: number) => {
    const current = qs.parse(searchParams.toString())
    const query = {
      ...current,
      [categoryName]: categoryId,
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )

    router.push(url)
  }

  return (
    <section className='flex w-full gap-20'>
      <div className='flex gap-4'>
        <Menu buttonText='Categories'>
          {categories.map(({ id, name, _count }) => (
            <MenuItem key={id} className='flex justify-between'>
              <div className='flex items-center gap-4'>
                <Checkbox onChange={() => handleClick(name, id)} />
                <p>{name}</p>
              </div>
              <p>{_count.products}</p>
            </MenuItem>
          ))}
        </Menu>
        <Menu buttonText='Price'>
          <MenuItem>
            <p>precio</p>
          </MenuItem>
        </Menu>
      </div>
    </section>
  )
}
