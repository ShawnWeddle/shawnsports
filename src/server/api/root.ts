import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { rankRouter } from "./routers/rank";

export const appRouter = createTRPCRouter({
  user: userRouter,
  rank: rankRouter,
});

export type AppRouter = typeof appRouter;
