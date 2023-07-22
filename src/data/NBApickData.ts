import { z } from "zod";

export const teamNames = [
  "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN",
  "DET", "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA",
  "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHO",
  "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
] as const;

export const years = [
  "2024", "2025", "2026", "2027", "2028", "2029", "2030"
] as const;

export type TeamNameType = typeof teamNames[number];
export type PickYearType = typeof years[number];
export type PickCodeType = `${TeamNameType}-${PickYearType}`;

export const TeamNameEnum = z.enum(teamNames);
export const YearEnum = z.enum(years);

export const NBAteamData: {
  [Key in TeamNameType] : {
    backgroundColor: string;
    color: string;
    fullStyle: string;
    location: string;
    name: string;
    nickName?: string;
  }
} = {
  ATL:{
    backgroundColor: "#E03A3E",
    color: "#C1D32F",
    fullStyle: "bg-[#E03A3E] border-[#C1D32F] text-white",  
    location: "Atlanta",
    name: "Hawks",
  },
  
  BOS:{
    backgroundColor: "#007A33",
    color: "#BA9653",
    fullStyle: "bg-[#007A33] border-[#BA9653] text-white",  
    location: "Boston",
    name: "Celtics",
  },
  
  BRK:{
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fullStyle: "bg-[#000000] border-[#FFFFFF] text-white",  
    location: "Brooklyn",
    name: "Nets",
  },
  
  CHI:{
    backgroundColor: "#CE1141",
    color: "#000000",
    fullStyle: "bg-[#CE1141] border-[#000000] text-white",  
    location: "Chicago",
    name: "Bulls",
  },
  
  CHO:{
    backgroundColor: "#1D1160",
    color: "#00788C",
    fullStyle: "bg-[#1D1160] border-[#00788C] text-white",  
    location: "Charlotte",
    name: "Hornets",
  },
  
  CLE:{
    backgroundColor: "#860038",
    color: "#FDBB30",
    fullStyle: "bg-[#860038] border-[#FDBB30] text-white",  
    location: "Cleveland",
    name: "Cavaliers",
    nickName: "Cavs",
  },
  
  DAL:{
    backgroundColor: "#00538C",
    color: "#B8C4CA",
    fullStyle: "bg-[#00538C] border-[#B8C4CA] text-white",  
    location: "Dallas",
    name: "Mavericks",
  },
  
  DEN:{
    backgroundColor: "#0E2240",
    color: "#FEC524",
    fullStyle: "bg-[#0E2240] border-[#FEC524] text-white",  
    location: "Denver",
    name: "Nuggets",
  },
  
  DET:{
    backgroundColor: "#1D42BA",
    color: "#C8102E",
    fullStyle: "bg-[#1D42BA] border-[#C8102E] text-white",  
    location: "Detroit",
    name: "Pistons",
  },
  
  GSW:{
    backgroundColor: "#FFC72C",
    color: "#1D428A",
    fullStyle: "bg-[#FFC72C] border-[#1D428A] text-white",  
    location: "Golden State",
    name: "Warriors",
  },
  
  HOU:{
    backgroundColor: "#CE1141",
    color: "#C4CED4",
    fullStyle: "bg-[#CE1141] border-[#C4CED4] text-white",  
    location: "Houston",
    name: "Rockets",
  },
  
  IND:{
    backgroundColor: "#002D62",
    color: "#FDBB30",
    fullStyle: "bg-[#002D62] border-[#FDBB30] text-white",  
    location: "Indiana",
    name: "Pacers",
  },
  
  LAC:{
    backgroundColor: "#C8102E",
    color: "#1D428A",
    fullStyle: "bg-[#C8102E] border-[#1D428A] text-white",  
    location: "Los Angeles",
    name: "Clippers",
  },
  
  LAL:{
    backgroundColor: "#FDB927",
    color: "#552583",
    fullStyle: "bg-[#FDB927] border-[#552583] text-[#552583]", 
    location: "Los Angeles",
    name: "Lakers",
  },
  
  MEM:{
    backgroundColor: "#5D76A9",
    color: "#12173F",
    fullStyle: "bg-[#5D76A9] border-[#12173F] text-white",  
    location: "Memphis",
    name: "Grizzlies",
  },
  
  MIA:{
    backgroundColor: "#98002E",
    color: "#F9A01B",
    fullStyle: "bg-[#98002E] border-[#F9A01B] text-white",  
    location: "Miami",
    name: "Heat",
  },
  
  MIL:{
    backgroundColor: "#00471B",
    color: "#EEE1C6",
    fullStyle: "bg-[#00471B] border-[#EEE1C6] text-white",  
    location: "Milwaukee",
    name: "Bucks",
  },
  
  MIN:{
    backgroundColor: "#0C2340",
    color: "#78BE20",
    fullStyle: "bg-[#0C2340] border-[#78BE20] text-white",  
    location: "Minnesota",
    name: "Timberwolves",
    nickName: "T-wolves",
  },
  
  NOP:{
    backgroundColor: "#0C2340",
    color: "#85714D",
    fullStyle: "bg-[#0C2340] border-[#85714D] text-white",  
    location: "New Orleans",
    name: "Pelicans",
  },
  
  NYK:{
    backgroundColor: "#F58426",
    color: "#006BB6",
    fullStyle: "bg-[#F58426] border-[#006BB6] text-white",  
    location: "New York",
    name: "Knicks",
  },
  
  OKC:{
    backgroundColor: "#007AC1",
    color: "#EF3B24",
    fullStyle: "bg-[#007AC1] border-[#EF3B24] text-white",  
    location: "Oklahoma City",
    name: "Thunder",
  },
  
  ORL:{
    backgroundColor: "#0077C0",
    color: "#C4CED4",
    fullStyle: "bg-[#0077C0] border-[#C4CED4] text-white",  
    location: "Orlando",
    name: "Magic",
  },
  
  PHI:{
    backgroundColor: "#006BB6",
    color: "#ED174C",
    fullStyle: "bg-[#006BB6] border-[#ED174C] text-white",  
    location: "Philadelphia",
    name: "76ers",
  },
  
  PHO:{
    backgroundColor: "#E56020",
    color: "#1D1160",
    fullStyle: "bg-[#E56020] border-[#1D1160] text-white",  
    location: "Phoenix",
    name: "Suns",
  },
  
  POR:{
    backgroundColor: "#E03A3E",
    color: "#000000",
    fullStyle: "bg-[#E03A3E] border-[#000000] text-white",  
    location: "Portland",
    name: "Trailblazers",
    nickName: "Blazers"
  },
  
  SAC:{
    backgroundColor: "#5A2D81",
    color: "#63727A",
    fullStyle: "bg-[#5A2D81] border-[#63727A] text-white",  
    location: "Sacramento",
    name: "Kings",
  },
  
  SAS:{
    backgroundColor: "#C4CED4",
    color: "#000000",
    fullStyle: "bg-[#C4CED4] border-[#000000] text-black",  
    location: "San Antonio",
    name: "Spurs",
  },
  
  TOR:{
    backgroundColor: "#CE1141",
    color: "#000000",
    fullStyle: "bg-[#CE1141] border-[#000000] text-white",  
    location: "Toronto",
    name: "Raptors",
  },
  
  UTA:{
    backgroundColor: "#00471B",
    color: "#F9A01B",
    fullStyle: "bg-[#00471B] border-[#F9A01B] text-white",  
    location: "Utah",
    name: "Jazz",
  },
  
  WAS:{
    backgroundColor: "#002B5C",
    color: "#E31837",
    fullStyle: "bg-[#002B5C] border-[#E31837] text-white",  
    location: "Washington",
    name: "Wizards",
  },

} as const;

