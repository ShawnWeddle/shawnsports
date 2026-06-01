import { type NBATeamType, type TierType } from "./NBAdata";

export type HockeyInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  parentTeam?: NBATeamType;
};

type NGLTeamType = NBATeamType | "MEX";
type NBACodeType = `${NGLTeamType}-${TierType}`

export const BasketballArenaData: {[Key in TierType]? : {[Key in NBACodeType]? : HockeyInfoType}} = {
  "NBA": {
    "ATL-NBA": {
      coordinates: {
        latitude: 33.757,
        longitude: -84.396
      },
      location: "Atlanta",
      name: "Hawks",
      parentTeam: "ATL"
    },
    "BOS-NBA": {
      coordinates: {
        latitude: 42.367,
        longitude: -71.062
      },
      location: "Boston",
      name: "Celtics",
      parentTeam: "BOS"
    },
    "BRK-NBA": {
      coordinates: {
        latitude: 40.683,
        longitude: -73.975
      },
      location: "Brooklyn",
      name: "Nets",
      parentTeam: "BRK"
    },
    "CHI-NBA": {
      coordinates: {
        latitude: 41.881,
        longitude: -87.675
      },
      location: "Chicago",
      name: "Bulls",
      parentTeam: "CHI"
    },
    "CHO-NBA": {
      coordinates: {
        latitude: 35.225,
        longitude: -80.839
      },
      location: "Charlotte",
      name: "Hornets",
      parentTeam: "CHO"
    },
    "CLE-NBA": {
      coordinates: {
        latitude: 41.496,
        longitude: -81.688
      },
      location: "Cleveland",
      name: "Cavaliers",
      parentTeam: "CLE"
    },
    "DAL-NBA": {
      coordinates: {
        latitude: 32.79,
        longitude: -96.81
      },
      location: "Dallas",
      name: "Mavericks",
      parentTeam: "DAL"
    },
    "DEN-NBA": {
      coordinates: {
        latitude: 39.748,
        longitude: -105.008
      },
      location: "Denver",
      name: "Nuggets",
      parentTeam: "DEN"
    },
    "DET-NBA": {
      coordinates: {
        latitude: 42.342,
        longitude: -83.055
      },
      location: "Detroit",
      name: "Pistons",
      parentTeam: "DET"
    },
    "GSW-NBA": {
      coordinates: {
        latitude: 37.768,
        longitude: -122.387
      },
      location: "Golden State",
      name: "Warriors",
      parentTeam: "GSW"
    },
    "HOU-NBA": {
      coordinates: {
        latitude: 29.751,
        longitude: -95.362
      },
      location: "Houston",
      name: "Rockets",
      parentTeam: "HOU"
    },
    "IND-NBA": {
      coordinates: {
        latitude: 39.764,
        longitude: -86.155
      },
      location: "Indiana",
      name: "Pacers",
      parentTeam: "IND"
    },
    "LAC-NBA": {
      coordinates: {
        latitude: 33.944,
        longitude: -118.342
      },
      location: "Los Angeles",
      name: "Clippers",
      parentTeam: "LAC"
    },
    "LAL-NBA": {
      coordinates: {
        latitude: 34.043,
        longitude: -118.267
      },
      location: "Los Angeles",
      name: "Lakers",
      parentTeam: "LAL"
    },
    "MEM-NBA": {
      coordinates: {
        latitude: 35.138,
        longitude: -90.05
      },
      location: "Memphis",
      name: "Grizzlies",
      parentTeam: "MEM"
    },
    "MIA-NBA": {
      coordinates: {
        latitude: 25.781,
        longitude: -80.188
      },
      location: "Miami",
      name: "Heat",
      parentTeam: "MIA"
    },
    "MIL-NBA": {
      coordinates: {
        latitude: 43.045,
        longitude: -87.918
      },
      location: "Milwaukee",
      name: "Bucks",
      parentTeam: "MIL"
    },
    "MIN-NBA": {
      coordinates: {
        latitude: 44.98,
        longitude: -93.276
      },
      location: "Minnesota",
      name: "Timberwolves",
      parentTeam: "MIN"
    },
    "NOP-NBA": {
      coordinates: {
        latitude: 29.949,
        longitude: -90.082
      },
      location: "New Orleans",
      name: "Pelicans",
      parentTeam: "NOP"
    },
    "NYK-NBA": {
      coordinates: {
        latitude: 40.75,
        longitude: -73.994
      },
      location: "New York",
      name: "Knicks",
      parentTeam: "NYK"
    },
    "OKC-NBA": {
      coordinates: {
        latitude: 35.463,
        longitude: -97.515
      },
      location: "Oklahoma City",
      name: "Thunder",
      parentTeam: "OKC"
    },
    "ORL-NBA": {
      coordinates: {
        latitude: 28.539,
        longitude: -81.384
      },
      location: "Orlando",
      name: "Magic",
      parentTeam: "ORL"
    },
    "PHI-NBA": {
      coordinates: {
        latitude: 39.901,
        longitude: -75.171
      },
      location: "Philadelphia",
      name: "76ers",
      parentTeam: "PHI"
    },
    "PHO-NBA": {
      coordinates: {
        latitude: 33.446,
        longitude: -112.071
      },
      location: "Phoenix",
      name: "Suns",
      parentTeam: "PHO"
    },
    "POR-NBA": {
      coordinates: {
        latitude: 45.532,
        longitude: -122.667
      },
      location: "Portland",
      name: "Trailblazers",
      parentTeam: "POR"
    },
    "SAC-NBA": {
      coordinates: {
        latitude: 38.58,
        longitude: -121.499
      },
      location: "Sacramento",
      name: "Kings",
      parentTeam: "SAC"
    },
    "SAS-NBA": {
      coordinates: {
        latitude: 29.427,
        longitude: -98.437
      },
      location: "San Antonio",
      name: "Spurs",
      parentTeam: "SAS"
    },
    "TOR-NBA": {
      coordinates: {
        latitude: 43.644,
        longitude: -79.379
      },
      location: "Toronto",
      name: "Raptors",
      parentTeam: "TOR"
    },
    "UTA-NBA": {
      coordinates: {
        latitude: 40.768,
        longitude: -111.901
      },
      location: "Utah",
      name: "Jazz",
      parentTeam: "UTA"
    },
    "WAS-NBA": {
      coordinates: {
        latitude: 38.899,
        longitude: -77.021
      },
      location: "Washington",
      name: "Wizards",
      parentTeam: "WAS"
        }
    },
  "NGL": {
    "ATL-NGL": {
      coordinates: {
        latitude: 33.647,
        longitude: -84.46
      },
      location: "College Park",
      name: "Skyhawks",
      parentTeam: "ATL"
    },
    "BOS-NGL": {
      coordinates: {
        latitude: 43.656,
        longitude: -70.277
      },
      location: "Maine",
      name: "Celtics",
      parentTeam: "BOS"
    },
    "BRK-NGL": {
      coordinates: {
        latitude: 40.723,
        longitude: -73.591
      },
      location: "Long Island",
      name: "Nets",
      parentTeam: "BRK"
    },
    "CHI-NGL": {
      coordinates: {
        latitude: 42.069,
        longitude: -88.213
      },
      location: "Windy City",
      name: "Bulls",
      parentTeam: "CHI"
    },
    "CHO-NGL": {
      coordinates: {
        latitude: 36.06,
        longitude: -79.826
      },
      location: "Greensboro",
      name: "Swarm",
      parentTeam: "CHO"
    },
    "CLE-NGL": {
      coordinates: {
        latitude: 41.504,
        longitude: -81.693
      },
      location: "Cleveland",
      name: "Charge",
      parentTeam: "CLE"
    },
    "DAL-NGL": {
      coordinates: {
        latitude: 33.1,
        longitude: -96.819
      },
      location: "Texas",
      name: "Legends",
      parentTeam: "DAL"
    },
    "DEN-NGL": {
      coordinates: {
        latitude: 42.962,
        longitude: -85.672
      },
      location: "Grand Rapids",
      name: "Gold",
      parentTeam: "DEN"
    },
    "DET-NGL": {
      coordinates: {
        latitude: 42.353,
        longitude: -83.077
      },
      location: "Motor City",
      name: "Cruise",
      parentTeam: "DET"
    },
    "GSW-NGL": {
      coordinates: {
        latitude: 36.968,
        longitude: -122.023
      },
      location: "Santa Cruz",
      name: "Warriors",
      parentTeam: "GSW"
    },
    "HOU-NGL": {
      coordinates: {
        latitude: 26.256,
        longitude: -98.165
      },
      location: "Rio Grande Valley",
      name: "Vipers",
      parentTeam: "HOU"
    },
    "IND-NGL": {
      coordinates: {
        latitude: 39.992,
        longitude: -85.912
      },
      location: "Noblesville",
      name: "Boom",
      parentTeam: "IND"
    },
    "LAC-NGL": {
      coordinates: {
        latitude: 33.207,
        longitude: -117.315
      },
      location: "San Diego",
      name: "Clippers",
      parentTeam: "LAC"
    },
    "LAL-NGL": {
      coordinates: {
        latitude: 33.78,
        longitude: -116.34
      },
      location: "Coachella Valley",
      name: "Lakers",
      parentTeam: "LAL"
    },
    "MEM-NGL": {
      coordinates: {
        latitude: 34.927,
        longitude: -89.996
      },
      location: "Memphis",
      name: "Hustle",
      parentTeam: "MEM"
    },
    "MIA-NGL": {
      coordinates: {
        latitude: 43.592,
        longitude: -96.755
      },
      location: "Sioux Falls",
      name: "Skyforce",
      parentTeam: "MIA"
    },
    "MIL-NGL": {
      coordinates: {
        latitude: 44.007,
        longitude: -88.537
      },
      location: "Wisconsin",
      name: "Herd",
      parentTeam: "MIL"
    },
    "MIN-NGL": {
      coordinates: {
        latitude: 41.593,
        longitude: -93.621
      },
      location: "Iowa",
      name: "Wolves",
      parentTeam: "MIN"
    },
    "NOP-NGL": {
      coordinates: {
        latitude: 30.039,
        longitude: -90.241
      },
      location: "Laketown",
      name: "Squadron",
      parentTeam: "NOP"
    },
    "NYK-NGL": {
      coordinates: {
        latitude: 41.037,
        longitude: -73.779
      },
      location: "Westchester",
      name: "Knicks",
      parentTeam: "NYK"
    },
    "OKC-NGL": {
      coordinates: {
        latitude: 35.463,
        longitude: -97.515
      },
      location: "Oklahoma City",
      name: "Blue",
      parentTeam: "OKC"
    },
    "ORL-NGL": {
      coordinates: {
        latitude: 28.299,
        longitude: -81.369
      },
      location: "Osceola",
      name: "Magic",
      parentTeam: "ORL"
    },
    "PHI-NGL": {
      coordinates: {
        latitude: 39.728,
        longitude: -75.554
      },
      location: "Delaware",
      name: "Blue Coats",
      parentTeam: "PHI"
    },
    "PHO-NGL": {
      coordinates: {
        latitude: 33.427,
        longitude: -111.928
      },
      location: "Valley",
      name: "Suns",
      parentTeam: "PHO"
    },
    "POR-NGL": {
      coordinates: {
        latitude: 45.575,
        longitude: -122.729
      },
      location: "Rip City",
      name: "Remix",
      parentTeam: "POR"
    },
    "SAC-NGL": {
      coordinates: {
        latitude: 37.956,
        longitude: -121.296
      },
      location: "Stockton",
      name: "Kings",
      parentTeam: "SAC"
    },
    "SAS-NGL": {
      coordinates: {
        latitude: 30.541,
        longitude: -97.82
      },
      location: "Austin",
      name: "Spurs",
      parentTeam: "SAS"
    },
    "TOR-NGL": {
      coordinates: {
        latitude: 43.632,
        longitude: -79.654
      },
      location: "Raptors",
      name: "905",
      parentTeam: "TOR"
    },
    "UTA-NGL": {
      coordinates: {
        latitude: 40.703,
        longitude: -111.95
      },
      location: "Salt Lake City",
      name: "Stars",
      parentTeam: "UTA"
    },
    "WAS-NGL": {
      coordinates: {
        latitude: 38.847,
        longitude: -76.991
      },
      location: "Capital City",
      name: "Go-Go",
      parentTeam: "WAS"
    },
    "MEX-NGL": {
      coordinates: { 
        latitude: 19.498, 
        longitude: -99.175 
      },
      location: "Mexico City",
      name: "Capitanes",
    },
  },
}
