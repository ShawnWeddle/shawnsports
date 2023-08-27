export const activeNHLTeams = [
  "VEG", "FLA", "CAR", "DAL", "BOS", "COL", "NJD", "TOR", 
  "EDM", "NYR", "LAK", "MIN", "SEA", "TBL", "WIN", "NYI", 
  "CGY", "NSH", "PIT", "BUF", "OTT", "VAN", "STL", "DET", 
  "WAS", "PHI", "ARI", "MTL", "SJS", "CBJ", "ANA", "CHI", 
] as const;

export type NHLTeamType = typeof activeNHLTeams[number];

export type AllNHLTeamType = NHLTeamType | "MMR" | "MNS";

export type teamInfoType = {rank: number, code: string, location: string, name: string };

export const NHLteamData: { [Key in AllNHLTeamType] : teamInfoType} = {
  "ANA": {
    rank: 30,
    code: "ANA",
    location: "Anaheim",
    name: "Ducks",
  }, "ARI": {
    rank: 0,
    code: "ARI",
    location: "Arizona",
    name: "Coyotes",
  }, "BOS": {
    rank: 0,
    code: "BOS",
    location: "Boston",
    name: "Bruins",
  }, "BUF": {
    rank: 0,
    code: "BUF",
    location: "Buffalo",
    name: "Sabres",
  }, "CAR": {
    rank: 0,
    code: "CAR",
    location: "Carolina",
    name: "Hurricanes",
  }, "CBJ": {
    rank: 0,
    code: "CBJ",
    location: "Columbus",
    name: "Blue Jackets",
  }, "CGY": {
    rank: 0,
    code: "CGY",
    location: "Calgary",
    name: "Flames",
  }, "CHI": {
    rank: 31,
    code: "CHI",
    location: "Chicago",
    name: "Blackhawks",
  }, "COL": {
    rank: 0,
    code: "COL",
    location: "Colorado",
    name: "Avalanche",
  }, "DAL": {
    rank: 0,
    code: "DAL",
    location: "Dallas",
    name: "Stars",
  }, "DET": {
    rank: 0,
    code: "DET",
    location: "Detroit",
    name: "Red Wings",
  }, "EDM": {
    rank: 0,
    code: "EDM",
    location: "Edmonton",
    name: "Oilers",
  }, "FLA": {
    rank: 0,
    code: "FLA",
    location: "Florida",
    name: "Panthers",
  }, "LAK": {
    rank: 0,
    code: "LAK",
    location: "Los Angeles",
    name: "Kings",
  }, "MIN": {
    rank: 0,
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
    rank: 0,
    code: "MTL",
    location: "Montreal",
    name: "Canadiens",
  }, "NJD": {
    rank: 0,
    code: "NJD",
    location: "New Jersey",
    name: "Devils",
  }, "NSH": {
    rank: 0,
    code: "NSH",
    location: "Nashville",
    name: "Predators",
  }, "NYI": {
    rank: 0,
    code: "NYI",
    location: "New York",
    name: "Islanders",
  }, "NYR": {
    rank: 0,
    code: "NYR",
    location: "New York",
    name: "Rangers",
  }, "OTT": {
    rank: 0,
    code: "OTT",
    location: "Ottawa",
    name: "Senators",
  }, "PHI": {
    rank: 0,
    code: "PHI",
    location: "Philadelphia",
    name: "Flyers",
  }, "PIT": {
    rank: 0,
    code: "PIT",
    location: "Pittsburgh",
    name: "Penguins",
  }, "SEA": {
    rank: 0,
    code: "SEA",
    location: "Seattle",
    name: "Kraken",
  }, "SJS": {
    rank: 0,
    code: "SJS",
    location: "San Jose",
    name: "Sharks",
  }, "STL": {
    rank: 0,
    code: "STL",
    location: "St. Louis",
    name: "Blues",
  }, "TBL": {
    rank: 0,
    code: "TBL",
    location: "Tampa Bay",
    name: "Lightning",
  }, "TOR": {
    rank: 0,
    code: "TOR",
    location: "Toronto",
    name: "Maple Leafs",
  }, "VAN": {
    rank: 0,
    code: "VAN",
    location: "Vancouver",
    name: "Canucks",
  }, "VEG": {
    rank: 0,
    code: "VEG",
    location: "Vegas",
    name: "Golden Knights",
  }, "WAS": {
    rank: 0,
    code: "WAS",
    location: "Washington",
    name: "Capitals",
  }, "WIN": {
    rank: 0,
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