"use client";

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import SearchResultList from "./search-result-list";

import useProductSearch from "@/hooks/use-product-search";
import { Input } from "../ui/input";

export default function SearchDialog() {
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const { filteredProducts } = useProductSearch(search);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Dialog open={open}

        onOpenChange={
          (isOpen) => {
            if (!isOpen) {
              setOpen(false);
              setSearch("");
            }
          }
        }>
        <DialogTrigger asChild>
          <BsSearch
            className="cursor-pointer transition duration-200 hover:text-white/90 h-6 md:h-8"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent>
          <DialogDescription className="bg-black">
            <BsSearch className="text-white text-xl cursor-pointerhover:text-gray-300" />
            <Input
              value={search}
              onChange={handleOnChange}
              placeholder="Search a product..."
              className="mr-1 w-full text-white"
            />

            <SearchResultList filteredProducts={filteredProducts} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
