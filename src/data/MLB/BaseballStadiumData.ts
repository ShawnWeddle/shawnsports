import type { TeamInfoType } from "~/types/MapTypes";
import type { MLBTeamType, AAATeamType, AATeamType, HATeamType, SATeamType } from "./MLBdata";

export const MLBFieldData: {[Key in MLBTeamType] : TeamInfoType} = {
  ARI: {
    coordinates: {
      latitude: 33.445,
      longitude: -112.067
    },
    location: "Arizona",
    name: "Diamondbacks",
  },
  ATL: {
    coordinates: {
      latitude: 33.89,
      longitude: -84.468
    },
    location: "Atlanta",
    name: "Braves",
  },
  BAL: {
    coordinates: {
      latitude: 39.284,
      longitude: -76.622
    },
    location: "Baltimore",
    name: "Orioles",
  },
  BOS: {
    coordinates: {
      latitude: 42.346,
      longitude: -71.098
    },
    location: "Boston",
    name: "Red Sox",
  },
  CHC: {
    coordinates: {
      latitude: 41.948,
      longitude: -87.656
    },
    location: "Chicago",
    name: "Cubs",
  },
  CHW: {
    coordinates: {
      latitude: 41.83,
      longitude: -87.634
    },
    location: "Chicago",
    name: "White Sox",
  },
  CIN: {
    coordinates: {
      latitude: 39.097,
      longitude: -84.507
    },
    location: "Cincinnati",
    name: "Reds",
  },
  CLE: {
    coordinates: {
      latitude: 41.496,
      longitude: -81.685
    },
    location: "Cleveland",
    name: "Guardians",
  },
  COL: {
    coordinates: {
      latitude: 39.756,
      longitude: -104.994
    },
    location: "Colorado",
    name: "Rockies",
  },
  DET: {
    coordinates: {
      latitude: 42.339,
      longitude: -83.049
    },
    location: "Detroit",
    name: "Tigers",
  },
  HOU: {
    coordinates: {
      latitude: 29.757,
      longitude: -95.356
    },
    location: "Houston",
    name: "Astros",
  },
  KCR: {
    coordinates: {
      latitude: 39.052,
      longitude: -94.48
    },
    location: "Kansas City",
    name: "Royals",
  },
  LAA: {
    coordinates: {
      latitude: 33.8,
      longitude: -117.883
    },
    location: "Los Angeles",
    name: "Angels",
  },
  LAD: {
    coordinates: {
      latitude: 34.074,
      longitude: -118.24
    },
    location: "Los Angeles",
    name: "Dodgers",
  },
  MIA: {
    coordinates: {
      latitude: 25.778,
      longitude: -80.22
    },
    location: "Miami",
    name: "Marlins",
  },
  MIL: {
    coordinates: {
      latitude: 43.028,
      longitude: -87.971
    },
    location: "Milwaukee",
    name: "Brewers",
  },
  MIN: {
    coordinates: {
      latitude: 44.982,
      longitude: -93.278
    },
    location: "Minnesota",
    name: "Twins",
  },
  NYM: {
    coordinates: {
      latitude: 40.757,
      longitude: -73.846
    },
    location: "New York",
    name: "Mets",
  },
  NYY: {
    coordinates: {
      latitude: 40.829,
      longitude: -73.926
    },
    location: "New York",
    name: "Yankees",
  },
  OAK: {
    coordinates: {
      latitude: 38.58,
      longitude: -121.514
    },
    location: "Oakland",
    name: "Athletics",
  },
  PHI: {
    coordinates: {
      latitude: 39.906,
      longitude: -75.166
    },
    location: "Philadelphia",
    name: "Phillies",
  },
  PIT: {
    coordinates: {
      latitude: 40.447,
      longitude: -80.006
    },
    location: "Pittsburgh",
    name: "Pirates",
  },
  SDP: {
    coordinates: {
      latitude: 32.707,
      longitude: -117.157
    },
    location: "San Diego",
    name: "Padres",
  },
  SEA: {
    coordinates: {
      latitude: 47.591,
      longitude: -122.333
    },
    location: "Seattle",
    name: "Mariners",
  },
  SFG: {
    coordinates: {
      latitude: 37.779,
      longitude: -122.389
    },
    location: "San Francisco",
    name: "Giants",
  },
  STL: {
    coordinates: {
      latitude: 38.623,
      longitude: -90.193
    },
    location: "St. Louis",
    name: "Cardinals",
  },
  TBR: {
    coordinates: {
      latitude: 27.768,
      longitude: -82.653
    },
    location: "Tampa Bay",
    name: "Rays",
  },
  TEX: {
    coordinates: {
      latitude: 32.747,
      longitude: -97.084
    },
    location: "Texas",
    name: "Rangers",
  },
  TOR: {
    coordinates: {
      latitude: 43.641,
      longitude: -79.389
    },
    location: "Toronto",
    name: "Blue Jays",
  },
  WSN: {
    coordinates: {
      latitude: 38.873,
      longitude: -77.007
    },
    location: "Washington",
    name: "Nationals",
  },
};

