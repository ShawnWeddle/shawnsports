import { type MLSTeamType, MLSteamData } from "~/data/MLS/MLSdata"

export const mlsTeamPreNames = (checkTeam: MLSTeamType): string => {
  const teamInfo = MLSteamData[checkTeam];
  const { location, name, reverse} = teamInfo;
  if(reverse){
    return name + " " + location;
  } else {
    return location + " " + name;
  }
} 