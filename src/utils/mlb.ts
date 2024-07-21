import { type AllMLBTeamType, MLBteamData } from "~/data/MLB/MLBdata"

export const nameMatcher = (checkTeam: AllMLBTeamType, winningTeam: AllMLBTeamType, losingTeam?: AllMLBTeamType,) => {

  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "OAK" &&
      [losingTeam, winningTeam].includes("PHA")) ||
    (checkTeam === "PHA" &&
      [losingTeam, winningTeam].includes("OAK"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "SFG" &&
      [losingTeam, winningTeam].includes("NYG")) ||
    (checkTeam === "NYG" &&
      [losingTeam, winningTeam].includes("SFG"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "BAL" &&
      [losingTeam, winningTeam].includes("SLB")) ||
    (checkTeam === "SLB" &&
      [losingTeam, winningTeam].includes("BAL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "MIN" &&
      [losingTeam, winningTeam].includes("WAS")) ||
    (checkTeam === "WAS" &&
      [losingTeam, winningTeam].includes("MIN"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "LAD" &&
      [losingTeam, winningTeam].includes("BKD")) ||
    (checkTeam === "BKD" &&
      [losingTeam, winningTeam].includes("BKR")) ||
    (checkTeam === "BKR" &&
      [losingTeam, winningTeam].includes("LAD")) ||
    (checkTeam === "LAD" &&
      [losingTeam, winningTeam].includes("BKR")) ||
    (checkTeam === "BKD" &&
      [losingTeam, winningTeam].includes("LAD")) ||
    (checkTeam === "BKR" &&
      [losingTeam, winningTeam].includes("BKD"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "ATL" &&
      [losingTeam, winningTeam].includes("MLB")) ||
    (checkTeam === "MLB" &&
      [losingTeam, winningTeam].includes("BOB")) ||
    (checkTeam === "BOB" &&
      [losingTeam, winningTeam].includes("ATL")) ||
    (checkTeam === "ATL" &&
      [losingTeam, winningTeam].includes("BOB")) ||
    (checkTeam === "MLB" &&
      [losingTeam, winningTeam].includes("ATL")) ||
    (checkTeam === "BOB" &&
      [losingTeam, winningTeam].includes("MLB"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const mlbTeamPreNames = (checkTeam: AllMLBTeamType): string => {
  switch(checkTeam){
    case "BAL":
    case "SLB":
      return "Orioles/Browns"
    
    case "BKD":
    case "BKR":
    case "LAD":
      return "Dodgers/Robins"

    case "MIN":
    case "WAS":
      return "Twins/Senators"
    default:
      return MLBteamData[checkTeam].name
  }
} 