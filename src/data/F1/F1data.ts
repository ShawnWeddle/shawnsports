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
] as const;

export type DriverCodeType = typeof driverCodes[number];
export type ConstructorNameType = typeof constructorNames[number];
export type RaceLocationType = typeof raceLocations[number];

export type FullDriverCodeType = DriverCodeType | undefined;

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

export const driverTcamColors: { [Key in DriverCodeType] : "Black" | "Yellow" | "New"} = {
  ALB: "Black", ALO: "Yellow", BOT: "Black", DEV: "Black", GAS: "Yellow",
  HAM: "Yellow", HUL: "Yellow", LEC: "Black", MAG: "Black", NOR: "Yellow", 
  OCO: "Black", PIA: "Black", PER: "Yellow", RIC: "New", RUS: "Black",
  SAI: "Yellow", SAR: "Yellow", STR: "Black", TSU: "Yellow", VER: "Black", 
  ZHO: "Yellow", 
}

/* 

  {
    location: ,
    finalOrder: [
      
    ],
    DNFs: [
      
    ],
    fastestLap: ,
    polePosition: ,
    sprint: false,
  },
  
  */