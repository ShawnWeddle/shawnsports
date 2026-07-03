import type { LeagueTeamType } from "~/types/MapTypes"; 

export function findShared() {
  const shared = [];
  for(let i=0; i<allData.length; i++){
    for(let j=i + 1; j<allData.length; j++){
      const p1 = allData[i];
      const p2 = allData[j];
      if(p1 && p2){
        if(p1.coordinates.latitude === p2.coordinates.latitude && p1.coordinates.longitude === p2.coordinates.longitude){
          shared.push([
            { league: p1.league, team: p1.code },
            { league: p2.league, team: p2.code },
          ])
        }
      }
    }
  }
  return shared;
}

const allData = [
    {
        "code": "KAN",
        "coordinates": {
            "latitude": 39.049,
            "longitude": -94.484
        },
        "location": "Kansas City",
        "name": "Chiefs",
        "league": "NFL"
    },
    {
        "code": "SFO",
        "coordinates": {
            "latitude": 37.403,
            "longitude": -121.97
        },
        "location": "San Francisco",
        "name": "49ers",
        "league": "NFL"
    },
    {
        "code": "BAL",
        "coordinates": {
            "latitude": 39.278,
            "longitude": -76.623
        },
        "location": "Baltimore",
        "name": "Ravens",
        "league": "NFL"
    },
    {
        "code": "DET",
        "coordinates": {
            "latitude": 42.34,
            "longitude": -83.046
        },
        "location": "Detroit",
        "name": "Lions",
        "league": "NFL"
    },
    {
        "code": "BUF",
        "coordinates": {
            "latitude": 42.774,
            "longitude": -78.787
        },
        "location": "Buffalo",
        "name": "Bills",
        "league": "NFL"
    },
    {
        "code": "HOU",
        "coordinates": {
            "latitude": 29.685,
            "longitude": -95.411
        },
        "location": "Houston",
        "name": "Texans",
        "league": "NFL"
    },
    {
        "code": "TAM",
        "coordinates": {
            "latitude": 27.976,
            "longitude": -82.503
        },
        "location": "Tampa Bay",
        "name": "Buccaneers",
        "league": "NFL"
    },
    {
        "code": "GNB",
        "coordinates": {
            "latitude": 44.501,
            "longitude": -88.062
        },
        "location": "Green Bay",
        "name": "Packers",
        "league": "NFL"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 32.748,
            "longitude": -97.093
        },
        "location": "Dallas",
        "name": "Cowboys",
        "league": "NFL"
    },
    {
        "code": "CLE",
        "coordinates": {
            "latitude": 41.506,
            "longitude": -81.699
        },
        "location": "Cleveland",
        "name": "Browns",
        "league": "NFL"
    },
    {
        "code": "PHI",
        "coordinates": {
            "latitude": 39.901,
            "longitude": -75.168
        },
        "location": "Philadelphia",
        "name": "Eagles",
        "league": "NFL"
    },
    {
        "code": "MIA",
        "coordinates": {
            "latitude": 25.958,
            "longitude": -80.239
        },
        "location": "Miami",
        "name": "Dolphins",
        "league": "NFL"
    },
    {
        "code": "PIT",
        "coordinates": {
            "latitude": 40.447,
            "longitude": -80.016
        },
        "location": "Pittsburgh",
        "name": "Steelers",
        "league": "NFL"
    },
    {
        "code": "LAR",
        "coordinates": {
            "latitude": 33.953,
            "longitude": -118.339
        },
        "location": "Los Angeles",
        "name": "Rams",
        "league": "NFL"
    },
    {
        "code": "CIN",
        "coordinates": {
            "latitude": 39.095,
            "longitude": -84.516
        },
        "location": "Cincinnati",
        "name": "Bengals",
        "league": "NFL"
    },
    {
        "code": "JAX",
        "coordinates": {
            "latitude": 30.324,
            "longitude": -81.638
        },
        "location": "Jacksonville",
        "name": "Jaguars",
        "league": "NFL"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.595,
            "longitude": -122.332
        },
        "location": "Seattle",
        "name": "Seahawks",
        "league": "NFL"
    },
    {
        "code": "IND",
        "coordinates": {
            "latitude": 39.76,
            "longitude": -86.164
        },
        "location": "Indianapolis",
        "name": "Colts",
        "league": "NFL"
    },
    {
        "code": "NOR",
        "coordinates": {
            "latitude": 29.951,
            "longitude": -90.081
        },
        "location": "New Orleans",
        "name": "Saints",
        "league": "NFL"
    },
    {
        "code": "LVR",
        "coordinates": {
            "latitude": 36.091,
            "longitude": -115.184
        },
        "location": "Las Vegas",
        "name": "Raiders",
        "league": "NFL"
    },
    {
        "code": "DEN",
        "coordinates": {
            "latitude": 39.744,
            "longitude": -105.02
        },
        "location": "Denver",
        "name": "Broncos",
        "league": "NFL"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.974,
            "longitude": -93.258
        },
        "location": "Minnesota",
        "name": "Vikings",
        "league": "NFL"
    },
    {
        "code": "NYJ",
        "coordinates": {
            "latitude": 40.813,
            "longitude": -74.074
        },
        "location": "New York",
        "name": "Jets",
        "league": "NFL"
    },
    {
        "code": "CHI",
        "coordinates": {
            "latitude": 41.862,
            "longitude": -87.617
        },
        "location": "Chicago",
        "name": "Bears",
        "league": "NFL"
    },
    {
        "code": "ATL",
        "coordinates": {
            "latitude": 33.755,
            "longitude": -84.401
        },
        "location": "Atlanta",
        "name": "Falcons",
        "league": "NFL"
    },
    {
        "code": "TEN",
        "coordinates": {
            "latitude": 36.166,
            "longitude": -86.771
        },
        "location": "Tennessee",
        "name": "Titans",
        "league": "NFL"
    },
    {
        "code": "NYG",
        "coordinates": {
            "latitude": 40.813,
            "longitude": -74.074
        },
        "location": "New York",
        "name": "Giants",
        "league": "NFL"
    },
    {
        "code": "LAC",
        "coordinates": {
            "latitude": 33.953,
            "longitude": -118.339
        },
        "location": "Los Angeles",
        "name": "Chargers",
        "league": "NFL"
    },
    {
        "code": "ARI",
        "coordinates": {
            "latitude": 33.528,
            "longitude": -112.263
        },
        "location": "Arizona",
        "name": "Cardinals",
        "league": "NFL"
    },
    {
        "code": "NWE",
        "coordinates": {
            "latitude": 42.091,
            "longitude": -71.264
        },
        "location": "New England",
        "name": "Patriots",
        "league": "NFL"
    },
    {
        "code": "WAS",
        "coordinates": {
            "latitude": 38.908,
            "longitude": -76.864
        },
        "location": "Washington",
        "name": "Commanders",
        "league": "NFL"
    },
    {
        "code": "CAR",
        "coordinates": {
            "latitude": 35.226,
            "longitude": -80.853
        },
        "location": "Carolina",
        "name": "Panthers",
        "league": "NFL"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.633,
            "longitude": -79.419
        },
        "location": "Toronto",
        "name": "Argonauts",
        "league": "CFL"
    },
    {
        "code": "WPG",
        "coordinates": {
            "latitude": 49.807,
            "longitude": -97.142
        },
        "location": "Winnipeg",
        "name": "Blue Bombers",
        "league": "CFL"
    },
    {
        "code": "MTL",
        "coordinates": {
            "latitude": 45.51,
            "longitude": -73.581
        },
        "location": "Montreal",
        "name": "Allouettes",
        "league": "CFL"
    },
    {
        "code": "SSK",
        "coordinates": {
            "latitude": 50.45,
            "longitude": -104.633
        },
        "location": "Saskatchewan",
        "name": "Roughriders",
        "league": "CFL"
    },
    {
        "code": "OTT",
        "coordinates": {
            "latitude": 45.398,
            "longitude": -75.683
        },
        "location": "Ottawa",
        "name": "Redblacks",
        "league": "CFL"
    },
    {
        "code": "BCL",
        "coordinates": {
            "latitude": 49.277,
            "longitude": -123.112
        },
        "location": "BC",
        "name": "Lions",
        "league": "CFL"
    },
    {
        "code": "EDM",
        "coordinates": {
            "latitude": 53.56,
            "longitude": -113.476
        },
        "location": "Edmonton",
        "name": "Elks",
        "league": "CFL"
    },
    {
        "code": "HAM",
        "coordinates": {
            "latitude": 43.252,
            "longitude": -79.83
        },
        "location": "Hamilton",
        "name": "Tiger-Cats",
        "league": "CFL"
    },
    {
        "code": "CGY",
        "coordinates": {
            "latitude": 51.07,
            "longitude": -114.121
        },
        "location": "Calgary",
        "name": "Stampeders",
        "league": "CFL"
    },
    {
        "code": "ARI",
        "coordinates": {
            "latitude": 33.532,
            "longitude": -112.261
        },
        "location": "Arizona",
        "name": "Rattlers",
        "league": "IFL"
    },
    {
        "code": "FSH",
        "coordinates": {
            "latitude": 39.948,
            "longitude": -86.004
        },
        "location": "Fishers",
        "name": "Freight",
        "league": "IFL"
    },
    {
        "code": "GBB",
        "coordinates": {
            "latitude": 44.499,
            "longitude": -88.055
        },
        "location": "Green Bay",
        "name": "Blizzard",
        "league": "IFL"
    },
    {
        "code": "IBS",
        "coordinates": {
            "latitude": 41.593,
            "longitude": -93.621
        },
        "location": "Iowa",
        "name": "Barnstormers",
        "league": "IFL"
    },
    {
        "code": "JAX",
        "coordinates": {
            "latitude": 30.326,
            "longitude": -81.645
        },
        "location": "Jacksonville",
        "name": "Sharks",
        "league": "IFL"
    },
    {
        "code": "NMC",
        "coordinates": {
            "latitude": 35.082,
            "longitude": -106.573
        },
        "location": "New Mexico",
        "name": "Chupacabras",
        "league": "IFL"
    },
    {
        "code": "NAW",
        "coordinates": {
            "latitude": 34.59,
            "longitude": -112.336
        },
        "location": "Northern Arizona",
        "name": "Wranglers",
        "league": "IFL"
    },
    {
        "code": "ORL",
        "coordinates": {
            "latitude": 28.539,
            "longitude": -81.384
        },
        "location": "Orlando",
        "name": "Pirates",
        "league": "IFL"
    },
    {
        "code": "QCS",
        "coordinates": {
            "latitude": 41.508,
            "longitude": -90.52
        },
        "location": "Quad City",
        "name": "Steamwheelers",
        "league": "IFL"
    },
    {
        "code": "SAG",
        "coordinates": {
            "latitude": 29.427,
            "longitude": -98.439
        },
        "location": "San Antonio",
        "name": "Gunslingers",
        "league": "IFL"
    },
    {
        "code": "SDS",
        "coordinates": {
            "latitude": 33.207,
            "longitude": -117.315
        },
        "location": "San Diego",
        "name": "Strike Force",
        "league": "IFL"
    },
    {
        "code": "TSS",
        "coordinates": {
            "latitude": 32.218,
            "longitude": -110.974
        },
        "location": "Tucson",
        "name": "Sugar Skulls",
        "league": "IFL"
    },
    {
        "code": "TUL",
        "coordinates": {
            "latitude": 36.153,
            "longitude": -95.996
        },
        "location": "Tulsa",
        "name": "Oilers",
        "league": "IFL"
    },
    {
        "code": "VEG",
        "coordinates": {
            "latitude": 36.019,
            "longitude": -115.081
        },
        "location": "Vegas",
        "name": "Knight Hawks",
        "league": "IFL"
    },
    {
        "code": "BHM",
        "coordinates": {
            "latitude": 33.529,
            "longitude": -86.809
        },
        "location": "Birmingham",
        "name": "Stallions",
        "league": "UFL"
    },
    {
        "code": "CBA",
        "coordinates": {
            "latitude": 40.01,
            "longitude": -82.991
        },
        "location": "Columbus",
        "name": "Aviators",
        "league": "UFL"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 33.154,
            "longitude": -96.835
        },
        "location": "Dallas",
        "name": "Renegades",
        "league": "UFL"
    },
    {
        "code": "DCD",
        "coordinates": {
            "latitude": 38.868,
            "longitude": -77.012
        },
        "location": "DC",
        "name": "Defenders",
        "league": "UFL"
    },
    {
        "code": "HOU",
        "coordinates": {
            "latitude": 29.752,
            "longitude": -95.352
        },
        "location": "Houston",
        "name": "Gamblers",
        "league": "UFL"
    },
    {
        "code": "LOU",
        "coordinates": {
            "latitude": 38.259,
            "longitude": -85.733
        },
        "location": "Louisville",
        "name": "Kings",
        "league": "UFL"
    },
    {
        "code": "ORL",
        "coordinates": {
            "latitude": 28.624,
            "longitude": -81.389
        },
        "location": "Orlando",
        "name": "Storm",
        "league": "UFL"
    },
    {
        "code": "STL",
        "coordinates": {
            "latitude": 38.633,
            "longitude": -90.188
        },
        "location": "St. Louis",
        "name": "Battlehawks",
        "league": "UFL"
    },
    {
        "code": "BOS",
        "coordinates": {
            "latitude": 42.366,
            "longitude": -71.062
        },
        "location": "Boston",
        "name": "Celtics",
        "league": "NBA"
    },
    {
        "code": "OKC",
        "coordinates": {
            "latitude": 35.463,
            "longitude": -97.515
        },
        "location": "Oklahoma City",
        "name": "Thunder",
        "league": "NBA"
    },
    {
        "code": "DEN",
        "coordinates": {
            "latitude": 39.749,
            "longitude": -105.008
        },
        "location": "Denver",
        "name": "Nuggets",
        "league": "NBA"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.98,
            "longitude": -93.276
        },
        "location": "Minnesota",
        "name": "Timberwolves",
        "league": "NBA"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 32.79,
            "longitude": -96.81
        },
        "location": "Dallas",
        "name": "Mavericks",
        "league": "NBA"
    },
    {
        "code": "NYK",
        "coordinates": {
            "latitude": 40.751,
            "longitude": -73.994
        },
        "location": "New York",
        "name": "Knicks",
        "league": "NBA"
    },
    {
        "code": "PHI",
        "coordinates": {
            "latitude": 39.901,
            "longitude": -75.172
        },
        "location": "Philadelphia",
        "name": "76ers",
        "league": "NBA"
    },
    {
        "code": "MEM",
        "coordinates": {
            "latitude": 35.138,
            "longitude": -90.05
        },
        "location": "Memphis",
        "name": "Grizzlies",
        "league": "NBA"
    },
    {
        "code": "MIL",
        "coordinates": {
            "latitude": 43.045,
            "longitude": -87.918
        },
        "location": "Milwaukee",
        "name": "Bucks",
        "league": "NBA"
    },
    {
        "code": "MIA",
        "coordinates": {
            "latitude": 25.781,
            "longitude": -80.188
        },
        "location": "Miami",
        "name": "Heat",
        "league": "NBA"
    },
    {
        "code": "IND",
        "coordinates": {
            "latitude": 39.764,
            "longitude": -86.155
        },
        "location": "Indiana",
        "name": "Pacers",
        "league": "NBA"
    },
    {
        "code": "NOP",
        "coordinates": {
            "latitude": 29.949,
            "longitude": -90.082
        },
        "location": "New Orleans",
        "name": "Pelicans",
        "league": "NBA"
    },
    {
        "code": "CLE",
        "coordinates": {
            "latitude": 41.496,
            "longitude": -81.688
        },
        "location": "Cleveland",
        "name": "Cavaliers",
        "league": "NBA"
    },
    {
        "code": "ORL",
        "coordinates": {
            "latitude": 28.539,
            "longitude": -81.384
        },
        "location": "Orlando",
        "name": "Magic",
        "league": "NBA"
    },
    {
        "code": "SAC",
        "coordinates": {
            "latitude": 38.58,
            "longitude": -121.499
        },
        "location": "Sacramento",
        "name": "Kings",
        "league": "NBA"
    },
    {
        "code": "HOU",
        "coordinates": {
            "latitude": 29.751,
            "longitude": -95.362
        },
        "location": "Houston",
        "name": "Rockets",
        "league": "NBA"
    },
    {
        "code": "LAC",
        "coordinates": {
            "latitude": 33.944,
            "longitude": -118.342
        },
        "location": "Los Angeles",
        "name": "Clippers",
        "league": "NBA"
    },
    {
        "code": "PHO",
        "coordinates": {
            "latitude": 33.446,
            "longitude": -112.071
        },
        "location": "Phoenix",
        "name": "Suns",
        "league": "NBA"
    },
    {
        "code": "GSW",
        "coordinates": {
            "latitude": 37.768,
            "longitude": -122.387
        },
        "location": "Golden State",
        "name": "Warriors",
        "league": "NBA"
    },
    {
        "code": "LAL",
        "coordinates": {
            "latitude": 34.043,
            "longitude": -118.267
        },
        "location": "Los Angeles",
        "name": "Lakers",
        "league": "NBA"
    },
    {
        "code": "ATL",
        "coordinates": {
            "latitude": 33.757,
            "longitude": -84.396
        },
        "location": "Atlanta",
        "name": "Hawks",
        "league": "NBA"
    },
    {
        "code": "SAS",
        "coordinates": {
            "latitude": 29.427,
            "longitude": -98.437
        },
        "location": "San Antonio",
        "name": "Spurs",
        "league": "NBA"
    },
    {
        "code": "UTA",
        "coordinates": {
            "latitude": 40.768,
            "longitude": -111.901
        },
        "location": "Utah",
        "name": "Jazz",
        "league": "NBA"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.643,
            "longitude": -79.379
        },
        "location": "Toronto",
        "name": "Raptors",
        "league": "NBA"
    },
    {
        "code": "CHI",
        "coordinates": {
            "latitude": 41.881,
            "longitude": -87.674
        },
        "location": "Chicago",
        "name": "Bulls",
        "league": "NBA"
    },
    {
        "code": "POR",
        "coordinates": {
            "latitude": 45.532,
            "longitude": -122.667
        },
        "location": "Portland",
        "name": "Trailblazers",
        "league": "NBA"
    },
    {
        "code": "CHO",
        "coordinates": {
            "latitude": 35.225,
            "longitude": -80.839
        },
        "location": "Charlotte",
        "name": "Hornets",
        "league": "NBA"
    },
    {
        "code": "DET",
        "coordinates": {
            "latitude": 42.341,
            "longitude": -83.055
        },
        "location": "Detroit",
        "name": "Pistons",
        "league": "NBA"
    },
    {
        "code": "WAS",
        "coordinates": {
            "latitude": 38.898,
            "longitude": -77.021
        },
        "location": "Washington",
        "name": "Wizards",
        "league": "NBA"
    },
    {
        "code": "BRK",
        "coordinates": {
            "latitude": 40.683,
            "longitude": -73.975
        },
        "location": "Brooklyn",
        "name": "Nets",
        "league": "NBA"
    },
    {
        "code": "NGL-ATL",
        "coordinates": {
            "latitude": 33.647,
            "longitude": -84.46
        },
        "location": "College Park",
        "name": "Skyhawks",
        "league": "NGL"
    },
    {
        "code": "NGL-BOS",
        "coordinates": {
            "latitude": 43.656,
            "longitude": -70.277
        },
        "location": "Maine",
        "name": "Celtics",
        "league": "NGL"
    },
    {
        "code": "NGL-BRK",
        "coordinates": {
            "latitude": 40.723,
            "longitude": -73.591
        },
        "location": "Long Island",
        "name": "Nets",
        "league": "NGL"
    },
    {
        "code": "NGL-CHI",
        "coordinates": {
            "latitude": 42.069,
            "longitude": -88.213
        },
        "location": "Windy City",
        "name": "Bulls",
        "league": "NGL"
    },
    {
        "code": "NGL-CHO",
        "coordinates": {
            "latitude": 36.06,
            "longitude": -79.826
        },
        "location": "Greensboro",
        "name": "Swarm",
        "league": "NGL"
    },
    {
        "code": "NGL-CLE",
        "coordinates": {
            "latitude": 41.504,
            "longitude": -81.693
        },
        "location": "Cleveland",
        "name": "Charge",
        "league": "NGL"
    },
    {
        "code": "NGL-DAL",
        "coordinates": {
            "latitude": 33.1,
            "longitude": -96.819
        },
        "location": "Texas",
        "name": "Legends",
        "league": "NGL"
    },
    {
        "code": "NGL-DEN",
        "coordinates": {
            "latitude": 42.962,
            "longitude": -85.672
        },
        "location": "Grand Rapids",
        "name": "Gold",
        "league": "NGL"
    },
    {
        "code": "NGL-DET",
        "coordinates": {
            "latitude": 42.353,
            "longitude": -83.077
        },
        "location": "Motor City",
        "name": "Cruise",
        "league": "NGL"
    },
    {
        "code": "NGL-GSW",
        "coordinates": {
            "latitude": 36.968,
            "longitude": -122.023
        },
        "location": "Santa Cruz",
        "name": "Warriors",
        "league": "NGL"
    },
    {
        "code": "NGL-HOU",
        "coordinates": {
            "latitude": 26.256,
            "longitude": -98.165
        },
        "location": "Rio Grande Valley",
        "name": "Vipers",
        "league": "NGL"
    },
    {
        "code": "NGL-IND",
        "coordinates": {
            "latitude": 39.992,
            "longitude": -85.912
        },
        "location": "Noblesville",
        "name": "Boom",
        "league": "NGL"
    },
    {
        "code": "NGL-LAC",
        "coordinates": {
            "latitude": 33.207,
            "longitude": -117.315
        },
        "location": "San Diego",
        "name": "Clippers",
        "league": "NGL"
    },
    {
        "code": "NGL-LAL",
        "coordinates": {
            "latitude": 33.78,
            "longitude": -116.34
        },
        "location": "Coachella Valley",
        "name": "Lakers",
        "league": "NGL"
    },
    {
        "code": "NGL-MEM",
        "coordinates": {
            "latitude": 34.927,
            "longitude": -89.996
        },
        "location": "Memphis",
        "name": "Hustle",
        "league": "NGL"
    },
    {
        "code": "NGL-MIA",
        "coordinates": {
            "latitude": 43.592,
            "longitude": -96.755
        },
        "location": "Sioux Falls",
        "name": "Skyforce",
        "league": "NGL"
    },
    {
        "code": "NGL-MIL",
        "coordinates": {
            "latitude": 44.007,
            "longitude": -88.537
        },
        "location": "Wisconsin",
        "name": "Herd",
        "league": "NGL"
    },
    {
        "code": "NGL-MIN",
        "coordinates": {
            "latitude": 41.593,
            "longitude": -93.621
        },
        "location": "Iowa",
        "name": "Wolves",
        "league": "NGL"
    },
    {
        "code": "NGL-NOP",
        "coordinates": {
            "latitude": 30.039,
            "longitude": -90.241
        },
        "location": "Laketown",
        "name": "Squadron",
        "league": "NGL"
    },
    {
        "code": "NGL-NYK",
        "coordinates": {
            "latitude": 41.037,
            "longitude": -73.779
        },
        "location": "Westchester",
        "name": "Knicks",
        "league": "NGL"
    },
    {
        "code": "NGL-OKC",
        "coordinates": {
            "latitude": 35.463,
            "longitude": -97.515
        },
        "location": "Oklahoma City",
        "name": "Blue",
        "league": "NGL"
    },
    {
        "code": "NGL-ORL",
        "coordinates": {
            "latitude": 28.299,
            "longitude": -81.369
        },
        "location": "Osceola",
        "name": "Magic",
        "league": "NGL"
    },
    {
        "code": "NGL-PHI",
        "coordinates": {
            "latitude": 39.728,
            "longitude": -75.554
        },
        "location": "Delaware",
        "name": "Blue Coats",
        "league": "NGL"
    },
    {
        "code": "NGL-PHO",
        "coordinates": {
            "latitude": 33.427,
            "longitude": -111.928
        },
        "location": "Valley",
        "name": "Suns",
        "league": "NGL"
    },
    {
        "code": "NGL-POR",
        "coordinates": {
            "latitude": 45.575,
            "longitude": -122.729
        },
        "location": "Rip City",
        "name": "Remix",
        "league": "NGL"
    },
    {
        "code": "NGL-SAC",
        "coordinates": {
            "latitude": 37.956,
            "longitude": -121.296
        },
        "location": "Stockton",
        "name": "Kings",
        "league": "NGL"
    },
    {
        "code": "NGL-SAS",
        "coordinates": {
            "latitude": 30.541,
            "longitude": -97.82
        },
        "location": "Austin",
        "name": "Spurs",
        "league": "NGL"
    },
    {
        "code": "NGL-TOR",
        "coordinates": {
            "latitude": 43.632,
            "longitude": -79.654
        },
        "location": "Raptors",
        "name": "905",
        "league": "NGL"
    },
    {
        "code": "NGL-UTA",
        "coordinates": {
            "latitude": 40.703,
            "longitude": -111.95
        },
        "location": "Salt Lake City",
        "name": "Stars",
        "league": "NGL"
    },
    {
        "code": "NGL-WAS",
        "coordinates": {
            "latitude": 38.847,
            "longitude": -76.991
        },
        "location": "Capital City",
        "name": "Go-Go",
        "league": "NGL"
    },
    {
        "code": "MEX",
        "coordinates": {
            "latitude": 19.498,
            "longitude": -99.175
        },
        "location": "Mexico City",
        "name": "Capitanes",
        "league": "NGL"
    },
    {
        "code": "LVA",
        "coordinates": {
            "latitude": 36.09,
            "longitude": -115.179
        },
        "location": "Las Vegas",
        "name": "Aces",
        "league": "WNBA"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.98,
            "longitude": -93.276
        },
        "location": "Minnesota",
        "name": "Lynx",
        "league": "WNBA"
    },
    {
        "code": "ATL",
        "coordinates": {
            "latitude": 33.647,
            "longitude": -84.46
        },
        "location": "Atlanta",
        "name": "Dream",
        "league": "WNBA"
    },
    {
        "code": "PHO",
        "coordinates": {
            "latitude": 33.446,
            "longitude": -112.071
        },
        "location": "Phoenix",
        "name": "Mercury",
        "league": "WNBA"
    },
    {
        "code": "NYL",
        "coordinates": {
            "latitude": 40.683,
            "longitude": -73.975
        },
        "location": "New York",
        "name": "Liberty",
        "league": "WNBA"
    },
    {
        "code": "IND",
        "coordinates": {
            "latitude": 39.764,
            "longitude": -86.155
        },
        "location": "Indiana",
        "name": "Fever",
        "league": "WNBA"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.622,
            "longitude": -122.354
        },
        "location": "Seattle",
        "name": "Storm",
        "league": "WNBA"
    },
    {
        "code": "GSV",
        "coordinates": {
            "latitude": 37.768,
            "longitude": -122.387
        },
        "location": "Golden State",
        "name": "Valkyries",
        "league": "WNBA"
    },
    {
        "code": "LAS",
        "coordinates": {
            "latitude": 34.043,
            "longitude": -118.267
        },
        "location": "Los Angeles",
        "name": "Sparks",
        "league": "WNBA"
    },
    {
        "code": "WAS",
        "coordinates": {
            "latitude": 38.847,
            "longitude": -76.991
        },
        "location": "Washington",
        "name": "Mystics",
        "league": "WNBA"
    },
    {
        "code": "CON",
        "coordinates": {
            "latitude": 41.491,
            "longitude": -72.09
        },
        "location": "Connecticut",
        "name": "Sun",
        "league": "WNBA"
    },
    {
        "code": "CHI",
        "coordinates": {
            "latitude": 41.854,
            "longitude": -87.621
        },
        "location": "Chicago",
        "name": "Sky",
        "league": "WNBA"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 32.731,
            "longitude": -97.108
        },
        "location": "Dallas",
        "name": "Wings",
        "league": "WNBA"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.636,
            "longitude": -79.415
        },
        "location": "Toronto",
        "name": "Tempo",
        "league": "WNBA"
    },
    {
        "code": "POR",
        "coordinates": {
            "latitude": 45.532,
            "longitude": -122.667
        },
        "location": "Portland",
        "name": "Fire",
        "league": "WNBA"
    },
    {
        "code": "COL",
        "coordinates": {
            "latitude": 39.756,
            "longitude": -104.994
        },
        "location": "Colorado",
        "name": "Rockies",
        "league": "MLB"
    },
    {
        "code": "CHC",
        "coordinates": {
            "latitude": 41.948,
            "longitude": -87.656
        },
        "location": "Chicago",
        "name": "Cubs",
        "league": "MLB"
    },
    {
        "code": "ATL",
        "coordinates": {
            "latitude": 33.89,
            "longitude": -84.468
        },
        "location": "Atlanta",
        "name": "Braves",
        "league": "MLB"
    },
    {
        "code": "MIL",
        "coordinates": {
            "latitude": 43.028,
            "longitude": -87.971
        },
        "location": "Milwaukee",
        "name": "Brewers",
        "league": "MLB"
    },
    {
        "code": "NYM",
        "coordinates": {
            "latitude": 40.757,
            "longitude": -73.846
        },
        "location": "New York",
        "name": "Mets",
        "league": "MLB"
    },
    {
        "code": "TBR",
        "coordinates": {
            "latitude": 27.768,
            "longitude": -82.653
        },
        "location": "Tampa Bay",
        "name": "Rays",
        "league": "MLB"
    },
    {
        "code": "TEX",
        "coordinates": {
            "latitude": 32.747,
            "longitude": -97.084
        },
        "location": "Texas",
        "name": "Rangers",
        "league": "MLB"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.591,
            "longitude": -122.333
        },
        "location": "Seattle",
        "name": "Mariners",
        "league": "MLB"
    },
    {
        "code": "NYY",
        "coordinates": {
            "latitude": 40.829,
            "longitude": -73.926
        },
        "location": "New York",
        "name": "Yankees",
        "league": "MLB"
    },
    {
        "code": "DET",
        "coordinates": {
            "latitude": 42.339,
            "longitude": -83.049
        },
        "location": "Detroit",
        "name": "Tigers",
        "league": "MLB"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.641,
            "longitude": -79.389
        },
        "location": "Toronto",
        "name": "Blue Jays",
        "league": "MLB"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.982,
            "longitude": -93.278
        },
        "location": "Minnesota",
        "name": "Twins",
        "league": "MLB"
    },
    {
        "code": "KCR",
        "coordinates": {
            "latitude": 39.052,
            "longitude": -94.48
        },
        "location": "Kansas City",
        "name": "Royals",
        "league": "MLB"
    },
    {
        "code": "LAD",
        "coordinates": {
            "latitude": 34.074,
            "longitude": -118.24
        },
        "location": "Los Angeles",
        "name": "Dodgers",
        "league": "MLB"
    },
    {
        "code": "CLE",
        "coordinates": {
            "latitude": 41.496,
            "longitude": -81.685
        },
        "location": "Cleveland",
        "name": "Guardians",
        "league": "MLB"
    },
    {
        "code": "MIA",
        "coordinates": {
            "latitude": 25.778,
            "longitude": -80.22
        },
        "location": "Miami",
        "name": "Marlins",
        "league": "MLB"
    },
    {
        "code": "OAK",
        "coordinates": {
            "latitude": 38.58,
            "longitude": -121.514
        },
        "location": "Oakland",
        "name": "Athletics",
        "league": "MLB"
    },
    {
        "code": "CHW",
        "coordinates": {
            "latitude": 41.83,
            "longitude": -87.634
        },
        "location": "Chicago",
        "name": "White Sox",
        "league": "MLB"
    },
    {
        "code": "PIT",
        "coordinates": {
            "latitude": 40.447,
            "longitude": -80.006
        },
        "location": "Pittsburgh",
        "name": "Pirates",
        "league": "MLB"
    },
    {
        "code": "SDP",
        "coordinates": {
            "latitude": 32.707,
            "longitude": -117.157
        },
        "location": "San Diego",
        "name": "Padres",
        "league": "MLB"
    },
    {
        "code": "HOU",
        "coordinates": {
            "latitude": 29.757,
            "longitude": -95.356
        },
        "location": "Houston",
        "name": "Astros",
        "league": "MLB"
    },
    {
        "code": "BAL",
        "coordinates": {
            "latitude": 39.284,
            "longitude": -76.622
        },
        "location": "Baltimore",
        "name": "Orioles",
        "league": "MLB"
    },
    {
        "code": "SFG",
        "coordinates": {
            "latitude": 37.779,
            "longitude": -122.389
        },
        "location": "San Francisco",
        "name": "Giants",
        "league": "MLB"
    },
    {
        "code": "WSN",
        "coordinates": {
            "latitude": 38.873,
            "longitude": -77.007
        },
        "location": "Washington",
        "name": "Nationals",
        "league": "MLB"
    },
    {
        "code": "BOS",
        "coordinates": {
            "latitude": 42.346,
            "longitude": -71.098
        },
        "location": "Boston",
        "name": "Red Sox",
        "league": "MLB"
    },
    {
        "code": "PHI",
        "coordinates": {
            "latitude": 39.906,
            "longitude": -75.166
        },
        "location": "Philadelphia",
        "name": "Phillies",
        "league": "MLB"
    },
    {
        "code": "CIN",
        "coordinates": {
            "latitude": 39.097,
            "longitude": -84.507
        },
        "location": "Cincinnati",
        "name": "Reds",
        "league": "MLB"
    },
    {
        "code": "ARI",
        "coordinates": {
            "latitude": 33.445,
            "longitude": -112.067
        },
        "location": "Arizona",
        "name": "Diamondbacks",
        "league": "MLB"
    },
    {
        "code": "STL",
        "coordinates": {
            "latitude": 38.623,
            "longitude": -90.193
        },
        "location": "St. Louis",
        "name": "Cardinals",
        "league": "MLB"
    },
    {
        "code": "LAA",
        "coordinates": {
            "latitude": 33.8,
            "longitude": -117.883
        },
        "location": "Los Angeles",
        "name": "Angels",
        "league": "MLB"
    },
    {
        "code": "AAA-ARI",
        "coordinates": {
            "latitude": 39.528,
            "longitude": -119.808
        },
        "location": "Reno",
        "name": "Aces",
        "league": "AAA"
    },
    {
        "code": "AAA-ATL",
        "coordinates": {
            "latitude": 34.041,
            "longitude": -83.992
        },
        "location": "Gwinnett",
        "name": "Stripers",
        "league": "AAA"
    },
    {
        "code": "AAA-BAL",
        "coordinates": {
            "latitude": 36.843,
            "longitude": -76.279
        },
        "location": "Norfolk",
        "name": "Tides",
        "league": "AAA"
    },
    {
        "code": "AAA-BOS",
        "coordinates": {
            "latitude": 42.257,
            "longitude": -71.8
        },
        "location": "Worcester",
        "name": "Red Sox",
        "league": "AAA"
    },
    {
        "code": "AAA-CHC",
        "coordinates": {
            "latitude": 41.58,
            "longitude": -93.616
        },
        "location": "Iowa",
        "name": "Cubs",
        "league": "AAA"
    },
    {
        "code": "AAA-CHW",
        "coordinates": {
            "latitude": 35.228,
            "longitude": -80.849
        },
        "location": "Charlotte",
        "name": "Knights",
        "league": "AAA"
    },
    {
        "code": "AAA-CIN",
        "coordinates": {
            "latitude": 38.256,
            "longitude": -85.745
        },
        "location": "Louisville",
        "name": "Bats",
        "league": "AAA"
    },
    {
        "code": "AAA-CLE",
        "coordinates": {
            "latitude": 39.969,
            "longitude": -83.011
        },
        "location": "Columbus",
        "name": "Clippers",
        "league": "AAA"
    },
    {
        "code": "AAA-COL",
        "coordinates": {
            "latitude": 35.07,
            "longitude": -106.629
        },
        "location": "Albuquerque",
        "name": "Isotopes",
        "league": "AAA"
    },
    {
        "code": "AAA-DET",
        "coordinates": {
            "latitude": 41.649,
            "longitude": -83.539
        },
        "location": "Toledo",
        "name": "Mud Hens",
        "league": "AAA"
    },
    {
        "code": "AAA-HOU",
        "coordinates": {
            "latitude": 29.623,
            "longitude": -95.647
        },
        "location": "Sugar Land",
        "name": "Space Cowboys",
        "league": "AAA"
    },
    {
        "code": "AAA-KCR",
        "coordinates": {
            "latitude": 41.152,
            "longitude": -96.107
        },
        "location": "Omaha",
        "name": "Storm Chasers",
        "league": "AAA"
    },
    {
        "code": "AAA-LAA",
        "coordinates": {
            "latitude": 40.55,
            "longitude": -112.023
        },
        "location": "Salt Lake",
        "name": "Bees",
        "league": "AAA"
    },
    {
        "code": "AAA-LAD",
        "coordinates": {
            "latitude": 35.465,
            "longitude": -97.508
        },
        "location": "Oklahoma City",
        "name": "Comets",
        "league": "AAA"
    },
    {
        "code": "AAA-MIA",
        "coordinates": {
            "latitude": 30.325,
            "longitude": -81.643
        },
        "location": "Jacksonville",
        "name": "Jumbo Shrimp",
        "league": "AAA"
    },
    {
        "code": "AAA-MIL",
        "coordinates": {
            "latitude": 36.173,
            "longitude": -86.785
        },
        "location": "Nashville",
        "name": "Sounds",
        "league": "AAA"
    },
    {
        "code": "AAA-MIN",
        "coordinates": {
            "latitude": 44.951,
            "longitude": -93.085
        },
        "location": "St. Paul",
        "name": "Saints",
        "league": "AAA"
    },
    {
        "code": "AAA-NYM",
        "coordinates": {
            "latitude": 43.079,
            "longitude": -76.165
        },
        "location": "Syracuse",
        "name": "Mets",
        "league": "AAA"
    },
    {
        "code": "AAA-NYY",
        "coordinates": {
            "latitude": 41.36,
            "longitude": -75.684
        },
        "location": "Scranton/Wilkes-Barre",
        "name": "RailRiders",
        "league": "AAA"
    },
    {
        "code": "AAA-OAK",
        "coordinates": {
            "latitude": 36.153,
            "longitude": -115.33
        },
        "location": "Las Vegas",
        "name": "Aviators",
        "league": "AAA"
    },
    {
        "code": "AAA-PHI",
        "coordinates": {
            "latitude": 40.626,
            "longitude": -75.453
        },
        "location": "Lehigh Valley",
        "name": "IronPigs",
        "league": "AAA"
    },
    {
        "code": "AAA-PIT",
        "coordinates": {
            "latitude": 39.765,
            "longitude": -86.169
        },
        "location": "Indianapolis",
        "name": "Indians",
        "league": "AAA"
    },
    {
        "code": "AAA-SDP",
        "coordinates": {
            "latitude": 31.759,
            "longitude": -106.493
        },
        "location": "El Paso",
        "name": "Chihuahuas",
        "league": "AAA"
    },
    {
        "code": "AAA-SEA",
        "coordinates": {
            "latitude": 47.228,
            "longitude": -122.498
        },
        "location": "Tacoma",
        "name": "Rainiers",
        "league": "AAA"
    },
    {
        "code": "AAA-SFG",
        "coordinates": {
            "latitude": 38.58,
            "longitude": -121.514
        },
        "location": "Sacramento",
        "name": "River Cats",
        "league": "AAA"
    },
    {
        "code": "AAA-STL",
        "coordinates": {
            "latitude": 35.143,
            "longitude": -90.05
        },
        "location": "Memphis",
        "name": "Redbirds",
        "league": "AAA"
    },
    {
        "code": "AAA-TBR",
        "coordinates": {
            "latitude": 35.992,
            "longitude": -78.904
        },
        "location": "Durham",
        "name": "Bulls",
        "league": "AAA"
    },
    {
        "code": "AAA-TEX",
        "coordinates": {
            "latitude": 30.528,
            "longitude": -97.63
        },
        "location": "Round Rock",
        "name": "Express",
        "league": "AAA"
    },
    {
        "code": "AAA-TOR",
        "coordinates": {
            "latitude": 42.88,
            "longitude": -78.874
        },
        "location": "Buffalo",
        "name": "Bisons",
        "league": "AAA"
    },
    {
        "code": "AAA-WSN",
        "coordinates": {
            "latitude": 43.158,
            "longitude": -77.62
        },
        "location": "Rochester",
        "name": "Red Wings",
        "league": "AAA"
    },
    {
        "code": "AA-ARI",
        "coordinates": {
            "latitude": 35.22,
            "longitude": -101.821
        },
        "location": "Amarillo",
        "name": "Sod Poodles",
        "league": "AA"
    },
    {
        "code": "AA-ATL",
        "coordinates": {
            "latitude": 32.452,
            "longitude": -84.992
        },
        "location": "Columbus",
        "name": "Clingstones",
        "league": "AA"
    },
    {
        "code": "AA-BAL",
        "coordinates": {
            "latitude": 38.906,
            "longitude": -76.725
        },
        "location": "Chesapeake",
        "name": "Baysox",
        "league": "AA"
    },
    {
        "code": "AA-BOS",
        "coordinates": {
            "latitude": 43.649,
            "longitude": -70.277
        },
        "location": "Portland",
        "name": "Sea Dogs",
        "league": "AA"
    },
    {
        "code": "AA-CHC",
        "coordinates": {
            "latitude": 35.97,
            "longitude": -83.606
        },
        "location": "Knoxville",
        "name": "Smokies",
        "league": "AA"
    },
    {
        "code": "AA-CHW",
        "coordinates": {
            "latitude": 33.501,
            "longitude": -86.797
        },
        "location": "Birmingham",
        "name": "Barons",
        "league": "AA"
    },
    {
        "code": "AA-CIN",
        "coordinates": {
            "latitude": 35.054,
            "longitude": -85.302
        },
        "location": "Chattanooga",
        "name": "Lookouts",
        "league": "AA"
    },
    {
        "code": "AA-CLE",
        "coordinates": {
            "latitude": 41.081,
            "longitude": -81.509
        },
        "location": "Akron",
        "name": "RubberDucks",
        "league": "AA"
    },
    {
        "code": "AA-COL",
        "coordinates": {
            "latitude": 41.768,
            "longitude": -72.676
        },
        "location": "Hartford",
        "name": "Yard Goats",
        "league": "AA"
    },
    {
        "code": "AA-DET",
        "coordinates": {
            "latitude": 42.13,
            "longitude": -80.086
        },
        "location": "Erie",
        "name": "SeaWolves",
        "league": "AA"
    },
    {
        "code": "AA-HOU",
        "coordinates": {
            "latitude": 27.813,
            "longitude": -97.384
        },
        "location": "Corpus Christi",
        "name": "Hooks",
        "league": "AA"
    },
    {
        "code": "AA-KCR",
        "coordinates": {
            "latitude": 36.195,
            "longitude": -94.136
        },
        "location": "Northwest Arkansas",
        "name": "Naturals",
        "league": "AA"
    },
    {
        "code": "AA-LAA",
        "coordinates": {
            "latitude": 34.629,
            "longitude": -86.777
        },
        "location": "Rocket City",
        "name": "Trash Pandas",
        "league": "AA"
    },
    {
        "code": "AA-LAD",
        "coordinates": {
            "latitude": 36.154,
            "longitude": -95.984
        },
        "location": "Tulsa",
        "name": "Drillers",
        "league": "AA"
    },
    {
        "code": "AA-MIA",
        "coordinates": {
            "latitude": 30.406,
            "longitude": -87.229
        },
        "location": "Pensacola",
        "name": "Blue Wahoos",
        "league": "AA"
    },
    {
        "code": "AA-MIL",
        "coordinates": {
            "latitude": 30.393,
            "longitude": -88.882
        },
        "location": "Biloxi",
        "name": "Shuckers",
        "league": "AA"
    },
    {
        "code": "AA-MIN",
        "coordinates": {
            "latitude": 37.682,
            "longitude": -97.346
        },
        "location": "Wichita",
        "name": "Wind Surge",
        "league": "AA"
    },
    {
        "code": "AA-NYM",
        "coordinates": {
            "latitude": 42.091,
            "longitude": -75.914
        },
        "location": "Binghamton",
        "name": "Rumble Ponies",
        "league": "AA"
    },
    {
        "code": "AA-NYY",
        "coordinates": {
            "latitude": 40.571,
            "longitude": -74.545
        },
        "location": "Somerset",
        "name": "Patriots",
        "league": "AA"
    },
    {
        "code": "AA-OAK",
        "coordinates": {
            "latitude": 32.012,
            "longitude": -102.147
        },
        "location": "Midland",
        "name": "RockHounds",
        "league": "AA"
    },
    {
        "code": "AA-PHI",
        "coordinates": {
            "latitude": 40.354,
            "longitude": -75.902
        },
        "location": "Reading",
        "name": "Fightin Phils",
        "league": "AA"
    },
    {
        "code": "AA-PIT",
        "coordinates": {
            "latitude": 40.505,
            "longitude": -78.372
        },
        "location": "Altoona",
        "name": "Curve",
        "league": "AA"
    },
    {
        "code": "AA-SDP",
        "coordinates": {
            "latitude": 29.437,
            "longitude": -98.601
        },
        "location": "San Antonio",
        "name": "Missions",
        "league": "AA"
    },
    {
        "code": "AA-SEA",
        "coordinates": {
            "latitude": 34.781,
            "longitude": -92.253
        },
        "location": "Arkansas",
        "name": "Travelers",
        "league": "AA"
    },
    {
        "code": "AA-SFG",
        "coordinates": {
            "latitude": 37.6,
            "longitude": -77.456
        },
        "location": "Richmond",
        "name": "Flying Squirrels",
        "league": "AA"
    },
    {
        "code": "AA-STL",
        "coordinates": {
            "latitude": 37.216,
            "longitude": -93.291
        },
        "location": "Springfield",
        "name": "Cardinals",
        "league": "AA"
    },
    {
        "code": "AA-TBR",
        "coordinates": {
            "latitude": 32.38,
            "longitude": -86.305
        },
        "location": "Montgomery",
        "name": "Biscuits",
        "league": "AA"
    },
    {
        "code": "AA-TEX",
        "coordinates": {
            "latitude": 33.122,
            "longitude": -96.829
        },
        "location": "Frisco",
        "name": "RoughRiders",
        "league": "AA"
    },
    {
        "code": "AA-TOR",
        "coordinates": {
            "latitude": 42.98,
            "longitude": -71.452
        },
        "location": "New Hampshire",
        "name": "Fisher Cats",
        "league": "AA"
    },
    {
        "code": "AA-WSN",
        "coordinates": {
            "latitude": 40.257,
            "longitude": -76.878
        },
        "location": "Harrisburg",
        "name": "Senators",
        "league": "AA"
    },
    {
        "code": "HA-ARI",
        "coordinates": {
            "latitude": 45.52,
            "longitude": -122.97
        },
        "location": "Hillsboro",
        "name": "Hops",
        "league": "HA"
    },
    {
        "code": "HA-ATL",
        "coordinates": {
            "latitude": 34.253,
            "longitude": -85.175
        },
        "location": "Rome",
        "name": "Emperors",
        "league": "HA"
    },
    {
        "code": "HA-BAL",
        "coordinates": {
            "latitude": 39.517,
            "longitude": -76.153
        },
        "location": "Frederick",
        "name": "Keys",
        "league": "HA"
    },
    {
        "code": "HA-BOS",
        "coordinates": {
            "latitude": 34.846,
            "longitude": -82.396
        },
        "location": "Greenville",
        "name": "Drive",
        "league": "HA"
    },
    {
        "code": "HA-CHC",
        "coordinates": {
            "latitude": 41.677,
            "longitude": -86.277
        },
        "location": "South Bend",
        "name": "Cubs",
        "league": "HA"
    },
    {
        "code": "HA-CHW",
        "coordinates": {
            "latitude": 36.096,
            "longitude": -80.237
        },
        "location": "Winston-Salem",
        "name": "Dash",
        "league": "HA"
    },
    {
        "code": "HA-CIN",
        "coordinates": {
            "latitude": 39.759,
            "longitude": -84.193
        },
        "location": "Dayton",
        "name": "Dragons",
        "league": "HA"
    },
    {
        "code": "HA-CLE",
        "coordinates": {
            "latitude": 41.695,
            "longitude": -81.45
        },
        "location": "Lake County",
        "name": "Captains",
        "league": "HA"
    },
    {
        "code": "HA-COL",
        "coordinates": {
            "latitude": 47.629,
            "longitude": -117.331
        },
        "location": "Spokane",
        "name": "Indians",
        "league": "HA"
    },
    {
        "code": "HA-DET",
        "coordinates": {
            "latitude": 43.036,
            "longitude": -85.676
        },
        "location": "West Michigan",
        "name": "Whitecaps",
        "league": "HA"
    },
    {
        "code": "HA-HOU",
        "coordinates": {
            "latitude": 35.595,
            "longitude": -82.541
        },
        "location": "Asheville",
        "name": "Tourists",
        "league": "HA"
    },
    {
        "code": "HA-KCR",
        "coordinates": {
            "latitude": 41.527,
            "longitude": -90.571
        },
        "location": "Quad Cities",
        "name": "River Bandits",
        "league": "HA"
    },
    {
        "code": "HA-LAA",
        "coordinates": {
            "latitude": 46.237,
            "longitude": -119.112
        },
        "location": "Tri-City",
        "name": "Dust Devils",
        "league": "HA"
    },
    {
        "code": "HA-LAD",
        "coordinates": {
            "latitude": 43.601,
            "longitude": -84.253
        },
        "location": "Great Lakes",
        "name": "Loons",
        "league": "HA"
    },
    {
        "code": "HA-MIA",
        "coordinates": {
            "latitude": 42.509,
            "longitude": -89.037
        },
        "location": "Beloit",
        "name": "Sky Carp",
        "league": "HA"
    },
    {
        "code": "HA-MIL",
        "coordinates": {
            "latitude": 44.262,
            "longitude": -88.325
        },
        "location": "Wisconsin",
        "name": "Timber Rattlers",
        "league": "HA"
    },
    {
        "code": "HA-MIN",
        "coordinates": {
            "latitude": 41.986,
            "longitude": -91.674
        },
        "location": "Cedar Rapids",
        "name": "Kernels",
        "league": "HA"
    },
    {
        "code": "HA-NYM",
        "coordinates": {
            "latitude": 40.572,
            "longitude": -73.981
        },
        "location": "Brooklyn",
        "name": "Cyclones",
        "league": "HA"
    },
    {
        "code": "HA-NYY",
        "coordinates": {
            "latitude": 41.584,
            "longitude": -73.935
        },
        "location": "Hudson Valley",
        "name": "Renegades",
        "league": "HA"
    },
    {
        "code": "HA-OAK",
        "coordinates": {
            "latitude": 42.734,
            "longitude": -84.545
        },
        "location": "Lansing",
        "name": "Lugnuts",
        "league": "HA"
    },
    {
        "code": "HA-PHI",
        "coordinates": {
            "latitude": 40.102,
            "longitude": -74.195
        },
        "location": "Jersey Shore",
        "name": "BlueClaws",
        "league": "HA"
    },
    {
        "code": "HA-PIT",
        "coordinates": {
            "latitude": 36.074,
            "longitude": -79.789
        },
        "location": "Greensboro",
        "name": "Grasshoppers",
        "league": "HA"
    },
    {
        "code": "HA-SDP",
        "coordinates": {
            "latitude": 41.074,
            "longitude": -85.146
        },
        "location": "Fort Wayne",
        "name": "TinCaps",
        "league": "HA"
    },
    {
        "code": "HA-SEA",
        "coordinates": {
            "latitude": 47.986,
            "longitude": -122.217
        },
        "location": "Everett",
        "name": "AquaSox",
        "league": "HA"
    },
    {
        "code": "HA-SFG",
        "coordinates": {
            "latitude": 44.064,
            "longitude": -123.041
        },
        "location": "Eugene",
        "name": "Emeralds",
        "league": "HA"
    },
    {
        "code": "HA-STL",
        "coordinates": {
            "latitude": 40.687,
            "longitude": -89.593
        },
        "location": "Peoria",
        "name": "Chiefs",
        "league": "HA"
    },
    {
        "code": "HA-TBR",
        "coordinates": {
            "latitude": 36.986,
            "longitude": -86.452
        },
        "location": "Bowling Green",
        "name": "Hot Rods",
        "league": "HA"
    },
    {
        "code": "HA-TEX",
        "coordinates": {
            "latitude": 34.947,
            "longitude": -81.919
        },
        "location": "Hub City",
        "name": "Spartanburgers",
        "league": "HA"
    },
    {
        "code": "HA-TOR",
        "coordinates": {
            "latitude": 49.24,
            "longitude": -123.108
        },
        "location": "Vancouver",
        "name": "Canadians",
        "league": "HA"
    },
    {
        "code": "HA-WSN",
        "coordinates": {
            "latitude": 39.745,
            "longitude": -75.555
        },
        "location": "Wilmington",
        "name": "Blue Rocks",
        "league": "HA"
    },
    {
        "code": "SA-ARI",
        "coordinates": {
            "latitude": 36.336,
            "longitude": -119.294
        },
        "location": "Visalia",
        "name": "Rawhide",
        "league": "SA"
    },
    {
        "code": "SA-ATL",
        "coordinates": {
            "latitude": 33.501,
            "longitude": -81.968
        },
        "location": "Augusta",
        "name": "GreenJackets",
        "league": "SA"
    },
    {
        "code": "SA-BAL",
        "coordinates": {
            "latitude": 38.367,
            "longitude": -75.555
        },
        "location": "Delmarva",
        "name": "Shorebirds",
        "league": "SA"
    },
    {
        "code": "SA-BOS",
        "coordinates": {
            "latitude": 37.274,
            "longitude": -80.036
        },
        "location": "Salem",
        "name": "RidgeYaks",
        "league": "SA"
    },
    {
        "code": "SA-CHC",
        "coordinates": {
            "latitude": 33.703,
            "longitude": -78.869
        },
        "location": "Myrtle Beach",
        "name": "Pelicans",
        "league": "SA"
    },
    {
        "code": "SA-CHW",
        "coordinates": {
            "latitude": 35.469,
            "longitude": -80.627
        },
        "location": "Kannapolis",
        "name": "Cannon Ballers",
        "league": "SA"
    },
    {
        "code": "SA-CIN",
        "coordinates": {
            "latitude": 29.228,
            "longitude": -81.02
        },
        "location": "Daytona",
        "name": "Tortugas",
        "league": "SA"
    },
    {
        "code": "SA-CLE",
        "coordinates": {
            "latitude": 37.403,
            "longitude": -79.154
        },
        "location": "Hill City",
        "name": "Howlers",
        "league": "SA"
    },
    {
        "code": "SA-COL",
        "coordinates": {
            "latitude": 36.731,
            "longitude": -119.791
        },
        "location": "Fresno",
        "name": "Grizzlies",
        "league": "SA"
    },
    {
        "code": "SA-DET",
        "coordinates": {
            "latitude": 28.047,
            "longitude": -81.954
        },
        "location": "Lakeland",
        "name": "Flying Tigers",
        "league": "SA"
    },
    {
        "code": "SA-HOU",
        "coordinates": {
            "latitude": 35.053,
            "longitude": -78.884
        },
        "location": "Fayetteville",
        "name": "Woodpeckers",
        "league": "SA"
    },
    {
        "code": "SA-KCR",
        "coordinates": {
            "latitude": 34.012,
            "longitude": -81.035
        },
        "location": "Columbia",
        "name": "Fireflies",
        "league": "SA"
    },
    {
        "code": "SA-LAA",
        "coordinates": {
            "latitude": 34.112,
            "longitude": -117.584
        },
        "location": "Rancho Cucamonga",
        "name": "Quakes",
        "league": "SA"
    },
    {
        "code": "SA-LAD",
        "coordinates": {
            "latitude": 34.018,
            "longitude": -117.604
        },
        "location": "Ontario",
        "name": "Tower Buzzers",
        "league": "SA"
    },
    {
        "code": "SA-MIA",
        "coordinates": {
            "latitude": 26.891,
            "longitude": -80.12
        },
        "location": "Jupiter",
        "name": "Hammerheads",
        "league": "SA"
    },
    {
        "code": "SA-MIL",
        "coordinates": {
            "latitude": 35.721,
            "longitude": -77.915
        },
        "location": "Wilson",
        "name": "Warbirds",
        "league": "SA"
    },
    {
        "code": "SA-MIN",
        "coordinates": {
            "latitude": 26.555,
            "longitude": -81.914
        },
        "location": "Fort Myers",
        "name": "Mighty Mussels",
        "league": "SA"
    },
    {
        "code": "SA-NYM",
        "coordinates": {
            "latitude": 27.277,
            "longitude": -80.337
        },
        "location": "St. Lucie",
        "name": "Mets",
        "league": "SA"
    },
    {
        "code": "SA-NYY",
        "coordinates": {
            "latitude": 27.98,
            "longitude": -82.507
        },
        "location": "Tampa",
        "name": "Tarpons",
        "league": "SA"
    },
    {
        "code": "SA-OAK",
        "coordinates": {
            "latitude": 37.951,
            "longitude": -121.291
        },
        "location": "Stockton",
        "name": "Ports",
        "league": "SA"
    },
    {
        "code": "SA-PHI",
        "coordinates": {
            "latitude": 27.944,
            "longitude": -82.758
        },
        "location": "Clearwater",
        "name": "Threshers",
        "league": "SA"
    },
    {
        "code": "SA-PIT",
        "coordinates": {
            "latitude": 27.49,
            "longitude": -82.563
        },
        "location": "Bradenton",
        "name": "Marauders",
        "league": "SA"
    },
    {
        "code": "SA-SDP",
        "coordinates": {
            "latitude": 33.653,
            "longitude": -117.33
        },
        "location": "Lake Elsinore",
        "name": "Storm",
        "league": "SA"
    },
    {
        "code": "SA-SEA",
        "coordinates": {
            "latitude": 34.09,
            "longitude": -117.29
        },
        "location": "Inland Empire",
        "name": "66ers",
        "league": "SA"
    },
    {
        "code": "SA-SFG",
        "coordinates": {
            "latitude": 37.328,
            "longitude": -121.869
        },
        "location": "San Jose",
        "name": "Giants",
        "league": "SA"
    },
    {
        "code": "SA-STL",
        "coordinates": {
            "latitude": 26.891,
            "longitude": -80.12
        },
        "location": "Palm Beach",
        "name": "Cardinals",
        "league": "SA"
    },
    {
        "code": "SA-TBR",
        "coordinates": {
            "latitude": 32.768,
            "longitude": -79.986
        },
        "location": "Charleston",
        "name": "RiverDogs",
        "league": "SA"
    },
    {
        "code": "SA-TEX",
        "coordinates": {
            "latitude": 35.735,
            "longitude": -81.372
        },
        "location": "Hickory",
        "name": "Crawdads",
        "league": "SA"
    },
    {
        "code": "SA-TOR",
        "coordinates": {
            "latitude": 28.004,
            "longitude": -82.787
        },
        "location": "Dunedin",
        "name": "Blue Jays",
        "league": "SA"
    },
    {
        "code": "SA-WSN",
        "coordinates": {
            "latitude": 38.277,
            "longitude": -77.45
        },
        "location": "Fredericksburg",
        "name": "Nationals",
        "league": "SA"
    },
    {
        "code": "VEG",
        "coordinates": {
            "latitude": 36.103,
            "longitude": -115.178
        },
        "location": "Vegas",
        "name": "Golden Knights",
        "league": "NHL"
    },
    {
        "code": "FLA",
        "coordinates": {
            "latitude": 26.158,
            "longitude": -80.326
        },
        "location": "Florida",
        "name": "Panthers",
        "league": "NHL"
    },
    {
        "code": "CAR",
        "coordinates": {
            "latitude": 35.803,
            "longitude": -78.722
        },
        "location": "Carolina",
        "name": "Hurricanes",
        "league": "NHL"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 32.79,
            "longitude": -96.81
        },
        "location": "Dallas",
        "name": "Stars",
        "league": "NHL"
    },
    {
        "code": "BOS",
        "coordinates": {
            "latitude": 42.366,
            "longitude": -71.062
        },
        "location": "Boston",
        "name": "Bruins",
        "league": "NHL"
    },
    {
        "code": "COL",
        "coordinates": {
            "latitude": 39.749,
            "longitude": -105.008
        },
        "location": "Colorado",
        "name": "Avalanche",
        "league": "NHL"
    },
    {
        "code": "NJD",
        "coordinates": {
            "latitude": 40.734,
            "longitude": -74.171
        },
        "location": "New Jersey",
        "name": "Devils",
        "league": "NHL"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.643,
            "longitude": -79.379
        },
        "location": "Toronto",
        "name": "Maple Leafs",
        "league": "NHL"
    },
    {
        "code": "EDM",
        "coordinates": {
            "latitude": 53.547,
            "longitude": -113.498
        },
        "location": "Edmonton",
        "name": "Oilers",
        "league": "NHL"
    },
    {
        "code": "NYR",
        "coordinates": {
            "latitude": 40.751,
            "longitude": -73.994
        },
        "location": "New York",
        "name": "Rangers",
        "league": "NHL"
    },
    {
        "code": "LAK",
        "coordinates": {
            "latitude": 34.043,
            "longitude": -118.267
        },
        "location": "Los Angeles",
        "name": "Kings",
        "league": "NHL"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.945,
            "longitude": -93.101
        },
        "location": "Minnesota",
        "name": "Wild",
        "league": "NHL"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.622,
            "longitude": -122.354
        },
        "location": "Seattle",
        "name": "Kraken",
        "league": "NHL"
    },
    {
        "code": "TBL",
        "coordinates": {
            "latitude": 27.943,
            "longitude": -82.452
        },
        "location": "Tampa Bay",
        "name": "Lightning",
        "league": "NHL"
    },
    {
        "code": "WIN",
        "coordinates": {
            "latitude": 49.893,
            "longitude": -97.144
        },
        "location": "Winnipeg",
        "name": "Jets",
        "league": "NHL"
    },
    {
        "code": "NYI",
        "coordinates": {
            "latitude": 40.712,
            "longitude": -73.727
        },
        "location": "New York",
        "name": "Islanders",
        "league": "NHL"
    },
    {
        "code": "CGY",
        "coordinates": {
            "latitude": 51.037,
            "longitude": -114.052
        },
        "location": "Calgary",
        "name": "Flames",
        "league": "NHL"
    },
    {
        "code": "NSH",
        "coordinates": {
            "latitude": 36.159,
            "longitude": -86.779
        },
        "location": "Nashville",
        "name": "Predators",
        "league": "NHL"
    },
    {
        "code": "PIT",
        "coordinates": {
            "latitude": 40.439,
            "longitude": -79.989
        },
        "location": "Pittsburgh",
        "name": "Penguins",
        "league": "NHL"
    },
    {
        "code": "BUF",
        "coordinates": {
            "latitude": 42.875,
            "longitude": -78.876
        },
        "location": "Buffalo",
        "name": "Sabres",
        "league": "NHL"
    },
    {
        "code": "OTT",
        "coordinates": {
            "latitude": 45.297,
            "longitude": -75.927
        },
        "location": "Ottawa",
        "name": "Senators",
        "league": "NHL"
    },
    {
        "code": "VAN",
        "coordinates": {
            "latitude": 49.278,
            "longitude": -123.109
        },
        "location": "Vancouver",
        "name": "Canucks",
        "league": "NHL"
    },
    {
        "code": "STL",
        "coordinates": {
            "latitude": 38.627,
            "longitude": -90.203
        },
        "location": "St. Louis",
        "name": "Blues",
        "league": "NHL"
    },
    {
        "code": "DET",
        "coordinates": {
            "latitude": 42.341,
            "longitude": -83.055
        },
        "location": "Detroit",
        "name": "Red Wings",
        "league": "NHL"
    },
    {
        "code": "WAS",
        "coordinates": {
            "latitude": 38.898,
            "longitude": -77.021
        },
        "location": "Washington",
        "name": "Capitals",
        "league": "NHL"
    },
    {
        "code": "PHI",
        "coordinates": {
            "latitude": 39.901,
            "longitude": -75.172
        },
        "location": "Philadelphia",
        "name": "Flyers",
        "league": "NHL"
    },
    {
        "code": "UTA",
        "coordinates": {
            "latitude": 40.768,
            "longitude": -111.901
        },
        "location": "Utah",
        "name": "Mammoth",
        "league": "NHL"
    },
    {
        "code": "MTL",
        "coordinates": {
            "latitude": 45.496,
            "longitude": -73.569
        },
        "location": "Montreal",
        "name": "Canadiens",
        "league": "NHL"
    },
    {
        "code": "SJS",
        "coordinates": {
            "latitude": 37.333,
            "longitude": -121.901
        },
        "location": "San Jose",
        "name": "Sharks",
        "league": "NHL"
    },
    {
        "code": "CBJ",
        "coordinates": {
            "latitude": 39.969,
            "longitude": -83.006
        },
        "location": "Columbus",
        "name": "Blue Jackets",
        "league": "NHL"
    },
    {
        "code": "ANA",
        "coordinates": {
            "latitude": 33.808,
            "longitude": -117.877
        },
        "location": "Anaheim",
        "name": "Ducks",
        "league": "NHL"
    },
    {
        "code": "CHI",
        "coordinates": {
            "latitude": 41.881,
            "longitude": -87.674
        },
        "location": "Chicago",
        "name": "Blackhawks",
        "league": "NHL"
    },
    {
        "code": "AHL-ANA",
        "coordinates": {
            "latitude": 32.755,
            "longitude": -117.212
        },
        "location": "San Diego",
        "name": "Gulls",
        "league": "AHL"
    },
    {
        "code": "AHL-BOS",
        "coordinates": {
            "latitude": 41.824,
            "longitude": -71.418
        },
        "location": "Providence",
        "name": "Bruins",
        "league": "AHL"
    },
    {
        "code": "AHL-BUF",
        "coordinates": {
            "latitude": 43.154,
            "longitude": -77.611
        },
        "location": "Rochester",
        "name": "Americans",
        "league": "AHL"
    },
    {
        "code": "AHL-CAR",
        "coordinates": {
            "latitude": 42.005,
            "longitude": -87.888
        },
        "location": "Chicago",
        "name": "Wolves",
        "league": "AHL"
    },
    {
        "code": "AHL-CBJ",
        "coordinates": {
            "latitude": 41.496,
            "longitude": -81.688
        },
        "location": "Cleveland",
        "name": "Monsters",
        "league": "AHL"
    },
    {
        "code": "AHL-CGY",
        "coordinates": {
            "latitude": 51.037,
            "longitude": -114.052
        },
        "location": "Calgary",
        "name": "Wranglers",
        "league": "AHL"
    },
    {
        "code": "AHL-CHI",
        "coordinates": {
            "latitude": 42.27,
            "longitude": -89.096
        },
        "location": "Rockford",
        "name": "Ice Hogs",
        "league": "AHL"
    },
    {
        "code": "AHL-COL",
        "coordinates": {
            "latitude": 40.444,
            "longitude": -104.99
        },
        "location": "Colorado",
        "name": "Eagles",
        "league": "AHL"
    },
    {
        "code": "AHL-DAL",
        "coordinates": {
            "latitude": 30.541,
            "longitude": -97.82
        },
        "location": "Texas",
        "name": "Stars",
        "league": "AHL"
    },
    {
        "code": "AHL-DET",
        "coordinates": {
            "latitude": 42.962,
            "longitude": -85.672
        },
        "location": "Grand Rapids",
        "name": "Griffins",
        "league": "AHL"
    },
    {
        "code": "AHL-EDM",
        "coordinates": {
            "latitude": 35.372,
            "longitude": -119.013
        },
        "location": "Bakersfield",
        "name": "Condors",
        "league": "AHL"
    },
    {
        "code": "AHL-FLA",
        "coordinates": {
            "latitude": 35.205,
            "longitude": -80.795
        },
        "location": "Charlotte",
        "name": "Checkers",
        "league": "AHL"
    },
    {
        "code": "AHL-LAK",
        "coordinates": {
            "latitude": 34.073,
            "longitude": -117.566
        },
        "location": "Ontario",
        "name": "Reign",
        "league": "AHL"
    },
    {
        "code": "AHL-MIN",
        "coordinates": {
            "latitude": 41.593,
            "longitude": -93.621
        },
        "location": "Iowa",
        "name": "Wild",
        "league": "AHL"
    },
    {
        "code": "AHL-MTL",
        "coordinates": {
            "latitude": 45.556,
            "longitude": -73.721
        },
        "location": "Laval",
        "name": "Rocket",
        "league": "AHL"
    },
    {
        "code": "AHL-NJD",
        "coordinates": {
            "latitude": 43.105,
            "longitude": -75.233
        },
        "location": "Utica",
        "name": "Comets",
        "league": "AHL"
    },
    {
        "code": "AHL-NSH",
        "coordinates": {
            "latitude": 43.042,
            "longitude": -87.917
        },
        "location": "Milwaukee",
        "name": "Admirals",
        "league": "AHL"
    },
    {
        "code": "AHL-NYI",
        "coordinates": {
            "latitude": 43.259,
            "longitude": -79.872
        },
        "location": "Hamilton",
        "name": "Hammers",
        "league": "AHL"
    },
    {
        "code": "AHL-NYR",
        "coordinates": {
            "latitude": 41.768,
            "longitude": -72.677
        },
        "location": "Hartford",
        "name": "Wolf Pack",
        "league": "AHL"
    },
    {
        "code": "AHL-OTT",
        "coordinates": {
            "latitude": 44.188,
            "longitude": -77.383
        },
        "location": "Belleville",
        "name": "Senators",
        "league": "AHL"
    },
    {
        "code": "AHL-PHI",
        "coordinates": {
            "latitude": 40.603,
            "longitude": -75.473
        },
        "location": "Lehigh Valley",
        "name": "Phantoms",
        "league": "AHL"
    },
    {
        "code": "AHL-PIT",
        "coordinates": {
            "latitude": 41.241,
            "longitude": -75.849
        },
        "location": "Wilkes-Barre/Scranton",
        "name": "Penguins",
        "league": "AHL"
    },
    {
        "code": "AHL-SEA",
        "coordinates": {
            "latitude": 33.78,
            "longitude": -116.34
        },
        "location": "Coachella Valley",
        "name": "Firebirds",
        "league": "AHL"
    },
    {
        "code": "AHL-SJS",
        "coordinates": {
            "latitude": 37.319,
            "longitude": -121.864
        },
        "location": "San Jose",
        "name": "Barracuda",
        "league": "AHL"
    },
    {
        "code": "AHL-STL",
        "coordinates": {
            "latitude": 42.102,
            "longitude": -72.587
        },
        "location": "Springfield",
        "name": "Thunderbirds",
        "league": "AHL"
    },
    {
        "code": "AHL-TBL",
        "coordinates": {
            "latitude": 43.045,
            "longitude": -76.148
        },
        "location": "Syracuse",
        "name": "Crunch",
        "league": "AHL"
    },
    {
        "code": "AHL-TOR",
        "coordinates": {
            "latitude": 43.636,
            "longitude": -79.415
        },
        "location": "Toronto",
        "name": "Marlies",
        "league": "AHL"
    },
    {
        "code": "AHL-UTA",
        "coordinates": {
            "latitude": 32.218,
            "longitude": -110.974
        },
        "location": "Tucson",
        "name": "Roadrunners",
        "league": "AHL"
    },
    {
        "code": "AHL-VAN",
        "coordinates": {
            "latitude": 49.031,
            "longitude": -122.287
        },
        "location": "Abbotsford",
        "name": "Canucks",
        "league": "AHL"
    },
    {
        "code": "AHL-VEG",
        "coordinates": {
            "latitude": 36.019,
            "longitude": -115.081
        },
        "location": "Henderson",
        "name": "Silver Knights",
        "league": "AHL"
    },
    {
        "code": "AHL-WAS",
        "coordinates": {
            "latitude": 40.286,
            "longitude": -76.669
        },
        "location": "Hershey",
        "name": "Bears",
        "league": "AHL"
    },
    {
        "code": "AHL-WIN",
        "coordinates": {
            "latitude": 49.893,
            "longitude": -97.144
        },
        "location": "Manitoba",
        "name": "Moose",
        "league": "AHL"
    },
    {
        "code": "ECHL-ANA",
        "coordinates": {
            "latitude": 36.153,
            "longitude": -95.996
        },
        "location": "Tulsa",
        "name": "Oilers",
        "league": "ECHL"
    },
    {
        "code": "ECHL-BOS",
        "coordinates": {
            "latitude": 43.656,
            "longitude": -70.259
        },
        "location": "Maine",
        "name": "Mariners",
        "league": "ECHL"
    },
    {
        "code": "ECHL-BUF",
        "coordinates": {
            "latitude": 42.265,
            "longitude": -71.799
        },
        "location": "Worcester",
        "name": "Railers",
        "league": "ECHL"
    },
    {
        "code": "ECHL-CAR",
        "coordinates": {
            "latitude": 36.06,
            "longitude": -79.826
        },
        "location": "Greensboro",
        "name": "Gargoyles",
        "league": "ECHL"
    },
    {
        "code": "ECHL-CGY",
        "coordinates": {
            "latitude": 44.089,
            "longitude": -103.227
        },
        "location": "Rapid City",
        "name": "Rush",
        "league": "ECHL"
    },
    {
        "code": "ECHL-CHI",
        "coordinates": {
            "latitude": 39.948,
            "longitude": -86.004
        },
        "location": "Indy",
        "name": "Fuel",
        "league": "ECHL"
    },
    {
        "code": "ECHL-COL",
        "coordinates": {
            "latitude": 35.309,
            "longitude": -106.687
        },
        "location": "New Mexico",
        "name": "Goatheads",
        "league": "ECHL"
    },
    {
        "code": "ECHL-DAL",
        "coordinates": {
            "latitude": 43.614,
            "longitude": -116.204
        },
        "location": "Idaho",
        "name": "Steelheads",
        "league": "ECHL"
    },
    {
        "code": "ECHL-DET",
        "coordinates": {
            "latitude": 41.651,
            "longitude": -83.537
        },
        "location": "Toledo",
        "name": "Walleye",
        "league": "ECHL"
    },
    {
        "code": "ECHL-EDM",
        "coordinates": {
            "latitude": 41.116,
            "longitude": -85.124
        },
        "location": "Fort Wayne",
        "name": "Komets",
        "league": "ECHL"
    },
    {
        "code": "ECHL-FLA",
        "coordinates": {
            "latitude": 32.074,
            "longitude": -81.112
        },
        "location": "Savannah",
        "name": "Ghost Pirates",
        "league": "ECHL"
    },
    {
        "code": "ECHL-LAK",
        "coordinates": {
            "latitude": 34.853,
            "longitude": -82.392
        },
        "location": "Greenville",
        "name": "Swamp Rabbits",
        "league": "ECHL"
    },
    {
        "code": "ECHL-MIN",
        "coordinates": {
            "latitude": 30.326,
            "longitude": -81.645
        },
        "location": "Jacksonville",
        "name": "Icemen",
        "league": "ECHL"
    },
    {
        "code": "ECHL-MTL",
        "coordinates": {
            "latitude": 46.322,
            "longitude": -72.591
        },
        "location": "Trois-Rivières",
        "name": "Lions",
        "league": "ECHL"
    },
    {
        "code": "ECHL-NJD",
        "coordinates": {
            "latitude": 43.308,
            "longitude": -73.642
        },
        "location": "Adirondack",
        "name": "Thunder",
        "league": "ECHL"
    },
    {
        "code": "ECHL-NSH",
        "coordinates": {
            "latitude": 33.991,
            "longitude": -84.094
        },
        "location": "Atlanta",
        "name": "Gladiators",
        "league": "ECHL"
    },
    {
        "code": "ECHL-NYI",
        "coordinates": {
            "latitude": 40.213,
            "longitude": -74.758
        },
        "location": "Trenton",
        "name": "Ironhawks",
        "league": "ECHL"
    },
    {
        "code": "ECHL-NYR",
        "coordinates": {
            "latitude": 40.478,
            "longitude": -88.996
        },
        "location": "Bloomington",
        "name": "Bison",
        "league": "ECHL"
    },
    {
        "code": "ECHL-OTT",
        "coordinates": {
            "latitude": 33.127,
            "longitude": -96.655
        },
        "location": "Allen",
        "name": "Americans",
        "league": "ECHL"
    },
    {
        "code": "ECHL-PHI",
        "coordinates": {
            "latitude": 40.335,
            "longitude": -75.923
        },
        "location": "Reading",
        "name": "Royals",
        "league": "ECHL"
    },
    {
        "code": "ECHL-PIT",
        "coordinates": {
            "latitude": 40.065,
            "longitude": -80.725
        },
        "location": "Wheeling",
        "name": "Nailers",
        "league": "ECHL"
    },
    {
        "code": "ECHL-SEA",
        "coordinates": {
            "latitude": 39.04,
            "longitude": -94.357
        },
        "location": "Kansas City",
        "name": "Mavericks",
        "league": "ECHL"
    },
    {
        "code": "ECHL-SJS",
        "coordinates": {
            "latitude": 37.683,
            "longitude": -97.332
        },
        "location": "Wichita",
        "name": "Thunder",
        "league": "ECHL"
    },
    {
        "code": "ECHL-STL",
        "coordinates": {
            "latitude": 26.44,
            "longitude": -81.779
        },
        "location": "Florida",
        "name": "Everblades",
        "league": "ECHL"
    },
    {
        "code": "ECHL-TBL",
        "coordinates": {
            "latitude": 28.539,
            "longitude": -81.384
        },
        "location": "Orlando",
        "name": "Solar Bears",
        "league": "ECHL"
    },
    {
        "code": "ECHL-TOR",
        "coordinates": {
            "latitude": 39.098,
            "longitude": -84.504
        },
        "location": "Cincinnati",
        "name": "Cyclones",
        "league": "ECHL"
    },
    {
        "code": "ECHL-VAN",
        "coordinates": {
            "latitude": 42.254,
            "longitude": -85.535
        },
        "location": "Kalamazoo",
        "name": "Wings",
        "league": "ECHL"
    },
    {
        "code": "ECHL-VEG",
        "coordinates": {
            "latitude": 38.963,
            "longitude": -119.938
        },
        "location": "Tahoe",
        "name": "Knight Monsters",
        "league": "ECHL"
    },
    {
        "code": "ECHL-WAS",
        "coordinates": {
            "latitude": 32.866,
            "longitude": -80.022
        },
        "location": "South Carolina",
        "name": "Stingrays",
        "league": "ECHL"
    },
    {
        "code": "ECHL-WIN",
        "coordinates": {
            "latitude": 36.853,
            "longitude": -76.287
        },
        "location": "Norfolk",
        "name": "Admirals",
        "league": "ECHL"
    },
    {
        "code": "BOS",
        "coordinates": {
            "latitude": 42.65,
            "longitude": -71.313
        },
        "location": "Boston",
        "name": "Fleet",
        "league": "PWHL"
    },
    {
        "code": "DET",
        "coordinates": {
            "latitude": 42.341,
            "longitude": -83.055
        },
        "location": "Detroit",
        "name": "PWHL",
        "league": "PWHL"
    },
    {
        "code": "HAM",
        "coordinates": {
            "latitude": 43.259,
            "longitude": -79.872
        },
        "location": "Hamilton",
        "name": "PWHL",
        "league": "PWHL"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.945,
            "longitude": -93.101
        },
        "location": "Minnesota",
        "name": "Frost",
        "league": "PWHL"
    },
    {
        "code": "MTL",
        "coordinates": {
            "latitude": 45.556,
            "longitude": -73.721
        },
        "location": "Montreal",
        "name": "Victoire",
        "league": "PWHL"
    },
    {
        "code": "NYS",
        "coordinates": {
            "latitude": 40.734,
            "longitude": -74.171
        },
        "location": "New York",
        "name": "Sirens",
        "league": "PWHL"
    },
    {
        "code": "OTT",
        "coordinates": {
            "latitude": 45.399,
            "longitude": -75.684
        },
        "location": "Ottawa",
        "name": "Charge",
        "league": "PWHL"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.622,
            "longitude": -122.354
        },
        "location": "Seattle",
        "name": "Torrent",
        "league": "PWHL"
    },
    {
        "code": "SJS",
        "coordinates": {
            "latitude": 37.333,
            "longitude": -121.901
        },
        "location": "San Jose",
        "name": "PWHL",
        "league": "PWHL"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.636,
            "longitude": -79.415
        },
        "location": "Toronto",
        "name": "Sceptres",
        "league": "PWHL"
    },
    {
        "code": "VAN",
        "coordinates": {
            "latitude": 49.286,
            "longitude": -123.043
        },
        "location": "Vancouver",
        "name": "Goldeneyes",
        "league": "PWHL"
    },
    {
        "code": "VEG",
        "coordinates": {
            "latitude": 36.103,
            "longitude": -115.178
        },
        "location": "Las Vegas",
        "name": "PWHL",
        "league": "PWHL"
    },
    {
        "code": "ATL",
        "coordinates": {
            "latitude": 33.755,
            "longitude": -84.401
        },
        "location": "Atlanta",
        "name": "United",
        "league": "MLS"
    },
    {
        "code": "ATX",
        "coordinates": {
            "latitude": 30.388,
            "longitude": -97.72
        },
        "location": "Austin",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "CLT",
        "coordinates": {
            "latitude": 35.226,
            "longitude": -80.853
        },
        "location": "Charlotte",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "CHI",
        "coordinates": {
            "latitude": 41.862,
            "longitude": -87.617
        },
        "location": "Chicago",
        "name": "Fire",
        "league": "MLS"
    },
    {
        "code": "COL",
        "coordinates": {
            "latitude": 39.806,
            "longitude": -104.892
        },
        "location": "Colorado",
        "name": "Rapids",
        "league": "MLS"
    },
    {
        "code": "CLB",
        "coordinates": {
            "latitude": 39.968,
            "longitude": -83.017
        },
        "location": "Columbus",
        "name": "Crew SC",
        "league": "MLS"
    },
    {
        "code": "DCU",
        "coordinates": {
            "latitude": 38.868,
            "longitude": -77.012
        },
        "location": "D.C.",
        "name": "United",
        "league": "MLS"
    },
    {
        "code": "CIN",
        "coordinates": {
            "latitude": 39.111,
            "longitude": -84.522
        },
        "location": "Cincinnati",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "DAL",
        "coordinates": {
            "latitude": 33.154,
            "longitude": -96.835
        },
        "location": "Dallas",
        "name": "FC ",
        "league": "MLS"
    },
    {
        "code": "HOU",
        "coordinates": {
            "latitude": 29.752,
            "longitude": -95.352
        },
        "location": "Houston",
        "name": "Dynamo",
        "league": "MLS"
    },
    {
        "code": "MIA",
        "coordinates": {
            "latitude": 26.193,
            "longitude": -80.161
        },
        "location": "Miami",
        "name": "Inter",
        "league": "MLS"
    },
    {
        "code": "LAF",
        "coordinates": {
            "latitude": 34.013,
            "longitude": -118.285
        },
        "location": "Los Angeles",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "LAG",
        "coordinates": {
            "latitude": 33.864,
            "longitude": -118.261
        },
        "location": "Los Angeles",
        "name": "Galaxy",
        "league": "MLS"
    },
    {
        "code": "MIN",
        "coordinates": {
            "latitude": 44.953,
            "longitude": -93.165
        },
        "location": "Minnesota",
        "name": "United FC",
        "league": "MLS"
    },
    {
        "code": "MTL",
        "coordinates": {
            "latitude": 45.563,
            "longitude": -73.552
        },
        "location": "Montreal",
        "name": "CF",
        "league": "MLS"
    },
    {
        "code": "NSH",
        "coordinates": {
            "latitude": 36.166,
            "longitude": -86.771
        },
        "location": "Nashville",
        "name": "SC",
        "league": "MLS"
    },
    {
        "code": "NER",
        "coordinates": {
            "latitude": 42.091,
            "longitude": -71.264
        },
        "location": "New England",
        "name": "Revolution",
        "league": "MLS"
    },
    {
        "code": "NYC",
        "coordinates": {
            "latitude": 40.829,
            "longitude": -73.926
        },
        "location": "New York City",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "NYR",
        "coordinates": {
            "latitude": 40.737,
            "longitude": -74.15
        },
        "location": "New York",
        "name": "Red Bulls",
        "league": "MLS"
    },
    {
        "code": "ORL",
        "coordinates": {
            "latitude": 28.624,
            "longitude": -81.389
        },
        "location": "Orlando City",
        "name": "SC",
        "league": "MLS"
    },
    {
        "code": "PHI",
        "coordinates": {
            "latitude": 39.833,
            "longitude": -75.379
        },
        "location": "Philadelphia",
        "name": "Union",
        "league": "MLS"
    },
    {
        "code": "POR",
        "coordinates": {
            "latitude": 45.521,
            "longitude": -122.692
        },
        "location": "Portland",
        "name": "Timbers",
        "league": "MLS"
    },
    {
        "code": "RSL",
        "coordinates": {
            "latitude": 40.583,
            "longitude": -111.893
        },
        "location": "Salt Lake",
        "name": "Real",
        "league": "MLS"
    },
    {
        "code": "SJE",
        "coordinates": {
            "latitude": 37.351,
            "longitude": -121.925
        },
        "location": "San Jose",
        "name": "Earthquakes",
        "league": "MLS"
    },
    {
        "code": "SEA",
        "coordinates": {
            "latitude": 47.595,
            "longitude": -122.332
        },
        "location": "Seattle",
        "name": "Sounders",
        "league": "MLS"
    },
    {
        "code": "SDF",
        "coordinates": {
            "latitude": 32.784,
            "longitude": -117.123
        },
        "location": "San Diego",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "SKC",
        "coordinates": {
            "latitude": 39.122,
            "longitude": -94.824
        },
        "location": "Kansas City",
        "name": "Sporting",
        "league": "MLS"
    },
    {
        "code": "STL",
        "coordinates": {
            "latitude": 38.631,
            "longitude": -90.21
        },
        "location": "St Louis",
        "name": "City SC",
        "league": "MLS"
    },
    {
        "code": "TOR",
        "coordinates": {
            "latitude": 43.633,
            "longitude": -79.419
        },
        "location": "Toronto",
        "name": "FC",
        "league": "MLS"
    },
    {
        "code": "VAN",
        "coordinates": {
            "latitude": 49.277,
            "longitude": -123.112
        },
        "location": "Vancouver",
        "name": "Whitecaps",
        "league": "MLS"
    }
]