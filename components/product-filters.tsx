"use client";

import { MenuItem, Checkbox } from "@chakra-ui/react";

import Menu from "@/components/Menu";

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
        <Menu buttonText="Categories">
          {categories.map(({ id, name, _count }) => (
            <MenuItem key={id} className="flex justify-between">
              <div className="flex items-center gap-4">
                <Checkbox
                  onChange={() => handleClick(name, id)}
                  isChecked={selectedCategories.includes(id)}
                />
                <p>{name}</p>
              </div>
              <p>{_count.products}</p>
            </MenuItem>
          ))}
        </Menu>
        <Menu buttonText="Price">
          <MenuItem>
            <p>precio</p>
          </MenuItem>
        </Menu>
      </div>
    </section>
  );
}
