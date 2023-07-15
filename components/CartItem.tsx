import Image from "next/image"
import { CartProducts } from "@/types/cart"
import Button from "./Button"
import useCart from "@/hooks/useCart"

type CartItemProps = {
  product: CartProducts
}

const CartItem = ({ product }: CartItemProps) => {
  const { addToCart, removeFromCart } = useCart()
  const { userId, quantity, productId, id, Product } = product
  const { images, name, price, stock } = Product
  const image = images[0].url
  const newPrice = price * quantity

  const handleAddToQuantity = () => {
    addToCart(product)
  }

  const handleRemoveFromQuantity = () => {
    removeFromCart(product)
  }

  return (
    <div className='w-full p-4'>
      <div className='flex'>
        <Image src={image} width={100} height={100} alt='product' />
        <div className='text-center'>
          <p>{name}</p>
          <p>${newPrice}</p>
        </div>
      </div>
      <div className='flex'>
        <Button type='button' handleClick={handleRemoveFromQuantity}>
          -
        </Button>
        <p className='px-8'>
          Quantity: <span className='text-center'>{quantity}</span>
        </p>
        <Button type='button' handleClick={handleAddToQuantity}>
          +
        </Button>
      </div>
    </div>
  )
}

export default CartItem
