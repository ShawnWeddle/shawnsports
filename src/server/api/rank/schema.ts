import { z, object, string, array } from "zod";
import type { TypeOf } from "zod";
import { sportsNames } from "~/data/SiteData";

export const createRankSchema = object({
  sport: z.enum(sportsNames),
  order: array(string()),
  client: object({
    userId: string(),
    email: string(),
    username: string(),
  }),
});

export type CreateRankInput = TypeOf<typeof createRankSchema>;