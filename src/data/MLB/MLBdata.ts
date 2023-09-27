export const activeMLBTeams = [
  "ARI", "ATL", "BAL", "BOS", "CHC", "CHW", 
  "CIN", "CLE", "COL", "DET", "HOU", "KCR", 
  "LAA", "LAD", "MIA", "MIL", "MIN", "NYM", 
  "NYY", "OAK", "PHI", "PIT", "SDP", "SEA", 
  "SFG", "STL", "TBR", "TEX", "TOR", "WSN", 
] as const;

export const inactiveMLBTeams = [
  "BOB", "BKD", "BKR", "CLI", "FLA", "MLB", "NYG", "PHA", "SLB", "WAS",
] as const;

export const mlbTeamsRanked: MLBTeamType[] = [
  "HOU", "PHI", "NYY", "SDP", "LAD", "ATL",
  "CLE", "SEA", "NYM", "STL", "TOR", "TBR",
  "MIL", "BAL", "SFG", "CHW", "BOS", "CHC",
  "ARI", "LAA", "MIA", "COL", "KCR", "CIN",
  "OAK", "MIN", "TEX", "DET", "WSN", "PIT",
];

export type MLBTeamType = typeof activeMLBTeams[number];

export type AllMLBTeamType = typeof activeMLBTeams[number] | typeof inactiveMLBTeams[number];

export type teamInfoType = {rank: number, location: string, name: string };

export const MLBteamData: { [Key in AllMLBTeamType] : teamInfoType} = {
  ARI:{
    rank: 18,
    location: "Arizona",
    name: "Diamondbacks",
  },
  ATL:{
    rank: 5,
    location: "Atlanta",
    name: "Braves",
  },
  BAL:{
    rank: 13,
    location: "Baltimore",
    name: "Orioles",
  },
  BOS:{
    rank: 16,
    location: "Boston",
    name: "Red Sox",
  },
  CHC:{
    rank: 17,
    location: "Chicago",
    name: "Cubs",
  },
  CHW:{
    rank: 15,
    location: "Chicago",
    name: "White Sox",
  },
  CIN:{
    rank: 23,
    location: "Cincinnati",
    name: "Reds",
  },
  CLE:{
    rank: 6,
    location: "Cleveland",
    name: "Guardians",
  },
  COL:{
    rank: 21,
    location: "Colorado",
    name: "Rockies",
  },
  DET:{
    rank: 27,
    location: "Detroit",
    name: "Tigers",
  },
  HOU:{
    rank: 0,
    location: "Houston",
    name: "Astros",
  },
  KCR:{
    rank: 22,
    location: "Kansas City",
    name: "Royals",
  },
  LAA:{
    rank: 19,
    location: "Los Angeles",
    name: "Angels",
  },
  LAD:{
    rank: 4,
    location: "Los Angeles",
    name: "Dodgers",
  },
  MIA:{
    rank: 20,
    location: "Miami",
    name: "Marlins",
  },
  MIL:{
    rank: 12,
    location: "Milwaukee",
    name: "Brewers",
  },
  MIN:{
    rank: 25,
    location: "Minnesota",
    name: "Twins",
  },
  MLB:{
    rank: 0,
    location: "Milwaukee",
    name: "Braves",
  },
  NYM:{
    rank: 8,
    location: "New York",
    name: "Mets",
  },
  NYY:{
    rank: 2,
    location: "New York",
    name: "Yankees",
  },
  OAK:{
    rank: 24,
    location: "Oakland",
    name: "Athletics",
  },
  PHI:{
    rank: 1,
    location: "Philadelphia",
    name: "Phillies",
  },
  PIT:{
    rank: 29,
    location: "Pittsburgh",
    name: "Pirates",
  },
  SDP:{
    rank: 3,
    location: "San Diego",
    name: "Padres",
  },
  SEA:{
    rank: 7,
    location: "Seattle",
    name: "Mariners",
  },
  SFG:{
    rank: 14,
    location: "San Francisco",
    name: "Giants",
  },
  STL:{
    rank: 9,
    location: "St. Louis",
    name: "Cardinals",
  },
  TBR:{
    rank: 11,
    location: "Tampa Bay",
    name: "Rays",
  },
  TEX:{
    rank: 26,
    location: "Texas",
    name: "Rangers",
  },
  TOR:{
    rank: 10,
    location: "Toronto",
    name: "Blue Jays",
  },
  WSN:{
    rank: 28,
    location: "Washington",
    name: "Nationals",
  },
  BOB:{
    rank: 0,
    location: "Boston",
    name: "Braves",
  },
  BKD:{
    rank: 0,
    location: "Brooklyn",
    name: "Dodgers",
  },
  BKR:{
    rank: 0,
    location: "Brooklyn",
    name: "Robins",
  },
  CLI:{
    rank: 0,
    location: "Cleveland",
    name: "Indians",
  },
  FLA:{
    rank: 0,
    location: "Florida",
    name: "Marlins",
  },
  NYG:{
    rank: 0,
    location: "New York",
    name: "Giants",
  },
  PHA:{
    rank: 0,
    location: "Philadelphia",
    name: "Athletics",
  },
  SLB:{
    rank: 0,
    location: "St. Louis",
    name: "Browns",
  },
  WAS:{
    rank: 0,
    location: "Washington",
    name: "Senators",
  },
};

export const nullArray30 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, 
];