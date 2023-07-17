import prisma from "@/lib/prisma"
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

export const getProductsByCategory = async (category: string, take: number) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            category: {
              name: category,
            },
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

export const getAllCategoriesWithProductImage = async () => {
  try {
    const categories = await prisma.category.findMany()

    const categoriesWithProductImage = await Promise.all(
      categories.map(async (category) => {
        const product = await prisma.product.findFirst({
          where: {
            categories: {
              some: {
                categoryId: category.id,
              },
            },
          },
          include: {
            images: {
              select: {
                url: true,
              },
            },
          },
        })

        const categoryWithProductImage = {
          ...category,
          productImage: product?.images[0]?.url || null,
        }

        return categoryWithProductImage
      })
    )

    const categoriesFilteredWithProductImage =
      categoriesWithProductImage.filter((category) => {
        return category.productImage !== null
      })

    return categoriesFilteredWithProductImage
  } catch (error) {
    console.error(error)
    throw new Error("Error retrieving categories with product images")
  } finally {
    await prisma.$disconnect()
  }
}
