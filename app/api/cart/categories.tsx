export const fetchCartProducts = async (userId: string) => {
  try {
    const products = await fetch(
      `http://localhost:3000/api/cart?userId=${userId}`
    )
    return await products.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
