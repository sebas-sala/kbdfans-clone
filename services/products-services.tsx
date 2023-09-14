export const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return await res.json();
};
