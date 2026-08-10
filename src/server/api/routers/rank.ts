import { createRankSchema, findRankSchema } from "../rank/schema";
import { createRankHandler, findUserRankHandler, updateRankHandler } from "../rank/controller";

import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";

export const rankRouter = createTRPCRouter({
  createRank: privateProcedure
  .input(createRankSchema)
  .mutation(({ input }) => createRankHandler({ input })),

  updateRank: privateProcedure
  .input(createRankSchema)
  .mutation(({ input }) => updateRankHandler({ input })),

  findRank: publicProcedure
  .input(findRankSchema)
  .query(({input})=> findUserRankHandler({input})),
});