import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("productId")

  const cartItems = await prisma.cart.findUnique({
    where: {
      userId: id,
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
  return NextResponse.json(cartItems)
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

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
