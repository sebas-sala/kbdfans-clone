export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/categories", {
      next: { revalidate: 60 },
    })
    if (!response.ok) throw new Error("Failed to fetch categories")
    return response.json()
  } catch (e) {
    console.log(e)
    return []
  }
}
