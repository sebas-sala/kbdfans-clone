"use client"

// import { Button, MenuContent } from '@chakra-ui/react'

// import { MenuRoot, MenuTrigger, MenuItem } from '../ui/menu'

import useFilter from "@/hooks/use-filters"

import type { Categories } from "@/types/db"

type FiltersProps = {
  categories: Categories[]
}

export function ProductFilters({ categories }: FiltersProps) {
  const { handleClick, selectedCategories } = useFilter()

  return (
    <section className="flex w-full gap-20">
      <div className="flex gap-4">
        {/* <MenuRoot>
          <MenuTrigger>
            <Button>
              Filter By
            </Button>
          </MenuTrigger>
          <MenuContent>

            <MenuItem>
              All
            </MenuItem>
            <MenuItem >Underline</MenuItem> */}
        {/* {categories.map(({ id, name, _count }) => (
                <MenuItemOption
                  key={id}
                  value={name}
                  onClick={() => handleClick(name, id)}
                >
                  <div className="flex items-center justify-between">
                    <p>{name}</p>
                    <p>{_count.products}</p>
                  </div>
                </MenuItemOption>
              ))} */}

        {/* </MenuContent>
        </MenuRoot> */}
      </div>
    </section>
  )
}
