import type { ICartProduct, IProduct } from "@/types/db";

export const fetchCartByUserId = async (userId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${userId}`);
  if (!res.ok) {
    throw new Error("Error fetching cart");
  }
  return await res.json();
};

export const addToCart = async (product: IProduct, userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/carts/${userId}`,
    {
      method: "POST",
      body: JSON.stringify({
        productId: product.id,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Error adding to cart");
  }
  return await response.json();
};

export const removeFromCart = async (productId: number, userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/carts/${userId}?productId=${productId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Error removing from cart");
  }
  return response.json();
};

export const decrementQuantity = async (productId: number, userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/carts/${userId}`,
    {
      method: "PUT",
      body: JSON.stringify({ productId }),
    }
  );
  if (!response.ok) {
    throw new Error("Error decrementing quantity");
  }
  return response.json();
};

interface ICheckoutBody {
  cancel_url: string;
  success_url: string;
  cartItems: ICartProduct[];
}

export const checkout = async (body: ICheckoutBody) => {
  const response = await fetch("/api/checkout_sessions", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Error checking out");
  }
  return response.json();
};
