import { type AllNHLTeamType, NHLteamData } from "~/data/NHL/NHLdata"

export const nameMatcher = (checkTeam: AllNHLTeamType, winningTeam: AllNHLTeamType, losingTeam?: AllNHLTeamType,) => {
  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "DAL" &&
      [losingTeam, winningTeam].includes("MNS")) ||
    (checkTeam === "MNS" &&
      [losingTeam, winningTeam].includes("DAL"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const nhlTeamPreNames = (checkTeam: AllNHLTeamType): string => {
  switch(checkTeam){
    case "DAL":
    case "MNS":
      return "Stars/North Stars"
    default:
      return NHLteamData[checkTeam].name
  }
} 