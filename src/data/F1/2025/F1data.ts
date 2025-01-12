export const constructorNames2025 = [
  "Alpine",
  "Aston Martin",
  "Haas",
  "Ferrari",
  "McLaren",
  "Mercedes",
  "RB",
  "Red Bull",
  "Sauber",
  "Williams",
] as const;

export const driverCodes2025 = [
  "ALB", "ALO", "ANT", "BEA", "BOR",
  "DOO", "GAS", "HAD", "HAM", "HUL", 
  "LAW", "LEC", "NOR", "OCO", "PIA", 
  "RUS", "SAI", "STR", "TSU", "VER", 
] as const;

export const raceLocations2025 = [
  "Bahrain",
  "Saudi Arabia",
  "Australia",
  "Japan",
  "China",
  "Miami",
  "Imola",
  "Monaco",
  "Canada",
  "Spain",
  "Austria",
  "Great Britain",
  "Hungary",
  "Belgium",
  "Netherlands",
  "Monza",
  "Azerbaijan",
  "Singapore",
  "Austin",
  "Mexico",
  "Brazil",
  "Las Vegas",
  "Qatar",
  "Abu Dhabi",
] as const;

export const raceCountryCodes: { [Key in RaceLocation24Type] : string} = {
  Bahrain: "BH",
  "Saudi Arabia": "SA",
  Australia: "AU",
  Japan: "JP",
  China: "CN",
  Miami: "US",
  Imola: "IT",
  Monaco: "MC",
  Canada: "CA",
  Spain: "ES",
  Austria: "AT",
  "Great Britain": "GB",
  Hungary: "HU",
  Belgium: "BE",
  Netherlands: "NL",
  Monza: "IT",
  Azerbaijan: "AZ",
  Singapore: "SG",
  Austin: "US",
  Mexico: "MX",
  Brazil: "BR",
  "Las Vegas": "US",
  Qatar: "QA",
  "Abu Dhabi": "AE",
}
export type DriverCode24Type = typeof driverCodes2025[number];
export type ConstructorName24Type = typeof constructorNames2025[number];
export type RaceLocation24Type = typeof raceLocations2025[number];

export const driverToConstructor2025 = (driver: DriverCode24Type ) : ConstructorName24Type => {
  switch(driver){
    case "DOO":
    case "GAS":
      return "Alpine";
    case "ALO":
    case "STR":
      return "Aston Martin";
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
    case "HAD":
    case "TSU":
      return "RB";
    case "LAW":
    case "VER":
      return "Red Bull";
    case "BOR":
    case "HUL":
      return "Sauber";
    case "ALB":
    case "SAI":
      return "Williams";
  }
}

// export const allToConstructor2025 = (input: DriverCode24Type | ConstructorName24Type ) : ConstructorName24Type => {
//   switch(input){
//     case "DOO":
//     case "GAS":
//     case "OCO":
//     case "Alpine":
//       return "Alpine";
//     case "ALO":
//     case "STR":
//     case "Aston Martin":
//       return "Aston Martin";
//     case "BEA":
//     case "LEC":
//     case "SAI":
//     case "Ferrari":
//       return "Ferrari";
//     case "HUL":
//     case "MAG":
//     case "Haas":
//       return "Haas";
//     case "NOR":
//     case "PIA":
//     case "McLaren":
//       return "McLaren";
//     case "HAM":
//     case "RUS":
//     case "Mercedes":
//       return "Mercedes";
//     case "LAW":
//     case "RIC":
//     case "TSU":
//     case "RB":
//       return "RB";
//     case "PER":
//     case "VER":
//     case "Red Bull":
//       return "Red Bull";
//     case "BOT":
//     case "ZHO":
//     case "Sauber":
//       return "Sauber";
//     case "ALB":
//     case "COL":
//     case "SAR":
//     case "Williams":
//       return "Williams";
//     default:
//       return "Williams";
//   }
// }

// export const constructorToDrivers2025 = (constructor: ConstructorName24Type) : DriverCode24Type[] => {
//   switch(constructor){

//     case "Alpine":
//       return ["DOO", "GAS", "OCO"];
//     case "Aston Martin":
//       return ["ALO", "STR"];
//     case "Ferrari":
//       return ["BEA", "LEC", "SAI"];
//     case "Haas":
//       return ["BEA", "HUL", "MAG"];
//     case "McLaren":
//       return ["NOR", "PIA"];
//     case "Mercedes":
//       return ["HAM", "RUS"];
//     case "RB":
//       return ["LAW", "RIC", "TSU"];
//     case "Red Bull":
//       return ["PER", "VER"];
//     case "Sauber":
//       return ["BOT", "ZHO"];
//     case "Williams":
//       return ["ALB", "COL", "SAR"];
//   }

// }

export const driverNames2025: { [Key in DriverCode24Type] : { first: string, last: string}} = {
  ALB : { first: "Alex", last: "Albon"},
  ALO : { first: "Fernando", last: "Alonso"},
  ANT : { first: "Kimi", last: "Antonelli"},
  BEA : { first: "Oliver", last: "Bearman"},
  BOR : { first: "Gabriel", last: "Bortoleto"},
  DOO : { first: "Jack", last: "Doohan"},
  GAS : { first: "Pierre", last: "Gasly"},
  HAD : { first: "Isack", last: "Hadjar"},
  HAM : { first: "Lewis", last: "Hamilton"},
  HUL : { first: "Nico", last: "Hulkenberg"},
  LAW : { first: "Liam", last: "Lawson"},
  LEC : { first: "Charles", last: "Leclerc"},
  NOR : { first: "Lando", last: "Norris"},
  OCO : { first: "Esteban", last: "Ocon"},
  PIA : { first: "Oscar", last: "Piastri"},
  RUS : { first: "George", last: "Russell"},
  SAI : { first: "Carlos", last: "Sainz"},
  STR : { first: "Lance", last: "Stroll"},
  TSU : { first: "Yuki", last: "Tsunoda"},
  VER : { first: "Max", last: "Verstappen"},
}

// export const driverTcamColors2025: { [Key in DriverCode24Type] : "Black" | "Yellow" | "Cyan"} = {
//   ALB: "Black", ALO: "Yellow", BOT: "Black", GAS: "Yellow", HAM: "Yellow", 
//   HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", OCO: "Black", 
//   PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black", SAI: "Yellow", 
//   SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", ZHO: "Yellow", 
//   BEA: "Cyan", COL: "Cyan", LAW: "Cyan", DOO: "Cyan",
// }

export const calculatePoints = (place: number, sprint: boolean, fastestLap: boolean) => {
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
      let points = grandPrixPointsArray[place];
      if (points){
        if(fastestLap){
          points += 1;
        }
        return points;
      } else {
        return 0;
      }
  }
}

export const beatTeammate = (driver: DriverCode24Type, teammates: DriverCode24Type[], results: DriverCode24Type[]) : boolean | undefined => {
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