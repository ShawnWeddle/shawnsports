import type {  NHLTeamType, PWHLTeamType, AHLTeamType, ECHLTeamType } from "./NHLdata";
import { type TeamInfoType } from "~/types/MapTypes";

export const NHLArenaData: {[Key in NHLTeamType] : TeamInfoType} = {
    "ANA": {
        coordinates: {
          latitude: 33.808,
          longitude: -117.877
        },
        location: "Anaheim",
        name: "Ducks",
    },
    "BOS": {
        coordinates: {
          latitude: 42.366,
          longitude: -71.062
        },
        location: "Boston",
        name: "Bruins",
    },
    "BUF": {
        coordinates: {
          latitude: 42.875,
          longitude: -78.876
        },
        location: "Buffalo",
        name: "Sabres",
    },
    "CAR": {
        coordinates: {
          latitude: 35.803,
          longitude: -78.722
        },
        location: "Carolina",
        name: "Hurricanes",
    },
    "CBJ": {
        coordinates: {
          latitude: 39.969,
          longitude: -83.006
        },
        location: "Columbus",
        name: "Blue Jackets",
    },
    "CGY": {
        coordinates: {
          latitude: 51.037,
          longitude: -114.052
        },
        location: "Calgary",
        name: "Flames",
    },
    "CHI": {
        coordinates: {
          latitude: 41.881,
          longitude: -87.674
        },
        location: "Chicago",
        name: "Blackhawks",
    },
    "COL": {
        coordinates: {
          latitude: 39.749,
          longitude: -105.008
        },
        location: "Colorado",
        name: "Avalanche",
    },
    "DAL": {
        coordinates: {
          latitude: 32.790,
          longitude: -96.810
        },
        location: "Dallas",
        name: "Stars",
    },
    "DET": {
        coordinates: {
          latitude: 42.341,
          longitude: -83.055
        },
        location: "Detroit",
        name: "Red Wings",
    },
    "EDM": {
        coordinates: {
          latitude: 53.547,
          longitude: -113.498
        },
        location: "Edmonton",
        name: "Oilers",
    },
    "FLA": {
        coordinates: {
          latitude: 26.158,
          longitude: -80.326
        },
        location: "Florida",
        name: "Panthers",
    },
    "LAK": {
        coordinates: {
          latitude: 34.043,
          longitude: -118.267
        },
        location: "Los Angeles",
        name: "Kings",
    },
    "MIN": {
        coordinates: {
          latitude: 44.945,
          longitude: -93.101
        },
        location: "Minnesota",
        name: "Wild",
    },
    "MTL": {
        coordinates: {
          latitude: 45.496,
          longitude: -73.569
        },
        location: "Montreal",
        name: "Canadiens",
    },
    "NJD": {
        coordinates: {
          latitude: 40.734,
          longitude: -74.171
        },
        location: "New Jersey",
        name: "Devils",
    },
    "NSH": {
        coordinates: {
          latitude: 36.159,
          longitude: -86.779
        },
        location: "Nashville",
        name: "Predators",
    },
    "NYI": {
        coordinates: {
          latitude: 40.712,
          longitude: -73.727
        },
        location: "New York",
        name: "Islanders",
    },
    "NYR": {
        coordinates: {
          latitude: 40.751,
          longitude: -73.994
        },
        location: "New York",
        name: "Rangers",
    },
    "OTT": {
        coordinates: {
          latitude: 45.297,
          longitude: -75.927
        },
        location: "Ottawa",
        name: "Senators",
    },
    "PHI": {
        coordinates: {
          latitude: 39.901,
          longitude: -75.172
        },
        location: "Philadelphia",
        name: "Flyers",
    },
    "PIT": {
        coordinates: {
          latitude: 40.439,
          longitude: -79.989
        },
        location: "Pittsburgh",
        name: "Penguins",
    },
    "SEA": {
        coordinates: {
          latitude: 47.622,
          longitude: -122.354
        },
        location: "Seattle",
        name: "Kraken",
    },
    "SJS": {
        coordinates: {
          latitude: 37.333,
          longitude: -121.901
        },
        location: "San Jose",
        name: "Sharks",
    },
    "STL": {
        coordinates: {
          latitude: 38.627,
          longitude: -90.203
        },
        location: "St. Louis",
        name: "Blues",
    },
    "TBL": {
        coordinates: {
          latitude: 27.943,
          longitude: -82.452
        },
        location: "Tampa Bay",
        name: "Lightning",
    },
    "TOR": {
        coordinates: {
          latitude: 43.643,
          longitude: -79.379
        },
        location: "Toronto",
        name: "Maple Leafs",
    },
    "UTA": {
        coordinates: {
          latitude: 40.768,
          longitude: -111.901
        },
        location: "Utah",
        name: "Mammoth",
    },
    "VAN": {
        coordinates: {
          latitude: 49.278,
          longitude: -123.109
        },
        location: "Vancouver",
        name: "Canucks",
    },
    "VEG": {
        coordinates: {
          latitude: 36.103,
          longitude: -115.178
        },
        location: "Vegas",
        name: "Golden Knights",
    },
    "WAS": {
        coordinates: {
          latitude: 38.898,
          longitude: -77.021
        },
        location: "Washington",
        name: "Capitals",
    },
    "WIN": {
        coordinates: {
          latitude: 49.893,
          longitude: -97.144
        },
        location: "Winnipeg",
        name: "Jets",
    },
};

