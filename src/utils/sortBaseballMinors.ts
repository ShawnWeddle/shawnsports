import { type MLBTeamType, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import {
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";

type BaseballLeagueType = "MLB" | "AAA" | "AA" | "HA" | "SA";
type DirectionType = "A-Z" | "Z-A";

export type BaseballDirectionType = `${BaseballLeagueType}_${DirectionType}`;

export const sortedBaseballTeams = (order: BaseballDirectionType): MLBTeamType[] => {
  switch(order){
    case "MLB_A-Z": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return a > b ? 1 : -1;
      })
      return newOrder;
    }
    case "MLB_Z-A": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return a < b ? 1 : -1;
      })
      return newOrder;
    }
    case "AAA_A-Z": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return AAAFieldData[`AAA-${a}`].location > AAAFieldData[`AAA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "AAA_Z-A": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return AAAFieldData[`AAA-${a}`].location < AAAFieldData[`AAA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "AA_A-Z": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return AAFieldData[`AA-${a}`].location > AAFieldData[`AA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "AA_Z-A": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return AAFieldData[`AA-${a}`].location < AAFieldData[`AA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "HA_A-Z": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return HAFieldData[`HA-${a}`].location > HAFieldData[`HA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "HA_Z-A": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return HAFieldData[`HA-${a}`].location < HAFieldData[`HA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "SA_A-Z": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return SAFieldData[`SA-${a}`].location > SAFieldData[`SA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
    case "SA_Z-A": {
      const newOrder = mlbTeamsRanked.toSorted((a,b) => {
        return SAFieldData[`SA-${a}`].location < SAFieldData[`SA-${b}`].location ? 1 : -1;
      })
      return newOrder;
    }
  }
}