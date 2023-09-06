import { NextResponse } from "next/server"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { createUser, findUserByEmail } from "@/lib/actions"

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().min(4, "Invalid username"),
  password: z.string().min(6, "Password should be minimum 6 characters"),
})

const supabase = createClientComponentClient()

export async function POST(req: Request) {
  try {
    const requestData = await req.json()
    const { email, username, password } = registerUserSchema.parse(requestData)

    console.log({ email, username, password })

    const findUser = await findUserByEmail(email)
    if (findUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error || !data.user) {
      console.error(error)
      return NextResponse.json({ error: "Error signing up" }, { status: 500 })
    }

    const newUser = await createUser(data.user.id, email, username)

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
