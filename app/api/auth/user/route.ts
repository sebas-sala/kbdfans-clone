import { NextResponse } from "next/server"
import { User } from "@/types/db"
import prisma from "@/lib/prisma"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export async function GET() {
  try {
    const { data, error } = await supabase.auth.getSession()
    console.log(data)
    if (error) {
      throw new Error("Error al obtener la sesión del usuario")
    }
    if (data.session === null) {
      return null
    }
    const user: User = await prisma.user.findUnique({
      where: {
        id: data.session?.user.id,
      },
    })
    return NextResponse.json(user as User)
  } catch (e) {
    console.log("Error al obtener los datos del usuario:", e)
    return null
  } finally {
    await prisma.$disconnect()
  }
}
