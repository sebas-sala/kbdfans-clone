import prisma from "@/lib/prisma";

export const getProductsWithoutImages = async () => {
  return await prisma.product.findMany({
    include: {
      categories: true,
    },
  });
};

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
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        categories: true,
        images: true,
      },
    });
    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting products");
  }
};

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
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting products");
  }
};

export const getProductsByCategoriesId = async (
  categoriesIds: Record<string, string | string[]>
) => {
  try {
    if (!categoriesIds || Object.keys(categoriesIds).length === 0) {
      return await getProducts();
    }

    const conditions = Object.values(categoriesIds).map((categoryId) => {
      const categoryIdsArray = Array.isArray(categoryId)
        ? categoryId.map(Number)
        : Number(categoryId);
      return {
        categories: {
          some: {
            categoryId: {
              in: categoryIdsArray,
            },
          },
        },
      };
    });

    return await prisma.product.findMany({
      where: {
        OR: conditions,
      },
      include: {
        categories: true,
        images: true,
      },
      take: 10,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error getting products by categoryId");
  }
};

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
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting products");
  }
};

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
    });
    return product;
  } catch (e) {
    console.error(e);
    throw new Error("Error getting products");
  }
};

export const getAllCategoriesWithProductImage = async () => {
  try {
    const categories = await prisma.category.findMany();

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
        });

        const categoryWithProductImage = {
          ...category,
          productImage: product?.images[0]?.url || null,
        };

        return categoryWithProductImage;
      })
    );

    const categoriesFilteredWithProductImage =
      categoriesWithProductImage.filter((category) => {
        return category.productImage !== null;
      });

    return categoriesFilteredWithProductImage;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving categories with product images");
  }
};