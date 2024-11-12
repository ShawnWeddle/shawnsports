export const wnbaTeamsRanked = [
  "NYL", "MIN", "CON", "LVA", 
  "SEA", "IND", "PHO", "ATL", 
  "WAS", "CHI", "DAL", "LAS", "GSV"
] as const;

export const wnbaTeamsAll = [
  "ATL", "CHI", "CON", "DAL", "IND", "LVA",
  "LAS", "MIN", "NYL", "PHO", "SEA", "WAS",
  "CHO", "DET", "HOU", "SAC", "SAS", "GSV"
] as const;

export type WNBATeamType = typeof wnbaTeamsRanked[number];
export type AllWNBATeamType = typeof wnbaTeamsAll[number];

export const nullArray12 = [
  null, null, null, null, null, null, 
  null, null, null, null, null, null, 
];

export const WNBAteamData : {
  [Key in AllWNBATeamType] : {
    rank: number,
    location: string;
    name: string;
  }
} = {
  ATL: {
    rank: 4,
    location: "Atlanta",
    name: "Dream",
  },
  CHI:{
    rank: 7,
    location: "Chicago",
    name: "Sky",
  },
  CON:{
    rank: 2,
    location: "Connecticut",
    name: "Sun",
  },
  DAL:{
    rank: 3,
    location: "Dallas",
    name: "Wings",
  },
  IND:{
    rank: 9,
    location: "Indiana",
    name: "Fever",
  },
  LVA:{
    rank: 0,
    location: "Las Vegas",
    name: "Aces",
  },
  LAS:{
    rank: 8,
    location: "Los Angeles",
    name: "Sparks",
  },
  MIN:{
    rank: 5,
    location: "Minnesota",
    name: "Lynx",
  },
  NYL:{
    rank: 1,
    location: "New York",
    name: "Liberty",
  },
  PHO:{
    rank: 11,
    location: "Phoenix",
    name: "Mercury",
  },
  SEA:{
    rank: 10,
    location: "Seattle",
    name: "Storm",
  },
  WAS:{
    rank: 6,
    location: "Washington",
    name: "Mystics",
  },
  CHO:{
    rank: 0,
    location: "Charlotte",
    name: "Sting",
  },
  DET:{
    rank: 0,
    location: "Detroit",
    name: "Shock",
  },
  GSV: {
    rank: 0,
    location: "Golden State",
    name: "Valkyries",
  },
  HOU:{
    rank: 0,
    location: "Houston",
    name: "Comets",
  },
  SAC:{
    rank: 0,
    location: "Sacramento",
    name: "Monarchs",
  },
  SAS:{
    rank: 0,
    location: "San Antonio",
    name: "Stars",
  },
}