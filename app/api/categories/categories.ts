export const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories")
  if (!res.ok) throw new Error("Error fetching categories")
  return res.json()
}
