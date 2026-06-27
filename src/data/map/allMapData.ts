import type { MapDataInputType } from "~/types/MapTypes";

import { NFLStadiumData, CFLStadiumData, IFLStadiumData, UFLStadiumData } from "../NFL/FootballStadiumData";
import { NBAArenaData, NGLArenaData, WNBAArenaData } from "../NBA/BasketballArenaData";
import { MLBFieldData, AAAFieldData, AAFieldData, HAFieldData, SAFieldData } from "../MLB/BaseballStadiumData";
import { NHLArenaData, AHLArenaData, ECHLArenaData, PWHLArenaData } from "../NHL/HockeyArenaData";
import { MLSStadiumData } from "../MLS/SoccerStadiumData";

export const markerData = (input: MapDataInputType) => {
  const { league, team } = input;
  let code;
  let location = "";
  let name = "";
  const coordinates = { latitude: 0, longitude: 0 };

  switch(league){
    case "NFL":
      code = team;
      location = NFLStadiumData[team].location;
      name = NFLStadiumData[team].name;
      coordinates.latitude = NFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = NFLStadiumData[team].coordinates.longitude;
      break;
    case "CFL":
      code = team;
      location = CFLStadiumData[team].location;
      name = CFLStadiumData[team].name;
      coordinates.latitude = CFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = CFLStadiumData[team].coordinates.longitude;
      break;
    case "IFL":
      code = team;
      location = IFLStadiumData[team].location;
      name = IFLStadiumData[team].name;
      coordinates.latitude = IFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = IFLStadiumData[team].coordinates.longitude;
      break;
    case "UFL":
      code = team;
      location = UFLStadiumData[team].location;
      name = UFLStadiumData[team].name;
      coordinates.latitude = UFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = UFLStadiumData[team].coordinates.longitude;
      break;
    case "NBA":
      code = team;
      location = NBAArenaData[team].location;
      name = NBAArenaData[team].name;
      coordinates.latitude = NBAArenaData[team].coordinates.latitude;
      coordinates.longitude = NBAArenaData[team].coordinates.longitude;
      break;
    case "WNBA":
      code = team;
      location = WNBAArenaData[team].location;
      name = WNBAArenaData[team].name;
      coordinates.latitude = WNBAArenaData[team].coordinates.latitude;
      coordinates.longitude = WNBAArenaData[team].coordinates.longitude;
      break;
    case "NGL":
      code = team;
      location = NGLArenaData[team].location;
      name = NGLArenaData[team].name;
      coordinates.latitude = NGLArenaData[team].coordinates.latitude;
      coordinates.longitude = NGLArenaData[team].coordinates.longitude;
      break;
    case "MLB":
      code = team;
      location = MLBFieldData[team].location;
      name = MLBFieldData[team].name;
      coordinates.latitude = MLBFieldData[team].coordinates.latitude;
      coordinates.longitude = MLBFieldData[team].coordinates.longitude;
      break;
    case "AAA":
      code = team;
      location = AAAFieldData[team].location;
      name = AAAFieldData[team].name;
      coordinates.latitude = AAAFieldData[team].coordinates.latitude;
      coordinates.longitude = AAAFieldData[team].coordinates.longitude;
      break;
    case "AA":
      code = team;
      location = AAFieldData[team].location;
      name = AAFieldData[team].name;
      coordinates.latitude = AAFieldData[team].coordinates.latitude;
      coordinates.longitude = AAFieldData[team].coordinates.longitude;
      break;
    case "HA":
      code = team;
      location = HAFieldData[team].location;
      name = HAFieldData[team].name;
      coordinates.latitude = HAFieldData[team].coordinates.latitude;
      coordinates.longitude = HAFieldData[team].coordinates.longitude;
      break;
    case "SA":
      code = team;
      location = SAFieldData[team].location;
      name = SAFieldData[team].name;
      coordinates.latitude = SAFieldData[team].coordinates.latitude;
      coordinates.longitude = SAFieldData[team].coordinates.longitude;
      break;
    case "NHL":
      code = team;
      location = NHLArenaData[team].location;
      name = NHLArenaData[team].name;
      coordinates.latitude = NHLArenaData[team].coordinates.latitude;
      coordinates.longitude = NHLArenaData[team].coordinates.longitude;
      break;
    case "AHL":
      code = team;
      location = AHLArenaData[team].location;
      name = AHLArenaData[team].name;
      coordinates.latitude = AHLArenaData[team].coordinates.latitude;
      coordinates.longitude = AHLArenaData[team].coordinates.longitude;
      break;
    case "ECHL":
      code = team;
      location = ECHLArenaData[team].location;
      name = ECHLArenaData[team].name;
      coordinates.latitude = ECHLArenaData[team].coordinates.latitude;
      coordinates.longitude = ECHLArenaData[team].coordinates.longitude;
      break;
    case "PWHL":
      code = team;
      location = PWHLArenaData[team].location;
      name = PWHLArenaData[team].name;
      coordinates.latitude = PWHLArenaData[team].coordinates.latitude;
      coordinates.longitude = PWHLArenaData[team].coordinates.longitude;
      break;
    case "MLS":
      code = team;
      location = MLSStadiumData[team].location;
      name = MLSStadiumData[team].name;
      coordinates.latitude = MLSStadiumData[team].coordinates.latitude;
      coordinates.longitude = MLSStadiumData[team].coordinates.longitude;
      break;
  }

  return {
    code,
    coordinates,
    location,
    name,
  }
}