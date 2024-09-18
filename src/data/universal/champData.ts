import { z } from "zod";
import { type SportType } from "../SiteData";
import { NullBook } from "~/types/StyleBook";
import { type UniversalFinalsType } from "~/types/ChampTypes";

import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { CFLteamData, cflTeamsAll } from "~/data/CFL/CFLdata";
import {
  driverCodes2024,
  driverNames2024,
  driverToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { MLBteamData, mlbTeamsAll } from "~/data/MLB/MLBdata";
import { NBAteamData, nbaTeamsAll } from "~/data/NBA/NBAdata";
import { NFLteamData, nflTeamsAll } from "~/data/NFL/NFLdata";
import { NHLteamData, nhlTeamsAll } from "~/data/NHL/NHLdata";
import { WNBAteamData, wnbaTeamsAll } from "~/data/WNBA/WNBAdata";

import { SuperBowlData } from "../NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "../NFL/ConferenceChampData";
import { NBAFinalsData } from "../NBA/NBAFinalsData";
import { EasternChampData as EastNBAdata, WesternChampData as WestNBAdata } from "../NBA/ConferenceChampData";
import { WorldSeriesData, ALCSData, NLCSData } from "../MLB/WorldSeriesData";
import { StanleyCupData, EastData as EastNHLdata, WestData as WestNHLdata } from "../NHL/StanleyCupData";
import { GreyCupData } from "../CFL/GreyCupData";
import { WNBAFinalsData } from "../WNBA/WNBAFinalsData";

const CFLenum = z.enum(cflTeamsAll);
const F1enum = z.enum(driverCodes2024);
const MLBenum = z.enum(mlbTeamsAll);
const NBAenum = z.enum(nbaTeamsAll);
const NFLenum = z.enum(nflTeamsAll);
const NHLenum = z.enum(nhlTeamsAll);
const WNBAenum = z.enum(wnbaTeamsAll);

export const champInfo = (input: string, sport: SportType) => {
  let code;
  let location = "";
  let name = "";
  let style = NullBook;
  let finalNames: [string, string, string] | [string] = [""];
  switch(sport){
    case "F1":
      break;
    case "CFL":
      code = CFLenum.parse(input);
      style = CFLstyleData[code];
      location = CFLteamData[code].location;
      name = CFLteamData[code].name;
      finalNames = ["Grey Cups"];
      
      break;
    case "MLB":
      code = MLBenum.parse(input);
      style = MLBstyleData[code];
      location = MLBteamData[code].location;
      name = MLBteamData[code].name;
      finalNames = ["World Series", "ALCS", "NLCS"];
      break;
    case "NBA":
      code = NBAenum.parse(input);
      style = NBAstyleData[code];
      location = NBAteamData[code].location;
      name = NBAteamData[code].name;
      finalNames = ["NBA Finals", "Eastern", "Western"];
      break;
    case "NFL":
      code = NFLenum.parse(input);
      style = NFLstyleData[code];
      location = NFLteamData[code].location;
      name = NFLteamData[code].name;
      finalNames = ["Super Bowls", "AFC", "NFC"];
      break;
    case "NHL":
      code = NHLenum.parse(input);
      style = NHLstyleData[code];
      location = NHLteamData[code].location;
      name = NHLteamData[code].name;
      finalNames = ["Stanley Cups", "Eastern", "Western"];
      break;
    case "WNBA":
      code = WNBAenum.parse(input);
      style = WNBAstyleData[code];
      location = WNBAteamData[code].location;
      name = WNBAteamData[code].name;
      finalNames = ["WNBA Finals"];
      break;
  }

  if(!code){
    code = "";
  }

  return {
    code,
    style,
    location,
    name,
    finalNames,
  }
}

export const activeData = (sport: SportType, bet: 0 | 1 | 2): UniversalFinalsType[] => {
  let Z: UniversalFinalsType[] = [];
  switch(sport){
    case "CFL":
      Z = GreyCupData.map((game) => {
        return {...game}
      })
      return Z;
    case "F1":
      Z = GreyCupData.map((game) => {
        return {...game}
      })
      return Z;
    case "MLB":
      switch(bet){
        case 0: 
          Z = WorldSeriesData.map((game) => {
            return {...game}
          })
          return Z;
        case 1:
          Z = ALCSData.map((game) => {
            return {...game}
          })
          return Z;
        case 2:
          Z = NLCSData.map((game) => {
            return {...game}
          })
          return Z;
      }
    case "NBA":
      switch(bet){
        case 0: 
          Z = NBAFinalsData.map((game) => {
            return {...game}
          })
          return Z;
        case 1:
          Z = EastNBAdata.map((game) => {
            return {...game}
          })
          return Z;
        case 2:
          Z = WestNBAdata.map((game) => {
            return {...game}
          })
          return Z;
      }
    case "NFL":
      switch(bet){
        case 0: 
          Z = SuperBowlData.map((game) => {
            return {...game}
          })
          return Z;
        case 1:
          Z = AFCChampData.map((game) => {
            return {...game}
          })
          return Z;
        case 2:
          Z = NFCChampData.map((game) => {
            return {...game}
          })
          return Z;
      }
    case "NHL":
      switch(bet){
        case 0: 
          Z = StanleyCupData.map((game) => {
            return {...game}
          })
          return Z;
        case 1:
          Z = EastNHLdata.map((game) => {
            return {...game}
          })
          return Z;
        case 2:
          Z = WestNHLdata.map((game) => {
            return {...game}
          })
          return Z;
      }
    case "WNBA":
      Z = WNBAFinalsData.map((game) => {
        return {...game}
      })
      return Z;
  }
}

export const GlobalSportData: {
  [Key in SportType] : {
    title: string,
    variant: "nfl" | "nba" | "formulaOne" | "mlb" | "nhl" | "wnba" | "cfl",
    totalNum: number,
    finalNames: [string, string, string] | [string]
  }
} = {
  "CFL": {
    title: "Grey Cup Champions",
    variant: "cfl",
    totalNum: 9,
    finalNames: ["Grey Cups"],
  },
  "F1": {
    title: "F1 Drivers",
    variant: "formulaOne",
    totalNum: 22,
    finalNames: [""],
  },
  "MLB": {
    title: "World Series Champions",
    variant: "mlb",
    totalNum: 30,
    finalNames: ["World Series", "ALCS", "NLCS"],
  },
  "NBA": {
    title: "NBA Champions",
    variant: "nba",
    totalNum: 30,
    finalNames: ["NBA Finals", "Eastern", "Western"],
  },
  "NFL": {
    title: "Super Bowl Champions",
    variant: "nfl",
    totalNum: 32,
    finalNames: ["Super Bowls", "AFC", "NFC"],
  },
  "NHL": {
    title: "Stanley Cup Champions",
    variant: "nhl",
    totalNum: 32,
    finalNames: ["Stanley Cups", "Eastern", "Western"],
  },
  "WNBA": {
    title: "WNBA Champions",
    variant: "wnba",
    totalNum: 12,
  
    finalNames: ["WNBA Finals"],
  },
}