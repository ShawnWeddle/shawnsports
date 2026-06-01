import { type MLBTeamType } from "./MLBdata"

export type TierType = "MLB" |"AAA" | "AA" | "High-A" | "Single-A";

export type MiLBInfoTypeA = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  tier: TierType;
  parentTeam: MLBTeamType;
};

export type MiLBInfoTypeB = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
};

export const milbList: MiLBInfoTypeA[] = [
  {
    coordinates: {
      latitude: 33.454,
      longitude: -112.08,
    },
    location: "Arizona",
    name: "Diamondbacks",
    parentTeam: "ARI",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 33.954,
      longitude: -84.455,
    },
    location: "Atlanta",
    name: "Braves",
    parentTeam: "ATL",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.284,
      longitude: -76.622,
    },
    location: "Baltimore",
    name: "Orioles",
    parentTeam: "BAL",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 42.346,
      longitude: -71.097,
    },
    location: "Boston",
    name: "Red Sox",
    parentTeam: "BOS",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 41.948,
      longitude: -87.656,
    },
    location: "Chicago",
    name: "Cubs",
    parentTeam: "CHC",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 41.83,
      longitude: -87.634,
    },
    location: "Chicago",
    name: "White Sox",
    parentTeam: "CHW",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.095,
      longitude: -84.506,
    },
    location: "Cincinnati",
    name: "Reds",
    parentTeam: "CIN",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 41.496,
      longitude: -81.685,
    },
    location: "Cleveland",
    name: "Guardians",
    parentTeam: "CLE",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.756,
      longitude: -104.994,
    },
    location: "Colorado",
    name: "Rockies",
    parentTeam: "COL",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 42.339,
      longitude: -83.049,
    },
    location: "Detroit",
    name: "Tigers",
    parentTeam: "DET",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 29.757,
      longitude: -95.356,
    },
    location: "Houston",
    name: "Astros",
    parentTeam: "HOU",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.051,
      longitude: -94.479,
    },
    location: "Kansas City",
    name: "Royals",
    parentTeam: "KCR",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 33.8,
      longitude: -117.883,
    },
    location: "Los Angeles",
    name: "Angels",
    parentTeam: "LAA",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 34.081,
      longitude: -118.239,
    },
    location: "Los Angeles",
    name: "Dodgers",
    parentTeam: "LAD",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 25.776,
      longitude: -80.221,
    },
    location: "Miami",
    name: "Marlins",
    parentTeam: "MIA",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 43.041,
      longitude: -87.968,
    },
    location: "Milwaukee",
    name: "Brewers",
    parentTeam: "MIL",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 44.982,
      longitude: -93.278,
    },
    location: "Minnesota",
    name: "Twins",
    parentTeam: "MIN",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 40.757,
      longitude: -73.833,
    },
    location: "New York",
    name: "Mets",
    parentTeam: "NYM",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 40.829,
      longitude: -73.926,
    },
    location: "New York",
    name: "Yankees",
    parentTeam: "NYY",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 38.58,
      longitude: -121.514,
    },
    location: "The",
    name: "Athletics",
    parentTeam: "OAK",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.906,
      longitude: -75.166,
    },
    location: "Philadelphia",
    name: "Phillies",
    parentTeam: "PHI",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 40.447,
      longitude: -80.01,
    },
    location: "Pittsburgh",
    name: "Pirates",
    parentTeam: "PIT",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 32.708,
      longitude: -117.157,
    },
    location: "San Diego",
    name: "Padres",
    parentTeam: "SDP",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 47.591,
      longitude: -122.332,
    },
    location: "Seattle",
    name: "Mariners",
    parentTeam: "SEA",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 37.795,
      longitude: -122.39,
    },
    location: "San Francisco",
    name: "Giants",
    parentTeam: "SFG",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 38.625,
      longitude: -90.193,
    },
    location: "St. Louis",
    name: "Cardinals",
    parentTeam: "STL",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 27.768, 
      longitude: -82.653,
    },
    location: "Tampa Bay",
    name: "Rays",
    parentTeam: "TBR",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 32.751,
      longitude: -97.083,
    },
    location: "Texas",
    name: "Rangers",
    parentTeam: "TEX",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 43.641,
      longitude: -79.39,
    },
    location: "Toronto",
    name: "Blue Jays",
    parentTeam: "TOR",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 38.874,
      longitude: -77.009,
    },
    location: "Washington",
    name: "Nationals",
    parentTeam: "WSN",
    tier: "MLB",
  },
  {
    coordinates: {
      latitude: 39.525,
      longitude: -119.828,
    },
    location: "Reno",
    name: "Aces",
    parentTeam: "ARI",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 34.039,
      longitude: -84.07,
    },
    location: "Gwinnett",
    name: "Stripers",
    parentTeam: "ATL",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 36.847,
      longitude: -76.283,
    },
    location: "Norfolk",
    name: "Tides",
    parentTeam: "BAL",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 42.26,
      longitude: -71.794,
    },
    location: "Worcester",
    name: "Red Sox",
    parentTeam: "BOS",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 41.59,
      longitude: -93.628,
    },
    location: "Iowa",
    name: "Cubs",
    parentTeam: "CHC",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.229,
      longitude: -80.846,
    },
    location: "Charlotte",
    name: "Knights",
    parentTeam: "CHW",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 38.253,
      longitude: -85.734,
    },
    location: "Louisville",
    name: "Bats",
    parentTeam: "CIN",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 39.962,
      longitude: -83.004,
    },
    location: "Columbus",
    name: "Clippers",
    parentTeam: "CLE",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.074,
      longitude: -106.614,
    },
    location: "Albuquerque",
    name: "Isotopes",
    parentTeam: "COL",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 41.653,
      longitude: -83.542,
    },
    location: "Toledo",
    name: "Mud Hens",
    parentTeam: "DET",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 29.594,
      longitude: -95.629,
    },
    location: "Sugar Land",
    name: "Space Cowboys",
    parentTeam: "HOU",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 41.164,
      longitude: -96.089,
    },
    location: "Omaha",
    name: "Storm Chasers",
    parentTeam: "KCR",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 40.532,
      longitude: -111.89,
    },
    location: "Salt Lake",
    name: "Bees",
    parentTeam: "LAA",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.462,
      longitude: -97.513,
    },
    location: "Oklahoma City",
    name: "Comets",
    parentTeam: "LAD",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 30.325,
      longitude: -81.641,
    },
    location: "Jacksonville",
    name: "Jumbo Shrimp",
    parentTeam: "MIA",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 36.169,
      longitude: -86.786,
    },
    location: "Nashville",
    name: "Sounds",
    parentTeam: "MIL",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 44.951,
      longitude: -93.092,
    },
    location: "St. Paul",
    name: "Saints",
    parentTeam: "MIN",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 43.069,
      longitude: -76.158,
    },
    location: "Syracuse",
    name: "Mets",
    parentTeam: "NYM",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 41.362,
      longitude: -75.76,
    },
    location: "Scranton/Wilkes-Barre",
    name: "RailRiders",
    parentTeam: "NYY",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 36.053,
      longitude: -115.336,
    },
    location: "Las Vegas",
    name: "Aviators",
    parentTeam: "OAK",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 40.639,
      longitude: -75.469,
    },
    location: "Lehigh Valley",
    name: "IronPigs",
    parentTeam: "PHI",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 39.768,
      longitude: -86.171,
    },
    location: "Indianapolis",
    name: "Indians",
    parentTeam: "PIT",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 31.75,
      longitude: -106.508,
    },
    location: "El Paso",
    name: "Chihuahuas",
    parentTeam: "SDP",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 47.223,
      longitude: -122.491,
    },
    location: "Tacoma",
    name: "Rainiers",
    parentTeam: "SEA",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 38.587,
      longitude: -121.517,
    },
    location: "Sacramento",
    name: "River Cats",
    parentTeam: "SFG",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.15,
      longitude: -90.05,
    },
    location: "Memphis",
    name: "Redbirds",
    parentTeam: "STL",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.973,
      longitude: -78.903,
    },
    location: "Durham",
    name: "Bulls",
    parentTeam: "TBR",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 30.512,
      longitude: -97.617,
    },
    location: "Round Rock",
    name: "Express",
    parentTeam: "TEX",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 42.891,
      longitude: -78.878,
    },
    location: "Buffalo",
    name: "Bisons",
    parentTeam: "TOR",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 43.153,
      longitude: -77.604,
    },
    location: "Rochester",
    name: "Red Wings",
    parentTeam: "WSN",
    tier: "AAA",
  },
  {
    coordinates: {
      latitude: 35.22,
      longitude: -101.821,
    },
    location: "Amarillo",
    name: "Sod Poodles",
    parentTeam: "ARI",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 32.452,
      longitude: -84.992
    },
    location: "Columbus",
    name: "Clingstones",
    parentTeam: "ATL",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 38.906,
      longitude: -76.725,
    },
    location: "Chesapeake",
    name: "Baysox",
    parentTeam: "BAL",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 43.649,
      longitude: -70.277,
    },
    location: "Portland",
    name: "Sea Dogs",
    parentTeam: "BOS",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 35.97,
      longitude: -83.606,
    },
    location: "Knoxville",
    name: "Smokies",
    parentTeam: "CHC",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 33.501,
      longitude: -86.797,
    },
    location: "Birmingham",
    name: "Barons",
    parentTeam: "CHW",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 35.054,
      longitude: -85.302,
    },
    location: "Chattanooga",
    name: "Lookouts",
    parentTeam: "CIN",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 41.081,
      longitude: -81.509,
    },
    location: "Akron",
    name: "RubberDucks",
    parentTeam: "CLE",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 41.768,
      longitude: -72.676,
    },
    location: "Hartford",
    name: "Yard Goats",
    parentTeam: "COL",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 42.13,
      longitude: -80.086,
    },
    location: "Erie",
    name: "SeaWolves",
    parentTeam: "DET",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 27.813,
      longitude: -97.384,
    },
    location: "Corpus Christi",
    name: "Hooks",
    parentTeam: "HOU",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 36.195,
      longitude: -94.136,
    },
    location: "Northwest Arkansas",
    name: "Naturals",
    parentTeam: "KCR",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 34.629,
      longitude: -86.777,
    },
    location: "Rocket City",
    name: "Trash Pandas",
    parentTeam: "LAA",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 36.154,
      longitude: -95.984,
    },
    location: "Tulsa",
    name: "Drillers",
    parentTeam: "LAD",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 30.406,
      longitude: -87.229,
    },
    location: "Pensacola",
    name: "Blue Wahoos",
    parentTeam: "MIA",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 30.393,
      longitude: -88.882,
    },
    location: "Biloxi",
    name: "Shuckers",
    parentTeam: "MIL",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 37.682,
      longitude: -97.346,
    },
    location: "Wichita",
    name: "Wind Surge",
    parentTeam: "MIN",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 42.091,
      longitude: -75.914,
    },
    location: "Binghamton",
    name: "Rumble Ponies",
    parentTeam: "NYM",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 40.571,
      longitude: -74.545,
    },
    location: "Somerset",
    name: "Patriots",
    parentTeam: "NYY",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 32.012,
      longitude: -102.147,
    },
    location: "Midland",
    name: "RockHounds",
    parentTeam: "OAK",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 40.354,
      longitude: -75.902,
    },
    location: "Reading",
    name: "Fightin Phils",
    parentTeam: "PHI",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 40.505,
      longitude: -78.372,
    },
    location: "Altoona",
    name: "Curve",
    parentTeam: "PIT",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 29.437,
      longitude: -98.601,
    },
    location: "San Antonio",
    name: "Missions",
    parentTeam: "SDP",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 34.781,
      longitude: -92.253,
    },
    location: "Arkansas",
    name: "Travelers",
    parentTeam: "SEA",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 37.6,
      longitude: -77.456,
    },
    location: "Richmond",
    name: "Flying Squirrels",
    parentTeam: "SFG",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 37.216,
      longitude: -93.291,
    },
    location: "Springfield",
    name: "Cardinals",
    parentTeam: "STL",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 32.38,
      longitude: -86.305,
    },
    location: "Montgomery",
    name: "Biscuits",
    parentTeam: "TBR",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 33.122,
      longitude: -96.829,
    },
    location: "Frisco",
    name: "RoughRiders",
    parentTeam: "TEX",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 42.98,
      longitude: -71.452,
    },
    location: "New Hampshire",
    name: "Fisher Cats",
    parentTeam: "TOR",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 40.257,
      longitude: -76.878,
    },
    location: "Harrisburg",
    name: "Senators",
    parentTeam: "WSN",
    tier: "AA",
  },
  {
    coordinates: {
      latitude: 45.52,
      longitude: -122.97,
    },
    location: "Hillsboro",
    name: "Hops",
    parentTeam: "ARI",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 34.253,
      longitude: -85.175,
    },
    location: "Rome",
    name: "Emperors",
    parentTeam: "ATL",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 39.517,
      longitude: -76.153,
    },
    location: "Frederick",
    name: "Keys",
    parentTeam: "BAL",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 34.846,
      longitude: -82.396,
    },
    location: "Greenville",
    name: "Drive",
    parentTeam: "BOS",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.677,
      longitude: -86.277,
    },
    location: "South Bend",
    name: "Cubs",
    parentTeam: "CHC",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 36.096,
      longitude: -80.237,
    },
    location: "Winston-Salem",
    name: "Dash",
    parentTeam: "CHW",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 39.759,
      longitude: -84.193,
    },
    location: "Dayton",
    name: "Dragons",
    parentTeam: "CIN",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.695,
      longitude: -81.45,
    },
    location: "Lake County",
    name: "Captains",
    parentTeam: "CLE",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 47.629,
      longitude: -117.331,
    },
    location: "Spokane",
    name: "Indians",
    parentTeam: "COL",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 43.036,
      longitude: -85.676,
    },
    location: "West Michigan",
    name: "Whitecaps",
    parentTeam: "DET",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 35.595,
      longitude: -82.541,
    },
    location: "Asheville",
    name: "Tourists",
    parentTeam: "HOU",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.527,
      longitude: -90.571,
    },
    location: "Quad Cities",
    name: "River Bandits",
    parentTeam: "KCR",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 46.237,
      longitude: -119.112,
    },
    location: "Tri-City",
    name: "Dust Devils",
    parentTeam: "LAA",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 43.601,
      longitude: -84.253,
    },
    location: "Great Lakes",
    name: "Loons",
    parentTeam: "LAD",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 42.509,
      longitude: -89.037,
    },
    location: "Beloit",
    name: "Sky Carp",
    parentTeam: "MIA",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 44.262,
      longitude: -88.325,
    },
    location: "Wisconsin",
    name: "Timber Rattlers",
    parentTeam: "MIL",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.986,
      longitude: -91.674,
    },
    location: "Cedar Rapids",
    name: "Kernels",
    parentTeam: "MIN",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 40.572,
      longitude: -73.981,
    },
    location: "Brooklyn",
    name: "Cyclones",
    parentTeam: "NYM",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.584,
      longitude: -73.935,
    },
    location: "Hudson Valley",
    name: "Renegades",
    parentTeam: "NYY",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 42.734,
      longitude: -84.545,
    },
    location: "Lansing",
    name: "Lugnuts",
    parentTeam: "OAK",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 40.102,
      longitude: -74.195,
    },
    location: "Jersey Shore",
    name: "BlueClaws",
    parentTeam: "PHI",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 36.074,
      longitude: -79.789,
    },
    location: "Greensboro",
    name: "Grasshoppers",
    parentTeam: "PIT",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 41.074,
      longitude: -85.146,
    },
    location: "Fort Wayne",
    name: "TinCaps",
    parentTeam: "SDP",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 47.986,
      longitude: -122.217,
    },
    location: "Everett",
    name: "AquaSox",
    parentTeam: "SEA",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 44.064,
      longitude: -123.041,
    },
    location: "Eugene",
    name: "Emeralds",
    parentTeam: "SFG",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 40.687,
      longitude: -89.593,
    },
    location: "Peoria",
    name: "Chiefs",
    parentTeam: "STL",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 36.986,
      longitude: -86.452,
    },
    location: "Bowling Green",
    name: "Hot Rods",
    parentTeam: "TBR",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 34.947,
      longitude: -81.919,
    },
    location: "Hub City",
    name: "Spartanburgers",
    parentTeam: "TEX",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 49.24,
      longitude: -123.108,
    },
    location: "Vancouver",
    name: "Canadians",
    parentTeam: "TOR",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 39.745,
      longitude: -75.555,
    },
    location: "Wilmington",
    name: "Blue Rocks",
    parentTeam: "WSN",
    tier: "High-A",
  },
  {
    coordinates: {
      latitude: 36.336,
      longitude: -119.294,
    },
    location: "Visalia",
    name: "Rawhide",
    parentTeam: "ARI",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 33.501,
      longitude: -81.968,
    },
    location: "Augusta",
    name: "GreenJackets",
    parentTeam: "ATL",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 38.367,
      longitude: -75.555,
    },
    location: "Delmarva",
    name: "Shorebirds",
    parentTeam: "BAL",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 37.274,
      longitude: -80.036,
    },
    location: "Salem",
    name: "RidgeYaks",
    parentTeam: "BOS",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 33.703,
      longitude: -78.869,
    },
    location: "Myrtle Beach",
    name: "Pelicans",
    parentTeam: "CHC",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 35.469,
      longitude: -80.627,
    },
    location: "Kannapolis",
    name: "Cannon Ballers",
    parentTeam: "CHW",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 29.228,
      longitude: -81.02,
    },
    location: "Daytona",
    name: "Tortugas",
    parentTeam: "CIN",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 37.403,
      longitude: -79.154,
    },
    location: "Hill City",
    name: "Howlers",
    parentTeam: "CLE",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 36.731,
      longitude: -119.791,
    },
    location: "Fresno",
    name: "Grizzlies",
    parentTeam: "COL",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 28.047,
      longitude: -81.954,
    },
    location: "Lakeland",
    name: "Flying Tigers",
    parentTeam: "DET",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 35.053,
      longitude: -78.884,
    },
    location: "Fayetteville",
    name: "Woodpeckers",
    parentTeam: "HOU",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 34.012,
      longitude: -81.035,
    },
    location: "Columbia",
    name: "Fireflies",
    parentTeam: "KCR",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 34.112,
      longitude: -117.584,
    },
    location: "Rancho Cucamonga",
    name: "Quakes",
    parentTeam: "LAA",
    tier: "Single-A",
  },
      {
    coordinates: {
      latitude: 34.018,
      longitude: -117.604,
    },
    location: "Ontario",
    name: "Tower Buzzers",
    parentTeam: "LAD",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 26.891,
      longitude: -80.12,
    },
    location: "Jupiter",
    name: "Hammerheads",
    parentTeam: "MIA",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 26.555,
      longitude: -81.914,
    },
    location: "Fort Myers",
    name: "Mighty Mussels",
    parentTeam: "MIN",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 35.721,
      longitude: -77.915,
    },
    location: "Wilson",
    name: "Warbirds",
    parentTeam: "MIL",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 27.277,
      longitude: -80.337,
    },
    location: "St. Lucie",
    name: "Mets",
    parentTeam: "NYM",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 27.98,
      longitude: -82.507,
    },
    location: "Tampa",
    name: "Tarpons",
    parentTeam: "NYY",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 37.951,
      longitude: -121.291,
    },
    location: "Stockton",
    name: "Ports",
    parentTeam: "OAK",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 27.944,
      longitude: -82.758,
    },
    location: "Clearwater",
    name: "Threshers",
    parentTeam: "PHI",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 27.49,
      longitude: -82.563,
    },
    location: "Bradenton",
    name: "Marauders",
    parentTeam: "PIT",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 33.653,
      longitude: -117.33,
    },
    location: "Lake Elsinore",
    name: "Storm",
    parentTeam: "SDP",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 34.09,
      longitude: -117.29,
    },
    location: "Inland Empire",
    name: "66ers",
    parentTeam: "SEA",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 37.328,
      longitude: -121.869,
    },
    location: "San Jose",
    name: "Giants",
    parentTeam: "SFG",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 26.891,
      longitude: -80.12,
    },
    location: "Palm Beach",
    name: "Cardinals",
    parentTeam: "STL",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 28.004,
      longitude: -82.787,
    },
    location: "Dunedin",
    name: "Blue Jays",
    parentTeam: "TOR",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 32.768,
      longitude: -79.986,
    },
    location: "Charleston",
    name: "RiverDogs",
    parentTeam: "TBR",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 35.735,
      longitude: -81.372,
    },
    location: "Hickory",
    name: "Crawdads",
    parentTeam: "TEX",
    tier: "Single-A",
  },
  {
    coordinates: {
      latitude: 38.277,
      longitude: -77.45,
    },
    location: "Fredericksburg",
    name: "Nationals",
    parentTeam: "WSN",
    tier: "Single-A",
  },
];

