import { type Prisma } from "@prisma/client";
import { db } from "../db";

export const listDevs = async (data: Prisma.DevCreateInput) => {
  "use server";
  return await db.dev.findMany({ include: { currentTeam: true } });
};
