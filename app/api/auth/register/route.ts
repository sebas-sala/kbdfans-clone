import prisma from "@/lib/prisma"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { NextApiResponse, NextApiRequest } from "next"

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
  password: z.string().min(6, "Password should be minimum 5 characters"),
})

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, username } = registerUserSchema.parse(req.body)
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (user) {
    return res.status(400).json({ message: "User already exists" })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await prisma.user.create({
    data: {
      email,
      username: username,
      password: hashedPassword,
    },
  })

  return NextResponse.json({
    user: newUser,
    message: "User created successfully",
  })
}
