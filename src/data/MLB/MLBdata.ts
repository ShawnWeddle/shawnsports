export const mlbTeamsRanked = [
  "LAD", "NYY", "CLE", "NYM", "PHI", "SDP", 
  "DET", "KCR", "MIL", "BAL", "ATL", "HOU", 
  "ARI", "SEA", "CHC", "STL", "MIN", "BOS", 
  "TBR", "SFG", "TEX", "CIN", "PIT", "TOR", 
  "WSN", "OAK", "LAA", "MIA", "COL", "CHW",
] as const;

export const mlbTeamsAll = [
  "ARI", "ATL", "BAL", "BOS", "CHC", "CHW", 
  "CIN", "CLE", "COL", "DET", "HOU", "KCR", 
  "LAA", "LAD", "MIA", "MIL", "MIN", "NYM", 
  "NYY", "OAK", "PHI", "PIT", "SDP", "SEA", 
  "SFG", "STL", "TBR", "TEX", "TOR", "WSN", 
  "BOB", "BKD", "BKR", "CLI", "FLA", "MLB", 
  "MTL", "NYG", "PHA", "SLB", "WAS", "XXX",
] as const;

export type MLBTeamType = typeof mlbTeamsRanked[number];

export type AllMLBTeamType = typeof mlbTeamsAll[number];

export type teamInfoType = {location: string, name: string };

export const MLBteamData: { [Key in AllMLBTeamType] : teamInfoType} = {
  ARI:{
    location: "Arizona",
    name: "Diamondbacks",
  },
  ATL:{
    location: "Atlanta",
    name: "Braves",
  },
  BAL:{
    location: "Baltimore",
    name: "Orioles",
  },
  BOS:{
    location: "Boston",
    name: "Red Sox",
  },
  CHC:{
    location: "Chicago",
    name: "Cubs",
  },
  CHW:{
    location: "Chicago",
    name: "White Sox",
  },
  CIN:{
    location: "Cincinnati",
    name: "Reds",
  },
  CLE:{
    location: "Cleveland",
    name: "Guardians",
  },
  COL:{
    location: "Colorado",
    name: "Rockies",
  },
  DET:{
    location: "Detroit",
    name: "Tigers",
  },
  HOU:{
    location: "Houston",
    name: "Astros",
  },
  KCR:{
    location: "Kansas City",
    name: "Royals",
  },
  LAA:{
    location: "Los Angeles",
    name: "Angels",
  },
  LAD:{
    location: "Los Angeles",
    name: "Dodgers",
  },
  MIA:{
    location: "Miami",
    name: "Marlins",
  },
  MIL:{
    location: "Milwaukee",
    name: "Brewers",
  },
  MIN:{
    location: "Minnesota",
    name: "Twins",
  },
  MLB:{
    location: "Milwaukee",
    name: "Braves",
  },
  NYM:{
    location: "New York",
    name: "Mets",
  },
  NYY:{
    location: "New York",
    name: "Yankees",
  },
  OAK:{
    location: "Oakland",
    name: "Athletics",
  },
  PHI:{
    location: "Philadelphia",
    name: "Phillies",
  },
  PIT:{
    location: "Pittsburgh",
    name: "Pirates",
  },
  SDP:{
    location: "San Diego",
    name: "Padres",
  },
  SEA:{
    location: "Seattle",
    name: "Mariners",
  },
  SFG:{
    location: "San Francisco",
    name: "Giants",
  },
  STL:{
    location: "St. Louis",
    name: "Cardinals",
  },
  TBR:{
    location: "Tampa Bay",
    name: "Rays",
  },
  TEX:{
    location: "Texas",
    name: "Rangers",
  },
  TOR:{
    location: "Toronto",
    name: "Blue Jays",
  },
  WSN:{
    location: "Washington",
    name: "Nationals",
  },
  BOB:{
    location: "Boston",
    name: "Braves",
  },
  BKD:{
    location: "Brooklyn",
    name: "Dodgers",
  },
  BKR:{
    location: "Brooklyn",
    name: "Robins",
  },
  CLI:{
    location: "Cleveland",
    name: "Indians",
  },
  FLA:{
    location: "Florida",
    name: "Marlins",
  },
  MTL: {
    location: "Montreal",
    name: "Expos",
  },
  NYG:{
    location: "New York",
    name: "Giants",
  },
  PHA:{
    location: "Philadelphia",
    name: "Athletics",
  },
  SLB:{
    location: "St. Louis",
    name: "Browns",
  },
  WAS:{
    location: "Washington",
    name: "Senators",
  },
  XXX:{
    location: "",
    name: "",
  },
};

export const nullArray30 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, 
]