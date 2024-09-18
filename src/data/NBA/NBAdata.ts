import { z } from "zod";

export const nbaTeamsAll = [
  "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN",
  "DET", "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA",
  "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHO",
  "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
  "SEA", "WSB", "STL", "PHW", "SYR", "MNL", "ROC", "BAL", "NJN", "SFW", "FWP", "WSC", "CHS", "KCK"
] as const;

export const nbaTeamsRanked = [
  "BOS", "OKC", "DEN", "MIN", "DAL", "NYK", "PHI", "MEM", 
  "MIL", "MIA", "IND", "NOP", "CLE", "ORL", "SAC", "HOU", 
  "LAC", "PHO", "GSW", "LAL", "ATL", "SAS", "UTA", "TOR", 
  "CHI", "POR", "CHO", "DET", "WAS", "BRK"
] as const;

export const nbaTeamsRankedWorst: NBATeamType[] = [
  "BRK", "WAS", "DET", "CHO", "POR", "CHI", "TOR", "UTA",
  "SAS", "ATL", "LAL", "GSW", "PHO", "LAC", "HOU", "SAC",
  "ORL", "CLE", "NOP", "IND", "MIA", "MIL", "MEM", "PHI",
  "NYK", "DAL", "MIN", "DEN", "OKC", "BOS", 
];

export const years = [
  "2025", "2026", "2027", "2028", "2029", "2030", "2031" 
] as const;

export type NBATeamType = typeof nbaTeamsRanked[number];
export type AllNBATeamType = typeof nbaTeamsAll[number];
export type PickYearType = typeof years[number];
export type PickCodeType = `${NBATeamType}-${PickYearType}`;

export const TeamNameEnum = z.enum(nbaTeamsAll);
export const YearEnum = z.enum(years);

export const NBAteamData: {
  [Key in AllNBATeamType] : {

    location: string;
    name: string;
    nickName?: string;
  }
} = {
  ATL:{  
    location: "Atlanta",
    name: "Hawks",
  },
  BOS:{  
    location: "Boston",
    name: "Celtics",
  },
  BRK:{  
    location: "Brooklyn",
    name: "Nets",
  },
  CHI:{  
    location: "Chicago",
    name: "Bulls",
  },
  CHO:{  
    location: "Charlotte",
    name: "Hornets",
  },
  CLE:{  
    location: "Cleveland",
    name: "Cavaliers",
    nickName: "Cavs",
  },
  DAL:{  
    location: "Dallas",
    name: "Mavericks",
  },
  DEN:{  
    location: "Denver",
    name: "Nuggets",
  },
  DET:{  
    location: "Detroit",
    name: "Pistons",
  },
  GSW:{  
    location: "Golden State",
    name: "Warriors",
  },
  HOU:{  
    location: "Houston",
    name: "Rockets",
  },
  IND:{  
    location: "Indiana",
    name: "Pacers",
  },
  LAC:{  
    location: "Los Angeles",
    name: "Clippers",
  },
  LAL:{ 
    location: "Los Angeles",
    name: "Lakers",
  },
  MEM:{  
    location: "Memphis",
    name: "Grizzlies",
  },
  MIA:{  
    location: "Miami",
    name: "Heat",
  },
  MIL:{  
    location: "Milwaukee",
    name: "Bucks",
  },
  MIN:{  
    location: "Minnesota",
    name: "Timberwolves",
    nickName: "T-wolves",
  },
  NOP:{  
    location: "New Orleans",
    name: "Pelicans",
  },
  NYK:{  
    location: "New York",
    name: "Knicks",
  },
  OKC:{  
    location: "Oklahoma City",
    name: "Thunder",
  },
  ORL:{  
    location: "Orlando",
    name: "Magic",
  },
  PHI:{  
    location: "Philadelphia",
    name: "76ers",
  },
  PHO:{  
    location: "Phoenix",
    name: "Suns",
  },
  POR:{  
    location: "Portland",
    name: "Trailblazers",
    nickName: "Blazers"
  },
  SAC:{  
    location: "Sacramento",
    name: "Kings",
  },
  SAS:{  
    location: "San Antonio",
    name: "Spurs",
  },
  TOR:{  
    location: "Toronto",
    name: "Raptors",
  },
  UTA:{  
    location: "Utah",
    name: "Jazz",
  },
  WAS:{  
    location: "Washington",
    name: "Wizards",
  },
  BAL:{  
    location: "Baltimore",
    name: "Bullets",
  },CHS:{  
    location: "Chicago",
    name: "Stags",
  },FWP:{  
    location: "Fort Wayne",
    name: "Pistons",
  },KCK: {
    location: "Kansas City",
    name: "Kings",
  },MNL:{  
    location: "Minneapolis",
    name: "Lakers",
  },NJN:{  
    location: "New Jersey",
    name: "Nets",
  },PHW:{  
    location: "Philadelphia",
    name: "Warriors",
  },ROC:{  
    location: "Rochester",
    name: "Royals",
  },SEA:{  
    location: "Seattle",
    name: "Supersonics",
  },SFW:{  
    location: "San Francisco",
    name: "Warriors",
  },STL:{  
    location: "St Louis",
    name: "Hawks",
  },SYR:{  
    location: "Syracuse",
    name: "Nationals",
  },WSC:{  
    location: "Washington",
    name: "Capitols",
  },WSB:{  
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