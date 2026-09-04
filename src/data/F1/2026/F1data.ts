export const constructorNames2026 = [
  "Alpine",
  "Aston Martin",
  "Audi",
  "Cadillac",
  "Haas",
  "Ferrari",
  "McLaren",
  "Mercedes",
  "RB",
  "Red Bull",
  "Williams",
] as const;

export const driverCodes2026 = [
  "ALB", "ALO", "ANT", "BEA", "BOR", "BOT", 
  "COL", "GAS", "HAD", "HAM", "HUL", "LAW", 
  "LEC", "LIN", "NOR", "OCO", "PER", 
  "PIA", "RUS", "SAI", "STR", "VER", "TSU"
] as const;

export const raceLocations2026 = [
  "Australia",
  "China",
  "Japan",
  "Miami",
  "Canada",
  "Monaco",
  "Barcelona",
  "Austria",
  "Great Britain",
  "Belgium",
  "Hungary",
  "Netherlands",
  "Monza",
  "Madrid",
  "Azerbaijan",
  "Bahrain / Malaysia",
  "Singapore",
  "Austin",
  "Mexico",
  "Brazil",
  "Las Vegas",
  "Qatar",
  "Abu Dhabi",
] as const;
//  ,
//"Saudi Arabia",

export const raceCountryCodes: { [Key in RaceLocation26Type] : string} = {
  "Abu Dhabi": "AE",
  Austin: "US",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Barcelona: "ES",
  "Bahrain / Malaysia": "BH",
  Belgium: "BE",
  Brazil: "BR",
  Canada: "CA",
  China: "CN",
  "Great Britain": "GB",
  Hungary: "HU",
  Japan: "JP",
  "Las Vegas": "US",
  Madrid: "ES",
  Mexico: "MX",
  Miami: "US",
  Monaco: "MC",
  Monza: "IT",
  Netherlands: "NL",
  Qatar: "QA",
  Singapore: "SG",
}

export const raceCoordinates: {
    [Key in RaceLocation26Type]?: {
        coordinates: {
            latitude: number;
            longitude: number;
        };
        circuitName: string;
        raceDate: string;
        sprintDate?: string;
    };
} = {
  "Australia": {
    coordinates: {
      latitude: -37.850,
      longitude: 144.969,
    },
    circuitName: "Albert Park Ciruit",
    raceDate: "March 8",
  },
  "China": {
    coordinates: {
      latitude: 31.337,
      longitude: 121.220,
    },
    circuitName: "Shanghai International Circuit",
    raceDate: "March 15",
    sprintDate: "March 14",
  },
  "Japan": {
    coordinates: {
      latitude: 34.844,
      longitude: 136.540,
    },
    circuitName: "Suzuka Circuit",
    raceDate: "March 29",
  },
  "Miami": {
    coordinates: {
      latitude: 25.959,
      longitude: -80.238,
    },
    circuitName: "Miami Internation Autodrome",
    raceDate: "May 3",
    sprintDate: "May 2",
  },
  "Canada": {
    coordinates: {
      latitude: 45.501,
      longitude: -73.523,
    },
    circuitName: "Circuit Gilles Villeneuve",
    raceDate: "May 24",
    sprintDate: "May 23",
  },
  "Monaco": {
    coordinates: {
      latitude: 43.734,
      longitude: 7.422,
    },
    circuitName: "Circuit de Monaco",
    raceDate: "June 7",
  },
  "Barcelona": {
    coordinates: {
      latitude: 41.570,
      longitude: 2.261,
    },
    circuitName: "Circuit de Barcelona-Catalunya",
    raceDate: "June 14",
  },
  "Austria": {
    coordinates: {
      latitude: 47.220,
      longitude: 14.765,
    },
    circuitName: "Red Bull Ring",
    raceDate: "June 28",
  },
  "Great Britain": {
    coordinates: {
      latitude: 52.069,
      longitude: -1.022,
    },
    circuitName: "Silverstone Circuit",
    raceDate: "July 5",
    sprintDate: "July 4",
  },
  "Belgium": {
    coordinates: {
      latitude: 50.444,
      longitude: 5.966,
    },
    circuitName: "Circuit de Spa-Francorchamps",
    raceDate: "July 19",
  },
  "Hungary": {
    coordinates: {
      latitude: 47.580,
      longitude: 19.247,
    },
    circuitName: "Hungaroring",
    raceDate: "July 26",
  },
  "Netherlands": {
    coordinates: {
      latitude: 52.389,
      longitude: 4.541,
    },
    circuitName: "Circuit Zandvoort",
    raceDate: "August 23",
    sprintDate: "August 22",
  },
  "Monza": {
    coordinates: {
      latitude: 45.618,
      longitude: 9.281,
    },
    circuitName: "Monza Circuit",
    raceDate: "September 6",
  },
  "Madrid": {
    coordinates: {
      latitude: 40.465,
      longitude: -3.617,
    },
    circuitName: "Madring",
    raceDate: "September 13",
  },
  "Azerbaijan": {
    coordinates: {
      latitude: 40.373,
      longitude: 49.853,
    },
    circuitName: "Baku City Circuit",
    raceDate: "September 26",
  },
  "Bahrain / Malaysia": {
    coordinates: {
      latitude: 2.761,
      longitude: 101.737,
    },
    circuitName: "Sepang Circuit (Malaysia)",
    raceDate: "October 4",
  },
  "Singapore": {
    coordinates: {
      latitude: 1.291,
      longitude: 103.864,
    },
    circuitName: "Marina Bay Street Circuit",
    raceDate: "October 11",
    sprintDate: "October 10",
  },
  "Austin": {
    coordinates: {
      latitude: 30.132,
      longitude: -97.641,
    },
    circuitName: "Circuit of the Americas",
    raceDate: "October 25",
  },
  "Mexico": {
    coordinates: {
      latitude: 19.406,
      longitude: -99.094,
    },
    circuitName: "Autódromo Hermanos Rodríguez",
    raceDate: "November 1",
  },
  "Brazil": {
    coordinates: {
      latitude: -23.705,
      longitude: -46.700,
    },
    circuitName: "Interlagos Circuit",
    raceDate: "November 8",
  },
  "Las Vegas": {
    coordinates: {
      latitude: 36.110,
      longitude: -115.162,
    },
    circuitName: "Las Vegas Strip Circuit",
    raceDate: "November 21",
  },
  "Qatar": {
    coordinates: {
      latitude: 25.488,
      longitude: 51.450,
    },
    circuitName: "Lusail International Circuit",
    raceDate: "November 29",
  },
  "Abu Dhabi": {
    coordinates: {
      latitude: 24.477,
      longitude: 54.606,
    },
    circuitName: "Yas Marina Circuit",
    raceDate: "December 6",
  },
};

