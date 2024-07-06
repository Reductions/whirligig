import { startOfWeek } from "../date-utils";
import { db } from "../db";

export const createWeek = async (date?: Date) => {
  return doCreateWeek(startOfWeek(date ?? new Date()));
};

const doCreateWeek = (startOfWeek: Date) => {
  "use server";
  db.$transaction(async (tx) => {
    const devs = await tx.dev.findMany({
      where: {
        techLead: false,
        active: true,
      },
      include: { currentTeam: true },
    });

    for (const dev of devs) {
      tx.rotationParticipation.create({
        data: {
          weekStartData: startOfWeek,
          devId: dev.id,
          teamId: dev.currentTeam.id,
        },
      });
    }
  });
};
