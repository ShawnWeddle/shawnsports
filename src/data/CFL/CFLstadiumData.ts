import { type CFLTeamType } from "./CFLdata";
import { type TeamProperties } from "../universal/testData";
import { CFLteamData, cflTeamsRanked } from "./CFLdata";

export const CFLstadiumCoordinates: { [Key in CFLTeamType] : { latitude: number, longitude: number }} = {
  BCL : {latitude: 49.276, longitude: -123.112},
  CGY : {latitude: 51.070, longitude: -114.121},
  EDM : {latitude: 53.560, longitude: -113.476},
  HAM : {latitude: 43.252, longitude: -79.830},
  MTL : {latitude: 45.510, longitude: -73.581},
  OTT : {latitude: 45.398, longitude: -75.683},
  SSK : {latitude: 50.450, longitude: -104.633},
  TOR : {latitude: 43.633, longitude: -79.419},
  WPG : {latitude: 49.807, longitude: -97.142},
};

export const cflStadiumClusterPoints: GeoJSON.Feature<GeoJSON.Point, TeamProperties>[] = cflTeamsRanked.map((team) => {
  const { latitude, longitude } = CFLstadiumCoordinates[team];
  const { location, name } = CFLteamData[team];
  return {
    type: "Feature",
    geometry: { type: "Point", coordinates: [ longitude, latitude ]},
    properties: { location, name }
  }
})