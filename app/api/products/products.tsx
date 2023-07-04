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
  } finally {
    await prisma.$disconnect()
  }
}
