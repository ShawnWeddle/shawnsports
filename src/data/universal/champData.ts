import { z } from "zod";
import { type SportType } from "../SiteData";
import { NullBook } from "~/types/StyleBook";
import type { NBAFinalsSeriesType, StanleyCupSeriesType, SuperBowlType, WorldSeriesType, UniversalFinalsType } from "~/types/ChampTypes";

import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { MLSstyleData } from "~/data/MLS/MLSstyleData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";

import { CFLteamData, cflTeamsAll, type AllCFLTeamType } from "~/data/CFL/CFLdata";
import {
  driverCodes2024,
  driverNames2024,
  driverToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { MLBteamData, mlbTeamsAll, type AllMLBTeamType } from "~/data/MLB/MLBdata";
import { mlsData, allMLSteams, type MLSTeamType} from "~/data/MLS/MLSdata";
import { NBAteamData, nbaTeamsAll, type AllNBATeamType } from "~/data/NBA/NBAdata";
import { NFLteamData, nflTeamsAll, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NHLteamData, nhlTeamsAll, type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { WNBAteamData, wnbaTeamsAll, type AllWNBATeamType } from "~/data/WNBA/WNBAdata";

import { SuperBowlData } from "../NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "../NFL/ConferenceChampData";
import { NBAFinalsData } from "../NBA/NBAFinalsData";
import { EasternChampData as EastNBAdata, WesternChampData as WestNBAdata } from "../NBA/ConferenceChampData";
import { WorldSeriesData, ALCSData, NLCSData } from "../MLB/WorldSeriesData";
import { StanleyCupData, EastData as EastNHLdata, WestData as WestNHLdata } from "../NHL/StanleyCupData";
import { GreyCupData } from "../CFL/GreyCupData";
import { WNBAFinalsData } from "../WNBA/WNBAFinalsData";
import { MLSCupData } from "../MLS/MLScupData";

import { cflTeamPreNames } from "~/utils/cfl";
import { mlbTeamPreNames, nameMatcherMLB } from "~/utils/mlb";
import { nbaTeamPreNames, nameMatcherNBA } from "~/utils/nba";
import { nflTeamPreNames, nameMatcherNFL } from "~/utils/nfl";
import { nhlTeamPreNames, nameMatcherNHL } from "~/utils/nhl";
import { wnbaTeamPreNames, nameMatcherWNBA } from "~/utils/wnba";

const CFLenum = z.enum(cflTeamsAll);
const F1enum = z.enum(driverCodes2024);
const MLBenum = z.enum(mlbTeamsAll);
const MLSenum = z.enum(allMLSteams);
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
    case "MLS":
      code = MLSenum.parse(input);
      style = MLSstyleData[code];
      location = mlsData[code];
      name = "";
      finalNames = ["MLS Cups"];
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

export const activeData = (sport: SportType, activeTeam: string | null, bet: 0 | 1 | 2): UniversalFinalsType[] => {
  let Z: UniversalFinalsType[] = [];
  switch(sport){
    case "CFL":
      if(activeTeam){
        const teamCFL: AllCFLTeamType = CFLenum.parse(activeTeam);
        Z = GreyCupData.filter((game) => {
          if (!teamCFL) return true;
          let isTeam = false;
          if ([game.losingTeam, game.winningTeam].includes(teamCFL)) {
            isTeam = true;
          }
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = GreyCupData.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "F1":
      Z = GreyCupData.map((game) => {
        return {...game}
      })
      return Z;
    case "MLB":
      let newDataMLB: WorldSeriesType[];
      switch(bet){
        case 0: 
          newDataMLB = WorldSeriesData;
          break;
        case 1:
          newDataMLB = ALCSData;
          break;
        case 2:
          newDataMLB =  NLCSData;
          break;
      }
      if(activeTeam){
        const teamMLB: AllMLBTeamType = MLBenum.parse(activeTeam);
        Z = newDataMLB.filter((game) => {
          if (!teamMLB) return true;
          const isTeam = nameMatcherMLB(teamMLB, game.winningTeam, game.losingTeam);
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = newDataMLB.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "MLS":
      if(activeTeam){
        const teamMLS: MLSTeamType = MLSenum.parse(activeTeam);
        Z = MLSCupData.filter((game) => {
          if (!teamMLS) return true;
          let isTeam = false;
          if ([game.losingTeam, game.winningTeam].includes(teamMLS)) {
            isTeam = true;
          }
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = MLSCupData.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "NBA":
      let newDataNBA: NBAFinalsSeriesType[];
      switch(bet){
        case 0: 
          newDataNBA = NBAFinalsData;
          break;
        case 1:
          newDataNBA = EastNBAdata;
          break;
        case 2:
          newDataNBA =  WestNBAdata;
          break;
      }
      if(activeTeam){
        const teamNBA: AllNBATeamType = NBAenum.parse(activeTeam);
        Z = newDataNBA.filter((game) => {
          if (!teamNBA) return true;
          const isTeam = nameMatcherNBA(teamNBA, game.winningTeam, game.losingTeam);
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = newDataNBA.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "NFL":
      let newDataNFL: SuperBowlType[];
      switch(bet){
        case 0: 
          newDataNFL = SuperBowlData;
          break;
        case 1:
          newDataNFL = AFCChampData;
          break;
        case 2:
          newDataNFL = NFCChampData;
          break;
      }
      if(activeTeam){
        const teamNFL: AllNFLTeamType = NFLenum.parse(activeTeam);
        Z = newDataNFL.filter((game) => {
          if (!teamNFL) return true;
          const isTeam = nameMatcherNFL(teamNFL, game.winningTeam, game.losingTeam);
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = newDataNFL.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "NHL":
      let newDataNHL: StanleyCupSeriesType[];
      switch(bet){
        case 0: 
          newDataNHL = StanleyCupData;
          break;
        case 1:
          newDataNHL = EastNHLdata;
          break;
        case 2:
          newDataNHL =  WestNHLdata;
          break;
      }
      if(activeTeam){
        const teamNHL: AllNHLTeamType = NHLenum.parse(activeTeam);
        Z = newDataNHL.filter((game) => {
          if (!teamNHL) return true;
          const isTeam = nameMatcherNHL(teamNHL, game.winningTeam, game.losingTeam);
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = newDataNHL.map((game) => {
          return {...game}
        })
      }
      return Z;
    case "WNBA":
      if(activeTeam){
        const teamWNBA: AllWNBATeamType = WNBAenum.parse(activeTeam);
        Z = WNBAFinalsData.filter((game) => {
          if (!teamWNBA) return true;
          const isTeam = nameMatcherWNBA(teamWNBA, game.winningTeam, game.losingTeam);
          return isTeam;
        }).map((game) => {
          return {...game}
        })
      } else {
        Z = WNBAFinalsData.map((game) => {
          return {...game}
        })
      }
      return Z;
  }
}

export const modalNamer = (sport: SportType, activeTeam: string | null, bet: 0 | 1 | 2) => {
  switch(sport){
    case "CFL":
      if(activeTeam){
        const teamCFL: AllCFLTeamType = CFLenum.parse(activeTeam);
        return cflTeamPreNames(teamCFL) + " Grey Cups";
      } else {
        return "";
      }
    case "F1":
      return "";
    case "MLB":
      let finalNameMLB = "";
      switch(bet){
        case 0: 
          finalNameMLB = " World Series";
          break;
        case 1:
          finalNameMLB = " ALCS";
          break;
        case 2:
          finalNameMLB = " NLCS";
          break;
      }
      if(activeTeam){
        const teamMLB: AllMLBTeamType = MLBenum.parse(activeTeam);
        return mlbTeamPreNames(teamMLB) + finalNameMLB;
      } else {
        return "";
      }
    case "MLS":
      return "";
    case "NBA":
      let finalNameNBA = "";
      switch(bet){
        case 0: 
          finalNameNBA = " Finals";
          break;
        case 1:
          finalNameNBA = " Eastern Finals";
          break;
        case 2:
          finalNameNBA = " Western Finals";
          break;
      }
      if(activeTeam){
        const teamNBA: AllNBATeamType = NBAenum.parse(activeTeam);
        return nbaTeamPreNames(teamNBA) + finalNameNBA;
      } else {
        return "";
      }
    case "NFL":
      let finalNameNFL = "";
      switch(bet){
        case 0: 
          finalNameNFL = " Super Bowls";
          break;
        case 1:
          finalNameNFL = " AFC Championships";
          break;
        case 2:
          finalNameNFL = " NFC Championships";
          break;
      }
      if(activeTeam){
        const teamNFL: AllNFLTeamType = NFLenum.parse(activeTeam);
        return nflTeamPreNames(teamNFL) + finalNameNFL;
      } else {
        return "";
      }
    case "NHL":
      let finalNameNHL = "";
      switch(bet){
        case 0: 
          finalNameNHL = " Stanley Cups";
          break;
        case 1:
          finalNameNHL = " Eastern Finals";
          break;
        case 2:
          finalNameNHL = " Western Finals";
          break;
      }
      if(activeTeam){
        const teamNHL: AllNHLTeamType = NHLenum.parse(activeTeam);
        return nhlTeamPreNames(teamNHL) + finalNameNHL;
      } else {
        return "";
      }
    case "WNBA":
      if(activeTeam){
        const teamWNBA: AllWNBATeamType = WNBAenum.parse(activeTeam);
        return wnbaTeamPreNames(teamWNBA) + " Finals";
      } else {
        return "";
      }
  }
}

export const GlobalSportData: {
  [Key in SportType] : {
    title: string,
    variant: "nfl" | "nba" | "formulaOne" | "mlb" | "nhl" | "wnba" | "cfl" | "mls",
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
  "MLS": {
    title: "MLS Cup Champions",
    variant: "mls",
    totalNum: 29,
    finalNames: ["MLS Cups"],
  },
  "NBA": {
    title: "NBA Champions",
    variant: "nba",
    totalNum: 30,
    finalNames: ["Finals", "Eastern", "Western"],
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
    finalNames: ["Finals"],
  },
}