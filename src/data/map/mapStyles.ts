import type { SportType, LeagueType } from "~/data/map/mapData";
import { SportList, FullLeagueList, convertLeagueToSport } from "~/data/map/mapData";

export const leagueStyles = (league: LeagueType) => {
  switch(league){
    case "NFL":
      return "text-nfl border-nfl"
    case "CFL":
      return "text-cfl border-cfl"
    case "UFL":
      return "text-ufl border-ufl"
    case "IFL":
      return "text-ifl border-ifl"
    case "NBA":
      return "text-nba border-nba"
    case "NGL":
      return "text-ngl border-ngl"
    case "WNBA":
      return "text-wnba border-wnba"
    case "NHL":
      return "text-nhl border-nhl"
    case "AHL":
      return "text-ahl border-ahl"
    case "ECHL":
      return "text-echl border-echl"
    case "PWHL":
      return "text-pwhl border-pwhl"
    case "MLB":
      return "text-mlb border-mlb"
    case "AAA":
      return "text-aaa border-aaa"
    case "AA":
      return "text-aa border-aa"
    case "HA":
      return "text-higha border-higha"
    case "SA":
      return "text-singlea border-singlea"
    case "MLS":
      return "text-mls border-mls"
  }
}