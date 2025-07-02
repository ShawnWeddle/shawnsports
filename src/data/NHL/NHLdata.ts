export const nhlTeamsRanked = [
  "VEG", "FLA", "CAR", "DAL", "BOS", "COL", "NJD", "TOR", 
  "EDM", "NYR", "LAK", "MIN", "SEA", "TBL", "WIN", "NYI", 
  "CGY", "NSH", "PIT", "BUF", "OTT", "VAN", "STL", "DET", 
  "WAS", "PHI", "UTA", "MTL", "SJS", "CBJ", "ANA", "CHI", 
] as const;

export const nhlTeamsAll = [
  "VEG", "FLA", "CAR", "DAL", "BOS", "COL", "NJD", "TOR", 
  "EDM", "NYR", "LAK", "MIN", "SEA", "TBL", "WIN", "NYI", 
  "CGY", "NSH", "PIT", "BUF", "OTT", "VAN", "STL", "DET", 
  "WAS", "PHI", "UTA", "MTL", "SJS", "CBJ", "ANA", "CHI", 
  "MMR", "MNS", "QUE", "ARI"
] as const;

export type NHLTeamType = typeof nhlTeamsRanked[number];

export type AllNHLTeamType = typeof nhlTeamsAll[number];

export type teamInfoType = { code: string, location: string, name: string };

export const NHLteamData: { [Key in AllNHLTeamType] : teamInfoType} = {
  "ANA": {
    code: "ANA",
    location: "Anaheim",
    name: "Ducks",
  },"ARI": {
    code: "ARI",
    location: "Arizona",
    name: "Coyotes",
  },"BOS": {
    code: "BOS",
    location: "Boston",
    name: "Bruins",
  }, "BUF": {
    code: "BUF",
    location: "Buffalo",
    name: "Sabres",
  }, "CAR": {
    code: "CAR",
    location: "Carolina",
    name: "Hurricanes",
  }, "CBJ": {
    code: "CBJ",
    location: "Columbus",
    name: "Blue Jackets",
  }, "CGY": {
    code: "CGY",
    location: "Calgary",
    name: "Flames",
  }, "CHI": {
    code: "CHI",
    location: "Chicago",
    name: "Blackhawks",
  }, "COL": {
    code: "COL",
    location: "Colorado",
    name: "Avalanche",
  }, "DAL": {
    code: "DAL",
    location: "Dallas",
    name: "Stars",
  }, "DET": {
    code: "DET",
    location: "Detroit",
    name: "Red Wings",
  }, "EDM": {
    code: "EDM",
    location: "Edmonton",
    name: "Oilers",
  }, "FLA": {
    code: "FLA",
    location: "Florida",
    name: "Panthers",
  }, "LAK": {
    code: "LAK",
    location: "Los Angeles",
    name: "Kings",
  }, "MIN": {
    code: "MIN",
    location: "Minnesota",
    name: "Wild",
  }, "MMR": {
    code: "MMR",
    location: "Montreal",
    name: "Maroons",
  }, "MNS": {
    code: "MNS",
    location: "Minnesota",
    name: "North Stars",
  }, "MTL": {
    code: "MTL",
    location: "Montreal",
    name: "Canadiens",
  }, "NJD": {
    code: "NJD",
    location: "New Jersey",
    name: "Devils",
  }, "NSH": {
    code: "NSH",
    location: "Nashville",
    name: "Predators",
  }, "NYI": {
    code: "NYI",
    location: "New York",
    name: "Islanders",
  }, "NYR": {
    code: "NYR",
    location: "New York",
    name: "Rangers",
  }, "OTT": {
    code: "OTT",
    location: "Ottawa",
    name: "Senators",
  }, "PHI": {
    code: "PHI",
    location: "Philadelphia",
    name: "Flyers",
  }, "PIT": {
    code: "PIT",
    location: "Pittsburgh",
    name: "Penguins",
  }, "QUE": {
    code: "QUE",
    location: "Quebec",
    name: "Nordiques",
  }, "SEA": {
    code: "SEA",
    location: "Seattle",
    name: "Kraken",
  }, "SJS": {
    code: "SJS",
    location: "San Jose",
    name: "Sharks",
  }, "STL": {
    code: "STL",
    location: "St. Louis",
    name: "Blues",
  }, "TBL": {
    code: "TBL",
    location: "Tampa Bay",
    name: "Lightning",
  }, "TOR": {
    code: "TOR",
    location: "Toronto",
    name: "Maple Leafs",
  }, "UTA": {
    code: "UTA",
    location: "Utah",
    name: "Mammoth",
  }, "VAN": {
    code: "VAN",
    location: "Vancouver",
    name: "Canucks",
  }, "VEG": {
    code: "VEG",
    location: "Vegas",
    name: "Golden Knights",
  }, "WAS": {
    code: "WAS",
    location: "Washington",
    name: "Capitals",
  }, "WIN": {
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