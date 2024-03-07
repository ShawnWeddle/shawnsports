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
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Australia",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Japan",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "China",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "China",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Miami",
    finalOrder: [],
    DNFs: [],
    sprint: true,
    completed: false,
  },
  {
    location: "Miami",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Imola",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Monaco",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
  },
  {
    location: "Canada",
    finalOrder: [],
    DNFs: [],
    fastestLap: "VER",
    polePosition: "VER",
    sprint: false,
    completed: false,
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