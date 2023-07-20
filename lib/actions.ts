import prisma from "./prisma"

export const findUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  })
}

export const createUser = async (
  id: string,
  email: string,
  username: string
) => {
  return await prisma.user.create({
    data: {
      id,
      email,
      username,
    },
  })
}