export const NBApickData: {
  [Key in TeamNameType] : PickCodeType[][]
} = {
  ATL:[["ATL-2024", "SAC-2024"], [], ["ATL-2026"], [], ["ATL-2028"], ["ATL-2029"], ["ATL-2030"]],

  BOS:[["BOS-2024", "GSW-2024"], ["BOS-2025"], ["BOS-2026"], ["BOS-2027"], ["BOS-2028"], ["BOS-2029"], ["BOS-2030"]],
  
  BRK:[[], ["BRK-2025", "PHO-2025"], [], ["BRK-2027", "PHI-2027", "PHO-2027"], ["BRK-2028"], ["BRK-2029", "DAL-2029", "PHO-2029"], ["BRK-2030"]],
  
  CHI:[["CHI-2024", "POR-2024"], [], ["CHI-2026"], ["CHI-2027"], ["CHI-2028"], ["CHI-2029"], ["CHI-2030"]],
  
  CHO:[[], ["CHO-2025"], ["CHO-2026"], ["CHO-2027"], ["CHO-2028"], ["CHO-2029"], ["CHO-2030"]],
  
  CLE:[["CLE-2024"], [], ["CLE-2026"], [], ["CLE-2028"], [], ["CLE-2030"]],
  
  DAL:[[], ["DAL-2025"], ["DAL-2026"], ["DAL-2027"], ["DAL-2028"], [], ["DAL-2030"]],
  
  DEN:[["DEN-2024"], [], ["DEN-2026"], [], ["DEN-2028"], [], ["DEN-2030"]],
  
  DET:[[], ["DET-2025"], ["DET-2026"], ["DET-2027"], ["DET-2028"], ["DET-2029"], ["DET-2030"]],
  
  GSW:[[], ["GSW-2025"], ["GSW-2026"], ["GSW-2027"], ["GSW-2028"], ["GSW-2029"], ["GSW-2030"]],
  
  HOU:[["BRK-2024"], ["HOU-2025"], ["BRK-2026"], ["HOU-2027"], ["HOU-2028"], ["HOU-2029"], ["HOU-2030"]],
  
  IND:[["IND-2024", "OKC-2024"], ["IND-2025"], ["IND-2026"], ["IND-2027"], ["IND-2028"], ["IND-2029"], ["IND-2030"]],
  
  LAC:[[], ["LAC-2025"], [], ["LAC-2027"], ["LAC-2028"], ["LAC-2029"], ["LAC-2030"]],
  
  LAL:[[], ["LAL-2025"], ["LAL-2026"], [], ["LAL-2028"], ["LAL-2029"], ["LAL-2030"]],
  
  MEM:[["MEM-2024"], ["MEM-2025"], ["MEM-2026"], ["MEM-2027"], ["MEM-2028"], ["MEM-2029"], ["MEM-2030"]],
  
  MIA:[["MIA-2024"], [], ["MIA-2026"], ["MIA-2027"], ["MIA-2028"], ["MIA-2029"], ["MIA-2030"]],
  
  MIL:[["MIL-2024"], [], ["MIL-2026"], [], ["MIL-2028"], ["MIL-2029"], ["MIL-2030"]],
  
  MIN:[["MIN-2024"], [], ["MIN-2026"], [], ["MIN-2028"], [], ["MIN-2030"]],
  
  NOP:[["NOP-2024", "LAL-2024"], ["NOP-2025"], ["NOP-2026"], ["NOP-2027", "MIL-2027"], ["NOP-2028"], ["NOP-2029"], ["NOP-2030"]],
  
  NYK:[["NYK-2024", "DAL-2024", "DET-2024", "WAS-2024"], ["NYK-2025", "MIL-2025"], ["NYK-2026"], ["NYK-2027"], ["NYK-2028"], ["NYK-2029"], ["NYK-2030"]],
  
  OKC:[["HOU-2024", "LAC-2024", "UTA-2024"], ["OKC-2025", "MIA-2025", "PHI-2025"], ["OKC-2026", "HOU-2026", "LAC-2026"], ["OKC-2027", "DEN-2027"], ["OKC-2028"], ["OKC-2029", "DEN-2029"], ["OKC-2030"]],
  
  ORL:[["ORL-2024"], ["ORL-2025", "DEN-2025"], ["ORL-2026"], ["ORL-2027"], ["ORL-2028"], ["ORL-2029"], ["ORL-2030"]],
  
  PHI:[["PHI-2024"], [], ["PHI-2026"], [], ["PHI-2028"], ["PHI-2029"], ["PHI-2030"]],
  
  PHO:[["PHO-2024"], [], ["PHO-2026"], [], ["PHO-2028"], [], ["PHO-2030"]],
  
  POR:[[], ["POR-2025"], ["POR-2026"], ["POR-2027"], ["POR-2028"], ["POR-2029"], ["POR-2030"]],
  
  SAC:[[], ["SAC-2025"], ["SAC-2026"], ["SAC-2027"], ["SAC-2028"], ["SAC-2029"], ["SAC-2030"]],
  
  SAS:[["SAS-2024", "CHO-2024", "TOR-2024"], ["SAS-2025", "ATL-2025", "CHI-2025"], ["SAS-2026"], ["SAS-2027", "ATL-2027"], ["SAS-2028"], ["SAS-2029"], ["SAS-2030"]],
  
  TOR:[[], ["TOR-2025"], ["TOR-2026"], ["TOR-2027"], ["TOR-2028"], ["TOR-2029"], ["TOR-2030"]],
  
  UTA:[[], ["UTA-2025", "CLE-2025", "MIN-2025"], ["UTA-2026"], ["UTA-2027", "CLE-2027", "LAL-2027", "MIN-2027"], ["UTA-2028"], ["UTA-2029", "CLE-2029", "MIN-2029"], ["UTA-2030"]],
  
  WAS:[[], ["WAS-2025"], ["WAS-2026"], ["WAS-2027"], ["WAS-2028"], ["WAS-2029"], ["WAS-2030"]],
};