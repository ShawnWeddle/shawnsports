import { createFavoriteSchema } from "../favorite/schema";
import { createFavoriteHandler } from "../favorite/controller";

import { createTRPCRouter, privateProcedure } from "../trpc";

export const favoriteRouter = createTRPCRouter({
  createFavorite: privateProcedure
  .input(createFavoriteSchema)
  .mutation(({ input }) => createFavoriteHandler({ input })),  
});