export type DriverCode26Type = typeof driverCodes2026[number];
export type ConstructorName26Type = typeof constructorNames2026[number];
export type RaceLocation26Type = typeof raceLocations2026[number];

export const driverToConstructor2026 = (driver: DriverCode26Type ) : ConstructorName26Type => {
  switch(driver){
    case "COL":
    case "GAS":
      return "Alpine";
    case "ALO":
    case "STR":
      return "Aston Martin";
    case "BOR":
    case "HUL":
      return "Audi";
    case "BOT":
    case "PER":
      return "Cadillac";
    case "LEC":
    case "HAM":
      return "Ferrari";
    case "BEA":
    case "OCO":
      return "Haas";
    case "NOR":
    case "PIA":
      return "McLaren";
    case "ANT":
    case "RUS":
      return "Mercedes";
    case "LAW":
    case "LIN":
    case "TSU":
      return "RB";
    case "HAD":
    case "VER":
      return "Red Bull";
    case "ALB":
    case "SAI":
      return "Williams";
  }
}

export const driverNames2026: { [Key in DriverCode26Type] : { first: string, last: string}} = {
  ALB : { first: "Alex", last: "Albon"},
  ALO : { first: "Fernando", last: "Alonso"},
  ANT : { first: "Kimi", last: "Antonelli"},
  BEA : { first: "Oliver", last: "Bearman"},
  BOR : { first: "Gabriel", last: "Bortoleto"},
  BOT : { first: "Valterri", last: "Bottas"},
  COL : { first: "Franco", last: "Colapinto"},
  GAS : { first: "Pierre", last: "Gasly"},
  HAD : { first: "Isack", last: "Hadjar"},
  HAM : { first: "Lewis", last: "Hamilton"},
  HUL : { first: "Nico", last: "Hulkenberg"},
  LAW : { first: "Liam", last: "Lawson"},
  LEC : { first: "Charles", last: "Leclerc"},
  LIN : { first: "Arvid", last: "Linblad"},
  NOR : { first: "Lando", last: "Norris"},
  OCO : { first: "Esteban", last: "Ocon"},
  PER : { first: "Sergio", last: "Perez"},
  PIA : { first: "Oscar", last: "Piastri"},
  RUS : { first: "George", last: "Russell"},
  SAI : { first: "Carlos", last: "Sainz"},
  STR : { first: "Lance", last: "Stroll"},
  TSU : { first: "Yuki", last: "Tsunoda"},
  VER : { first: "Max", last: "Verstappen"},
}

