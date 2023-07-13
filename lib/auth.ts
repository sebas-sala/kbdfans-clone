import { User } from "@/types/db"

export const fetchUserData = async (): Promise<User | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/user")
    const user = (await response.json()) as User
    return user
  } catch (e) {
    console.log("Error al obtener los datos del usuario:", e)
    return null
  }
}
