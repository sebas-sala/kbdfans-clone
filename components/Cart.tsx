import { FC, useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartIcon from "./CartIcon"
import SideModal from "./SideModal"

const Cart: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cartItems, setCartItems] = useState<any>([])

  return (
    <>
      <AiOutlineShoppingCart
        className='cursor-pointer hover:text-white/90 transition duration-200'
        onClick={onOpen}
      />
      <SideModal
        title='Cart'
        isOpen={isOpen}
        onClose={onClose}
        items={cartItems}
        Icon={<CartIcon />}
      >
        <form></form>
      </SideModal>
    </>
  )
}

export default Cart