export const AAAFieldData: {[Key in AAATeamType] : TeamInfoType} = {
  "AAA-ARI": {
    coordinates: {
      latitude: 39.528,
      longitude: -119.808
    },
    location: "Reno",
    name: "Aces",
  },
  "AAA-ATL": {
    coordinates: {
      latitude: 34.041,
      longitude: -83.992
    },
    location: "Gwinnett",
    name: "Stripers",
  },
  "AAA-BAL": {
    coordinates: {
      latitude: 36.843,
      longitude: -76.279
    },
    location: "Norfolk",
    name: "Tides",
  },
  "AAA-BOS": {
    coordinates: {
      latitude: 42.257,
      longitude: -71.800
    },
    location: "Worcester",
    name: "Red Sox",
  },
  "AAA-CHC": {
    coordinates: {
      latitude: 41.580,
      longitude: -93.616
    },
    location: "Iowa",
    name: "Cubs",
  },
  "AAA-CHW": {
    coordinates: {
      latitude: 35.228,
      longitude: -80.849
    },
    location: "Charlotte",
    name: "Knights",
  },
  "AAA-CIN": {
    coordinates: {
      latitude: 38.256,
      longitude: -85.745
    },
    location: "Louisville",
    name: "Bats",
  },
  "AAA-CLE": {
    coordinates: {
      latitude: 39.969,
      longitude: -83.011
    },
    location: "Columbus",
    name: "Clippers",
  },
  "AAA-COL": {
    coordinates: {
      latitude: 35.070,
      longitude: -106.629
    },
    location: "Albuquerque",
    name: "Isotopes",
  },
  "AAA-DET": {
    coordinates: {
      latitude: 41.649,
      longitude: -83.539
    },
    location: "Toledo",
    name: "Mud Hens",
  },
  "AAA-HOU": {
    coordinates: {
      latitude: 29.623,
      longitude: -95.647
    },
    location: "Sugar Land",
    name: "Space Cowboys",
  },
  "AAA-KCR": {
    coordinates: {
      latitude: 41.152,
      longitude: -96.107
    },
    location: "Omaha",
    name: "Storm Chasers",
  },
  "AAA-LAA": {
    coordinates: {
      latitude: 40.550,
      longitude: -112.023
    },
    location: "Salt Lake",
    name: "Bees",
  },
  "AAA-LAD": {
    coordinates: {
      latitude: 35.465,
      longitude: -97.508
    },
    location: "Oklahoma City",
    name: "Comets",
  },
  "AAA-MIA": {
    coordinates: {
      latitude: 30.325,
      longitude: -81.643
    },
    location: "Jacksonville",
    name: "Jumbo Shrimp",
  },
  "AAA-MIL": {
    coordinates: {
      latitude: 36.173,
      longitude: -86.785
    },
    location: "Nashville",
    name: "Sounds",
  },
  "AAA-MIN": {
    coordinates: {
      latitude: 44.951,
      longitude: -93.085
    },
    location: "St. Paul",
    name: "Saints",
  },
  "AAA-NYM": {
    coordinates: {
      latitude: 43.079,
      longitude: -76.165
    },
    location: "Syracuse",
    name: "Mets",
  },
  "AAA-NYY": {
    coordinates: {
      latitude: 41.360,
      longitude: -75.684
    },
    location: "Scranton/Wilkes-Barre",
    name: "RailRiders",
  },
  "AAA-OAK": {
    coordinates: {
      latitude: 36.153,
      longitude: -115.330
    },
    location: "Las Vegas",
    name: "Aviators",
  },
  "AAA-PHI": {
    coordinates: {
      latitude: 40.626,
      longitude: -75.453
    },
    location: "Lehigh Valley",
    name: "IronPigs",
  },
  "AAA-PIT": {
    coordinates: {
      latitude: 39.765,
      longitude: -86.169
    },
    location: "Indianapolis",
    name: "Indians",
  },
  "AAA-SDP": {
    coordinates: {
      latitude: 31.759,
      longitude: -106.493
    },
    location: "El Paso",
    name: "Chihuahuas",
  },
  "AAA-SEA": {
    coordinates: {
      latitude: 47.228,
      longitude: -122.498
    },
    location: "Tacoma",
    name: "Rainiers",
  },
  "AAA-SFG": {
    coordinates: {
      latitude: 38.580,
      longitude: -121.514
    },
    location: "Sacramento",
    name: "River Cats",
  },
  "AAA-STL": {
    coordinates: {
      latitude: 35.143,
      longitude: -90.050
    },
    location: "Memphis",
    name: "Redbirds",
  },
  "AAA-TBR": {
    coordinates: {
      latitude: 35.992,
      longitude: -78.904
    },
    location: "Durham",
    name: "Bulls",
  },
  "AAA-TEX": {
    coordinates: {
      latitude: 30.528,
      longitude: -97.630
    },
    location: "Round Rock",
    name: "Express",
  },
  "AAA-TOR": {
    coordinates: {
      latitude: 42.880,
      longitude: -78.874
    },
    location: "Buffalo",
    name: "Bisons",
  },
  "AAA-WSN": {
    coordinates: {
      latitude: 43.158,
      longitude: -77.620
    },
    location: "Rochester",
    name: "Red Wings",
  }
};

