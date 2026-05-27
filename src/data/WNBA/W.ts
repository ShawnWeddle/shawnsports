import { type WNBATeamType } from "./WNBAdata";

export type WNBAinfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  tier: "WNBA";
  parentTeam: WNBATeamType;
};

export const wnbaList: WNBAinfoType[] = [
  {
    coordinates: { latitude: 33.647, longitude: -84.46 },
    location: "Atlanta",
    name: "Dream",
    parentTeam: "ATL",
    tier: "WNBA"
  },{
    coordinates: { latitude: 41.854, longitude: -87.621 },
    location: "Chicago",
    name: "Sky",
    parentTeam: "CHI",
    tier: "WNBA"
  },{
    coordinates: { latitude: 41.491, longitude: -72.09 },
    location: "Connecticut",
    name: "Sun",
    parentTeam: "CON",
    tier: "WNBA"
  },{
    coordinates: { latitude: 32.731, longitude: -97.108 },
    location: "Dallas",
    name: "Wings",
    parentTeam: "DAL",
    tier: "WNBA"
  },{
    coordinates: { latitude: 37.768, longitude: -122.387 },
    location: "Golden State",
    name: "Valkyries",
    parentTeam: "GSV",
    tier: "WNBA"
  },{
    coordinates: { latitude: 39.764, longitude: -86.155 },
    location: "Indiana",
    name: "Fever",
    parentTeam: "IND",
    tier: "WNBA"
  },{
    coordinates: { latitude: 34.043, longitude: -118.267 },
    location: "Los Angeles",
    name: "Sparks",
    parentTeam: "LAS",
    tier: "WNBA"
  },{
    coordinates: { latitude: 36.09, longitude: -115.179 },
    location: "Las Vegas",
    name: "Aces",
    parentTeam: "LVA",
    tier: "WNBA"
  },{
    coordinates: { latitude: 44.98, longitude: -93.276 },
    location: "Minnesota",
    name: "Lynx",
    parentTeam: "MIN",
    tier: "WNBA"
  },{
    coordinates: { latitude: 40.683, longitude: -73.975 },
    location: "New York",
    name: "Liberty",
    parentTeam: "NYL",
    tier: "WNBA"
  },{
    coordinates: { latitude: 33.446, longitude: -112.071 },
    location: "Phoenix",
    name: "Mercury",
    parentTeam: "PHO",
    tier: "WNBA"
  },{
    coordinates: { latitude: 45.532, longitude: -122.667 },
    location: "Portland",
    name: "Fire",
    parentTeam: "POR",
    tier: "WNBA"
  },{
    coordinates: { latitude: 47.622, longitude: -122.354 },
    location: "Seattle",
    name: "Storm",
    parentTeam: "SEA",
    tier: "WNBA"
  },{
    coordinates: { latitude: 43.636, longitude: -79.415 },
    location: "Toronto",
    name: "Tempo",
    parentTeam: "TOR",
    tier: "WNBA"
  },{
    coordinates: { latitude: 38.847, longitude: -76.991 },
    location: "Washington",
    name: "Mystics",
    parentTeam: "WAS",
    tier: "WNBA"
  }

]