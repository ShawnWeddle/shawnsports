export const nflTeams = [
  "KAN", "SFO", "BAL", "DET", "BUF", "HOU", "TAM", "GNB",
  "DAL", "CLE", "PHI", "MIA", "PIT", "LAR", "CIN", "JAX",
  "SEA", "IND", "NOR", "LVR", "DEN", "MIN", "NYJ", "CHI",
  "ATL", "TEN", "NYG", "LAC", "ARI", "NWE", "WAS", "CAR",
] as const;

export const allNFLTeams = [
  "KAN", "PHI", "SFO", "CIN", "BUF", "DAL", "NYG", "JAX", 
  "MIN", "BAL", "LAC", "MIA", "SEA", "TAM", "DET", "PIT", 
  "WAS", "GNB", "NWE", "NYJ", "CLE", "TEN", "NOR", "CAR", 
  "ATL", "LVR", "LAR", "DEN", "IND", "ARI", "HOU", "CHI",
  "WRS", "OAK", "LRD", "STL", "BCS", "SDC", "HOL",
] as const;

export type NFLTeamType = typeof nflTeams[number];

export type AllNFLTeamType = typeof allNFLTeams[number];

export type teamInfoType = { code: string, location: string, name: string };

export const NFLteamData: { [Key in AllNFLTeamType] : teamInfoType} = {
  "ARI":{
    code: "ARI",
    location: "Arizona",
    name: "Cardinals"
  },
  "ATL":{
    code: "ATL",
    location: "Atlanta",
    name: "Falcons"
  },
  "BAL":{
    code: "BAL",
    location: "Baltimore",
    name: "Ravens"
  },
  "BCS":{
    code: "BCS",
    location: "Baltimore",
    name: "Colts"
  },
  "BUF":{
    code: "BUF",
    location: "Buffalo",
    name: "Bills"
  },
  "CAR":{
    code: "CAR",
    location: "Carolina",
    name: "Panthers"
  },
  "CHI":{
    code: "CHI",
    location: "Chicago",
    name: "Bears"
  },
  "CIN":{
    code: "CIN",
    location: "Cincinnati",
    name: "Bengals"
  },
  "CLE":{
    code: "CLE",
    location: "Cleveland",
    name: "Browns"
  },
  "DAL":{
    code: "DAL",
    location: "Dallas",
    name: "Cowboys"
  },
  "DEN":{
    code: "DEN",
    location: "Denver",
    name: "Broncos"
  },
  "DET":{
    code: "DET",
    location: "Detroit",
    name: "Lions"
  },
  "GNB":{
    code:  "GB",
    location: "Green Bay",
    name: "Packers"
  },
  "HOL":{
    code: "HOL",
    location: "Houston",
    name: "Oilers"
  },
  "HOU":{
    code: "HOU",
    location: "Houston",
    name: "Texans"
  },
  "IND":{
    code: "IND",
    location: "Indianapolis",
    name: "Colts"
  },
  "JAX":{
    code: "JAX",
    location: "Jacksonville",
    name: "Jaguars"
  },
  "KAN":{
    code:  "KC",
    location: "Kansas City",
    name: "Chiefs"
  },
  "LAC":{
    code: "LAC",
    location: "Los Angeles",
    name: "Chargers"
  },
  "LAR":{
    code: "LAR",
    location: "Los Angeles",
    name: "Rams"
  },
  "LRD": {
    code: "LRD",
    location: "Los Angeles",
    name: "Raiders"
  },
  "LVR":{
    code:  "LV",
    location: "Las Vegas",
    name: "Raiders"
  },
  "MIA":{
    code: "MIA",
    location: "Miami",
    name: "Dolphins"
  },
  "MIN":{
    code: "MIN",
    location: "Minnesota",
    name: "Vikings"
  },
  "NWE":{
    code:  "NE",
    location: "New England",
    name: "Patriots"
  },
  "NOR":{
    code:  "NO",
    location: "New Orleans",
    name: "Saints"
  },
  "NYG":{
    code: "NYG",
    location: "New York",
    name: "Giants"
  },
  "NYJ":{
    code: "NYJ",
    location: "New York",
    name: "Jets"
  },
  "OAK": {
    code: "OAK",
    location: "Oakland",
    name: "Raiders"
  },
  "PHI":{
    code: "PHI",
    location: "Philadelphia",
    name: "Eagles"
  },
  "PIT":{
    code: "PIT",
    location: "Pittsburgh",
    name: "Steelers"
  },
  "SEA":{
    code: "SEA",
    location: "Seattle",
    name: "Seahawks"
  },
  "SDC":{
    code: "SDC",
    location: "San Diego",
    name: "Chargers"
  },
  "SFO":{
    code:  "SF",
    location: "San Francisco",
    name: "49ers"
  },
  "STL":{
    code: "STL",
    location: "St. Louis",
    name: "Rams"
  },
  "TAM":{
    code:  "TB",
    location: "Tampa Bay",
    name: "Buccaneers"
  },
  "TEN":{
    code: "TEN",
    location: "Tennessee",
    name: "Titans"
  },
  "WAS":{
    code: "WAS",
    location: "Washington",
    name: "Commanders"
  },
  "WRS": {
    code: "WRS",
    location: "Washington",
    name: "Redskins"
  }
}

const conferenceEnum = ["AFC", "NFC"] as const;
const directionEnum = ["East", "North", "South", "West"] as const;
type ConferenceType = typeof conferenceEnum[number];
type DivisionType = typeof directionEnum[number];

export const nflDivisions: {[Key in ConferenceType]: {[Key in DivisionType] : NFLTeamType[]}} = {
  AFC: {
    East: ["BUF", "MIA", "NWE", "NYJ"],
    North: ["BAL", "CIN", "CLE", "PIT"],
    South: ["HOU", "IND", "JAX", "TEN"],
    West: ["DEN", "KAN", "LAC", "LVR"],
  },
  NFC: {
    East: ["DAL", "NYG", "PHI", "WAS"],
    North: ["CHI", "DET", "GNB", "MIN"],
    South: ["ATL", "CAR", "NOR", "TAM"],
    West: ["ARI", "LAR", "SEA", "SFO"],
  }
}

export const nullArray32 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
]

export const nullArray18 = [
  null, null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, null, 
]