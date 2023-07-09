import { Products } from "@/types/db"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        categories: true,
        images: true,
      },
    })
    return products
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export const getProductsByCategoryId = async (
  categoryId: number,
  take: number
) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            categoryId,
          },
        },
      },
      include: {
        categories: true,
        images: true,
      },
      take,
    })

    return products
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export const getProductById = async (productId: number | string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
      include: {
        categories: true,
        images: true,
      },
    })
    return product
  } catch (e) {
    console.error(e)
    return null
  } finally {
    await prisma.$disconnect()
  }
}
