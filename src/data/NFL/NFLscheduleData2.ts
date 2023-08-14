import type { NFLTeamType } from "./NFLdata";

export type GameType = {
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Winner : NFLTeamType | undefined
}

export const NFLscheduleData: GameType[] = [
  {
    Away: "CAR", Home: "CHI", Week: 10, Winner: undefined,
  },{
    Away: "IND", Home: "NWE", Week: 10, Winner: undefined,
  },{
    Away: "HOU", Home: "CIN", Week: 10, Winner: undefined,
  },{
    Away: "NOR", Home: "MIN", Week: 10, Winner: undefined,
  },{
    Away: "GNB", Home: "PIT", Week: 10, Winner: undefined,
  },{
    Away: "TEN", Home: "TAM", Week: 10, Winner: undefined,
  },{
    Away: "SFO", Home: "JAX", Week: 10, Winner: undefined,
  },{
    Away: "CLE", Home: "BAL", Week: 10, Winner: undefined,
  },{
    Away: "ATL", Home: "ARI", Week: 10, Winner: undefined,
  },{
    Away: "DET", Home: "LAC", Week: 10, Winner: undefined,
  },{
    Away: "NYG", Home: "DAL", Week: 10, Winner: undefined,
  },{
    Away: "WAS", Home: "SEA", Week: 10, Winner: undefined,
  },{
    Away: "NYJ", Home: "LVR", Week: 10, Winner: undefined,
  },{
    Away: "DEN", Home: "BUF", Week: 10, Winner: undefined,
  },{
    Away: "CIN", Home: "BAL", Week: 11, Winner: undefined,
  },{
    Away: "PIT", Home: "CLE", Week: 11, Winner: undefined,
  },{
    Away: "CHI", Home: "DET", Week: 11, Winner: undefined,
  },{
    Away: "LAC", Home: "GNB", Week: 11, Winner: undefined,
  },{
    Away: "LVR", Home: "MIA", Week: 11, Winner: undefined,
  },{
    Away: "NYG", Home: "WAS", Week: 11, Winner: undefined,
  },{
    Away: "DAL", Home: "CAR", Week: 11, Winner: undefined,
  },{
    Away: "TEN", Home: "JAX", Week: 11, Winner: undefined,
  },{
    Away: "ARI", Home: "HOU", Week: 11, Winner: undefined,
  },{
    Away: "TAM", Home: "SFO", Week: 11, Winner: undefined,
  },{
    Away: "NYJ", Home: "BUF", Week: 11, Winner: undefined,
  },{
    Away: "SEA", Home: "LAR", Week: 11, Winner: undefined,
  },{
    Away: "MIN", Home: "DEN", Week: 11, Winner: undefined,
  },{
    Away: "PHI", Home: "KAN", Week: 11, Winner: undefined,
  },{
    Away: "GNB", Home: "DET", Week: 12, Winner: undefined,
  },{
    Away: "WAS", Home: "DAL", Week: 12, Winner: undefined,
  },{
    Away: "SFO", Home: "SEA", Week: 12, Winner: undefined,
  },{
    Away: "MIA", Home: "NYJ", Week: 12, Winner: undefined,
  },{
    Away: "NOR", Home: "ATL", Week: 12, Winner: undefined,
  },{
    Away: "PIT", Home: "CIN", Week: 12, Winner: undefined,
  },{
    Away: "CAR", Home: "TEN", Week: 12, Winner: undefined,
  },{
    Away: "TAM", Home: "IND", Week: 12, Winner: undefined,
  },{
    Away: "NWE", Home: "NYG", Week: 12, Winner: undefined,
  },{
    Away: "JAX", Home: "HOU", Week: 12, Winner: undefined,
  },{
    Away: "CLE", Home: "DEN", Week: 12, Winner: undefined,
  },{
    Away: "LAR", Home: "ARI", Week: 12, Winner: undefined,
  },{
    Away: "KAN", Home: "LVR", Week: 12, Winner: undefined,
  },{
    Away: "BUF", Home: "PHI", Week: 12, Winner: undefined,
  },{
    Away: "BAL", Home: "LAC", Week: 12, Winner: undefined,
  },{
    Away: "CHI", Home: "MIN", Week: 12, Winner: undefined,
  },{
    Away: "SEA", Home: "DAL", Week: 13, Winner: undefined,
  },{
    Away: "IND", Home: "TEN", Week: 13, Winner: undefined,
  },{
    Away: "LAC", Home: "NWE", Week: 13, Winner: undefined,
  },{
    Away: "DET", Home: "NOR", Week: 13, Winner: undefined,
  },{
    Away: "ATL", Home: "NYJ", Week: 13, Winner: undefined,
  },{
    Away: "ARI", Home: "PIT", Week: 13, Winner: undefined,
  },{
    Away: "CAR", Home: "TAM", Week: 13, Winner: undefined,
  },{
    Away: "MIA", Home: "WAS", Week: 13, Winner: undefined,
  },{
    Away: "DEN", Home: "HOU", Week: 13, Winner: undefined,
  },{
    Away: "CLE", Home: "LAR", Week: 13, Winner: undefined,
  },{
    Away: "SFO", Home: "PHI", Week: 13, Winner: undefined,
  },{
    Away: "KAN", Home: "GNB", Week: 13, Winner: undefined,
  },{
    Away: "CIN", Home: "JAX", Week: 13, Winner: undefined,
  },
];

/*
{
  Away: , Home: , Week: 13, Winner: undefined,
},
*/