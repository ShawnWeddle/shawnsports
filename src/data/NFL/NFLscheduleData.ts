import type { NFLTeamType } from "./NFLdata";

export type GameType = {
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Winner? : NFLTeamType | undefined
}

export type NFLScheduleType = typeof NFLscheduleData;

export const NFLscheduleData: GameType[] = [
  {
    Away: "DET", Home: "KAN", Week: 1, Winner : undefined,
  },{
    Away: "CAR", Home: "ATL", Week: 1, Winner : undefined,
  },{
    Away: "CIN", Home: "CLE", Week: 1, Winner : undefined,
  },{
    Away: "JAX", Home: "IND", Week: 1, Winner : undefined,
  },{
    Away: "TAM", Home: "MIN", Week: 1, Winner : undefined,
  },{
    Away: "TEN", Home: "NOR", Week: 1, Winner : undefined,
  },{
    Away: "SFO", Home: "PIT", Week: 1, Winner : undefined,
  },{
    Away: "ARI", Home: "WAS", Week: 1, Winner : undefined,
  },{
    Away: "HOU", Home: "BAL", Week: 1, Winner : undefined,
  },{
    Away: "GNB", Home: "CHI", Week: 1, Winner : undefined,
  },{
    Away: "LVR", Home: "DEN", Week: 1, Winner : undefined,
  },{
    Away: "PHI", Home: "NWE", Week: 1, Winner : undefined,
  },{
    Away: "MIA", Home: "LAC", Week: 1, Winner : undefined,
  },{
    Away: "LAR", Home: "SEA", Week: 1, Winner : undefined,
  },{
    Away: "DAL", Home: "NYG", Week: 1, Winner : undefined,
  },{
    Away: "BUF", Home: "NYJ", Week: 1, Winner : undefined,
  },{
    Away: "MIN", Home: "PHI", Week: 2, Winner : undefined,
  },{
    Away: "GNB", Home: "ATL", Week: 2, Winner : undefined,
  },{
    Away: "LVR", Home: "BUF", Week: 2, Winner : undefined,
  },{
    Away: "BAL", Home: "CIN", Week: 2, Winner : undefined,
  },{
    Away: "SEA", Home: "DET", Week: 2, Winner : undefined,
  },{
    Away: "LAC", Home: "TEN", Week: 2, Winner : undefined,
  },{
    Away: "CHI", Home: "TAM", Week: 2, Winner : undefined,
  },{
    Away: "KAN", Home: "JAX", Week: 2, Winner : undefined,
  },{
    Away: "IND", Home: "HOU", Week: 2, Winner : undefined,
  },{
    Away: "SFO", Home: "LAR", Week: 2, Winner : undefined,
  },{
    Away: "NYG", Home: "ARI", Week: 2, Winner : undefined,
  },{
    Away: "NYJ", Home: "DAL", Week: 2, Winner : undefined,
  },{
    Away: "WAS", Home: "DEN", Week: 2, Winner : undefined,
  },{
    Away: "MIA", Home: "NWE", Week: 2, Winner : undefined,
  },{
    Away: "NOR", Home: "CAR", Week: 2, Winner : undefined,
  },{
    Away: "CLE", Home: "PIT", Week: 2, Winner : undefined,
  },{
    Away: "NYG", Home: "SFO", Week: 3, Winner : undefined,
  },{
    Away: "TEN", Home: "CLE", Week: 3, Winner : undefined,
  },{
    Away: "ATL", Home: "DET", Week: 3, Winner : undefined,
  },{
    Away: "NOR", Home: 'GNB', Week: 3, Winner : undefined,
  },{
    Away: "DEN", Home: "MIA", Week: 3, Winner : undefined,
  },{
    Away: "LAC", Home: "MIN", Week: 3, Winner : undefined,
  },{
    Away: "NWE", Home: "NYJ", Week: 3, Winner : undefined,
  },{
    Away: "BUF", Home: "WAS", Week: 3, Winner : undefined,
  },{
    Away: "HOU", Home: "JAX", Week: 3, Winner : undefined,
  },{
    Away: "IND", Home: "BAL", Week: 3, Winner : undefined,
  },{
    Away: "CAR", Home: "SEA", Week: 3, Winner : undefined,
  },{
    Away: "CHI", Home: "KAN", Week: 3, Winner : undefined,
  },{
    Away: "DAL", Home: "ARI", Week: 3, Winner : undefined,
  },{
    Away: "PIT", Home: "LVR", Week: 3, Winner : undefined,
  },{
    Away: "PHI", Home: "TAM", Week: 3, Winner : undefined,
  },{
    Away: "LAR", Home: "CIN", Week: 3, Winner : undefined,
  },{
    Away: "DET", Home: "GNB", Week: 4, Winner : undefined,
  },{
    Away: "ATL", Home: "JAX", Week: 4, Winner : undefined,
  },{
    Away: "MIA", Home: "BUF", Week: 4, Winner : undefined,
  },{
    Away: "DEN", Home: "CHI", Week: 4, Winner : undefined,
  },{
    Away: "BAL", Home: "CLE", Week: 4, Winner : undefined,
  },{
    Away: "CIN", Home: "TEN", Week: 4, Winner : undefined,
  },{
    Away: "LAR", Home: "IND", Week: 4, Winner : undefined,
  },{
    Away: "TAM", Home: "NOR", Week: 4, Winner : undefined,
  },{
    Away: "WAS", Home: "PHI", Week: 4, Winner : undefined,
  },{
    Away: "MIN", Home: "CAR", Week: 4, Winner : undefined,
  },{
    Away: "PIT", Home: "HOU", Week: 4, Winner : undefined,
  },{
    Away: "LVR", Home: "LAC", Week: 4, Winner : undefined,
  },{
    Away: "NWE", Home: "DAL", Week: 4, Winner : undefined,
  },{
    Away: "ARI", Home: "SFO", Week: 4, Winner : undefined,
  },{
    Away: "KAN", Home: "NYJ", Week: 4, Winner : undefined,
  },{
    Away: "SEA", Home: "NYG", Week: 4, Winner : undefined,
  },{
    Away: "CHI", Home: "WAS", Week: 5, Winner: undefined,
  },{
    Away: "JAX", Home: "BUF", Week: 5, Winner: undefined,
  },{
    Away: "HOU", Home: "ATL", Week: 5, Winner: undefined,
  },{
    Away: "CAR", Home: "DET", Week: 5, Winner: undefined,
  },{
    Away: "TEN", Home: "IND", Week: 5, Winner: undefined,
  },{
    Away: "NYG", Home: "MIA", Week: 5, Winner: undefined,
  },{
    Away: "NOR", Home: "NWE", Week: 5, Winner: undefined,
  },{
    Away: "BAL", Home: "PIT", Week: 5, Winner: undefined,
  },{
    Away: "PHI", Home: "LAR", Week: 5, Winner: undefined,
  },{
    Away: "CIN", Home: "ARI", Week: 5, Winner: undefined,
  },{
    Away: "NYJ", Home: "DEN", Week: 5, Winner: undefined,
  },{
    Away: "KAN", Home: "MIN", Week: 5, Winner: undefined,
  },{
    Away: "DAL", Home: "SFO", Week: 5, Winner: undefined,
  },{
    Away: "GNB", Home: "LVR", Week: 5, Winner: undefined,
  },{
    Away: "DEN", Home: "KAN", Week: 6, Winner: undefined,
  },{
    Away: "BAL", Home: "TEN", Week: 6, Winner: undefined,
  },{
    Away: "WAS", Home: "ATL", Week: 6, Winner: undefined,
  },{
    Away: "MIN", Home: "CHI", Week: 6, Winner: undefined,
  },{
    Away: "SEA", Home: "CIN", Week: 6, Winner: undefined,
  },{
    Away: "SFO", Home: "CLE", Week: 6, Winner: undefined,
  },{
    Away: "CAR", Home: "MIA", Week: 6, Winner: undefined,
  },{
    Away: "DET", Home: "TAM", Week: 6, Winner: undefined,
  },{
    Away:"IND" , Home: "JAX", Week: 6, Winner: undefined,
  },{
    Away: "NOR", Home: "HOU", Week: 6, Winner: undefined,
  },{
    Away: "NWE", Home: "LVR", Week: 6, Winner: undefined,
  },{
    Away: "ARI", Home: "LAR", Week: 6, Winner: undefined,
  },{
    Away: "PHI", Home: "NYJ", Week: 6, Winner: undefined,
  },{
    Away: "NYG", Home: "BUF", Week: 6, Winner: undefined,
  },{
    Away: "DAL", Home: "LAC", Week: 6, Winner: undefined,
  },{
    Away: "JAX", Home: "NOR", Week: 7, Winner: undefined,
  },{
    Away: "LVR", Home: "CHI", Week: 7, Winner: undefined,
  },{
    Away: "CLE", Home: "IND", Week: 7, Winner: undefined,
  },{
    Away: "BUF", Home: "NWE", Week: 7, Winner: undefined,
  },{
    Away: "WAS", Home: "NYG", Week: 7, Winner: undefined,
  },{
    Away: "ATL", Home: "TAM", Week: 7, Winner: undefined,
  },{
    Away: "DET", Home: "BAL", Week: 7, Winner: undefined,
  },{
    Away: "PIT", Home: "LAR", Week: 7, Winner: undefined,
  },{
    Away: "ARI", Home: "SEA", Week: 7, Winner: undefined,
  },{
    Away: "GNB", Home: "DEN", Week: 7, Winner: undefined,
  },{
    Away: "LAC", Home: "KAN", Week: 7, Winner: undefined,
  },{
    Away: "MIA", Home: "PHI", Week: 7, Winner: undefined,
  },{
    Away: "SFO", Home: "MIN", Week: 7, Winner: undefined,
  },
];

/*
{
  Away: , Home: , Week: 5, Winner: undefined,
},
*/