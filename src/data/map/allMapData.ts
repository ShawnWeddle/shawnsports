import type { MapDataInputType } from "~/types/MapTypes";

import { NFLStadiumData, CFLStadiumData, IFLStadiumData, UFLStadiumData } from "../NFL/FootballStadiumData";
import { NBAArenaData, NGLArenaData, WNBAArenaData } from "../NBA/BasketballArenaData";
import { MLBFieldData, AAAFieldData, AAFieldData, HAFieldData, SAFieldData } from "../MLB/BaseballStadiumData";
import { NHLArenaData, AHLArenaData, ECHLArenaData, PWHLArenaData } from "../NHL/HockeyArenaData";

export const markerData = (input: MapDataInputType) => {
  const { league, team } = input;
  let code;
  const coordinates = { latitude: 0, longitude: 0 };

  switch(league){
    case "NFL":
      code = team;
      coordinates.latitude = NFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = NFLStadiumData[team].coordinates.longitude;
      break;
    case "CFL":
      code = team;
      coordinates.latitude = CFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = CFLStadiumData[team].coordinates.longitude;
      break;
    case "IFL":
      code = team;
      coordinates.latitude = IFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = IFLStadiumData[team].coordinates.longitude;
      break;
    case "UFL":
      code = team;
      coordinates.latitude = UFLStadiumData[team].coordinates.latitude;
      coordinates.longitude = UFLStadiumData[team].coordinates.longitude;
      break;
    case "NBA":
      code = team;
      coordinates.latitude = NBAArenaData[team].coordinates.latitude;
      coordinates.longitude = NBAArenaData[team].coordinates.longitude;
      break;
    case "WNBA":
      code = team;
      coordinates.latitude = WNBAArenaData[team].coordinates.latitude;
      coordinates.longitude = WNBAArenaData[team].coordinates.longitude;
      break;
    case "NGL":
      code = team;
      coordinates.latitude = NGLArenaData[team].coordinates.latitude;
      coordinates.longitude = NGLArenaData[team].coordinates.longitude;
      break;
    case "MLB":
      code = team;
      coordinates.latitude = MLBFieldData[team].coordinates.latitude;
      coordinates.longitude = MLBFieldData[team].coordinates.longitude;
      break;
    case "AAA":
      code = team;
      coordinates.latitude = AAAFieldData[team].coordinates.latitude;
      coordinates.longitude = AAAFieldData[team].coordinates.longitude;
      break;
    case "AA":
      code = team;
      coordinates.latitude = AAFieldData[team].coordinates.latitude;
      coordinates.longitude = AAFieldData[team].coordinates.longitude;
      break;
    case "HA":
      code = team;
      coordinates.latitude = HAFieldData[team].coordinates.latitude;
      coordinates.longitude = HAFieldData[team].coordinates.longitude;
      break;
    case "SA":
      code = team;
      coordinates.latitude = SAFieldData[team].coordinates.latitude;
      coordinates.longitude = SAFieldData[team].coordinates.longitude;
      break;
    case "NHL":
      code = team;
      coordinates.latitude = NHLArenaData[team].coordinates.latitude;
      coordinates.longitude = NHLArenaData[team].coordinates.longitude;
      break;
    case "AHL":
      code = team;
      coordinates.latitude = AHLArenaData[team].coordinates.latitude;
      coordinates.longitude = AHLArenaData[team].coordinates.longitude;
      break;
    case "ECHL":
      code = team;
      coordinates.latitude = ECHLArenaData[team].coordinates.latitude;
      coordinates.longitude = ECHLArenaData[team].coordinates.longitude;
      break;
    case "PWHL":
      code = team;
      coordinates.latitude = PWHLArenaData[team].coordinates.latitude;
      coordinates.longitude = PWHLArenaData[team].coordinates.longitude;
      break;
    case "MLS":
      code = team;
      break;
  }

  return {
    code,
    coordinates,
  }
}