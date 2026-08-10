import { prisma } from "~/server/db";
import type { Prisma, Rank } from '@prisma/client';

export const createRank = async (input: Prisma.RankCreateInput) => {
  return prisma.rank.create({
    data: input,
  });
};

export const findRank = async (
  where: Prisma.RankWhereInput,
  select?: Prisma.RankSelect
) => {
  return (await prisma.rank.findFirst({
    where,
    select,
  })) as Rank;
};

export const deleteRank = async (
  where: Prisma.RankWhereUniqueInput
) => {
  return ( await prisma.rank.delete({where}));
}

export const deleteRanks = async (
  where: Prisma.RankWhereInput
) => {
  return ( await prisma.rank.deleteMany({where}));
}