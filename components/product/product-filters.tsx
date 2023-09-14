"use client";

import {
  MenuItem,
  Checkbox,
  Button,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList } from "@chakra-ui/react";

import useFilter from "@/hooks/use-filters";

import type { Categories } from "@/types/db";

type FiltersProps = {
  categories: Categories[];
};

export default function ProductFilters({ categories }: FiltersProps) {
  const { handleClick, selectedCategories } = useFilter();

  return (
    <section className="flex w-full gap-20">
      <div className="flex gap-4">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} borderWidth="1px">
            Filter By
          </MenuButton>
          <MenuList overflowY={"auto"} maxHeight="400px">
            <MenuOptionGroup type="checkbox" value={selectedCategories}>
              {categories.map(({ id, name, _count }) => (
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
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </div>
    </section>
  );
}
