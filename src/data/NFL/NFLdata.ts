export const nflTeams = [
  "KC", "PHI", "SF", "CIN", "BUF", "DAL", "NYG", "JAX", 
  "MIN", "BAL", "LAC", "MIA", "SEA", "TB", "DET", "PIT", 
  "WAS", "GB", "NE", "NYJ", "CLE", "TEN", "NO", "CAR", 
  "ATL", "LV", "LAR", "DEN", "IND", "ARI", "HOU", "CHI"
] as const;

export type NFLTeamType = typeof nflTeams[number];

export const teamColors: { [Key in NFLTeamType] : {primary: string, secondary: string}} = {
  "ARI":{
    primary: "#97233F",
    secondary: "#FFB612"
  },
  "ATL":{
    primary: "#A71930",
    secondary: "#000000"
  },
  "BAL":{
    primary: "#241773",
    secondary: "#9E7C0C"
  },
  "BUF":{
    primary: "#00338D",
    secondary: "#C60C30"
  },
  "CAR":{
    primary: "#0085CA",
    secondary: "#101820"
  },
  "CHI":{
    primary: "#0B162A",
    secondary: "#C83803"
  },
  "CIN":{
    primary: "#FB4F14",
    secondary: "#000000"
  },
  "CLE":{
    primary: "#FF3C00",
    secondary: "#311D00"
  },
  "DAL":{
    primary: "#041E42",
    secondary: "#FFFFFF"
  },
  "DEN":{
    primary: "#FB4F14",
    secondary: "#002244"
  },
  "DET":{
    primary: "#0076B6",
    secondary: "#B0B7BC"
  },
  "GB":{
    primary: "#203731",
    secondary: "#FFB612"
  },
  "HOU":{
    primary: "#03202F",
    secondary: "#A71930"
  },
  "IND":{
    primary: "#002C5F",
    secondary: "#FFFFFF"
  },
  "JAX":{
    primary: "#006778",
    secondary: "#9F792C"
  },
  "KC":{
    primary: "#E31837",
    secondary: "#FFFFFF"
  },
  "LAC":{
    primary: "#0080C6",
    secondary: "#FFC20E"
  },
  "LAR":{
    primary: "#003594",
    secondary: "#FFA300"
  },
  "LV":{
    primary: "#000000",
    secondary: "#A5ACAF"
  },
  "MIA":{
    primary: "#008E97",
    secondary: "#FC4C02"
  },
  "MIN":{
    primary: "#4F2683",
    secondary: "#FFC62F"
  },
  "NE":{
    primary: "#002244",
    secondary: "#C60C30"
  },
  "NO":{
    primary: "#D3BC8D",
    secondary: "#101820"
  },
  "NYG":{
    primary: "#0B2265",
    secondary: "#A71930"
  },
  "NYJ":{
    primary: "#125740",
    secondary: "#FFFFFF"
  },
  "PHI":{
    primary: "#004C54",
    secondary: "#A5ACAF"
  },
  "PIT":{
    primary: "#FFB612",
    secondary: "#101820"
  },
  "SEA":{
    primary: "#002244",
    secondary: "#69BE28"
  },
  "SF":{
    primary: "#AA0000",
    secondary: "#B3995D"
  },
  "TB":{
    primary: "#D50A0A",
    secondary: "#34302B"
  },
  "TEN":{
    primary: "#0C2340",
    secondary: "#4B92DB"
  },
  "WAS":{
    primary: "#5A1414",
    secondary: "#FFB612"
  }
}

export type teamInfoType = {rank: number, code: string, location: string, name: string };

