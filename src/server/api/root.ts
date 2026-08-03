import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { rankRouter } from "./routers/rank";
import { scheduleRouter } from "./routers/schedule";
import { favoriteRouter } from "./routers/favorite";

export const appRouter = createTRPCRouter({
  user: userRouter,
  rank: rankRouter,
  schedule: scheduleRouter,
  favorite: favoriteRouter,
});

export type AppRouter = typeof appRouter;
