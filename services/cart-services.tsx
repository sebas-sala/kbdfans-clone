import { type ProductType } from "@/types/db";

export const fetchCartByUserId = async (userId: string) => {
  const res = await fetch(`http://localhost:3000/api/cart?userId=${userId}`);
  if (!res.ok) {
    throw new Error("Error fetching cart");
  }
  return await res.json();
};

export const addToCart = async (
  product: ProductType,
  userId: number | string
) => {
  const response = await fetch("http://localhost:3000/api/cart", {
    method: "POST",
    body: JSON.stringify({
      productId: product.id,
      userId,
    }),
  });
  if (!response.ok) {
    throw new Error("Error adding to cart");
  }
  return response.json();
};

export const removeFromCart = async (
  productId: number,
  userId: number | string
) => {
  const response = await fetch(
    `http://localhost:3000/api/cart?productId=${productId}&userId=${userId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Error removing from cart");
  }
  return response.json();
};

export const decrementQuantity = async (
  productId: number,
  userId: number | string
) => {
  const response = await fetch(
    `http://localhost:3000/api/cart?productId=${productId}&userId=${userId}`,
    {
      method: "PUT",
    }
  );
  if (!response.ok) {
    throw new Error("Error decrementing quantity");
  }
  return response.json();
};
