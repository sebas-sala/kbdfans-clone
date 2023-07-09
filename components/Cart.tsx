import { useState } from "react"
import CartIcon from "./Icons/CartIcon"
import Drawer from "./Drawer"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Cart = () => {
  const [cartItems, setCartItems] = useState<any>([])

  return (
    <Drawer
      headerText='Cart'
      size='sm'
      placement='right'
      icon={<AiOutlineShoppingCart />}
      bodyStyles='flex flex-col gap-4 justify-center items-center'
    >
      {cartItems.length > 0 ? (
        <div></div>
      ) : (
        <div className='flex flex-col items-center justify-center gap-4'>
          <CartIcon />
          <p>Your cart is empty.</p>
        </div>
      )}
    </Drawer>
  )
}

export default Cart
