"use client"
import { useState, useEffect } from "react"
import useSWR from "swr"
import { MenuItem, Checkbox } from "@chakra-ui/react"
import Container from "@/components/Container"
import Menu from "@/components/Menu"
import { getCategories } from "@/app/api/categories/categories"
import { Categories } from "@/types/db"

export default async function FilterSection() {
  const [price, setPrice] = useState(1000)
  const { data, error, isLoading } = useSWR<Categories[]>(
    "categories",
    getCategories
  )

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <Container>
      <section className='flex w-full justify-between gap-20'>
        <div className='flex gap-4'>
          <Menu buttonText='Availability'>
            <div></div>
          </Menu>
          <Menu buttonText='Product Type'>
            {data?.map(({ id, name, _count }) => (
              <MenuItem key={id} className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <Checkbox />
                  <p>{name}</p>
                </div>
                <p>{_count.products}</p>
              </MenuItem>
            ))}
          </Menu>
          <Menu buttonText='Keyboard Category'>
            {data?.map(({ id, name, _count }) => (
              <MenuItem key={id} className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <Checkbox />
                  <p>{name}</p>
                </div>
                <p>{_count.products}</p>
              </MenuItem>
            ))}
          </Menu>
          <Menu buttonText='Price'>
            <MenuItem>
              <p>{price}</p>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Menu buttonText='Sort by'>
            <div></div>
          </Menu>
        </div>
      </section>
    </Container>
  )
}
