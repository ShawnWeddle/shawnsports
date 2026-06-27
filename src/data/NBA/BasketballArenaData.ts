import type { WNBATeamType } from "../WNBA/WNBAdata";
import type { NBATeamType, NGLTeamType } from "./NBAdata";
import type { TeamInfoType } from "~/types/MapTypes";

export const NBAArenaData: {[Key in NBATeamType] : TeamInfoType} = {
  "ATL": {
    coordinates: {
      latitude: 33.757,
      longitude: -84.396
    },
    location: "Atlanta",
    name: "Hawks",
  },
  "BOS": {
    coordinates: {
      latitude: 42.366,
      longitude: -71.062
    },
    location: "Boston",
    name: "Celtics",
  },
  "BRK": {
    coordinates: {
      latitude: 40.683,
      longitude: -73.975
    },
    location: "Brooklyn",
    name: "Nets",
  },
  "CHI": {
    coordinates: {
      latitude: 41.881,
      longitude: -87.674
    },
    location: "Chicago",
    name: "Bulls",
  },
  "CHO": {
    coordinates: {
      latitude: 35.225,
      longitude: -80.839
    },
    location: "Charlotte",
    name: "Hornets",
  },
  "CLE": {
    coordinates: {
      latitude: 41.496,
      longitude: -81.688
    },
    location: "Cleveland",
    name: "Cavaliers",
  },
  "DAL": {
    coordinates: {
      latitude: 32.79,
      longitude: -96.81
    },
    location: "Dallas",
    name: "Mavericks",
  },
  "DEN": {
    coordinates: {
      latitude: 39.749,
      longitude: -105.008
    },
    location: "Denver",
    name: "Nuggets",
  },
  "DET": {
    coordinates: {
      latitude: 42.341,
      longitude: -83.055
    },
    location: "Detroit",
    name: "Pistons",
  },
  "GSW": {
    coordinates: {
      latitude: 37.768,
      longitude: -122.387
    },
    location: "Golden State",
    name: "Warriors",
  },
  "HOU": {
    coordinates: {
      latitude: 29.751,
      longitude: -95.362
    },
    location: "Houston",
    name: "Rockets",
  },
  "IND": {
    coordinates: {
      latitude: 39.764,
      longitude: -86.155
    },
    location: "Indiana",
    name: "Pacers",
  },
  "LAC": {
    coordinates: {
      latitude: 33.944,
      longitude: -118.342
    },
    location: "Los Angeles",
    name: "Clippers",
  },
  "LAL": {
    coordinates: {
      latitude: 34.043,
      longitude: -118.267
    },
    location: "Los Angeles",
    name: "Lakers",
  },
  "MEM": {
    coordinates: {
      latitude: 35.138,
      longitude: -90.05
    },
    location: "Memphis",
    name: "Grizzlies",
  },
  "MIA": {
    coordinates: {
      latitude: 25.781,
      longitude: -80.188
    },
    location: "Miami",
    name: "Heat",
  },
  "MIL": {
    coordinates: {
      latitude: 43.045,
      longitude: -87.918
    },
    location: "Milwaukee",
    name: "Bucks",
  },
  "MIN": {
    coordinates: {
      latitude: 44.98,
      longitude: -93.276
    },
    location: "Minnesota",
    name: "Timberwolves",
  },
  "NOP": {
    coordinates: {
      latitude: 29.949,
      longitude: -90.082
    },
    location: "New Orleans",
    name: "Pelicans",
  },
  "NYK": {
    coordinates: {
      latitude: 40.751,
      longitude: -73.994
    },
    location: "New York",
    name: "Knicks",
  },
  "OKC": {
    coordinates: {
      latitude: 35.463,
      longitude: -97.515
    },
    location: "Oklahoma City",
    name: "Thunder",
  },
  "ORL": {
    coordinates: {
      latitude: 28.539,
      longitude: -81.384
    },
    location: "Orlando",
    name: "Magic",
  },
  "PHI": {
    coordinates: {
      latitude: 39.901,
      longitude: -75.172
    },
    location: "Philadelphia",
    name: "76ers",
  },
  "PHO": {
    coordinates: {
      latitude: 33.446,
      longitude: -112.071
    },
    location: "Phoenix",
    name: "Suns",
  },
  "POR": {
    coordinates: {
      latitude: 45.532,
      longitude: -122.667
    },
    location: "Portland",
    name: "Trailblazers",
  },
  "SAC": {
    coordinates: {
      latitude: 38.58,
      longitude: -121.499
    },
    location: "Sacramento",
    name: "Kings",
  },
  "SAS": {
    coordinates: {
      latitude: 29.427,
      longitude: -98.437
    },
    location: "San Antonio",
    name: "Spurs",
  },
  "TOR": {
    coordinates: {
      latitude: 43.643,
      longitude: -79.379
    },
    location: "Toronto",
    name: "Raptors",
  },
  "UTA": {
    coordinates: {
      latitude: 40.768,
      longitude: -111.901
    },
    location: "Utah",
    name: "Jazz",
  },
  "WAS": {
    coordinates: {
      latitude: 38.898,
      longitude: -77.021
    },
    location: "Washington",
    name: "Wizards",
  }
};

