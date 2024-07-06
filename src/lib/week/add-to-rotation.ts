import { startOfWeek } from "../date-utils";
import { db } from "../db";

export const addDevToRotation = async (devId: number, date?: Date) => {
  "use server";
  return updateRotation(devId, startOfWeek(date ?? new Date()), {
    onRotation: true,
  });
};

export const removeDevFromRotation = async (devId: number, date?: Date) => {
  "use server";
  return updateRotation(devId, startOfWeek(date ?? new Date()), {
    onRotation: false,
  });
};

type RotationUpdate = {
  onRotation: boolean;
};

const updateRotation = (
  devId: number,
  startOfWeek: Date,
  update: RotationUpdate,
) => {
  db.rotationParticipation.update({
    where: {
      weekStartData_devId: {
        devId,
        weekStartData: startOfWeek,
      },
    },
    data: {
      ...update,
    },
  });
};
