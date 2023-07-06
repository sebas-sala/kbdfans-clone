import { Menu, MenuButton, MenuList } from "@/components/Menu"

type Props = {
  text: string
  children: React.ReactNode
}

const MenuComponent: React.FC<Props> = ({ children, text }) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton className='px-4 border py-2'>{text}</MenuButton>
      <MenuList maxHeight={300} overflowY={"auto"}>
        {children}
      </MenuList>
    </Menu>
  )
}

export default MenuComponent
