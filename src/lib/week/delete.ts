import { startOfWeek } from "../date-utils";
import { db } from "../db";

export const deleteWeek = async (date?: Date) => {
  return doDeleteWeek(startOfWeek(date ?? new Date()));
};

const doDeleteWeek = (startOfWeek: Date) => {
  "use server";
  db.rotationParticipation.deleteMany({
    where: { weekStartData: startOfWeek },
  });
};
