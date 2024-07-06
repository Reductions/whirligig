import { type Prisma } from "@prisma/client";
import { db } from "../db";

export const updateDev = async (id: number, data: Prisma.DevUpdateInput) => {
  "use server";
  return await db.dev.update({
    where: {
      id,
    },
    data,
  });
};
