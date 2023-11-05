import type {RaceLocationType, DriverCodeType } from "~/data/F1/F1data";

export const FormulaOneRaceResults : {
  location: RaceLocationType,
  finalOrder: DriverCodeType[],
  DNFs: DriverCodeType[],
  sprint: boolean,
  DQs?: DriverCodeType[],
  fastestLap?: DriverCodeType,
  polePosition?: DriverCodeType,

} [] = [
  {
    location: "Bahrain",
    finalOrder: [
      "VER", "PER", "ALO", "SAI", "HAM", "STR", "RUS", "BOT", "GAS", "ALB", "TSU", "SAR", "MAG", "DEV", "HUL", "ZHO", "NOR",
    ],
    DNFs: [
      "OCO", "LEC", "PIA",
    ],
    fastestLap: "ZHO",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Saudi Arabia",
    finalOrder: [
      "PER", "VER", "ALO", "RUS", "HAM", "SAI", "LEC", "OCO", "GAS", "MAG", "TSU", "HUL", "ZHO", "DEV", "PIA", "SAR", "NOR", "BOT",
    ],
    DNFs: [
      "ALB", "STR"
    ],
    fastestLap: "VER",
    polePosition: "PER",
    sprint: false,
  },
  {
    location: "Australia",
    finalOrder: [
      "VER", "HAM", "ALO", "STR", "PER", "NOR", "HUL", "PIA", "ZHO", "TSU", "BOT", "SAI", "GAS", "OCO", "DEV", "SAR", "MAG",
    ],
    DNFs: [
      "RUS", "ALB", "LEC",
    ],
    fastestLap: "PER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Azerbaijan",
    finalOrder: [
      "PER", "LEC", "VER", "RUS", "SAI", "ALO", "HAM", "STR", "ALB", "PIA", "MAG", "ZHO", "GAS", "DEV", "HUL", "BOT", "NOR", "OCO",
    ],
    DNFs: [
      "TSU",
    ],
    sprint: true,
  },
  {
    location: "Azerbaijan",
    finalOrder: [
      "PER", "VER", "LEC", "ALO", "SAI", "HAM", "STR", "RUS", "NOR", "TSU", "PIA", "ALB", "MAG", "GAS", "OCO", "SAR", "HUL", "BOT",
    ],
    DNFs: [
      "ZHO", "DEV",
    ],
    fastestLap: "RUS",
    polePosition: "LEC",
    sprint: false,
  },
  {
    location: "Miami",
    finalOrder: [
      "VER", "PER", "ALO", "RUS", "SAI", "HAM", "LEC", "GAS", "OCO", "MAG", "TSU", "STR", "BOT", "ALB", "HUL", "ZHO", "NOR", "DEV", "PIA", "SAR",
    ],
    DNFs: [
      
    ],
    fastestLap: "VER",
    polePosition: "PER",
    sprint: false,
  },
  {
    location: "Monaco",
    finalOrder: [
      "VER", "ALO", "OCO", "HAM", "RUS", "LEC", "GAS", "SAI", "NOR", "PIA", "BOT", "DEV", "ZHO", "ALB", "TSU", "PER", "HUL", "SAR", "MAG",
    ],
    DNFs: [
      "STR"
    ],
    fastestLap: "HAM",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Spain",
    finalOrder: [
      "VER", "HAM", 'RUS', "PER", "SAI", "STR", "ALO", "OCO", "ZHO", "GAS", "LEC", "TSU", "PIA", "DEV", "HUL", "ALB", "NOR", "MAG", "BOT", "SAR",
    ],
    DNFs: [
      
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Canada",
    finalOrder: [
      "VER", "ALO", "HAM", "LEC", "SAI", "PER", "ALB", "OCO", "STR", "BOT", "PIA", "GAS", "NOR", "TSU", "HUL", "ZHO", "MAG", "DEV",
    ],
    DNFs: [
      "RUS", "SAR",
    ],
    fastestLap: "PER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Austria",
    finalOrder: [
      "VER", "PER", "SAI", "STR", "ALO", "HUL", "OCO", "RUS", "NOR", "HAM", "PIA", "LEC", "ALB", "MAG", "GAS", "TSU", "DEV", "SAR", "ZHO", "BOT",
    ],
    DNFs: [
      
    ],
    sprint: true,
  },
  {
    location: "Austria",
    finalOrder: [
      "VER", "LEC", "PER", "NOR", "ALO", "SAI", "RUS", "HAM", "STR", "GAS", "ALB", "ZHO", "SAR", "OCO", "BOT", "PIA", "DEV", "MAG", "TSU",
    ],
    DNFs: [
      "HUL",
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Great Britain",
    finalOrder: [
      "VER", "NOR", "HAM", "PIA", "RUS", "PER", "ALO", "ALB", "LEC", "SAI", "SAR", "BOT", "HUL", "STR", "ZHO", "TSU", "DEV", "GAS",
    ],
    DNFs: [
      "MAG", "OCO",
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Hungary",
    finalOrder: [
      "VER", "NOR", "PER", "HAM", "PIA", "RUS", "LEC", "SAI", "ALO", "STR", "ALB", "BOT", "RIC", "HUL", "TSU", "ZHO", "MAG", "SAR",
    ],
    DNFs: [
      "OCO", "GAS",
    ],
    fastestLap: "VER",
    polePosition: "HAM",
    sprint: false,
  },
  {
    location: "Belgium",
    finalOrder: [
      "VER", "PIA", "GAS", "SAI", "LEC", "NOR", "HAM", "RUS", "OCO", "RIC", "STR", "ALB", "BOT", "MAG", "ZHO", "SAR", "HUL", "TSU",
    ],
    DNFs: [
      "PER", "ALO",
    ],
    sprint: true,
  },
  {
    location: "Belgium",
    finalOrder: [
      "VER", "PER", "LEC", "HAM", "ALO", "RUS", "NOR", "OCO", "STR", "TSU", "GAS", "BOT", "ZHO", "ALB", "MAG", "RIC", "SAR", "HUL",
    ],
    DNFs: [
      "SAI", "PIA",
    ],
    fastestLap: "HAM",
    polePosition: "LEC",
    sprint: false,
  },
  {
    location: "Netherlands",
    finalOrder: [
      "VER", "ALO", "GAS", "PER", "SAI", "HAM", "NOR", "ALB", "PIA", "OCO", "STR", "HUL", "LAW", "BOT", "TSU", "MAG", "RUS",
    ],
    DNFs: [
      "ZHO", "LEC", "SAR"
    ],
    fastestLap: "ALO",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Italy",
    finalOrder: [
      "VER", "PER", "SAI", "LEC", "RUS", "HAM", "ALB", "NOR", "ALO", "BOT", "LAW", "PIA", "SAR", "ZHO", "GAS", "STR", "HUL", "MAG",
    ],
    DNFs: [
      "OCO", "TSU"
    ],
    fastestLap: "PIA",
    polePosition: "SAI",
    sprint: false,
  },
  {
    location: "Singapore",
    finalOrder: [
      "SAI", "NOR", "HAM", "LEC", "VER", "GAS", "PIA", "PER", "LAW", "MAG", "ALB", "ZHO", "HUL", "SAR", "ALO", "RUS",
    ],
    DNFs: [
      "BOT", "OCO", "TSU",
    ],
    fastestLap: "HAM",
    polePosition: "SAI",
    sprint: false,
  },
  {
    location: "Japan",
    finalOrder: [
      "VER", "NOR", "PIA", "LEC", "HAM", "SAI", "RUS", "ALO", "OCO", "GAS", "LAW", "TSU", "ZHO", "HUL", "MAG",
    ],
    DNFs: [
      "ALB", "SAR", "STR", "PER", "BOT",
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Qatar",
    finalOrder: [
      "PIA", "VER", "NOR", "RUS", "HAM", "SAI", "ALB", "ALO", "GAS", "BOT", "TSU", "LEC", "MAG", "ZHO", "STR",
    ],
    DNFs: [
      "HUL", "OCO", "PER", "SAR", "LAW",
    ],
    sprint: true,
  },
  {
    location: "Qatar",
    finalOrder: [
      "VER", "PIA", "NOR", "RUS", "LEC", 'ALO', "OCO", "BOT", "ZHO", "PER", "STR", "GAS", "ALB", "MAG", "TSU", "HUL", "LAW"
    ],
    DNFs: [
      "SAR", "HAM",
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
  },
  {
    location: "Austin",
    finalOrder: [
      "VER", "HAM", "LEC", "NOR", "PER", "SAI", "GAS", "RUS", "ALB", "PIA", "OCO", "RIC", "ALO", "TSU", "HUL", "BOT", "ZHO", "MAG", "SAR",
    ],
    DNFs: [
      "STR",
    ],
    sprint: true,
  },
  {
    location: "Austin",
    finalOrder: [
     "VER", "NOR", "SAI", "PER", "RUS", "GAS", "STR", "TSU", "ALB", "SAR", "HUL", "BOT", "ZHO", "MAG", "RIC" 
    ],
    DNFs: [
      "ALO", "PIA", "OCO", 
    ],
    DQs: [
      "HAM", "LEC",
    ],
    fastestLap: "TSU",
    polePosition: "LEC",
    sprint: false,
  },
  {
    location: "Mexico",
    finalOrder: [
      "VER", "HAM", "LEC", "SAI", "NOR", "RUS", "RIC", "PIA", "ALB", "OCO", "GAS", "TSU", "HUL", "ZHO", "BOT", "SAR", "STR",
    ],
    DNFs: [
      "ALO", "MAG", "PER",
    ],
    fastestLap: "HAM",
    polePosition: "LEC",
    sprint: false,
  },
  {
    location: "Brazil",
    finalOrder: [
      "VER", "NOR", "PER", "RUS", "LEC", "TSU", "HAM", "SAI", "RIC", "PIA", "ALO", "STR", "GAS", "OCO", "ALB", "MAG", "HUL", "ZHO", "BOT", "SAR",
    ],
    DNFs: [
      
    ],
    sprint: true,
  },
]

export type RaceResultsType = typeof FormulaOneRaceResults;

/* 

  {
    location: ,
    finalOrder: [
      
    ],
    DNFs: [
      
    ],
    fastestLap: ,
    polePosition: ,
    sprint: false,
  },
  
  */