export const AAFieldData: {[Key in AATeamType] : TeamInfoType} = {
  "AA-ARI": {
    coordinates: {
      latitude: 35.22,
      longitude: -101.821
    },
    location: "Amarillo",
    name: "Sod Poodles",
  },
  "AA-ATL": {
    coordinates: {
      latitude: 32.452,
      longitude: -84.992
    },
    location: "Columbus",
    name: "Clingstones",
  },
  "AA-BAL": {
    coordinates: {
      latitude: 38.906,
      longitude: -76.725
    },
    location: "Chesapeake",
    name: "Baysox",
  },
  "AA-BOS": {
    coordinates: {
      latitude: 43.649,
      longitude: -70.277
    },
    location: "Portland",
    name: "Sea Dogs",
  },
  "AA-CHC": {
    coordinates: {
      latitude: 35.97,
      longitude: -83.606
    },
    location: "Knoxville",
    name: "Smokies",
  },
  "AA-CHW": {
    coordinates: {
      latitude: 33.501,
      longitude: -86.797
    },
    location: "Birmingham",
    name: "Barons",
  },
  "AA-CIN": {
    coordinates: {
      latitude: 35.054,
      longitude: -85.302
    },
    location: "Chattanooga",
    name: "Lookouts",
  },
  "AA-CLE": {
    coordinates: {
      latitude: 41.081,
      longitude: -81.509
    },
    location: "Akron",
    name: "RubberDucks",
  },
  "AA-COL": {
    coordinates: {
      latitude: 41.768,
      longitude: -72.676
    },
    location: "Hartford",
    name: "Yard Goats",
  },
  "AA-DET": {
    coordinates: {
      latitude: 42.13,
      longitude: -80.086
    },
    location: "Erie",
    name: "SeaWolves",
  },
  "AA-HOU": {
    coordinates: {
      latitude: 27.813,
      longitude: -97.384
    },
    location: "Corpus Christi",
    name: "Hooks",
  },
  "AA-KCR": {
    coordinates: {
      latitude: 36.195,
      longitude: -94.136
    },
    location: "Northwest Arkansas",
    name: "Naturals",
  },
  "AA-LAA": {
    coordinates: {
      latitude: 34.629,
      longitude: -86.777
    },
    location: "Rocket City",
    name: "Trash Pandas",
  },
  "AA-LAD": {
    coordinates: {
      latitude: 36.154,
      longitude: -95.984
    },
    location: "Tulsa",
    name: "Drillers",
  },
  "AA-MIA": {
    coordinates: {
      latitude: 30.406,
      longitude: -87.229
    },
    location: "Pensacola",
    name: "Blue Wahoos",
  },
  "AA-MIL": {
    coordinates: {
      latitude: 30.393,
      longitude: -88.882
    },
    location: "Biloxi",
    name: "Shuckers",
  },
  "AA-MIN": {
    coordinates: {
      latitude: 37.682,
      longitude: -97.346
    },
    location: "Wichita",
    name: "Wind Surge",
  },
  "AA-NYM": {
    coordinates: {
      latitude: 42.091,
      longitude: -75.914
    },
    location: "Binghamton",
    name: "Rumble Ponies",
  },
  "AA-NYY": {
    coordinates: {
      latitude: 40.571,
      longitude: -74.545
    },
    location: "Somerset",
    name: "Patriots",
  },
  "AA-OAK": {
    coordinates: {
      latitude: 32.012,
      longitude: -102.147
    },
    location: "Midland",
    name: "RockHounds",
  },
  "AA-PHI": {
    coordinates: {
      latitude: 40.354,
      longitude: -75.902
    },
    location: "Reading",
    name: "Fightin Phils",
  },
  "AA-PIT": {
    coordinates: {
      latitude: 40.505,
      longitude: -78.372
    },
    location: "Altoona",
    name: "Curve",
  },
  "AA-SDP": {
    coordinates: {
      latitude: 29.437,
      longitude: -98.601
    },
    location: "San Antonio",
    name: "Missions",
  },
  "AA-SEA": {
    coordinates: {
      latitude: 34.781,
      longitude: -92.253
    },
    location: "Arkansas",
    name: "Travelers",
  },
  "AA-SFG": {
    coordinates: {
      latitude: 37.6,
      longitude: -77.456
    },
    location: "Richmond",
    name: "Flying Squirrels",
  },
  "AA-STL": {
    coordinates: {
      latitude: 37.216,
      longitude: -93.292
    },
    location: "Springfield",
    name: "Cardinals",
  },
  "AA-TBR": {
    coordinates: {
      latitude: 32.38,
      longitude: -86.305
    },
    location: "Montgomery",
    name: "Biscuits",
  },
  "AA-TEX": {
    coordinates: {
      latitude: 33.122,
      longitude: -96.829
    },
    location: "Frisco",
    name: "RoughRiders",
  },
  "AA-TOR": {
    coordinates: {
      latitude: 42.98,
      longitude: -71.452
    },
    location: "New Hampshire",
    name: "Fisher Cats",
  },
  "AA-WSN": {
    coordinates: {
      latitude: 40.257,
      longitude: -76.878
    },
    location: "Harrisburg",
    name: "Senators",
  }
};

