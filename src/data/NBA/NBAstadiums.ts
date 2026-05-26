import { type NBATeamType } from "./NBAdata";

export type TierType =  "NBA" | "NGL";

export type NBAminorInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  tier: TierType;
  parentTeam: NBATeamType;
};

export const nbaMinorList: NBAminorInfoType[] = [
  {
    coordinates: { latitude: 33.757, longitude: -84.396 },
    location: "Atlanta",
    name: "Hawks",
    parentTeam: "ATL",
    tier: "NBA"
  },{
    coordinates: { latitude: 42.367, longitude: -71.062 },
    location: "Boston",
    name: "Celtics",
    parentTeam: "BOS",
    tier: "NBA"
  },{
    coordinates: { latitude: 40.683, longitude: -73.975 },
    location: "Brooklyn",
    name: "Nets",
    parentTeam: "BRK",
    tier: "NBA"
  },{
    coordinates: { latitude: 41.881, longitude: -87.675 },
    location: "Chicago",
    name: "Bulls",
    parentTeam: "CHI",
    tier: "NBA"
  },{
    coordinates: { latitude: 35.225, longitude: -80.839 },
    location: "Charlotte",
    name: "Hornets",
    parentTeam: "CHO",
    tier: "NBA"
  },{
    coordinates: { latitude: 41.496, longitude: -81.688 },
    location: "Cleveland",
    name: "Cavaliers",
    parentTeam: "CLE",
    tier: "NBA"
  },{
    coordinates: { latitude: 32.79, longitude: -96.81 },
    location: "Dallas",
    name: "Mavericks",
    parentTeam: "DAL",
    tier: "NBA"
  },{
    coordinates: { latitude: 39.748, longitude: -105.008 },
    location: "Denver",
    name: "Nuggets",
    parentTeam: "DEN",
    tier: "NBA"
  },{
    coordinates: { latitude: 42.342, longitude: -83.055 },
    location: "Detroit",
    name: "Pistons",
    parentTeam: "DET",
    tier: "NBA"
  },{
    coordinates: { latitude: 37.768, longitude: -122.387 },
    location: "Golden State",
    name: "Warriors",
    parentTeam: "GSW",
    tier: "NBA"
  },{
    coordinates: { latitude: 29.751, longitude: -95.362 },
    location: "Houston",
    name: "Rockets",
    parentTeam: "HOU",
    tier: "NBA"
  },{
    coordinates: { latitude: 39.764, longitude: -86.155 },
    location: "Indiana",
    name: "Pacers",
    parentTeam: "IND",
    tier: "NBA"
  },{
    coordinates: { latitude: 33.944, longitude: -118.342 },
    location: "Los Angeles",
    name: "Clippers",
    parentTeam: "LAC",
    tier: "NBA"
  },{
    coordinates: { latitude: 34.043, longitude: -118.267 },
    location: "Los Angeles",
    name: "Lakers",
    parentTeam: "LAL",
    tier: "NBA"
  },{
    coordinates: { latitude: 35.138, longitude: -90.05 },
    location: "Memphis",
    name: "Grizzlies",
    parentTeam: "MEM",
    tier: "NBA"
  },{
    coordinates: { latitude: 25.781, longitude: -80.188 },
    location: "Miami",
    name: "Heat",
    parentTeam: "MIA",
    tier: "NBA"
  },{
    coordinates: { latitude: 43.045, longitude: -87.918 },
    location: "Milwaukee",
    name: "Bucks",
    parentTeam: "MIL",
    tier: "NBA"
  },{
    coordinates: { latitude: 44.98, longitude: -93.276 },
    location: "Minnesota",
    name: "Timberwolves",
    parentTeam: "MIN",
    tier: "NBA"
  },{
    coordinates: { latitude: 29.949, longitude: -90.082 },
    location: "New Orleans",
    name: "Pelicans",
    parentTeam: "NOP",
    tier: "NBA"
  },{
    coordinates: { latitude: 40.75, longitude: -73.994 },
    location: "New York",
    name: "Knicks",
    parentTeam: "NYK",
    tier: "NBA"
  },{
    coordinates: { latitude: 35.463, longitude: -97.515 },
    location: "Oklahoma City",
    name: "Thunder",
    parentTeam: "OKC",
    tier: "NBA"
  },{
    coordinates: { latitude: 28.539, longitude: -81.384 },
    location: "Orlando",
    name: "Magic",
    parentTeam: "ORL",
    tier: "NBA"
  },{
    coordinates: { latitude: 39.901, longitude: -75.171 },
    location: "Philadelphia",
    name: "76ers",
    parentTeam: "PHI",
    tier: "NBA"
  },{
    coordinates: { latitude: 33.446, longitude: -112.071 },
    location: "Phoenix",
    name: "Suns",
    parentTeam: "PHO",
    tier: "NBA"
  },{
    coordinates: { latitude: 45.532, longitude: -122.667 },
    location: "Portland",
    name: "Trailblazers",
    parentTeam: "POR",
    tier: "NBA"
  },{
    coordinates: { latitude: 38.58, longitude: -121.499 },
    location: "Sacramento",
    name: "Kings",
    parentTeam: "SAC",
    tier: "NBA"
  },{
    coordinates: { latitude: 29.427, longitude: -98.437 },
    location: "San Antonio",
    name: "Spurs",
    parentTeam: "SAS",
    tier: "NBA"
  },{
    coordinates: { latitude: 43.644, longitude: -79.379 },
    location: "Toronto",
    name: "Raptors",
    parentTeam: "TOR",
    tier: "NBA"
  },{
    coordinates: { latitude: 40.768, longitude: -111.901 },
    location: "Utah",
    name: "Jazz",
    parentTeam: "UTA",
    tier: "NBA"
  },{
    coordinates: { latitude: 38.899, longitude: -77.021 },
    location: "Washington",
    name: "Wizards",
    parentTeam: "WAS",
    tier: "NBA"
  },{
    coordinates: { latitude: 33.647, longitude: -84.460 },
    location: "College Park",
    name: "Skyhawks",
    parentTeam: "ATL",
    tier: "NGL",
  },{
    coordinates: { latitude: 43.656, longitude: -70.277 },
    location: "Maine",
    name: "Celtics",
    parentTeam: "BOS",
    tier: "NGL",
  },{
    coordinates: { latitude: 40.723, longitude: -73.591 },
    location: "Long Island",
    name: "Nets",
    parentTeam: "BRK",
    tier: "NGL",
  },{
    coordinates: { latitude: 42.069, longitude: -88.213 },
    location: "Windy City",
    name: "Bulls",
    parentTeam: "CHI",
    tier: "NGL",
  },{
    coordinates: { latitude: 36.060, longitude: -79.826 },
    location: "Greensboro",
    name: "Swarm",
    parentTeam: "CHO",
    tier: "NGL",
  },{
    coordinates: { latitude: 41.504, longitude: -81.693 },
    location: "Cleveland",
    name: "Charge",
    parentTeam: "CLE",
    tier: "NGL",
  },{
    coordinates: { latitude: 33.100, longitude: -96.819 },
    location: "Texas",
    name: "Legends",
    parentTeam: "DAL",
    tier: "NGL",
  },{
    coordinates: { latitude: 42.962, longitude: -85.672 },
    location: "Grand Rapids",
    name: "Gold",
    parentTeam: "DEN",
    tier: "NGL",
  },{
    coordinates: { latitude: 42.353, longitude: -83.077 },
    location: "Motor City",
    name: "Cruise",
    parentTeam: "DET",
    tier: "NGL",
  },{
    coordinates: { latitude: 36.968, longitude: -122.023 },
    location: "Santa Cruz",
    name: "Warriors",
    parentTeam: "GSW",
    tier: "NGL",
  },{
    coordinates: { latitude: 26.256, longitude: -98.165 },
    location: "Rio Grande Valley",
    name: "Vipers",
    parentTeam: "HOU",
    tier: "NGL",
  },{
    coordinates: { latitude: 39.992, longitude: -85.912 },
    location: "Noblesville",
    name: "Boom",
    parentTeam: "IND",
    tier: "NGL",
  },{
    coordinates: { latitude: 33.207, longitude: -117.315 },
    location: "San Diego",
    name: "Clippers",
    parentTeam: "LAC",
    tier: "NGL",
  },{
    coordinates: { latitude: 33.780, longitude: -116.340 },
    location: "Coachella Valley",
    name: "Lakers",
    parentTeam: "LAL",
    tier: "NGL",
  },{
    coordinates: { latitude: 34.927, longitude: -89.996 },
    location: "Memphis",
    name: "Hustle",
    parentTeam: "MEM",
    tier: "NGL",
  },{
    coordinates: { latitude: 43.592, longitude: -96.755 },
    location: "Sioux Falls",
    name: "Skyforce",
    parentTeam: "MIA",
    tier: "NGL",
  },{
    coordinates: { latitude: 44.007, longitude: -88.537 },
    location: "Wisconsin",
    name: "Herd",
    parentTeam: "MIL",
    tier: "NGL",
  },{
    coordinates: { latitude: 41.593, longitude: -93.621 },
    location: "Iowa",
    name: "Wolves",
    parentTeam: "MIN",
    tier: "NGL",
  },{
    coordinates: { latitude: 30.039, longitude: -90.241 },
    location: "Laketown",
    name: "Squadron",
    parentTeam: "NOP",
    tier: "NGL",
  },{
    coordinates: { latitude: 41.037, longitude: -73.779 },
    location: "Westchester",
    name: "Knicks",
    parentTeam: "NYK",
    tier: "NGL",
  },{
    coordinates: { latitude: 35.463, longitude: -97.515 },
    location: "Oklahoma City",
    name: "Blue",
    parentTeam: "OKC",
    tier: "NGL",
  },{
    coordinates: { latitude: 28.299, longitude: -81.369 },
    location: "Osceola",
    name: "Magic",
    parentTeam: "ORL",
    tier: "NGL",
  },{
    coordinates: { latitude: 39.728, longitude: -75.554 },
    location: "Delaware",
    name: "Blue Coats",
    parentTeam: "PHI",
    tier: "NGL",
  },{
    coordinates: { latitude: 33.427, longitude: -111.928 },
    location: "Valley",
    name: "Suns",
    parentTeam: "PHO",
    tier: "NGL",
  },{
    coordinates: { latitude: 45.575, longitude: -122.729 },
    location: "Rip City",
    name: "Remix",
    parentTeam: "POR",
    tier: "NGL",
  },{
    coordinates: { latitude: 37.956, longitude: -121.296 },
    location: "Stockton",
    name: "Kings",
    parentTeam: "SAC",
    tier: "NGL",
  },{
    coordinates: { latitude: 30.541, longitude: -97.820 },
    location: "Austin",
    name: "Spurs",
    parentTeam: "SAS",
    tier: "NGL",
  },{
    coordinates: { latitude: 43.632, longitude: -79.654 },
    location: "Raptors",
    name: "905",
    parentTeam: "TOR",
    tier: "NGL",
  },{
    coordinates: { latitude: 40.703, longitude: -111.950 },
    location: "Salt Lake City",
    name: "Stars",
    parentTeam: "UTA",
    tier: "NGL",
  },{
    coordinates: { latitude: 38.847, longitude: -76.991 },
    location: "Capital City",
    name: "Go-Go",
    parentTeam: "WAS",
    tier: "NGL",
  },{
    coordinates: { latitude: 19.498, longitude: -99.175 },
    location: "Mexico City",
    name: "Capitanes",
    parentTeam: "IND",
    tier: "NGL",
  },
];