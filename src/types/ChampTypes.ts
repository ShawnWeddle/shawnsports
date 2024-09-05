import { type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { type AllNBATeamType } from "~/data/NBA/NBAdata";
import { type AllWNBATeamType } from "~/data/WNBA/WNBAdata";
import { type AllMLBTeamType } from "~/data/MLB/MLBdata";
import { type AllCFLTeamType } from "~/data/CFL/CFLdata";

export type StanleyCupSeriesType = {
  winningTeam: AllNHLTeamType;
  losingTeam: AllNHLTeamType;
  splits: string;
  year: number;
  wonFinals?: boolean;
}

export type NBAFinalsSeriesType = {
  winningTeam: AllNBATeamType;
  losingTeam: AllNBATeamType;
  splits: string;
  year: number;
  wonFinals?: boolean;
}

export type WNBAFinalsSeriesType = {
  winningTeam: AllWNBATeamType;
  losingTeam: AllWNBATeamType;
  splits: string;
  year: number;
  wonFinals?: boolean;
}

export type WorldSeriesType = {
  winningTeam: AllMLBTeamType;
  losingTeam: AllMLBTeamType;
  splits: string;
  year: number;
  wonWorldSeries?: boolean;
}

export type SuperBowlType = {
  winningTeam: AllNFLTeamType;
  losingTeam: AllNFLTeamType;
  score: string;
  year: number;
  romanNumeral?: string;
  wonSB?: boolean;
}

export type GreyCupType = {
  winningTeam: AllCFLTeamType;
  losingTeam: AllCFLTeamType;
  score: string;
  year: number;
}

export type SuperLoserType = {
  firstName: string;
  lastName: string;
  losses: number[];
}