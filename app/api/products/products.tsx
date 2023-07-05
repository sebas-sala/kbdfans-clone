import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            categoryId: 2,
          },
        },
      },
      include: {
        categories: true,
        images: true,
      },
      take: 5,
    })
    return products
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
