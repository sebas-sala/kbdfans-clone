import { type User } from "@/types/db";

export const fetchUserData = async (userId: string): Promise<User | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${userId}`);

    if (!res.ok) {
      throw new Error("Error al obtener los datos del usuario");
    }

    return await res.json();
  } catch (e) {
    console.error("Error al obtener los datos del usuario session:", e);
    return null;
  }
};
