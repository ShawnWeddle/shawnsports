import { type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { type AllNBATeamType } from "~/data/NBApickData";

export type StanleyCupSeriesType = {
  winningTeam: AllNHLTeamType;
  losingTeam: AllNHLTeamType;
  splits: string;
  year: number;
}

export type NBAFinalsSeriesType = {
  winningTeam: AllNBATeamType;
  losingTeam: AllNBATeamType;
  splits: string;
  year: number;
}

export type SuperBowlType = {
  winningTeam: AllNFLTeamType;
  losingTeam: AllNFLTeamType;
  score: string,
  romanNumeral: string,
}