export const HAFieldData: {[Key in HATeamType] : TeamInfoType} = {
  "HA-ARI": {
    coordinates: {
      latitude: 45.52,
      longitude: -122.97
    },
    location: "Hillsboro",
    name: "Hops",
  },
  "HA-ATL": {
    coordinates: {
      latitude: 34.253,
      longitude: -85.175
    },
    location: "Rome",
    name: "Emperors",
  },
  "HA-BAL": {
    coordinates: {
      latitude: 39.517,
      longitude: -76.153
    },
    location: "Frederick",
    name: "Keys",
  },
  "HA-BOS": {
    coordinates: {
      latitude: 34.846,
      longitude: -82.396
    },
    location: "Greenville",
    name: "Drive",
  },
  "HA-CHC": {
    coordinates: {
      latitude: 41.677,
      longitude: -86.277
    },
    location: "South Bend",
    name: "Cubs",
  },
  "HA-CHW": {
    coordinates: {
      latitude: 36.096,
      longitude: -80.237
    },
    location: "Winston-Salem",
    name: "Dash",
  },
  "HA-CIN": {
    coordinates: {
      latitude: 39.759,
      longitude: -84.193
    },
    location: "Dayton",
    name: "Dragons",
  },
  "HA-CLE": {
    coordinates: {
      latitude: 41.695,
      longitude: -81.45
    },
    location: "Lake County",
    name: "Captains",
  },
  "HA-COL": {
    coordinates: {
      latitude: 47.629,
      longitude: -117.331
    },
    location: "Spokane",
    name: "Indians",
  },
  "HA-DET": {
    coordinates: {
      latitude: 43.036,
      longitude: -85.676
    },
    location: "West Michigan",
    name: "Whitecaps",
  },
  "HA-HOU": {
    coordinates: {
      latitude: 35.595,
      longitude: -82.541
    },
    location: "Asheville",
    name: "Tourists",
  },
  "HA-KCR": {
    coordinates: {
      latitude: 41.527,
      longitude: -90.571
    },
    location: "Quad Cities",
    name: "River Bandits",
  },
  "HA-LAA": {
    coordinates: {
      latitude: 46.237,
      longitude: -119.112
    },
    location: "Tri-City",
    name: "Dust Devils",
  },
  "HA-LAD": {
    coordinates: {
      latitude: 43.601,
      longitude: -84.253
    },
    location: "Great Lakes",
    name: "Loons",
  },
  "HA-MIA": {
    coordinates: {
      latitude: 42.509,
      longitude: -89.037
    },
    location: "Beloit",
    name: "Sky Carp",
  },
  "HA-MIL": {
    coordinates: {
      latitude: 44.262,
      longitude: -88.325
    },
    location: "Wisconsin",
    name: "Timber Rattlers",
  },
  "HA-MIN": {
    coordinates: {
      latitude: 41.986,
      longitude: -91.674
    },
    location: "Cedar Rapids",
    name: "Kernels",
  },
  "HA-NYM": {
    coordinates: {
      latitude: 40.572,
      longitude: -73.981
    },
    location: "Brooklyn",
    name: "Cyclones",
  },
  "HA-NYY": {
    coordinates: {
      latitude: 41.584,
      longitude: -73.935
    },
    location: "Hudson Valley",
    name: "Renegades",
  },
  "HA-OAK": {
    coordinates: {
      latitude: 42.734,
      longitude: -84.545
    },
    location: "Lansing",
    name: "Lugnuts",
  },
  "HA-PHI": {
    coordinates: {
      latitude: 40.102,
      longitude: -74.195
    },
    location: "Jersey Shore",
    name: "BlueClaws",
  },
  "HA-PIT": {
    coordinates: {
      latitude: 36.074,
      longitude: -79.789
    },
    location: "Greensboro",
    name: "Grasshoppers",
  },
  "HA-SDP": {
    coordinates: {
      latitude: 41.074,
      longitude: -85.146
    },
    location: "Fort Wayne",
    name: "TinCaps",
  },
  "HA-SEA": {
    coordinates: {
      latitude: 47.986,
      longitude: -122.217
    },
    location: "Everett",
    name: "AquaSox",
  },
  "HA-SFG": {
    coordinates: {
      latitude: 44.064,
      longitude: -123.041
    },
    location: "Eugene",
    name: "Emeralds",
  },
  "HA-STL": {
    coordinates: {
      latitude: 40.687,
      longitude: -89.593
    },
    location: "Peoria",
    name: "Chiefs",
  },
  "HA-TBR": {
    coordinates: {
      latitude: 36.986,
      longitude: -86.452
    },
    location: "Bowling Green",
    name: "Hot Rods",
  },
  "HA-TEX": {
    coordinates: {
      latitude: 34.947,
      longitude: -81.919
    },
    location: "Hub City",
    name: "Spartanburgers",
  },
  "HA-TOR": {
    coordinates: {
      latitude: 49.24,
      longitude: -123.108
    },
    location: "Vancouver",
    name: "Canadians",
  },
  "HA-WSN": {
    coordinates: {
      latitude: 39.745,
      longitude: -75.555
    },
    location: "Wilmington",
    name: "Blue Rocks",
  }
};

