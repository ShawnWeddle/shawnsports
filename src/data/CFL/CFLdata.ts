export const cflTeamsRanked = [
  "TOR", 
  "WPG", 
  "MTL", 
  "SSK", 
  "OTT", 
  "BCL", 
  "EDM", 
  "HAM", 
  "CGY", 
] as const;

export const cflTeamsAll = [
  "TOR", "WPG", "BCL", "MTL", "HAM", "CGY",
  "SSK", "EDM", "OTT", "ORR", "BAL", "ESK", "XXX", 
] as const;

export type CFLTeamType = typeof cflTeamsRanked[number];

export type AllCFLTeamType = typeof cflTeamsAll[number];

export type teamInfoType = { code: string, location: string, name: string };

export const CFLteamData: { [Key in AllCFLTeamType] : teamInfoType} = {
  BAL: {
    code: "BAL",
    location: "Baltimore",
    name: "Stallions",
  },
  BCL: {
    code: "BCL",
    location: "BC",
    name: "Lions",
  },
  CGY: {
    code: "CGY",
    location: "Calgary",
    name: "Stampeders",
  },
  EDM: {
    code: "EDM",
    location: "Edmonton",
    name: "Elks",
  },
  ESK: {
    code: "EDM",
    location: "Edmonton",
    name: "Eskimos",
  },
  HAM: {
    code: "HAM",
    location: "Hamilton",
    name: "Tiger-Cats",
  },
  MTL: {
    code: "MTL",
    location: "Montreal",
    name: "Allouettes",
  },
  ORR: {
    code: "ORR",
    location: "Ottawa",
    name: "Rough Riders",
  },
  OTT: {
    code: "OTT",
    location: "Ottawa",
    name: "Redblacks",
  },
  SSK: {
    code: "SSK",
    location: "Saskatchewan",
    name: "Roughriders",
  },
  TOR: {
    code: "TOR",
    location: "Toronto",
    name: "Argonauts",
  },
  WPG: {
    code: "WPG",
    location: "Winnipeg",
    name: "Blue Bombers",
  },
  XXX: {
    code: "XXX",
    location: "",
    name: "",
  },
}

export const nullArray9 = [
  null, null, null, 
  null, null, null, 
  null, null, null, 
]