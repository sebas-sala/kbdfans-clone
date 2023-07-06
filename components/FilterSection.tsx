import { MenuItem, Checkbox } from "@/components/Menu"
import MenuComponent from "./MenuComponent"
import Container from "./Container"
import { Categories } from "@/types/db"
import { fetchCategories } from "@/app/api/categories/categories"

export default async function FilterSection() {
  const categories: Categories[] = await fetchCategories()
  console.log(categories)

  return (
    <Container>
      <section className='w-full flex gap-20 justify-between'>
        <div className='flex gap-4'>
          <MenuComponent text='Availability'>
            <div></div>
          </MenuComponent>
          <MenuComponent text='Product Type'>
            {categories?.map(({ id, name, _count }) => (
              <MenuItem key={id} gap={4}>
                <Checkbox />
                <p>{name}</p>
                <p>{_count.products}</p>
              </MenuItem>
            ))}
          </MenuComponent>
          <MenuComponent text='Keyboard Category'>
            <div></div>
          </MenuComponent>
          <MenuComponent text='Price'>
            <div></div>
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
