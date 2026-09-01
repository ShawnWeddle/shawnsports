import type { TeamInfoType } from "~/types/MapTypes";
import type { MLSTeamType, USLTeamType } from "./MLSdata";

export const MLSStadiumData: {[Key in MLSTeamType] : TeamInfoType} = {
    "ATL": {
        "coordinates": {
            "latitude": 33.755,
            "longitude": -84.401
        },
        "location": "Atlanta",
        "name": "United",
        "reverse": false
    },
    "ATX": {
        "coordinates": {
            "latitude": 30.388,
            "longitude": -97.72
        },
        "location": "Austin",
        "name": "FC",
        "reverse": false
    },
    "CLT": {
        "coordinates": {
            "latitude": 35.226,
            "longitude": -80.853
        },
        "location": "Charlotte",
        "name": "FC",
        "reverse": false
    },
    "CHI": {
        "coordinates": {
            "latitude": 41.862,
            "longitude": -87.617
        },
        "location": "Chicago",
        "name": "Fire",
        "reverse": false
    },
    "COL": {
        "coordinates": {
            "latitude": 39.806,
            "longitude": -104.892
        },
        "location": "Colorado",
        "name": "Rapids",
        "reverse": false
    },
    "CLB": {
        "coordinates": {
            "latitude": 39.968,
            "longitude": -83.017
        },
        "location": "Columbus",
        "name": "Crew SC",
        "reverse": false
    },
    "DCU": {
        "coordinates": {
            "latitude": 38.868,
            "longitude": -77.012
        },
        "location": "D.C.",
        "name": "United",
        "reverse": false
    },
    "CIN": {
        "coordinates": {
            "latitude": 39.111,
            "longitude": -84.522
        },
        "location": "Cincinnati",
        "name": "FC",
        "reverse": true
    },
    "DAL": {
        "coordinates": {
            "latitude": 33.154,
            "longitude": -96.835
        },
        "location": "Dallas",
        "name": "FC ",
        "reverse": true
    },
    "HOU": {
        "coordinates": {
            "latitude": 29.752,
            "longitude": -95.352
        },
        "location": "Houston",
        "name": "Dynamo",
        "reverse": false
    },
    "MIA": {
        "coordinates": {
            "latitude": 26.193,
            "longitude": -80.161
        },
        "location": "Miami",
        "name": "Inter",
        "reverse": true
    },
    "LAF": {
        "coordinates": {
            "latitude": 34.013,
            "longitude": -118.285
        },
        "location": "Los Angeles",
        "name": "FC",
        "reverse": false
    },
    "LAG": {
        "coordinates": {
            "latitude": 33.864,
            "longitude": -118.261
        },
        "location": "Los Angeles",
        "name": "Galaxy",
        "reverse": false
    },
    "MIN": {
        "coordinates": {
            "latitude": 44.953,
            "longitude": -93.165
        },
        "location": "Minnesota",
        "name": "United FC",
        "reverse": false
    },
    "MTL": {
        "coordinates": {
            "latitude": 45.563,
            "longitude": -73.552
        },
        "location": "Montreal",
        "name": "CF",
        "reverse": true
    },
    "NSH": {
        "coordinates": {
            "latitude": 36.166,
            "longitude": -86.771
        },
        "location": "Nashville",
        "name": "SC",
        "reverse": false
    },
    "NER": {
        "coordinates": {
            "latitude": 42.091,
            "longitude": -71.264
        },
        "location": "New England",
        "name": "Revolution",
        "reverse": false
    },
    "NYC": {
        "coordinates": {
            "latitude": 40.829,
            "longitude": -73.926
        },
        "location": "New York City",
        "name": "FC",
        "reverse": false
    },
    "NYR": {
        "coordinates": {
            "latitude": 40.737,
            "longitude": -74.15
        },
        "location": "New York",
        "name": "Red Bulls",
        "reverse": false
    },
    "ORL": {
        "coordinates": {
            "latitude": 28.624,
            "longitude": -81.389
        },
        "location": "Orlando City",
        "name": "SC",
        "reverse": false
    },
    "PHI": {
        "coordinates": {
            "latitude": 39.833,
            "longitude": -75.379
        },
        "location": "Philadelphia",
        "name": "Union",
        "reverse": false
    },
    "POR": {
        "coordinates": {
            "latitude": 45.521,
            "longitude": -122.692
        },
        "location": "Portland",
        "name": "Timbers",
        "reverse": false
    },
    "RSL": {
        "coordinates": {
            "latitude": 40.583,
            "longitude": -111.893
        },
        "location": "Salt Lake",
        "name": "Real",
        "reverse": true
    },
    "SJE": {
        "coordinates": {
            "latitude": 37.351,
            "longitude": -121.925
        },
        "location": "San Jose",
        "name": "Earthquakes",
        "reverse": false
    },
    "SEA": {
        "coordinates": {
            "latitude": 47.595,
            "longitude": -122.332
        },
        "location": "Seattle",
        "name": "Sounders",
        "reverse": false
    },
    "SDF": {
        "coordinates": {
            "latitude": 32.784,
            "longitude": -117.123
        },
        "location": "San Diego",
        "name": "FC",
        "reverse": false
    },
    "SKC": {
        "coordinates": {
            "latitude": 39.122,
            "longitude": -94.824
        },
        "location": "Kansas City",
        "name": "Sporting",
        "reverse": true
    },
    "STL": {
        "coordinates": {
            "latitude": 38.631,
            "longitude": -90.21
        },
        "location": "St Louis",
        "name": "City SC",
        "reverse": false
    },
    "TOR": {
        "coordinates": {
            "latitude": 43.633,
            "longitude": -79.419
        },
        "location": "Toronto",
        "name": "FC",
        "reverse": false
    },
    "VAN": {
        "coordinates": {
            "latitude": 49.277,
            "longitude": -123.112
        },
        "location": "Vancouver",
        "name": "Whitecaps",
        "reverse": false
    }
}