export const AHLArenaData: {[Key in AHLTeamType] : TeamInfoType} = {
    "AHL-ANA": {
        coordinates: {
          latitude: 32.755,
          longitude: -117.212
        },
        location: "San Diego",
        name: "Gulls",
    },
    "AHL-BOS": {
        coordinates: {
          latitude: 41.824,
          longitude: -71.418
        },
        location: "Providence",
        name: "Bruins",
    },
    "AHL-BUF": {
        coordinates: {
          latitude: 43.154,
          longitude: -77.611
        },
        location: "Rochester",
        name: "Americans",
    },
    "AHL-CAR": {
        coordinates: {
          latitude: 42.005,
          longitude: -87.888
        },
        location: "Chicago",
        name: "Wolves",
    },
    "AHL-CBJ": {
        coordinates: {
          latitude: 41.496,
          longitude: -81.688
        },
        location: "Cleveland",
        name: "Monsters",
    },
    "AHL-CGY": {
        coordinates: {
          latitude: 51.037,
          longitude: -114.052
        },
        location: "Calgary",
        name: "Wranglers",
    },
    "AHL-CHI": {
        coordinates: {
          latitude: 42.27,
          longitude: -89.096
        },
        location: "Rockford",
        name: "Ice Hogs",
    },
    "AHL-COL": {
        coordinates: {
          latitude: 40.444,
          longitude: -104.99
        },
        location: "Colorado",
        name: "Eagles",
    },
    "AHL-DAL": {
        coordinates: {
          latitude: 30.541,
          longitude: -97.82
        },
        location: "Texas",
        name: "Stars",
    },
    "AHL-DET": {
        coordinates: {
          latitude: 42.962,
          longitude: -85.672
        },
        location: "Grand Rapids",
        name: "Griffins",
    },
    "AHL-EDM": {
        coordinates: {
          latitude: 35.372,
          longitude: -119.013
        },
        location: "Bakersfield",
        name: "Condors",
    },
    "AHL-FLA": {
        coordinates: {
          latitude: 35.205,
          longitude: -80.795
        },
        location: "Charlotte",
        name: "Checkers",
    },
    "AHL-LAK": {
        coordinates: {
          latitude: 34.073,
          longitude: -117.566
        },
        location: "Ontario",
        name: "Reign",
    },
    "AHL-MIN": {
        coordinates: {
          latitude: 41.593,
          longitude: -93.621
        },
        location: "Iowa",
        name: "Wild",
    },
    "AHL-MTL": {
        coordinates: {
          latitude: 45.556,
          longitude: -73.721
        },
        location: "Laval",
        name: "Rocket",
    },
    "AHL-NJD": {
        coordinates: {
          latitude: 43.105,
          longitude: -75.233
        },
        location: "Utica",
        name: "Comets",
    },
    "AHL-NSH": {
        coordinates: {
          latitude: 43.042,
          longitude: -87.917
        },
        location: "Milwaukee",
        name: "Admirals",
    },
    "AHL-NYI": {
        coordinates: {
          latitude: 43.259,
          longitude: -79.872
        },
        location: "Hamilton",
        name: "Hammers",
    },
    "AHL-NYR": {
        coordinates: {
          latitude: 41.768,
          longitude: -72.677
        },
        location: "Hartford",
        name: "Wolf Pack",
    },
    "AHL-OTT": {
        coordinates: {
          latitude: 44.188,
          longitude: -77.383
        },
        location: "Belleville",
        name: "Senators",
    },
    "AHL-PHI": {
        coordinates: {
          latitude: 40.603,
          longitude: -75.473
        },
        location: "Lehigh Valley",
        name: "Phantoms",
    },
    "AHL-PIT": {
        coordinates: {
          latitude: 41.241,
          longitude: -75.849
        },
        location: "W-B/Scranton",
        name: "Penguins",
    },
    "AHL-SEA": {
        coordinates: {
          latitude: 33.78,
          longitude: -116.34
        },
        location: "Coachella Valley",
        name: "Firebirds",
    },
    "AHL-SJS": {
        coordinates: {
          latitude: 37.319,
          longitude: -121.864
        },
        location: "San Jose",
        name: "Barracuda",
    },
    "AHL-STL": {
        coordinates: {
          latitude: 42.102,
          longitude: -72.587
        },
        location: "Springfield",
        name: "Thunderbirds",
    },
    "AHL-TBL": {
        coordinates: {
          latitude: 43.045,
          longitude: -76.148
        },
        location: "Syracuse",
        name: "Crunch",
    },
    "AHL-TOR": {
        coordinates: {
          latitude: 43.636,
          longitude: -79.415
        },
        location: "Toronto",
        name: "Marlies",
    },
    "AHL-UTA": {
        coordinates: {
          latitude: 32.218,
          longitude: -110.974
        },
        location: "Tucson",
        name: "Roadrunners",
    },
    "AHL-VAN": {
        coordinates: {
          latitude: 49.031,
          longitude: -122.287
        },
        location: "Abbotsford",
        name: "Canucks",
    },
    "AHL-VEG": {
        coordinates: {
          latitude: 36.019,
          longitude: -115.081
        },
        location: "Henderson",
        name: "Silver Knights",
    },
    "AHL-WAS": {
        coordinates: {
          latitude: 40.286,
          longitude: -76.669
        },
        location: "Hershey",
        name: "Bears",
    },
    "AHL-WIN": {
        coordinates: {
          latitude: 49.893,
          longitude: -97.144
        },
        location: "Manitoba",
        name: "Moose",
    }
};

