import { prisma } from "~/server/db";
import type { Prisma } from '@prisma/client';

export const createRank = async (input: Prisma.RankCreateInput) => {
  return prisma.rank.create({
    data: input,
  });
};