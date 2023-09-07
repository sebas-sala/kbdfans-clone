import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { findUserById } from "@/actions/user-actions";

export async function GET() {
  try {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw new Error("Error to get session");
    }
    if (!data.session) {
      console.log("prueba");
      throw new Error("No session");
    }
    const user = await findUserById(data.session.user.id);
    return NextResponse.json(user);
  } catch (e) {
    console.log("Error al obtener los datos del usuario:", e);
    return NextResponse.error();
  }
}
