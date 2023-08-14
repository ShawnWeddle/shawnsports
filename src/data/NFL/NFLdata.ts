export const nflTeams = [
  "KAN", "PHI", "SFO", "CIN", "BUF", "DAL", "NYG", "JAX", 
  "MIN", "BAL", "LAC", "MIA", "SEA", "TAM", "DET", "PIT", 
  "WAS", "GNB", "NWE", "NYJ", "CLE", "TEN", "NOR", "CAR", 
  "ATL", "LVR", "LAR", "DEN", "IND", "ARI", "HOU", "CHI",
] as const;

export type NFLTeamType = typeof nflTeams[number];

export type teamInfoType = {rank: number, code: string, location: string, name: string };

export const NFLteamData: { [Key in NFLTeamType] : teamInfoType} = {
  "ARI":{
    code: "ARI",
    rank: 29,
    location: "Arizona",
    name: "Cardinals"
  },
  "ATL":{
    code: "ATL",
    rank: 24,
    location: "Atlanta",
    name: "Falcons"
  },
  "BAL":{
    code: "BAL",
    rank: 9,
    location: "Baltimore",
    name: "Ravens"
  },
  "BUF":{
    code: "BUF",
    rank: 4,
    location: "Buffalo",
    name: "Bills"
  },
  "CAR":{
    code: "CAR",
    rank: 23,
    location: "Carolina",
    name: "Panthers"
  },
  "CHI":{
    code: "CHI",
    rank: 31,
    location: "Chicago",
    name: "Bears"
  },
  "CIN":{
    code: "CIN",
    rank: 3,
    location: "Cincinnati",
    name: "Bengals"
  },
  "CLE":{
    code: "CLE",
    rank: 20,
    location: "Cleveland",
    name: "Browns"
  },
  "DAL":{
    code: "DAL",
    rank: 5,
    location: "Dallas",
    name: "Cowboys"
  },
  "DEN":{
    code: "DEN",
    rank: 27,
    location: "Denver",
    name: "Broncos"
  },
  "DET":{
    code: "DET",
    rank: 14,
    location: "Detroit",
    name: "Lions"
  },
  "GNB":{
    code:  "GB",
    rank: 17,
    location: "Green Bay",
    name: "Packers"
  },
  "HOU":{
    code: "HOU",
    rank: 30,
    location: "Houston",
    name: "Texans"
  },
  "IND":{
    code: "IND",
    rank: 28,
    location: "Indianapolis",
    name: "Colts"
  },
  "JAX":{
    code: "JAX",
    rank: 7,
    location: "Jacksonville",
    name: "Jaguars"
  },
  "KAN":{
    code:  "KC",
    rank: 0,
    location: "Kansas City",
    name: "Chiefs"
  },
  "LAC":{
    code: "LAC",
    rank: 10,
    location: "Los Angeles",
    name: "Chargers"
  },
  "LAR":{
    code: "LAR",
    rank: 26,
    location: "Los Angeles",
    name: "Rams"
  },
  "LVR":{
    code:  "LV",
    rank: 25,
    location: "Las Vegas",
    name: "Raiders"
  },
  "MIA":{
    code: "MIA",
    rank: 11,
    location: "Miami",
    name: "Dolphins"
  },
  "MIN":{
    code: "MIN",
    rank: 8,
    location: "Minnesota",
    name: "Vikings"
  },
  "NWE":{
    code:  "NE",
    rank: 18,
    location: "New England",
    name: "Patriots"
  },
  "NOR":{
    code:  "NO",
    rank: 22,
    location: "New Orleans",
    name: "Saints"
  },
  "NYG":{
    code: "NYG",
    rank: 6,
    location: "New York",
    name: "Giants"
  },
  "NYJ":{
    code: "NYJ",
    rank: 19,
    location: "New York",
    name: "Jets"
  },
  "PHI":{
    code: "PHI",
    rank: 1,
    location: "Philadelphia",
    name: "Eagles"
  },
  "PIT":{
    code: "PIT",
    rank: 15,
    location: "Pittsburgh",
    name: "Steelers"
  },
  "SEA":{
    code: "SEA",
    rank: 12,
    location: "Seattle",
    name: "Seahawks"
  },
  "SFO":{
    code:  "SF",
    rank: 2,
    location: "San Francisco",
    name: "49ers"
  },
  "TAM":{
    code:  "TB",
    rank: 13,
    location: "Tampa Bay",
    name: "Buccaneers"
  },
  "TEN":{
    code: "TEN",
    rank: 21,
    location: "Tennessee",
    name: "Titans"
  },
  "WAS":{
    code: "WAS",
    rank: 16,
    location: "Washington",
    name: "Commanders"
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