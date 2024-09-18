import { type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { type AllNBATeamType } from "~/data/NBA/NBAdata";
import { type AllWNBATeamType } from "~/data/WNBA/WNBAdata";
import { type AllMLBTeamType } from "~/data/MLB/MLBdata";
import { type AllCFLTeamType } from "~/data/CFL/CFLdata";

export type UniversalFinalsType = {
  winningTeam: string;
  losingTeam: string;
  score: string;
  year: number;
  romanNumeral?: string;
  wonChamp?: boolean;
}

export type StanleyCupSeriesType = {
  winningTeam: AllNHLTeamType;
  losingTeam: AllNHLTeamType;
  score: string;
  year: number;
  wonChamp?: boolean;
}

export type NBAFinalsSeriesType = {
  winningTeam: AllNBATeamType;
  losingTeam: AllNBATeamType;
  score: string;
  year: number;
  wonChamp?: boolean;
}

export type WNBAFinalsSeriesType = {
  winningTeam: AllWNBATeamType;
  losingTeam: AllWNBATeamType;
  score: string;
  year: number;
}

export type WorldSeriesType = {
  winningTeam: AllMLBTeamType;
  losingTeam: AllMLBTeamType;
  score: string;
  year: number;
  wonChamp?: boolean;
}

export type SuperBowlType = {
  winningTeam: AllNFLTeamType;
  losingTeam: AllNFLTeamType;
  score: string;
  year: number;
  wonChamp?: boolean;
  romanNumeral?: string;
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