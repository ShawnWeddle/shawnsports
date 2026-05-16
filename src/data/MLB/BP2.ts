import { type MLBTeamType } from "./MLBdata"

export type TierType = "MLB" |"AAA" | "AA" | "High-A" | "Single-A";

type MiLBInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
};

export const MiLBobject: {[Key in MLBTeamType] : {[Key in TierType] : MiLBInfoType}} = {
  "LAD": {
    "MLB": {
        "coordinates": {
          "latitude": 34.081111,
          "longitude": -118.239444,
        },
        "location": "Los Angeles",
        "name": "Dodgers",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 35.461944,
          "longitude": -97.5125,
        },
        "location": "Oklahoma City",
        "name": "Dodgers",    
      },
      "AA": {
        "coordinates": {
          "latitude": 36.154444,
          "longitude": -95.984444,
        },
        "location": "Tulsa",
        "name": "Drillers",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 43.600833,
          "longitude": -84.253056,
        },
        "location": "Great Lakes",
        "name": "Loons",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 0,
          "longitude": 0,
        },
        "location": "Ontario",
        "name": "Tower Buzzers",
          

      },
  },
  "NYY": {
    "MLB": {
        "coordinates": {
          "latitude": 40.829167,
          "longitude": -73.926389,
        },
        "location": "New York",
        "name": "Yankees",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 41.361944,
          "longitude": -75.760278,
        },
        "location": "Scranton/Wilkes-Barre",
        "name": "RailRiders",    
      },
      "AA": {
        "coordinates": {
          "latitude": 40.570833,
          "longitude": -74.545,
        },
        "location": "Somerset",
        "name": "Patriots",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.584444,
          "longitude": -73.934722,
        },
        "location": "Hudson Valley",
        "name": "Renegades",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 27.980278,
          "longitude": -82.506667,
        },
        "location": "Tampa",
        "name": "Tarpons",
      },
  },
  "CLE": {
    "MLB": {
        "coordinates": {
          "latitude": 41.495833,
          "longitude": -81.685278,
        },
        "location": "Cleveland",
        "name": "Guardians",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 39.9625,
          "longitude": -83.004167,
        },
        "location": "Columbus",
        "name": "Clippers",    
      },
      "AA": {
        "coordinates": {
          "latitude": 41.081111,
          "longitude": -81.509444,
        },
        "location": "Akron",
        "name": "RubberDucks",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.695,
          "longitude": -81.45,
        },
        "location": "Lake County",
        "name": "Captains",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 37.403056,
          "longitude": -79.154444,
        },
        "location": "Hill City",
        "name": "Howlers",
      },
  },
  "NYM": {
    "MLB": {
        "coordinates": {
          "latitude": 40.757222,
          "longitude": -73.833333,
        },
        "location": "New York",
        "name": "Mets",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 43.069167,
          "longitude": -76.158333,
        },
        "location": "Syracuse",
        "name": "Mets",    
      },
      "AA": {
        "coordinates": {
          "latitude": 42.090833,
          "longitude": -75.913889,
        },
        "location": "Binghamton",
        "name": "Rumble Ponies",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 40.572222,
          "longitude": -73.980556,
        },
        "location": "Brooklyn",
        "name": "Cyclones",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 27.276667,
          "longitude": -80.337056,
        },
        "location": "St. Lucie",
        "name": "Mets",
      },
  },
  "PHI": {
    "MLB": {
        "coordinates": {
          "latitude": 39.905833,
          "longitude": -75.166389,
        },
        "location": "Philadelphia",
        "name": "Phillies",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 40.638611,
          "longitude": -75.469444,
        },
        "location": "Lehigh Valley",
        "name": "IronPigs",    
      },
      "AA": {
        "coordinates": {
          "latitude": 40.353611,
          "longitude": -75.901944,
        },
        "location": "Reading",
        "name": "Fightin Phils",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 40.101944,
          "longitude": -74.195,
        },
        "location": "Jersey Shore",
        "name": "BlueClaws",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 27.943889,
          "longitude": -82.758056,
        },
        "location": "Clearwater",
        "name": "Threshers",
      },
  },
  "SDP": {
    "MLB": {
        "coordinates": {
          "latitude": 32.707778,
          "longitude": -117.156944,
        },
        "location": "San Diego",
        "name": "Padres",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 31.75,
          "longitude": -106.508333,
        },
        "location": "El Paso",
        "name": "Chihuahuas",    
      },
      "AA": {
        "coordinates": {
          "latitude": 29.436667,
          "longitude": -98.600833,
        },
        "location": "San Antonio",
        "name": "Missions",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.073889,
          "longitude": -85.146389,
        },
        "location": "Fort Wayne",
        "name": "TinCaps",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 33.6525,
          "longitude": -117.33,
        },
        "location": "Lake Elsinore",
        "name": "Storm",
      },
  },
  "DET": {
    "MLB": {
        "coordinates": {
          "latitude": 42.339167,
          "longitude": -83.048611,
        },
        "location": "Detroit",
        "name": "Tigers",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 41.6525,
          "longitude": -83.541667,
        },
        "location": "Toledo",
        "name": "Mud Hens",    
      },
      "AA": {
        "coordinates": {
          "latitude": 42.13,
          "longitude": -80.085833,
        },
        "location": "Erie",
        "name": "SeaWolves",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 43.035833,
          "longitude": -85.676111,
        },
        "location": "West Michigan",
        "name": "Whitecaps",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 28.0475,
          "longitude": -81.953889,
        },
        "location": "Lakeland",
        "name": "Flying Tigers",
      },
  },
  "KCR": {
    "MLB": {
        "coordinates": {
          "latitude": 39.051389,
          "longitude": -94.479167,
        },
        "location": "Kansas City",
        "name": "Royals",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 41.163889,
          "longitude": -96.088889,
        },
        "location": "Omaha",
        "name": "Storm Chasers",    
      },
      "AA": {
        "coordinates": {
          "latitude": 36.195278,
          "longitude": -94.136389,
        },
        "location": "Northwest Arkansas",
        "name": "Naturals",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.526944,
          "longitude": -90.570833,
        },
        "location": "Quad Cities",
        "name": "River Bandits",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 34.012222,
          "longitude": -81.034722,
        },
        "location": "Columbia",
        "name": "Fireflies",
      },
  },
  "MIL": {
    "MLB": {
        "coordinates": {
          "latitude": 43.040833,
          "longitude": -87.968056,
        },
        "location": "Milwaukee",
        "name": "Brewers",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 36.168611,
          "longitude": -86.785556,
        },
        "location": "Nashville",
        "name": "Sounds",    
      },
      "AA": {
        "coordinates": {
          "latitude": 30.392778,
          "longitude": -88.881944,
        },
        "location": "Biloxi",
        "name": "Shuckers",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 44.262222,
          "longitude": -88.324722,
        },
        "location": "Wisconsin",
        "name": "Timber Rattlers",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 0,
          "longitude": 0,
        },
        "location": "Wilson",
        "name": "Warbirdss",
          

      },
  },
  "BAL": {
    "MLB": {
        "coordinates": {
          "latitude": 39.283889,
          "longitude": -76.621667,
        },
        "location": "Baltimore",
        "name": "Orioles",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 36.847222,
          "longitude": -76.283333,
        },
        "location": "Norfolk",
        "name": "Tides",    
      },
      "AA": {
        "coordinates": {
          "latitude": 38.905556,
          "longitude": -76.724722,
        },
        "location": "Chesapeake",
        "name": "Baysox",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 39.516667,
          "longitude": -76.152778,
        },
        "location": "Frederick",
        "name": "Keys",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 38.366944,
          "longitude": -75.555,
        },
        "location": "Delmarva",
        "name": "Shorebirds",
      },
  },
  "ATL": {
    "MLB": {
        "coordinates": {
          "latitude": 33.953889,
          "longitude": -84.454722,
        },
        "location": "Atlanta",
        "name": "Braves",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 34.039167,
          "longitude": -84.069722,
        },
        "location": "Gwinnett",
        "name": "Stripers",    
      },
      "AA": {
        "coordinates": {
          "latitude": 32.275278,
          "longitude": -90.035833,
        },
        "location": "Columbus",
        "name": "Clingstones",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 34.253056,
          "longitude": -85.175,
        },
        "location": "Rome",
        "name": "Emperors",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 33.500833,
          "longitude": -81.9675,
        },
        "location": "Augusta",
        "name": "GreenJackets",
      },
  },
  "HOU": {
    "MLB": {
        "coordinates": {
          "latitude": 29.756944,
          "longitude": -95.355556,
        },
        "location": "Houston",
        "name": "Astros",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 29.594444,
          "longitude": -95.629167,
        },
        "location": "Sugar Land",
        "name": "Space Cowboys",    
      },
      "AA": {
        "coordinates": {
          "latitude": 27.813333,
          "longitude": -97.384167,
        },
        "location": "Corpus Christi",
        "name": "Hooks",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 35.595,
          "longitude": -82.540556,
        },
        "location": "Asheville",
        "name": "Tourists",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 35.052778,
          "longitude": -78.883611,
        },
        "location": "Fayetteville",
        "name": "Woodpeckers",
      },
  },
  "ARI": {
    "MLB": {
        "coordinates": {
          "latitude": 33.454444,
          "longitude": -112.080278,
        },
        "location": "Arizona",
        "name": "Diamondbacks",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 39.525,
          "longitude": -119.827778,
        },
        "location": "Reno",
        "name": "Aces",    
      },
      "AA": {
        "coordinates": {
          "latitude": 35.22,
          "longitude": -101.821111,
        },
        "location": "Amarillo",
        "name": "Sod Poodles",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 45.52,
          "longitude": -122.97,
        },
        "location": "Hillsboro",
        "name": "Hops",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 36.336111,
          "longitude": -119.293889,
        },
        "location": "Visalia",
        "name": "Rawhide",
      },
  },
  "SEA": {
    "MLB": {
        "coordinates": {
          "latitude": 47.591389,
          "longitude": -122.3325,
        },
        "location": "Seattle",
        "name": "Mariners",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 47.222778,
          "longitude": -122.490833,
        },
        "location": "Tacoma",
        "name": "Rainiers",    
      },
      "AA": {
        "coordinates": {
          "latitude": 34.781111,
          "longitude": -92.253056,
        },
        "location": "Arkansas",
        "name": "Travelers",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 47.985833,
          "longitude": -122.217222,
        },
        "location": "Everett",
        "name": "AquaSox",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 34.089722,
          "longitude": -117.289722,
        },
        "location": "Inland Empire",
        "name": "66ers",
      },
  },
  "CHC": {
    "MLB": {
        "coordinates": {
          "latitude": 41.948333,
          "longitude": -87.655556,
        },
        "location": "Chicago",
        "name": "Cubs",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 41.590278,
          "longitude": -93.627778,
        },
        "location": "Iowa",
        "name": "Cubs",    
      },
      "AA": {
        "coordinates": {
          "latitude": 35.97,
          "longitude": -83.605556,
        },
        "location": "Knoxville",
        "name": "Smokies",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.676667,
          "longitude": -86.276667,
        },
        "location": "South Bend",
        "name": "Cubs",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 33.703333,
          "longitude": -78.868889,
        },
        "location": "Myrtle Beach",
        "name": "Pelicans",
      },
  },
  "STL": {
    "MLB": {
        "coordinates": {
          "latitude": 38.625,
          "longitude": -90.193056,
        },
        "location": "St. Louis",
        "name": "Cardinals",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 35.149722,
          "longitude": -90.05,
        },
        "location": "Memphis",
        "name": "Redbirds",    
      },
      "AA": {
        "coordinates": {
          "latitude": 37.215833,
          "longitude": -93.290556,
        },
        "location": "Springfield",
        "name": "Cardinals",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 40.686944,
          "longitude": -89.592778,
        },
        "location": "Peoria",
        "name": "Chiefs",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 26.890833,
          "longitude": -80.119722,
        },
        "location": "Palm Beach",
        "name": "Cardinals",
      },
  },
  "MIN": {
    "MLB": {
        "coordinates": {
          "latitude": 44.981667,
          "longitude": -93.278333,
        },
        "location": "Minnesota",
        "name": "Twins",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 44.950556,
          "longitude": -93.092222,
        },
        "location": "St. Paul",
        "name": "Saints",    
      },
      "AA": {
        "coordinates": {
          "latitude": 37.681944,
          "longitude": -97.345556,
        },
        "location": "Wichita",
        "name": "Wind Surge",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 41.986389,
          "longitude": -91.674444,
        },
        "location": "Cedar Rapids",
        "name": "Kernels",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 26.555,
          "longitude": -81.914444,
        },
        "location": "Fort Myers",
        "name": "Mighty Mussels",
      },
  },
  "BOS": {
    "MLB": {
        "coordinates": {
          "latitude": 42.346389,
          "longitude": -71.0975,
        },
        "location": "Boston",
        "name": "Red Sox",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 42.259722,
          "longitude": -71.794444,
        },
        "location": "Worcester",
        "name": "Red Sox",    
      },
      "AA": {
        "coordinates": {
          "latitude": 43.649444,
          "longitude": -70.276667,
        },
        "location": "Portland",
        "name": "Sea Dogs",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 34.845833,
          "longitude": -82.395833,
        },
        "location": "Greenville",
        "name": "Drive",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 37.274444,
          "longitude": -80.035833,
        },
        "location": "Salem",
        "name": "RidgeYaks",
      },
  },
  "TBR": {
    "MLB": {
        "coordinates": {
          "latitude": 27.980278,
          "longitude": -82.506667,
        },
        "location": "Tampa",
        "name": "Bay Rays",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 35.973333,
          "longitude": -78.902778,
        },
        "location": "Durham",
        "name": "Bulls",    
      },
      "AA": {
        "coordinates": {
          "latitude": 32.379722,
          "longitude": -86.304722,
        },
        "location": "Montgomery",
        "name": "Biscuits",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 36.985833,
          "longitude": -86.451667,
        },
        "location": "Bowling Green",
        "name": "Hot Rods",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 32.768333,
          "longitude": -79.986389,
        },
        "location": "Charleston",
        "name": "RiverDogs",
      },
  },
  "SFG": {
    "MLB": {
        "coordinates": {
          "latitude": 37.795,
          "longitude": -122.389722,
        },
        "location": "San Francisco",
        "name": "Giants",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 38.5875,
          "longitude": -121.516667,
        },
        "location": "Sacramento",
        "name": "River Cats",    
      },
      "AA": {
        "coordinates": {
          "latitude": 37.6,
          "longitude": -77.456111,
        },
        "location": "Richmond",
        "name": "Flying Squirrels",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 44.064167,
          "longitude": -123.041111,
        },
        "location": "Eugene",
        "name": "Emeralds",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 37.327778,
          "longitude": -121.868889,
        },
        "location": "San Jose",
        "name": "Giants",
      },
  },
  "TEX": {
    "MLB": {
        "coordinates": {
          "latitude": 32.751389,
          "longitude": -97.083056,
        },
        "location": "Texas",
        "name": "Rangers",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 30.511944,
          "longitude": -97.616667,
        },
        "location": "Round Rock",
        "name": "Express",    
      },
      "AA": {
        "coordinates": {
          "latitude": 33.122222,
          "longitude": -96.828889,
        },
        "location": "Frisco",
        "name": "RoughRiders",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 34.947222,
          "longitude": -81.919444,
        },
        "location": "Hub City",
        "name": "Spartanburgers",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 35.734722,
          "longitude": -81.371667,
        },
        "location": "Hickory",
        "name": "Crawdads",
      },
  },
  "CIN": {
    "MLB": {
        "coordinates": {
          "latitude": 39.095,
          "longitude": -84.505833,
        },
        "location": "Cincinnati",
        "name": "Reds",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 38.253056,
          "longitude": -85.734167,
        },
        "location": "Louisville",
        "name": "Bats",    
      },
      "AA": {
        "coordinates": {
          "latitude": 35.054167,
          "longitude": -85.301667,
        },
        "location": "Chattanooga",
        "name": "Lookouts",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 39.758889,
          "longitude": -84.193333,
        },
        "location": "Dayton",
        "name": "Dragons",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 29.227778,
          "longitude": -81.020278,
        },
        "location": "Daytona",
        "name": "Tortugas",
      },
  },
  "PIT": {
    "MLB": {
        "coordinates": {
          "latitude": 40.4475,
          "longitude": -80.009722,
        },
        "location": "Pittsburgh",
        "name": "Pirates",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 39.768333,
          "longitude": -86.170833,
        },
        "location": "Indianapolis",
        "name": "Indians",    
      },
      "AA": {
        "coordinates": {
          "latitude": 40.505,
          "longitude": -78.371667,
        },
        "location": "Altoona",
        "name": "Curve",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 36.074167,
          "longitude": -79.788889,
        },
        "location": "Greensboro",
        "name": "Grasshoppers",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 27.489722,
          "longitude": -82.5625,
        },
        "location": "Bradenton",
        "name": "Marauders",
      },
  },
  "TOR": {
    "MLB": {
        "coordinates": {
          "latitude": 43.641389,
          "longitude": -79.39,
        },
        "location": "Toronto",
        "name": "Blue Jays",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 42.891389,
          "longitude": -78.878333,
        },
        "location": "Buffalo",
        "name": "Bisons",    
      },
      "AA": {
        "coordinates": {
          "latitude": 42.98,
          "longitude": -71.451667,
        },
        "location": "New Hampshire",
        "name": "Fisher Cats",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 49.239722,
          "longitude": -123.1075,
        },
        "location": "Vancouver",
        "name": "Canadians",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 0,
          "longitude": 0,
        },
        "location": "Dunedin",
        "name": "Blue Jays",
          

      },
  },
  "WSN": {
    "MLB": {
        "coordinates": {
          "latitude": 38.873889,
          "longitude": -77.008889,
        },
        "location": "Washington",
        "name": "Nationals",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 43.153056,
          "longitude": -77.603611,
        },
        "location": "Rochester",
        "name": "Red Wings",    
      },
      "AA": {
        "coordinates": {
          "latitude": 40.256667,
          "longitude": -76.878333,
        },
        "location": "Harrisburg",
        "name": "Senators",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 39.745278,
          "longitude": -75.555,
        },
        "location": "Wilmington",
        "name": "Blue Rocks",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 38.276667,
          "longitude": -77.45,
        },
        "location": "Fredericksburg",
        "name": "Nationals",
      },
  },
  "OAK": {
    "MLB": {
        "coordinates": {
          "latitude": 38.580278,
          "longitude": -121.513889,
        },
        "location": "Oakland",
        "name": "Athletics",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 36.052778,
          "longitude": -115.336111,
        },
        "location": "Las Vegas",
        "name": "Aviators",    
      },
      "AA": {
        "coordinates": {
          "latitude": 32.012222,
          "longitude": -102.147222,
        },
        "location": "Midland",
        "name": "RockHounds",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 42.733889,
          "longitude": -84.545,
        },
        "location": "Lansing",
        "name": "Lugnuts",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 37.950556,
          "longitude": -121.291389,
        },
        "location": "Stockton",
        "name": "Ports",
      },
  },
  "LAA": {
    "MLB": {
        "coordinates": {
          "latitude": 33.800278,
          "longitude": -117.883056,
        },
        "location": "Los Angeles",
        "name": "Angels",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 40.531944,
          "longitude": -111.890278,
        },
        "location": "Salt",
        "name": "Lake Bees",    
      },
      "AA": {
        "coordinates": {
          "latitude": 34.628889,
          "longitude": -86.776944,
        },
        "location": "Rocket City",
        "name": "Trash Pandas",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 46.2375,
          "longitude": -119.112222,
        },
        "location": "Tri-City",
        "name": "Dust Devils",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 34.112222,
          "longitude": -117.584444,
        },
        "location": "Rancho Cucamonga",
        "name": "Quakes",
      },
  },
  "MIA": {
    "MLB": {
        "coordinates": {
          "latitude": 25.776111,
          "longitude": -80.221389,
        },
        "location": "Miami",
        "name": "Marlins",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 30.324722,
          "longitude": -81.641389,
        },
        "location": "Jacksonville",
        "name": "Jumbo Shrimp",    
      },
      "AA": {
        "coordinates": {
          "latitude": 30.405556,
          "longitude": -87.228611,
        },
        "location": "Pensacola",
        "name": "Blue Wahoos",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 42.509444,
          "longitude": -89.036944,
        },
        "location": "Beloit",
        "name": "Sky Carp",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 26.890833,
          "longitude": -80.119722,
        },
        "location": "Jupiter",
        "name": "Hammerheads",
      },
  },
  "COL": {
    "MLB": {
        "coordinates": {
          "latitude": 39.756389,
          "longitude": -104.994444,
        },
        "location": "Colorado",
        "name": "Rockies",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 35.073889,
          "longitude": -106.614167,
        },
        "location": "Albuquerque",
        "name": "Isotopes",    
      },
      "AA": {
        "coordinates": {
          "latitude": 41.768333,
          "longitude": -72.676389,
        },
        "location": "Hartford",
        "name": "Yard Goats",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 47.628889,
          "longitude": -117.330833,
        },
        "location": "Spokane",
        "name": "Indians",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 36.731389,
          "longitude": -119.791111,
        },
        "location": "Fresno",
        "name": "Grizzlies",
      },
  },
  "CHW": {
    "MLB": {
        "coordinates": {
          "latitude": 41.83,
          "longitude": -87.633889,
        },
        "location": "Chicago",
        "name": "White Sox",    
      },
      "AAA": {
        "coordinates": {
          "latitude": 35.228611,
          "longitude": -80.845833,
        },
        "location": "Charlotte",
        "name": "Knights",    
      },
      "AA": {
        "coordinates": {
          "latitude": 33.500833,
          "longitude": -86.796944,
        },
        "location": "Birmingham",
        "name": "Barons",    
      },
      "High-A": {
        "coordinates": {
          "latitude": 36.095833,
          "longitude": -80.2375,
        },
        "location": "Winston-Salem",
        "name": "Dash",    
      },
      "Single-A": {
        "coordinates": {
          "latitude": 35.469167,
          "longitude": -80.626667,
        },
        "location": "Kannapolis",
        "name": "Cannon Ballers",
      }
    }
};