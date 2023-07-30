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
  "OCO", "PIA", "PER", "RIC", "RUS", "SAI",
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

export const driverToConstructor = (driver: DriverCodeType) : ConstructorNameType => {
  switch(driver){
    case "GAS":
    case "OCO":
      return "Alpine";
    case "DEV":
    case 'RIC':
    case "TSU":
      return "AlphaTauri";
    case "BOT":
    case "ZHO":
      return "Alfa Romeo";
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
    case "PER":
    case "VER":
      return "Red Bull";
    case "ALB":
    case "SAR":
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