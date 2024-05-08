export const cflTeams = [
  "BCL", "CGY", "EDM", 
  "HAM", "MTL", "OTT", 
  "SSK", "TOR", "WPG", 
] as const;

export type CFLTeamType = typeof cflTeams[number];

export type AllCFLTeamType = CFLTeamType | "ORR" | "BAL";

export type teamInfoType = {rank: number, code: string, location: string, name: string };

export const CFLteamData: { [Key in AllCFLTeamType] : teamInfoType} = {
  BAL: {
    code: "BAL",
    rank: 100,
    location: "Baltimore",
    name: "Stallions",
  },
  BCL: {
    code: "BCL",
    rank: 100,
    location: "BC",
    name: "Lions",
  },
  CGY: {
    code: "CGY",
    rank: 100,
    location: "Calgary",
    name: "Stampeders",
  },
  EDM: {
    code: "EDM",
    rank: 100,
    location: "Edmonton",
    name: "Eskimos",
  },
  HAM: {
    code: "HAM",
    rank: 100,
    location: "Hamilton",
    name: "Tiger-Cats",
  },
  MTL: {
    code: "MTL",
    rank: 100,
    location: "Montreal",
    name: "Allouettes",
  },
  ORR: {
    code: "ORR",
    rank: 100,
    location: "Ottawa",
    name: "Rough Riders",
  },
  OTT: {
    code: "OTT",
    rank: 100,
    location: "Ottawa",
    name: "Redblacks",
  },
  SSK: {
    code: "SSK",
    rank: 100,
    location: "Saskatchewan",
    name: "Roughriders",
  },
  TOR: {
    code: "TOR",
    rank: 100,
    location: "Toronto",
    name: "Argonauts",
  },
  WPG: {
    code: "WPG",
    rank: 100,
    location: "Winnipeg",
    name: "Blue Bombers",
  },
}