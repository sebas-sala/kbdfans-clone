import prisma from "@/lib/prisma"
import { z } from "zod"
import argon2 from "argon2"
import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
})

export async function POST(req: NextApiRequest) {
  const { email, password } = loginUserSchema.parse(req.body)
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (!user) {
    return NextResponse.json({
      message: "User not found",
    })
  }
  const hashedPassword = await argon2.verify(password, user.password)
  if (!hashedPassword)
    return NextResponse.json({
      message: "Invalid password",
    })

  return NextResponse.json({
    user,
    message: "Login Successful",
  })
}
