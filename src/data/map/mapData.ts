import type { LeagueTeamListType } from "~/types/MapTypes";

export const FullLeagueList = [
  "NFL", "CFL", "UFL", "IFL",
  "NBA", "NGL", "WNBA",
  "NHL", "AHL", "ECHL", "PWHL",
  "MLB", "AAA", "AA", "HA", "SA",
  "MLS", "MLV",
] as const;

export const sportList = [
  "Football", "Basketball", "Baseball", "Hockey", "Soccer", "Volleyball",
] as const;

export const sportLeagueList: {
  [Key in SportType] : LeagueType[]
} = {
  "Baseball": ["MLB", "AAA", "AA", "HA", "SA"],
  "Basketball": ["NBA", "NGL", "WNBA"],
  "Football": ["NFL", "CFL", "IFL", "UFL"],
  "Hockey": ["NHL", "AHL", "ECHL", "PWHL"],
  "Soccer": ["MLS"],
  "Volleyball": ["MLV"],
}

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
    case "MLV":
      return "Volleyball";
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
    case "MLV":
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
export type SportType = typeof sportList[number];

export const initialLeagueList = (
  sport: SportType | "All"
): {
  options: Set<LeagueType>,
  start: Set<LeagueType>
} => {
  switch (sport) {
    case "Football":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Football"]),
        start: new Set<LeagueType>(["NFL", "CFL"])
      }
    case "Basketball":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Basketball"]),
        start: new Set<LeagueType>(["NBA", "WNBA"])
      }
    case "Baseball":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Baseball"]),
        start: new Set<LeagueType>(["MLB"])
      }
    case "Hockey":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Hockey"]),
        start: new Set<LeagueType>(["NHL"])
      }
    case "Soccer":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Soccer"]),
        start: new Set<LeagueType>(["MLS"])
      }
    case "Volleyball":
      return { 
        options: new Set<LeagueType>(sportLeagueList["Volleyball"]),
        start: new Set<LeagueType>(["MLV"])
      }
    case "All":
      return { options: new Set<LeagueType>([
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
        "MLV",
      ]),
      start: new Set<LeagueType>(["NFL", "NBA", "MLB", "NHL"])}
    default:
      return { 
        options: new Set<LeagueType>([]),
        start: new Set<LeagueType>([])
      }
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
  "MLV": [],
};