import type { TeamNameType, PickYearType, PickCodeType } from "./NBApickData";

type ProtectionValueType = "N/A"; //"UP" | "P - FU" | "P - FS" | 
type SwapRightType = "positive" | "negative" | "neutral";

export const AllNBAPicks: {[Key in TeamNameType] : {[Key in PickYearType] : { nativeTeam: TeamNameType, pickCode: PickCodeType, protection?: ProtectionValueType, swap?: SwapRightType}[]}} = {
"ATL":{
  "2024":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2024",
  },{
    nativeTeam: "SAC",
    protection: "N/A",
    pickCode: "SAC-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2026",
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2028",
  },],
  "2029":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2029",
  },],
  "2030":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2030",
  },],
},
"BOS":{
  "2024":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2024",
  },{
    nativeTeam: "GSW",
    pickCode: "GSW-2024",
  },],
  "2025":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2025",
  },],
  "2026":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2026",
  },],
  "2027":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2027",
  },],
  "2028":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2028",
    swap: "negative",
  },],
  "2029":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2029",
  },],
  "2030":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2030",
  },],
},
"BRK":{
  "2024":[],
  "2025":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2025",
    swap: "negative",
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2025",
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2027",
    swap: "negative",
  },{
    nativeTeam: "PHI",
    pickCode: "PHI-2027",
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2027",
  },],
  "2028":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2028",
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2029",
  },{
    nativeTeam: "DAL",
    pickCode: "DAL-2029",
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2029",
  },],
  "2030":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2030",
  },],
},
"CHI":{
  "2024":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2024",
  },{
    nativeTeam: "POR",
    pickCode: "POR-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2026",
  },],
  "2027":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2027",
  },],
  "2028":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2028",
  },],
  "2029":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2029",
  },],
  "2030":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2030",
  },],
},
"CHO":{
  "2024":[],
  "2025":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2025",
  },],
  "2026":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2026",
  },],
  "2027":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2027",
  },],
  "2028":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2028",
  },],
  "2029":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2029",
  },],
  "2030":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2030",
  },],
},
"CLE":{
  "2024":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2026",
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2028",
    swap: "negative",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2030",
  },],
},
"DAL":{
  "2024":[],
  "2025":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2025",
  },],
  "2026":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2026",
  },],
  "2027":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2027",
  },],
  "2028":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2028",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2030",
  },],
},
"DEN":{
  "2024":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2026",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2028",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2030",
  },],
},
"DET":{
  "2024":[],
  "2025":[{
    nativeTeam: "DET",
    pickCode: "DET-2025",
  },],
  "2026":[{
    nativeTeam: "DET",
    pickCode: "DET-2026",
  },],
  "2027":[{
    nativeTeam: "DET",
    pickCode: "DET-2027",
  },],
  "2028":[{
    nativeTeam: "DET",
    pickCode: "DET-2028",
  },],
  "2029":[{
    nativeTeam: "DET",
    pickCode: "DET-2029",
  },],
  "2030":[{
    nativeTeam: "DET",
    pickCode: "DET-2030",
  },],
},
"GSW":{
  "2024":[],
  "2025":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2025",
  },],
  "2026":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2026",
  },],
  "2027":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2027",
  },],
  "2028":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2028",
  },],
  "2029":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2029",
  },],
  "2030":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2030",
  },],
},
"HOU":{
  "2024":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2024",
  },],
  "2025":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2025",
    swap: "neutral",
  },],
  "2026":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2026",
  },],
  "2027":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2027",
    swap: "positive",
  },],
  "2028":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2028",
  },],
  "2029":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2029",
  },],
  "2030":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2030",
  },],
},
"IND":{
  "2024":[{
    nativeTeam: "IND",
    pickCode: "IND-2024",
  },{
    nativeTeam: "OKC",
    pickCode: "OKC-2024",
  },],
  "2025":[{
    nativeTeam: "IND",
    pickCode: "IND-2025",
  },],
  "2026":[{
    nativeTeam: "IND",
    pickCode: "IND-2026",
  },],
  "2027":[{
    nativeTeam: "IND",
    pickCode: "IND-2027",
  },],
  "2028":[{
    nativeTeam: "IND",
    pickCode: "IND-2028",
  },],
  "2029":[{
    nativeTeam: "IND",
    pickCode: "IND-2029",
  },],
  "2030":[{
    nativeTeam: "IND",
    pickCode: "IND-2030",
  },],
},
"LAC":{
  "2024":[],
  "2025":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2025",
    swap: "negative",
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2027",
  },],
  "2028":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2028",
  },],
  "2029":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2029",
  },],
  "2030":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2030",
  },],
},
"LAL":{
  "2024":[],
  "2025":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2025",
  },],
  "2026":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2026",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2028",
  },],
  "2029":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2029",
  },],
  "2030":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2030",
  },],
},
"MEM":{
  "2024":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2024",
  },],
  "2025":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2025",
  },],
  "2026":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2026",
  },],
  "2027":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2027",
  },],
  "2028":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2028",
  },],
  "2029":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2029",
  },],
  "2030":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2030",
  },],
},
"MIA":{
  "2024":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2026",
  },],
  "2027":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2027",
  },],
  "2028":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2028",
  },],
  "2029":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2029",
  },],
  "2030":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2030",
  },],
},
"MIL":{
  "2024":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2024",
    swap: "negative",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2026",
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2028",
  },],
  "2029":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2029",
  },],
  "2030":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2030",
  },],
},
"MIN":{
  "2024":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2026",
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2028",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2030",
  },],
},
"NOP":{
  "2024":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2024",
    swap: "positive",
  },{
    nativeTeam: "LAL",
    pickCode: "LAL-2024",
  },],
  "2025":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2025",
  },],
  "2026":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2026",
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2027",
  },{
    nativeTeam: "MIL",
    pickCode: "MIL-2027",
  },],
  "2028":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2028",
  },],
  "2029":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2029",
  },],
  "2030":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2030",
  },],
},
"NYK":{
  "2024":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2024",
  },{
    nativeTeam: "DAL",
    pickCode: "DAL-2024",
  },{
    nativeTeam: "DET",
    pickCode: "DET-2024",
  },{
    nativeTeam: "WAS",
    pickCode: "WAS-2024",
  },],
  "2025":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2025",
  },{
    nativeTeam: "MIL",
    pickCode: "MIL-2025",
  },],
  "2026":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2026",
  },],
  "2027":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2027",
  },],
  "2028":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2028",
  },],
  "2029":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2029",
  },],
  "2030":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2030",
  },],
},
"OKC":{
  "2024":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2024",
  },{
    nativeTeam: "LAC",
    pickCode: "LAC-2024",
  },{
    nativeTeam: "UTA",
    pickCode: "UTA-2024",
  },],
  "2025":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2025",
    swap: "positive",
  },{
    nativeTeam: "MIA",
    pickCode: "MIA-2025",
  },{
    nativeTeam: "PHI",
    pickCode: "PHI-2025",
  },],
  "2026":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2026",
  },{
    nativeTeam: "HOU",
    pickCode: "HOU-2026",
  },{
    nativeTeam: "LAC",
    pickCode: "LAC-2026",
  },],
  "2027":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2027",
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2027",
  },],
  "2028":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2028",
  },],
  "2029":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2029",
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2029",
  },],
  "2030":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2030",
  },],
},
"ORL":{
  "2024":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2024",
  },],
  "2025":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2025",
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2025",
  },],
  "2026":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2026",
  },],
  "2027":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2027",
  },],
  "2028":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2028",
  },],
  "2029":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2029",
  },],
  "2030":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2030",
  },],
},
"PHI":{
  "2024":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2026",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2028",
  },],
  "2029":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2029",
  },],
  "2030":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2030",
  },],
},
"PHO":{
  "2024":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2024",
  },],
  "2025":[],
  "2026":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2026",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2028",
    swap: "negative",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2030",
  },],
},
"POR":{
  "2024":[],
  "2025":[{
    nativeTeam: "POR",
    pickCode: "POR-2025",
  },],
  "2026":[{
    nativeTeam: "POR",
    pickCode: "POR-2026",
  },],
  "2027":[{
    nativeTeam: "POR",
    pickCode: "POR-2027",
  },],
  "2028":[{
    nativeTeam: "POR",
    pickCode: "POR-2028",
  },],
  "2029":[{
    nativeTeam: "POR",
    pickCode: "POR-2029",
  },],
  "2030":[{
    nativeTeam: "POR",
    pickCode: "POR-2030",
  },],
},
"SAC":{
  "2024":[],
  "2025":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2025",
  },],
  "2026":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2026",
  },],
  "2027":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2027",
  },],
  "2028":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2028",
  },],
  "2029":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2029",
  },],
  "2030":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2030",
  },],
},
"SAS":{
  "2024":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2024",
  },{
    nativeTeam: "CHO",
    pickCode: "CHO-2024",
  },{
    nativeTeam: "TOR",
    pickCode: "TOR-2024",
  },],
  "2025":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2025",
  },{
    nativeTeam: "ATL",
    pickCode: "ATL-2025",
  },{
    nativeTeam: "CHI",
    pickCode: "CHI-2025",
  },],
  "2026":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2026",
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2027",
  },{
    nativeTeam: "ATL",
    pickCode: "ATL-2027",
  },],
  "2028":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2028",
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2029",
  },],
  "2030":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2030",
  },],
},
"TOR":{
  "2024":[],
  "2025":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2025",
  },],
  "2026":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2026",
  },],
  "2027":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2027",
  },],
  "2028":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2028",
  },],
  "2029":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2029",
  },],
  "2030":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2030",
  },],
},
"UTA":{
  "2024":[],
  "2025":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2025",
  },{
    nativeTeam: "CLE",
    pickCode: "CLE-2025",
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2025",
  },],
  "2026":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2026",
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2027",
  },{
    nativeTeam: "CLE",
    pickCode: "CLE-2027",
  },{
    nativeTeam: "LAL",
    pickCode: "LAL-2027",
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2027",
  },],
  "2028":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2028",
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2029",
  },{
    nativeTeam: "CLE",
    pickCode: "CLE-2029",
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2029",
  },],
  "2030":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2030",
  },],
},
"WAS":{
  "2024":[],
  "2025":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2025",
  },],
  "2026":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2026",
  },],
  "2027":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2027",
  },],
  "2028":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2028",
  },],
  "2029":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2029",
  },],
  "2030":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2030",
  },],
},
}