"use client"
import { useContext, useEffect } from "react"
import useSWR from "swr"
import CartIcon from "./Icons/CartIcon"
import Drawer from "./Drawer"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from "@/contexts/CartContext"
import Image from "next/image"
import {fetchCartProducts} from "@/app/api/cart/categories"

const Cart = () => {
  const { addToCart, removeFromCart, cartItems, setCartItems } =
    useContext(CartContext)

    const {data, error, isLoading} = useSWR('/api/cart', fetchCartProducts)

    useEffect(() => {
      setCartItems(data)
    }, [data, setCartItems])

    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

  return (
    <Drawer
      headerText='Cart'
      size='sm'
      placement='right'
      icon={<AiOutlineShoppingCart />}
      bodyStyles='flex flex-col gap-4 justify-center items-center'
    >
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className='flex flex-col gap-2'>
            <Image src={item.images[0].url} alt={item.name} />
            <span>
              {item.name}
            </span>
          </div>
        ))
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
