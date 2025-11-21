import type {RaceLocation25Type, DriverCode25Type, ConstructorName25Type } from "~/data/F1/2025/F1data";

type DACType = {
  driver: DriverCode25Type;
  constructor: ConstructorName25Type;
}

export type F1RaceType = {
  location: RaceLocation25Type,
  finalOrder: DACType[],
  DNFs: DACType[],
  sprint: boolean,
  completed: boolean,
  DQs?: DACType[],
  fastestLap?: DACType,
  polePosition?: DACType,
};

export const FormulaOneRaceResults : F1RaceType[] = [
  {
    location: "Australia",
    finalOrder: [
      { driver: "NOR", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "TSU", constructor: "RB" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "BEA", constructor: "Haas" },
    ],
    DNFs: [
      { driver: "LAW", constructor: "Red Bull" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "DOO", constructor: "Alpine" },
      { driver: "HAD", constructor: "RB" },
    ],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "China",
    finalOrder: [
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "TSU", constructor: "RB" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "HAD", constructor: "RB" },
      { driver: "LAW", constructor: "Red Bull" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "DOO", constructor: "Alpine" },
    ],
    DNFs: [],
    polePosition: {
      driver: "HAM",
      constructor: "Ferrari"
    },
    sprint: true,
    completed: true,
  },
  {
    location: "China",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "HAD", constructor: "RB" },
      { driver: "LAW", constructor: "Red Bull" },
      { driver: "DOO", constructor: "Alpine" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "TSU", constructor: "RB" },

    ],
    DNFs: [
      { driver: "ALO", constructor: "Aston Martin" },
    ],
    DQs: [
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "GAS", constructor: "Alpine" },
    ],
    polePosition: {
      driver: "PIA",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Japan",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "HAD", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "DOO", constructor: "Alpine" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "LAW", constructor: "RB" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
    ],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Bahrain",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "HAD", constructor: "RB" },
      { driver: "DOO", constructor: "Alpine" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "LAW", constructor: "RB" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "BOR", constructor: "Sauber" },
    ],
    DNFs: [
      { driver: "SAI", constructor: "Williams" },
      { driver: "HUL", constructor: "Sauber" },
    ],
    polePosition: {
      driver: "PIA",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Saudi Arabia",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "HAD", constructor: "RB" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "LAW", constructor: "RB" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "DOO", constructor: "Alpine" },
    ],
    DNFs: [
      { driver: "BOR", constructor: "Sauber" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "GAS", constructor: "Alpine" },
    ],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },
    {
    location: "Miami",
    finalOrder: [
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "HAD", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "LAW", constructor: "RB" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "DOO", constructor: "Alpine" },
      { driver: "VER", constructor: "Red Bull" },
    ],
    DNFs: [
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "LEC", constructor: "Ferrari" },
    ],
    polePosition: {
      driver: "ANT",
      constructor: "Mercedes"
    },
    sprint: true,
    completed: true,
  },
  {
    location: "Miami",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "HAD", constructor: "RB" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
    ],
    DNFs: [
      { driver: "LAW", constructor: "RB" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "DOO", constructor: "Alpine" },
    ],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Imola",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "HAD", constructor: "RB" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "LAW", constructor: "RB" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "BOR", constructor: "Sauber" },
    ],
    DNFs: [
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "OCO", constructor: "Haas" },
    ],
    polePosition: {
      driver: "PIA",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Monaco",
    finalOrder: [
      { driver: "NOR", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "HAD", constructor: "RB" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "LAW", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "ANT", constructor: "Mercedes" },
    ],
    DNFs: [
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "GAS", constructor: "Alpine" },
    ],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Spain",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "HAD", constructor: "RB" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "LAW", constructor: "RB" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "BEA", constructor: "Haas" },
    ],
    DNFs: [
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "ALB", constructor: "Williams" },
    ],
    polePosition: {
      driver: "PIA",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Canada",
    finalOrder: [
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "HAD", constructor: "RB" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "NOR", constructor: "McLaren" },
    ],
    DNFs: [
      { driver: "LAW", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
    ],
    polePosition: {
      driver: "RUS",
      constructor: "Mercedes"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Austria",
    finalOrder: [
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "LAW", constructor: "RB" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "HAD", constructor: "RB" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "TSU", constructor: "Red Bull" },
      { driver: "ALB", constructor: "Williams" },
    ],
    DNFs: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "SAI", constructor: "Williams" },
    ],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Great Britain",
    finalOrder: [
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "TSU", constructor: "Red Bull" },
    ],
    DNFs: [
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "HAD", constructor: "RB" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "LAW", constructor: "RB" },
      { driver: "COL", constructor: "Alpine" },
    ],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },
    {
    location: "Belgium",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Belgium",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Hungary",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Netherlands",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Monza",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Azerbaijan",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Singapore",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
    {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Mexico",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
    {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Las Vegas",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
    {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Abu Dhabi",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "NOR",
      constructor: "McLaren"
    },
    sprint: false,
    completed: false,
  },
]

export type RaceResultsType = typeof FormulaOneRaceResults;

/*
{
    location: "Bahrain",
    finalOrder: [
      
    ],
    DNFs: [],
    fastestLap: {
      driver: "VER",
      constructor: "Red Bull"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
*/

/*
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Sauber" },
      { driver: "BOR", constructor: "Sauber" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "LAW", constructor: "RB" },
      { driver: "HAD", constructor: "RB" },
      { driver: "TSU", constructor: "Red Bull" },
*/