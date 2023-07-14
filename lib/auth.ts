import { User } from "@/types/db"

export const fetchUserData = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/user")
    const user = (await response.json()) as User
    console.log(user)
    return user
  } catch (e) {
    console.log("Error al obtener los datos del usuario session:", e)
    return null
  }
}
