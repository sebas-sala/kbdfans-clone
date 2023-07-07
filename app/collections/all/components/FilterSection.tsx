"use client"
import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { MenuItem, Checkbox } from "@chakra-ui/react"
import { fetchCategories } from "@/app/api/categories/categories"
import Container from "../../../../components/Container"
import Menu from "../../../../components/Menu"
import { Categories } from "@/types/db"

export default function FilterSection() {
  const [price, setPrice] = useState(1000)
  const { isLoading, error, data } = useQuery<Categories[]>(
    ["categories"],
    fetchCategories
  )

  useEffect(() => {
    console.log(price)
  }, [price])

  if (isLoading) return "Loading..."

  if (error) {
    console.log(error)
    return "An error has occurred." + error
  }

  const keyboardCategories: Categories[] | undefined = data?.slice(0, 8)

  const handlePrice = (number: string) => {
    const newPrice = parseInt(number)
    setPrice(newPrice)
  }

  return (
    <Container>
      <section className='w-full flex gap-20 justify-between'>
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
            {keyboardCategories?.map(({ id, name, _count }) => (
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
