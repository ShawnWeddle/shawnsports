import { type NBATeamType } from "../NBAdata";
import { shuffle } from "lodash";

export const LotteryTest = (teams: NBATeamType[]): NBATeamType[] => {

  if (teams.length !== 14) {
    return [];
  }

  return [];
}