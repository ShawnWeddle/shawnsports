import type { NFLTeamType } from "./NFLdata";

export type GameType = {
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Code: string,
  Winner : NFLTeamType | undefined
}

export const NFLscheduleData: GameType[] = [
  {
    Away: "CAR", Home: "CHI", Week: 10, Code: "CAR-CHI-010", Winner: undefined,
  },{
    Away: "IND", Home: "NWE", Week: 10, Code: "IND-NWE-010", Winner: undefined,
  },{
    Away: "HOU", Home: "CIN", Week: 10, Code: "HOU-CIN-010", Winner: undefined,
  },{
    Away: "NOR", Home: "MIN", Week: 10, Code: "NOR-MIN-010", Winner: undefined,
  },{
    Away: "GNB", Home: "PIT", Week: 10, Code: "GNB-PIT-010", Winner: undefined,
  },{
    Away: "TEN", Home: "TAM", Week: 10, Code: "TEN-TAM-010", Winner: undefined,
  },{
    Away: "SFO", Home: "JAX", Week: 10, Code: "SFO-JAX-010", Winner: undefined,
  },{
    Away: "CLE", Home: "BAL", Week: 10, Code: "CLE-BAL-010", Winner: undefined,
  },{
    Away: "ATL", Home: "ARI", Week: 10, Code: "ATL-ARI-010", Winner: undefined,
  },{
    Away: "DET", Home: "LAC", Week: 10, Code: "DET-LAC-010", Winner: undefined,
  },{
    Away: "NYG", Home: "DAL", Week: 10, Code: "NYG-DAL-010", Winner: undefined,
  },{
    Away: "WAS", Home: "SEA", Week: 10, Code: "WAS-SEA-010", Winner: undefined,
  },{
    Away: "NYJ", Home: "LVR", Week: 10, Code: "NYJ-LVR-010", Winner: undefined,
  },{
    Away: "DEN", Home: "BUF", Week: 10, Code: "DEN-BUF-010", Winner: undefined,
  },{
    Away: "CIN", Home: "BAL", Week: 11, Code: "CIN-BAL-011", Winner: undefined,
  },{
    Away: "PIT", Home: "CLE", Week: 11, Code: "PIT-CLE-011", Winner: undefined,
  },{
    Away: "CHI", Home: "DET", Week: 11, Code: "CHI-DET-011", Winner: undefined,
  },{
    Away: "LAC", Home: "GNB", Week: 11, Code: "LAC-GNB-011", Winner: undefined,
  },{
    Away: "LVR", Home: "MIA", Week: 11, Code: "LVR-MIA-011", Winner: undefined,
  },{
    Away: "NYG", Home: "WAS", Week: 11, Code: "NYG-WAS-011", Winner: undefined,
  },{
    Away: "DAL", Home: "CAR", Week: 11, Code: "DAL-CAR-011", Winner: undefined,
  },{
    Away: "TEN", Home: "JAX", Week: 11, Code: "TEN-JAX-011", Winner: undefined,
  },{
    Away: "ARI", Home: "HOU", Week: 11, Code: "ARI-HOU-011", Winner: undefined,
  },{
    Away: "TAM", Home: "SFO", Week: 11, Code: "TAM-SFO-011", Winner: undefined,
  },{
    Away: "NYJ", Home: "BUF", Week: 11, Code: "NYJ-BUF-011", Winner: undefined,
  },{
    Away: "SEA", Home: "LAR", Week: 11, Code: "SEA-LAR-011", Winner: undefined,
  },{
    Away: "MIN", Home: "DEN", Week: 11, Code: "MIN-DEN-011", Winner: undefined,
  },{
    Away: "PHI", Home: "KAN", Week: 11, Code: "PHI-KAN-011", Winner: undefined,
  },{
    Away: "GNB", Home: "DET", Week: 12, Code: "GNB-DET-012", Winner: undefined,
  },{
    Away: "WAS", Home: "DAL", Week: 12, Code: "WAS-DAL-012", Winner: undefined,
  },{
    Away: "SFO", Home: "SEA", Week: 12, Code: "SFO-SEA-012", Winner: undefined,
  },{
    Away: "MIA", Home: "NYJ", Week: 12, Code: "MIA-NYJ-012", Winner: undefined,
  },{
    Away: "NOR", Home: "ATL", Week: 12, Code: "NOR-ATL-012", Winner: undefined,
  },{
    Away: "PIT", Home: "CIN", Week: 12, Code: "PIT-CIN-012", Winner: undefined,
  },{
    Away: "CAR", Home: "TEN", Week: 12, Code: "CAR-TEN-012", Winner: undefined,
  },{
    Away: "TAM", Home: "IND", Week: 12, Code: "TAM-IND-012", Winner: undefined,
  },{
    Away: "NWE", Home: "NYG", Week: 12, Code: "NWE-NYG-012", Winner: undefined,
  },{
    Away: "JAX", Home: "HOU", Week: 12, Code: "JAX-HOU-012", Winner: undefined,
  },{
    Away: "CLE", Home: "DEN", Week: 12, Code: "CLE-DEN-012", Winner: undefined,
  },{
    Away: "LAR", Home: "ARI", Week: 12, Code: "LAR-ARI-012", Winner: undefined,
  },{
    Away: "KAN", Home: "LVR", Week: 12, Code: "KAN-LVR-012", Winner: undefined,
  },{
    Away: "BUF", Home: "PHI", Week: 12, Code: "BUF-PHI-012", Winner: undefined,
  },{
    Away: "BAL", Home: "LAC", Week: 12, Code: "BAL-LAC-012", Winner: undefined,
  },{
    Away: "CHI", Home: "MIN", Week: 12, Code: "CHI-MIN-012", Winner: undefined,
  },{
    Away: "SEA", Home: "DAL", Week: 13, Code: "SEA-DAL-013", Winner: undefined,
  },{
    Away: "IND", Home: "TEN", Week: 13, Code: "IND-TEN-013", Winner: undefined,
  },{
    Away: "LAC", Home: "NWE", Week: 13, Code: "LAC-NWE-013", Winner: undefined,
  },{
    Away: "DET", Home: "NOR", Week: 13, Code: "DET-NOR-013", Winner: undefined,
  },{
    Away: "ATL", Home: "NYJ", Week: 13, Code: "ATL-NYJ-013", Winner: undefined,
  },{
    Away: "ARI", Home: "PIT", Week: 13, Code: "ARI-PIT-013", Winner: undefined,
  },{
    Away: "CAR", Home: "TAM", Week: 13, Code: "CAR-TAM-013", Winner: undefined,
  },{
    Away: "MIA", Home: "WAS", Week: 13, Code: "MIA-WAS-013", Winner: undefined,
  },{
    Away: "DEN", Home: "HOU", Week: 13, Code: "DEN-HOU-013", Winner: undefined,
  },{
    Away: "CLE", Home: "LAR", Week: 13, Code: "CLE-LAR-013", Winner: undefined,
  },{
    Away: "SFO", Home: "PHI", Week: 13, Code: "SFO-PHI-013", Winner: undefined,
  },{
    Away: "KAN", Home: "GNB", Week: 13, Code: "KAN-GNB-013", Winner: undefined,
  },{
    Away: "CIN", Home: "JAX", Week: 13, Code: "CIN-JAX-013", Winner: undefined,
  },{
    Away: "NWE", Home: "PIT", Week: 14, Code: "NWE-PIT-014", Winner: undefined,
  },{
    Away: "TAM", Home: "ATL", Week: 14, Code: "TAM-ATL-014", Winner: undefined,
  },{
    Away: "DET", Home: "CHI", Week: 14, Code: "DET-CHI-014", Winner: undefined,
  },{
    Away: "IND", Home: "CIN", Week: 14, Code: "IND-CIN-014", Winner: undefined,
  },{
    Away: "JAX", Home: "CLE", Week: 14, Code: "JAX-CLE-014", Winner: undefined,
  },{
    Away: "CAR", Home: "NOR", Week: 14, Code: "CAR-NOR-014", Winner: undefined,
  },{
    Away: "HOU", Home: "NYJ", Week: 14, Code: "HOU-NYJ-014", Winner: undefined,
  },{
    Away: "LAR", Home: "BAL", Week: 14, Code: "LAR-BAL-014", Winner: undefined,
  },{
    Away: "MIN", Home: "LVR", Week: 14, Code: "MIN-LVR-014", Winner: undefined,
  },{
    Away: "SEA", Home: "SFO", Week: 14, Code: "SEA-SFO-014", Winner: undefined,
  },{
    Away: "BUF", Home: "KAN", Week: 14, Code: "BUF-KAN-014", Winner: undefined,
  },{
    Away: "DEN", Home: "LAC", Week: 14, Code: "DEN-LAC-014", Winner: undefined,
  },{
    Away: "PHI", Home: "DAL", Week: 14, Code: "PHI-DAL-014", Winner: undefined,
  },{
    Away: "TEN", Home: "MIA", Week: 14, Code: "TEN-MIA-014", Winner: undefined,
  },{
    Away: "GNB", Home: "NYG", Week: 14, Code: "GNB-NYG-014", Winner: undefined,
  },{
    Away: "LAC", Home: "LVR", Week: 15, Code: "LAC-LVR-015", Winner: undefined,
  },{
    Away: "MIN", Home: "CIN", Week: 15, Code: "MIN-CIN-015", Winner: undefined,
  },{
    Away: "CHI", Home: "CLE", Week: 15, Code: "CHI-CLE-015", Winner: undefined,
  },{
    Away: "DEN", Home: "DET", Week: 15, Code: "DEN-DET-015", Winner: undefined,
  },{
    Away: "PIT", Home: "IND", Week: 15, Code: "PIT-IND-015", Winner: undefined,
  },{
    Away: "ATL", Home: "CAR", Week: 15, Code: "ATL-CAR-015", Winner: undefined,
  },{
    Away: "TAM", Home: "GNB", Week: 15, Code: "TAM-GNB-015", Winner: undefined,
  },{
    Away: "HOU", Home: "TEN", Week: 15, Code: "HOU-TEN-015", Winner: undefined,
  },{
    Away: "NYJ", Home: "MIA", Week: 15, Code: "NYJ-MIA-015", Winner: undefined,
  },{
    Away: "NYG", Home: "NOR", Week: 15, Code: "NYG-NOR-015", Winner: undefined,
  },{
    Away: "WAS", Home: "LAR", Week: 15, Code: "WAS-LAR-015", Winner: undefined,
  },{
    Away: "SFO", Home: "ARI", Week: 15, Code: "SFO-ARI-015", Winner: undefined,
  },{
    Away: "DAL", Home: "BUF", Week: 15, Code: "DAL-BUF-015", Winner: undefined,
  },{
    Away: "PHI", Home: "SEA", Week: 15, Code: "PHI-SEA-015", Winner: undefined,
  },{
    Away: "BAL", Home: "JAX", Week: 15, Code: "BAL-JAX-015", Winner: undefined,
  },{
    Away: "KAN", Home: "NWE", Week: 15, Code: "KAN-NWE-015", Winner: undefined,
  },{
    Away: "NOR", Home: "LAR", Week: 16, Code: "NOR-LAR-016", Winner: undefined,
  },{
    Away: "CIN", Home: "PIT", Week: 16, Code: "CIN-PIT-016", Winner: undefined,
  },{
    Away: "BUF", Home: "LAC", Week: 16, Code: "BUF-LAC-016", Winner: undefined,
  },{
    Away: "IND", Home: "ATL", Week: 16, Code: "IND-ATL-016", Winner: undefined,
  },{
    Away: "SEA", Home: "TEN", Week: 16, Code: "SEA-TEN-016", Winner: undefined,
  },{
    Away: "DET", Home: "MIN", Week: 16, Code: "DET-MIN-016", Winner: undefined,
  },{
    Away: "WAS", Home: "NYJ", Week: 16, Code: "WAS-NYJ-016", Winner: undefined,
  },{
    Away: "GNB", Home: "CAR", Week: 16, Code: "GNB-CAR-016", Winner: undefined,
  },{
    Away: "CLE", Home: "HOU", Week: 16, Code: "CLE-HOU-016", Winner: undefined,
  },{
    Away: "JAX", Home: "TAM", Week: 16, Code: "JAX-TAM-016", Winner: undefined,
  },{
    Away: "ARI", Home: "CHI", Week: 16, Code: "ARI-CHI-016", Winner: undefined,
  },{
    Away: "DAL", Home: "MIA", Week: 16, Code: "DAL-MIA-016", Winner: undefined,
  },{
    Away: "NWE", Home: "DEN", Week: 16, Code: "NWE-DEN-016", Winner: undefined,
  },{
    Away: "LVR", Home: "KAN", Week: 16, Code: "LVR-KAN-016", Winner: undefined,
  },{
    Away: "NYG", Home: "PHI", Week: 16, Code: "NYG-PHI-016", Winner: undefined,
  },{
    Away: "BAL", Home: "SFO", Week: 16, Code: "BAL-SFO-016", Winner: undefined,
  },{
    Away: "NYJ", Home: "CLE", Week: 17, Code: "NYJ-CLE-017", Winner: undefined,
  },{
    Away: "DET", Home: "DAL", Week: 17, Code: "DET-DAL-017", Winner: undefined,
  },{
    Away: "NWE", Home: "BUF", Week: 17, Code: "NWE-BUF-017", Winner: undefined,
  },{
    Away: "ATL", Home: "CHI", Week: 17, Code: "ATL-CHI-017", Winner: undefined,
  },{
    Away: "LVR", Home: "IND", Week: 17, Code: "LVR-IND-017", Winner: undefined,
  },{
    Away: "LAR", Home: "NYG", Week: 17, Code: "LAR-NYG-017", Winner: undefined,
  },{
    Away: "ARI", Home: "PHI", Week: 17, Code: "ARI-PHI-017", Winner: undefined,
  },{
    Away: "NOR", Home: "TAM", Week: 17, Code: "NOR-TAM-017", Winner: undefined,
  },{
    Away: "SFO", Home: "WAS", Week: 17, Code: "SFO-WAS-017", Winner: undefined,
  },{
    Away: "CAR", Home: "JAX", Week: 17, Code: "CAR-JAX-017", Winner: undefined,
  },{
    Away: "MIA", Home: "BAL", Week: 17, Code: "MIA-BAL-017", Winner: undefined,
  },{
    Away: "TEN", Home: "HOU", Week: 17, Code: "TEN-HOU-017", Winner: undefined,
  },{
    Away: "PIT", Home: "SEA", Week: 17, Code: "PIT-SEA-017", Winner: undefined,
  },{
    Away: "LAC", Home: "DEN", Week: 17, Code: "LAC-DEN-017", Winner: undefined,
  },{
    Away: "CIN", Home: "KAN", Week: 17, Code: "CIN-KAN-017", Winner: undefined,
  },{
    Away: "GNB", Home: "MIN", Week: 17, Code: "GNB-MIN-017", Winner: undefined,
  },{
    Away: "CLE", Home: "CIN", Week: 18, Code: "CLE-CIN-018", Winner: undefined,
  },{
    Away: "MIN", Home: "DET", Week: 18, Code: "MIN-DET-018", Winner: undefined,
  },{
    Away: "CHI", Home: "GNB", Week: 18, Code: "CHI-GNB-018", Winner: undefined,
  },{
    Away: "JAX", Home: "TEN", Week: 18, Code: "JAX-TEN-018", Winner: undefined,
  },{
    Away: "HOU", Home: "IND", Week: 18, Code: "HOU-IND-018", Winner: undefined,
  },{
    Away: "DEN", Home: "LVR", Week: 18, Code: "DEN-LVR-018", Winner: undefined,
  },{
    Away: "BUF", Home: "MIA", Week: 18, Code: "BUF-MIA-018", Winner: undefined,
  },{
    Away: "NYJ", Home: "NWE", Week: 18, Code: "NYJ-NWE-018", Winner: undefined,
  },{
    Away: "ATL", Home: "NOR", Week: 18, Code: "ATL-NOR-018", Winner: undefined,
  },{
    Away: "PHI", Home: "NYG", Week: 18, Code: "PHI-NYG-018", Winner: undefined,
  },{
    Away: "SEA", Home: "ARI", Week: 18, Code: "SEA-ARI-018", Winner: undefined,
  },{
    Away: "KAN", Home: "LAC", Week: 18, Code: "KAN-LAC-018", Winner: undefined,
  },{
    Away: "LAR", Home: "SFO", Week: 18, Code: "LAR-SFO-018", Winner: undefined,
  },{
    Away: "DAL", Home: "WAS", Week: 18, Code: "DAL-WAS-018", Winner: undefined,
  },{
    Away: "TAM", Home: "CAR", Week: 18, Code: "TAM-CAR-018", Winner: undefined,
  },{
    Away: "PIT", Home: "BAL", Week: 18, Code: "PIT-BAL-018", Winner: undefined,
  },
];

/*
{
  Away: , Home: , Week: 18, Code: "
  -me:-018", Winner: undefined,
},
*/