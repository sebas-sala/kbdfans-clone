import prisma from "@/lib/prisma";

export const findUserById = async (userId: string) => {
  return await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email,
    },
  });
};
