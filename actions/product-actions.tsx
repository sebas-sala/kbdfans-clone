import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getProductsWithoutImages = unstable_cache(
  async () => {
    return await prisma.products.findMany({
      include: {
        categories: true,
      },
    });
  },
  ["productsWithoutImages"],
  { revalidate: 60, tags: ["productsWithoutImages"] }
);

export const getCategories = unstable_cache(
  async () => {
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
  },
  ["categories"],
  { revalidate: 60, tags: ["categories"] }
);

export const getProducts = unstable_cache(
  async () => {
    try {
      const products = await prisma.products.findMany({
        include: {
          categories: true,
          images: true,
        },
      });
      return products;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  ["products"],
  { revalidate: 60, tags: ["products"] }
);

export const getProductsByCategory = unstable_cache(
  async (category: string, take: number) => {
    try {
      const products = await prisma.products.findMany({
        where: {
          categories: {
            some: {
              name: category,
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
      return [];
    }
  },
  ["productsByCategory"],
  { revalidate: 60, tags: ["productsByCategory"] }
);

export const getProductsByCategoriesId = unstable_cache(
  async (categoriesIds: Record<string, string | string[]>) => {
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
              id: {
                in: categoryIdsArray,
              },
            },
          },
        };
      });

      return await prisma.products.findMany({
        where: {
          OR: conditions.map((condition) => ({
            categories: {
              some: {
                id: {
                  in: Array.isArray(condition.categories.some.id.in)
                    ? condition.categories.some.id.in
                    : [condition.categories.some.id.in],
                },
              },
            },
          })),
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
  },
  ["productsByCategoriesId"],
  { revalidate: 60, tags: ["productsByCategoriesId"] }
);

export const getProductsByCategoryId = unstable_cache(
  async (categoryId: number, take: number) => {
    try {
      const products = await prisma.products.findMany({
        where: {
          categories: {
            some: {
              id: categoryId,
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
      return [];
    }
  },
  ["productsByCategoryId"],
  { revalidate: 60, tags: ["productsByCategoryId"] }
);

export const getProductById = unstable_cache(
  async (productId: number | string) => {
    if (isNaN(Number(productId))) {
      return null;
    }

    try {
      const product = await prisma.products.findUnique({
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
      return null;
    }
  },
  ["productById"],
  { revalidate: 60, tags: ["productById"] }
);

export const getAllCategoriesWithProductImage = unstable_cache(
  async () => {
    try {
      const categories = await prisma.category.findMany();

      const categoriesWithProductImage = await Promise.all(
        categories.map(async (category) => {
          const product = await prisma.products.findFirst({
            where: {
              categories: {
                some: {
                  id: category.id,
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
      return [];
    }
  },
  ["allCategoriesWithProductImage"],
  { revalidate: 60, tags: ["allCategoriesWithProductImage"] }
);
