import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import {
  addItemToCart,
  deleteItemFromCart,
  findCartItemByUserIdAndProductId,
  findUserById,
  getCartItems,
  updateItemQuantity,
} from "@/lib/CartActions"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      )
    }

    const user = await findUserById(userId)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const cartItems = await getCartItems(userId)

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 })
    }

    return NextResponse.json(cartItems)
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  try {
    const { productId, userId } = await request.json()

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      )
    }

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      )
    }

    const user = findUserById(userId)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const existingCartItem = await findCartItemByUserIdAndProductId(
      userId,
      productId
    )

    if (existingCartItem) {
      await updateItemQuantity(existingCartItem, false)
    } else {
      await addItemToCart(userId, productId)
    }

    const updatedCartItems = await getCartItems(userId)
    return NextResponse.json(updatedCartItems)
  } finally {
    await prisma.$disconnect()
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const productId = searchParams.get("productId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      )
    }

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      )
    }

    const user = await findUserById(userId)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const findCart = await findCartItemByUserIdAndProductId(userId, +productId)

    if (!findCart) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      )
    }

    await updateItemQuantity(findCart, true)

    const cartItems = getCartItems(userId)

    return NextResponse.json(cartItems)
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const productId = searchParams.get("productId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      )
    }

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      )
    }

    const user = findUserById(userId)
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const cartItem = await findCartItemByUserIdAndProductId(userId, +productId)

    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      )
    }

    await deleteItemFromCart(cartItem.id)

    const cartItems = getCartItems(userId)

    return NextResponse.json(cartItems)
  } finally {
    await prisma.$disconnect()
  }
}
