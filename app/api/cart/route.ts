import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

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

    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    let cartItems = await prisma.cart.findUnique({
      where: {
        userId,
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
        userId,
        productId,
        quantity: 1,
      },
    })

    return NextResponse.json(newCartItem)
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      )
    }

    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    let cartItems = await prisma.cart.findUnique({
      where: {
        userId,
      },
      include: {
        products: true,
        _count: {
          select: {
            products: true,
          },
        },
      },
    })

    if (!cartItems) {
      cartItems = await prisma.cart.create({
        data: {
          userId,
        },
        include: {
          products: true,
          _count: {
            select: {
              products: true,
            },
          },
        },
      })
    }

    return NextResponse.json(cartItems)
  } finally {
    await prisma.$disconnect()
  }
}

export async function UPDATE() {}
