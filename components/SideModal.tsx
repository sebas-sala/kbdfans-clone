import { FC, ReactNode } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
} from "@chakra-ui/react"
import { AiFillCloseCircle } from "react-icons/ai"
import CartIcon from "./CartIcon"

type Props = {
  title: string
  children: ReactNode
  Icon: ReactNode
  isOpen: boolean
  items?: []
  onClose: () => void
}

const SideModal: FC<Props> = ({
  title,
  items,
  onClose,
  isOpen,
  children,
  Icon,
}) => {
  return (
    <Drawer size='sm' isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className='flex items-center justify-between border-b py-8'>
          <span>{title}</span>
          <AiFillCloseCircle
            className='text-3xl text-gray-200 cursor-pointer hover:outline rounded-full outline-black outline-2 hover:text-gray-400'
            onClick={onClose}
          />
        </DrawerHeader>
        {items ? (
          <DrawerBody className='flex-col'>{children}</DrawerBody>
        ) : (
          <DrawerBody className='flex flex-col gap-4 justify-center items-center'>
            <p className='text-gray-500'>Your cart is empty.</p>
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  )
}

export default SideModal
