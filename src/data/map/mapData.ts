import type { LeagueTeamListType } from "~/types/MapTypes";

export const FullLeagueList = [
  "NFL", "CFL", "UFL", "IFL",
  "NBA", "NGL", "WNBA",
  "NHL", "AHL", "ECHL", "PWHL",
  "MLB", "AAA", "AA", "HA", "SA",
  "MLS", 
] as const;

export const SportList = [
  "Football", "Basketball", "Baseball", "Hockey", "Soccer",
] as const;

export const convertLeagueToSport = (league: LeagueType): SportType => {
  switch(league){
    case "NFL":
    case "CFL":
    case "UFL":
    case "IFL":
      return "Football";
    case "NBA":
    case "NGL":
    case "WNBA":
      return "Basketball";
    case "NHL":
    case "AHL":
    case "ECHL":
    case "PWHL":
      return "Hockey";
    case "MLB":
    case "AAA":
    case "AA":
    case "HA":
    case "SA":
      return "Baseball";
    case "MLS":
      return "Soccer";
  }
}

export const lengthenLeagueName = (league: LeagueType): string => {
  switch(league){
    case "NFL":
    case "CFL":
    case "NBA":
    case "WNBA":
    case "NHL":
    case "AHL":
    case "ECHL":
    case "PWHL":
    case "MLB":
    case "AAA":
    case "AA":
    case "MLS":
      return league;
    case "UFL":
      return "United FL";
    case "IFL":
      return "Indoor FL";
    case "HA":
      return "High-A";
    case "SA":
      return "Single-A";
    case "NGL":
      return "G League";
  }
}

export type LeagueType = typeof FullLeagueList[number];
export type SportType = typeof SportList[number];

export const initialLeagueList = (
  sport: SportType | "All"
): Set<LeagueType> => {
  switch (sport) {
    case "Football":
      return new Set<LeagueType>(["NFL", "CFL", "IFL", "UFL"]);
    case "Basketball":
      return new Set<LeagueType>(["NBA", "NGL", "WNBA"]);
    case "Baseball":
      return new Set<LeagueType>(["MLB", "AAA", "AA", "HA", "SA"]);
    case "Hockey":
      return new Set<LeagueType>(["NHL", "AHL", "ECHL", "PWHL"]);
    case "Soccer":
      return new Set<LeagueType>(["MLS"]);
    case "All":
      return new Set<LeagueType>([
        "NFL",
        "CFL",
        "IFL",
        "UFL",
        "NBA",
        "NGL",
        "WNBA",
        "MLB",
        "AAA",
        "AA",
        "HA",
        "SA",
        "NHL",
        "AHL",
        "ECHL",
        "PWHL",
        "MLS",
      ]);
    default:
      return new Set<LeagueType>();
  }
};

export const LeagueTeamList: LeagueTeamListType = {
  "NFL": [],
  "CFL": [],
  "IFL": [],
  "UFL": [],
  "NBA": [],
  "WNBA": [],
  "NGL": [],
  "MLB": [],
  "AAA": [],
  "AA": [],
  "HA": [],
  "SA": [],
  "NHL": [],
  "AHL": [],
  "ECHL": [],
  "PWHL": [],
  "MLS": [],
};