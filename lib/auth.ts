import { fetchUserData } from "@/services/auth-services";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { z } from "zod";

const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be minimum 6 characters"),
});

export async function loginWithEmailAndPassword(
  userEmail: string,
  userPassword: string
) {
  try {
    const supabase = createClientComponentClient();

    const { email, password } = loginUserSchema.parse({
      email: userEmail,
      password: userPassword,
    });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    const user = await fetchUserData();

    return user;
  } catch (e) {
    console.error(e);
    throw new Error("Error to login user");
  }
}
