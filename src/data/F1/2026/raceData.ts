import type {RaceLocation26Type, DriverCode26Type, ConstructorName26Type } from "~/data/F1/2026/F1data";

type DACType = {
  driver: DriverCode26Type;
  constructor: ConstructorName26Type;
}

export type F1RaceType = {
  location: RaceLocation26Type,
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
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "LIN", constructor: "RB" },
      { driver: "BOR", constructor: "Audi" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "LAW", constructor: "RB" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "PER", constructor: "Cadillac" },
    ],
    DNFs: [
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "BOT", constructor: "Cadillac" },
      { driver: "HAD", constructor: "Red Bull" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HUL", constructor: "Audi" },
    ],
    polePosition: {
      driver: "RUS",
      constructor: "Mercedes"
    },
    sprint: false,
    completed: true,
  },
    {
    location: "China",
    finalOrder: [
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "LAW", constructor: "RB" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "BOR", constructor: "Audi" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "HAD", constructor: "Red Bull" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "PER", constructor: "Cadillac" },
    ],
    DNFs: [
      { driver: "HUL", constructor: "Audi" },
      { driver: "BOT", constructor: "Cadillac" },
      { driver: "LIN", constructor: "RB" },
    ],
    polePosition: {
      driver: "RUS",
      constructor: "Mercedes"
    },
    sprint: true,
    completed: true,
  },
  {
    location: "China",
    finalOrder: [
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "BEA", constructor: "Haas" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "LAW", constructor: "RB" },
      { driver: "HAD", constructor: "Red Bull" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "HUL", constructor: "Audi" },
      { driver: "LIN", constructor: "RB" },
      { driver: "BOT", constructor: "Cadillac" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "PER", constructor: "Cadillac" },
    ],
    DNFs: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "BOR", constructor: "Audi" },
      { driver: "ALB", constructor: "Williams" },
    ],
    polePosition: {
      driver: "ANT",
      constructor: "Mercedes"
    },
    sprint: false,
    completed: true,
  },
  {
    location: "Japan",
    finalOrder: [
      { driver: "ANT", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "HAM", constructor: "Ferrari" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "LAW", constructor: "RB" },
      { driver: "OCO", constructor: "Haas" },
      { driver: "HUL", constructor: "Audi" },
      { driver: "HAD", constructor: "Red Bull" },
      { driver: "BOR", constructor: "Audi" },
      { driver: "LIN", constructor: "RB" },
      { driver: "SAI", constructor: "Williams" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "PER", constructor: "Cadillac" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "BOT", constructor: "Cadillac" },
      { driver: "ALB", constructor: "Williams" },
    ],
    DNFs: [
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "BEA", constructor: "Haas" },
    ],
    polePosition: {
      driver: "ANT",
      constructor: "Mercedes"
    },
    sprint: false,
    completed: true,
  },
    {
    location: "Miami",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Miami",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Canada",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Monaco",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Barcelona",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Austria",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Austria",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Great Britain",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Belgium",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Hungary",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Netherlands",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Monza",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Madrid",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Azerbaijan",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Singapore",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Austin",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Mexico",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Brazil",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Las Vegas",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: true,
    completed: false,
  },
  {
    location: "Qatar",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },
  {
    location: "Abu Dhabi",
    finalOrder: [],
    DNFs: [],
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: false,
  },

]

export type RaceResultsType = typeof FormulaOneRaceResults;

/*
  {
    location: "",
    finalOrder: [],
    DNFs: [],
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
      { driver: "HAD", constructor: "Red Bull" },
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
      { driver: "HUL", constructor: "Audi" },
      { driver: "BOR", constructor: "Audi" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "COL", constructor: "Alpine" },
      { driver: "LAW", constructor: "RB" },
      { driver: "LIN", constructor: "RB" },
      { driver: "BOT", constructor: "Cadillac" },
      { driver: "PER", constructor: "Cadillac" },
*/