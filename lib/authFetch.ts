import { type User } from "@/types/db"

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

export const fetchUserByEmailAndPassword = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await res.json()
    return data.user
  } catch (e) {
    console.error(e)
    return null
  }
}

export const createUser = async (
  email: string,
  password: string,
  username: string
): Promise<User | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    })

    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
