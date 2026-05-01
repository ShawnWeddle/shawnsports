import type { NBATeamType, PickYearType, PickCodeType } from "./NBAdata";

type ProtectionValueType = "UP" | "FUP" | "FS"; 
type SwapRightType = "positive" | "negative" | "neutral";

export type PickType = { 
  nativeTeam: NBATeamType | "NBA", 
  year: number, 
  history?: NBATeamType[], 
  protection?: ProtectionValueType, 
  swap?: [SwapRightType, NBATeamType],
  conditions?: {
    rank: "MF" | "SMF" | "SLF" | "LF", 
    teams: NBATeamType[],
    owner: NBATeamType,
  }
};

export const AllNBAPicks2: {[Key in NBATeamType] : {[Key in PickYearType] : PickType[]}} = {
"ATL": {
  "2026": [{
    nativeTeam: "CLE",
    year: 2026,
    history: ["CLE", "ATL"],
  },{
    nativeTeam: "NOP",
    year: 2026,
    history: ["NOP", "ATL"],
  },],
  "2027": [{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "LF",
      teams: ["MIL", "NOP"],
      owner: "NOP",
    },
  },],
  "2028": [{
    nativeTeam: "ATL",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "ATL",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "ATL",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "ATL",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "ATL",
    year: 2032,
  },],
},"BOS": {
  "2026": [{
    nativeTeam: "BOS",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "BOS",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "BOS",
    year: 2028,
    swap: ["negative", "SAS"],
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "BOS",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "BOS",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "BOS",
    year: 2032,
  },],
},"BRK": {
  "2026": [{
    nativeTeam: "BRK",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "BRK",
    year: 2027,
    swap: ["negative", "HOU"],
  },{
    nativeTeam: "NYK",
    year: 2027,
    history: ["NYK", "BRK"],
    protection: "UP",
  },],
  "2028": [{
    nativeTeam: "BRK",
    year: 2028,
    swap: ["positive", "PHO"],
  },{
    nativeTeam: "PHI",
    year: 2028,
    history: ["PHI", "BRK"],
    protection: "FS",
  },],
  "2029": [{
    nativeTeam: "BRK",
    year: 2029,
  },{
    nativeTeam: "NYK",
    year: 2029,
    history: ["NYK", "BRK"],
    protection: "UP",
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "LF",
      teams: ["DAL", "HOU", "PHO"],
      owner: "BRK",
    },
  },],
  "2030": [{
    nativeTeam: "BRK",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "BRK",
    year: 2031,
  },{
    nativeTeam: "NYK",
    year: 2031,
    history: ["NYK", "BRK"],
    protection: "UP",
  },],
  "2032": [{
    nativeTeam: "BRK",
    year: 2032,
  },{
    nativeTeam: "DEN",
    year: 2032,
    history: ["DEN", "BRK"],
  },],
},"CHI": {
  "2026": [{
    nativeTeam: "CHI",
    year: 2026,
  },{
    nativeTeam: "POR",
    year: 2026,
    history: ["POR", "CHI"],
    protection: "FUP",
  },],
  "2027": [{
    nativeTeam: "CHI",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "CHI",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "CHI",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "CHI",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "CHI",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "CHI",
    year: 2032,
  },],
},"CHO": {
  "2026": [{
    nativeTeam: "CHO",
    year: 2026,
  },{
    nativeTeam: "ORL",
    year: 2026,
    history: ["ORL", "PHO", "CHO"],
  },],
  "2027": [{
    nativeTeam: "CHO",
    year: 2027,
  },{
    nativeTeam: "DAL",
    year: 2027,
    history: ["DAL", "CHO"],
  },{
    nativeTeam: "MIA",
    year: 2027,
    history: ["MIA", "CHO"],
  },],
  "2028": [{
    nativeTeam: "CHO",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "CHO",
    year: 2029,
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "LF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "CHO",
    },
  },],
  "2030": [{
    nativeTeam: "CHO",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "CHO",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "CHO",
    year: 2032,
  },],
},"CLE": {
  "2026": [{
    nativeTeam: "SAS",
    year: 2026,
    history: ["SAS", "ATL", "CLE"],
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "CLE",
    year: 2028,
    swap: ["negative", "UTA"],
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "CLE",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "CLE",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "CLE",
    year: 2032,
  },],
},"DAL": {
  "2026": [{
    nativeTeam: "DAL",
    year: 2026,
  },{
    nativeTeam: "OKC",
    year: 2026,
    history: ["OKC", "PHI", "WAS", "DAL"],
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "DAL",
    year: 2028,
    swap: ["negative", "OKC"],
  },],
  "2029": [{
    nativeTeam: "LAL",
    year: 2029,
    history: ["LAL", "DAL"],
  },],
  "2030": [{
    nativeTeam: "DAL",
    year: 2030,
    swap: ["negative", "SAS"],
  },{
    nativeTeam: "GSW",
    year: 2030,
    history: ["GSW", "WAS", "DAL"],
    protection: "FS",
  },],
  "2031": [{
    nativeTeam: "DAL",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "DAL",
    year: 2032,
  },],
},"DEN": {
  "2026": [{
    nativeTeam: "DEN",
    year: 2026,
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "DEN",
    year: 2028,
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "DEN",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "DEN",
    year: 2031,
  },],
  "2032": [],
},"DET": {
  "2026": [{
    nativeTeam: "MIN",
    year: 2026,
    history: ["MIN", "DET"],
  },],
  "2027": [{
    nativeTeam: "DET",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "DET",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "DET",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "DET",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "DET",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "DET",
    year: 2032,
  },],
},"GSW": {
  "2026": [{
    nativeTeam: "GSW",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "GSW",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "GSW",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "GSW",
    year: 2029,
  },],
  "2030": [],
  "2031": [{
    nativeTeam: "GSW",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "GSW",
    year: 2032,
  },],
},"HOU": {
  "2026": [],
  "2027": [{
    nativeTeam: "HOU",
    year: 2027,
    swap: ["positive", "BRK"],
  },{
    nativeTeam: "PHO",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "HOU",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "MF",
      teams: ["DAL", "HOU", "PHO"],
      owner: "HOU",
    },
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "SMF",
      teams: ["DAL", "HOU", "PHO"],
      owner: "HOU",
    },
  },],
  "2030": [{
    nativeTeam: "HOU",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "HOU",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "HOU",
    year: 2032,
  },],
},"IND": {
  "2026": [{
    nativeTeam: "IND",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "IND",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "IND",
    year: 2028,
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "IND",
    year: 2030,
  },],
  "2031": [],
  "2032": [{
    nativeTeam: "IND",
    year: 2032,
  },],
},"LAC": {
  "2026": [],
  "2027": [{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "LF",
      teams: ["DEN", "LAC", "OKC"],
      owner: "LAC",
    },
  },],
  "2028": [],
  "2029": [{
    nativeTeam: "LAC",
    year: 2029,
    swap: ["negative", "PHI"],
  },{
    nativeTeam: "IND",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "LAC",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "LAC",
    year: 2031,
  },{
    nativeTeam: "IND",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "LAC",
    year: 2032,
  },],
},"LAL": {
  "2026": [{
    nativeTeam: "LAL",
    year: 2026,
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "LAL",
    year: 2028,
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "LAL",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "LAL",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "LAL",
    year: 2032,
  },],
},"MEM": {
  "2026": [{
    nativeTeam: "MEM",
    year: 2026,
  },{
    nativeTeam: "PHO",
    year: 2026,
    history: ["PHO", "ORL", "MEM"],
  },],
  "2027": [{
    nativeTeam: "MEM",
    year: 2027,
  },{
    nativeTeam: "LAL",
    year: 2027,
    history: ["LAL","UTA", "MEM"],
    protection: "FS",
  },{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "MF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "MEM",
    },
  },],
  "2028": [{
    nativeTeam: "MEM",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "MEM",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "MEM",
    year: 2030,
  },{
    nativeTeam: "ORL",
    year: 2030,
    history: ["ORL", "MEM"],
    protection: "UP",
  },],
  "2031": [{
    nativeTeam: "MEM",
    year: 2031,
  },{
    nativeTeam: "PHO",
    year: 2031,
    history: ["PHO", "UTA", "MEM"],
    protection: "UP",
  },],
  "2032": [{
    nativeTeam: "MEM",
    year: 2032,
  },],
},"MIA": {
  "2026": [{
    nativeTeam: "MIA",
    year: 2026,
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "MIA",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "MIA",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "MIA",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "MIA",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "MIA",
    year: 2032,
  },],
},"MIL": {
  "2026": [{
    nativeTeam: "MIL",
    year: 2026,
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "MIL",
    year: 2028,
    swap: ["negative", "POR"],
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "MIL",
    year: 2030,
    swap: ["negative", "POR"],
  },],
  "2031": [{
    nativeTeam: "MIL",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "MIL",
    year: 2032,
  },],
},"MIN": {
  "2026": [{
    nativeTeam: "DET",
    year: 2026,
    history: ["DET", "MIN"],
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "MIN",
    year: 2028,
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "MIN",
    year: 2030,
  },],
  "2031": [],
  "2032": [{
    nativeTeam: "MIN",
    year: 2032,
  },],
},"NOP": {
  "2026": [],
  "2027": [{
    nativeTeam: "NOP",
    year: 2027,
    swap: ["positive", "MIL"],
  },],
  "2028": [{
    nativeTeam: "NOP",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "NOP",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "NOP",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "NOP",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "NOP",
    year: 2032,
  },],
},"NYK": {
  "2026": [{
    nativeTeam: "NYK",
    year: 2026,
  },],
  "2027": [],
  "2028": [{
    nativeTeam: "NYK",
    year: 2028,
  },],
  "2029": [],
  "2030": [{
    nativeTeam: "NYK",
    year: 2030,
  },],
  "2031": [],
  "2032": [{
    nativeTeam: "NYK",
    year: 2032,
  },],
},"OKC": {
  "2026": [{
    nativeTeam: "LAC",
    year: 2026,
    history: ["LAC", "OKC"],
  },{
    nativeTeam: "PHI",
    year: 2026,
    history: ["PHI", "OKC"],
  },],
  "2027": [{
    nativeTeam: "SAS",
    year: 2027,
    history: ["SAS", "SAC", "OKC"],
    protection: "FS",
  },{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "MF",
      teams: ["DEN", "LAC", "OKC"],
      owner: "OKC",
    },
  },{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "SMF",
      teams: ["DEN", "LAC", "OKC"],
      owner: "OKC",
    },
  },],
  "2028": [{
    nativeTeam: "OKC",
    year: 2028,
    swap: ["positive", "DAL"],
  },],
  "2029": [{
    nativeTeam: "OKC",
    year: 2029,
  },{
    nativeTeam: "DEN",
    year: 2029,
    history: ["DEN", "OKC"],
  },],
  "2030": [{
    nativeTeam: "OKC",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "OKC",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "OKC",
    year: 2032,
  },],
},"ORL": {
  "2026": [],
  "2027": [{
    nativeTeam: "ORL",
    year: 2027,
  },],
  "2028": [],
  "2029": [{
    nativeTeam: "ORL",
    year: 2029,
  },],
  "2030": [],
  "2031": [{
    nativeTeam: "ORL",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "ORL",
    year: 2032,
  },],
},"PHI": {
  "2026": [{
    nativeTeam: "HOU",
    year: 2026,
    history: ["HOU", "OKC", "PHI"],
  },],
  "2027": [{
    nativeTeam: "PHI",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "LAC",
    year: 2028,
    history: ["LAC", "PHI"],
    protection: "UP",
  },],
  "2029": [{
    nativeTeam: "PHI",
    year: 2029,
    swap: ["positive", "LAC"],
  },],
  "2030": [{
    nativeTeam: "PHI",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "PHI",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "PHI",
    year: 2032,
  },],
},"PHO": {
  "2026": [],
  "2027": [{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "LF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "PHO",
    },
  },],
  "2028": [{
    nativeTeam: "NBA",
    year: 2028,
    conditions: {
      rank: "LF",
      teams: ["BRK", "PHO", "WAS"],
      owner: "PHO",
    },
  }],
  "2029": [],
  "2030": [{
    nativeTeam: "PHO",
    year: 2030,
    swap: ["negative", "WAS"],
  },],
  "2031": [],
  "2032": [{
    nativeTeam: "PHO",
    year: 2032,
  },],
},"POR": {
  "2026": [],
  "2027": [{
    nativeTeam: "POR",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "POR",
    year: 2028,
    swap: ["positive", "MIL"],
  },{
    nativeTeam: "ORL",
    year: 2028,
    history: ["ORL", "MEM", "POR"],
  },],
  "2029": [{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "MF",
      teams: ["BOS", "MIL", "POR"],
      owner: "POR",
    },
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "LF",
      teams: ["BOS", "MIL", "POR"],
      owner: "POR",
    },
  },],
  "2030": [{
    nativeTeam: "POR",
    year: 2030,
    swap: ["positive", "MIL"],
  },],
  "2031": [{
    nativeTeam: "POR",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "POR",
    year: 2032,
  },],
},"SAC": {
  "2026": [{
    nativeTeam: "SAC",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "SAC",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "SAC",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "SAC",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "SAC",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "SAC",
    year: 2031,
    swap: ["negative", "SAS"],
  },{
    nativeTeam: "MIN",
    year: 2031,
    history: ["MIN", "SAS", "SAC"],
  },],
  "2032": [{
    nativeTeam: "SAC",
    year: 2032,
  },],
},"SAS": {
  "2026": [{
    nativeTeam: "ATL",
    year: 2026,
    history: ["ATL", "SAS"],
  },],
  "2027": [{
    nativeTeam: "ATL",
    year: 2027,
    history: ["ATL", "SAS"],
  },],
  "2028": [{
    nativeTeam: "SAS",
    year: 2028,
    swap: ["positive", "BOS"],
  },],
  "2029": [{
    nativeTeam: "SAS",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "SAS",
    year: 2030,
    swap: ["positive", "DAL"],
  },],
  "2031": [{
    nativeTeam: "SAS",
    year: 2031,
    swap: ["positive", "SAC"],
  },],
  "2032": [{
    nativeTeam: "SAS",
    year: 2032,
  },],
},"TOR": {
  "2026": [{
    nativeTeam: "TOR",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "TOR",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "TOR",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "TOR",
    year: 2029,
  },],
  "2030": [{
    nativeTeam: "TOR",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "TOR",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "TOR",
    year: 2032,
  },],
},"UTA": {
  "2026": [{
    nativeTeam: "UTA",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "NBA",
    year: 2027,
    conditions: {
      rank: "SMF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "UTA",
    },
  },],
  "2028": [{
    nativeTeam: "UTA",
    year: 2028,
    swap: ["positive", "CLE"]
  },],
  "2029": [{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "MF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "UTA",
    },
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "SMF",
      teams: ["CLE", "MIN", "UTA"],
      owner: "UTA",
    },
  },],
  "2030": [{
    nativeTeam: "UTA",
    year: 2030,
  },],
  "2031": [{
    nativeTeam: "UTA",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "UTA",
    year: 2032,
  },],
},"WAS": {
  "2026": [{
    nativeTeam: "WAS",
    year: 2026,
  },],
  "2027": [{
    nativeTeam: "WAS",
    year: 2027,
  },],
  "2028": [{
    nativeTeam: "WAS",
    year: 2028,
  },],
  "2029": [{
    nativeTeam: "WAS",
    year: 2029,
  },{
    nativeTeam: "NBA",
    year: 2029,
    conditions: {
      rank: "SMF",
      teams: ["BOS", "MIL", "POR"],
      owner: "WAS",
    },
  },],
  "2030": [{
    nativeTeam: "WAS",
    year: 2030,
    swap: ["positive", "PHO"],
  },],
  "2031": [{
    nativeTeam: "WAS",
    year: 2031,
  },],
  "2032": [{
    nativeTeam: "WAS",
    year: 2032,
  },],
},
}