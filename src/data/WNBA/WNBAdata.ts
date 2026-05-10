export const wnbaTeamsRanked = [
  "LVA", 
  "MIN", 
  "ATL", 
  "PHO", 
  "NYL", 
  "IND", 
  "SEA", 
  "GSV", 
  "LAS",
  "WAS", 
  "CON", 
  "CHI", 
  "DAL", 
  "TOR",
  "POR",
] as const;

export const wnbaTeamsAll = [
  "ATL", "CHI", "CON", "DAL", "IND", "LVA",
  "LAS", "MIN", "NYL", "PHO", "SEA", "WAS",
  "CHO", "DET", "HOU", "SAC", "SAS", "GSV",
  "TOR", "POR",
] as const;

export type WNBATeamType = typeof wnbaTeamsRanked[number];
export type AllWNBATeamType = typeof wnbaTeamsAll[number];

export const nullArray12 = [
  null, null, null, null, null, null, 
  null, null, null, null, null, null, 
];

export const WNBAteamData : {
  [Key in AllWNBATeamType] : {
    location: string;
    name: string;
  }
} = {
  ATL: {
    location: "Atlanta",
    name: "Dream",
  },
  CHI:{
    location: "Chicago",
    name: "Sky",
  },
  CON:{
    location: "Connecticut",
    name: "Sun",
  },
  DAL:{
    location: "Dallas",
    name: "Wings",
  },
  IND:{
    location: "Indiana",
    name: "Fever",
  },
  LVA:{
    location: "Las Vegas",
    name: "Aces",
  },
  LAS:{
    location: "Los Angeles",
    name: "Sparks",
  },
  MIN:{
    location: "Minnesota",
    name: "Lynx",
  },
  NYL:{
    location: "New York",
    name: "Liberty",
  },
  PHO:{
    location: "Phoenix",
    name: "Mercury",
  },
  POR:{
    location: "Portland",
    name: "Fire",
  },
  SEA:{
    location: "Seattle",
    name: "Storm",
  },
  TOR:{
    location: "Toronto",
    name: "Tempo",
  },
  WAS:{
    location: "Washington",
    name: "Mystics",
  },
  CHO:{
    location: "Charlotte",
    name: "Sting",
  },
  DET:{
    location: "Detroit",
    name: "Shock",
  },
  GSV: {
    location: "Golden State",
    name: "Valkyries",
  },
  HOU:{
    location: "Houston",
    name: "Comets",
  },
  SAC:{
    location: "Sacramento",
    name: "Monarchs",
  },
  SAS:{
    location: "San Antonio",
    name: "Stars",
  },
}