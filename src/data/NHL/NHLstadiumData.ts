import { type NHLTeamType } from "./NHLdata";
import { type TeamProperties } from "../universal/testData";
import { NHLteamData, nhlTeamsRanked } from "./NHLdata";

export const NHLstadiumCoordinates: { [Key in NHLTeamType] : { latitude: number, longitude: number }} = {
  ANA : {latitude: 33.808, longitude: -117.877},
  BOS : {latitude: 42.366, longitude: -71.062},
  BUF : {latitude: 42.875, longitude: -78.876},
  CAR : {latitude: 35.803, longitude: -78.722},
  CBJ : {latitude: 39.969, longitude: -83.006},
  CGY : {latitude: 51.037, longitude: -114.052},
  CHI : {latitude: 41.881, longitude: -87.674},
  COL : {latitude: 39.749, longitude: -105.008},
  DAL : {latitude: 32.791, longitude: -96.81},
  DET : {latitude: 42.341, longitude: -83.055},
  EDM : {latitude: 53.547, longitude: -113.498},
  FLA : {latitude: 26.158, longitude: -80.326},
  LAK : {latitude: 34.043, longitude: -118.268},
  MIN : {latitude: 44.945, longitude: -93.101},
  MTL : {latitude: 45.496, longitude: -73.569},
  NJD : {latitude: 40.734, longitude: -74.171},
  NSH : {latitude: 36.159, longitude: -86.779},
  NYI : {latitude: 40.712, longitude: -73.727},
  NYR : {latitude: 40.751, longitude: -73.994},
  OTT : {latitude: 45.297, longitude: -75.927},
  PHI : {latitude: 39.901, longitude: -75.172},
  PIT : {latitude: 40.439, longitude: -79.989},
  SEA : {latitude: 47.622, longitude: -122.354},
  SJS : {latitude: 37.333, longitude: -121.901},
  STL : {latitude: 38.627, longitude: -90.203},
  TBL : {latitude: 27.943, longitude: -82.452},
  TOR : {latitude: 43.643, longitude: -79.379},
  UTA : {latitude: 40.768, longitude: -111.902},
  VAN : {latitude: 49.278, longitude: -123.109},
  VEG : {latitude: 36.103, longitude: -115.178},
  WAS : {latitude: 38.898, longitude: -77.021},
  WIN : {latitude: 49.893, longitude: -97.144},
};

export const nhlStadiumClusterPoints: GeoJSON.Feature<GeoJSON.Point, TeamProperties>[] = nhlTeamsRanked.map((team) => {
  const { latitude, longitude } = NHLstadiumCoordinates[team];
  const { location, name } = NHLteamData[team];
  return {
    type: "Feature",
    geometry: { type: "Point", coordinates: [ longitude, latitude ]},
    properties: { location, name }
  }
})