import { z } from "zod";
import { type SportType } from "../SiteData";
import { NullBook } from "~/types/StyleBook";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { MLSstyleData } from "~/data/MLS/MLSstyleData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { CFLteamData, cflTeamsRanked } from "~/data/CFL/CFLdata";
import {
  driverCodes2024,
  driverNames2024,
  driverToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { MLBteamData, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { MLSteamData, allMLSteams } from "../MLS/MLSdata";
import { NBAteamData, nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { NFLteamData, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { NHLteamData, nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { WNBAteamData, wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";

const CFLenum = z.enum(cflTeamsRanked);
const F1enum = z.enum(driverCodes2024);
const MLBenum = z.enum(mlbTeamsRanked);
const MLSenum = z.enum(allMLSteams);
const NBAenum = z.enum(nbaTeamsRanked);
const NFLenum = z.enum(nflTeamsRanked);
const NHLenum = z.enum(nhlTeamsRanked);
const WNBAenum = z.enum(wnbaTeamsRanked);

export const rankerInfo = (input: string, sport: SportType) => {
  let code;
  let style = NullBook;
  const text = { short: "", long: "" };
  if(input){
    switch (sport) {
      case "F1":
        const driverCode = F1enum.parse(input)
        code = driverToConstructor2024(driverCode);
        style = F1styleData[code];
        text.long = driverNames2024[driverCode].first + " " + driverNames2024[driverCode].last;
        text.short = driverCode === "ZHO" ? driverNames2024[driverCode].first : driverNames2024[driverCode].last;
        break;
      case "CFL":
        code = CFLenum.parse(input);
        style = CFLstyleData[code];
        text.long = CFLteamData[code].location + " " + CFLteamData[code].name
        text.short = CFLteamData[code].name;
        break;
      case "MLB":
        code = MLBenum.parse(input);
        style = MLBstyleData[code];
        text.long = MLBteamData[code].location + " " + MLBteamData[code].name;
        text.short = MLBteamData[code].name;
        break;
      case "MLS":
        code = MLSenum.parse(input);
        style = MLSstyleData[code];
        text.long = MLSteamData[code].reverse ? MLSteamData[code].name + " " + MLSteamData[code].location : MLSteamData[code].location + " " + MLSteamData[code].name;
        text.short = MLSteamData[code].location;
        break;
      case "NBA":
        code = NBAenum.parse(input);
        style = NBAstyleData[code];
        text.long = NBAteamData[code].location + " " + NBAteamData[code].name;
        text.short = NBAteamData[code].name;
        break;
      case "NFL":
        code = NFLenum.parse(input);
        style = NFLstyleData[code];
        text.long = NFLteamData[code].location + " " + NFLteamData[code].name;
        text.short = NFLteamData[code].name;
        break;
      case "NHL":
        code = NHLenum.parse(input);
        style = NHLstyleData[code];
        text.long = NHLteamData[code].location + " " + NHLteamData[code].name;
        text.short = NHLteamData[code].name;
        break;
      case "WNBA":
        code = WNBAenum.parse(input);
        style = WNBAstyleData[code];
        text.long = WNBAteamData[code].location + " " + WNBAteamData[code].name;
        text.short = WNBAteamData[code].name;
        break;
    }
  }

  if(!code){
    code = "";
  }

  return {
    code,
    style,
    text,
  }
}

export const GlobalSportData: {
  [Key in SportType] : {
    title: string,
    variant: "nfl" | "nba" | "formulaOne" | "mlb" | "nhl" | "wnba" | "cfl" | "mls",
    totalNum: number,
  }
} = {
  "CFL": {
    title: "CFL Teams",
    variant: "cfl",
    totalNum: 9,
  },
  "F1": {
    title: "F1 Drivers",
    variant: "formulaOne",
    totalNum: 22,
  },
  "MLB": {
    title: "MLB Teams",
    variant: "mlb",
    totalNum: 30,
  },
  "MLS": {
    title: "MLS Teams",
    variant: "mls",
    totalNum: 29,
  },
  "NBA": {
    title: "NBA Teams",
    variant: "nba",
    totalNum: 30,
  },
  "NFL": {
    title: "NFL Teams",
    variant: "nfl",
    totalNum: 32,
  },
  "NHL": {
    title: "NHL Teams",
    variant: "nhl",
    totalNum: 32,
  },
  "WNBA": {
    title: "WNBA Teams",
    variant: "wnba",
    totalNum: 13,
  },
}