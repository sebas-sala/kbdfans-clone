import { NextResponse } from "next/server"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { z } from "zod"
import prisma from "@/lib/prisma"

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().min(4, "Invalid username"),
  password: z.string().min(6, "Password should be minimum 6 characters"),
})

const supabase = createClientComponentClient()

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(req: Request, res: Response) {
  try {
    const requestData = await req.json()
    console.log(requestData)
    const { email, username, password } = registerUserSchema.parse(requestData)
    console.log(email)
    const findUser = await prisma.user.findUnique({
      where: { email },
    })

    console.log(findUser)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    console.log(data)
    if (error) {
      console.error(error)
      return NextResponse.json({ error: "Error signing up" }, { status: 500 })
    }

    const newUser = await prisma.user.create({
      data: {
        id: data.user?.id,
        email,
        username: username,
      },
    })

    return NextResponse.json({
      user: newUser,
      message: "User created successfully",
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Error signing up" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