export const SAFieldData: {[Key in SATeamType] : TeamInfoType} = {
  "SA-ARI": {
    coordinates: {
      latitude: 36.336,
      longitude: -119.294
    },
    location: "Visalia",
    name: "Rawhide",
  },
  "SA-ATL": {
    coordinates: {
      latitude: 33.501,
      longitude: -81.968
    },
    location: "Augusta",
    name: "GreenJackets",
  },
  "SA-BAL": {
    coordinates: {
      latitude: 38.367,
      longitude: -75.555
    },
    location: "Delmarva",
    name: "Shorebirds",
  },
  "SA-BOS": {
    coordinates: {
      latitude: 37.274,
      longitude: -80.036
    },
    location: "Salem",
    name: "RidgeYaks",
  },
  "SA-CHC": {
    coordinates: {
      latitude: 33.703,
      longitude: -78.869
    },
    location: "Myrtle Beach",
    name: "Pelicans",
  },
  "SA-CHW": {
    coordinates: {
      latitude: 35.469,
      longitude: -80.627
    },
    location: "Kannapolis",
    name: "Cannon Ballers",
  },
  "SA-CIN": {
    coordinates: {
      latitude: 29.228,
      longitude: -81.02
    },
    location: "Daytona",
    name: "Tortugas",
  },
  "SA-CLE": {
    coordinates: {
      latitude: 37.403,
      longitude: -79.154
    },
    location: "Hill City",
    name: "Howlers",
  },
  "SA-COL": {
    coordinates: {
      latitude: 36.731,
      longitude: -119.791
    },
    location: "Fresno",
    name: "Grizzlies",
  },
  "SA-DET": {
    coordinates: {
      latitude: 28.047,
      longitude: -81.954
    },
    location: "Lakeland",
    name: "Flying Tigers",
  },
  "SA-HOU": {
    coordinates: {
      latitude: 35.053,
      longitude: -78.884
    },
    location: "Fayetteville",
    name: "Woodpeckers",
  },
  "SA-KCR": {
    coordinates: {
      latitude: 34.012,
      longitude: -81.035
    },
    location: "Columbia",
    name: "Fireflies",
  },
  "SA-LAA": {
    coordinates: {
      latitude: 34.112,
      longitude: -117.584
    },
    location: "Rancho Cucamonga",
    name: "Quakes",
  },
  "SA-LAD": {
    coordinates: {
      latitude: 34.018,
      longitude: -117.604
    },
    location: "Ontario",
    name: "Tower Buzzers",
  },
  "SA-MIA": {
    coordinates: {
      latitude: 26.891,
      longitude: -80.12
    },
    location: "Jupiter",
    name: "Hammerheads",
  },
  "SA-MIN": {
    coordinates: {
      latitude: 26.555,
      longitude: -81.914
    },
    location: "Fort Myers",
    name: "Mighty Mussels",
  },
  "SA-MIL": {
    coordinates: {
      latitude: 35.721,
      longitude: -77.915
    },
    location: "Wilson",
    name: "Warbirds",
  },
  "SA-NYM": {
    coordinates: {
      latitude: 27.277,
      longitude: -80.337
    },
    location: "St. Lucie",
    name: "Mets",
  },
  "SA-NYY": {
    coordinates: {
      latitude: 27.98,
      longitude: -82.507
    },
    location: "Tampa",
    name: "Tarpons",
  },
  "SA-OAK": {
    coordinates: {
      latitude: 37.951,
      longitude: -121.291
    },
    location: "Stockton",
    name: "Ports",
  },
  "SA-PHI": {
    coordinates: {
      latitude: 27.944,
      longitude: -82.758
    },
    location: "Clearwater",
    name: "Threshers",
  },
  "SA-PIT": {
    coordinates: {
      latitude: 27.49,
      longitude: -82.563
    },
    location: "Bradenton",
    name: "Marauders",
  },
  "SA-SDP": {
    coordinates: {
      latitude: 33.653,
      longitude: -117.33
    },
    location: "Lake Elsinore",
    name: "Storm",
  },
  "SA-SEA": {
    coordinates: {
      latitude: 34.09,
      longitude: -117.29
    },
    location: "Inland Empire",
    name: "66ers",
  },
  "SA-SFG": {
    coordinates: {
      latitude: 37.328,
      longitude: -121.869
    },
    location: "San Jose",
    name: "Giants",
  },
  "SA-STL": {
    coordinates: {
      latitude: 26.891,
      longitude: -80.12
    },
    location: "Palm Beach",
    name: "Cardinals",
  },
  "SA-TOR": {
    coordinates: {
      latitude: 28.004,
      longitude: -82.787
    },
    location: "Dunedin",
    name: "Blue Jays",
  },
  "SA-TBR": {
    coordinates: {
      latitude: 32.768,
      longitude: -79.986
    },
    location: "Charleston",
    name: "RiverDogs",
  },
  "SA-TEX": {
    coordinates: {
      latitude: 35.735,
      longitude: -81.372
    },
    location: "Hickory",
    name: "Crawdads",
  },
  "SA-WSN": {
    coordinates: {
      latitude: 38.277,
      longitude: -77.45
    },
    location: "Fredericksburg",
    name: "Nationals",
  },
};