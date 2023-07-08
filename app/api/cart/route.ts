import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  const cartItems = await prisma.cart.findMany({
    where: {
      userId: parseInt(id),
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

export async function DELETE() {}

export async function UPDATE() {}
