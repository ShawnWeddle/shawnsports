import { type MLBTeamType } from "./MLBdata";

type MLBcoType = {
  latitude: number,
  longitude: number
}

export const MLBstadiumCoordinates: { [Key in MLBTeamType] : MLBcoType} = {
  ARI: {latitude: 33.445, longitude: -112.067},
  ATL: {latitude: 33.890, longitude: -84.468},
  BAL: {latitude: 39.284, longitude: -76.622},
  BOS: {latitude: 42.346, longitude: -71.098},
  CHC: {latitude: 41.948, longitude: -87.656},
  CHW: {latitude: 41.830, longitude: -87.634},
  CIN: {latitude: 39.097, longitude: -84.507},
  CLE: {latitude: 41.496, longitude: -81.685},
  COL: {latitude: 39.756, longitude: -104.994},
  DET: {latitude: 42.339, longitude: -83.049},
  HOU: {latitude: 29.757, longitude: -95.356},
  KCR: {latitude: 39.051, longitude: -94.48},
  LAA: {latitude: 33.800, longitude: -117.883},
  LAD: {latitude: 34.074, longitude: -118.240},
  MIA: {latitude: 25.778, longitude: -80.220},
  MIL: {latitude: 43.028, longitude: -87.971},
  MIN: {latitude: 44.982, longitude: -93.278},
  NYM: {latitude: 40.757, longitude: -73.846},
  NYY: {latitude: 40.829, longitude: -73.926},
  OAK: {latitude: 38.580, longitude: -121.513},
  PHI: {latitude: 39.906, longitude: -75.166},
  PIT: {latitude: 40.447, longitude: -80.006},
  SDP: {latitude: 32.707, longitude: -117.157},
  SEA: {latitude: 47.591, longitude: -122.333},
  SFG: {latitude: 37.779, longitude: -122.389},
  STL: {latitude: 38.623, longitude: -90.193},
  TBR: {latitude: 27.768, longitude: -82.653},
  TEX: {latitude: 32.747, longitude: -97.084},
  TOR: {latitude: 43.641, longitude: -79.389},
  WSN: {latitude: 38.873, longitude: -77.007},
}