export const ECHLArenaData: {[Key in ECHLTeamType] : TeamInfoType} = {
        "ECHL-ANA": {
            coordinates: {
              latitude: 36.153,
              longitude: -95.996
            },
            location: "Tulsa",
            name: "Oilers",
        },
        "ECHL-BOS": {
            coordinates: {
              latitude: 43.656,
              longitude: -70.259
            },
            location: "Maine",
            name: "Mariners",
        },
        "ECHL-BUF": {
            coordinates: {
              latitude: 40.065,
              longitude: -80.725
            },
            location: "Wheeling",
            name: "Nailers",
        },
        "ECHL-CAR": {
            coordinates: {
              latitude: 36.06,
              longitude: -79.826
            },
            location: "Greensboro",
            name: "Gargoyles",
        },
        "ECHL-CGY": {
            coordinates: {
              latitude: 44.089,
              longitude: -103.227
            },
            location: "Rapid City",
            name: "Rush",
        },
        "ECHL-CHI": {
            coordinates: {
              latitude: 39.948,
              longitude: -86.004
            },
            location: "Indy",
            name: "Fuel",
        },
        "ECHL-COL": {
            coordinates: {
              latitude: 35.309,
              longitude: -106.687
            },
            location: "New Mexico",
            name: "Goatheads",
        },
        "ECHL-DAL": {
            coordinates: {
              latitude: 43.614,
              longitude: -116.204
            },
            location: "Idaho",
            name: "Steelheads",
        },
        "ECHL-DET": {
            coordinates: {
              latitude: 41.651,
              longitude: -83.537
            },
            location: "Toledo",
            name: "Walleye",
        },
        "ECHL-EDM": {
            coordinates: {
              latitude: 41.116,
              longitude: -85.124
            },
            location: "Fort Wayne",
            name: "Komets",
        },
        "ECHL-FLA": {
            coordinates: {
              latitude: 32.074,
              longitude: -81.112
            },
            location: "Savannah",
            name: "Ghost Pirates",
        },
        "ECHL-LAK": {
            coordinates: {
              latitude: 34.853,
              longitude: -82.392
            },
            location: "Greenville",
            name: "Swamp Rabbits",
        },
        "ECHL-MIN": {
            coordinates: {
              latitude: 30.326,
              longitude: -81.645
            },
            location: "Jacksonville",
            name: "Icemen",
        },
        "ECHL-MTL": {
            coordinates: {
              latitude: 46.322,
              longitude: -72.591
            },
            location: "Trois-Rivières",
            name: "Lions",
        },
        "ECHL-NJD": {
            coordinates: {
              latitude: 43.308,
              longitude: -73.642
            },
            location: "Adirondack",
            name: "Thunder",
        },
        "ECHL-NSH": {
            coordinates: {
              latitude: 33.991,
              longitude: -84.094
            },
            location: "Atlanta",
            name: "Gladiators",
        },
        "ECHL-NYI": {
            coordinates: {
              latitude: 40.213,
              longitude: -74.758
            },
            location: "Trenton",
            name: "Ironhawks",
        },
        "ECHL-NYR": {
            coordinates: {
              latitude: 36.853,
              longitude: -76.287
            },
            location: "Norfolk",
            name: "Admirals",
        },
        "ECHL-OTT": {
            coordinates: {
              latitude: 33.127,
              longitude: -96.655
            },
            location: "Allen",
            name: "Americans",
        },
        "ECHL-PHI": {
            coordinates: {
              latitude: 40.335,
              longitude: -75.923
            },
            location: "Reading",
            name: "Royals",
        },
        "ECHL-PIT": {
            coordinates: {
              latitude: 26.44,
              longitude: -81.779
            },
            location: "Florida",
            name: "Everblades",
        },
        "ECHL-SEA": {
            coordinates: {
              latitude: 39.04,
              longitude: -94.357
            },
            location: "Kansas City",
            name: "Mavericks",
        },
        "ECHL-SJS": {
            coordinates: {
              latitude: 37.683,
              longitude: -97.332
            },
            location: "Wichita",
            name: "Thunder",
        },
        "ECHL-STL": {
          coordinates: {
              latitude: 42.265,
              longitude: -71.799
            },
            location: "Worcester",
            name: "Railers",
        },
        "ECHL-TBL": {
            coordinates: {
              latitude: 28.539,
              longitude: -81.384
            },
            location: "Orlando",
            name: "Solar Bears",
        },
        "ECHL-TOR": {
            coordinates: {
              latitude: 39.098,
              longitude: -84.504
            },
            location: "Cincinnati",
            name: "Cyclones",
        },
        "ECHL-VAN": {
            coordinates: {
              latitude: 42.254,
              longitude: -85.535
            },
            location: "Kalamazoo",
            name: "Wings",
        },
        "ECHL-VEG": {
            coordinates: {
              latitude: 38.963,
              longitude: -119.938
            },
            location: "Tahoe",
            name: "Knight Monsters",
        },
        "ECHL-WAS": {
            coordinates: {
              latitude: 32.866,
              longitude: -80.022
            },
            location: "South Carolina",
            name: "Stingrays",
        },
        "ECHL-WIN": {
            coordinates: {
              latitude: 40.478,
              longitude: -88.996
            },
            location: "Bloomington",
            name: "Bison",
        },
    }

