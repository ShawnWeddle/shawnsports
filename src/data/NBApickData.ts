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
  "SAS", "CHO", "DET", "POR", "HOU", "WAS"
];

export const nbaTeamsRankedWorst: NBATeamType[] = [
  "WAS", "HOU", "POR", "DET", "CHO", "SAS", "TOR", "ORL", 
  "UTA", "BRK", "IND", "NOP", "MIN", "DAL", "CHI", "ATL", 
  "NYK", "OKC", "LAC", "CLE", "SAC", "MIA", "GSW", "PHI", 
  "LAL", "MEM", "BOS", "PHO", "MIL", "DEN"
];

export const years = [
  "2025", "2026", "2027", "2028", "2029", "2030", "2031" 
] as const;

export type NBATeamType = typeof nbaTeams[number];
export type AllNBATeamType = NBATeamType | "SEA" | "WSB" | "STL" | "PHW" | "SYR" | "MNL" | "ROC" | "BAL" | "NJN" | "SFW" | "FWP" | "WSC" | "CHS" | "KCK";
export type PickYearType = typeof years[number];
export type PickCodeType = `${NBATeamType}-${PickYearType}`;

export const TeamNameEnum = z.enum(nbaTeams);
export const YearEnum = z.enum(years);

export const NBAteamData: {
  [Key in AllNBATeamType] : {
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
    rank: 2,
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
    rank: 3,
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

  BAL:{  
    rank: 100,
    location: "Baltimore",
    name: "Bullets",
  },
  CHS:{  
    rank: 100,
    location: "Chicago",
    name: "Stags",
  },
  FWP:{  
    rank: 100,
    location: "Fort Wayne",
    name: "Pistons",
  },
  KCK: {
    rank: 100,
    location: "Kansas City",
    name: "Kings",
  },
  MNL:{  
    rank: 100,
    location: "Minneapolis",
    name: "Lakers",
  },
  NJN:{  
    rank: 100,
    location: "New Jersey",
    name: "Nets",
  },
  PHW:{  
    rank: 100,
    location: "Philadelphia",
    name: "Warriors",
  },
  ROC:{  
    rank: 100,
    location: "Rochester",
    name: "Royals",
  },
  SEA:{  
    rank: 100,
    location: "Seattle",
    name: "Supersonics",
  },
  SFW:{  
    rank: 100,
    location: "San Francisco",
    name: "Warriors",
  },
  STL:{  
    rank: 100,
    location: "St Louis",
    name: "Hawks",
  },
  SYR:{  
    rank: 100,
    location: "Syracuse",
    name: "Nationals",
  },
  WSC:{  
    rank: 100,
    location: "Washington",
    name: "Capitols",
  },
  WSB:{  
    rank: 100,
    location: "Washington",
    name: "Bullets",
  },
};

export const nullArray30 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, 
]

export const nullArray14 = [
  null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, 
]