export const constructorNames = [
  "Alfa Romeo",
  "AlphaTauri",
  "Alpine",
  "Aston Martin",
  "Haas",
  "Ferrari",
  "McLaren",
  "Mercedes",
  "Red Bull",
  "Williams",
] as const;

export const driverCodes = [
  "ALB", "ALO", "BOT", "DEV", "GAS",
  "HAM", "HUL", "LEC", "MAG", "NOR", 
  "OCO", "PER", "PIA", "RIC", "RUS", "SAI",
  "SAR", "STR", "TSU", "VER", "ZHO", 
] as const;

export const raceLocations = [
  "Bahrain",
  "Saudi Arabia",
  "Australia",
  "Azerbaijan",
  "Miami",
  "Monaco",
  "Spain",
  "Canada",
  "Austria",
  "Great Britain",
  "Hungary",
  "Belgium",
  "Netherlands",
  "Italy",
  "Singapore",
  "Japan",
  "Qatar",
  "Austin",
  "Mexico",
  "Brazil",
  "Las Vegas",
  "Abu Dhabi",
] as const;

export type DriverCodeType = typeof driverCodes[number];
export type ConstructorNameType = typeof constructorNames[number];
export type RaceLocationType = typeof raceLocations[number];

export const driverToConstructor = (driver: DriverCodeType | ConstructorNameType ) : ConstructorNameType => {
  switch(driver){
    case "GAS":
    case "OCO":
    case "Alpine":
      return "Alpine";
    case "DEV":
    case 'RIC':
    case "TSU":
    case "AlphaTauri":
      return "AlphaTauri";
    case "BOT":
    case "ZHO":
    case "Alfa Romeo":
      return "Alfa Romeo";
    case "ALO":
    case "STR":
    case "Aston Martin":
      return "Aston Martin";
    case "LEC":
    case "SAI":
    case "Ferrari":
      return "Ferrari";
    case "HUL":
    case "MAG":
    case "Haas":
      return "Haas";
    case "NOR":
    case "PIA":
    case "McLaren":
      return "McLaren";
    case "HAM":
    case "RUS":
    case "Mercedes":
      return "Mercedes";
    case "PER":
    case "VER":
    case "Red Bull":
      return "Red Bull";
    case "ALB":
    case "SAR":
    case "Williams":
      return "Williams";
    default:
      return "Williams";
  }
}

export const constructorToDrivers = (constructor: ConstructorNameType) : DriverCodeType[] => {
  switch(constructor){
    case "Alfa Romeo":
      return ["BOT", "ZHO"];
    case "AlphaTauri":
      return ["DEV", "TSU", "RIC"];
    case "Alpine":
      return ["GAS", "OCO"];
    case "Aston Martin":
      return ["ALO", "STR"];
    case "Ferrari":
      return ["LEC", "SAI"];
    case "Haas":
      return ["HUL", "MAG"];
    case "McLaren":
      return ["NOR", "PIA"];
    case "Mercedes":
      return ["HAM", "RUS"];
    case "Red Bull":
      return ["PER", "VER"];
    case "Williams":
      return ["ALB", "SAR"];
  }

}

export const driverNames: { [Key in DriverCodeType] : { alphabeticOrder: number, first: string, last: string}} = {
  ALB : { alphabeticOrder: 0, first: "Alex", last: "Albon"},
  ALO : { alphabeticOrder: 1, first: "Fernando", last: "Alonso"},
  BOT : { alphabeticOrder: 2, first: "Valterri", last: "Bottas"},
  DEV : { alphabeticOrder: 3, first: "Nyck", last: "de Vries"},
  GAS : { alphabeticOrder: 4, first: "Pierre", last: "Gasly"},
  HAM : { alphabeticOrder: 5, first: "Lewis", last: "Hamilton"},
  HUL : { alphabeticOrder: 6, first: "Nico", last: "Hulkenberg"},
  LEC : { alphabeticOrder: 7, first: "Charles", last: "Leclerc"},
  MAG : { alphabeticOrder: 8, first: "Kevin", last: "Magnussen"},
  NOR : { alphabeticOrder: 9, first: "Lando", last: "Norris"},
  OCO : { alphabeticOrder: 10, first: "Esteban", last: "Ocon"},
  PER : { alphabeticOrder: 11, first: "Sergio", last: "Perez"},
  PIA : { alphabeticOrder: 12, first: "Oscar", last: "Piastri"},
  RIC : { alphabeticOrder: 13, first: "Daniel", last: "Ricciardo"},
  RUS : { alphabeticOrder: 14, first: "George", last: "Russell"},
  SAI : { alphabeticOrder: 15, first: "Carlos", last: "Sainz"},
  SAR : { alphabeticOrder: 16, first: "Logan", last: "Sargeant"},
  STR : { alphabeticOrder: 17, first: "Lance", last: "Stroll"},
  TSU : { alphabeticOrder: 18, first: "Yuki", last: "Tsunoda"},
  VER : { alphabeticOrder: 19, first: "Max", last: "Verstappen"},
  ZHO : { alphabeticOrder: 20, first: "Zhou", last: "Guanyu"},
}

export const driverTcamColors: { [Key in DriverCodeType] : "Black" | "Yellow"} = {
  ALB: "Black", ALO: "Yellow", BOT: "Black", DEV: "Black", GAS: "Yellow",
  HAM: "Yellow", HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", 
  OCO: "Black", PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black",
  SAI: "Yellow", SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", 
  ZHO: "Yellow", 
}

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

export interface RaceModeProps {
  raceMode: RaceModeType;
}

export type RaceModeType = "Both Grands Prix and Sprint Races" | "Grands Prix Only" | "Sprint Races Only";

export const nullArray21 = [
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, null, 
]