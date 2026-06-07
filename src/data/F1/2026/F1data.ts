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
  "PIA", "RUS", "SAI", "STR", "VER", 
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
  "Singapore",
  "Austin",
  "Mexico",
  "Brazil",
  "Las Vegas",
  "Qatar",
  "Abu Dhabi",
] as const;
//  "Bahrain",
//"Saudi Arabia",

export const raceCountryCodes: { [Key in RaceLocation26Type] : string} = {
  "Abu Dhabi": "AE",
  Austin: "US",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Barcelona: "ES",
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
  VER : { first: "Max", last: "Verstappen"},
}

// export const driverTcamColors2026: { [Key in DriverCode26Type] : "Black" | "Yellow" | "Cyan"} = {
//   ALB: "Black", ALO: "Yellow", BOT: "Black", GAS: "Yellow", HAM: "Yellow", 
//   HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", OCO: "Black", 
//   PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black", SAI: "Yellow", 
//   SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", ZHO: "Yellow", 
//   BEA: "Cyan", COL: "Cyan", LAW: "Cyan", DOO: "Cyan",
// }

export const allToConstructor2026 = (driver: DriverCode26Type | ConstructorName26Type ) : ConstructorName26Type => {
  switch(driver){
    case "COL":
    case "GAS":
    case "Alpine":
      return "Alpine";
    case "LAW":
    case "LIN":
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