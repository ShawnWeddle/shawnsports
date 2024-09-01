import { z, object, string, array, number, boolean, literal } from "zod";
import type { TypeOf } from "zod";
import { nflTeamsRanked } from "~/data/NFL/NFLdata";

export const createScheduleSchema = object({
  sport: literal("NFL"),
  schedule: array(object({
    Away: z.enum(nflTeamsRanked), 
    Home: z.enum(nflTeamsRanked), 
    Week: number(), 
    Winner: z.enum(nflTeamsRanked), 
    Code: string(), 
    readOnly: boolean(),
  })),
  client: object({
    userId: string(),
    email: string(),
    username: string(),
  }),
});

export type CreateScheduleInput = TypeOf<typeof createScheduleSchema>;