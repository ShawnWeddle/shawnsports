import { type MLBTeamType } from "./MLBdata"

export type TierType = "MLB" |"AAA" | "AA" | "High-A" | "Single-A";

export type BaseballInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  parentTeam: MLBTeamType;
};


export const BaseballStadiumData: {[Key in TierType] : {[Key in MLBTeamType] : BaseballInfoType}} = {
    "MLB": {
        "ARI": {
            "coordinates": {
                "latitude": 33.445,
                "longitude": -112.067
            },
            "location": "Arizona",
            "name": "Diamondbacks",
            "parentTeam": "ARI"
        },
        "ATL": {
            "coordinates": {
                "latitude": 33.89,
                "longitude": -84.468
            },
            "location": "Atlanta",
            "name": "Braves",
            "parentTeam": "ATL"
        },
        "BAL": {
            "coordinates": {
                "latitude": 39.284,
                "longitude": -76.622
            },
            "location": "Baltimore",
            "name": "Orioles",
            "parentTeam": "BAL"
        },
        "BOS": {
            "coordinates": {
                "latitude": 42.346,
                "longitude": -71.098
            },
            "location": "Boston",
            "name": "Red Sox",
            "parentTeam": "BOS"
        },
        "CHC": {
            "coordinates": {
                "latitude": 41.948,
                "longitude": -87.656
            },
            "location": "Chicago",
            "name": "Cubs",
            "parentTeam": "CHC"
        },
        "CHW": {
            "coordinates": {
                "latitude": 41.83,
                "longitude": -87.634
            },
            "location": "Chicago",
            "name": "White Sox",
            "parentTeam": "CHW"
        },
        "CIN": {
            "coordinates": {
                "latitude": 39.097,
                "longitude": -84.507
            },
            "location": "Cincinnati",
            "name": "Reds",
            "parentTeam": "CIN"
        },
        "CLE": {
            "coordinates": {
                "latitude": 41.496,
                "longitude": -81.685
            },
            "location": "Cleveland",
            "name": "Guardians",
            "parentTeam": "CLE"
        },
        "COL": {
            "coordinates": {
                "latitude": 39.756,
                "longitude": -104.994
            },
            "location": "Colorado",
            "name": "Rockies",
            "parentTeam": "COL"
        },
        "DET": {
            "coordinates": {
                "latitude": 42.339,
                "longitude": -83.049
            },
            "location": "Detroit",
            "name": "Tigers",
            "parentTeam": "DET"
        },
        "HOU": {
            "coordinates": {
                "latitude": 29.757,
                "longitude": -95.356
            },
            "location": "Houston",
            "name": "Astros",
            "parentTeam": "HOU"
        },
        "KCR": {
            "coordinates": {
                "latitude": 39.052,
                "longitude": -94.48
            },
            "location": "Kansas City",
            "name": "Royals",
            "parentTeam": "KCR"
        },
        "LAA": {
            "coordinates": {
                "latitude": 33.8,
                "longitude": -117.883
            },
            "location": "Los Angeles",
            "name": "Angels",
            "parentTeam": "LAA"
        },
        "LAD": {
            "coordinates": {
                "latitude": 34.074,
                "longitude": -118.24
            },
            "location": "Los Angeles",
            "name": "Dodgers",
            "parentTeam": "LAD"
        },
        "MIA": {
            "coordinates": {
                "latitude": 25.778,
                "longitude": -80.22
            },
            "location": "Miami",
            "name": "Marlins",
            "parentTeam": "MIA"
        },
        "MIL": {
            "coordinates": {
                "latitude": 43.028,
                "longitude": -87.971
            },
            "location": "Milwaukee",
            "name": "Brewers",
            "parentTeam": "MIL"
        },
        "MIN": {
            "coordinates": {
                "latitude": 44.982,
                "longitude": -93.278
            },
            "location": "Minnesota",
            "name": "Twins",
            "parentTeam": "MIN"
        },
        "NYM": {
            "coordinates": {
                "latitude": 40.757,
                "longitude": -73.846
            },
            "location": "New York",
            "name": "Mets",
            "parentTeam": "NYM"
        },
        "NYY": {
            "coordinates": {
                "latitude": 40.829,
                "longitude": -73.926
            },
            "location": "New York",
            "name": "Yankees",
            "parentTeam": "NYY"
        },
        "OAK": {
            "coordinates": {
                "latitude": 38.58,
                "longitude": -121.513
            },
            "location": "Oakland",
            "name": "Athletics",
            "parentTeam": "OAK"
        },
        "PHI": {
            "coordinates": {
                "latitude": 39.906,
                "longitude": -75.166
            },
            "location": "Philadelphia",
            "name": "Phillies",
            "parentTeam": "PHI"
        },
        "PIT": {
            "coordinates": {
                "latitude": 40.447,
                "longitude": -80.006
            },
            "location": "Pittsburgh",
            "name": "Pirates",
            "parentTeam": "PIT"
        },
        "SDP": {
            "coordinates": {
                "latitude": 32.707,
                "longitude": -117.157
            },
            "location": "San Diego",
            "name": "Padres",
            "parentTeam": "SDP"
        },
        "SEA": {
            "coordinates": {
                "latitude": 47.591,
                "longitude": -122.333
            },
            "location": "Seattle",
            "name": "Mariners",
            "parentTeam": "SEA"
        },
        "SFG": {
            "coordinates": {
                "latitude": 37.779,
                "longitude": -122.389
            },
            "location": "San Francisco",
            "name": "Giants",
            "parentTeam": "SFG"
        },
        "STL": {
            "coordinates": {
                "latitude": 38.623,
                "longitude": -90.193
            },
            "location": "St. Louis",
            "name": "Cardinals",
            "parentTeam": "STL"
        },
        "TBR": {
            "coordinates": {
                "latitude": 27.768,
                "longitude": -82.653
            },
            "location": "Tampa Bay",
            "name": "Rays",
            "parentTeam": "TBR"
        },
        "TEX": {
            "coordinates": {
                "latitude": 32.747,
                "longitude": -97.084
            },
            "location": "Texas",
            "name": "Rangers",
            "parentTeam": "TEX"
        },
        "TOR": {
            "coordinates": {
                "latitude": 43.641,
                "longitude": -79.389
            },
            "location": "Toronto",
            "name": "Blue Jays",
            "parentTeam": "TOR"
        },
        "WSN": {
            "coordinates": {
                "latitude": 38.873,
                "longitude": -77.007
            },
            "location": "Washington",
            "name": "Nationals",
            "parentTeam": "WSN"
        }
    },
    "AAA": {
        "ARI": {
            "coordinates": {
                "latitude": 39.525,
                "longitude": -119.828
            },
            "location": "Reno",
            "name": "Aces",
            "parentTeam": "ARI"
        },
        "ATL": {
            "coordinates": {
                "latitude": 34.039,
                "longitude": -84.07
            },
            "location": "Gwinnett",
            "name": "Stripers",
            "parentTeam": "ATL"
        },
        "BAL": {
            "coordinates": {
                "latitude": 36.847,
                "longitude": -76.283
            },
            "location": "Norfolk",
            "name": "Tides",
            "parentTeam": "BAL"
        },
        "BOS": {
            "coordinates": {
                "latitude": 42.26,
                "longitude": -71.794
            },
            "location": "Worcester",
            "name": "Red Sox",
            "parentTeam": "BOS"
        },
        "CHC": {
            "coordinates": {
                "latitude": 41.59,
                "longitude": -93.628
            },
            "location": "Iowa",
            "name": "Cubs",
            "parentTeam": "CHC"
        },
        "CHW": {
            "coordinates": {
                "latitude": 35.229,
                "longitude": -80.846
            },
            "location": "Charlotte",
            "name": "Knights",
            "parentTeam": "CHW"
        },
        "CIN": {
            "coordinates": {
                "latitude": 38.253,
                "longitude": -85.734
            },
            "location": "Louisville",
            "name": "Bats",
            "parentTeam": "CIN"
        },
        "CLE": {
            "coordinates": {
                "latitude": 39.962,
                "longitude": -83.004
            },
            "location": "Columbus",
            "name": "Clippers",
            "parentTeam": "CLE"
        },
        "COL": {
            "coordinates": {
                "latitude": 35.074,
                "longitude": -106.614
            },
            "location": "Albuquerque",
            "name": "Isotopes",
            "parentTeam": "COL"
        },
        "DET": {
            "coordinates": {
                "latitude": 41.653,
                "longitude": -83.542
            },
            "location": "Toledo",
            "name": "Mud Hens",
            "parentTeam": "DET"
        },
        "HOU": {
            "coordinates": {
                "latitude": 29.594,
                "longitude": -95.629
            },
            "location": "Sugar Land",
            "name": "Space Cowboys",
            "parentTeam": "HOU"
        },
        "KCR": {
            "coordinates": {
                "latitude": 41.164,
                "longitude": -96.089
            },
            "location": "Omaha",
            "name": "Storm Chasers",
            "parentTeam": "KCR"
        },
        "LAA": {
            "coordinates": {
                "latitude": 40.532,
                "longitude": -111.89
            },
            "location": "Salt Lake",
            "name": "Bees",
            "parentTeam": "LAA"
        },
        "LAD": {
            "coordinates": {
                "latitude": 35.462,
                "longitude": -97.513
            },
            "location": "Oklahoma City",
            "name": "Comets",
            "parentTeam": "LAD"
        },
        "MIA": {
            "coordinates": {
                "latitude": 30.325,
                "longitude": -81.641
            },
            "location": "Jacksonville",
            "name": "Jumbo Shrimp",
            "parentTeam": "MIA"
        },
        "MIL": {
            "coordinates": {
                "latitude": 36.169,
                "longitude": -86.786
            },
            "location": "Nashville",
            "name": "Sounds",
            "parentTeam": "MIL"
        },
        "MIN": {
            "coordinates": {
                "latitude": 44.951,
                "longitude": -93.092
            },
            "location": "St. Paul",
            "name": "Saints",
            "parentTeam": "MIN"
        },
        "NYM": {
            "coordinates": {
                "latitude": 43.069,
                "longitude": -76.158
            },
            "location": "Syracuse",
            "name": "Mets",
            "parentTeam": "NYM"
        },
        "NYY": {
            "coordinates": {
                "latitude": 41.362,
                "longitude": -75.76
            },
            "location": "Scranton/Wilkes-Barre",
            "name": "RailRiders",
            "parentTeam": "NYY"
        },
        "OAK": {
            "coordinates": {
                "latitude": 36.053,
                "longitude": -115.336
            },
            "location": "Las Vegas",
            "name": "Aviators",
            "parentTeam": "OAK"
        },
        "PHI": {
            "coordinates": {
                "latitude": 40.639,
                "longitude": -75.469
            },
            "location": "Lehigh Valley",
            "name": "IronPigs",
            "parentTeam": "PHI"
        },
        "PIT": {
            "coordinates": {
                "latitude": 39.768,
                "longitude": -86.171
            },
            "location": "Indianapolis",
            "name": "Indians",
            "parentTeam": "PIT"
        },
        "SDP": {
            "coordinates": {
                "latitude": 31.75,
                "longitude": -106.508
            },
            "location": "El Paso",
            "name": "Chihuahuas",
            "parentTeam": "SDP"
        },
        "SEA": {
            "coordinates": {
                "latitude": 47.223,
                "longitude": -122.491
            },
            "location": "Tacoma",
            "name": "Rainiers",
            "parentTeam": "SEA"
        },
        "SFG": {
            "coordinates": {
                "latitude": 38.587,
                "longitude": -121.517
            },
            "location": "Sacramento",
            "name": "River Cats",
            "parentTeam": "SFG"
        },
        "STL": {
            "coordinates": {
                "latitude": 35.15,
                "longitude": -90.05
            },
            "location": "Memphis",
            "name": "Redbirds",
            "parentTeam": "STL"
        },
        "TBR": {
            "coordinates": {
                "latitude": 35.973,
                "longitude": -78.903
            },
            "location": "Durham",
            "name": "Bulls",
            "parentTeam": "TBR"
        },
        "TEX": {
            "coordinates": {
                "latitude": 30.512,
                "longitude": -97.617
            },
            "location": "Round Rock",
            "name": "Express",
            "parentTeam": "TEX"
        },
        "TOR": {
            "coordinates": {
                "latitude": 42.891,
                "longitude": -78.878
            },
            "location": "Buffalo",
            "name": "Bisons",
            "parentTeam": "TOR"
        },
        "WSN": {
            "coordinates": {
                "latitude": 43.153,
                "longitude": -77.604
            },
            "location": "Rochester",
            "name": "Red Wings",
            "parentTeam": "WSN"
        }
    },
    "AA": {
        "ARI": {
            "coordinates": {
                "latitude": 35.22,
                "longitude": -101.821
            },
            "location": "Amarillo",
            "name": "Sod Poodles",
            "parentTeam": "ARI"
        },
        "ATL": {
            "coordinates": {
                "latitude": 32.452,
                "longitude": -84.992
            },
            "location": "Columbus",
            "name": "Clingstones",
            "parentTeam": "ATL"
        },
        "BAL": {
            "coordinates": {
                "latitude": 38.906,
                "longitude": -76.725
            },
            "location": "Chesapeake",
            "name": "Baysox",
            "parentTeam": "BAL"
        },
        "BOS": {
            "coordinates": {
                "latitude": 43.649,
                "longitude": -70.277
            },
            "location": "Portland",
            "name": "Sea Dogs",
            "parentTeam": "BOS"
        },
        "CHC": {
            "coordinates": {
                "latitude": 35.97,
                "longitude": -83.606
            },
            "location": "Knoxville",
            "name": "Smokies",
            "parentTeam": "CHC"
        },
        "CHW": {
            "coordinates": {
                "latitude": 33.501,
                "longitude": -86.797
            },
            "location": "Birmingham",
            "name": "Barons",
            "parentTeam": "CHW"
        },
        "CIN": {
            "coordinates": {
                "latitude": 35.054,
                "longitude": -85.302
            },
            "location": "Chattanooga",
            "name": "Lookouts",
            "parentTeam": "CIN"
        },
        "CLE": {
            "coordinates": {
                "latitude": 41.081,
                "longitude": -81.509
            },
            "location": "Akron",
            "name": "RubberDucks",
            "parentTeam": "CLE"
        },
        "COL": {
            "coordinates": {
                "latitude": 41.768,
                "longitude": -72.676
            },
            "location": "Hartford",
            "name": "Yard Goats",
            "parentTeam": "COL"
        },
        "DET": {
            "coordinates": {
                "latitude": 42.13,
                "longitude": -80.086
            },
            "location": "Erie",
            "name": "SeaWolves",
            "parentTeam": "DET"
        },
        "HOU": {
            "coordinates": {
                "latitude": 27.813,
                "longitude": -97.384
            },
            "location": "Corpus Christi",
            "name": "Hooks",
            "parentTeam": "HOU"
        },
        "KCR": {
            "coordinates": {
                "latitude": 36.195,
                "longitude": -94.136
            },
            "location": "Northwest Arkansas",
            "name": "Naturals",
            "parentTeam": "KCR"
        },
        "LAA": {
            "coordinates": {
                "latitude": 34.629,
                "longitude": -86.777
            },
            "location": "Rocket City",
            "name": "Trash Pandas",
            "parentTeam": "LAA"
        },
        "LAD": {
            "coordinates": {
                "latitude": 36.154,
                "longitude": -95.984
            },
            "location": "Tulsa",
            "name": "Drillers",
            "parentTeam": "LAD"
        },
        "MIA": {
            "coordinates": {
                "latitude": 30.406,
                "longitude": -87.229
            },
            "location": "Pensacola",
            "name": "Blue Wahoos",
            "parentTeam": "MIA"
        },
        "MIL": {
            "coordinates": {
                "latitude": 30.393,
                "longitude": -88.882
            },
            "location": "Biloxi",
            "name": "Shuckers",
            "parentTeam": "MIL"
        },
        "MIN": {
            "coordinates": {
                "latitude": 37.682,
                "longitude": -97.346
            },
            "location": "Wichita",
            "name": "Wind Surge",
            "parentTeam": "MIN"
        },
        "NYM": {
            "coordinates": {
                "latitude": 42.091,
                "longitude": -75.914
            },
            "location": "Binghamton",
            "name": "Rumble Ponies",
            "parentTeam": "NYM"
        },
        "NYY": {
            "coordinates": {
                "latitude": 40.571,
                "longitude": -74.545
            },
            "location": "Somerset",
            "name": "Patriots",
            "parentTeam": "NYY"
        },
        "OAK": {
            "coordinates": {
                "latitude": 32.012,
                "longitude": -102.147
            },
            "location": "Midland",
            "name": "RockHounds",
            "parentTeam": "OAK"
        },
        "PHI": {
            "coordinates": {
                "latitude": 40.354,
                "longitude": -75.902
            },
            "location": "Reading",
            "name": "Fightin Phils",
            "parentTeam": "PHI"
        },
        "PIT": {
            "coordinates": {
                "latitude": 40.505,
                "longitude": -78.372
            },
            "location": "Altoona",
            "name": "Curve",
            "parentTeam": "PIT"
        },
        "SDP": {
            "coordinates": {
                "latitude": 29.437,
                "longitude": -98.601
            },
            "location": "San Antonio",
            "name": "Missions",
            "parentTeam": "SDP"
        },
        "SEA": {
            "coordinates": {
                "latitude": 34.781,
                "longitude": -92.253
            },
            "location": "Arkansas",
            "name": "Travelers",
            "parentTeam": "SEA"
        },
        "SFG": {
            "coordinates": {
                "latitude": 37.6,
                "longitude": -77.456
            },
            "location": "Richmond",
            "name": "Flying Squirrels",
            "parentTeam": "SFG"
        },
        "STL": {
            "coordinates": {
                "latitude": 37.216,
                "longitude": -93.291
            },
            "location": "Springfield",
            "name": "Cardinals",
            "parentTeam": "STL"
        },
        "TBR": {
            "coordinates": {
                "latitude": 32.38,
                "longitude": -86.305
            },
            "location": "Montgomery",
            "name": "Biscuits",
            "parentTeam": "TBR"
        },
        "TEX": {
            "coordinates": {
                "latitude": 33.122,
                "longitude": -96.829
            },
            "location": "Frisco",
            "name": "RoughRiders",
            "parentTeam": "TEX"
        },
        "TOR": {
            "coordinates": {
                "latitude": 42.98,
                "longitude": -71.452
            },
            "location": "New Hampshire",
            "name": "Fisher Cats",
            "parentTeam": "TOR"
        },
        "WSN": {
            "coordinates": {
                "latitude": 40.257,
                "longitude": -76.878
            },
            "location": "Harrisburg",
            "name": "Senators",
            "parentTeam": "WSN"
        }
    },
    "High-A": {
        "ARI": {
            "coordinates": {
                "latitude": 45.52,
                "longitude": -122.97
            },
            "location": "Hillsboro",
            "name": "Hops",
            "parentTeam": "ARI"
        },
        "ATL": {
            "coordinates": {
                "latitude": 34.253,
                "longitude": -85.175
            },
            "location": "Rome",
            "name": "Emperors",
            "parentTeam": "ATL"
        },
        "BAL": {
            "coordinates": {
                "latitude": 39.517,
                "longitude": -76.153
            },
            "location": "Frederick",
            "name": "Keys",
            "parentTeam": "BAL"
        },
        "BOS": {
            "coordinates": {
                "latitude": 34.846,
                "longitude": -82.396
            },
            "location": "Greenville",
            "name": "Drive",
            "parentTeam": "BOS"
        },
        "CHC": {
            "coordinates": {
                "latitude": 41.677,
                "longitude": -86.277
            },
            "location": "South Bend",
            "name": "Cubs",
            "parentTeam": "CHC"
        },
        "CHW": {
            "coordinates": {
                "latitude": 36.096,
                "longitude": -80.237
            },
            "location": "Winston-Salem",
            "name": "Dash",
            "parentTeam": "CHW"
        },
        "CIN": {
            "coordinates": {
                "latitude": 39.759,
                "longitude": -84.193
            },
            "location": "Dayton",
            "name": "Dragons",
            "parentTeam": "CIN"
        },
        "CLE": {
            "coordinates": {
                "latitude": 41.695,
                "longitude": -81.45
            },
            "location": "Lake County",
            "name": "Captains",
            "parentTeam": "CLE"
        },
        "COL": {
            "coordinates": {
                "latitude": 47.629,
                "longitude": -117.331
            },
            "location": "Spokane",
            "name": "Indians",
            "parentTeam": "COL"
        },
        "DET": {
            "coordinates": {
                "latitude": 43.036,
                "longitude": -85.676
            },
            "location": "West Michigan",
            "name": "Whitecaps",
            "parentTeam": "DET"
        },
        "HOU": {
            "coordinates": {
                "latitude": 35.595,
                "longitude": -82.541
            },
            "location": "Asheville",
            "name": "Tourists",
            "parentTeam": "HOU"
        },
        "KCR": {
            "coordinates": {
                "latitude": 41.527,
                "longitude": -90.571
            },
            "location": "Quad Cities",
            "name": "River Bandits",
            "parentTeam": "KCR"
        },
        "LAA": {
            "coordinates": {
                "latitude": 46.237,
                "longitude": -119.112
            },
            "location": "Tri-City",
            "name": "Dust Devils",
            "parentTeam": "LAA"
        },
        "LAD": {
            "coordinates": {
                "latitude": 43.601,
                "longitude": -84.253
            },
            "location": "Great Lakes",
            "name": "Loons",
            "parentTeam": "LAD"
        },
        "MIA": {
            "coordinates": {
                "latitude": 42.509,
                "longitude": -89.037
            },
            "location": "Beloit",
            "name": "Sky Carp",
            "parentTeam": "MIA"
        },
        "MIL": {
            "coordinates": {
                "latitude": 44.262,
                "longitude": -88.325
            },
            "location": "Wisconsin",
            "name": "Timber Rattlers",
            "parentTeam": "MIL"
        },
        "MIN": {
            "coordinates": {
                "latitude": 41.986,
                "longitude": -91.674
            },
            "location": "Cedar Rapids",
            "name": "Kernels",
            "parentTeam": "MIN"
        },
        "NYM": {
            "coordinates": {
                "latitude": 40.572,
                "longitude": -73.981
            },
            "location": "Brooklyn",
            "name": "Cyclones",
            "parentTeam": "NYM"
        },
        "NYY": {
            "coordinates": {
                "latitude": 41.584,
                "longitude": -73.935
            },
            "location": "Hudson Valley",
            "name": "Renegades",
            "parentTeam": "NYY"
        },
        "OAK": {
            "coordinates": {
                "latitude": 42.734,
                "longitude": -84.545
            },
            "location": "Lansing",
            "name": "Lugnuts",
            "parentTeam": "OAK"
        },
        "PHI": {
            "coordinates": {
                "latitude": 40.102,
                "longitude": -74.195
            },
            "location": "Jersey Shore",
            "name": "BlueClaws",
            "parentTeam": "PHI"
        },
        "PIT": {
            "coordinates": {
                "latitude": 36.074,
                "longitude": -79.789
            },
            "location": "Greensboro",
            "name": "Grasshoppers",
            "parentTeam": "PIT"
        },
        "SDP": {
            "coordinates": {
                "latitude": 41.074,
                "longitude": -85.146
            },
            "location": "Fort Wayne",
            "name": "TinCaps",
            "parentTeam": "SDP"
        },
        "SEA": {
            "coordinates": {
                "latitude": 47.986,
                "longitude": -122.217
            },
            "location": "Everett",
            "name": "AquaSox",
            "parentTeam": "SEA"
        },
        "SFG": {
            "coordinates": {
                "latitude": 44.064,
                "longitude": -123.041
            },
            "location": "Eugene",
            "name": "Emeralds",
            "parentTeam": "SFG"
        },
        "STL": {
            "coordinates": {
                "latitude": 40.687,
                "longitude": -89.593
            },
            "location": "Peoria",
            "name": "Chiefs",
            "parentTeam": "STL"
        },
        "TBR": {
            "coordinates": {
                "latitude": 36.986,
                "longitude": -86.452
            },
            "location": "Bowling Green",
            "name": "Hot Rods",
            "parentTeam": "TBR"
        },
        "TEX": {
            "coordinates": {
                "latitude": 34.947,
                "longitude": -81.919
            },
            "location": "Hub City",
            "name": "Spartanburgers",
            "parentTeam": "TEX"
        },
        "TOR": {
            "coordinates": {
                "latitude": 49.24,
                "longitude": -123.108
            },
            "location": "Vancouver",
            "name": "Canadians",
            "parentTeam": "TOR"
        },
        "WSN": {
            "coordinates": {
                "latitude": 39.745,
                "longitude": -75.555
            },
            "location": "Wilmington",
            "name": "Blue Rocks",
            "parentTeam": "WSN"
        }
    },
    "Single-A": {
        "ARI": {
            "coordinates": {
                "latitude": 36.336,
                "longitude": -119.294
            },
            "location": "Visalia",
            "name": "Rawhide",
            "parentTeam": "ARI"
        },
        "ATL": {
            "coordinates": {
                "latitude": 33.501,
                "longitude": -81.968
            },
            "location": "Augusta",
            "name": "GreenJackets",
            "parentTeam": "ATL"
        },
        "BAL": {
            "coordinates": {
                "latitude": 38.367,
                "longitude": -75.555
            },
            "location": "Delmarva",
            "name": "Shorebirds",
            "parentTeam": "BAL"
        },
        "BOS": {
            "coordinates": {
                "latitude": 37.274,
                "longitude": -80.036
            },
            "location": "Salem",
            "name": "RidgeYaks",
            "parentTeam": "BOS"
        },
        "CHC": {
            "coordinates": {
                "latitude": 33.703,
                "longitude": -78.869
            },
            "location": "Myrtle Beach",
            "name": "Pelicans",
            "parentTeam": "CHC"
        },
        "CHW": {
            "coordinates": {
                "latitude": 35.469,
                "longitude": -80.627
            },
            "location": "Kannapolis",
            "name": "Cannon Ballers",
            "parentTeam": "CHW"
        },
        "CIN": {
            "coordinates": {
                "latitude": 29.228,
                "longitude": -81.02
            },
            "location": "Daytona",
            "name": "Tortugas",
            "parentTeam": "CIN"
        },
        "CLE": {
            "coordinates": {
                "latitude": 37.403,
                "longitude": -79.154
            },
            "location": "Hill City",
            "name": "Howlers",
            "parentTeam": "CLE"
        },
        "COL": {
            "coordinates": {
                "latitude": 36.731,
                "longitude": -119.791
            },
            "location": "Fresno",
            "name": "Grizzlies",
            "parentTeam": "COL"
        },
        "DET": {
            "coordinates": {
                "latitude": 28.047,
                "longitude": -81.954
            },
            "location": "Lakeland",
            "name": "Flying Tigers",
            "parentTeam": "DET"
        },
        "HOU": {
            "coordinates": {
                "latitude": 35.053,
                "longitude": -78.884
            },
            "location": "Fayetteville",
            "name": "Woodpeckers",
            "parentTeam": "HOU"
        },
        "KCR": {
            "coordinates": {
                "latitude": 34.012,
                "longitude": -81.035
            },
            "location": "Columbia",
            "name": "Fireflies",
            "parentTeam": "KCR"
        },
        "LAA": {
            "coordinates": {
                "latitude": 34.112,
                "longitude": -117.584
            },
            "location": "Rancho Cucamonga",
            "name": "Quakes",
            "parentTeam": "LAA"
        },
        "LAD": {
            "coordinates": {
                "latitude": 34.018,
                "longitude": -117.604
            },
            "location": "Ontario",
            "name": "Tower Buzzers",
            "parentTeam": "LAD"
        },
        "MIA": {
            "coordinates": {
                "latitude": 26.891,
                "longitude": -80.12
            },
            "location": "Jupiter",
            "name": "Hammerheads",
            "parentTeam": "MIA"
        },
        "MIN": {
            "coordinates": {
                "latitude": 26.555,
                "longitude": -81.914
            },
            "location": "Fort Myers",
            "name": "Mighty Mussels",
            "parentTeam": "MIN"
        },
        "MIL": {
            "coordinates": {
                "latitude": 35.721,
                "longitude": -77.915
            },
            "location": "Wilson",
            "name": "Warbirds",
            "parentTeam": "MIL"
        },
        "NYM": {
            "coordinates": {
                "latitude": 27.277,
                "longitude": -80.337
            },
            "location": "St. Lucie",
            "name": "Mets",
            "parentTeam": "NYM"
        },
        "NYY": {
            "coordinates": {
                "latitude": 27.98,
                "longitude": -82.507
            },
            "location": "Tampa",
            "name": "Tarpons",
            "parentTeam": "NYY"
        },
        "OAK": {
            "coordinates": {
                "latitude": 37.951,
                "longitude": -121.291
            },
            "location": "Stockton",
            "name": "Ports",
            "parentTeam": "OAK"
        },
        "PHI": {
            "coordinates": {
                "latitude": 27.944,
                "longitude": -82.758
            },
            "location": "Clearwater",
            "name": "Threshers",
            "parentTeam": "PHI"
        },
        "PIT": {
            "coordinates": {
                "latitude": 27.49,
                "longitude": -82.563
            },
            "location": "Bradenton",
            "name": "Marauders",
            "parentTeam": "PIT"
        },
        "SDP": {
            "coordinates": {
                "latitude": 33.653,
                "longitude": -117.33
            },
            "location": "Lake Elsinore",
            "name": "Storm",
            "parentTeam": "SDP"
        },
        "SEA": {
            "coordinates": {
                "latitude": 34.09,
                "longitude": -117.29
            },
            "location": "Inland Empire",
            "name": "66ers",
            "parentTeam": "SEA"
        },
        "SFG": {
            "coordinates": {
                "latitude": 37.328,
                "longitude": -121.869
            },
            "location": "San Jose",
            "name": "Giants",
            "parentTeam": "SFG"
        },
        "STL": {
            "coordinates": {
                "latitude": 26.891,
                "longitude": -80.12
            },
            "location": "Palm Beach",
            "name": "Cardinals",
            "parentTeam": "STL"
        },
        "TOR": {
            "coordinates": {
                "latitude": 28.004,
                "longitude": -82.787
            },
            "location": "Dunedin",
            "name": "Blue Jays",
            "parentTeam": "TOR"
        },
        "TBR": {
            "coordinates": {
                "latitude": 32.768,
                "longitude": -79.986
            },
            "location": "Charleston",
            "name": "RiverDogs",
            "parentTeam": "TBR"
        },
        "TEX": {
            "coordinates": {
                "latitude": 35.735,
                "longitude": -81.372
            },
            "location": "Hickory",
            "name": "Crawdads",
            "parentTeam": "TEX"
        },
        "WSN": {
            "coordinates": {
                "latitude": 38.277,
                "longitude": -77.45
            },
            "location": "Fredericksburg",
            "name": "Nationals",
            "parentTeam": "WSN"
        }
    }
}