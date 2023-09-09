import { type User } from "@/types/db";

export const fetchUserData = async (): Promise<User | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/user");

    if (!res.ok) {
      throw new Error("Error al obtener los datos del usuario");
    }

    return await res.json();
  } catch (e) {
    console.error("Error al obtener los datos del usuario session:", e);
    return null;
  }
};

export const fetchUserByEmailAndPassword = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/auth/login?email=" +
        email +
        "&password=" +
        password
    );

    if (!res.ok) throw new Error("Error al iniciar sesión");

    const data = await res.json();

    return data.user;
  } catch (e) {
    console.error(e);
    throw new Error("Error al iniciar sesión");
  }
};

export const createUser = async (
  email: string,
  password: string,
  username: string
): Promise<User | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });

    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};
