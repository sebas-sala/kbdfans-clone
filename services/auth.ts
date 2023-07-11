import { User } from "../types/db"

export const createUser = async (
  password: User,
  email: User,
  username: User
) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/register", {
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
