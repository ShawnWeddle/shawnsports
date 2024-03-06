export const constructorNames2024 = [
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

export const driverCodes2024 = [
  "ALB", "ALO", "BOT", "GAS", "HAM", 
  "HUL", "LEC", "MAG", "NOR", "OCO", 
  "PER", "PIA", "RIC", "RUS", "SAI",
  "SAR", "STR", "TSU", "VER", "ZHO", 
] as const;

export const raceLocations2024 = [
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

export type DriverCode24Type = typeof driverCodes2024[number];
export type ConstructorName24Type = typeof constructorNames2024[number];
export type RaceLocation24Type = typeof raceLocations2024[number];

export const driverToConstructor2024 = (driver: DriverCode24Type ) : ConstructorName24Type => {
  switch(driver){
    case "GAS":
    case "OCO":
      return "Alpine";
    case "ALO":
    case "STR":
      return "Aston Martin";
    case "LEC":
    case "SAI":
      return "Ferrari";
    case "HUL":
    case "MAG":
      return "Haas";
    case "NOR":
    case "PIA":
      return "McLaren";
    case "HAM":
    case "RUS":
      return "Mercedes";
    case "RIC":
    case "TSU":
      return "RB";
    case "PER":
    case "VER":
      return "Red Bull";
    case "BOT":
    case "ZHO":
      return "Sauber";
    case "ALB":
    case "SAR":
      return "Williams";
    default:
      return "Williams";
  }
}

export const constructorToDrivers2024 = (constructor: ConstructorName24Type) : DriverCode24Type[] => {
  switch(constructor){

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
    case "RB":
      return ["RIC", "TSU"];
    case "Red Bull":
      return ["PER", "VER"];
    case "Sauber":
      return ["BOT", "ZHO"];
    case "Williams":
      return ["ALB", "SAR"];
  }

}

export const driverNames2024: { [Key in DriverCode24Type] : { alphabeticOrder: number, first: string, last: string}} = {
  ALB : { alphabeticOrder: 0, first: "Alex", last: "Albon"},
  ALO : { alphabeticOrder: 1, first: "Fernando", last: "Alonso"},
  BOT : { alphabeticOrder: 2, first: "Valterri", last: "Bottas"},
  GAS : { alphabeticOrder: 3, first: "Pierre", last: "Gasly"},
  HAM : { alphabeticOrder: 4, first: "Lewis", last: "Hamilton"},
  HUL : { alphabeticOrder: 5, first: "Nico", last: "Hulkenberg"},
  LEC : { alphabeticOrder: 6, first: "Charles", last: "Leclerc"},
  MAG : { alphabeticOrder: 7, first: "Kevin", last: "Magnussen"},
  NOR : { alphabeticOrder: 8, first: "Lando", last: "Norris"},
  OCO : { alphabeticOrder: 9, first: "Esteban", last: "Ocon"},
  PER : { alphabeticOrder: 10, first: "Sergio", last: "Perez"},
  PIA : { alphabeticOrder: 11, first: "Oscar", last: "Piastri"},
  RIC : { alphabeticOrder: 12, first: "Daniel", last: "Ricciardo"},
  RUS : { alphabeticOrder: 13, first: "George", last: "Russell"},
  SAI : { alphabeticOrder: 14, first: "Carlos", last: "Sainz"},
  SAR : { alphabeticOrder: 15, first: "Logan", last: "Sargeant"},
  STR : { alphabeticOrder: 16, first: "Lance", last: "Stroll"},
  TSU : { alphabeticOrder: 17, first: "Yuki", last: "Tsunoda"},
  VER : { alphabeticOrder: 18, first: "Max", last: "Verstappen"},
  ZHO : { alphabeticOrder: 19, first: "Zhou", last: "Guanyu"},
}

export const driverTcamColors2024: { [Key in DriverCode24Type] : "Black" | "Yellow"} = {
  ALB: "Black", ALO: "Yellow", BOT: "Black", GAS: "Yellow", HAM: "Yellow", 
  HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", OCO: "Black", 
  PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black", SAI: "Yellow", 
  SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", ZHO: "Yellow", 
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

export const nullArray20 = [
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
]