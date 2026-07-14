export const nhlTeamsRanked = [ 
  "VAN", "SEA", "SJS", "LAK", "ANA", "VEG", "CGY", "EDM", 
  "UTA", "COL", "WIN", "DAL", "MIN", "STL", "CHI", "NSH", 
  "DET", "CBJ", "TBL", "FLA", "PIT", "TOR", "BUF", "CAR", 
  "WAS", "OTT", "PHI", "NJD", "NYR", "NYI", "MTL", "BOS",
] as const;

export const nhlTeamsAll = [
  "VEG", "FLA", "CAR", "DAL", "BOS", "COL", "NJD", "TOR", 
  "EDM", "NYR", "LAK", "MIN", "SEA", "TBL", "WIN", "NYI", 
  "CGY", "NSH", "PIT", "BUF", "OTT", "VAN", "STL", "DET", 
  "WAS", "PHI", "UTA", "MTL", "SJS", "CBJ", "ANA", "CHI", 
  "MMR", "MNS", "QUE", "ARI"
] as const;

export const ahlTeamsList = [
  "AHL-ANA",
  "AHL-BOS",
  "AHL-BUF",
  "AHL-CAR",
  "AHL-CBJ",
  "AHL-CGY",
  "AHL-CHI",
  "AHL-COL",
  "AHL-DAL",
  "AHL-DET",
  "AHL-EDM",
  "AHL-FLA",
  "AHL-LAK",
  "AHL-MIN",
  "AHL-MTL",
  "AHL-NJD",
  "AHL-NSH",
  "AHL-NYI",
  "AHL-NYR",
  "AHL-OTT",
  "AHL-PHI",
  "AHL-PIT",
  "AHL-SEA",
  "AHL-SJS",
  "AHL-STL",
  "AHL-TBL",
  "AHL-TOR",
  "AHL-UTA",
  "AHL-VAN",
  "AHL-VEG",
  "AHL-WAS",
  "AHL-WIN",
] as const;

export const echlTeamsList = [
  "ECHL-ANA",
  "ECHL-BOS",
  "ECHL-BUF",
  "ECHL-CAR",
  "ECHL-CGY",
  "ECHL-CHI",
  "ECHL-COL",
  "ECHL-DAL",
  "ECHL-DET",
  "ECHL-EDM",
  "ECHL-FLA",
  "ECHL-LAK",
  "ECHL-MIN",
  "ECHL-MTL",
  "ECHL-NJD",
  "ECHL-NSH",
  "ECHL-NYI",
  "ECHL-NYR",
  "ECHL-OTT",
  "ECHL-PHI",
  "ECHL-PIT",
  "ECHL-SEA",
  "ECHL-SJS",
  "ECHL-STL",
  "ECHL-TBL",
  "ECHL-TOR",
  "ECHL-VAN",
  "ECHL-VEG",
  "ECHL-WAS",
  "ECHL-WIN",
] as const;

export const ahlTeamsListReal = [
  "ABB",
  "BAK",
  "BEL",
  "CGY",
  "CHI",
  "CLE",
  "CLT",
  "COL",
  "CVF",
  "GRG",
  "HAM",
  "HER",
  "HFD",
  "HSK",
  "IOW",
  "LAV",
  "LVP",
  "MBM",
  "MIL",
  "ONT",
  "PRO",
  "RFD",
  "ROC",
  "SDG",
  "SJB",
  "SPR",
  "SYR",
  "TEX",
  "TOR",
  "TUC",
  "UTI",
  "WBS", 
] as const;

export const echlTeamsListReal = [
  "ADK",
  "ALN",
  "ATL",
  "BLM",
  "CIN",
  "FLA",
  "FWK",
  "GSO",
  "GVL",
  "IDH",
  "IND",
  "JAX",
  "KAL",
  "KCM",
  "MNE",
  "NMG",
  "NOR",
  "ORL",
  "RCR",
  "REA",
  "SAV",
  "SCS",
  "TAH",
  "TOL",
  "TRE",
  "TRL",
  "TUL",
  "WHL",
  "WIC",
  "WOR",
] as const;

export const pwhlTeamsAll = [
  "BOS", "DET", "HAM", "MIN", "MTL", "NYS", 
  "OTT", "SEA", "SJS", "TOR", "VAN", "VEG",
] as const;

export type TierType = "NHL" | "AHL" | "ECHL";
export type LeagueType = "NHL" | "AHL" | "ECHL" | "PWHL";
export const leagueMapList: Set<LeagueType> = new Set(["NHL", "AHL", "ECHL", "PWHL"]);

export type NHLTeamType = typeof nhlTeamsRanked[number];
export type AHLTeamType = typeof ahlTeamsList[number];
export type ECHLTeamType = typeof echlTeamsList[number];
export type PWHLTeamType = typeof pwhlTeamsAll[number];
export type AHLTeamTypeReal = typeof ahlTeamsListReal[number];

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