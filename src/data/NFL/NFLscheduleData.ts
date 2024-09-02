import type { NFLTeamType } from "./NFLdata";

export type GameType ={
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Code: string,
  Winner: NFLTeamType | undefined | null,
  readOnly: boolean,
}

export type FinishGameType ={
  Away: NFLTeamType,
  Home: NFLTeamType,
  Week: number,
  Code: string,
  Winner: NFLTeamType,
  readOnly: boolean,
}

export type GameWinner = Pick<GameType, "Code" | "Winner">

export type NFLScheduleType = typeof NFLscheduleData;

export function GameCheck(schedule: GameType[]) {
  let allChecked = true;
  const newSchedule = schedule.map((game) => {
    let newGame: FinishGameType;
    if(!game.Winner){
      allChecked = false;
      newGame = {...game, Winner: "ARI"}
    } else {
      newGame = {...game, Winner: game.Winner};
    }
    return newGame;
  })
  if(allChecked){
    return {
      status: "success",
      schedule: newSchedule,
    } 
  } else {
    return {
      status: "fail"
    }
  }
}

export function GameTest(schedule: GameType[]) {
  const newSchedule = schedule.map((game) => {
    const pickWinner = Math.random() > 0.5 ? game.Away : game.Home;
    const newGame: GameWinner = {Code: game.Code, Winner: pickWinner};
    return newGame;
  });
  return newSchedule;
}

