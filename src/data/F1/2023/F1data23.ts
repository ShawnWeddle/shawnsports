export const constructorNames2023 = [
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

export const driverCodes2023 = [
  "ALB", "ALO", "BOT", "DEV", "GAS",
  "HAM", "HUL", "LAW" ,"LEC", "MAG", "NOR", 
  "OCO", "PER", "PIA", "RIC", "RUS", "SAI",
  "SAR", "STR", "TSU", "VER", "ZHO", 
] as const;

export const raceLocations2023 = [
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

export type DriverCode23Type = typeof driverCodes2023[number];
export type ConstructorName23Type = typeof constructorNames2023[number];
export type RaceLocation23Type = typeof raceLocations2023[number];

export const driverToConstructor2023 = (driver: DriverCode23Type | ConstructorName23Type ) : ConstructorName23Type => {
  switch(driver){
    case "GAS":
    case "OCO":
    case "Alpine":
      return "Alpine";
    case "DEV":
    case "LAW":
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

export const constructorToDrivers2023 = (constructor: ConstructorName23Type) : DriverCode23Type[] => {
  switch(constructor){
    case "Alfa Romeo":
      return ["BOT", "ZHO"];
    case "AlphaTauri":
      return ["DEV", "LAW", "TSU", "RIC"];
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

export const driverNames2023: { [Key in DriverCode23Type] : { alphabeticOrder: number, first: string, last: string}} = {
  ALB : { alphabeticOrder: 0, first: "Alex", last: "Albon"},
  ALO : { alphabeticOrder: 1, first: "Fernando", last: "Alonso"},
  BOT : { alphabeticOrder: 2, first: "Valterri", last: "Bottas"},
  DEV : { alphabeticOrder: 3, first: "Nyck", last: "de Vries"},
  GAS : { alphabeticOrder: 4, first: "Pierre", last: "Gasly"},
  HAM : { alphabeticOrder: 5, first: "Lewis", last: "Hamilton"},
  HUL : { alphabeticOrder: 6, first: "Nico", last: "Hulkenberg"},
  LAW : { alphabeticOrder: 7, first: "Liam", last: "Lawson"},
  LEC : { alphabeticOrder: 8, first: "Charles", last: "Leclerc"},
  MAG : { alphabeticOrder: 9, first: "Kevin", last: "Magnussen"},
  NOR : { alphabeticOrder: 10, first: "Lando", last: "Norris"},
  OCO : { alphabeticOrder: 11, first: "Esteban", last: "Ocon"},
  PER : { alphabeticOrder: 12, first: "Sergio", last: "Perez"},
  PIA : { alphabeticOrder: 13, first: "Oscar", last: "Piastri"},
  RIC : { alphabeticOrder: 14, first: "Daniel", last: "Ricciardo"},
  RUS : { alphabeticOrder: 15, first: "George", last: "Russell"},
  SAI : { alphabeticOrder: 16, first: "Carlos", last: "Sainz"},
  SAR : { alphabeticOrder: 17, first: "Logan", last: "Sargeant"},
  STR : { alphabeticOrder: 18, first: "Lance", last: "Stroll"},
  TSU : { alphabeticOrder: 19, first: "Yuki", last: "Tsunoda"},
  VER : { alphabeticOrder: 20, first: "Max", last: "Verstappen"},
  ZHO : { alphabeticOrder: 21, first: "Zhou", last: "Guanyu"},
}

export const driverTcamColors2023: { [Key in DriverCode23Type] : "Black" | "Yellow"} = {
  ALB: "Black", ALO: "Yellow", BOT: "Black", DEV: "Black", GAS: "Yellow",
  HAM: "Yellow", HUL: "Yellow", LAW: "Black", LEC: "Black", MAG: "Black", NOR: "Yellow", 
  OCO: "Black", PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black",
  SAI: "Yellow", SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", ZHO: "Yellow", 
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

export const nullArray22 = [
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, null, null, null, 
  null, null, 
]