export const driverTcamColors2026: { [Key in DriverCode26Type] : "Black" | "Yellow" | "Cyan"} = {
  ALB : "Black",
  ALO : "Yellow",
  ANT : "Yellow",
  BEA : "Yellow",
  BOR : "Yellow",
  BOT : "Yellow",
  COL : "Yellow",
  GAS : "Black",
  HAD : "Yellow",
  HAM : "Yellow",
  HUL : "Black",
  LAW : "Yellow",
  LEC : "Black",
  LIN : "Black",
  NOR : "Yellow",
  OCO : "Black",
  PER : "Black",
  PIA : "Black",
  RUS : "Black",
  SAI : "Yellow",
  STR : "Black",
  TSU : "Cyan",
  VER : "Black",
}

export const driverTeammates: { [Key in DriverCode26Type] : DriverCode26Type} = {
  ALB : "SAI",
  ALO : "STR",
  ANT : "RUS",
  BEA : "OCO",
  BOR : "HUL",
  BOT : "PER",
  COL : "GAS",
  GAS : "COL",
  HAD : "VER",
  HAM : "LEC",
  HUL : "BOR",
  LAW : "LIN",
  LEC : "HAM",
  LIN : "LAW",
  NOR : "PIA",
  OCO : "BEA",
  PER : "BOT",
  PIA : "NOR",
  RUS : "ANT",
  SAI : "ALB",
  STR : "ALO",
  TSU : "TSU",
  VER : "HAD",
}

export const allToConstructor2026 = (driver: DriverCode26Type | ConstructorName26Type ) : ConstructorName26Type => {
  switch(driver){
    case "COL":
    case "GAS":
    case "Alpine":
      return "Alpine";
    case "LAW":
    case "LIN":
    case "TSU":
    case "RB":
      return "RB";
    case "BOR":
    case "HUL":
    case "Audi":
      return "Audi";
    case "ALO":
    case "STR":
    case "Aston Martin":
      return "Aston Martin";
    case "LEC":
    case "HAM":
    case "Ferrari":
      return "Ferrari";
    case "BEA":
    case "OCO":
    case "Haas":
      return "Haas";
    case "NOR":
    case "PIA":
    case "McLaren":
      return "McLaren";
    case "ANT":
    case "RUS":
    case "Mercedes":
      return "Mercedes";
    case "HAD":
    case "VER":
    case "Red Bull":
      return "Red Bull";
    case "ALB":
    case "SAI":
    case "Williams":
      return "Williams";
    default:
      return "Williams";
  }
}

export const calculatePoints = (place: number, sprint: boolean) => {
  if(sprint) {
    const sprintPointsArray = [8, 7, 6, 5, 4, 3, 2, 1];
      const points = sprintPointsArray[place];
      if (points){
        return points;
      } else {
        return 0;
      }
  } else {
    const grandPrixPointsArray = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
      const points = grandPrixPointsArray[place];
      if (points){
        return points;
      } else {
        return 0;
      }
  }
}

export const beatTeammate = (driver: DriverCode26Type, teammates: DriverCode26Type[], results: DriverCode26Type[]) : boolean | undefined => {
  const driverFinish = results.indexOf(driver);

  if(driverFinish === -1) return undefined;

  const teammate1 = teammates[0];
  const teammate2 = teammates[1];

  let returnValue: boolean | undefined = undefined;

  if(teammate1){
    const teammateFinish = results.indexOf(teammate1);

    if(teammateFinish !== -1){
      returnValue = driverFinish < teammateFinish;
    }
  }

  if(teammate2){
    const teammateFinish = results.indexOf(teammate2);

    if(teammateFinish !== -1){
      returnValue = driverFinish < teammateFinish;
    }
  }

  return returnValue;
}

export interface RaceModeProps {
  raceMode: RaceModeType;
}

export type RaceModeType = "Both Grands Prix and Sprint Races" | "Grands Prix Only" | "Sprint Races Only";

export const nullArray20 = [
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
]