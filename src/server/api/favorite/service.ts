import { prisma } from "~/server/db";
import type { Prisma } from '@prisma/client';

export const createFavorite = async (input: Prisma.FavoriteListCreateInput) => {
  return prisma.favoriteList.create({
    data: input,
  });
};