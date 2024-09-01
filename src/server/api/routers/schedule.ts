import { createScheduleSchema } from "../schedule/schema";
import { createScheduleHandler } from "../schedule/controller";

import { createTRPCRouter, privateProcedure } from "../trpc";

export const scheduleRouter = createTRPCRouter({
  createSchedule: privateProcedure
  .input(createScheduleSchema)
  .mutation(({ input }) => createScheduleHandler({ input })),  
});