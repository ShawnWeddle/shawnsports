import type { NFLTeamType } from "./NFLdata";

export type GameType = {
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Code: string,
  Winner : NFLTeamType | undefined
}

export type GameWinner = Pick<GameType, "Code" | "Winner">

export type NFLScheduleType = typeof NFLscheduleData;

export const NFLscheduleData: GameType[] = [
  {
    Away: "DET", Home: "KAN", Week: 1, Code: "DET-KAN-001", Winner: undefined,
  },{
    Away: "CAR", Home: "ATL", Week: 1, Code: "CAR-ATL-001", Winner: undefined,
  },{
    Away: "CIN", Home: "CLE", Week: 1, Code: "CIN-CLE-001", Winner: undefined,
  },{
    Away: "JAX", Home: "IND", Week: 1, Code: "JAX-IND-001", Winner: undefined,
  },{
    Away: "TAM", Home: "MIN", Week: 1, Code: "TAM-MIN-001", Winner: undefined,
  },{
    Away: "TEN", Home: "NOR", Week: 1, Code: "TEN-NOR-001", Winner: undefined,
  },{
    Away: "SFO", Home: "PIT", Week: 1, Code: "SFO-PIT-001", Winner: undefined,
  },{
    Away: "ARI", Home: "WAS", Week: 1, Code: "ARI-WAS-001", Winner: undefined,
  },{
    Away: "HOU", Home: "BAL", Week: 1, Code: "HOU-BAL-001", Winner: undefined,
  },{
    Away: "GNB", Home: "CHI", Week: 1, Code: "GNB-CHI-001", Winner: undefined,
  },{
    Away: "LVR", Home: "DEN", Week: 1, Code: "LVR-DEN-001", Winner: undefined,
  },{
    Away: "PHI", Home: "NWE", Week: 1, Code: "PHI-NWE-001", Winner: undefined,
  },{
    Away: "MIA", Home: "LAC", Week: 1, Code: "MIA-LAC-001", Winner: undefined,
  },{
    Away: "LAR", Home: "SEA", Week: 1, Code: "LAR-SEA-001", Winner: undefined,
  },{
    Away: "DAL", Home: "NYG", Week: 1, Code: "DAL-NYG-001", Winner: undefined,
  },{
    Away: "BUF", Home: "NYJ", Week: 1, Code: "BUF-NYJ-001", Winner: undefined,
  },{
    Away: "MIN", Home: "PHI", Week: 2, Code: "MIN-PHI-002", Winner: undefined,
  },{
    Away: "GNB", Home: "ATL", Week: 2, Code: "GNB-ATL-002", Winner: undefined,
  },{
    Away: "LVR", Home: "BUF", Week: 2, Code: "LVR-BUF-002", Winner: undefined,
  },{
    Away: "BAL", Home: "CIN", Week: 2, Code: "BAL-CIN-002", Winner: undefined,
  },{
    Away: "SEA", Home: "DET", Week: 2, Code: "SEA-DET-002", Winner: undefined,
  },{
    Away: "LAC", Home: "TEN", Week: 2, Code: "LAC-TEN-002", Winner: undefined,
  },{
    Away: "CHI", Home: "TAM", Week: 2, Code: "CHI-TAM-002", Winner: undefined,
  },{
    Away: "KAN", Home: "JAX", Week: 2, Code: "KAN-JAX-002", Winner: undefined,
  },{
    Away: "IND", Home: "HOU", Week: 2, Code: "IND-HOU-002", Winner: undefined,
  },{
    Away: "SFO", Home: "LAR", Week: 2, Code: "SFO-LAR-002", Winner: undefined,
  },{
    Away: "NYG", Home: "ARI", Week: 2, Code: "NYG-ARI-002", Winner: undefined,
  },{
    Away: "NYJ", Home: "DAL", Week: 2, Code: "NYJ-DAL-002", Winner: undefined,
  },{
    Away: "WAS", Home: "DEN", Week: 2, Code: "WAS-DEN-002", Winner: undefined,
  },{
    Away: "MIA", Home: "NWE", Week: 2, Code: "MIA-NWE-002", Winner: undefined,
  },{
    Away: "NOR", Home: "CAR", Week: 2, Code: "NOR-CAR-002", Winner: undefined,
  },{
    Away: "CLE", Home: "PIT", Week: 2, Code: "CLE-PIT-002", Winner: undefined,
  },{
    Away: "NYG", Home: "SFO", Week: 3, Code: "NYG-SFO-003", Winner: undefined,
  },{
    Away: "TEN", Home: "CLE", Week: 3, Code: "TEN-CLE-003", Winner: undefined,
  },{
    Away: "ATL", Home: "DET", Week: 3, Code: "ATL-DET-003", Winner: undefined,
  },{
    Away: "NOR", Home: "GNB", Week: 3, Code: "NOR-GNB-003", Winner: undefined,
  },{
    Away: "DEN", Home: "MIA", Week: 3, Code: "DEN-MIA-003", Winner: undefined,
  },{
    Away: "LAC", Home: "MIN", Week: 3, Code: "LAC-MIN-003", Winner: undefined,
  },{
    Away: "NWE", Home: "NYJ", Week: 3, Code: "NWE-NYJ-003", Winner: undefined,
  },{
    Away: "BUF", Home: "WAS", Week: 3, Code: "BUF-WAS-003", Winner: undefined,
  },{
    Away: "HOU", Home: "JAX", Week: 3, Code: "HOU-JAX-003", Winner: undefined,
  },{
    Away: "IND", Home: "BAL", Week: 3, Code: "IND-BAL-003", Winner: undefined,
  },{
    Away: "CAR", Home: "SEA", Week: 3, Code: "CAR-SEA-003", Winner: undefined,
  },{
    Away: "CHI", Home: "KAN", Week: 3, Code: "CHI-KAN-003", Winner: undefined,
  },{
    Away: "DAL", Home: "ARI", Week: 3, Code: "DAL-ARI-003", Winner: undefined,
  },{
    Away: "PIT", Home: "LVR", Week: 3, Code: "PIT-LVR-003", Winner: undefined,
  },{
    Away: "PHI", Home: "TAM", Week: 3, Code: "PHI-TAM-003", Winner: undefined,
  },{
    Away: "LAR", Home: "CIN", Week: 3, Code: "LAR-CIN-003", Winner: undefined,
  },{
    Away: "DET", Home: "GNB", Week: 4, Code: "DET-GNB-004", Winner: undefined,
  },{
    Away: "ATL", Home: "JAX", Week: 4, Code: "ATL-JAX-004", Winner: undefined,
  },{
    Away: "MIA", Home: "BUF", Week: 4, Code: "MIA-BUF-004", Winner: undefined,
  },{
    Away: "DEN", Home: "CHI", Week: 4, Code: "DEN-CHI-004", Winner: undefined,
  },{
    Away: "BAL", Home: "CLE", Week: 4, Code: "BAL-CLE-004", Winner: undefined,
  },{
    Away: "CIN", Home: "TEN", Week: 4, Code: "CIN-TEN-004", Winner: undefined,
  },{
    Away: "LAR", Home: "IND", Week: 4, Code: "LAR-IND-004", Winner: undefined,
  },{
    Away: "TAM", Home: "NOR", Week: 4, Code: "TAM-NOR-004", Winner: undefined,
  },{
    Away: "WAS", Home: "PHI", Week: 4, Code: "WAS-PHI-004", Winner: undefined,
  },{
    Away: "MIN", Home: "CAR", Week: 4, Code: "MIN-CAR-004", Winner: undefined,
  },{
    Away: "PIT", Home: "HOU", Week: 4, Code: "PIT-HOU-004", Winner: undefined,
  },{
    Away: "LVR", Home: "LAC", Week: 4, Code: "LVR-LAC-004", Winner: undefined,
  },{
    Away: "NWE", Home: "DAL", Week: 4, Code: "NWE-DAL-004", Winner: undefined,
  },{
    Away: "ARI", Home: "SFO", Week: 4, Code: "ARI-SFO-004", Winner: undefined,
  },{
    Away: "KAN", Home: "NYJ", Week: 4, Code: "KAN-NYJ-004", Winner: undefined,
  },{
    Away: "SEA", Home: "NYG", Week: 4, Code: "SEA-NYG-004", Winner: undefined,
  },{
    Away: "CHI", Home: "WAS", Week: 5, Code: "CHI-WAS-005", Winner: undefined,
  },{
    Away: "JAX", Home: "BUF", Week: 5, Code: "JAX-BUF-005", Winner: undefined,
  },{
    Away: "HOU", Home: "ATL", Week: 5, Code: "HOU-ATL-005", Winner: undefined,
  },{
    Away: "CAR", Home: "DET", Week: 5, Code: "CAR-DET-005", Winner: undefined,
  },{
    Away: "TEN", Home: "IND", Week: 5, Code: "TEN-IND-005", Winner: undefined,
  },{
    Away: "NYG", Home: "MIA", Week: 5, Code: "NYG-MIA-005", Winner: undefined,
  },{
    Away: "NOR", Home: "NWE", Week: 5, Code: "NOR-NWE-005", Winner: undefined,
  },{
    Away: "BAL", Home: "PIT", Week: 5, Code: "BAL-PIT-005", Winner: undefined,
  },{
    Away: "PHI", Home: "LAR", Week: 5, Code: "PHI-LAR-005", Winner: undefined,
  },{
    Away: "CIN", Home: "ARI", Week: 5, Code: "CIN-ARI-005", Winner: undefined,
  },{
    Away: "NYJ", Home: "DEN", Week: 5, Code: "NYJ-DEN-005", Winner: undefined,
  },{
    Away: "KAN", Home: "MIN", Week: 5, Code: "KAN-MIN-005", Winner: undefined,
  },{
    Away: "DAL", Home: "SFO", Week: 5, Code: "DAL-SFO-005", Winner: undefined,
  },{
    Away: "GNB", Home: "LVR", Week: 5, Code: "GNB-LVR-005", Winner: undefined,
  },{
    Away: "DEN", Home: "KAN", Week: 6, Code: "DEN-KAN-006", Winner: undefined,
  },{
    Away: "BAL", Home: "TEN", Week: 6, Code: "BAL-TEN-006", Winner: undefined,
  },{
    Away: "WAS", Home: "ATL", Week: 6, Code: "WAS-ATL-006", Winner: undefined,
  },{
    Away: "MIN", Home: "CHI", Week: 6, Code: "MIN-CHI-006", Winner: undefined,
  },{
    Away: "SEA", Home: "CIN", Week: 6, Code: "SEA-CIN-006", Winner: undefined,
  },{
    Away: "SFO", Home: "CLE", Week: 6, Code: "SFO-CLE-006", Winner: undefined,
  },{
    Away: "CAR", Home: "MIA", Week: 6, Code: "CAR-MIA-006", Winner: undefined,
  },{
    Away: "DET", Home: "TAM", Week: 6, Code: "DET-TAM-006", Winner: undefined,
  },{
    Away: "IND", Home: "JAX", Week: 6, Code: "IND-JAX-006", Winner: undefined,
  },{
    Away: "NOR", Home: "HOU", Week: 6, Code: "NOR-HOU-006", Winner: undefined,
  },{
    Away: "NWE", Home: "LVR", Week: 6, Code: "NWE-LVR-006", Winner: undefined,
  },{
    Away: "ARI", Home: "LAR", Week: 6, Code: "ARI-LAR-006", Winner: undefined,
  },{
    Away: "PHI", Home: "NYJ", Week: 6, Code: "PHI-NYJ-006", Winner: undefined,
  },{
    Away: "NYG", Home: "BUF", Week: 6, Code: "NYG-BUF-006", Winner: undefined,
  },{
    Away: "DAL", Home: "LAC", Week: 6, Code: "DAL-LAC-006", Winner: undefined,
  },{
    Away: "JAX", Home: "NOR", Week: 7, Code: "JAX-NOR-007", Winner: undefined,
  },{
    Away: "LVR", Home: "CHI", Week: 7, Code: "LVR-CHI-007", Winner: undefined,
  },{
    Away: "CLE", Home: "IND", Week: 7, Code: "CLE-IND-007", Winner: undefined,
  },{
    Away: "BUF", Home: "NWE", Week: 7, Code: "BUF-NWE-007", Winner: undefined,
  },{
    Away: "WAS", Home: "NYG", Week: 7, Code: "WAS-NYG-007", Winner: undefined,
  },{
    Away: "ATL", Home: "TAM", Week: 7, Code: "ATL-TAM-007", Winner: undefined,
  },{
    Away: "DET", Home: "BAL", Week: 7, Code: "DET-BAL-007", Winner: undefined,
  },{
    Away: "PIT", Home: "LAR", Week: 7, Code: "PIT-LAR-007", Winner: undefined,
  },{
    Away: "ARI", Home: "SEA", Week: 7, Code: "ARI-SEA-007", Winner: undefined,
  },{
    Away: "GNB", Home: "DEN", Week: 7, Code: "GNB-DEN-007", Winner: undefined,
  },{
    Away: "LAC", Home: "KAN", Week: 7, Code: "LAC-KAN-007", Winner: undefined,
  },{
    Away: "MIA", Home: "PHI", Week: 7, Code: "MIA-PHI-007", Winner: undefined,
  },{
    Away: "SFO", Home: "MIN", Week: 7, Code: "SFO-MIN-007", Winner: undefined,
  },{
    Away: "TAM", Home: "BUF", Week: 8, Code: "TAM-BUF-008", Winner: undefined,
  },{
    Away: "LAR", Home: "DAL", Week: 8, Code: "LAR-DAL-008", Winner: undefined,
  },{
    Away: "MIN", Home: "GNB", Week: 8, Code: "MIN-GNB-008", Winner: undefined,
  },{
    Away: "ATL", Home: "TEN", Week: 8, Code: "ATL-TEN-008", Winner: undefined,
  },{
    Away: "NOR", Home: "IND", Week: 8, Code: "NOR-IND-008", Winner: undefined,
  },{
    Away: "NWE", Home: "MIA", Week: 8, Code: "NWE-MIA-008", Winner: undefined,
  },{
    Away: "NYJ", Home: "NYG", Week: 8, Code: "NYJ-NYG-008", Winner: undefined,
  },{
    Away: "JAX", Home: "PIT", Week: 8, Code: "JAX-PIT-008", Winner: undefined,
  },{
    Away: "PHI", Home: "WAS", Week: 8, Code: "PHI-WAS-008", Winner: undefined,
  },{
    Away: "HOU", Home: "CAR", Week: 8, Code: "HOU-CAR-008", Winner: undefined,
  },{
    Away: "CLE", Home: "SEA", Week: 8, Code: "CLE-SEA-008", Winner: undefined,
  },{
    Away: "KAN", Home: "DEN", Week: 8, Code: "KAN-DEN-008", Winner: undefined,
  },{
    Away: "BAL", Home: "ARI", Week: 8, Code: "BAL-ARI-008", Winner: undefined,
  },{
    Away: "CIN", Home: "SFO", Week: 8, Code: "CIN-SFO-008", Winner: undefined,
  },{
    Away: "CHI", Home: "LAC", Week: 8, Code: "CHI-LAC-008", Winner: undefined,
  },{
    Away: "LVR", Home: "DET", Week: 8, Code: "LVR-DET-008", Winner: undefined,
  },{
    Away: "TEN", Home: "PIT", Week: 9, Code: "TEN-PIT-009", Winner: undefined,
  },{
    Away: "MIA", Home: "KAN", Week: 9, Code: "MIA-KAN-009", Winner: undefined,
  },{
    Away: "MIN", Home: "ATL", Week: 9, Code: "MIN-ATL-009", Winner: undefined,
  },{
    Away: "ARI", Home: "CLE", Week: 9, Code: "ARI-CLE-009", Winner: undefined,
  },{
    Away: "LAR", Home: "GNB", Week: 9, Code: "LAR-GNB-009", Winner: undefined,
  },{
    Away: "WAS", Home: "NWE", Week: 9, Code: "WAS-NWE-009", Winner: undefined,
  },{
    Away: "CHI", Home: "NOR", Week: 9, Code: "CHI-NOR-009", Winner: undefined,
  },{
    Away: "SEA", Home: "BAL", Week: 9, Code: "SEA-BAL-009", Winner: undefined,
  },{
    Away: "TAM", Home: "HOU", Week: 9, Code: "TAM-HOU-009", Winner: undefined,
  },{
    Away: "IND", Home: "CAR", Week: 9, Code: "IND-CAR-009", Winner: undefined,
  },{
    Away: "NYG", Home: "LVR", Week: 9, Code: "NYG-LVR-009", Winner: undefined,
  },{
    Away: "DAL", Home: "PHI", Week: 9, Code: "DAL-PHI-009", Winner: undefined,
  },{
    Away: "BUF", Home: "CIN", Week: 9, Code: "BUF-CIN-009", Winner: undefined,
  },{
    Away: "LAC", Home: "NYJ", Week: 9, Code: "LAC-NYJ-009", Winner: undefined,
  },
];

/*
{
  Away: , Home: , Week: 10, Winner: undefined,
},
*/