export const PWHLArenaData: {[Key in PWHLTeamType] : TeamInfoType} = {
  "BOS": {
    coordinates: {
      latitude: 42.650,
      longitude: -71.313,
    },
    location: "Boston",
    name: "Fleet",
  },
  "DET": {
    coordinates: {
      latitude: 42.341,
      longitude: -83.055,
    },
    location: "Detroit",
    name: "PWHL",
  },
  "HAM": {
    coordinates: {
      latitude: 43.259,
      longitude: -79.872,
    },
    location: "Hamilton",
    name: "PWHL",
  },
  "MIN": {
    coordinates: {
      latitude: 44.945,
      longitude: -93.101,
    },
    location: "Minnesota",
    name: "Frost",
  },
  "MTL": {
    coordinates: {
      latitude: 45.556,
      longitude: -73.721,
    },
    location: "Montreal",
    name: "Victoire",
  },
  "NYS": {
    coordinates: {
      latitude: 40.734,
      longitude: -74.171,
    },
    location: "New York",
    name: "Sirens",
  },
  "OTT": {
    coordinates: {
      latitude: 45.399,
      longitude: -75.684,
    },
    location: "Ottawa",
    name: "Charge",
  },
  "SEA": {
    coordinates: {
      latitude: 47.622,
      longitude: -122.354,
    },
    location: "Seattle",
    name: "Torrent",
  },
  "SJS": {
    coordinates: {
      latitude: 37.333,
      longitude: -121.901,
    },
    location: "San Jose",
    name: "PWHL",
  },
  "TOR": {
    coordinates: {
      latitude: 43.636,
      longitude: -79.415,
    },
    location: "Toronto",
    name: "Sceptres",
  },
  "VAN": {
    coordinates: {
      latitude: 49.286,
      longitude: -123.043,
    },
    location: "Vancouver",
    name: "Goldeneyes",
  },
  "VEG": {
    coordinates: {
      latitude: 36.103,
      longitude: -115.178,
    },
    location: "Las Vegas",
    name: "PWHL",
  },
}