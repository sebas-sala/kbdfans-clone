export const fetchCartProducts = async (userId: string) => {
  try {
    const products = await fetch(
      `http://localhost:3000/api/cart?userId=${userId}`
    )
    const data = await products.json()
    return data.products
  } catch (e) {
    console.error(e)
    return []
  }
}
