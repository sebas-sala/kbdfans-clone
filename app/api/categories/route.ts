import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    })
    return NextResponse.json(categories)
  } catch (e) {
    console.error(e)
    return NextResponse.error()
  } finally {
    await prisma.$disconnect()
  }
}
