import { Catagory, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: Catagory): Promise<Catagory> => {
  const result = await prisma.catagory.create({
    data,
  });
  return result;
};

export const categoryServices = {
  insertIntoDB,
};
