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
