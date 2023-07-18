import { Product } from "@/types/cart"

export const fetchCartByUserId = async (userId: string) => {
  const res = await fetch(`http://localhost:3000/api/cart?userId=${userId}`)
  if (!res.ok) {
    throw new Error("Error fetching cart")
  }
  return await res.json()
}

export const addToCart = async (product: Product, userId: number | string) => {
  const response = await fetch("http://localhost:3000/api/cart", {
    method: "POST",
    body: JSON.stringify({
      productId: product.id,
      userId,
    }),
  })
  return await response.json()
}

export const removeFromCart = async (
  productId: number,
  userId: number | string
) => {
  const response = await fetch(
    `http://localhost:3000/api/cart?productId=${productId}&userId=${userId}`,
    {
      method: "DELETE",
    }
  )
  if (!response.ok) {
    throw new Error("Error removing from cart")
  }
  return await response.json()
}

export const decrementQuantity = async (
  productId: number,
  userId: number | string
) => {
  const response = await fetch(
    `http://localhost:3000/api/cart?productId=${productId}&userId=${userId}`,
    {
      method: "PUT",
    }
  )
  if (!response.ok) {
    throw new Error("Error decrementing quantity")
  }
  return await response.json()
}
