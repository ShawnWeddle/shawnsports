import type { NBATeamType, PickYearType, PickCodeType } from "./NBAdata";

type ProtectionValueType = "N/A"; //"UP" | "P - FU" | "P - FS" | 
type SwapRightType = "positive" | "negative" | "neutral";

export type PickType = { nativeTeam: NBATeamType, pickCode: PickCodeType, year: number, notes: string[], protection?: ProtectionValueType, swap?: SwapRightType};

export const AllNBAPicks: {[Key in NBATeamType] : {[Key in PickYearType] : PickType[]}} = {
"ATL":{
  "2025":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2025",
    year: 2025,
    notes: ["Traded from Los Angeles Lakers to New Orleans to Atlanta."],
  },{
    nativeTeam: "SAC",
    pickCode: "SAC-2025",
    year: 2025,
    notes: ["Traded from Sacramento to Atlanta."],
  },],
  "2026":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2026",
    year: 2026,
    notes: ["Atlanta will receive the greater of (the lesser of their native pick and San Antonio's pick) and Cleveland's pick."],
    swap: "neutral",
  },],
  "2027":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2027",
    year: 2027,
    swap: "negative",
    notes: ["Atlanta will receive the lesser of Milwaukee's pick and New Orleans's pick."],
  },],
  "2028":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2028",
    year: 2028,
    notes: ["Atlanta will receive the greater of their native pick and (the lesser of Cleveland's pick and Utah's pick)."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2029",
    year: 2029,
    notes: ["Atlanta has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2030",
    year: 2030,
    notes: ["Atlanta has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2031",
    year: 2031,
    notes: ["Atlanta has not yet traded this pick."],
  }],
},
"BOS":{
  "2025":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2025",
    year: 2025,
    notes: ["Boston has not yet traded this pick."],
  },],
  "2026":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2026",
    year: 2026,
    notes: ["Boston has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2027",
    year: 2027,
    notes: ["Boston has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2028",
    year: 2028,
    notes: ["Boston will receive the lesser of their native pick and San Antonio's pick."],
    swap: "negative",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2030",
    year: 2030,
    notes: ["Boston has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2031",
    year: 2031,
    notes: ["Boston has not yet traded this pick."],
  }],
},
"BRK":{
  "2025":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2025",
    year: 2025,
    notes: ["Brooklyn has not yet traded this pick."],
  },{
    nativeTeam: "MIL",
    pickCode: "MIL-2025",
    year: 2025,
    notes: ["Traded from Milwaukee to New Orleans to Portland to Detroit to New York to Brooklyn."],
  },{
    nativeTeam: "NYK",
    pickCode: "NYK-2025",
    year: 2025,
    notes: ["Traded from New York to Brooklyn."],
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2025",
    year: 2025,
    notes: ["Traded from Phoenix to Brooklyn.", "Brooklyn will receive the lesser of Phoenix's pick and (the lesser of Houston's pick and (the greater of Oklahoma City's pick and Los Angeles Clippers' pick))"],
    swap: "negative",
  },],
  "2026":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2026",
    year: 2026,
    notes: ["Traded from Brooklyn to Houston to Brooklyn."],
  },],
  "2027":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2027",
    year: 2027,
    notes: ["Brooklyn will receive the lesser of their native pick and Houston's pick."],
    swap: "negative",
  },{
    nativeTeam: "NYK",
    pickCode: "NYK-2027",
    year: 2027,
    notes: ["Traded from New York to Brooklyn."],
  },{
    nativeTeam: "PHI",
    pickCode: "PHI-2027",
    year: 2027,
    notes: ["Traded from Philadelphia to Brooklyn."],
  },],
  "2028":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2028",
    year: 2028,
    notes: ["Brooklyn will receive the most favorable of their native pick, New York's pick, and Phoenix's pick."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2029",
    year: 2029,
    notes: ["Brooklyn has not yet traded this pick."],
  },{
    nativeTeam: "HOU",
    pickCode: "HOU-2029",
    year: 2029,
    notes: ["Traded from Dallas to Brooklyn.", "Brooklyn will receive the least favorable pick of Dallas's pick, Houston's pick, and Phoenix's pick.", "Houston will receive the two most favorable picks of their native pick, Dallas's pick, and Phoenix's pick."],
    swap: "negative",
  },{
    nativeTeam: "NYK",
    pickCode: "NYK-2029",
    year: 2029,
    notes: ["Traded from New York to Brooklyn."],
  },],
  "2030":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2030",
    year: 2030,
    notes: ["Brooklyn has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "BRK",
    pickCode: "BRK-2031",
    year: 2031,
    notes: ["Brooklyn has not yet traded this pick."],
  },{
    nativeTeam: "NYK",
    pickCode: "NYK-2031",
    year: 2031,
    notes: ["Traded from New York to Brooklyn."],
  }],
},
"CHI":{
  "2025":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2025",
    year: 2025,
    notes: ["Traded from Chicago to San Antonio to Chicago."],
  },{
    nativeTeam: "POR",
    pickCode: "POR-2025",
    year: 2025,
    notes: ["Traded from Portland to Chicago."],
  },],
  "2026":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2026",
    year: 2026,
    notes: ["Chicago has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2027",
    year: 2027,
    notes: ["Chicago has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2028",
    year: 2028,
    notes: ["Chicago has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2029",
    year: 2029,
    notes: ["Chicago has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2030",
    year: 2030,
    notes: ["Chicago has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "CHI",
    pickCode: "CHI-2031",
    year: 2031,
    notes: ["Chicago has not yet traded this pick."],
  }],
},
"CHO":{
  "2025":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2025",
    year: 2025,
    notes: ["Traded from Charlotte to New York to Atlanta to San Antonio to Sacramento.", "Unlikely to convey."],
  },],
  "2026":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2026",
    year: 2026,
    notes: ["Charlotte has not yet traded this pick."],
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2026",
    year: 2026,
    notes: ["Traded from Phoenix to Charlotte.", "Charlotte will receive the least valuable of Memphis's pick, Orlando's pick, and Phoenix's pick"],
    swap: "negative",
  },],
  "2027":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2027",
    year: 2027,
    notes: ["Charlotte has not yet traded this pick."],
  },{
    nativeTeam: "DAL",
    pickCode: "DAL-2027",
    year: 2027,
    notes: ["Traded from Dallas to Charlotte."],
  },{
    nativeTeam: "MIA",
    pickCode: "MIA-2027",
    year: 2027,
    notes: ["Traded from Miami to Charlotte."],
  },],
  "2028":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2028",
    year: 2028,
    notes: ["Charlotte has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2029",
    year: 2029,
    notes: ["Charlotte has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2030",
    year: 2030,
    notes: ["Charlotte has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "CHO",
    pickCode: "CHO-2031",
    year: 2031,
    notes: ["Charlotte has not yet traded this pick."],
  },],
},
"CLE":{
  "2025":[],
  "2026":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2026",
    year: 2026,
    notes: ["Cleveland will receive the least valuable of their native pick, Atlanta's pick, and San Antonio's pick."],
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2028",
    year: 2028,
    notes: ["Cleveland will receive the lesser of their native pick and Utah's pick."],
    swap: "negative",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2030",
    year: 2030,
    notes: ["Cleveland has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2031",
    year: 2031,
    notes: ["Cleveland has not yet traded this pick."],
  }],
},
"DAL":{
  "2025":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2025",
    year: 2025,
    notes: ["Dallas has not yet traded this pick."],
  },],
  "2026":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2026",
    year: 2026,
    notes: ["Dallas has not yet traded this pick."],
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2028",
    year: 2028,
    notes: ["Dallas will receive the lesser of their native pick and Oklahoma City's pick."],
    swap: "negative",
  },],
  "2029":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2029",
    year: 2029,
    notes: ["Traded from Los Angeles Lakers to Dallas."],
  },],
  "2030":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2030",
    year: 2030,
    notes: ["Dallas will receive the lesser of their native pick and San Antonio's pick."],
    swap: "negative",
  },],
  "2031":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2031",
    year: 2031,
    notes: ["Dallas has not yet traded this pick."],
  }],
},
"DEN":{
  "2025":[],
  "2026":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2026",
    year: 2026,
    notes: ["Denver has not yet traded this pick."],
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2028",
    year: 2028,
    notes: ["Denver has not yet traded this pick."],
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2030",
    year: 2030,
    notes: ["Denver has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "DEN",
    pickCode: "DEN-2031",
    year: 2031,
    notes: ["Denver has not yet traded this pick."],
  }],
},
"DET":{
  "2025":[],
  "2026":[{
    nativeTeam: "DET",
    pickCode: "DET-2026",
    year: 2026,
    notes: ["Detroit has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "DET",
    pickCode: "DET-2027",
    year: 2027,
    notes: ["Detroit has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "DET",
    pickCode: "DET-2028",
    year: 2028,
    notes: ["Detroit has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "DET",
    pickCode: "DET-2029",
    year: 2029,
    notes: ["Detroit has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "DET",
    pickCode: "DET-2030",
    year: 2030,
    notes: ["Detroit has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "DET",
    pickCode: "DET-2031",
    year: 2031,
    notes: ["Detroit has not yet traded this pick."],
  }],
},
"GSW":{
  "2025":[],
  "2026":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2026",
    year: 2026,
    notes: ["Golden State has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2027",
    year: 2027,
    notes: ["Golden State has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2028",
    year: 2028,
    notes: ["Golden State has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2029",
    year: 2029,
    notes: ["Golden State has not yet traded this pick."],
  },],
  "2030":[],
  "2031":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2031",
    year: 2031,
    notes: ["Golden State has not yet traded this pick."],
  }],
},
"HOU":{
  "2025":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2025",
    year: 2025,
    notes: ["Houston will receive the greater of Phoenix's pick and (the lesser of their native pick and (the greater of Oklahoma City's pick and Los Angeles Clippers' pick))."],
    swap: "neutral",
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2027",
    year: 2027,
    notes: ["Houston will receive the greater of their native pick and Brooklyn's pick."],
    swap: "positive",
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2027",
    year: 2027,
    notes: ["Traded from Phoenix to Brooklyn to Houston."],
  },],
  "2028":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2028",
    year: 2028,
    notes: ["Houston has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "DAL",
    pickCode: "DAL-2029",
    year: 2029,
    notes: ["Traded from Dallas to Brooklyn.", "Houston will receive the two most favorable picks of their native pick, Dallas's pick, and Phoenix's pick.", "Brooklyn will receive the least favorable pick of Dallas's pick, Houston's pick, and Phoenix's pick."],
    swap: "positive",
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2029",
    year: 2029,
    notes: ["Traded from Phoenix to Brooklyn.", "Houston will receive the two most favorable picks of their native pick, Dallas's pick, and Phoenix's pick.", "Brooklyn will receive the least favorable pick of Dallas's pick, Houston's pick, and Phoenix's pick."],
    swap: "positive",
  },],
  "2030":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2030",
    year: 2030,
    notes: ["Houston has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2031",
    year: 2031,
    notes: ["Houston has not yet traded this pick."],
  }],
},
"IND":{
  "2025":[{
    nativeTeam: "IND",
    pickCode: "IND-2025",
    year: 2025,
    notes: ["Indiana has not yet traded this pick."],
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "IND",
    pickCode: "IND-2027",
    year: 2027,
    notes: ["Indiana has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "IND",
    pickCode: "IND-2028",
    year: 2028,
    notes: ["Indiana has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "IND",
    pickCode: "IND-2029",
    year: 2029,
    notes: ["Indiana has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "IND",
    pickCode: "IND-2030",
    year: 2030,
    notes: ["Indiana has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "IND",
    pickCode: "IND-2031",
    year: 2031,
    notes: ["Indiana has not yet traded this pick."],
  }],
},
"LAC":{
  "2025":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2025",
    year: 2025,
    notes: ["Los Angeles Clippers will receive the lesser of their native pick and Oklahoma City's pick."],
    swap: "negative",
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2027",
    year: 2027,
    notes: ["Los Angeles Clippers will receive the least favorable of their native pick, Oklahoma City's pick, and Denver's pick."],
    swap: "negative",
  },],
  "2028":[],
  "2029":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2029",
    year: 2029,
    notes: ["Los Angeles Clippers will receive the lesser of their native pick and Philadelphia's pick."],
    swap: "negative",
  },],
  "2030":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2030",
    year: 2030,
    notes: ["Los Angeles has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "LAC",
    pickCode: "LAC-2031",
    year: 2031,
    notes: ["Los Angeles has not yet traded this pick."],
  }],
},
"LAL":{
  "2025":[],
  "2026":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2026",
    year: 2026,
    notes: ["Los Angeles has not yet traded this pick."],
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2028",
    year: 2028,
    notes: ["Los Angeles has not yet traded this pick."],
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2030",
    year: 2030,
    notes: ["Los Angeles has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "LAL",
    pickCode: "LAL-2031",
    year: 2031,
    notes: ["Los Angeles has not yet traded this pick."],
  }],
},
"MEM":{
  "2025":[],
  "2026":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2026",
    year: 2026,
    notes: ["Memphis will receive the greater of their native pick and (the lesser of Orlando's pick and Phoenix's pick)."],
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2027",
    year: 2027,
    notes: ["Memphis has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2028",
    year: 2028,
    notes: ["Memphis has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2029",
    year: 2029,
    notes: ["Memphis has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2030",
    year: 2030,
    notes: ["Memphis will receive the greater of their native pick and (the lesser of Phoenix's pick and Washington's pick)."],
    swap: "positive",
  },],
  "2031":[{
    nativeTeam: "MEM",
    pickCode: "MEM-2031",
    year: 2031,
    notes: ["Memphis has not yet traded this pick."],
  }],
},
"MIA":{
  "2025":[{
    nativeTeam: "GSW",
    pickCode: "GSW-2025",
    year: 2025,
    notes: ["Traded from Golden State to Miami."],
  },],
  "2026":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2026",
    year: 2026,
    notes: ["Miami has not yet traded this pick."],
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2028",
    year: 2028,
    notes: ["Miami has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2029",
    year: 2029,
    notes: ["Miami has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2030",
    year: 2030,
    notes: ["Miami has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "MIA",
    pickCode: "MIA-2031",
    year: 2031,
    notes: ["Miami has not yet traded this pick."],
  }],
},
"MIL":{
  "2025":[],
  "2026":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2026",
    year: 2026,
    notes: ["Milwaukee will receive the lesser of their native pick and New Orleans's pick."],
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2028",
    year: 2028,
    notes: ["Milwaukee will receive the lesser of (their native pick and Portland's pick) and (the greater of Washington's pick and (the lesser of Brooklyn's pick and Phoenix's pick))."],
    swap: "negative",
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2030",
    year: 2030,
    notes: ["Milwaukee will receive the lesser of their native pick and Portland's pick."],
    swap: "negative",
  },],
  "2031":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2031",
    year: 2031,
    notes: ["Milwaukee has not yet traded this pick."],
  }],
},
"MIN":{
  "2025":[{
    nativeTeam: "DET",
    pickCode: "DET-2025",
    year: 2025,
    notes: ["Traded from Detroit to Houston to Oklahoma City to New York to Minnesota."],
  },],
  "2026":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2026",
    year: 2026,
    notes: ["Minnesota will receive the lesser of their native pick and Utah's pick."],
    swap: "negative",
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2028",
    year: 2028,
    notes: ["Minnesota has not yet traded this pick."],
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "MIN",
    pickCode: "MIN-2030",
    year: 2030,
    notes: ["Minnesota will receive the lesser of their native pick and (the greater of San Antonio's pick and Dallas's pick)."],
    swap: "negative",
  },],
  "2031":[],
},
"NOP":{
  "2025":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2025",
    year: 2025,
    notes: ["New Orleans has not yet traded this pick."],
  },],
  "2026":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2026",
    year: 2026,
    notes: ["New Orleans will receive the greater of their native pick and Milwaukee's pick."],
    swap: "positive",
  },{
    nativeTeam: "IND",
    pickCode: "IND-2026",
    year: 2026,
    notes: ["Traded from Indiana to Toronto to New Orleans."],
  },],
  "2027":[{
    nativeTeam: "MIL",
    pickCode: "MIL-2027",
    year: 2027,
    swap: "positive",
    notes: ["Traded from Milwaukee to New Orleans.", "New Orleans will receive the greater of their native pick and Milwaukee's pick."],
  },],
  "2028":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2028",
    year: 2028,
    notes: ["New Orleans has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2029",
    year: 2029,
    notes: ["New Orleans has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2030",
    year: 2030,
    notes: ["New Orleans has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "NOP",
    pickCode: "NOP-2031",
    year: 2031,
    notes: ["New Orleans has not yet traded this pick."],
  }],
},
"NYK":{
  "2025":[],
  "2026":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2026",
    year: 2026,
    notes: ["New York has not yet traded this pick."],
  },{
    nativeTeam: "WAS",
    pickCode: "WAS-2026",
    year: 2026,
    notes: ["Traded from Washington to Houston to Oklahoma City to New York.", "If this pick falls into the protected range, swaps will be affected elsewhere in very complex ways."],
    //"Washington will receive the greater of their native pick and Phoenix's pick."
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2028",
    year: 2028,
    notes: ["New York will receive the less favorable of their native pick and (the greater of Brooklyn's pick and Phoenix's pick)."],
  },],
  "2029":[],
  "2030":[{
    nativeTeam: "NYK",
    pickCode: "NYK-2030",
    year: 2030,
    notes: ["New York has not yet traded this pick."],
  },],
  "2031":[],
},
"OKC":{
  "2025":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2025",
    year: 2025,
    notes: ["Oklahoma City will receive the greater of Houston's pick and (the greater of their native pick and Los Angeles Clippers' pick)."],
    swap: "positive",
  },{
    nativeTeam: "MIA",
    pickCode: "MIA-2025",
    year: 2025,
    notes: ["Traded from Miami to Oklahoma City."],
  },{
    nativeTeam: "PHI",
    pickCode: "PHI-2025",
    year: 2025,
    notes: ["Traded from Philadelphia to Oklahoma City."],
  },],
  "2026":[{
    nativeTeam: "HOU",
    pickCode: "HOU-2026",
    year: 2026,
    notes: ["Traded from Houston to Oklahoma City.", "Oklahoma City will receive the two most favorable of their native pick, Houston's pick, and Los Angeles Clippers' pick."],
    swap: "positive",
  },{
    nativeTeam: "LAC",
    pickCode: "LAC-2026",
    year: 2026,
    notes: ["Traded from Los Angeles Clippers to Oklahoma City.", "Oklahoma City will receive the two most favorable of their native pick, Houston's pick, and Los Angeles Clippers' pick."],
    swap: "positive",
  },{
    nativeTeam: "UTA",
    pickCode: "UTA-2026",
    year: 2026,
    notes: ["Traded from Utah to Oklahoma City", "If this pick falls into the protected range, swaps will be affected elsewhere in very complex ways."],
    //"Utah will receive the greater of Cleveland's pick and (the greater of their native pick and Minnesota's pick)."
  },],
  "2027":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2027",
    year: 2027,
    notes: ["Oklahoma City will receive the two most favorable picks of their native pick, Denver's pick, and Los Angeles Clipper's pick."],
    swap: "positive",
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2027",
    year: 2027,
    notes: ["Traded from Denver to Oklahoma City.", "Oklahoma City will receive the two most favorable picks of their native pick, Denver's pick, and Los Angeles Clipper's pick."],
    swap: "positive",
  },],
  "2028":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2028",
    year: 2028,
    notes: ["Oklahoma City will receive the greater of their native and Dallas's pick."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2029",
    year: 2029,
    notes: ["Oklahoma City has not yet traded this pick."],
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2029",
    year: 2029,
    notes: ["Traded from Denver to Oklahoma City."],
  },],
  "2030":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2030",
    year: 2030,
    notes: ["Oklahoma City has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2031",
    year: 2031,
    notes: ["Oklahoma City has not yet traded this pick."],
  }],
},
"ORL":{
  "2025":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2025",
    year: 2025,
    notes: ["Orlando has not yet traded this pick."],
  },{
    nativeTeam: "DEN",
    pickCode: "DEN-2025",
    year: 2025,
    notes: ["Traded from Denver to Orlando."],
  },],
  "2026":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2026",
    year: 2026,
    notes: ["Orlando will receive the greater of their native pick and Phoenix's pick."],
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2027",
    year: 2027,
    notes: ["Orlando has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2028",
    year: 2028,
    notes: ["Orlando has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2029",
    year: 2029,
    notes: ["Orlando has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2030",
    year: 2030,
    notes: ["Orlando has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "ORL",
    pickCode: "ORL-2031",
    year: 2031,
    notes: ["Orlando has not yet traded this pick."],
  }],
},
"PHI":{
  "2025":[],
  "2026":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2026",
    year: 2026,
    notes: ["Philadelphia has not yet traded this pick."],
  },],
  "2027":[],
  "2028":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2028",
    year: 2028,
    notes: ["Philadelphia has not yet traded this pick."],
  },{
    nativeTeam: "LAC",
    pickCode: "LAC-2028",
    year: 2028,
    notes: ["Traded from Los Angeles Clippers to Philadelphia."],
  },],
  "2029":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2029",
    year: 2029,
    notes: ["Philadelphia will receive the greater of their native pick and Los Angeles Clippers' pick."],
    swap: "positive",
  },],
  "2030":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2030",
    year: 2030,
    notes: ["Philadelphia has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "PHI",
    pickCode: "PHI-2031",
    year: 2031,
    notes: ["Philadelphia has not yet traded this pick."],
  }],
},
"PHO":{
  "2025":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2025",
    year: 2025,
    notes: ["Traded from Cleveland to Utah to Phoenix."],
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2027",
    year: 2027,
    notes: ["Traded from Utah to Phoenix", "Phoenix will receive the least valuable of Utah's pick, Cleveland's pick, and Minnesota's pick."],
    swap: "negative",
  },],
  "2028":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2028",
    year: 2028,
    notes: ["Phoenix will receive the lesser of Washington's pick and (the lesser of their native pick and Brooklyn's pick)."],
    swap: "negative",
  },],
  "2029":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2029",
    year: 2029,
    notes: ["Traded from Utah to Phoenix", "Phoenix will receive the least valuable of Utah's pick, Cleveland's pick, and Minnesota's pick."],
    swap: "negative",
  },],
  "2030":[{
    nativeTeam: "PHO",
    pickCode: "PHO-2030",
    year: 2030,
    notes: ["Phoenix will receive the lesser of Memphis's pick and (the lesser of their native pick and Washington's pick)."],
    swap: "negative",
  },],
  "2031":[],
},
"POR":{
  "2025":[],
  "2026":[{
    nativeTeam: "POR",
    pickCode: "POR-2026",
    year: 2026,
    notes: ["Portland has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "POR",
    pickCode: "POR-2027",
    year: 2027,
    notes: ["Portland has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "POR",
    pickCode: "POR-2028",
    year: 2028,
    notes: ["Portland will receive the greater of their native pick and Milwaukee's pick."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "BOS",
    pickCode: "BOS-2029",
    year: 2029,
    notes: ["Traded from Boston to Portland."],
  },{
    nativeTeam: "MIL",
    pickCode: "MIL-2029",
    year: 2029,
    notes: ["Traded from Milwaukee to Portland."],
  },],
  "2030":[{
    nativeTeam: "POR",
    pickCode: "POR-2030",
    year: 2030,
    notes: ["Portland will receive the greater of their native pick and Milwaukee's pick."],
    swap: "positive",
  },],
  "2031":[{
    nativeTeam: "POR",
    pickCode: "POR-2031",
    year: 2031,
    notes: ["Portland has not yet traded this pick."],
  }],
},
"SAC":{
  "2025":[],
  "2026":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2026",
    year: 2026,
    notes: ["Sacramento has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2027",
    year: 2027,
    notes: ["Sacramento has not yet traded this pick."],
  },{
    nativeTeam: "SAS",
    pickCode: "SAS-2027",
    year: 2027,
    notes: ["Traded from San Antonio to Sacramento."],
  },],
  "2028":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2028",
    year: 2028,
    notes: ["Sacramento has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2029",
    year: 2029,
    notes: ["Sacramento has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2030",
    year: 2030,
    notes: ["Sacramento has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "SAC",
    pickCode: "SAC-2031",
    year: 2031,
    swap: "negative",
    notes: ["Sacramento will receive the lesser of their native pick and San Antonio's pick."],
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2031",
    year: 2031,
    notes: ["Traded from Minnesota to San Antonio to Sacramento."],
  }],
},
"SAS":{
  "2025":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2025",
    year: 2025,
    notes: ["San Antonio has not yet traded this pick."],
  },{
    nativeTeam: "ATL",
    pickCode: "ATL-2025",
    year: 2025,
    notes: ["Traded from Atlanta to San Antonio."],
  },],
  "2026":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2026",
    year: 2026,
    notes: ["San Antonio will receive the greater of their native pick and Atlanta's pick."],
    swap: "positive",
  },],
  "2027":[{
    nativeTeam: "ATL",
    pickCode: "ATL-2027",
    year: 2027,
    notes: ["Traded from Atlanta to San Antonio."],
  },],
  "2028":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2028",
    year: 2028,
    notes: ["San Antonio will receive the greater of their native pick and Boston's pick."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2029",
    year: 2029,
    notes: ["San Antonio has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2030",
    year: 2030,
    notes: ["San Antonio will receive the greater of Minnesota's pick and (the greater of their native pick and Dallas's pick)."],
    swap: "positive",
  },],
  "2031":[{
    nativeTeam: "SAS",
    pickCode: "SAS-2031",
    year: 2031,
    swap: "positive",
    notes: ["San Antonio will receive the greater of their native pick and Sacramento's pick."],
  },],
},
"TOR":{
  "2025":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2025",
    year: 2025,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2026":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2026",
    year: 2026,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2027":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2027",
    year: 2027,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2028",
    year: 2028,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2029":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2029",
    year: 2029,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2030":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2030",
    year: 2030,
    notes: ["Toronto has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "TOR",
    pickCode: "TOR-2031",
    year: 2031,
    notes: ["Toronto has not yet traded this pick."],
  }],
},
"UTA":{
  "2025":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2025",
    year: 2025,
    notes: ["Traded from Utah to Oklahoma City.", "Unlikely to convey in 2025."],
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2025",
    year: 2025,
    notes: ["Traded from Minnesota to Utah."],
  },],
  "2026":[],
  "2027":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2027",
    year: 2027,
    notes: ["Traded from Cleveland to Utah."],
  },{
    nativeTeam: "LAL",
    pickCode: "LAL-2027",
    year: 2027,
    notes: ["Traded from Los Angeles Lakers to Utah."],
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2027",
    year: 2027,
    notes: ["Traded from Minnesota to Utah."],
  },],
  "2028":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2028",
    year: 2028,
    notes: ["Utah will receive the greater of their native pick and Cleveland's pick."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "CLE",
    pickCode: "CLE-2029",
    year: 2029,
    notes: ["Traded from Cleveland to Utah."],
  },{
    nativeTeam: "MIN",
    pickCode: "MIN-2029",
    year: 2029,
    notes: ["Traded from Minnesota to Utah."],
  },],
  "2030":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2030",
    year: 2030,
    notes: ["Utah has not yet traded this pick."],
  },],
  "2031":[{
    nativeTeam: "UTA",
    pickCode: "UTA-2031",
    year: 2031,
    notes: ["Utah has not yet traded this pick."],
  },{
    nativeTeam: "PHO",
    pickCode: "PHO-2031",
    year: 2031,
    notes: ["Traded from Phoenix to Utah."],
  }],
},
"WAS":{
  "2025":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2025",
    year: 2025,
    notes: ["Traded from Washington to Houston to Oklahoma City to New York.", "Unlikely to convey in 2025."],
  },{
    nativeTeam: "MEM",
    pickCode: "MEM-2025",
    year: 2025,
    notes: ["Traded from Memphis to Washington."],
  },],
  "2026":[{
    nativeTeam: "OKC",
    pickCode: "OKC-2026",
    year: 2026,
    notes: ["Traded from Oklahoma City to Philadelphia to Washington.", "Washington will receive the least favorable of Houston's pick, Los Angeles Clippers' pick, and Oklahoma City's pick."],
    swap: "negative",
  },],
  "2027":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2027",
    year: 2027,
    notes: ["Washington has not yet traded this pick."],
  },],
  "2028":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2028",
    year: 2028,
    notes: ["Washington will receive the most valuable of their native pick, (the lesser of Brooklyn's pick and Phoenix's pick), and (the lesser of Milwaukee's pick and Portland's pick)."],
    swap: "positive",
  },],
  "2029":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2029",
    year: 2029,
    notes: ["Washington has not yet traded this pick."],
  },{
    nativeTeam: "POR",
    pickCode: "POR-2029",
    year: 2029,
    swap: "neutral",
    notes: ["Traded from Portland to Washington.", "Washington will receive the second-most favorable of Boston's pick, Milwaukee's pick, and Portland's pick."],
  },],
  "2030":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2030",
    year: 2030,
    notes: ["Washington will receive the greater of their native pick and Phoenix's pick."],
    swap: "positive",
  },{
    nativeTeam: "GSW",
    pickCode: "GSW-2030",
    year: 2030,
    notes: ["Traded from Golden State to Washington."],
  },],
  "2031":[{
    nativeTeam: "WAS",
    pickCode: "WAS-2031",
    year: 2031,
    notes: ["Washington has not yet traded this pick."],
  }],
},
};