import { type AllNFLTeamType, NFLteamData } from "~/data/NFL/NFLdata"

export const nameMatcherNFL = (checkTeam: AllNFLTeamType, winningTeam: AllNFLTeamType, losingTeam?: AllNFLTeamType,) => {
  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "OAK" &&
      [losingTeam, winningTeam].includes("LRD")) ||
    (checkTeam === "LRD" &&
      [losingTeam, winningTeam].includes("OAK"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "WAS" &&
      [losingTeam, winningTeam].includes("WRS")) ||
    (checkTeam === "WRS" &&
      [losingTeam, winningTeam].includes("WAS"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "STL" &&
      [losingTeam, winningTeam].includes("LAR")) ||
    (checkTeam === "LAR" &&
      [losingTeam, winningTeam].includes("STL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "BCS" &&
      [losingTeam, winningTeam].includes("IND")) ||
    (checkTeam === "IND" &&
      [losingTeam, winningTeam].includes("BCS"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "TEN" &&
      [losingTeam, winningTeam].includes("HOL")) ||
    (checkTeam === "HOL" &&
      [losingTeam, winningTeam].includes("TEN"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const nflTeamPreNames = (checkTeam: AllNFLTeamType): string => {
  switch(checkTeam){
    case "TEN":
    case "HOL":
      return "Titans/Oilers";
    case "WAS":
    case "WRS":
      return "Commanders/Redskins";
    default:
      return NFLteamData[checkTeam].name
  }
} 