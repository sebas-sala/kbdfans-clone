import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const cartItems = await prisma.cart.findMany({
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

    if (!cartItems) {
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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const existingCartItem = await prisma.cart.findFirst({
      where: {
        userId,
        productId,
      },
    })

    if (existingCartItem) {
      const updatedCartItem = await prisma.cart.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + 1,
        },
      })
      return NextResponse.json(updatedCartItem)
    }

    const newCartItem = await prisma.cart.create({
      data: {
        userId: String(userId),
        productId,
        quantity: 1,
      },
    })

    return NextResponse.json(newCartItem)
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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const findCart = await prisma.cart.findFirst({
      where: {
        userId,
        productId: +productId,
      },
    })

    if (!findCart) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      )
    }

    const updatedCartItems = await prisma.cart.update({
      where: {
        id: findCart.id,
      },
      data: {
        quantity: findCart.quantity - 1,
      },
    })

    return NextResponse.json(updatedCartItems)
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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const findCart = await prisma.cart.findFirst({
      where: {
        userId,
        productId: +productId,
      },
    })

    if (!findCart) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      )
    }

    const deletedCartItem = await prisma.cart.delete({
      where: {
        id: findCart.id,
      },
    })
    return NextResponse.json(deletedCartItem)
  } finally {
    await prisma.$disconnect()
  }
}
