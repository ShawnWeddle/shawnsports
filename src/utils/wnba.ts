import { type AllWNBATeamType, WNBAteamData } from "~/data/WNBA/WNBAdata";

export const nameMatcher = (checkTeam: AllWNBATeamType, winningTeam: AllWNBATeamType, losingTeam?: AllWNBATeamType) => {
  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "LVA" &&
      [losingTeam, winningTeam].includes("SAS")) ||
    (checkTeam === "SAS" &&
      [losingTeam, winningTeam].includes("LVA"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "DAL" &&
      [losingTeam, winningTeam].includes("DET")) ||
    (checkTeam === "DET" &&
      [losingTeam, winningTeam].includes("DAL"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const wnbaTeamPreNames = (checkTeam: AllWNBATeamType): string => {
  switch(checkTeam){

    case "LVA":
    case "SAS":
      return "Aces/Stars"
    case "DAL":
    case "DET":
      return "Wings/Shock"
    default:
      return WNBAteamData[checkTeam].name
  }
} 