export const NGLArenaData: {[Key in NGLTeamType] : TeamInfoType} = {
  "NGL-ATL": {
    coordinates: {
      latitude: 33.647,
      longitude: -84.46
    },
    location: "College Park",
    name: "Skyhawks",
  },
  "NGL-BOS": {
    coordinates: {
      latitude: 43.656,
      longitude: -70.277
    },
    location: "Maine",
    name: "Celtics",
  },
  "NGL-BRK": {
    coordinates: {
      latitude: 40.723,
      longitude: -73.591
    },
    location: "Long Island",
    name: "Nets",
  },
  "NGL-CHI": {
    coordinates: {
      latitude: 42.069,
      longitude: -88.213
    },
    location: "Windy City",
    name: "Bulls",
  },
  "NGL-CHO": {
    coordinates: {
      latitude: 36.06,
      longitude: -79.826
    },
    location: "Greensboro",
    name: "Swarm",
  },
  "NGL-CLE": {
    coordinates: {
      latitude: 41.504,
      longitude: -81.693
    },
    location: "Cleveland",
    name: "Charge",
  },
  "NGL-DAL": {
    coordinates: {
      latitude: 33.1,
      longitude: -96.819
    },
    location: "Texas",
    name: "Legends",
  },
  "NGL-DEN": {
    coordinates: {
      latitude: 42.962,
      longitude: -85.672
    },
    location: "Grand Rapids",
    name: "Gold",
  },
  "NGL-DET": {
    coordinates: {
      latitude: 42.353,
      longitude: -83.077
    },
    location: "Motor City",
    name: "Cruise",
  },
  "NGL-GSW": {
    coordinates: {
      latitude: 36.968,
      longitude: -122.023
    },
    location: "Santa Cruz",
    name: "Warriors",
  },
  "NGL-HOU": {
    coordinates: {
      latitude: 26.256,
      longitude: -98.165
    },
    location: "Rio Grande Valley",
    name: "Vipers",
  },
  "NGL-IND": {
    coordinates: {
      latitude: 39.992,
      longitude: -85.912
    },
    location: "Noblesville",
    name: "Boom",
  },
  "NGL-LAC": {
    coordinates: {
      latitude: 33.207,
      longitude: -117.315
    },
    location: "San Diego",
    name: "Clippers",
  },
  "NGL-LAL": {
    coordinates: {
      latitude: 33.78,
      longitude: -116.34
    },
    location: "Coachella Valley",
    name: "Lakers",
  },
  "NGL-MEM": {
    coordinates: {
      latitude: 34.927,
      longitude: -89.996
    },
    location: "Memphis",
    name: "Hustle",
  },
  "NGL-MIA": {
    coordinates: {
      latitude: 43.592,
      longitude: -96.755
    },
    location: "Sioux Falls",
    name: "Skyforce",
  },
  "NGL-MIL": {
    coordinates: {
      latitude: 44.007,
      longitude: -88.537
    },
    location: "Wisconsin",
    name: "Herd",
  },
  "NGL-MIN": {
    coordinates: {
      latitude: 41.593,
      longitude: -93.621
    },
    location: "Iowa",
    name: "Wolves",
  },
  "NGL-NOP": {
    coordinates: {
      latitude: 30.039,
      longitude: -90.241
    },
    location: "Laketown",
    name: "Squadron",
  },
  "NGL-NYK": {
    coordinates: {
      latitude: 41.037,
      longitude: -73.779
    },
    location: "Westchester",
    name: "Knicks",
  },
  "NGL-OKC": {
    coordinates: {
      latitude: 35.463,
      longitude: -97.515
    },
    location: "Oklahoma City",
    name: "Blue",
  },
  "NGL-ORL": {
    coordinates: {
      latitude: 28.299,
      longitude: -81.369
    },
    location: "Osceola",
    name: "Magic",
  },
  "NGL-PHI": {
    coordinates: {
      latitude: 39.728,
      longitude: -75.554
    },
    location: "Delaware",
    name: "Blue Coats",
  },
  "NGL-PHO": {
    coordinates: {
      latitude: 33.427,
      longitude: -111.928
    },
    location: "Valley",
    name: "Suns",
  },
  "NGL-POR": {
    coordinates: {
      latitude: 45.575,
      longitude: -122.729
    },
    location: "Rip City",
    name: "Remix",
  },
  "NGL-SAC": {
    coordinates: {
      latitude: 37.956,
      longitude: -121.296
    },
    location: "Stockton",
    name: "Kings",
  },
  "NGL-SAS": {
    coordinates: {
      latitude: 30.541,
      longitude: -97.82
    },
    location: "Austin",
    name: "Spurs",
  },
  "NGL-TOR": {
    coordinates: {
      latitude: 43.632,
      longitude: -79.654
    },
    location: "Raptors",
    name: "905",
  },
  "NGL-UTA": {
    coordinates: {
      latitude: 40.703,
      longitude: -111.95
    },
    location: "Salt Lake City",
    name: "Stars",
  },
  "NGL-WAS": {
    coordinates: {
      latitude: 38.847,
      longitude: -76.991
    },
    location: "Capital City",
    name: "Go-Go",
  },
  "MEX": {
    coordinates: { 
      latitude: 19.498, 
      longitude: -99.175 
    },
    location: "Mexico City",
    name: "Capitanes",
  },
};

