"use client"
import { useState, useEffect } from "react"
import { MenuItem, Checkbox } from "@/components/Menu"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@/components/SliderComponent"
import MenuComponent from "./MenuComponent"
import Container from "./Container"
import { Categories } from "@/types/db"
import { fetchCategories } from "@/app/api/categories/categories"
import { useQuery } from "react-query"

export default function FilterSection() {
  const [price, setPrice] = useState(1000)
  const { isLoading, error, data } = useQuery(["categories"], fetchCategories)

  useEffect(() => {
    console.log(price)
  }, [price])

  if (isLoading) return "Loading..."

  if (error) return "An error has ocurred" + error.message

  const keyboardCategories: Categories[] = data.slice(0, 8)

  const handlePrice = (number: string) => {
    const newPrice = parseInt(number)
    setPrice(newPrice)
  }

  return (
    <Container>
      <section className='w-full flex gap-20 justify-between'>
        <div className='flex gap-4'>
          <MenuComponent text='Availability'>
            <div></div>
          </MenuComponent>
          <MenuComponent text='Product Type'>
            {data?.map(({ id, name, _count }) => (
              <MenuItem key={id} className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <Checkbox />
                  <p>{name}</p>
                </div>
                <p>{_count.products}</p>
              </MenuItem>
            ))}
          </MenuComponent>
          <MenuComponent text='Keyboard Category'>
            {keyboardCategories?.map(({ id, name, _count }) => (
              <MenuItem key={id} className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <Checkbox />
                  <p>{name}</p>
                </div>
                <p>{_count.products}</p>
              </MenuItem>
            ))}
          </MenuComponent>
          <MenuComponent text='Price'>
            <MenuItem>
              <p>{price}</p>
              <Slider
                aria-label='slider-ex-1'
                defaultValue={price}
                onChange={(e) => handlePrice(e.target.value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </MenuItem>
          </MenuComponent>
        </div>
        <div>
          <MenuComponent text='Sort by'>
            <div></div>
          </MenuComponent>
        </div>
      </section>
    </Container>
  )
}