export const MiLBobject: {[Key in MLBTeamType] : {[Key in TierType] : MiLBInfoTypeB}} = {
    "ARI": {
        "MLB": {
            "coordinates": {
                "latitude": 33.454,
                "longitude": -112.08
            },
            "location": "Arizona",
            "name": "Diamondbacks",
        },
        "AAA": {
            "coordinates": {
                "latitude": 39.525,
                "longitude": -119.828
            },
            "location": "Reno",
            "name": "Aces",
        },
        "AA": {
            "coordinates": {
                "latitude": 35.22,
                "longitude": -101.821
            },
            "location": "Amarillo",
            "name": "Sod Poodles",
        },
        "High-A": {
            "coordinates": {
                "latitude": 45.52,
                "longitude": -122.97
            },
            "location": "Hillsboro",
            "name": "Hops",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 36.336,
                "longitude": -119.294
            },
            "location": "Visalia",
            "name": "Rawhide",
        }
    },
    "ATL": {
        "MLB": {
            "coordinates": {
                "latitude": 33.954,
                "longitude": -84.455
            },
            "location": "Atlanta",
            "name": "Braves",
        },
        "AAA": {
            "coordinates": {
                "latitude": 34.039,
                "longitude": -84.07
            },
            "location": "Gwinnett",
            "name": "Stripers",
        },
        "AA": {
            "coordinates": {
                "latitude": 32.452,
                "longitude": -84.992
            },
            "location": "Columbus",
            "name": "Clingstones",
        },
        "High-A": {
            "coordinates": {
                "latitude": 34.253,
                "longitude": -85.175
            },
            "location": "Rome",
            "name": "Emperors",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 33.501,
                "longitude": -81.968
            },
            "location": "Augusta",
            "name": "GreenJackets",
        }
    },
    "BAL": {
        "MLB": {
            "coordinates": {
                "latitude": 39.284,
                "longitude": -76.622
            },
            "location": "Baltimore",
            "name": "Orioles",
        },
        "AAA": {
            "coordinates": {
                "latitude": 36.847,
                "longitude": -76.283
            },
            "location": "Norfolk",
            "name": "Tides",
        },
        "AA": {
            "coordinates": {
                "latitude": 38.906,
                "longitude": -76.725
            },
            "location": "Chesapeake",
            "name": "Baysox",
        },
        "High-A": {
            "coordinates": {
                "latitude": 39.517,
                "longitude": -76.153
            },
            "location": "Frederick",
            "name": "Keys",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 38.367,
                "longitude": -75.555
            },
            "location": "Delmarva",
            "name": "Shorebirds",
        }
    },
    "BOS": {
        "MLB": {
            "coordinates": {
                "latitude": 42.346,
                "longitude": -71.097
            },
            "location": "Boston",
            "name": "Red Sox",
        },
        "AAA": {
            "coordinates": {
                "latitude": 42.26,
                "longitude": -71.794
            },
            "location": "Worcester",
            "name": "Red Sox",
        },
        "AA": {
            "coordinates": {
                "latitude": 43.649,
                "longitude": -70.277
            },
            "location": "Portland",
            "name": "Sea Dogs",
        },
        "High-A": {
            "coordinates": {
                "latitude": 34.846,
                "longitude": -82.396
            },
            "location": "Greenville",
            "name": "Drive",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 37.274,
                "longitude": -80.036
            },
            "location": "Salem",
            "name": "RidgeYaks",
        }
    },
    "CHC": {
        "MLB": {
            "coordinates": {
                "latitude": 41.948,
                "longitude": -87.656
            },
            "location": "Chicago",
            "name": "Cubs",
        },
        "AAA": {
            "coordinates": {
                "latitude": 41.59,
                "longitude": -93.628
            },
            "location": "Iowa",
            "name": "Cubs",
        },
        "AA": {
            "coordinates": {
                "latitude": 35.97,
                "longitude": -83.606
            },
            "location": "Knoxville",
            "name": "Smokies",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.677,
                "longitude": -86.277
            },
            "location": "South Bend",
            "name": "Cubs",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 33.703,
                "longitude": -78.869
            },
            "location": "Myrtle Beach",
            "name": "Pelicans",
        }
    },
    "CHW": {
        "MLB": {
            "coordinates": {
                "latitude": 41.83,
                "longitude": -87.634
            },
            "location": "Chicago",
            "name": "White Sox",
        },
        "AAA": {
            "coordinates": {
                "latitude": 35.229,
                "longitude": -80.846
            },
            "location": "Charlotte",
            "name": "Knights",
        },
        "AA": {
            "coordinates": {
                "latitude": 33.501,
                "longitude": -86.797
            },
            "location": "Birmingham",
            "name": "Barons",
        },
        "High-A": {
            "coordinates": {
                "latitude": 36.096,
                "longitude": -80.237
            },
            "location": "Winston-Salem",
            "name": "Dash",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 35.469,
                "longitude": -80.627
            },
            "location": "Kannapolis",
            "name": "Cannon Ballers",
        }
    },
    "CIN": {
        "MLB": {
            "coordinates": {
                "latitude": 39.095,
                "longitude": -84.506
            },
            "location": "Cincinnati",
            "name": "Reds",
        },
        "AAA": {
            "coordinates": {
                "latitude": 38.253,
                "longitude": -85.734
            },
            "location": "Louisville",
            "name": "Bats",
        },
        "AA": {
            "coordinates": {
                "latitude": 35.054,
                "longitude": -85.302
            },
            "location": "Chattanooga",
            "name": "Lookouts",
        },
        "High-A": {
            "coordinates": {
                "latitude": 39.759,
                "longitude": -84.193
            },
            "location": "Dayton",
            "name": "Dragons",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 29.228,
                "longitude": -81.02
            },
            "location": "Daytona",
            "name": "Tortugas",
        }
    },
    "CLE": {
        "MLB": {
            "coordinates": {
                "latitude": 41.496,
                "longitude": -81.685
            },
            "location": "Cleveland",
            "name": "Guardians",
        },
        "AAA": {
            "coordinates": {
                "latitude": 39.962,
                "longitude": -83.004
            },
            "location": "Columbus",
            "name": "Clippers",
        },
        "AA": {
            "coordinates": {
                "latitude": 41.081,
                "longitude": -81.509
            },
            "location": "Akron",
            "name": "RubberDucks",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.695,
                "longitude": -81.45
            },
            "location": "Lake County",
            "name": "Captains",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 37.403,
                "longitude": -79.154
            },
            "location": "Hill City",
            "name": "Howlers",
        }
    },
    "COL": {
        "MLB": {
            "coordinates": {
                "latitude": 39.756,
                "longitude": -104.994
            },
            "location": "Colorado",
            "name": "Rockies",
        },
        "AAA": {
            "coordinates": {
                "latitude": 35.074,
                "longitude": -106.614
            },
            "location": "Albuquerque",
            "name": "Isotopes",
        },
        "AA": {
            "coordinates": {
                "latitude": 41.768,
                "longitude": -72.676
            },
            "location": "Hartford",
            "name": "Yard Goats",
        },
        "High-A": {
            "coordinates": {
                "latitude": 47.629,
                "longitude": -117.331
            },
            "location": "Spokane",
            "name": "Indians",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 36.731,
                "longitude": -119.791
            },
            "location": "Fresno",
            "name": "Grizzlies",
        }
    },
    "DET": {
        "MLB": {
            "coordinates": {
                "latitude": 42.339,
                "longitude": -83.049
            },
            "location": "Detroit",
            "name": "Tigers",
        },
        "AAA": {
            "coordinates": {
                "latitude": 41.653,
                "longitude": -83.542
            },
            "location": "Toledo",
            "name": "Mud Hens",
        },
        "AA": {
            "coordinates": {
                "latitude": 42.13,
                "longitude": -80.086
            },
            "location": "Erie",
            "name": "SeaWolves",
        },
        "High-A": {
            "coordinates": {
                "latitude": 43.036,
                "longitude": -85.676
            },
            "location": "West Michigan",
            "name": "Whitecaps",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 28.047,
                "longitude": -81.954
            },
            "location": "Lakeland",
            "name": "Flying Tigers",
        }
    },
    "HOU": {
        "MLB": {
            "coordinates": {
                "latitude": 29.757,
                "longitude": -95.356
            },
            "location": "Houston",
            "name": "Astros",
        },
        "AAA": {
            "coordinates": {
                "latitude": 29.594,
                "longitude": -95.629
            },
            "location": "Sugar Land",
            "name": "Space Cowboys",
        },
        "AA": {
            "coordinates": {
                "latitude": 27.813,
                "longitude": -97.384
            },
            "location": "Corpus Christi",
            "name": "Hooks",
        },
        "High-A": {
            "coordinates": {
                "latitude": 35.595,
                "longitude": -82.541
            },
            "location": "Asheville",
            "name": "Tourists",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 35.053,
                "longitude": -78.884
            },
            "location": "Fayetteville",
            "name": "Woodpeckers",
        }
    },
    "KCR": {
        "MLB": {
            "coordinates": {
                "latitude": 39.051,
                "longitude": -94.479
            },
            "location": "Kansas City",
            "name": "Royals",
        },
        "AAA": {
            "coordinates": {
                "latitude": 41.164,
                "longitude": -96.089
            },
            "location": "Omaha",
            "name": "Storm Chasers",
        },
        "AA": {
            "coordinates": {
                "latitude": 36.195,
                "longitude": -94.136
            },
            "location": "Northwest Arkansas",
            "name": "Naturals",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.527,
                "longitude": -90.571
            },
            "location": "Quad Cities",
            "name": "River Bandits",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 34.012,
                "longitude": -81.035
            },
            "location": "Columbia",
            "name": "Fireflies",
        }
    },
    "LAA": {
        "MLB": {
            "coordinates": {
                "latitude": 33.8,
                "longitude": -117.883
            },
            "location": "Los Angeles",
            "name": "Angels",
        },
        "AAA": {
            "coordinates": {
                "latitude": 40.532,
                "longitude": -111.89
            },
            "location": "Salt Lake",
            "name": "Bees",
        },
        "AA": {
            "coordinates": {
                "latitude": 34.629,
                "longitude": -86.777
            },
            "location": "Rocket City",
            "name": "Trash Pandas",
        },
        "High-A": {
            "coordinates": {
                "latitude": 46.237,
                "longitude": -119.112
            },
            "location": "Tri-City",
            "name": "Dust Devils",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 34.112,
                "longitude": -117.584
            },
            "location": "Rancho Cucamonga",
            "name": "Quakes",
        }
    },
    "LAD": {
        "MLB": {
            "coordinates": {
                "latitude": 34.081,
                "longitude": -118.239
            },
            "location": "Los Angeles",
            "name": "Dodgers",
        },
        "AAA": {
            "coordinates": {
                "latitude": 35.462,
                "longitude": -97.513
            },
            "location": "Oklahoma City",
            "name": "Comets",
        },
        "AA": {
            "coordinates": {
                "latitude": 36.154,
                "longitude": -95.984
            },
            "location": "Tulsa",
            "name": "Drillers",
        },
        "High-A": {
            "coordinates": {
                "latitude": 43.601,
                "longitude": -84.253
            },
            "location": "Great Lakes",
            "name": "Loons",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 34.018,
                "longitude": -117.604
            },
            "location": "Ontario",
            "name": "Tower Buzzers",
        }
    },
    "MIA": {
        "MLB": {
            "coordinates": {
                "latitude": 25.776,
                "longitude": -80.221
            },
            "location": "Miami",
            "name": "Marlins",
        },
        "AAA": {
            "coordinates": {
                "latitude": 30.325,
                "longitude": -81.641
            },
            "location": "Jacksonville",
            "name": "Jumbo Shrimp",
        },
        "AA": {
            "coordinates": {
                "latitude": 30.406,
                "longitude": -87.229
            },
            "location": "Pensacola",
            "name": "Blue Wahoos",
        },
        "High-A": {
            "coordinates": {
                "latitude": 42.509,
                "longitude": -89.037
            },
            "location": "Beloit",
            "name": "Sky Carp",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 26.891,
                "longitude": -80.12
            },
            "location": "Jupiter",
            "name": "Hammerheads",
        }
    },
    "MIL": {
        "MLB": {
            "coordinates": {
                "latitude": 43.041,
                "longitude": -87.968
            },
            "location": "Milwaukee",
            "name": "Brewers",
        },
        "AAA": {
            "coordinates": {
                "latitude": 36.169,
                "longitude": -86.786
            },
            "location": "Nashville",
            "name": "Sounds",
        },
        "AA": {
            "coordinates": {
                "latitude": 30.393,
                "longitude": -88.882
            },
            "location": "Biloxi",
            "name": "Shuckers",
        },
        "High-A": {
            "coordinates": {
                "latitude": 44.262,
                "longitude": -88.325
            },
            "location": "Wisconsin",
            "name": "Timber Rattlers",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 35.721,
                "longitude": -77.915
            },
            "location": "Wilson",
            "name": "Warbirds",
        }
    },
    "MIN": {
        "MLB": {
            "coordinates": {
                "latitude": 44.982,
                "longitude": -93.278
            },
            "location": "Minnesota",
            "name": "Twins",
        },
        "AAA": {
            "coordinates": {
                "latitude": 44.951,
                "longitude": -93.092
            },
            "location": "St. Paul",
            "name": "Saints",
        },
        "AA": {
            "coordinates": {
                "latitude": 37.682,
                "longitude": -97.346
            },
            "location": "Wichita",
            "name": "Wind Surge",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.986,
                "longitude": -91.674
            },
            "location": "Cedar Rapids",
            "name": "Kernels",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 26.555,
                "longitude": -81.914
            },
            "location": "Fort Myers",
            "name": "Mighty Mussels",
        }
    },
    "NYM": {
        "MLB": {
            "coordinates": {
                "latitude": 40.757,
                "longitude": -73.833
            },
            "location": "New York",
            "name": "Mets",
        },
        "AAA": {
            "coordinates": {
                "latitude": 43.069,
                "longitude": -76.158
            },
            "location": "Syracuse",
            "name": "Mets",
        },
        "AA": {
            "coordinates": {
                "latitude": 42.091,
                "longitude": -75.914
            },
            "location": "Binghamton",
            "name": "Rumble Ponies",
        },
        "High-A": {
            "coordinates": {
                "latitude": 40.572,
                "longitude": -73.981
            },
            "location": "Brooklyn",
            "name": "Cyclones",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 27.277,
                "longitude": -80.337
            },
            "location": "St. Lucie",
            "name": "Mets",
        }
    },
    "NYY": {
        "MLB": {
            "coordinates": {
                "latitude": 40.829,
                "longitude": -73.926
            },
            "location": "New York",
            "name": "Yankees",
        },
        "AAA": {
            "coordinates": {
                "latitude": 41.362,
                "longitude": -75.76
            },
            "location": "Scranton/Wilkes-Barre",
            "name": "RailRiders",
        },
        "AA": {
            "coordinates": {
                "latitude": 40.571,
                "longitude": -74.545
            },
            "location": "Somerset",
            "name": "Patriots",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.584,
                "longitude": -73.935
            },
            "location": "Hudson Valley",
            "name": "Renegades",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 27.98,
                "longitude": -82.507
            },
            "location": "Tampa",
            "name": "Tarpons",
        }
    },
    "OAK": {
        "MLB": {
            "coordinates": {
                "latitude": 38.58,
                "longitude": -121.514
            },
            "location": "The",
            "name": "Athletics",
        },
        "AAA": {
            "coordinates": {
                "latitude": 36.053,
                "longitude": -115.336
            },
            "location": "Las Vegas",
            "name": "Aviators",
        },
        "AA": {
            "coordinates": {
                "latitude": 32.012,
                "longitude": -102.147
            },
            "location": "Midland",
            "name": "RockHounds",
        },
        "High-A": {
            "coordinates": {
                "latitude": 42.734,
                "longitude": -84.545
            },
            "location": "Lansing",
            "name": "Lugnuts",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 37.951,
                "longitude": -121.291
            },
            "location": "Stockton",
            "name": "Ports",
        }
    },
    "PHI": {
        "MLB": {
            "coordinates": {
                "latitude": 39.906,
                "longitude": -75.166
            },
            "location": "Philadelphia",
            "name": "Phillies",
        },
        "AAA": {
            "coordinates": {
                "latitude": 40.639,
                "longitude": -75.469
            },
            "location": "Lehigh Valley",
            "name": "IronPigs",
        },
        "AA": {
            "coordinates": {
                "latitude": 40.354,
                "longitude": -75.902
            },
            "location": "Reading",
            "name": "Fightin Phils",
        },
        "High-A": {
            "coordinates": {
                "latitude": 40.102,
                "longitude": -74.195
            },
            "location": "Jersey Shore",
            "name": "BlueClaws",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 27.944,
                "longitude": -82.758
            },
            "location": "Clearwater",
            "name": "Threshers",
        }
    },
    "PIT": {
        "MLB": {
            "coordinates": {
                "latitude": 40.447,
                "longitude": -80.01
            },
            "location": "Pittsburgh",
            "name": "Pirates",
        },
        "AAA": {
            "coordinates": {
                "latitude": 39.768,
                "longitude": -86.171
            },
            "location": "Indianapolis",
            "name": "Indians",
        },
        "AA": {
            "coordinates": {
                "latitude": 40.505,
                "longitude": -78.372
            },
            "location": "Altoona",
            "name": "Curve",
        },
        "High-A": {
            "coordinates": {
                "latitude": 36.074,
                "longitude": -79.789
            },
            "location": "Greensboro",
            "name": "Grasshoppers",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 27.49,
                "longitude": -82.563
            },
            "location": "Bradenton",
            "name": "Marauders",
        }
    },
    "SDP": {
        "MLB": {
            "coordinates": {
                "latitude": 32.708,
                "longitude": -117.157
            },
            "location": "San Diego",
            "name": "Padres",
        },
        "AAA": {
            "coordinates": {
                "latitude": 31.75,
                "longitude": -106.508
            },
            "location": "El Paso",
            "name": "Chihuahuas",
        },
        "AA": {
            "coordinates": {
                "latitude": 29.437,
                "longitude": -98.601
            },
            "location": "San Antonio",
            "name": "Missions",
        },
        "High-A": {
            "coordinates": {
                "latitude": 41.074,
                "longitude": -85.146
            },
            "location": "Fort Wayne",
            "name": "TinCaps",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 33.653,
                "longitude": -117.33
            },
            "location": "Lake Elsinore",
            "name": "Storm",
        }
    },
    "SEA": {
        "MLB": {
            "coordinates": {
                "latitude": 47.591,
                "longitude": -122.332
            },
            "location": "Seattle",
            "name": "Mariners",
        },
        "AAA": {
            "coordinates": {
                "latitude": 47.223,
                "longitude": -122.491
            },
            "location": "Tacoma",
            "name": "Rainiers",
        },
        "AA": {
            "coordinates": {
                "latitude": 34.781,
                "longitude": -92.253
            },
            "location": "Arkansas",
            "name": "Travelers",
        },
        "High-A": {
            "coordinates": {
                "latitude": 47.986,
                "longitude": -122.217
            },
            "location": "Everett",
            "name": "AquaSox",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 34.09,
                "longitude": -117.29
            },
            "location": "Inland Empire",
            "name": "66ers",
        }
    },
    "SFG": {
        "MLB": {
            "coordinates": {
                "latitude": 37.795,
                "longitude": -122.39
            },
            "location": "San Francisco",
            "name": "Giants",
        },
        "AAA": {
            "coordinates": {
                "latitude": 38.587,
                "longitude": -121.517
            },
            "location": "Sacramento",
            "name": "River Cats",
        },
        "AA": {
            "coordinates": {
                "latitude": 37.6,
                "longitude": -77.456
            },
            "location": "Richmond",
            "name": "Flying Squirrels",
        },
        "High-A": {
            "coordinates": {
                "latitude": 44.064,
                "longitude": -123.041
            },
            "location": "Eugene",
            "name": "Emeralds",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 37.328,
                "longitude": -121.869
            },
            "location": "San Jose",
            "name": "Giants",
        }
    },
    "STL": {
        "MLB": {
            "coordinates": {
                "latitude": 38.625,
                "longitude": -90.193
            },
            "location": "St. Louis",
            "name": "Cardinals",
        },
        "AAA": {
            "coordinates": {
                "latitude": 35.15,
                "longitude": -90.05
            },
            "location": "Memphis",
            "name": "Redbirds",
        },
        "AA": {
            "coordinates": {
                "latitude": 37.216,
                "longitude": -93.291
            },
            "location": "Springfield",
            "name": "Cardinals",
        },
        "High-A": {
            "coordinates": {
                "latitude": 40.687,
                "longitude": -89.593
            },
            "location": "Peoria",
            "name": "Chiefs",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 26.891,
                "longitude": -80.12
            },
            "location": "Palm Beach",
            "name": "Cardinals",
        }
    },
    "TBR": {
        "MLB": {
            "coordinates": {
                "latitude": 27.768, 
                "longitude": -82.653,
            },
            "location": "Tampa Bay",
            "name": "Rays",
        },
        "AAA": {
            "coordinates": {
                "latitude": 35.973,
                "longitude": -78.903
            },
            "location": "Durham",
            "name": "Bulls",
        },
        "AA": {
            "coordinates": {
                "latitude": 32.38,
                "longitude": -86.305
            },
            "location": "Montgomery",
            "name": "Biscuits",
        },
        "High-A": {
            "coordinates": {
                "latitude": 36.986,
                "longitude": -86.452
            },
            "location": "Bowling Green",
            "name": "Hot Rods",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 32.768,
                "longitude": -79.986
            },
            "location": "Charleston",
            "name": "RiverDogs",
        }
    },
    "TEX": {
        "MLB": {
            "coordinates": {
                "latitude": 32.751,
                "longitude": -97.083
            },
            "location": "Texas",
            "name": "Rangers",
        },
        "AAA": {
            "coordinates": {
                "latitude": 30.512,
                "longitude": -97.617
            },
            "location": "Round Rock",
            "name": "Express",
        },
        "AA": {
            "coordinates": {
                "latitude": 33.122,
                "longitude": -96.829
            },
            "location": "Frisco",
            "name": "RoughRiders",
        },
        "High-A": {
            "coordinates": {
                "latitude": 34.947,
                "longitude": -81.919
            },
            "location": "Hub City",
            "name": "Spartanburgers",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 35.735,
                "longitude": -81.372
            },
            "location": "Hickory",
            "name": "Crawdads",
        }
    },
    "TOR": {
        "MLB": {
            "coordinates": {
                "latitude": 43.641,
                "longitude": -79.39
            },
            "location": "Toronto",
            "name": "Blue Jays",
        },
        "AAA": {
            "coordinates": {
                "latitude": 42.891,
                "longitude": -78.878
            },
            "location": "Buffalo",
            "name": "Bisons",
        },
        "AA": {
            "coordinates": {
                "latitude": 42.98,
                "longitude": -71.452
            },
            "location": "New Hampshire",
            "name": "Fisher Cats",
        },
        "High-A": {
            "coordinates": {
                "latitude": 49.24,
                "longitude": -123.108
            },
            "location": "Vancouver",
            "name": "Canadians",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 28.004,
                "longitude": -82.787
            },
            "location": "Dunedin",
            "name": "Blue Jays",
        }
    },
    "WSN": {
        "MLB": {
            "coordinates": {
                "latitude": 38.874,
                "longitude": -77.009
            },
            "location": "Washington",
            "name": "Nationals",
        },
        "AAA": {
            "coordinates": {
                "latitude": 43.153,
                "longitude": -77.604
            },
            "location": "Rochester",
            "name": "Red Wings",
        },
        "AA": {
            "coordinates": {
                "latitude": 40.257,
                "longitude": -76.878
            },
            "location": "Harrisburg",
            "name": "Senators",
        },
        "High-A": {
            "coordinates": {
                "latitude": 39.745,
                "longitude": -75.555
            },
            "location": "Wilmington",
            "name": "Blue Rocks",
        },
        "Single-A": {
            "coordinates": {
                "latitude": 38.277,
                "longitude": -77.45
            },
            "location": "Fredericksburg",
            "name": "Nationals",
        }
    }
};