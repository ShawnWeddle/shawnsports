import type {RaceLocation24Type, DriverCode24Type, ConstructorName24Type } from "~/data/F1/2024/F1data24";

type DACType = {
  driver: DriverCode24Type;
  constructor: ConstructorName24Type;
}

export type F1RaceType = {
  location: RaceLocation24Type,
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
    location: "Bahrain",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "RIC", constructor: "RB" },
      { driver: "TSU", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "SAR", constructor: "Williams" },
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
    completed: true,
  },{
    location: "Saudi Arabia",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "BEA", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "TSU", constructor: "RB" },
      { driver: "SAR", constructor: "Williams" },
      { driver: "RIC", constructor: "RB" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "ZHO", constructor: "Sauber" },
    ],
    DNFs: [
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "GAS", constructor: "Alpine" },
    ],
    fastestLap: {
      driver: "LEC",
      constructor: "Ferrari"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "Australia",
    finalOrder: [
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "TSU", constructor: "RB" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "RIC", constructor: "RB" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "RUS", constructor: "Mercedes" },
    ],
    DNFs: [
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "VER", constructor: "Red Bull" },
    ],
    fastestLap: {
      driver: "LEC",
      constructor: "Ferrari"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "Japan",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "TSU", constructor: "RB" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "SAR", constructor: "Williams" }
    ],
    DNFs: [
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "RIC", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" }
    ],
    fastestLap: {
      driver: "VER",
      constructor: "Red Bull"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "China",
    finalOrder: [
        { driver: "VER", constructor: "Red Bull" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "ZHO", constructor: "Sauber" },
        { driver: "MAG", constructor: "Haas" },
        { driver: "RIC", constructor: "RB" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "TSU", constructor: "RB" },
        { driver: "ALB", constructor: "Williams" },
        { driver: "SAR", constructor: "Williams" },
        { driver: "HUL", constructor: "Haas" }
    ],
    DNFs: [
        { driver: "ALO", constructor: "Aston Martin" }
    ],
    sprint: true,
    completed: true,
},{
    location: "China",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "SAR", constructor: "Williams" }
    ],
    DNFs: [
      { driver: "RIC", constructor: "RB" },
      { driver: "TSU", constructor: "RB" },
      { driver: "BOT", constructor: "Sauber" }
    ],
    fastestLap: {
      driver: "ALO",
      constructor: "Aston Martin"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "Miami",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "RIC", constructor: "RB" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "TSU", constructor: "RB" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "SAR", constructor: "Williams" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "MAG", constructor: "Haas" }
    ],
    DNFs: [
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "NOR", constructor: "McLaren" }
    ],
    sprint: true,
    completed: true,
  },{
    location: "Miami",
    finalOrder: [
      { driver: "NOR", constructor: "McLaren" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "TSU", constructor: "RB" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "RIC", constructor: "RB" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "MAG", constructor: "Haas" }
    ],
    DNFs: [
      { driver: "SAR", constructor: "Williams" }
    ],
    fastestLap: {
      driver: "PIA",
      constructor: "McLaren"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "Imola",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "TSU", constructor: "RB" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "RIC", constructor: "RB" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "SAR", constructor: "Williams" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "ALO", constructor: "Aston Martin" }
    ],
    DNFs: [
      { driver: "ALB", constructor: "Williams" }
    ],
    fastestLap: {
      driver: "RUS",
      constructor: "Mercedes"
    },
    polePosition: {
      driver: "VER",
      constructor: "Red Bull"
    },
    sprint: false,
    completed: true,
  },{
    location: "Monaco",
    finalOrder: [
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "VER", constructor: "Red Bull" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "TSU", constructor: "RB" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "RIC", constructor: "RB" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "SAR", constructor: "Williams" },
      { driver: "ZHO", constructor: "Sauber" }
    ],
    DNFs: [
      { driver: "OCO", constructor: "Alpine" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "MAG", constructor: "Haas" }
    ],
    fastestLap: {
      driver: "HAM",
      constructor: "Mercedes"
    },
    polePosition: {
      driver: "LEC",
      constructor: "Ferrari"
    },
    sprint: false,
    completed: true,
  },{
    location: "Canada",
    finalOrder: [
      { driver: "VER", constructor: "Red Bull" },
      { driver: "NOR", constructor: "McLaren" },
      { driver: "RUS", constructor: "Mercedes" },
      { driver: "HAM", constructor: "Mercedes" },
      { driver: "PIA", constructor: "McLaren" },
      { driver: "ALO", constructor: "Aston Martin" },
      { driver: "STR", constructor: "Aston Martin" },
      { driver: "RIC", constructor: "RB" },
      { driver: "GAS", constructor: "Alpine" },
      { driver: "OCO", constructor: "Alpine" },
      { driver: "HUL", constructor: "Haas" },
      { driver: "MAG", constructor: "Haas" },
      { driver: "BOT", constructor: "Sauber" },
      { driver: "TSU", constructor: "RB" },
      { driver: "ZHO", constructor: "Sauber" },
      { driver: "SAI", constructor: "Ferrari" },
      { driver: "ALB", constructor: "Williams" },
      { driver: "PER", constructor: "Red Bull" },
      { driver: "LEC", constructor: "Ferrari" },
      { driver: "SAR", constructor: "Williams" }
    ],
    DNFs: [],
    fastestLap: {
      driver: "HAM",
      constructor: "Mercedes"
    },
    polePosition: {
      driver: "RUS",
      constructor: "Mercedes"
    },
    sprint: false,
    completed: true,
  },{
      location: "Spain",
      finalOrder: [
          { driver: "VER", constructor: "Red Bull" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "ZHO", constructor: "Sauber" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "RIC", constructor: "RB" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "TSU", constructor: "RB" },
          { driver: "SAR", constructor: "Williams" }
      ],
      DNFs: [],
      fastestLap: {
          driver: "NOR",
          constructor: "McLaren"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true,
  },{
      location: "Austria",
      finalOrder: [
          { driver: "VER", constructor: "Red Bull" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "TSU", constructor: "RB" },
          { driver: "RIC", constructor: "RB" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "ZHO", constructor: "Sauber" }
      ],
      DNFs: [],
      sprint: true,
      completed: true,
  },{
      location: "Austria",
      finalOrder: [
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "RIC", constructor: "RB" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "TSU", constructor: "RB" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "ZHO", constructor: "Sauber" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "NOR", constructor: "McLaren" }
      ],
      DNFs: [],
      fastestLap: {
          driver: "ALO",
          constructor: "Aston Martin"
      },
      polePosition: {
          driver: "VER",
          constructor: "Red Bull"
      },
      sprint: false,
      completed: true,
  },{
      location: "Great Britain",
      finalOrder: [
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "TSU", constructor: "RB" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "RIC", constructor: "RB" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "ZHO", constructor: "Sauber" }
      ],
      DNFs: [
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "GAS", constructor: "Alpine" }
      ],
      fastestLap: {
          driver: "SAI",
          constructor: "Ferrari"
      },
      polePosition: {
          driver: "RUS",
          constructor: "Mercedes"
      },
      sprint: false,
      completed: true,
  },{
      location: "Hungary",
      finalOrder: [
          { driver: "PIA", constructor: "McLaren" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "TSU", constructor: "RB" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "RIC", constructor: "RB" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "ZHO", constructor: "Sauber" }
      ],
      DNFs: [
          { driver: "GAS", constructor: "Alpine" }
      ],
      fastestLap: {
          driver: "RUS",
          constructor: "Mercedes"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true,
  },{
      location: "Belgium",
      finalOrder: [
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "RIC", constructor: "RB" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "TSU", constructor: "RB" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "HUL", constructor: "Haas" }
      ],
      DNFs: [
          { driver: "ZHO", constructor: "Sauber" }
      ],
      "DQs": [
        { driver: "RUS", constructor: "Mercedes" }
      ],
      fastestLap: {
          driver: "PER",
          constructor: "Red Bull"
      },
      polePosition: {
          driver: "LEC",
          constructor: "Ferrari"
      },
      sprint: false,
      completed: true,
  },{
      location: "Netherlands",
      finalOrder: [
          { driver: "NOR", constructor: "McLaren" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "RIC", constructor: "RB" },
          { driver: "STR", constructor: "Aston Martin" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "SAR", constructor: "Williams" },
          { driver: "TSU", constructor: "RB" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "ZHO", constructor: "Sauber" }
      ],
      DNFs: [],
      fastestLap: {
          driver: "NOR",
          constructor: "McLaren"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true,
  },{
      location: "Monza",
      finalOrder: [
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "PIA", constructor: "McLaren" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "MAG", constructor: "Haas" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "COL", constructor: "Williams" },
          { driver: "RIC", constructor: "RB" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "ZHO", constructor: "Sauber" },
          { driver: "STR", constructor: "Aston Martin" }
      ],
      DNFs: [
          { driver: "TSU", constructor: "RB" }
      ],
      fastestLap: {
          driver: "NOR",
          constructor: "McLaren"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true,
  },{
      location: "Azerbaijan",
      finalOrder: [
          { driver: "PIA", constructor: "McLaren" },
          { driver: "LEC", constructor: "Ferrari" },
          { driver: "RUS", constructor: "Mercedes" },
          { driver: "NOR", constructor: "McLaren" },
          { driver: "VER", constructor: "Red Bull" },
          { driver: "ALO", constructor: "Aston Martin" },
          { driver: "ALB", constructor: "Williams" },
          { driver: "COL", constructor: "Williams" },
          { driver: "HAM", constructor: "Mercedes" },
          { driver: "BEA", constructor: "Haas" },
          { driver: "HUL", constructor: "Haas" },
          { driver: "GAS", constructor: "Alpine" },
          { driver: "RIC", constructor: "RB" },
          { driver: "ZHO", constructor: "Sauber" },
          { driver: "OCO", constructor: "Alpine" },
          { driver: "BOT", constructor: "Sauber" },
          { driver: "PER", constructor: "Red Bull" },
          { driver: "SAI", constructor: "Ferrari" },
          { driver: "STR", constructor: "Aston Martin" }
      ],
      DNFs: [
          { driver: "TSU", constructor: "RB" }
      ],
      fastestLap: {
          driver: "NOR",
          constructor: "McLaren"
      },
      polePosition: {
          driver: "LEC",
          constructor: "Ferrari"
      },
      sprint: false,
      completed: true,
  },{
      location: "Singapore",
      finalOrder: [
        { driver: "NOR", constructor: "McLaren" },
        { driver: "VER", constructor: "Red Bull" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "HUL", constructor: "Haas" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "COL", constructor: "Williams" },
        { driver: "TSU", constructor: "RB" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "ZHO", constructor: "Sauber" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "RIC", constructor: "RB" },
        { driver: "MAG", constructor: "Haas" },
      ],
      DNFs: [
        { driver: "ALB", constructor: "Williams" },
      ],
      fastestLap: {
          driver: "RIC",
          constructor: "RB"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true,
  },{
      location: "Austin",
      finalOrder: [
        { driver: "VER", constructor: "Red Bull" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "MAG", constructor: "Haas" },
        { driver: "HUL", constructor: "Haas" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "TSU", constructor: "RB" },
        { driver: "COL", constructor: "Williams" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "LAW", constructor: "RB" },
        { driver: "ALB", constructor: "Williams" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "ZHO", constructor: "Sauber" },
      ],
      DNFs: [],
      sprint: true,
      completed: true
  },{
      location: "Austin",
      finalOrder: [
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "VER", constructor: "Red Bull" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "HUL", constructor: "Haas" },
        { driver: "LAW", constructor: "RB" },
        { driver: "COL", constructor: "Williams" },
        { driver: "MAG", constructor: "Haas" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "TSU", constructor: "RB" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "ALB", constructor: "Williams" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "ZHO", constructor: "Sauber" },
      ],
      DNFs: [
        { driver: "HAM", constructor: "Mercedes" },
      ],
      fastestLap: {
          driver: "OCO",
          constructor: "Alpine"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true
  },{
      location: "Mexico",
      finalOrder: [
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "VER", constructor: "Red Bull" },
        { driver: "MAG", constructor: "Haas" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "HUL", constructor: "Haas" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "COL", constructor: "Williams" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "ZHO", constructor: "Sauber" },
        { driver: "LAW", constructor: "RB" },
        { driver: "PER", constructor: "Red Bull" },
      ],
      DNFs: [
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "ALB", constructor: "Williams" },
        { driver: "TSU", constructor: "RB" },
        
      ],
      fastestLap: {
          driver: "LEC",
          constructor: "Ferrari"
      },
      polePosition: {
          driver: "SAI",
          constructor: "Ferrari"
      },
      sprint: false,
      completed: true
  },{
      location: "Brazil",
      finalOrder: [
        { driver: "NOR", constructor: "McLaren" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "VER", constructor: "Red Bull" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "LAW", constructor: "RB" },
        { driver: "ALB", constructor: "Williams" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "COL", constructor: "Williams" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "BEA", constructor: "Haas" },
        { driver: "TSU", constructor: "RB" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "ZHO", constructor: "Sauber" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "STR", constructor: "Aston Martin" },
      ],
      DNFs: [
        { driver: "HUL", constructor: "Haas" },
      ],
      sprint: true,
      completed: true
  },{
      location: "Brazil",
      finalOrder: [
        { driver: "VER", constructor: "Red Bull" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "GAS", constructor: "Alpine" },
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "TSU", constructor: "RB" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "LAW", constructor: "RB" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "BEA", constructor: "Haas" },
        { driver: "BOT", constructor: "Sauber" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "ZHO", constructor: "Sauber" },
      ],
      DNFs: [
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "COL", constructor: "Williams" },
      ],
      DQs: [
        { driver: "HUL", constructor: "Haas" },
      ],
      fastestLap: {
          driver: "VER",
          constructor: "Red Bull"
      },
      polePosition: {
          driver: "NOR",
          constructor: "McLaren"
      },
      sprint: false,
      completed: true
  },{
      location: "Las Vegas",
      finalOrder: [
        { driver: "RUS", constructor: "Mercedes" },
        { driver: "HAM", constructor: "Mercedes" },
        { driver: "SAI", constructor: "Ferrari" },
        { driver: "LEC", constructor: "Ferrari" },
        { driver: "VER", constructor: "Red Bull" },
        { driver: "NOR", constructor: "McLaren" },
        { driver: "PIA", constructor: "McLaren" },
        { driver: "HUL", constructor: "Haas" },
        { driver: "TSU", constructor: "RB" },
        { driver: "PER", constructor: "Red Bull" },
        { driver: "ALO", constructor: "Aston Martin" },
        { driver: "MAG", constructor: "Haas" },
        { driver: "ZHO", constructor: "Sauber" },
        { driver: "COL", constructor: "Williams" },
        { driver: "STR", constructor: "Aston Martin" },
        { driver: "LAW", constructor: "RB" },
        { driver: "OCO", constructor: "Alpine" },
        { driver: "BOT", constructor: "Sauber" },
      ],
      DNFs: [
        { driver: "ALB", constructor: "Williams" },
        { driver: "GAS", constructor: "Alpine" },
      ],
      fastestLap: {
          driver: "NOR",
          constructor: "McLaren"
      },
      polePosition: {
          driver: "RUS",
          constructor: "Mercedes"
      },
      sprint: false,
      completed: true
  },{
      location: "Qatar",
      finalOrder: [],
      DNFs: [],
      sprint: true,
      completed: false
  },{
      location: "Qatar",
      finalOrder: [],
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
      completed: false
  },{
      location: "Abu Dhabi",
      finalOrder: [],
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
      completed: false
  }
]

export type RaceResultsType = typeof FormulaOneRaceResults;