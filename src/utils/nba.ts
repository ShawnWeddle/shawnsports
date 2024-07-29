import { type AllNBATeamType, NBAteamData } from "~/data/NBA/NBAdata";

export const nameMatcher = (checkTeam: AllNBATeamType, winningTeam: AllNBATeamType, losingTeam?: AllNBATeamType) => {
  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "LAL" &&
      [losingTeam, winningTeam].includes("MNL")) ||
    (checkTeam === "MNL" &&
      [losingTeam, winningTeam].includes("LAL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "PHI" &&
      [losingTeam, winningTeam].includes("SYR")) ||
    (checkTeam === "SYR" &&
      [losingTeam, winningTeam].includes("PHI"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "DET" &&
      [losingTeam, winningTeam].includes("FWP")) ||
    (checkTeam === "FWP" &&
      [losingTeam, winningTeam].includes("DET"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "ATL" &&
      [losingTeam, winningTeam].includes("STL")) ||
    (checkTeam === "STL" &&
      [losingTeam, winningTeam].includes("ATL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "SAC" &&
      [losingTeam, winningTeam].includes("KCK")) ||
    (checkTeam === "KCK" &&
      [losingTeam, winningTeam].includes("SAC"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "OKC" &&
      [losingTeam, winningTeam].includes("SEA")) ||
    (checkTeam === "SEA" &&
      [losingTeam, winningTeam].includes("OKC"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "WSB" &&
      [losingTeam, winningTeam].includes("BAL")) ||
    (checkTeam === "BAL" &&
      [losingTeam, winningTeam].includes("WSB"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "GSW" &&
      [losingTeam, winningTeam].includes("PHW")) ||
    (checkTeam === "PHW" &&
      [losingTeam, winningTeam].includes("SFW")) ||
    (checkTeam === "SFW" &&
      [losingTeam, winningTeam].includes("GSW")) ||
    (checkTeam === "GSW" &&
      [losingTeam, winningTeam].includes("SFW")) ||
    (checkTeam === "PHW" &&
      [losingTeam, winningTeam].includes("GSW")) ||
    (checkTeam === "SFW" &&
      [losingTeam, winningTeam].includes("PHW"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const nbaTeamPreNames = (checkTeam: AllNBATeamType): string => {
  switch(checkTeam){

    case "PHI":
    case "SYR":
      return "76ers/Nationals"
    case "OKC":
    case "SEA":
      return "Thunder/Supersonics"
    case "BAL":
    case "WAS":
    case "WSB":
      return "Wizards/Bullets"
    case "KCK":
    case "ROC":
    case "SAC":
      return "Kings/Royals"
    default:
      return NBAteamData[checkTeam].name
  }
} 