export const activeNHLTeams = [
  "VEG", "FLA", "CAR", "DAL", "BOS", "COL", "NJD", "TOR", 
  "EDM", "NYR", "LAK", "MIN", "SEA", "TBL", "WIN", "NYI", 
  "CGY", "NSH", "PIT", "BUF", "OTT", "VAN", "STL", "DET", 
  "WAS", "PHI", "ARI", "MTL", "SJS", "CBJ", "ANA", "CHI", 
] as const;

export type NHLTeamType = typeof activeNHLTeams[number];

export type AllNHLTeamType = NHLTeamType | "MMR" | "MNS" | "QUE";

export type teamInfoType = {rank: number, code: string, location: string, name: string };

export const NHLteamData: { [Key in AllNHLTeamType] : teamInfoType} = {
  "ANA": {
    rank: 30,
    code: "ANA",
    location: "Anaheim",
    name: "Ducks",
  }, "ARI": {
    rank: 26,
    code: "ARI",
    location: "Arizona",
    name: "Coyotes",
  }, "BOS": {
    rank: 4,
    code: "BOS",
    location: "Boston",
    name: "Bruins",
  }, "BUF": {
    rank: 19,
    code: "BUF",
    location: "Buffalo",
    name: "Sabres",
  }, "CAR": {
    rank: 2,
    code: "CAR",
    location: "Carolina",
    name: "Hurricanes",
  }, "CBJ": {
    rank: 29,
    code: "CBJ",
    location: "Columbus",
    name: "Blue Jackets",
  }, "CGY": {
    rank: 16,
    code: "CGY",
    location: "Calgary",
    name: "Flames",
  }, "CHI": {
    rank: 31,
    code: "CHI",
    location: "Chicago",
    name: "Blackhawks",
  }, "COL": {
    rank: 5,
    code: "COL",
    location: "Colorado",
    name: "Avalanche",
  }, "DAL": {
    rank: 3,
    code: "DAL",
    location: "Dallas",
    name: "Stars",
  }, "DET": {
    rank: 23,
    code: "DET",
    location: "Detroit",
    name: "Red Wings",
  }, "EDM": {
    rank: 8,
    code: "EDM",
    location: "Edmonton",
    name: "Oilers",
  }, "FLA": {
    rank: 1,
    code: "FLA",
    location: "Florida",
    name: "Panthers",
  }, "LAK": {
    rank: 10,
    code: "LAK",
    location: "Los Angeles",
    name: "Kings",
  }, "MIN": {
    rank: 11,
    code: "MIN",
    location: "Minnesota",
    name: "Wild",
  }, "MMR": {
    rank: 99,
    code: "MMR",
    location: "Montreal",
    name: "Maroons",
  }, "MNS": {
    rank: 69,
    code: "MNS",
    location: "Minnesota",
    name: "North Stars",
  }, "MTL": {
    rank: 27,
    code: "MTL",
    location: "Montreal",
    name: "Canadiens",
  }, "NJD": {
    rank: 6,
    code: "NJD",
    location: "New Jersey",
    name: "Devils",
  }, "NSH": {
    rank: 17,
    code: "NSH",
    location: "Nashville",
    name: "Predators",
  }, "NYI": {
    rank: 15,
    code: "NYI",
    location: "New York",
    name: "Islanders",
  }, "NYR": {
    rank: 9,
    code: "NYR",
    location: "New York",
    name: "Rangers",
  }, "OTT": {
    rank: 20,
    code: "OTT",
    location: "Ottawa",
    name: "Senators",
  }, "PHI": {
    rank: 25,
    code: "PHI",
    location: "Philadelphia",
    name: "Flyers",
  }, "PIT": {
    rank: 18,
    code: "PIT",
    location: "Pittsburgh",
    name: "Penguins",
  }, "QUE": {
    rank: 66,
    code: "QUE",
    location: "Quebec",
    name: "Nordiques",
  }, "SEA": {
    rank: 12,
    code: "SEA",
    location: "Seattle",
    name: "Kraken",
  }, "SJS": {
    rank: 28,
    code: "SJS",
    location: "San Jose",
    name: "Sharks",
  }, "STL": {
    rank: 22,
    code: "STL",
    location: "St. Louis",
    name: "Blues",
  }, "TBL": {
    rank: 13,
    code: "TBL",
    location: "Tampa Bay",
    name: "Lightning",
  }, "TOR": {
    rank: 7,
    code: "TOR",
    location: "Toronto",
    name: "Maple Leafs",
  }, "VAN": {
    rank: 21,
    code: "VAN",
    location: "Vancouver",
    name: "Canucks",
  }, "VEG": {
    rank: 0,
    code: "VEG",
    location: "Vegas",
    name: "Golden Knights",
  }, "WAS": {
    rank: 24,
    code: "WAS",
    location: "Washington",
    name: "Capitals",
  }, "WIN": {
    rank: 14,
    code: "WIN",
    location: "Winnipeg",
    name: "Jets",
  },
}

export const nullArray32 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
];