export const teamInfo: { [Key in NFLTeamType] : teamInfoType} = {
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
  "GB":{
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
  "KC":{
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
  "LV":{
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
  "NE":{
    code:  "NE",
    rank: 18,
    location: "New England",
    name: "Patriots"
  },
  "NO":{
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
  "SF":{
    code:  "SF",
    rank: 2,
    location: "San Francisco",
    name: "49ers"
  },
  "TB":{
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

export const initialUnrankedTeams: teamInfoType[] = [
  {code: 'KC', rank: 0, location: 'Kansas City', name: 'Chiefs'},
  {code: 'PHI', rank: 1, location: 'Philadelphia', name: 'Eagles'},
  {code: 'SF', rank: 2, location: 'San Francisco', name: '49ers'},
  {code: 'CIN', rank: 3, location: 'Cincinnati', name: 'Bengals'},
  {code: 'BUF', rank: 4, location: 'Buffalo', name: 'Bills'},
  {code: 'DAL', rank: 5, location: 'Dallas', name: 'Cowboys'},
  {code: 'NYG', rank: 6, location: 'New York', name: 'Giants'},
  {code: 'JAX', rank: 7, location: 'Jacksonville', name: 'Jaguars'},
  {code: 'MIN', rank: 8, location: 'Minnesota', name: 'Vikings'},
  {code: 'BAL', rank: 9, location: 'Baltimore', name: 'Ravens'},
  {code: 'LAC', rank: 10, location: 'Los Angeles', name: 'Chargers'},
  {code: 'MIA', rank: 11, location: 'Miami', name: 'Dolphins'},
  {code: 'SEA', rank: 12, location: 'Seattle', name: 'Seahawks'},
  {code: 'TB', rank: 13, location: 'Tampa Bay', name: 'Buccaneers'},
  {code: 'DET', rank: 14, location: 'Detroit', name: 'Lions'},
  {code: 'PIT', rank: 15, location: 'Pittsburgh', name: 'Steelers'},
  {code: 'WAS', rank: 16, location: 'Washington', name: 'Commanders'},
  {code: 'GB', rank: 17, location: 'Green Bay', name: 'Packers'},
  {code: 'NE', rank: 18, location: 'New England', name: 'Patriots'},
  {code: 'NYJ', rank: 19, location: 'New York', name: 'Jets'},
  {code: 'CLE', rank: 20, location: 'Cleveland', name: 'Browns'},
  {code: 'TEN', rank: 21, location: 'Tennessee', name: 'Titans'},
  {code: 'NO', rank: 22, location: 'New Orleans', name: 'Saints'},
  {code: 'CAR', rank: 23, location: 'Carolina', name: 'Panthers'},
  {code: 'ATL', rank: 24, location: 'Atlanta', name: 'Falcons'},
  {code: 'LV', rank: 25, location: 'Las Vegas', name: 'Raiders'},
  {code: 'LAR', rank: 26, location: 'Los Angeles', name: 'Rams'},
  {code: 'DEN', rank: 27, location: 'Denver', name: 'Broncos'},
  {code: 'IND', rank: 28, location: 'Indianapolis', name: 'Colts'},
  {code: 'ARI', rank: 29, location: 'Arizona', name: 'Cardinals'},
  {code: 'HOU', rank: 30, location: 'Houston', name: 'Texans'},
  {code: 'CHI', rank: 31, location: 'Chicago', name: 'Bears'}
];

export const initialRankedTeams: (teamInfoType | {code: "RRR"})[] = [
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"},
  {code: "RRR"}
  ];

export const teamColorStyles: { [key: string] : {primary: string}} = {
  "ARI":{
    primary: "bg-[#97233F] text-white w-48"
  },
  "ATL":{
    primary: "bg-[#A71930] text-white w-48"
  },
  "BAL":{
    primary: "bg-[#241773] text-white w-48"
  },
  "BUF":{
    primary: "bg-[#00338D] text-white w-48"
  },
  "CAR":{
    primary: "bg-[#0085CA] text-white w-48"
  },
  "CHI":{
    primary: "bg-[#0B162A] text-white w-48"
  },
  "CIN":{
    primary: "bg-[#FB4F14] text-white w-48"
  },
  "CLE":{
    primary: "bg-[#FF3C00] text-white w-48"
  },
  "DAL":{
    primary: "bg-[#041E42] text-white w-48"
  },
  "DEN":{
    primary: "bg-[#FB4F14] text-white w-48"
  },
  "DET":{
    primary: "bg-[#0076B6] text-white w-48"
  },
  "GB":{
    primary: "bg-[#203731] text-white w-48"
  },
  "HOU":{
    primary: "bg-[#03202F] text-white w-48"
  },
  "IND":{
    primary: "bg-[#002C5F] text-white w-48"
  },
  "JAX":{
    primary: "bg-[#006778] text-white w-48"
  },
  "KC":{
    primary: "bg-[#E31837] text-white w-48"
  },
  "LAC":{
    primary: "bg-[#0080C6] text-white w-48"
  },
  "LAR":{
    primary: "bg-[#003594] text-white w-48"
  },
  "LV":{
    primary: "bg-[#000000] text-white w-48"
  },
  "MIA":{
    primary: "bg-[#008E97] text-white w-48"
  },
  "MIN":{
    primary: "bg-[#4F2683] text-white w-48"
  },
  "NE":{
    primary: "bg-[#002244] text-white w-48"
  },
  "NO":{
    primary: "bg-[#D3BC8D] text-black w-48"
  },
  "NYG":{
    primary: "bg-[#0B2265] text-white w-48"
  },
  "NYJ":{
    primary: "bg-[#125740] text-white w-48"
  },
  "PHI":{
    primary: "bg-[#004C54] text-white w-48"
  },
  "PIT":{
    primary: "bg-[#FFB612] text-black w-48"
  },
  "SEA":{
    primary: "bg-[#002244] text-white w-48"
  },
  "SF":{
    primary: "bg-[#AA0000] text-white w-48"
  },
  "TB":{
    primary: "bg-[#D50A0A] text-white w-48"
  },
  "TEN":{
    primary: "bg-[#0C2340] text-white w-48"
  },
  "WAS":{
    primary: "bg-[#5A1414] text-white w-48"
  }
}

export const nullArray32 = [
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
]