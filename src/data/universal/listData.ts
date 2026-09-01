import { type NFLTeamType, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { type CFLTeamType, type IFLTeamType, type UFLTeamType, cflTeamsRanked, iflTeamsList, uflTeamsList } from "~/data/CFL/CFLdata";
import { type NBATeamType, nbaTeamsRanked, type NGLTeamType, nglTeamsList } from "~/data/NBA/NBAdata";
import { type WNBATeamType, wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import {
  type MLBTeamType, mlbTeamsRanked,
  type AAATeamType, AAAteamsList,
  type AATeamType, AAteamsList,
  type HATeamType, HAteamsList,
  type SATeamType, SAteamsList,
} from "~/data/MLB/MLBdata";
import {
  type NHLTeamType, nhlTeamsRanked,
  type AHLTeamType, ahlTeamsList,
  type ECHLTeamType, echlTeamsList,
  type PWHLTeamType, pwhlTeamsList,
} from "~/data/NHL/NHLdata";
import { type MLSTeamType, mlsTeamsList, uslTeamsList } from "~/data/MLS/MLSdata";
import { type MLVTeamType, mlvTeamsList } from "~/data/MLV/MLVdata";
import { type DriverCode26Type, driverCodes2026, } from "../F1/2026/F1data";
import type { LeagueTeamType } from "~/types/MapTypes";
import type { LeagueType } from "../map/mapData";

export const LeagueTeamFullList = () => {
  const nfl: LeagueTeamType[] = nflTeamsRanked.map((team) => {
    return {
      league: "NFL",
      team
    }
  });
  const cfl: LeagueTeamType[] = cflTeamsRanked.map((team) => {
    return {
      league: "CFL",
      team
    }
  });
  const ifl: LeagueTeamType[] = iflTeamsList.map((team) => {
    return {
      league: "IFL",
      team
    }
  });
  const ufl: LeagueTeamType[] = uflTeamsList.map((team) => {
    return {
      league: "UFL",
      team
    }
  });
  const nba: LeagueTeamType[] = nbaTeamsRanked.map((team) => {
    return {
      league: "NBA",
      team
    }
  });
  const wnba: LeagueTeamType[] = wnbaTeamsRanked.map((team) => {
    return {
      league: "WNBA",
      team
    }
  });
  const ngl: LeagueTeamType[] = nglTeamsList.map((team) => {
    return {
      league: "NGL",
      team
    }
  });
  const mlb: LeagueTeamType[] = mlbTeamsRanked.map((team) => {
    return {
      league: "MLB",
      team
    }
  });
  const aaa: LeagueTeamType[] = AAAteamsList.map((team) => {
    return {
      league: "AAA",
      team
    }
  });
  const aa: LeagueTeamType[] = AAteamsList.map((team) => {
    return {
      league: "AA",
      team
    }
  });
  const ha: LeagueTeamType[] = HAteamsList.map((team) => {
    return {
      league: "HA",
      team
    }
  });
  const sa: LeagueTeamType[] = SAteamsList.map((team) => {
    return {
      league: "SA",
      team
    }
  });
  const nhl: LeagueTeamType[] = nhlTeamsRanked.map((team) => {
    return {
      league: "NHL",
      team
    }
  });
  const ahl: LeagueTeamType[] = ahlTeamsList.map((team) => {
    return {
      league: "AHL",
      team
    }
  });
  const echl: LeagueTeamType[] = echlTeamsList.map((team) => {
    return {
      league: "ECHL",
      team
    }
  });
  const pwhl: LeagueTeamType[] = pwhlTeamsList.map((team) => {
    return {
      league: "PWHL",
      team
    }
  });
  const mls: LeagueTeamType[] = mlsTeamsList.map((team) => {
    return {
      league: "MLS",
      team
    }
  });
  const usl: LeagueTeamType[] = uslTeamsList.map((team) => {
    return {
      league: "USL",
      team
    }
  });
  const mlv: LeagueTeamType[] = mlvTeamsList.map((team) => {
    return {
      league: "MLV",
      team
    }
  });
    const f1: LeagueTeamType[] = driverCodes2026.map((driver) => {
    return {
      league: "F1",
      team: driver
    }
  });

  return {
    NFL: nfl,
    CFL: cfl,
    IFL: ifl,
    UFL: ufl,
    NBA: nba,
    WNBA: wnba,
    NGL: ngl,
    MLB: mlb,
    AAA: aaa,
    AA: aa,
    HA: ha,
    SA: sa,
    NHL: nhl,
    AHL: ahl,
    ECHL: echl,
    PWHL: pwhl,
    MLS: mls,
    USL: usl,
    MLV: mlv,
    F1: f1,
  }
}

export type FavoriteTeamType = {[Key in LeagueType]? : LeagueTeamType};

// export type FavoriteTeamType = {
//   NFL?: NFLTeamType;
//   CFL?: CFLTeamType;
//   IFL?: IFLTeamType;
//   UFL?: UFLTeamType;
//   NBA?: NBATeamType;
//   WNBA?: WNBATeamType;
//   NGL?: NGLTeamType;
//   MLB?: MLBTeamType;
//   AAA?: AAATeamType;
//   AA?: AATeamType;
//   HA?: HATeamType;
//   SA?: SATeamType;
//   NHL?: NHLTeamType;
//   AHL?: AHLTeamType;
//   ECHL?: ECHLTeamType;
//   PWHL?: PWHLTeamType;
//   MLS?: MLSTeamType;
//   MLV?: MLVTeamType;
//   F1?: DriverCode26Type;
// }

export const LeagueFullNames : {[Key in LeagueType] : string} = {
  NFL: "National Football League",
  CFL: "Canadian Football League",
  IFL: "Indoor Football League",
  UFL: "United Football League",
  NBA: "National Basketball Association",
  WNBA: "Women's National Basketball Association",
  NGL: "NBA G League",
  MLB: "Major League Baseball",
  AAA: "Triple-A Baseball",
  AA: "Double-A Baseball",
  HA: "High-A Baseball",
  SA: "Single-A Baseball",
  NHL: "National Hockey League",
  AHL: "American Hockey League",
  ECHL: "ECHL",
  PWHL: "Professional Women's Hockey League",
  MLS: "Major League Soccer",
  USL: "United Soccer League",
  MLV: "Major League Volleyball",
  F1: "Formula One",
}