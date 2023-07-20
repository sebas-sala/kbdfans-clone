import { NextResponse } from "next/server"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import prisma from "@/lib/prisma"
import { findUserById } from "@/lib/actions"

const supabase = createClientComponentClient()

export async function GET() {
  try {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      throw new Error("Error to get session")
    }
    if (!data.session) {
      console.log("prueba")
      throw new Error("No session")
    }
    const user = await findUserById(data.session.user.id)
    return NextResponse.json(user)
  } catch (e) {
    console.log("Error al obtener los datos del usuario:", e)
    return null
  } finally {
    await prisma.$disconnect()
  }
}
