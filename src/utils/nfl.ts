import { type AllNFLTeamType } from "~/data/NFL/NFLdata"

export const nameMatcher = (checkTeam: AllNFLTeamType, winningTeam: AllNFLTeamType, losingTeam?: AllNFLTeamType,) => {
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
  return isTeam;
}

const nameMatcherX = (checkTeam: AllNFLTeamType, winningTeam: AllNFLTeamType, losingTeam: AllNFLTeamType,) => {
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
  return isTeam;
}