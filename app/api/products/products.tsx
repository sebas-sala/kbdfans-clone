import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      next: { revalidate: 60 },
    })
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}

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

export const getProductsByCategory = async (
  categoryId: number,
  take: number
) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            categoryId: categoryId,
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
  } finally {
    await prisma.$disconnect()
  }
}

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}
