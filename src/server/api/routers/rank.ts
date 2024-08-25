import { createRankSchema } from "../rank/schema";
import { createRankHandler } from "../rank/controller";

import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";

export const rankRouter = createTRPCRouter({
  createRank: privateProcedure
  .input(createRankSchema)
  .mutation(({ input }) => createRankHandler({ input })),  
});