import type { LeagueType } from "~/data/map/mapData";

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
    case "USL":
      return "text-usl border-usl"
    case "MLV":
      return "text-mlv border-mlv"
    case "F1":
      return "text-formulaOne border-formulaOne"
    default:
      return ""
  }
}

export const leagueBackgrounds = (league: LeagueType) => {
  switch(league){
    case "NFL":
      return "bg-nfl";
    case "CFL":
      return "bg-cfl";
    case "UFL":
      return "bg-ufl";
    case "IFL":
      return "bg-ifl";
    case "NBA":
      return "bg-nba";
    case "NGL":
      return "bg-ngl";
    case "WNBA":
      return "bg-wnba";
    case "NHL":
      return "bg-nhl";
    case "AHL":
      return "bg-ahl";
    case "ECHL":
      return "bg-echl";
    case "PWHL":
      return "bg-pwhl";
    case "MLB":
      return "bg-mlb";
    case "AAA":
      return "bg-aaa";
    case "AA":
      return "bg-aa";
    case "HA":
      return "bg-higha";
    case "SA":
      return "bg-singlea";
    case "MLS":
      return "bg-mls";
    case "USL":
      return "bg-usl";
    case "MLV":
      return "bg-mlv";
    case "F1":
      return "bg-formulaOne";
    default:
      return "";
  }
}