import { type NHLTeamType, type TierType, type PWHLTeamType } from "./NHLdata";

export type HockeyInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  parentTeam: NHLTeamType;
};

export type PWHLInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  parentTeam: PWHLTeamType;
};

export const HockeyArenaData: {[Key in TierType] : {[Key in NHLTeamType]? : HockeyInfoType}} = {
    "NHL": {
        "ANA": {
            coordinates: {
              latitude: 33.808,
              longitude: -117.877
            },
            location: "Anaheim",
            name: "Ducks",
            parentTeam: "ANA",
        },
        "BOS": {
            coordinates: {
              latitude: 42.366,
              longitude: -71.062
            },
            location: "Boston",
            name: "Bruins",
            parentTeam: "BOS",
        },
        "BUF": {
            coordinates: {
              latitude: 42.875,
              longitude: -78.876
            },
            location: "Buffalo",
            name: "Sabres",
            parentTeam: "BUF",
        },
        "CAR": {
            coordinates: {
              latitude: 35.803,
              longitude: -78.722
            },
            location: "Carolina",
            name: "Hurricanes",
            parentTeam: "CAR",
        },
        "CBJ": {
            coordinates: {
              latitude: 39.969,
              longitude: -83.006
            },
            location: "Columbus",
            name: "Blue Jackets",
            parentTeam: "CBJ",
        },
        "CGY": {
            coordinates: {
              latitude: 51.037,
              longitude: -114.052
            },
            location: "Calgary",
            name: "Flames",
            parentTeam: "CGY",
        },
        "CHI": {
            coordinates: {
              latitude: 41.881,
              longitude: -87.674
            },
            location: "Chicago",
            name: "Blackhawks",
            parentTeam: "CHI",
        },
        "COL": {
            coordinates: {
              latitude: 39.749,
              longitude: -105.008
            },
            location: "Colorado",
            name: "Avalanche",
            parentTeam: "COL",
        },
        "DAL": {
            coordinates: {
              latitude: 32.791,
              longitude: -96.81
            },
            location: "Dallas",
            name: "Stars",
            parentTeam: "DAL",
        },
        "DET": {
            coordinates: {
              latitude: 42.341,
              longitude: -83.055
            },
            location: "Detroit",
            name: "Red Wings",
            parentTeam: "DET",
        },
        "EDM": {
            coordinates: {
              latitude: 53.547,
              longitude: -113.498
            },
            location: "Edmonton",
            name: "Oilers",
            parentTeam: "EDM",
        },
        "FLA": {
            coordinates: {
              latitude: 26.158,
              longitude: -80.326
            },
            location: "Florida",
            name: "Panthers",
            parentTeam: "FLA",
        },
        "LAK": {
            coordinates: {
              latitude: 34.043,
              longitude: -118.268
            },
            location: "Los Angeles",
            name: "Kings",
            parentTeam: "LAK",
        },
        "MIN": {
            coordinates: {
              latitude: 44.945,
              longitude: -93.101
            },
            location: "Minnesota",
            name: "Wild",
            parentTeam: "MIN",
        },
        "MTL": {
            coordinates: {
              latitude: 45.496,
              longitude: -73.569
            },
            location: "Montreal",
            name: "Canadiens",
            parentTeam: "MTL",
        },
        "NJD": {
            coordinates: {
              latitude: 40.734,
              longitude: -74.171
            },
            location: "New Jersey",
            name: "Devils",
            parentTeam: "NJD",
        },
        "NSH": {
            coordinates: {
              latitude: 36.159,
              longitude: -86.779
            },
            location: "Nashville",
            name: "Predators",
            parentTeam: "NSH",
        },
        "NYI": {
            coordinates: {
              latitude: 40.712,
              longitude: -73.727
            },
            location: "New York",
            name: "Islanders",
            parentTeam: "NYI",
        },
        "NYR": {
            coordinates: {
              latitude: 40.751,
              longitude: -73.994
            },
            location: "New York",
            name: "Rangers",
            parentTeam: "NYR",
        },
        "OTT": {
            coordinates: {
              latitude: 45.297,
              longitude: -75.927
            },
            location: "Ottawa",
            name: "Senators",
            parentTeam: "OTT",
        },
        "PHI": {
            coordinates: {
              latitude: 39.901,
              longitude: -75.172
            },
            location: "Philadelphia",
            name: "Flyers",
            parentTeam: "PHI",
        },
        "PIT": {
            coordinates: {
              latitude: 40.439,
              longitude: -79.989
            },
            location: "Pittsburgh",
            name: "Penguins",
            parentTeam: "PIT",
        },
        "SEA": {
            coordinates: {
              latitude: 47.622,
              longitude: -122.354
            },
            location: "Seattle",
            name: "Kraken",
            parentTeam: "SEA",
        },
        "SJS": {
            coordinates: {
              latitude: 37.333,
              longitude: -121.901
            },
            location: "San Jose",
            name: "Sharks",
            parentTeam: "SJS",
        },
        "STL": {
            coordinates: {
              latitude: 38.627,
              longitude: -90.203
            },
            location: "St. Louis",
            name: "Blues",
            parentTeam: "STL",
        },
        "TBL": {
            coordinates: {
              latitude: 27.943,
              longitude: -82.452
            },
            location: "Tampa Bay",
            name: "Lightning",
            parentTeam: "TBL",
        },
        "TOR": {
            coordinates: {
              latitude: 43.643,
              longitude: -79.379
            },
            location: "Toronto",
            name: "Maple Leafs",
            parentTeam: "TOR",
        },
        "UTA": {
            coordinates: {
              latitude: 40.768,
              longitude: -111.902
            },
            location: "Utah",
            name: "Mammoth",
            parentTeam: "UTA",
        },
        "VAN": {
            coordinates: {
              latitude: 49.278,
              longitude: -123.109
            },
            location: "Vancouver",
            name: "Canucks",
            parentTeam: "VAN",
        },
        "VEG": {
            coordinates: {
              latitude: 36.103,
              longitude: -115.178
            },
            location: "Vegas",
            name: "Golden Knights",
            parentTeam: "VEG",
        },
        "WAS": {
            coordinates: {
              latitude: 38.898,
              longitude: -77.021
            },
            location: "Washington",
            name: "Capitals",
            parentTeam: "WAS",
        },
        "WIN": {
            coordinates: {
              latitude: 49.893,
              longitude: -97.144
            },
            location: "Winnipeg",
            name: "Jets",
            parentTeam: "WIN",
        }
    },
    "AHL": {
        "ANA": {
            coordinates: {
              latitude: 32.755,
              longitude: -117.212
            },
            location: "San Diego",
            name: "Gulls",
            parentTeam: "ANA",
        },
        "BOS": {
            coordinates: {
              latitude: 41.824,
              longitude: -71.418
            },
            location: "Providence",
            name: "Bruins",
            parentTeam: "BOS",
        },
        "BUF": {
            coordinates: {
              latitude: 43.154,
              longitude: -77.611
            },
            location: "Rochester",
            name: "Americans",
            parentTeam: "BUF",
        },
        "CAR": {
            coordinates: {
              latitude: 42.005,
              longitude: -87.888
            },
            location: "Chicago",
            name: "Wolves",
            parentTeam: "CAR",
        },
        "CBJ": {
            coordinates: {
              latitude: 41.496,
              longitude: -81.688
            },
            location: "Cleveland",
            name: "Monsters",
            parentTeam: "CBJ",
        },
        "CGY": {
            coordinates: {
              latitude: 51.037,
              longitude: -114.052
            },
            location: "Calgary",
            name: "Wranglers",
            parentTeam: "CGY",
        },
        "CHI": {
            coordinates: {
              latitude: 42.27,
              longitude: -89.096
            },
            location: "Rockford",
            name: "Ice Hogs",
            parentTeam: "CHI",
        },
        "COL": {
            coordinates: {
              latitude: 40.444,
              longitude: -104.99
            },
            location: "Colorado",
            name: "Eagles",
            parentTeam: "COL",
        },
        "DAL": {
            coordinates: {
              latitude: 30.541,
              longitude: -97.82
            },
            location: "Texas",
            name: "Stars",
            parentTeam: "DAL",
        },
        "DET": {
            coordinates: {
              latitude: 42.962,
              longitude: -85.672
            },
            location: "Grand Rapids",
            name: "Griffins",
            parentTeam: "DET",
        },
        "EDM": {
            coordinates: {
              latitude: 35.372,
              longitude: -119.013
            },
            location: "Bakersfield",
            name: "Condors",
            parentTeam: "EDM",
        },
        "FLA": {
            coordinates: {
              latitude: 35.205,
              longitude: -80.795
            },
            location: "Charlotte",
            name: "Checkers",
            parentTeam: "FLA",
        },
        "LAK": {
            coordinates: {
              latitude: 34.073,
              longitude: -117.566
            },
            location: "Ontario",
            name: "Reign",
            parentTeam: "LAK",
        },
        "MIN": {
            coordinates: {
              latitude: 41.593,
              longitude: -93.621
            },
            location: "Iowa",
            name: "Wild",
            parentTeam: "MIN",
        },
        "MTL": {
            coordinates: {
              latitude: 45.556,
              longitude: -73.721
            },
            location: "Laval",
            name: "Rocket",
            parentTeam: "MTL",
        },
        "NJD": {
            coordinates: {
              latitude: 43.105,
              longitude: -75.233
            },
            location: "Utica",
            name: "Comets",
            parentTeam: "NJD",
        },
        "NSH": {
            coordinates: {
              latitude: 43.042,
              longitude: -87.917
            },
            location: "Milwaukee",
            name: "Admirals",
            parentTeam: "NSH",
        },
        "NYI": {
            coordinates: {
              latitude: 43.259,
              longitude: -79.872
            },
            location: "Hamilton",
            name: "Hammers",
            parentTeam: "NYI",
        },
        "NYR": {
            coordinates: {
              latitude: 41.768,
              longitude: -72.677
            },
            location: "Hartford",
            name: "Wolf Pack",
            parentTeam: "NYR",
        },
        "OTT": {
            coordinates: {
              latitude: 44.188,
              longitude: -77.383
            },
            location: "Belleville",
            name: "Senators",
            parentTeam: "OTT",
        },
        "PHI": {
            coordinates: {
              latitude: 40.603,
              longitude: -75.473
            },
            location: "Lehigh Valley",
            name: "Phantoms",
            parentTeam: "PHI",
        },
        "PIT": {
            coordinates: {
              latitude: 41.241,
              longitude: -75.849
            },
            location: "Wilkes-Barre/Scranton",
            name: "Penguins",
            parentTeam: "PIT",
        },
        "SEA": {
            coordinates: {
              latitude: 33.78,
              longitude: -116.34
            },
            location: "Coachella Valley",
            name: "Firebirds",
            parentTeam: "SEA",
        },
        "SJS": {
            coordinates: {
              latitude: 37.319,
              longitude: -121.864
            },
            location: "San Jose",
            name: "Barracuda",
            parentTeam: "SJS",
        },
        "STL": {
            coordinates: {
              latitude: 42.102,
              longitude: -72.587
            },
            location: "Springfield",
            name: "Thunderbirds",
            parentTeam: "STL",
        },
        "TBL": {
            coordinates: {
              latitude: 43.045,
              longitude: -76.148
            },
            location: "Syracuse",
            name: "Crunch",
            parentTeam: "TBL",
        },
        "TOR": {
            coordinates: {
              latitude: 43.636,
              longitude: -79.415
            },
            location: "Toronto",
            name: "Marlies",
            parentTeam: "TOR",
        },
        "UTA": {
            coordinates: {
              latitude: 32.218,
              longitude: -110.974
            },
            location: "Tucson",
            name: "Roadrunners",
            parentTeam: "UTA",
        },
        "VAN": {
            coordinates: {
              latitude: 49.031,
              longitude: -122.287
            },
            location: "Abbotsford",
            name: "Canucks",
            parentTeam: "VAN",
        },
        "VEG": {
            coordinates: {
              latitude: 36.019,
              longitude: -115.081
            },
            location: "Henderson",
            name: "Silver Knights",
            parentTeam: "VEG",
        },
        "WAS": {
            coordinates: {
              latitude: 40.286,
              longitude: -76.669
            },
            location: "Hershey",
            name: "Bears",
            parentTeam: "WAS",
        },
        "WIN": {
            coordinates: {
              latitude: 49.893,
              longitude: -97.144
            },
            location: "Manitoba",
            name: "Moose",
            parentTeam: "WIN",
        }
    },
    "ECHL": {
        "ANA": {
            coordinates: {
              latitude: 36.153,
              longitude: -95.996
            },
            location: "Tulsa",
            name: "Oilers",
            parentTeam: "ANA",
        },
        "BOS": {
            coordinates: {
              latitude: 43.656,
              longitude: -70.259
            },
            location: "Maine",
            name: "Mariners",
            parentTeam: "BOS",
        },
        "BUF": {
            coordinates: {
              latitude: 42.265,
              longitude: -71.799
            },
            location: "Worcester",
            name: "Railers",
            parentTeam: "BUF",
        },
        "CAR": {
            coordinates: {
              latitude: 36.06,
              longitude: -79.826
            },
            location: "Greensboro",
            name: "Gargoyles",
            parentTeam: "CAR",
        },
        "CGY": {
            coordinates: {
              latitude: 44.089,
              longitude: -103.227
            },
            location: "Rapid City",
            name: "Rush",
            parentTeam: "CGY",
        },
        "CHI": {
            coordinates: {
              latitude: 39.948,
              longitude: -86.004
            },
            location: "Indy",
            name: "Fuel",
            parentTeam: "CHI",
        },
        "COL": {
            coordinates: {
              latitude: 35.309,
              longitude: -106.687
            },
            location: "New Mexico",
            name: "Goatheads",
            parentTeam: "COL",
        },
        "DAL": {
            coordinates: {
              latitude: 43.614,
              longitude: -116.204
            },
            location: "Idaho",
            name: "Steelheads",
            parentTeam: "DAL",
        },
        "DET": {
            coordinates: {
              latitude: 41.651,
              longitude: -83.537
            },
            location: "Toledo",
            name: "Walleye",
            parentTeam: "DET",
        },
        "EDM": {
            coordinates: {
              latitude: 41.116,
              longitude: -85.124
            },
            location: "Fort Wayne",
            name: "Komets",
            parentTeam: "EDM",
        },
        "FLA": {
            coordinates: {
              latitude: 32.074,
              longitude: -81.112
            },
            location: "Savannah",
            name: "Ghost Pirates",
            parentTeam: "FLA",
        },
        "LAK": {
            coordinates: {
              latitude: 34.853,
              longitude: -82.392
            },
            location: "Greenville",
            name: "Swamp Rabbits",
            parentTeam: "LAK",
        },
        "MIN": {
            coordinates: {
              latitude: 30.326,
              longitude: -81.645
            },
            location: "Jacksonville",
            name: "Icemen",
            parentTeam: "MIN",
        },
        "MTL": {
            coordinates: {
              latitude: 46.322,
              longitude: -72.591
            },
            location: "Trois-Rivières",
            name: "Lions",
            parentTeam: "MTL",
        },
        "NJD": {
            coordinates: {
              latitude: 43.308,
              longitude: -73.642
            },
            location: "Adirondack",
            name: "Thunder",
            parentTeam: "NJD",
        },
        "NSH": {
            coordinates: {
              latitude: 33.991,
              longitude: -84.094
            },
            location: "Atlanta",
            name: "Gladiators",
            parentTeam: "NSH",
        },
        "NYI": {
            coordinates: {
              latitude: 40.213,
              longitude: -74.758
            },
            location: "Trenton",
            name: "Ironhawks",
            parentTeam: "NYI",
        },
        "NYR": {
            coordinates: {
              latitude: 40.478,
              longitude: -88.996
            },
            location: "Bloomington",
            name: "Bison",
            parentTeam: "NYR",
        },
        "OTT": {
            coordinates: {
              latitude: 33.127,
              longitude: -96.655
            },
            location: "Allen",
            name: "Americans",
            parentTeam: "OTT",
        },
        "PHI": {
            coordinates: {
              latitude: 40.335,
              longitude: -75.923
            },
            location: "Reading",
            name: "Royals",
            parentTeam: "PHI",
        },
        "PIT": {
            coordinates: {
              latitude: 40.065,
              longitude: -80.725
            },
            location: "Wheeling",
            name: "Nailers",
            parentTeam: "PIT",
        },
        "SEA": {
            coordinates: {
              latitude: 39.04,
              longitude: -94.357
            },
            location: "Kansas City",
            name: "Mavericks",
            parentTeam: "SEA",
        },
        "SJS": {
            coordinates: {
              latitude: 37.683,
              longitude: -97.332
            },
            location: "Wichita",
            name: "Thunder",
            parentTeam: "SJS",
        },
        "STL": {
            coordinates: {
              latitude: 26.44,
              longitude: -81.779
            },
            location: "Florida",
            name: "Everblades",
            parentTeam: "STL",
        },
        "TBL": {
            coordinates: {
              latitude: 28.539,
              longitude: -81.384
            },
            location: "Orlando",
            name: "Solar Bears",
            parentTeam: "TBL",
        },
        "TOR": {
            coordinates: {
              latitude: 39.098,
              longitude: -84.504
            },
            location: "Cincinnati",
            name: "Cyclones",
            parentTeam: "TOR",
        },
        "VAN": {
            coordinates: {
              latitude: 42.254,
              longitude: -85.535
            },
            location: "Kalamazoo",
            name: "Wings",
            parentTeam: "VAN",
        },
        "VEG": {
            coordinates: {
              latitude: 38.963,
              longitude: -119.938
            },
            location: "Tahoe",
            name: "Knight Monsters",
            parentTeam: "VEG",
        },
        "WAS": {
            coordinates: {
              latitude: 32.866,
              longitude: -80.022
            },
            location: "South Carolina",
            name: "Stingrays",
            parentTeam: "WAS",
        },
        "WIN": {
            coordinates: {
              latitude: 36.853,
              longitude: -76.287
            },
            location: "Norfolk",
            name: "Admirals",
            parentTeam: "WIN",
        }
    }
};

