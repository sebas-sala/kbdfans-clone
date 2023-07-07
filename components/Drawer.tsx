"use client"

import {
  Drawer as DrawerContainer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react"
import { AiFillCloseCircle } from "react-icons/ai"

type Props = {
  children: React.ReactNode
  placement: any
  size: string
  icon: React.ReactNode
  headerText: string
  bodyStyles: string
}

const Drawer: React.FC<Props> = ({
  children,
  placement,
  size,
  icon,
  headerText,
  bodyStyles,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <button onClick={onOpen}>{icon}</button>
      <DrawerContainer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className='flex justify-between items-center'>
            <span>{headerText}</span>
            <AiFillCloseCircle
              className='text-3xl text-gray-200 cursor-pointer hover:outline rounded-full outline-black outline-2 hover:text-gray-400'
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody className={`${bodyStyles}`}>{children}</DrawerBody>
        </DrawerContent>
      </DrawerContainer>
    </>
  )
}

export default Drawer
