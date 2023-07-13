import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import { NextApiRequest } from "next"
import { z } from "zod"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
})

const supabase = createClientComponentClient()

export async function POST(req: NextApiRequest) {
  const { email, password } = loginUserSchema.parse(req.body)

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
}