export const PWHLArenaData: {[Key in PWHLTeamType] : PWHLInfoType} = {
  "BOS": {
    coordinates: {
      latitude: 42.650,
      longitude: -71.313,
    },
    location: "Boston",
    name: "Fleet",
    parentTeam: "BOS",
  },
  "DET": {
    coordinates: {
      latitude: 42.341,
      longitude: -83.055,
    },
    location: "Detroit",
    name: "PWHL",
    parentTeam: "DET",
  },
  "HAM": {
    coordinates: {
      latitude: 43.259,
      longitude: -79.872,
    },
    location: "Hamilton",
    name: "PWHL",
    parentTeam: "HAM",
  },
  "MIN": {
    coordinates: {
      latitude: 44.945,
      longitude: -93.101,
    },
    location: "Minnesota",
    name: "Frost",
    parentTeam: "MIN",
  },
  "MTL": {
    coordinates: {
      latitude: 45.556,
      longitude: -73.721,
    },
    location: "Montreal",
    name: "Victoire",
    parentTeam:"MTL",
  },
  "NYS": {
    coordinates: {
      latitude: 40.734,
      longitude: -74.171,
    },
    location: "New York",
    name: "Sirens",
    parentTeam: "NYS",
  },
  "OTT": {
    coordinates: {
      latitude: 45.399,
      longitude: -75.684,
    },
    location: "Ottawa",
    name: "Charge",
    parentTeam: "OTT",
  },
  "SEA": {
    coordinates: {
      latitude: 47.622,
      longitude: -122.354,
    },
    location: "Seattle",
    name: "Torrent",
    parentTeam: "SEA",
  },
  "SJS": {
    coordinates: {
      latitude: 37.333,
      longitude: -121.901,
    },
    location: "San Jose",
    name: "PWHL",
    parentTeam: "SJS",
  },
  "TOR": {
    coordinates: {
      latitude: 43.636,
      longitude: -79.415,
    },
    location: "Toronto",
    name: "Sceptres",
    parentTeam: "TOR",
  },
  "VAN": {
    coordinates: {
      latitude: 49.286,
      longitude: -123.043,
    },
    location: "Vancouver",
    name: "Goldeneyes",
    parentTeam: "VAN",
  },
  "VEG": {
    coordinates: {
      latitude: 36.103,
      longitude: -115.178,
    },
    location: "Las Vegas",
    name: "PWHL",
    parentTeam: "VEG",
  },
}