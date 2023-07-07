"use client"

import { Menu as MenuContainer, MenuButton, MenuList } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
  buttonText: string
  buttonStyles?: string
  maxHeight?: number
}

const Menu: React.FC<Props> = ({
  children,
  buttonText,
  maxHeight,
  buttonStyles,
}) => {
  return (
    <MenuContainer closeOnSelect={false}>
      <MenuButton className={`${buttonStyles}`}>{buttonText}</MenuButton>
      <MenuList maxHeight={maxHeight} overflowY={"auto"}>
        {children}
      </MenuList>
    </MenuContainer>
  )
}

export default Menu
