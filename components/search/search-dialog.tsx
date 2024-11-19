"use client"

import { useState } from "react"

import { BsSearch } from "react-icons/bs"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import SearchResultList from "./search-result-list"

import useProductSearch from "@/hooks/use-product-search"
import { Input } from "../ui/input"

export default function SearchDialog() {
  const [search, setSearch] = useState("")

  const [open, setOpen] = useState(false)

  const { filteredProducts } = useProductSearch(search)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false)
      setSearch("")
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <BsSearch
            className="cursor-pointer transition duration-200 hover:text-white/90 h-6 md:h-8"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent className="bg-black border-none top-20">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold sr-only">
              Search
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <BsSearch className="text-white text-xl cursor-pointerhover:text-gray-300" />
            <Input
              value={search}
              onChange={handleOnChange}
              placeholder="Search a product..."
              className="mr-1 w-full text-white"
            />

            <SearchResultList filteredProducts={filteredProducts} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
