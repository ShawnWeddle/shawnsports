import { type AllNHLTeamType } from "~/data/NHL/NHLdata";

export type StanleyCupSeriesType = {
  winningTeam: AllNHLTeamType;
  losingTeam: AllNHLTeamType;
  splits: string;
  year: number;
}