export const WNBAArenaData: {[Key in WNBATeamType] : TeamInfoType} ={
  ATL: {
    coordinates: {
      latitude: 33.647,
      longitude: -84.46
    },
     location: "Atlanta",
     name: "Dream"
  },
  CHI: {
    coordinates: {
      latitude: 41.854,
      longitude: -87.621
    },
     location: "Chicago",
     name: "Sky"
  },
  CON: {
    coordinates: {
      latitude: 41.491,
      longitude: -72.09
    },
     location: "Connecticut",
     name: "Sun"
  },
  DAL: {
    coordinates: {
      latitude: 32.731,
      longitude: -97.108
    },
     location: "Dallas",
     name: "Wings"
  },
  GSV: {
    coordinates: {
      latitude: 37.768,
      longitude: -122.387
    },
     location: "Golden State",
     name: "Valkyries"
  },
  IND: {
    coordinates: {
      latitude: 39.764,
      longitude: -86.155
    },
     location: "Indiana",
     name: "Fever"
  },
  LAS: {
    coordinates: {
      latitude: 34.043,
      longitude: -118.267
    },
     location: "Los Angeles",
     name: "Sparks"
  },
  LVA: {
    coordinates: {
      latitude: 36.09,
      longitude: -115.179
    },
     location: "Las Vegas",
     name: "Aces"
  },
  MIN: {
    coordinates: {
      latitude: 44.98,
      longitude: -93.276
    },
     location: "Minnesota",
     name: "Lynx"
  },
  NYL: {
    coordinates: {
      latitude: 40.683,
      longitude: -73.975
    },
     location: "New York",
     name: "Liberty"
  },
  PHO: {
    coordinates: {
      latitude: 33.446,
      longitude: -112.071
    },
     location: "Phoenix",
     name: "Mercury"
  },
  POR: {
    coordinates: {
      latitude: 45.532,
      longitude: -122.667
    },
     location: "Portland",
     name: "Fire"
  },
  SEA: {
    coordinates: {
      latitude: 47.622,
      longitude: -122.354
    },
     location: "Seattle",
     name: "Storm"
  },
  TOR: {
    coordinates: {
      latitude: 43.636,
      longitude: -79.415
    },
     location: "Toronto",
     name: "Tempo"
  },
  WAS: {
    coordinates: {
      latitude: 38.847,
      longitude: -76.991
    },
     location: "Washington",
     name: "Mystics"
  }
};