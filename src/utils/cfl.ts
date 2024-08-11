import { type AllCFLTeamType, CFLteamData } from "~/data/CFL/CFLdata"

export const cflTeamPreNames = (checkTeam: AllCFLTeamType): string => {
  switch(checkTeam){
    case "ESK":
    case "EDM":
      return "Elk/Eskimos"
    default:
      return CFLteamData[checkTeam].name
  }
} 