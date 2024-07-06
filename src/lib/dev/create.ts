import { type Prisma } from "@prisma/client";
import { db } from "../db";

export const createDev = async (data: Prisma.DevCreateInput) => {
  "use server";
  return await db.dev.create({
    data,
  });
};
