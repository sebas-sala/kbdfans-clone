export const fetchCartProducts = async () => {
  try {
    const products = await fetch("http://localhost:3000/api/cart")
    return await products.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
