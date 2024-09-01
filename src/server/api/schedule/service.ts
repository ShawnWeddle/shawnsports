import { prisma } from "~/server/db";
import type { Prisma } from '@prisma/client';

export const createSchedule = async (input: Prisma.ScheduleCreateInput) => {
  return prisma.schedule.create({
    data: input,
  });
};