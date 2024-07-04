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
  "BEA",
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
    case "BEA":
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

export const allToConstructor2024 = (input: DriverCode24Type | ConstructorName24Type ) : ConstructorName24Type => {
  switch(input){
    case "GAS":
    case "OCO":
    case "Alpine":
      return "Alpine";
    case "ALO":
    case "STR":
    case "Aston Martin":
      return "Aston Martin";
    case "BEA":
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
    case "RIC":
    case "TSU":
    case "RB":
      return "RB";
    case "PER":
    case "VER":
    case "Red Bull":
      return "Red Bull";
    case "BOT":
    case "ZHO":
    case "Sauber":
      return "Sauber";
    case "ALB":
    case "SAR":
    case "Williams":
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
      return ["BEA", "LEC", "SAI"];
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
  BEA : { alphabeticOrder: 2, first: "Oliver", last: "Bearman"},
  BOT : { alphabeticOrder: 3, first: "Valterri", last: "Bottas"},
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

export const driverTcamColors2024: { [Key in DriverCode24Type] : "Black" | "Yellow" | "Cyan"} = {
  ALB: "Black", ALO: "Yellow", BOT: "Black", GAS: "Yellow", HAM: "Yellow", 
  HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", OCO: "Black", 
  PIA: "Black", PER: "Yellow", RIC: "Black", RUS: "Black", SAI: "Yellow", 
  SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", ZHO: "Yellow", 
  BEA: "Cyan",
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