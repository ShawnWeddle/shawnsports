import { z, object, string, array } from "zod";
import type { TypeOf } from "zod";
import { driverCodes2026 } from "~/data/F1/2026/F1data";
import { nflTeamsRanked } from "~/data/NFL/NFLdata";
import { nbaTeamsRanked, nglTeamsList } from "~/data/NBA/NBAdata";
import { mlbTeamsRanked, AAAteamsList, AAteamsList, HAteamsList, SAteamsList } from "~/data/MLB/MLBdata";
import { nhlTeamsRanked, ahlTeamsList, echlTeamsList, pwhlTeamsList } from "~/data/NHL/NHLdata";
import { mlsTeamsList } from "~/data/MLS/MLSdata";
import { wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import { cflTeamsRanked, uflTeamsList, iflTeamsList } from "~/data/CFL/CFLdata";
import { mlvTeamsList } from "~/data/MLV/MLVdata";

export const createFavoriteSchema = object({
  favorite: object({
    F1: z.enum(driverCodes2026).nullable(),
    NFL: z.enum(nflTeamsRanked).nullable(), 
    NBA: z.enum(nbaTeamsRanked).nullable(),
    MLB: z.enum(mlbTeamsRanked).nullable(),
    NHL: z.enum(nhlTeamsRanked).nullable(),
    MLS: z.enum(mlsTeamsList).nullable(),
    WNBA: z.enum(wnbaTeamsRanked).nullable(),
    CFL: z.enum(cflTeamsRanked).nullable(),
    UFL: z.enum(uflTeamsList).nullable(),
    IFL: z.enum(iflTeamsList).nullable(),
    NGL: z.enum(nglTeamsList).nullable(),
    AAA: z.enum(AAAteamsList).nullable(),
    AA: z.enum(AAteamsList).nullable(),
    HA: z.enum(HAteamsList).nullable(),
    SA: z.enum(SAteamsList).nullable(),
    AHL: z.enum(ahlTeamsList).nullable(),
    ECHL: z.enum(echlTeamsList).nullable(),
    PWHL: z.enum(pwhlTeamsList).nullable(),
    MLV: z.enum(mlvTeamsList).nullable(),
  }),
  client: object({
    userId: string(),
    email: string(),
    username: string(),
  }),
});

export type CreateFavoriteInput = TypeOf<typeof createFavoriteSchema>;