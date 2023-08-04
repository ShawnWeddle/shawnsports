import { z } from "zod";

export const nbaTeams = [
  "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN",
  "DET", "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA",
  "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHO",
  "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
] as const;

export const nbaTeamsRanked: NBATeamType[] = [
  "DEN", "MIL", "PHO", "BOS", "MEM", "LAL", "PHI", "GSW",
  "MIA", "SAC", "CLE", "LAC", "OKC", "NYK", "ATL", "CHI",
  "DAL", "MIN", "NOP", "IND", "BRK", "UTA", "ORL", "TOR",
  "SAS", "CHO", "DET", "POR", "HOU", "WAS",
];

export const years = [
  "2024", "2025", "2026", "2027", "2028", "2029", "2030"
] as const;

export type NBATeamType = typeof nbaTeams[number];
export type PickYearType = typeof years[number];
export type PickCodeType = `${NBATeamType}-${PickYearType}`;

export const TeamNameEnum = z.enum(nbaTeams);
export const YearEnum = z.enum(years);

export const NBAteamData: {
  [Key in NBATeamType] : {
    rank: number,
    location: string;
    name: string;
    nickName?: string;
  }
} = {
  ATL:{  
    rank: 14,
    location: "Atlanta",
    name: "Hawks",
  },
  
  BOS:{  
    rank: 3,
    location: "Boston",
    name: "Celtics",
  },
  
  BRK:{  
    rank: 20,
    location: "Brooklyn",
    name: "Nets",
  },
  
  CHI:{  
    rank: 15,
    location: "Chicago",
    name: "Bulls",
  },
  
  CHO:{  
    rank: 26,
    location: "Charlotte",
    name: "Hornets",
  },
  
  CLE:{  
    rank: 10,
    location: "Cleveland",
    name: "Cavaliers",
    nickName: "Cavs",
  },
  
  DAL:{  
    rank: 16,
    location: "Dallas",
    name: "Mavericks",
  },
  
  DEN:{  
    rank: 0,
    location: "Denver",
    name: "Nuggets",
  },
  
  DET:{  
    rank: 27,
    location: "Detroit",
    name: "Pistons",
  },
  
  GSW:{  
    rank: 7,
    location: "Golden State",
    name: "Warriors",
  },
  
  HOU:{  
    rank: 29,
    location: "Houston",
    name: "Rockets",
  },
  
  IND:{  
    rank: 19,
    location: "Indiana",
    name: "Pacers",
  },
  
  LAC:{  
    rank: 11,
    location: "Los Angeles",
    name: "Clippers",
  },
  
  LAL:{ 
    rank: 5,
    location: "Los Angeles",
    name: "Lakers",
  },
  
  MEM:{  
    rank: 4,
    location: "Memphis",
    name: "Grizzlies",
  },
  
  MIA:{  
    rank: 8,
    location: "Miami",
    name: "Heat",
  },
  
  MIL:{  
    rank: 1,
    location: "Milwaukee",
    name: "Bucks",
  },
  
  MIN:{  
    rank: 17,
    location: "Minnesota",
    name: "Timberwolves",
    nickName: "T-wolves",
  },
  
  NOP:{  
    rank: 18,
    location: "New Orleans",
    name: "Pelicans",
  },
  
  NYK:{  
    rank: 13,
    location: "New York",
    name: "Knicks",
  },
  
  OKC:{  
    rank: 12,
    location: "Oklahoma City",
    name: "Thunder",
  },
  
  ORL:{  
    rank: 22,
    location: "Orlando",
    name: "Magic",
  },
  
  PHI:{  
    rank: 6,
    location: "Philadelphia",
    name: "76ers",
  },
  
  PHO:{  
    rank: 2,
    location: "Phoenix",
    name: "Suns",
  },
  
  POR:{  
    rank: 28,
    location: "Portland",
    name: "Trailblazers",
    nickName: "Blazers"
  },
  
  SAC:{  
    rank: 9,
    location: "Sacramento",
    name: "Kings",
  },
  
  SAS:{  
    rank: 24,
    location: "San Antonio",
    name: "Spurs",
  },
  
  TOR:{  
    rank: 23,
    location: "Toronto",
    name: "Raptors",
  },
  
  UTA:{  
    rank: 21,
    location: "Utah",
    name: "Jazz",
  },
  
  WAS:{  
    rank: 29,
    location: "Washington",
    name: "Wizards",
  },

};