export const USLStadiumData: {[Key in USLTeamType] : TeamInfoType} = {
  BHM: {
    coordinates: {
      latitude: 33.528,
      longitude: -86.809,
    },
    location: "Birmingham",
    name: "Legion FC",
  },
  BKN: {
    coordinates: {
      latitude: 40.574,
      longitude: -73.984,
    },
    location: "Brooklyn",
    name: "FC",
  },
  CHS: {
    coordinates: {
      latitude: 32.795,
      longitude: -79.903,
    },
    location: "Charleston",
    name: "FC",
  },
  CSS: {
    coordinates: {
      latitude: 38.826,
      longitude: -104.828,
    },
    location: "Colorado Springs",
    name: "Switchbacks FC",
  },
  DET: {
    coordinates: {
      latitude: 42.392,
      longitude: -83.049,
    },
    location: "Detroit",
    name: "City FC",
  },
  EPL: {
    coordinates: {
      latitude: 31.759,
      longitude: -106.493,
    },
    location: "El Paso",
    name: "Locomotive FC",
  },
  HAR: {
    coordinates: {
      latitude: 41.754,
      longitude: -72.661,
    },
    location: "Hartford",
    name: "Athletic",
  },
  IND: {
    coordinates: {
      latitude: 39.771,
      longitude: -86.178,
    },
    location: "Indy",
    name: "Eleven",
  },
  JAX: {
    coordinates: {
      latitude: 30.275,
      longitude: -81.512,
    },
    location: "Jacksonville",
    name: "Sporting Club",
    reverse: true,
  },
  LDN: {
    coordinates: {
      latitude: 39.069,
      longitude: -77.546,
    },
    location: "Loudoun",
    name: "United FC",
  },
  LEX: {
    coordinates: {
      latitude: 37.960,
      longitude: -84.392,
    },
    location: "Lexington",
    name: "SC",
  },
  LOU: {
    coordinates: {
      latitude: 38.259,
      longitude: -85.733,
    },
    location: "Louisville",
    name: "City FC",
  },
  LVL: {
    coordinates: {
      latitude: 36.180,
      longitude: -115.130,
    },
    location: "Las Vegas",
    name: "Lights FC",
  },
  MIA: {
    coordinates: {
      latitude: 25.752,
      longitude: -80.378,
    },
    location: "Miami",
    name: "FC",
  },
  MRY: {
    coordinates: {
      latitude: 36.651,
      longitude: -121.805,
    },
    location: "Monterey Bay",
    name: "FC",
  },
  NMU: {
    coordinates: {
      latitude: 35.070,
      longitude: -106.629,
    },
    location: "New Mexico",
    name: "United",
  },
  OAK: {
    coordinates: {
      latitude: 37.751,
      longitude: -122.201,
    },
    location: "Oakland",
    name: "Roots FC",
  },
  OCS: {
    coordinates: {
      latitude: 33.674,
      longitude: -117.739,
    },
    location: "Orange County",
    name: "SC",
  },
  PHX: {
    coordinates: {
      latitude: 33.445,
      longitude: -112.002,
    },
    location: "Phoenix",
    name: "Rising FC",
  },
  PIT: {
    coordinates: {
      latitude: 40.436,
      longitude: -80.010,
    },
    location: "Pittsburgh",
    name: "Riverhounds SC",
  },
  RHO: {
    coordinates: {
      latitude: 41.869,
      longitude: -71.383,
    },
    location: "Rhode Island",
    name: "FC",
  },
  SAC: {
    coordinates: {
      latitude: 38.591,
      longitude: -121.438,
    },
    location: "Sacramento",
    name: "Republic FC",
  },
  SAN: {
    coordinates: {
      latitude: 29.539,
      longitude: -98.395,
    },
    location: "San Antonio",
    name: "FC",
  },
  TAM: {
    coordinates: {
      latitude: 27.768,
      longitude: -82.633,
    },
    location: "Tampa Bay",
    name: "Rowdies",
  },
  TUL:{
    coordinates: {
      latitude: 36.160,
      longitude: -95.988,
    },
    location: "Tulsa",
    name: "FC",
    reverse: true,
  },
};