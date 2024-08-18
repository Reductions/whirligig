import { db } from "../db";

export const listDevs = async () => {
  "use server";
  return await db.dev.findMany({ include: { currentTeam: true } });
};
