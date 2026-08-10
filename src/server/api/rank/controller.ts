import { SportType } from "~/data/SiteData";
import type { CreateRankInput, FindRankInput } from "./schema";
import { createRank, findRank, deleteRank, deleteRanks } from "./service";
import { Prisma } from "@prisma/client";

export const createRankHandler = async ({
  input
} : {
  input: CreateRankInput
}) => {
  try {
    const rank = await createRank({
      sport: input.sport,
      order: input.order,
      User: {
        connect: {
          id: input.client.userId
        }
      }
    });

    return {
      status: 'success',
      data: {
        rank
      },
    };
  } catch (error) {
    throw error;
  }
}

export const updateRankHandler = async ({
  input
}:{
  input: CreateRankInput,
}) => {
  try {
    const XO = await deleteRanks({
      userId: input.client.userId,
      sport: input.sport
    });

    const rank = await createRank({
      sport: input.sport,
      order: input.order,
      User: {
        connect: {
          id: input.client.userId
        }
      }
    });

    return {
      status: 'success',
      data: {
        Rank: rank,
        XO,
      },
    };
  } catch (error) {
    throw error;
  }
}

export const findUserRankHandler = async({
  input
} : {
  input: FindRankInput
}) => {
  try {
    const rank = await findRank({
      ...input
    })

    return{
      status: "success",
      data: {
        rank
      }
    }
  } catch (error) {
    throw error;
  }
}

export const deleteRankHandler = async({
  input
} : {
  input: string
}) => {
  try {
    await deleteRank({
      id: input
    })

    return{
      status: "success"
    }
  } catch (error) {
    throw error;
  }
}