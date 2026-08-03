import { type CreateFavoriteInput } from "./schema";
import { createFavorite } from "./service";

export const createFavoriteHandler = async ({
  input
} : {
  input: CreateFavoriteInput
}) => {
  try {
    const favorite = await createFavorite({
      favorite: input.favorite,
      User: {
        connect: {
          id: input.client.userId
        }
      }
    });

    return {
      status: 'success',
      data: {
        favorite
      },
    };
  } catch (error) {
    throw error;
  }
}