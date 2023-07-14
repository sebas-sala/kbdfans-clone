export const addToCart = async (productId: number, userId: number | string) => {
  const response = await fetch("http://localhost:3000/api/cart", {
    method: "POST",
    body: JSON.stringify({
      productId,
      userId,
    }),
  })
  return await response.json()
}
