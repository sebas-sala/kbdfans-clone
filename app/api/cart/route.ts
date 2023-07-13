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

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("user")

  const cartItems = await prisma.cart.create({
    data: {
      userId: id,
    },
  })
  return NextResponse.json(cartItems)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  const cartItems = await prisma.cart.delete({
    where: {
      userId: id,
    },
  })
  return NextResponse.json(cartItems)
}

export async function UPDATE() {}
