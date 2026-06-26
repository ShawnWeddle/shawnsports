import type { SportType, LeagueType } from "~/data/map/mapData";
import { SportList, FullLeagueList, convertLeagueToSport } from "~/data/map/mapData";

export const leagueStyles = (league: LeagueType, type: "T" | "B") => {
  if(type === "T"){
    switch(league){
      case "NFL":
        return "text-nfl"
      case "CFL":
        return "text-cfl"
      case "UFL":
        return "text-ufl"
      case "IFL":
        return "text-ifl"
      case "NBA":
        return "text-nba"
      case "NGL":
        return "text-ngl"
      case "WNBA":
        return "text-wnba"
      case "NHL":
        return "text-nhl"
      case "AHL":
        return "text-ahl"
      case "ECHL":
        return "text-echl"
      case "PWHL":
        return "text-pwhl"
      case "MLB":
        return "text-mlb"
      case "AAA":
        return "text-aaa"
      case "AA":
        return "text-aa"
      case "HA":
        return "text-higha"
      case "SA":
        return "text-singlea"
      case "MLS":
        return "text-mls"
    }
  } else if(type === "B") {
    switch(league){
      case "NFL":
        return "border-nfl"
      case "CFL":
        return "border-cfl"
      case "UFL":
        return "border-ufl"
      case "IFL":
        return "border-ifl"
      case "NBA":
        return "border-nba"
      case "NGL":
        return "border-ngl"
      case "WNBA":
        return "border-wnba"
      case "NHL":
        return "border-nhl"
      case "AHL":
        return "border-ahl"
      case "ECHL":
        return "border-echl"
      case "PWHL":
        return "border-pwhl"
      case "MLB":
        return "border-mlb"
      case "AAA":
        return "border-aaa"
      case "AA":
        return "border-aa"
      case "HA":
        return "border-higha"
      case "SA":
        return "border-singlea"
      case "MLS":
        return "border-mls"
    }
  }
}