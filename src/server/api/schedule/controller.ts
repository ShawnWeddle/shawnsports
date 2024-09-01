import { type CreateScheduleInput } from "./schema";
import { createSchedule } from "./service";

export const createScheduleHandler = async ({
  input
} : {
  input: CreateScheduleInput
}) => {
  try {
    const schedule = await createSchedule({
      sport: input.sport,
      schedule: input.schedule,
      User: {
        connect: {
          id: input.client.userId
        }
      }
    });

    return {
      status: 'success',
      data: {
        schedule
      },
    };
  } catch (error) {
    throw error;
  }
}