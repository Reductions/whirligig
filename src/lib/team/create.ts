import { type Prisma } from "@prisma/client";
import { db } from "../db";

export const createTeam = async (data: Prisma.TeamCreateInput) => {
  "use server";
  return await db.team.create({
    data,
  });
};
