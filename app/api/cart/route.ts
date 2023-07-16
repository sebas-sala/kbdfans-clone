import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

async function findCartByUserIdAndProductId(userId: string, productId: number) {
  return prisma.cart.findFirst({
    where: {
      userId,
      productId,
    },
  })
}

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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    let updatedCartItem

    const existingCartItem = await prisma.cart.findFirst({
      where: {
        userId,
        productId,
      },
    })

    if (existingCartItem) {
      updatedCartItem = await prisma.cart.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + 1,
        },
      })
    } else {
      updatedCartItem = await prisma.cart.create({
        data: {
          userId,
          productId,
          quantity: 1,
        },
      })
    }

    return NextResponse.json(updatedCartItem)
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

    const findCart = await findCartByUserIdAndProductId(
      userId,
      parseInt(productId, 10)
    )

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

    const findCart = await findCartByUserIdAndProductId(
      userId,
      parseInt(productId, 10)
    )

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
