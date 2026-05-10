import { type NBATeamType } from "./NBAdata";

type NBAcoType = {
  latitude: number,
  longitude: number
}

export const NBAstadiumCoordinates: { [Key in NBATeamType] : NBAcoType} = {
  ATL: { latitude: 33.757, longitude: -84.396}, 
  BOS: { latitude: 42.367, longitude: -71.062}, 
  BRK: { latitude: 40.683, longitude: -73.975}, 
  CHI: { latitude: 41.881, longitude: -87.675}, 
  CHO: { latitude: 35.225, longitude: -80.839}, 
  CLE: { latitude: 41.496, longitude: -81.688}, 
  DAL: { latitude: 32.790, longitude: -96.810}, 
  DEN: { latitude: 39.748, longitude: -105.008}, 
  DET: { latitude: 42.342, longitude: -83.055}, 
  GSW: { latitude: 37.768, longitude: -122.387}, 
  HOU: { latitude: 29.751, longitude: -95.362}, 
  IND: { latitude: 39.764, longitude: -86.155}, 
  LAC: { latitude: 33.944, longitude: -118.342}, 
  LAL: { latitude: 34.043, longitude: -118.267}, 
  MEM: { latitude: 35.138, longitude: -90.050}, 
  MIA: { latitude: 25.781, longitude: -80.188}, 
  MIL: { latitude: 43.045, longitude: -87.918}, 
  MIN: { latitude: 44.980, longitude: -93.276}, 
  NYK: { latitude: 40.750, longitude: -73.994}, 
  NOP: { latitude: 29.949, longitude: -90.082}, 
  OKC: { latitude: 35.463, longitude: -97.515}, 
  ORL: { latitude: 28.539, longitude: -81.384}, 
  PHI: { latitude: 39.901, longitude: -75.171},
  PHO: { latitude: 33.446, longitude: -112.071}, 
  POR: { latitude: 45.532, longitude: -122.667}, 
  SAC: { latitude: 38.580, longitude: -121.499}, 
  SAS: { latitude: 29.427, longitude: -98.437}, 
  TOR: { latitude: 43.644, longitude: -79.379}, 
  UTA: { latitude: 40.768, longitude: -111.901}, 
  WAS: { latitude: 38.899, longitude: -77.021}, 
};