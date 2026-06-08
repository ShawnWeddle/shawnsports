import { type MLSTeamType } from "./MLSdata";

type MLScoType = {
  latitude: number,
  longitude: number
}

export const MLSstadiumCoordinates: { [Key in MLSTeamType] : MLScoType} = {
  ATL: {latitude: 33.755, longitude: -84.401},
  ATX: {latitude: 30.388, longitude: -97.72},
  CHI: {latitude: 41.862, longitude: -87.617},
  CIN: {latitude: 39.111, longitude: -84.522},
  CLB: {latitude: 39.968, longitude: -83.017},
  CLT: {latitude: 35.226, longitude: -80.853},
  COL: {latitude: 39.806, longitude: -104.892},
  DAL: {latitude: 33.154, longitude: -96.835},
  DCU: {latitude: 38.868, longitude: -77.012},
  HOU: {latitude: 29.752, longitude: -95.352},
  LAF: {latitude: 34.013, longitude: -118.285},
  LAG: {latitude: 33.864, longitude: -118.261},
  MIA: {latitude: 26.193, longitude: -80.161},
  MIN: {latitude: 44.953, longitude: -93.165},
  MTL: {latitude: 45.563, longitude: -73.552},
  NER: {latitude: 42.091, longitude: -71.264},
  NSH: {latitude: 36.166, longitude: -86.771},
  NYC: {latitude: 40.829, longitude: -73.926},
  NYR: {latitude: 40.737, longitude: -74.15},
  ORL: {latitude: 28.624, longitude: -81.389},
  PHI: {latitude: 39.833, longitude: -75.379},
  POR: {latitude: 45.521, longitude: -122.692},
  RSL: {latitude: 40.583, longitude: -111.893},
  SDF: {latitude: 32.784, longitude: -117.123},
  SEA: {latitude: 47.595, longitude: -122.332},
  SJE: {latitude: 37.351, longitude: -121.925},
  SKC: {latitude: 39.122, longitude: -94.824},
  STL: {latitude: 38.631, longitude: -90.21},
  TOR: {latitude: 43.633, longitude: -79.419},
  VAN: {latitude: 49.277, longitude: -123.112},
};