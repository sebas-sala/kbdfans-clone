import prisma from "@/lib/prisma"
import { z } from "zod"
import { NextResponse } from "next/server"
import { NextApiResponse, NextApiRequest } from "next"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
})

const supabase = createClientComponentClient()

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password, username } = registerUserSchema.parse(req.body)
    const findUser = await prisma.user.findUnique({
      where: { email },
    })
    if (findUser) {
      return res.status(400).json({ message: "User already exists" })
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
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

export async function GET() {
  const users = await prisma.user.findMany()
  return users
}
