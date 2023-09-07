import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { z } from "zod";

import { findUserById } from "@/actions/user-actions";

const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
});

export async function GET(req: Request) {
  try {
    const supabase = createServerComponentClient({ cookies });

    const { searchParams } = new URL(req.url);

    const { email, password } = loginUserSchema.parse(
      Object.fromEntries(searchParams)
    );

    console.log(email, password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "User not found" }, { status: 500 });
    }

    const userInfo = await findUserById(data.user.id);

    if (!userInfo) {
      return NextResponse.json({ error: "User not found" }, { status: 500 });
    }

    return NextResponse.json({
      user: userInfo,
      message: "Login Successful",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error signing up" }, { status: 500 });
  }
}
