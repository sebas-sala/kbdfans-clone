import { MenuItem, Checkbox } from "@/components/Menu"
import MenuComponent from "./MenuComponent"
import { getCategories } from "@/app/api/products/products"
import Container from "./Container"

export default async function FilterSection() {
  const categories = await getCategories()

  return (
    <Container>
      <section className='w-full flex gap-20'>
        <MenuComponent text='Availability'>
          <div></div>
        </MenuComponent>
        <MenuComponent text='Product Type'>
          {categories?.map(({ id, name }) => (
            <MenuItem key={id} gap={4}>
              <Checkbox />
              <p>{name}</p>
            </MenuItem>
          ))}
        </MenuComponent>
        <MenuComponent text='Keyboard Category'>
          <div></div>
        </MenuComponent>
        <MenuComponent text='Price'>
          <div></div>
        </MenuComponent>
      </section>
    </Container>
  )
}
