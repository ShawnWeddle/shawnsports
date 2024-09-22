import { driverCodes2024 } from "~/data/F1/2024/F1data24";
import { cflTeamsRanked } from "~/data/CFL/CFLdata";
import { mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { allMLSteams } from "~/data/MLS/MLSdata";
import { nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { nflTeamsRanked } from "~/data/NFL/NFLdata";
import { nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import { type SportType } from "~/data/SiteData"

export const initialValues: { [Key in SportType] : string[]} = {
  CFL: [...cflTeamsRanked] as string[],
  F1: [...driverCodes2024] as string[],
  MLB: [...mlbTeamsRanked] as string[],
  MLS: [...allMLSteams] as string[],
  NBA: [...nbaTeamsRanked] as string[],
  NFL: [...nflTeamsRanked] as string[],
  NHL: [...nhlTeamsRanked] as string[],
  WNBA: [...wnbaTeamsRanked] as string[],
};

export const nullArray: { [Key in SportType] : null[]} = {
  CFL:[
    null, null, null, null, null, null, null, null, null, 
  ],
  F1:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, 
  ],
  MLB:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, 
  ],
  MLS:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, 
  ],
  NBA:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null,
  ],
  NFL:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
  ],
  NHL:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
  ],
  WNBA:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null,
  ],
}