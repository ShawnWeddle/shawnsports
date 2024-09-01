import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { rankRouter } from "./routers/rank";
import { scheduleRouter } from "./routers/schedule";

export const appRouter = createTRPCRouter({
  user: userRouter,
  rank: rankRouter,
  schedule: scheduleRouter,
});

export type AppRouter = typeof appRouter;
