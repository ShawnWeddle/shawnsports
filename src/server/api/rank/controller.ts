import { type CreateRankInput } from "./schema";
import { createRank } from "./service";

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