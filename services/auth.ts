import type { User } from "../types/db"

export const createUser = async (
  password: string,
  email: string,
  username: string
): Promise<User | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
        username,
      }),
    })

    return res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getUser = async (
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
    return res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
