import prisma from "./prisma"
import { type Cart } from "@/types/db"

export const findCartItemByUserIdAndProductId = async (
  userId: string,
  productId: number
) => {
  return await prisma.cart.findFirst({
    where: {
      userId,
      productId,
    },
  })
}

export const getCartItems = async (userId: string) => {
  return await prisma.cart.findMany({
    where: {
      userId,
    },
    include: {
      Product: {
        select: {
          name: true,
          stock: true,
          price: true,
          id: true,
          images: true,
        },
      },
    },
  })
}

export const updateItemQuantity = async (
  cartItem: Cart,
  decreased: boolean
) => {
  const action = decreased ? cartItem.quantity - 1 : cartItem.quantity + 1
  return await prisma.cart.update({
    where: {
      id: cartItem.id,
    },
    data: {
      quantity: action,
    },
  })
}

export const addItemToCart = async (userId: string, productId: number) => {
  return await prisma.cart.create({
    data: {
      userId,
      productId,
      quantity: 1,
    },
  })
}

export const deleteItemFromCart = async (cartId: number) => {
  return await prisma.cart.delete({
    where: {
      id: cartId,
    },
  })
}
