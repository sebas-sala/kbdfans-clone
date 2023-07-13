import { NextResponse } from "next/server"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { z } from "zod"
import prisma from "@/lib/prisma"

const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
})

const supabase = createClientComponentClient()

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(req: Request) {
  try {
    const requestData = await req.json()
    console.log(requestData)
    const { email, password } = loginUserSchema.parse(requestData)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: "User not found" }, { status: 500 })
    }

    const userInfo = await prisma.user.findUnique({
      where: {
        id: data.user.id,
      },
    })

    return NextResponse.json({
      user: userInfo,
      message: "Login Successful",
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Error signing up" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
