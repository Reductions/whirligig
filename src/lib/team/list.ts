import { db } from "../db";

export const listTeams = async () => {
  "use server";
  return await db.team.findMany({ orderBy: [{ name: "asc" }] });
};
