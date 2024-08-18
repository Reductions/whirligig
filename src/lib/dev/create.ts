import { type Prisma } from "@prisma/client";
import { db } from "../db";

type Data = Omit<Prisma.DevCreateInput, "currentTeam"> & {
  currentTeam: Prisma.TeamWhereUniqueInput['id'];
};

export const createDev = async (data: Data) => {
  "use server";
  return await db.dev.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      techLead: data.techLead,
      currentTeam: { connect: { id: data.currentTeam } },
    },
  });
};