export const NBApickData: {
  [Key in NBATeamType] : PickCodeType[][]
} = {
  ATL:[["ATL-2024", "SAC-2024"], [], ["ATL-2026"], [], ["ATL-2028"], ["ATL-2029"], ["ATL-2030"]],

  BOS:[["BOS-2024", "GSW-2024"], ["BOS-2025"], ["BOS-2026"], ["BOS-2027"], ["BOS-2028"], ["BOS-2029"], ["BOS-2030"]],
  
  BRK:[[], ["BRK-2025", "PHO-2025"], [], ["BRK-2027", "PHI-2027", "PHO-2027"], ["BRK-2028"], ["BRK-2029", "DAL-2029", "PHO-2029"], ["BRK-2030"]],
  
  CHI:[["CHI-2024", "POR-2024"], [], ["CHI-2026"], ["CHI-2027"], ["CHI-2028"], ["CHI-2029"], ["CHI-2030"]],
  
  CHO:[[], ["CHO-2025"], ["CHO-2026"], ["CHO-2027"], ["CHO-2028"], ["CHO-2029"], ["CHO-2030"]],
  
  CLE:[["CLE-2024"], [], ["CLE-2026"], [], ["CLE-2028"], [], ["CLE-2030"]],
  
  DAL:[[], ["DAL-2025"], ["DAL-2026"], ["DAL-2027"], ["DAL-2028"], [], ["DAL-2030"]],
  
  DEN:[["DEN-2024"], [], ["DEN-2026"], [], ["DEN-2028"], [], ["DEN-2030"]],
  
  DET:[[], ["DET-2025"], ["DET-2026"], ["DET-2027"], ["DET-2028"], ["DET-2029"], ["DET-2030"]],
  
  GSW:[[], ["GSW-2025"], ["GSW-2026"], ["GSW-2027"], ["GSW-2028"], ["GSW-2029"], ["GSW-2030"]],
  
  HOU:[["BRK-2024"], ["HOU-2025"], ["BRK-2026"], ["HOU-2027"], ["HOU-2028"], ["HOU-2029"], ["HOU-2030"]],
  
  IND:[["IND-2024", "OKC-2024"], ["IND-2025"], ["IND-2026"], ["IND-2027"], ["IND-2028"], ["IND-2029"], ["IND-2030"]],
  
  LAC:[[], ["LAC-2025"], [], ["LAC-2027"], ["LAC-2028"], ["LAC-2029"], ["LAC-2030"]],
  
  LAL:[[], ["LAL-2025"], ["LAL-2026"], [], ["LAL-2028"], ["LAL-2029"], ["LAL-2030"]],
  
  MEM:[["MEM-2024"], ["MEM-2025"], ["MEM-2026"], ["MEM-2027"], ["MEM-2028"], ["MEM-2029"], ["MEM-2030"]],
  
  MIA:[["MIA-2024"], [], ["MIA-2026"], ["MIA-2027"], ["MIA-2028"], ["MIA-2029"], ["MIA-2030"]],
  
  MIL:[["MIL-2024"], [], ["MIL-2026"], [], ["MIL-2028"], ["MIL-2029"], ["MIL-2030"]],
  
  MIN:[["MIN-2024"], [], ["MIN-2026"], [], ["MIN-2028"], [], ["MIN-2030"]],
  
  NOP:[["NOP-2024", "LAL-2024"], ["NOP-2025"], ["NOP-2026"], ["NOP-2027", "MIL-2027"], ["NOP-2028"], ["NOP-2029"], ["NOP-2030"]],
  
  NYK:[["NYK-2024", "DAL-2024", "DET-2024", "WAS-2024"], ["NYK-2025", "MIL-2025"], ["NYK-2026"], ["NYK-2027"], ["NYK-2028"], ["NYK-2029"], ["NYK-2030"]],
  
  OKC:[["HOU-2024", "LAC-2024", "UTA-2024"], ["OKC-2025", "MIA-2025", "PHI-2025"], ["OKC-2026", "HOU-2026", "LAC-2026"], ["OKC-2027", "DEN-2027"], ["OKC-2028"], ["OKC-2029", "DEN-2029"], ["OKC-2030"]],
  
  ORL:[["ORL-2024"], ["ORL-2025", "DEN-2025"], ["ORL-2026"], ["ORL-2027"], ["ORL-2028"], ["ORL-2029"], ["ORL-2030"]],
  
  PHI:[["PHI-2024"], [], ["PHI-2026"], [], ["PHI-2028"], ["PHI-2029"], ["PHI-2030"]],
  
  PHO:[["PHO-2024"], [], ["PHO-2026"], [], ["PHO-2028"], [], ["PHO-2030"]],
  
  POR:[[], ["POR-2025"], ["POR-2026"], ["POR-2027"], ["POR-2028"], ["POR-2029"], ["POR-2030"]],
  
  SAC:[[], ["SAC-2025"], ["SAC-2026"], ["SAC-2027"], ["SAC-2028"], ["SAC-2029"], ["SAC-2030"]],
  
  SAS:[["SAS-2024", "CHO-2024", "TOR-2024"], ["SAS-2025", "ATL-2025", "CHI-2025"], ["SAS-2026"], ["SAS-2027", "ATL-2027"], ["SAS-2028"], ["SAS-2029"], ["SAS-2030"]],
  
  TOR:[[], ["TOR-2025"], ["TOR-2026"], ["TOR-2027"], ["TOR-2028"], ["TOR-2029"], ["TOR-2030"]],
  
  UTA:[[], ["UTA-2025", "CLE-2025", "MIN-2025"], ["UTA-2026"], ["UTA-2027", "CLE-2027", "LAL-2027", "MIN-2027"], ["UTA-2028"], ["UTA-2029", "CLE-2029", "MIN-2029"], ["UTA-2030"]],
  
  WAS:[[], ["WAS-2025"], ["WAS-2026"], ["WAS-2027"], ["WAS-2028"], ["WAS-2029"], ["WAS-2030"]],
};

export const nullArray30 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, 
]