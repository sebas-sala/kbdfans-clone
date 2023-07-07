import { Products } from "@/types/db"
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

export const fetchProductsByCategory = async (categoryId: number) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/productsByCategory/${categoryId}`
    )
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    return res.json()
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
