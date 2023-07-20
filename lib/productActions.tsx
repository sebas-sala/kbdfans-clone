import prisma from "./prisma"

export const getCategories = async () => {
  try {
    return await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    })
  } catch (e) {
    console.error(e)
    return []
  } finally {
    await prisma.$disconnect()
  }
}
