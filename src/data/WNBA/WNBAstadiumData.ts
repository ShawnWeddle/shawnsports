import { type WNBATeamType } from "./WNBAdata";


export const WNBAstadiumCoordinates: { [Key in WNBATeamType] : { latitude: number, longitude: number }} = {
  ATL: { latitude: 33.647, longitude: -84.460}, 
  CHI: { latitude: 41.854, longitude: -87.621}, 
  CON: { latitude: 41.491, longitude: -72.090},
  DAL: { latitude: 32.731, longitude: -97.108}, 
  GSV: { latitude: 37.768, longitude: -122.387}, 
  IND: { latitude: 39.764, longitude: -86.155},  
  LAS: { latitude: 34.043, longitude: -118.267}, 
  LVA: { latitude: 36.090, longitude: -115.179},
  MIN: { latitude: 44.980, longitude: -93.276}, 
  NYL: { latitude: 40.683, longitude: -73.975}, 
  PHO: { latitude: 33.446, longitude: -112.071}, 
  POR: { latitude: 45.532, longitude: -122.667}, 
  SEA: { latitude: 47.622, longitude: -122.354},
  TOR: { latitude: 43.636, longitude: -79.415}, 
  WAS: { latitude: 38.847, longitude: -76.991}, 
}