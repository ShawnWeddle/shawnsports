import { type AllNFLTeamType } from "~/data/NFL/NFLdata";

export type SuperBowlType = {
  winningTeam: AllNFLTeamType;
  losingTeam: AllNFLTeamType;
  score: string,
  romanNumeral: string,
}