export const NFLscheduleData: {weeksCompleted: number, schedule: GameType[]} = {
  weeksCompleted: 17, 
  schedule: [{
      Away: "BUF", Home: "ARI", Week: 1, Winner: null, Code: "BUF-ARI-001", readOnly: false,
    },{
      Away: "KAN", Home: "BAL", Week: 1, Winner: null, Code: "KAN-BAL-001", readOnly: false,
    },{
      Away: "NOR", Home: "CAR", Week: 1, Winner: null, Code: "NOR-CAR-001", readOnly: false,
    },{
      Away: "TEN", Home: "CHI", Week: 1, Winner: null, Code: "TEN-CHI-001", readOnly: false,
    },{
      Away: "CLE", Home: "DAL", Week: 1, Winner: null, Code: "CLE-DAL-001", readOnly: false,
    },{
      Away: "SEA", Home: "DEN", Week: 1, Winner: null, Code: "SEA-DEN-001", readOnly: false,
    },{
      Away: "PHI", Home: "GNB", Week: 1, Winner: null, Code: "PHI-GNB-001", readOnly: false,
    },{
      Away: "IND", Home: "HOU", Week: 1, Winner: null, Code: "IND-HOU-001", readOnly: false,
    },{
      Away: "MIA", Home: "JAX", Week: 1, Winner: null, Code: "MIA-JAX-001", readOnly: false,
    },{
      Away: "DET", Home: "LAR", Week: 1, Winner: null, Code: "DET-LAR-001", readOnly: false,
    },{
      Away: "LAC", Home: "LVR", Week: 1, Winner: null, Code: "LAC-LVR-001", readOnly: false,
    },{
      Away: "NYG", Home: "MIN", Week: 1, Winner: null, Code: "NYG-MIN-001", readOnly: false,
    },{
      Away: "CIN", Home: "NWE", Week: 1, Winner: null, Code: "CIN-NWE-001", readOnly: false,
    },{
      Away: "SFO", Home: "NYJ", Week: 1, Winner: null, Code: "SFO-NYJ-001", readOnly: false,
    },{
      Away: "ATL", Home: "PIT", Week: 1, Winner: null, Code: "ATL-PIT-001", readOnly: false,
    },{
      Away: "TAM", Home: "WAS", Week: 1, Winner: null, Code: "TAM-WAS-001", readOnly: false,
    },{
      Away: "PHI", Home: "ATL", Week: 2, Winner: null, Code: "PHI-ATL-002", readOnly: false,
    },{
      Away: "MIA", Home: "BUF", Week: 2, Winner: null, Code: "MIA-BUF-002", readOnly: false,
    },{
      Away: "HOU", Home: "CHI", Week: 2, Winner: null, Code: "HOU-CHI-002", readOnly: false,
    },{
      Away: "KAN", Home: "CIN", Week: 2, Winner: null, Code: "KAN-CIN-002", readOnly: false,
    },{
      Away: "JAX", Home: "CLE", Week: 2, Winner: null, Code: "JAX-CLE-002", readOnly: false,
    },{
      Away: "GNB", Home: "IND", Week: 2, Winner: null, Code: "GNB-IND-002", readOnly: false,
    },{
      Away: "CAR", Home: "LAC", Week: 2, Winner: null, Code: "CAR-LAC-002", readOnly: false,
    },{
      Away: "ARI", Home: "LAR", Week: 2, Winner: null, Code: "ARI-LAR-002", readOnly: false,
    },{
      Away: "BAL", Home: "LVR", Week: 2, Winner: null, Code: "BAL-LVR-002", readOnly: false,
    },{
      Away: "DAL", Home: "NOR", Week: 2, Winner: null, Code: "DAL-NOR-002", readOnly: false,
    },{
      Away: "WAS", Home: "NYG", Week: 2, Winner: null, Code: "WAS-NYG-002", readOnly: false,
    },{
      Away: "TEN", Home: "NYJ", Week: 2, Winner: null, Code: "TEN-NYJ-002", readOnly: false,
    },{
      Away: "DEN", Home: "PIT", Week: 2, Winner: null, Code: "DEN-PIT-002", readOnly: false,
    },{
      Away: "NWE", Home: "SEA", Week: 2, Winner: null, Code: "NWE-SEA-002", readOnly: false,
    },{
      Away: "MIN", Home: "SFO", Week: 2, Winner: null, Code: "MIN-SFO-002", readOnly: false,
    },{
      Away: "DET", Home: "TAM", Week: 2, Winner: null, Code: "DET-TAM-002", readOnly: false,
    },{
      Away: "DAL", Home: "BAL", Week: 3, Winner: null, Code: "DAL-BAL-003", readOnly: false,
    },{
      Away: "LVR", Home: "CAR", Week: 3, Winner: null, Code: "LVR-CAR-003", readOnly: false,
    },{
      Away: "IND", Home: "CHI", Week: 3, Winner: null, Code: "IND-CHI-003", readOnly: false,
    },{
      Away: "TAM", Home: "DEN", Week: 3, Winner: null, Code: "TAM-DEN-003", readOnly: false,
    },{
      Away: "ARI", Home: "DET", Week: 3, Winner: null, Code: "ARI-DET-003", readOnly: false,
    },{
      Away: "TEN", Home: "GNB", Week: 3, Winner: null, Code: "TEN-GNB-003", readOnly: false,
    },{
      Away: "MIN", Home: "HOU", Week: 3, Winner: null, Code: "MIN-HOU-003", readOnly: false,
    },{
      Away: "BUF", Home: "JAX", Week: 3, Winner: null, Code: "BUF-JAX-003", readOnly: false,
    },{
      Away: "ATL", Home: "KAN", Week: 3, Winner: null, Code: "ATL-KAN-003", readOnly: false,
    },{
      Away: "PIT", Home: "LAC", Week: 3, Winner: null, Code: "PIT-LAC-003", readOnly: false,
    },{
      Away: "SEA", Home: "MIA", Week: 3, Winner: null, Code: "SEA-MIA-003", readOnly: false,
    },{
      Away: "NYJ", Home: "NWE", Week: 3, Winner: null, Code: "NYJ-NWE-003", readOnly: false,
    },{
      Away: "CLE", Home: "NYG", Week: 3, Winner: null, Code: "CLE-NYG-003", readOnly: false,
    },{
      Away: "NOR", Home: "PHI", Week: 3, Winner: null, Code: "NOR-PHI-003", readOnly: false,
    },{
      Away: "LAR", Home: "SFO", Week: 3, Winner: null, Code: "LAR-SFO-003", readOnly: false,
    },{
      Away: "CIN", Home: "WAS", Week: 3, Winner: null, Code: "CIN-WAS-003", readOnly: false,
    },{
      Away: "BAL", Home: "BUF", Week: 4, Winner: null, Code: "BAL-BUF-004", readOnly: false,
    },{
      Away: "CAR", Home: "CIN", Week: 4, Winner: null, Code: "CAR-CIN-004", readOnly: false,
    },{
      Away: "LVR", Home: "CLE", Week: 4, Winner: null, Code: "LVR-CLE-004", readOnly: false,
    },{
      Away: "NYG", Home: "DAL", Week: 4, Winner: null, Code: "NYG-DAL-004", readOnly: false,
    },{
      Away: "NYJ", Home: "DEN", Week: 4, Winner: null, Code: "NYJ-DEN-004", readOnly: false,
    },{
      Away: "HOU", Home: "JAX", Week: 4, Winner: null, Code: "HOU-JAX-004", readOnly: false,
    },{
      Away: "LAC", Home: "KAN", Week: 4, Winner: null, Code: "LAC-KAN-004", readOnly: false,
    },{
      Away: "CHI", Home: "LAR", Week: 4, Winner: null, Code: "CHI-LAR-004", readOnly: false,
    },{
      Away: "GNB", Home: "MIN", Week: 4, Winner: null, Code: "GNB-MIN-004", readOnly: false,
    },{
      Away: "ATL", Home: "NOR", Week: 4, Winner: null, Code: "ATL-NOR-004", readOnly: false,
    },{
      Away: "SFO", Home: "NWE", Week: 4, Winner: null, Code: "SFO-NWE-004", readOnly: false,
    },{
      Away: "TAM", Home: "PHI", Week: 4, Winner: null, Code: "TAM-PHI-004", readOnly: false,
    },{
      Away: "IND", Home: "PIT", Week: 4, Winner: null, Code: "IND-PIT-004", readOnly: false,
    },{
      Away: "DET", Home: "SEA", Week: 4, Winner: null, Code: "DET-SEA-004", readOnly: false,
    },{
      Away: "MIA", Home: "TEN", Week: 4, Winner: null, Code: "MIA-TEN-004", readOnly: false,
    },{
      Away: "ARI", Home: "WAS", Week: 4, Winner: null, Code: "ARI-WAS-004", readOnly: false,
    },{
      Away: "SFO", Home: "ARI", Week: 5, Winner: null, Code: "SFO-ARI-005", readOnly: false,
    },{
      Away: "CIN", Home: "BAL", Week: 5, Winner: null, Code: "CIN-BAL-005", readOnly: false,
    },{
      Away: "HOU", Home: "BUF", Week: 5, Winner: null, Code: "HOU-BUF-005", readOnly: false,
    },{
      Away: "CHI", Home: "CAR", Week: 5, Winner: null, Code: "CHI-CAR-005", readOnly: false,
    },{
      Away: "WAS", Home: "CLE", Week: 5, Winner: null, Code: "WAS-CLE-005", readOnly: false,
    },{
      Away: "PIT", Home: "DAL", Week: 5, Winner: null, Code: "PIT-DAL-005", readOnly: false,
    },{
      Away: "LAR", Home: "GNB", Week: 5, Winner: null, Code: "LAR-GNB-005", readOnly: false,
    },{
      Away: "JAX", Home: "IND", Week: 5, Winner: null, Code: "JAX-IND-005", readOnly: false,
    },{
      Away: "DEN", Home: "LVR", Week: 5, Winner: null, Code: "DEN-LVR-005", readOnly: false,
    },{
      Away: "NWE", Home: "MIA", Week: 5, Winner: null, Code: "NWE-MIA-005", readOnly: false,
    },{
      Away: "KAN", Home: "NOR", Week: 5, Winner: null, Code: "KAN-NOR-005", readOnly: false,
    },{
      Away: "SEA", Home: "NYG", Week: 5, Winner: null, Code: "SEA-NYG-005", readOnly: false,
    },{
      Away: "MIN", Home: "NYJ", Week: 5, Winner: null, Code: "MIN-NYJ-005", readOnly: false,
    },{
      Away: "ATL", Home: "TAM", Week: 5, Winner: null, Code: "ATL-TAM-005", readOnly: false,
    },{
      Away: "GNB", Home: "ARI", Week: 6, Winner: null, Code: "GNB-ARI-006", readOnly: false,
    },{
      Away: "CAR", Home: "ATL", Week: 6, Winner: null, Code: "CAR-ATL-006", readOnly: false,
    },{
      Away: "NYJ", Home: "BUF", Week: 6, Winner: null, Code: "NYJ-BUF-006", readOnly: false,
    },{
      Away: "NYG", Home: "CIN", Week: 6, Winner: null, Code: "NYG-CIN-006", readOnly: false,
    },{
      Away: "PHI", Home: "CLE", Week: 6, Winner: null, Code: "PHI-CLE-006", readOnly: false,
    },{
      Away: "DAL", Home: "DET", Week: 6, Winner: null, Code: "DAL-DET-006", readOnly: false,
    },{
      Away: "NWE", Home: "HOU", Week: 6, Winner: null, Code: "NWE-HOU-006", readOnly: false,
    },{
      Away: "TEN", Home: "IND", Week: 6, Winner: null, Code: "TEN-IND-006", readOnly: false,
    },{
      Away: "CHI", Home: "JAX", Week: 6, Winner: null, Code: "CHI-JAX-006", readOnly: false,
    },{
      Away: "DEN", Home: "LAC", Week: 6, Winner: null, Code: "DEN-LAC-006", readOnly: false,
    },{
      Away: "LVR", Home: "PIT", Week: 6, Winner: null, Code: "LVR-PIT-006", readOnly: false,
    },{
      Away: "SEA", Home: "SFO", Week: 6, Winner: null, Code: "SEA-SFO-006", readOnly: false,
    },{
      Away: "NOR", Home: "TAM", Week: 6, Winner: null, Code: "NOR-TAM-006", readOnly: false,
    },{
      Away: "BAL", Home: "WAS", Week: 6, Winner: null, Code: "BAL-WAS-006", readOnly: false,
    },{
      Away: "TAM", Home: "BAL", Week: 7, Winner: null, Code: "TAM-BAL-007", readOnly: false,
    },{
      Away: "WAS", Home: "CAR", Week: 7, Winner: null, Code: "WAS-CAR-007", readOnly: false,
    },{
      Away: "CLE", Home: "CIN", Week: 7, Winner: null, Code: "CLE-CIN-007", readOnly: false,
    },{
      Away: "NOR", Home: "DEN", Week: 7, Winner: null, Code: "NOR-DEN-007", readOnly: false,
    },{
      Away: "MIN", Home: "DET", Week: 7, Winner: null, Code: "MIN-DET-007", readOnly: false,
    },{
      Away: "GNB", Home: "HOU", Week: 7, Winner: null, Code: "GNB-HOU-007", readOnly: false,
    },{
      Away: "SFO", Home: "KAN", Week: 7, Winner: null, Code: "SFO-KAN-007", readOnly: false,
    },{
      Away: "ARI", Home: "LAC", Week: 7, Winner: null, Code: "ARI-LAC-007", readOnly: false,
    },{
      Away: "LAR", Home: "LVR", Week: 7, Winner: null, Code: "LAR-LVR-007", readOnly: false,
    },{
      Away: "IND", Home: "MIA", Week: 7, Winner: null, Code: "IND-MIA-007", readOnly: false,
    },{
      Away: "JAX", Home: "NWE", Week: 7, Winner: null, Code: "JAX-NWE-007", readOnly: false,
    },{
      Away: "PIT", Home: "NYJ", Week: 7, Winner: null, Code: "PIT-NYJ-007", readOnly: false,
    },{
      Away: "NYG", Home: "PHI", Week: 7, Winner: null, Code: "NYG-PHI-007", readOnly: false,
    },{
      Away: "ATL", Home: "SEA", Week: 7, Winner: null, Code: "ATL-SEA-007", readOnly: false,
    },{
      Away: "BUF", Home: "TEN", Week: 7, Winner: null, Code: "BUF-TEN-007", readOnly: false,
    },{
      Away: "MIA", Home: "ARI", Week: 8, Winner: null, Code: "MIA-ARI-008", readOnly: false,
    },{
      Away: "TAM", Home: "ATL", Week: 8, Winner: null, Code: "TAM-ATL-008", readOnly: false,
    },{
      Away: "CLE", Home: "BAL", Week: 8, Winner: null, Code: "CLE-BAL-008", readOnly: false,
    },{
      Away: "SEA", Home: "BUF", Week: 8, Winner: null, Code: "SEA-BUF-008", readOnly: false,
    },{
      Away: "DEN", Home: "CAR", Week: 8, Winner: null, Code: "DEN-CAR-008", readOnly: false,
    },{
      Away: "WAS", Home: "CHI", Week: 8, Winner: null, Code: "WAS-CHI-008", readOnly: false,
    },{
      Away: "SFO", Home: "DAL", Week: 8, Winner: null, Code: "SFO-DAL-008", readOnly: false,
    },{
      Away: "JAX", Home: "GNB", Week: 8, Winner: null, Code: "JAX-GNB-008", readOnly: false,
    },{
      Away: "HOU", Home: "IND", Week: 8, Winner: null, Code: "HOU-IND-008", readOnly: false,
    },{
      Away: "LVR", Home: "KAN", Week: 8, Winner: null, Code: "LVR-KAN-008", readOnly: false,
    },{
      Away: "LAR", Home: "MIN", Week: 8, Winner: null, Code: "LAR-MIN-008", readOnly: false,
    },{
      Away: "LAC", Home: "NOR", Week: 8, Winner: null, Code: "LAC-NOR-008", readOnly: false,
    },{
      Away: "PIT", Home: "NYG", Week: 8, Winner: null, Code: "PIT-NYG-008", readOnly: false,
    },{
      Away: "NWE", Home: "NYJ", Week: 8, Winner: null, Code: "NWE-NYJ-008", readOnly: false,
    },{
      Away: "CIN", Home: "PHI", Week: 8, Winner: null, Code: "CIN-PHI-008", readOnly: false,
    },{
      Away: "DET", Home: "TEN", Week: 8, Winner: null, Code: "DET-TEN-008", readOnly: false,
    },{
      Away: "ARI", Home: "CHI", Week: 9, Winner: null, Code: "ARI-CHI-009", readOnly: false,
    },{
      Away: "ATL", Home: "DAL", Week: 9, Winner: null, Code: "ATL-DAL-009", readOnly: false,
    },{
      Away: "BAL", Home: "DEN", Week: 9, Winner: null, Code: "BAL-DEN-009", readOnly: false,
    },{
      Away: "GNB", Home: "DET", Week: 9, Winner: null, Code: "GNB-DET-009", readOnly: false,
    },{
      Away: "NYJ", Home: "HOU", Week: 9, Winner: null, Code: "NYJ-HOU-009", readOnly: false,
    },{
      Away: "MIN", Home: "IND", Week: 9, Winner: null, Code: "MIN-IND-009", readOnly: false,
    },{
      Away: "PHI", Home: "JAX", Week: 9, Winner: null, Code: "PHI-JAX-009", readOnly: false,
    },{
      Away: "CLE", Home: "LAC", Week: 9, Winner: null, Code: "CLE-LAC-009", readOnly: false,
    },{
      Away: "SEA", Home: "LAR", Week: 9, Winner: null, Code: "SEA-LAR-009", readOnly: false,
    },{
      Away: "CIN", Home: "LVR", Week: 9, Winner: null, Code: "CIN-LVR-009", readOnly: false,
    },{
      Away: "BUF", Home: "MIA", Week: 9, Winner: null, Code: "BUF-MIA-009", readOnly: false,
    },{
      Away: "CAR", Home: "NOR", Week: 9, Winner: null, Code: "CAR-NOR-009", readOnly: false,
    },{
      Away: "TEN", Home: "NWE", Week: 9, Winner: null, Code: "TEN-NWE-009", readOnly: false,
    },{
      Away: "KAN", Home: "TAM", Week: 9, Winner: null, Code: "KAN-TAM-009", readOnly: false,
    },{
      Away: "NYG", Home: "WAS", Week: 9, Winner: null, Code: "NYG-WAS-009", readOnly: false,
    },{
      Away: "NOR", Home: "ATL", Week: 10, Winner: null, Code: "NOR-ATL-010", readOnly: false,
    },{
      Away: "IND", Home: "BUF", Week: 10, Winner: null, Code: "IND-BUF-010", readOnly: false,
    },{
      Away: "BAL", Home: "CIN", Week: 10, Winner: null, Code: "BAL-CIN-010", readOnly: false,
    },{
      Away: "KAN", Home: "DEN", Week: 10, Winner: null, Code: "KAN-DEN-010", readOnly: false,
    },{
      Away: "HOU", Home: "DET", Week: 10, Winner: null, Code: "HOU-DET-010", readOnly: false,
    },{
      Away: "LAR", Home: "MIA", Week: 10, Winner: null, Code: "LAR-MIA-010", readOnly: false,
    },{
      Away: "JAX", Home: "MIN", Week: 10, Winner: null, Code: "JAX-MIN-010", readOnly: false,
    },{
      Away: "CHI", Home: "NWE", Week: 10, Winner: null, Code: "CHI-NWE-010", readOnly: false,
    },{
      Away: "CAR", Home: "NYG", Week: 10, Winner: null, Code: "CAR-NYG-010", readOnly: false,
    },{
      Away: "ARI", Home: "NYJ", Week: 10, Winner: null, Code: "ARI-NYJ-010", readOnly: false,
    },{
      Away: "DAL", Home: "PHI", Week: 10, Winner: null, Code: "DAL-PHI-010", readOnly: false,
    },{
      Away: "WAS", Home: "PIT", Week: 10, Winner: null, Code: "WAS-PIT-010", readOnly: false,
    },{
      Away: "TAM", Home: "SFO", Week: 10, Winner: null, Code: "TAM-SFO-010", readOnly: false,
    },{
      Away: "LAC", Home: "TEN", Week: 10, Winner: null, Code: "LAC-TEN-010", readOnly: false,
    },{
      Away: "DEN", Home: "ATL", Week: 11, Winner: null, Code: "DEN-ATL-011", readOnly: false,
    },{
      Away: "PIT", Home: "BAL", Week: 11, Winner: null, Code: "PIT-BAL-011", readOnly: false,
    },{
      Away: "LAC", Home: "CIN", Week: 11, Winner: null, Code: "LAC-CIN-011", readOnly: false,
    },{
      Away: "NOR", Home: "CLE", Week: 11, Winner: null, Code: "NOR-CLE-011", readOnly: false,
    },{
      Away: "CHI", Home: "GNB", Week: 11, Winner: null, Code: "CHI-GNB-011", readOnly: false,
    },{
      Away: "DAL", Home: "HOU", Week: 11, Winner: null, Code: "DAL-HOU-011", readOnly: false,
    },{
      Away: "NYJ", Home: "IND", Week: 11, Winner: null, Code: "NYJ-IND-011", readOnly: false,
    },{
      Away: "DET", Home: "JAX", Week: 11, Winner: null, Code: "DET-JAX-011", readOnly: false,
    },{
      Away: "BUF", Home: "KAN", Week: 11, Winner: null, Code: "BUF-KAN-011", readOnly: false,
    },{
      Away: "NWE", Home: "LAR", Week: 11, Winner: null, Code: "NWE-LAR-011", readOnly: false,
    },{
      Away: "MIA", Home: "LVR", Week: 11, Winner: null, Code: "MIA-LVR-011", readOnly: false,
    },{
      Away: "TEN", Home: "MIN", Week: 11, Winner: null, Code: "TEN-MIN-011", readOnly: false,
    },{
      Away: "SFO", Home: "SEA", Week: 11, Winner: null, Code: "SFO-SEA-011", readOnly: false,
    },{
      Away: "PHI", Home: "WAS", Week: 11, Winner: null, Code: "PHI-WAS-011", readOnly: false,
    },{
      Away: "SEA", Home: "ARI", Week: 12, Winner: null, Code: "SEA-ARI-012", readOnly: false,
    },{
      Away: "LAC", Home: "BAL", Week: 12, Winner: null, Code: "LAC-BAL-012", readOnly: false,
    },{
      Away: "WAS", Home: "DAL", Week: 12, Winner: null, Code: "WAS-DAL-012", readOnly: false,
    },{
      Away: "LVR", Home: "DEN", Week: 12, Winner: null, Code: "LVR-DEN-012", readOnly: false,
    },{
      Away: "IND", Home: "DET", Week: 12, Winner: null, Code: "IND-DET-012", readOnly: false,
    },{
      Away: "CAR", Home: "KAN", Week: 12, Winner: null, Code: "CAR-KAN-012", readOnly: false,
    },{
      Away: "CHI", Home: "MIN", Week: 12, Winner: null, Code: "CHI-MIN-012", readOnly: false,
    },{
      Away: "MIA", Home: "NWE", Week: 12, Winner: null, Code: "MIA-NWE-012", readOnly: false,
    },{
      Away: "LAR", Home: "PHI", Week: 12, Winner: null, Code: "LAR-PHI-012", readOnly: false,
    },{
      Away: "CLE", Home: "PIT", Week: 12, Winner: null, Code: "CLE-PIT-012", readOnly: false,
    },{
      Away: "GNB", Home: "SFO", Week: 12, Winner: null, Code: "GNB-SFO-012", readOnly: false,
    },{
      Away: "NYG", Home: "TAM", Week: 12, Winner: null, Code: "NYG-TAM-012", readOnly: false,
    },{
      Away: "HOU", Home: "TEN", Week: 12, Winner: null, Code: "HOU-TEN-012", readOnly: false,
    },{
      Away: "MIN", Home: "ARI", Week: 13, Winner: null, Code: "MIN-ARI-013", readOnly: false,
    },{
      Away: "DET", Home: "CHI", Week: 13, Winner: null, Code: "DET-CHI-013", readOnly: false,
    },{
      Away: "DEN", Home: "CLE", Week: 13, Winner: null, Code: "DEN-CLE-013", readOnly: false,
    },{
      Away: "JAX", Home: "HOU", Week: 13, Winner: null, Code: "JAX-HOU-013", readOnly: false,
    },{
      Away: "NWE", Home: "IND", Week: 13, Winner: null, Code: "NWE-IND-013", readOnly: false,
    },{
      Away: "ATL", Home: "LAC", Week: 13, Winner: null, Code: "ATL-LAC-013", readOnly: false,
    },{
      Away: "NOR", Home: "LAR", Week: 13, Winner: null, Code: "NOR-LAR-013", readOnly: false,
    },{
      Away: "KAN", Home: "LVR", Week: 13, Winner: null, Code: "KAN-LVR-013", readOnly: false,
    },{
      Away: "GNB", Home: "MIA", Week: 13, Winner: null, Code: "GNB-MIA-013", readOnly: false,
    },{
      Away: "DAL", Home: "NYG", Week: 13, Winner: null, Code: "DAL-NYG-013", readOnly: false,
    },{
      Away: "BAL", Home: "PHI", Week: 13, Winner: null, Code: "BAL-PHI-013", readOnly: false,
    },{
      Away: "CIN", Home: "PIT", Week: 13, Winner: null, Code: "CIN-PIT-013", readOnly: false,
    },{
      Away: "NYJ", Home: "SEA", Week: 13, Winner: null, Code: "NYJ-SEA-013", readOnly: false,
    },{
      Away: "BUF", Home: "SFO", Week: 13, Winner: null, Code: "BUF-SFO-013", readOnly: false,
    },{
      Away: "CAR", Home: "TAM", Week: 13, Winner: null, Code: "CAR-TAM-013", readOnly: false,
    },{
      Away: "WAS", Home: "TEN", Week: 13, Winner: null, Code: "WAS-TEN-013", readOnly: false,
    },{
      Away: "MIN", Home: "ATL", Week: 14, Winner: null, Code: "MIN-ATL-014", readOnly: false,
    },{
      Away: "LAR", Home: "BUF", Week: 14, Winner: null, Code: "LAR-BUF-014", readOnly: false,
    },{
      Away: "PHI", Home: "CAR", Week: 14, Winner: null, Code: "PHI-CAR-014", readOnly: false,
    },{
      Away: "SFO", Home: "CHI", Week: 14, Winner: null, Code: "SFO-CHI-014", readOnly: false,
    },{
      Away: "DAL", Home: "CIN", Week: 14, Winner: null, Code: "DAL-CIN-014", readOnly: false,
    },{
      Away: "PIT", Home: "CLE", Week: 14, Winner: null, Code: "PIT-CLE-014", readOnly: false,
    },{
      Away: "DET", Home: "GNB", Week: 14, Winner: null, Code: "DET-GNB-014", readOnly: false,
    },{
      Away: "TEN", Home: "JAX", Week: 14, Winner: null, Code: "TEN-JAX-014", readOnly: false,
    },{
      Away: "KAN", Home: "LAC", Week: 14, Winner: null, Code: "KAN-LAC-014", readOnly: false,
    },{
      Away: "TAM", Home: "LVR", Week: 14, Winner: null, Code: "TAM-LVR-014", readOnly: false,
    },{
      Away: "NYG", Home: "NOR", Week: 14, Winner: null, Code: "NYG-NOR-014", readOnly: false,
    },{
      Away: "MIA", Home: "NYJ", Week: 14, Winner: null, Code: "MIA-NYJ-014", readOnly: false,
    },{
      Away: "ARI", Home: "SEA", Week: 14, Winner: null, Code: "ARI-SEA-014", readOnly: false,
    },{
      Away: "LVR", Home: "ATL", Week: 15, Winner: null, Code: "LVR-ATL-015", readOnly: false,
    },{
      Away: "NYG", Home: "BAL", Week: 15, Winner: null, Code: "NYG-BAL-015", readOnly: false,
    },{
      Away: "DET", Home: "BUF", Week: 15, Winner: null, Code: "DET-BUF-015", readOnly: false,
    },{
      Away: "MIN", Home: "CHI", Week: 15, Winner: null, Code: "MIN-CHI-015", readOnly: false,
    },{
      Away: "TEN", Home: "CIN", Week: 15, Winner: null, Code: "TEN-CIN-015", readOnly: false,
    },{
      Away: "CAR", Home: "DAL", Week: 15, Winner: null, Code: "CAR-DAL-015", readOnly: false,
    },{
      Away: "SEA", Home: "GNB", Week: 15, Winner: null, Code: "SEA-GNB-015", readOnly: false,
    },{
      Away: "DEN", Home: "IND", Week: 15, Winner: null, Code: "DEN-IND-015", readOnly: false,
    },{
      Away: "CLE", Home: "KAN", Week: 15, Winner: null, Code: "CLE-KAN-015", readOnly: false,
    },{
      Away: "SFO", Home: "LAR", Week: 15, Winner: null, Code: "SFO-LAR-015", readOnly: false,
    },{
      Away: "HOU", Home: "MIA", Week: 15, Winner: null, Code: "HOU-MIA-015", readOnly: false,
    },{
      Away: "ARI", Home: "NWE", Week: 15, Winner: null, Code: "ARI-NWE-015", readOnly: false,
    },{
      Away: "JAX", Home: "NYJ", Week: 15, Winner: null, Code: "JAX-NYJ-015", readOnly: false,
    },{
      Away: "PHI", Home: "PIT", Week: 15, Winner: null, Code: "PHI-PIT-015", readOnly: false,
    },{
      Away: "LAC", Home: "TAM", Week: 15, Winner: null, Code: "LAC-TAM-015", readOnly: false,
    },{
      Away: "NOR", Home: "WAS", Week: 15, Winner: null, Code: "NOR-WAS-015", readOnly: false,
    },{
      Away: "CAR", Home: "ARI", Week: 16, Winner: null, Code: "CAR-ARI-016", readOnly: false,
    },{
      Away: "CIN", Home: "CLE", Week: 16, Winner: null, Code: "CIN-CLE-016", readOnly: false,
    },{
      Away: "LAC", Home: "DEN", Week: 16, Winner: null, Code: "LAC-DEN-016", readOnly: false,
    },{
      Away: "CHI", Home: "DET", Week: 16, Winner: null, Code: "CHI-DET-016", readOnly: false,
    },{
      Away: "KAN", Home: "HOU", Week: 16, Winner: null, Code: "KAN-HOU-016", readOnly: false,
    },{
      Away: "LVR", Home: "JAX", Week: 16, Winner: null, Code: "LVR-JAX-016", readOnly: false,
    },{
      Away: "NYJ", Home: "LAR", Week: 16, Winner: null, Code: "NYJ-LAR-016", readOnly: false,
    },{
      Away: "SEA", Home: "MIN", Week: 16, Winner: null, Code: "SEA-MIN-016", readOnly: false,
    },{
      Away: "GNB", Home: "NOR", Week: 16, Winner: null, Code: "GNB-NOR-016", readOnly: false,
    },{
      Away: "BUF", Home: "NWE", Week: 16, Winner: null, Code: "BUF-NWE-016", readOnly: false,
    },{
      Away: "ATL", Home: "NYG", Week: 16, Winner: null, Code: "ATL-NYG-016", readOnly: false,
    },{
      Away: "WAS", Home: "PHI", Week: 16, Winner: null, Code: "WAS-PHI-016", readOnly: false,
    },{
      Away: "BAL", Home: "PIT", Week: 16, Winner: null, Code: "BAL-PIT-016", readOnly: false,
    },{
      Away: "MIA", Home: "SFO", Week: 16, Winner: null, Code: "MIA-SFO-016", readOnly: false,
    },{
      Away: "DAL", Home: "TAM", Week: 16, Winner: null, Code: "DAL-TAM-016", readOnly: false,
    },{
      Away: "IND", Home: "TEN", Week: 16, Winner: null, Code: "IND-TEN-016", readOnly: false,
    },{
      Away: "LAR", Home: "ARI", Week: 17, Winner: null, Code: "LAR-ARI-017", readOnly: false,
    },{
      Away: "WAS", Home: "ATL", Week: 17, Winner: null, Code: "WAS-ATL-017", readOnly: false,
    },{
      Away: "HOU", Home: "BAL", Week: 17, Winner: null, Code: "HOU-BAL-017", readOnly: false,
    },{
      Away: "TAM", Home: "CAR", Week: 17, Winner: null, Code: "TAM-CAR-017", readOnly: false,
    },{
      Away: "PHI", Home: "DAL", Week: 17, Winner: null, Code: "PHI-DAL-017", readOnly: false,
    },{
      Away: "CIN", Home: "DEN", Week: 17, Winner: null, Code: "CIN-DEN-017", readOnly: false,
    },{
      Away: "SFO", Home: "DET", Week: 17, Winner: null, Code: "SFO-DET-017", readOnly: false,
    },{
      Away: "MIN", Home: "GNB", Week: 17, Winner: null, Code: "MIN-GNB-017", readOnly: false,
    },{
      Away: "NYG", Home: "IND", Week: 17, Winner: null, Code: "NYG-IND-017", readOnly: false,
    },{
      Away: "PIT", Home: "KAN", Week: 17, Winner: null, Code: "PIT-KAN-017", readOnly: false,
    },{
      Away: "NWE", Home: "LAC", Week: 17, Winner: null, Code: "NWE-LAC-017", readOnly: false,
    },{
      Away: "NOR", Home: "LVR", Week: 17, Winner: null, Code: "NOR-LVR-017", readOnly: false,
    },{
      Away: "CLE", Home: "MIA", Week: 17, Winner: null, Code: "CLE-MIA-017", readOnly: false,
    },{
      Away: "BUF", Home: "NYJ", Week: 17, Winner: null, Code: "BUF-NYJ-017", readOnly: false,
    },{
      Away: "CHI", Home: "SEA", Week: 17, Winner: null, Code: "CHI-SEA-017", readOnly: false,
    },{
      Away: "JAX", Home: "TEN", Week: 17, Winner: null, Code: "JAX-TEN-017", readOnly: false,
    },{
      Away: "NWE", Home: "BUF", Week: 18, Winner: null, Code: "NWE-BUF-018", readOnly: false,
    },{
      Away: "ATL", Home: "CAR", Week: 18, Winner: null, Code: "ATL-CAR-018", readOnly: false,
    },{
      Away: "GNB", Home: "CHI", Week: 18, Winner: null, Code: "GNB-CHI-018", readOnly: false,
    },{
      Away: "PIT", Home: "CIN", Week: 18, Winner: null, Code: "PIT-CIN-018", readOnly: false,
    },{
      Away: "BAL", Home: "CLE", Week: 18, Winner: null, Code: "BAL-CLE-018", readOnly: false,
    },{
      Away: "TEN", Home: "HOU", Week: 18, Winner: null, Code: "TEN-HOU-018", readOnly: false,
    },{
      Away: "IND", Home: "JAX", Week: 18, Winner: null, Code: "IND-JAX-018", readOnly: false,
    },{
      Away: "DEN", Home: "KAN", Week: 18, Winner: null, Code: "DEN-KAN-018", readOnly: false,
    },{
      Away: "LVR", Home: "LAC", Week: 18, Winner: null, Code: "LVR-LAC-018", readOnly: false,
    },{
      Away: "NYJ", Home: "MIA", Week: 18, Winner: null, Code: "NYJ-MIA-018", readOnly: false,
    },{
      Away: "DET", Home: "MIN", Week: 18, Winner: null, Code: "DET-MIN-018", readOnly: false,
    },{
      Away: "TAM", Home: "NOR", Week: 18, Winner: null, Code: "TAM-NOR-018", readOnly: false,
    },{
      Away: "PHI", Home: "NYG", Week: 18, Winner: null, Code: "PHI-NYG-018", readOnly: false,
    },{
      Away: "LAR", Home: "SEA", Week: 18, Winner: null, Code: "LAR-SEA-018", readOnly: false,
    },{
      Away: "ARI", Home: "SFO", Week: 18, Winner: null, Code: "ARI-SFO-018", readOnly: false,
    },{
      Away: "DAL", Home: "WAS", Week: 18, Winner: null, Code: "DAL-WAS-018", readOnly: false,
    }
  ]
}