import type {RaceLocation24Type, DriverCode24Type } from "~/data/F1/2024/F1data24";

export type F1RaceType = {
  location: RaceLocation24Type,
  finalOrder: DriverCode24Type[],
  DNFs: DriverCode24Type[],
  sprint: boolean,
  completed: boolean,
  DQs?: DriverCode24Type[],
  fastestLap?: DriverCode24Type,
  polePosition?: DriverCode24Type,
};

export const FormulaOneRaceResults : F1RaceType[] = [
  {
    location: "Bahrain",
    finalOrder: [
      "VER", "PER", "SAI", "LEC", "RUS", "NOR", "HAM", "PIA", "ALO", "STR", "ZHO", "MAG", "RIC", "TSU", "ALB", "HUL", "OCO", "GAS", "BOT", "SAR",
    ],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Saudi Arabia",
    finalOrder: [
      "VER", "PER", "LEC", "PIA", "ALO", "RUS", "BEA", "NOR", "HAM", "HUL", "ALB", "MAG", "OCO", "TSU", "SAR", "RIC", "BOT", "ZHO",
    ],
    DNFs: [
      "STR", "GAS",
    ],
    fastestLap: "LEC",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Australia",
    finalOrder: [
      "SAI", "LEC", "NOR", "PIA", "PER", "STR", "TSU", "ALO", "HUL", "MAG", "ALB", "RIC", "GAS", "BOT", "ZHO", "OCO", "RUS",
    ],
    DNFs: [
      "HAM", "VER", 
    ],
    fastestLap: "LEC",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Japan",
    finalOrder: [
      "VER", "PER", "SAI", "LEC", "NOR", "ALO", "RUS", "PIA", "HAM", "TSU", "HUL", "STR", "MAG", "BOT", "OCO", "GAS", "SAR",
    ],
    DNFs: [
      "ZHO", "RIC", "ALB",
    ],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "China",
    finalOrder: [
      "VER", "HAM", "PER", "LEC", "SAI", "NOR", "PIA", "RUS", "ZHO", "MAG", "RIC", "BOT", "OCO", "STR", "GAS", "TSU", "ALB", "SAR", "HUL",
    ],
    DNFs: [
      "ALO",
    ],
    sprint: true,
    completed: true,
  },
  {
    location: "China",
    finalOrder: [
      "VER", "NOR", "PER", "LEC", "SAI", "RUS", "ALO", "PIA", "HAM", "HUL", "OCO", "ALB", "GAS", "ZHO", "STR", "MAG", "SAR",
    ],
    DNFs: [
      "RIC", "TSU", "BOT",
    ],
    fastestLap: "ALO",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Miami",
    finalOrder: [
      "VER", "LEC", "PER", "RIC", "SAI", "PIA", "HUL", "TSU", "GAS", "SAR", "ZHO", "RUS", "ALB", "BOT", "OCO", "HAM", "ALO", "MAG",
    ],
    DNFs: [
      "STR", "NOR",
    ],
    sprint: true,
    completed: true,
  },
  {
    location: "Miami",
    finalOrder: [
      "NOR", "VER", "LEC", "PER", "SAI", "HAM", "TSU", "RUS", "ALO", "OCO", "HUL", "GAS", "PIA", "ZHO", "RIC", "BOT", "STR", "ALB", "MAG",
    ],
    DNFs: [
      "SAR",
    ],
    fastestLap: "PIA",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Imola",
    finalOrder: [
      "VER", "NOR", "LEC", "PIA", "SAI", "HAM", "RUS", "PER", "STR", "TSU", "HUL", "MAG", "RIC", "OCO", "ZHO", "GAS", "SAR", "BOT", "ALO",
    ],
    DNFs: [
      "ALB",
    ],
    fastestLap: "RUS",
    polePosition: "VER",
    sprint: false,
    completed: true,
  },
  {
    location: "Monaco",
    finalOrder: [
      "LEC", "PIA", "SAI", "NOR", "RUS", "VER", "HAM", "TSU", "ALB", "GAS", "ALO", "RIC", "BOT", "STR", "SAR", "ZHO", 
    ],
    DNFs: [
      "OCO", "PER", "HUL", "MAG", 
    ],
    fastestLap: "HAM",
    polePosition: "LEC",
    sprint: false,
    completed: true, 
  },
  {
    location: "Canada",
    finalOrder: [
      "VER", "NOR", "RUS", "HAM", "PIA", "ALO", "STR", "RIC", "GAS", "OCO", "HUL", "MAG", "BOT", "TSU", "ZHO", "SAI", "ALB", "PER", "LEC", "SAR",
    ],
    DNFs: [],
    fastestLap: "HAM",
    polePosition: "RUS",
    sprint: false,
    completed: true,
  },
  {
    location: "Spain",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Austria",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "Austria",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Great Britain",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Hungary",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Belgium",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Netherlands",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Monza",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Azerbaijan",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Singapore",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Mexico",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Las Vegas",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Abu Dhabi",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
]

export type RaceResultsType = typeof FormulaOneRaceResults;

/* 

  {
    location: ,
    finalOrder: [],
    DNFs: [],
    fastestLap: ,
    polePosition: ,
    sprint: false,
    completed: false,
  },
  
  */