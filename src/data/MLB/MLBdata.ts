export const mlbTeamsRanked = [ 
  "SFG", "SEA", "OAK", "LAD", "LAA", "SDP", 
  "ARI", "COL", "TEX", "HOU", "KCR", "MIN", 
  "STL", "MIL", "CHC", "CHW", "CIN", "ATL", 
  "DET", "TBR", "CLE", "MIA", "PIT", "TOR", 
  "WSN", "BAL", "PHI", "NYY", "NYM", "BOS",
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

export const AAAteamsList = [
  "AAA-ARI",
  "AAA-ATL",
  "AAA-BAL",
  "AAA-BOS",
  "AAA-CHC",
  "AAA-CHW",
  "AAA-CIN",
  "AAA-CLE",
  "AAA-COL",
  "AAA-DET",
  "AAA-HOU",
  "AAA-KCR",
  "AAA-LAA",
  "AAA-LAD",
  "AAA-MIA",
  "AAA-MIL",
  "AAA-MIN",
  "AAA-NYM",
  "AAA-NYY",
  "AAA-OAK",
  "AAA-PHI",
  "AAA-PIT",
  "AAA-SDP",
  "AAA-SEA",
  "AAA-SFG",
  "AAA-STL",
  "AAA-TBR",
  "AAA-TEX",
  "AAA-TOR",
  "AAA-WSN",
] as const;

export const AAteamsList = [
  "AA-ARI",
  "AA-ATL",
  "AA-BAL",
  "AA-BOS",
  "AA-CHC",
  "AA-CHW",
  "AA-CIN",
  "AA-CLE",
  "AA-COL",
  "AA-DET",
  "AA-HOU",
  "AA-KCR",
  "AA-LAA",
  "AA-LAD",
  "AA-MIA",
  "AA-MIL",
  "AA-MIN",
  "AA-NYM",
  "AA-NYY",
  "AA-OAK",
  "AA-PHI",
  "AA-PIT",
  "AA-SDP",
  "AA-SEA",
  "AA-SFG",
  "AA-STL",
  "AA-TBR",
  "AA-TEX",
  "AA-TOR",
  "AA-WSN",
] as const;

export const HAteamsList = [
  "HA-ARI",
  "HA-ATL",
  "HA-BAL",
  "HA-BOS",
  "HA-CHC",
  "HA-CHW",
  "HA-CIN",
  "HA-CLE",
  "HA-COL",
  "HA-DET",
  "HA-HOU",
  "HA-KCR",
  "HA-LAA",
  "HA-LAD",
  "HA-MIA",
  "HA-MIL",
  "HA-MIN",
  "HA-NYM",
  "HA-NYY",
  "HA-OAK",
  "HA-PHI",
  "HA-PIT",
  "HA-SDP",
  "HA-SEA",
  "HA-SFG",
  "HA-STL",
  "HA-TBR",
  "HA-TEX",
  "HA-TOR",
  "HA-WSN",
] as const;

export const SAteamsList = [
  "SA-ARI",
  "SA-ATL",
  "SA-BAL",
  "SA-BOS",
  "SA-CHC",
  "SA-CHW",
  "SA-CIN",
  "SA-CLE",
  "SA-COL",
  "SA-DET",
  "SA-HOU",
  "SA-KCR",
  "SA-LAA",
  "SA-LAD",
  "SA-MIA",
  "SA-MIL",
  "SA-MIN",
  "SA-NYM",
  "SA-NYY",
  "SA-OAK",
  "SA-PHI",
  "SA-PIT",
  "SA-SDP",
  "SA-SEA",
  "SA-SFG",
  "SA-STL",
  "SA-TBR",
  "SA-TEX",
  "SA-TOR",
  "SA-WSN",
] as const;

export type MLBTeamType = typeof mlbTeamsRanked[number];

export type AllMLBTeamType = typeof mlbTeamsAll[number];

export type AAATeamType = typeof AAAteamsList[number];
export type AATeamType = typeof AAteamsList[number];
export type HATeamType = typeof HAteamsList[number];
export type SATeamType = typeof SAteamsList[number];

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

export const MLBdivisionData: {
    AL: {
        East: MLBTeamType[];
        Central: MLBTeamType[];
        West: MLBTeamType[];
    };
    NL: {
        East: MLBTeamType[];
        Central: MLBTeamType[];
        West: MLBTeamType[];
    };
} = {
  AL: {
    East: ["BAL", "BOS", "NYY", "TBR", "TOR"],
    Central: ["CLE", "CHW", "DET", "KCR", "MIN"],
    West: ["HOU", "LAA", "OAK", "SEA", "TEX"],
  },
  NL: {
    East: ["ATL", "MIA", "NYM", "PHI", "WSN"],
    Central: ["CHC", "CIN", "MIL", "PIT", "STL"],
    West: ["ARI", "COL", "LAD","SDP", "SFG"],
  },
}

export const nullArray30 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, 
]