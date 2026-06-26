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

export type LeagueType = typeof FullLeagueList[number];
export type SportType = typeof SportList[number];