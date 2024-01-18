import { type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { type AllNBATeamType } from "~/data/NBApickData";
import { type AllWNBATeamType } from "~/data/WNBA/WNBAdata";
import { type AllMLBTeamType } from "~/data/MLB/MLBdata";

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

export type WNBAFinalsSeriesType = {
  winningTeam: AllWNBATeamType;
  losingTeam: AllWNBATeamType;
  splits: string;
  year: number;
}

export type WorldSeriesType = {
  winningTeam: AllMLBTeamType;
  losingTeam: AllMLBTeamType;
  splits: string;
  year: number;
}

export type SuperBowlType = {
  winningTeam: AllNFLTeamType;
  losingTeam: AllNFLTeamType;
  score: string,
  romanNumeral: string,
}

export type SuperLoserType = {
  firstName: string,
  lastName: string,
  losses: number[],
}