import { type NHLTeamType } from "./NHLdata";

export type TierType =  "NHL" | "AHL" | "ECHL";

export type NHLminorInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
  tier: TierType;
  parentTeam: NHLTeamType;
};

export const nhlMinorList: NHLminorInfoType[] = [
  {
    coordinates: { latitude: 33.808, longitude: -117.877 },
    location: "Anaheim",
    name: "Ducks",
    tier: "NHL",
    parentTeam: "ANA"
  },{
    coordinates: { latitude: 42.366, longitude: -71.062 },
    location: "Boston",
    name: "Bruins",
    tier: "NHL",
    parentTeam: "BOS"
  },{
    coordinates: { latitude: 42.875, longitude: -78.876 },
    location: "Buffalo",
    name: "Sabres",
    tier: "NHL",
    parentTeam: "BUF"
  },{
    coordinates: { latitude: 35.803, longitude: -78.722 },
    location: "Carolina",
    name: "Hurricanes",
    tier: "NHL",
    parentTeam: "CAR"
  },{
    coordinates: { latitude: 39.969, longitude: -83.006 },
    location: "Columbus",
    name: "Blue Jackets",
    tier: "NHL",
    parentTeam: "CBJ"
  },{
    coordinates: { latitude: 51.037, longitude: -114.052 },
    location: "Calgary",
    name: "Flames",
    tier: "NHL",
    parentTeam: "CGY"
  },{
    coordinates: { latitude: 41.881, longitude: -87.674 },
    location: "Chicago",
    name: "Blackhawks",
    tier: "NHL",
    parentTeam: "CHI"
  },{
    coordinates: { latitude: 39.749, longitude: -105.008 },
    location: "Colorado",
    name: "Avalanche",
    tier: "NHL",
    parentTeam: "COL"
  },{
    coordinates: { latitude: 32.791, longitude: -96.81 },
    location: "Dallas",
    name: "Stars",
    tier: "NHL",
    parentTeam: "DAL"
  },{
    coordinates: { latitude: 42.341, longitude: -83.055 },
    location: "Detroit",
    name: "Red Wings",
    tier: "NHL",
    parentTeam: "DET"
  },{
    coordinates: { latitude: 53.547, longitude: -113.498 },
    location: "Edmonton",
    name: "Oilers",
    tier: "NHL",
    parentTeam: "EDM"
  },{
    coordinates: { latitude: 26.158, longitude: -80.326 },
    location: "Florida",
    name: "Panthers",
    tier: "NHL",
    parentTeam: "FLA"
  },{
    coordinates: { latitude: 34.043, longitude: -118.268 },
    location: "Los Angeles",
    name: "Kings",
    tier: "NHL",
    parentTeam: "LAK"
  },{
    coordinates: { latitude: 44.945, longitude: -93.101 },
    location: "Minnesota",
    name: "Wild",
    tier: "NHL",
    parentTeam: "MIN"
  },{
    coordinates: { latitude: 45.496, longitude: -73.569 },
    location: "Montreal",
    name: "Canadiens",
    tier: "NHL",
    parentTeam: "MTL"
  },{
    coordinates: { latitude: 40.734, longitude: -74.171 },
    location: "New Jersey",
    name: "Devils",
    tier: "NHL",
    parentTeam: "NJD"
  },{
    coordinates: { latitude: 36.159, longitude: -86.779 },
    location: "Nashville",
    name: "Predators",
    tier: "NHL",
    parentTeam: "NSH"
  },{
    coordinates: { latitude: 40.712, longitude: -73.727 },
    location: "New York",
    name: "Islanders",
    tier: "NHL",
    parentTeam: "NYI"
  },{
    coordinates: { latitude: 40.751, longitude: -73.994 },
    location: "New York",
    name: "Rangers",
    tier: "NHL",
    parentTeam: "NYR"
  },{
    coordinates: { latitude: 45.297, longitude: -75.927 },
    location: "Ottawa",
    name: "Senators",
    tier: "NHL",
    parentTeam: "OTT"
  },{
    coordinates: { latitude: 39.901, longitude: -75.172 },
    location: "Philadelphia",
    name: "Flyers",
    tier: "NHL",
    parentTeam: "PHI"
  },{
    coordinates: { latitude: 40.439, longitude: -79.989 },
    location: "Pittsburgh",
    name: "Penguins",
    tier: "NHL",
    parentTeam: "PIT"
  },{
    coordinates: { latitude: 47.622, longitude: -122.354 },
    location: "Seattle",
    name: "Kraken",
    tier: "NHL",
    parentTeam: "SEA"
  },{
    coordinates: { latitude: 37.333, longitude: -121.901 },
    location: "San Jose",
    name: "Sharks",
    tier: "NHL",
    parentTeam: "SJS"
  },{
    coordinates: { latitude: 38.627, longitude: -90.203 },
    location: "St. Louis",
    name: "Blues",
    tier: "NHL",
    parentTeam: "STL"
  },{
    coordinates: { latitude: 27.943, longitude: -82.452 },
    location: "Tampa Bay",
    name: "Lightning",
    tier: "NHL",
    parentTeam: "TBL"
  },{
    coordinates: { latitude: 43.643, longitude: -79.379 },
    location: "Toronto",
    name: "Maple Leafs",
    tier: "NHL",
    parentTeam: "TOR"
  },{
    coordinates: { latitude: 40.768, longitude: -111.902 },
    location: "Utah",
    name: "Mammoth",
    tier: "NHL",
    parentTeam: "UTA"
  },{
    coordinates: { latitude: 49.278, longitude: -123.109 },
    location: "Vancouver",
    name: "Canucks",
    tier: "NHL",
    parentTeam: "VAN"
  },{
    coordinates: { latitude: 36.103, longitude: -115.178 },
    location: "Vegas",
    name: "Golden Knights",
    tier: "NHL",
    parentTeam: "VEG"
  },{
    coordinates: { latitude: 38.898, longitude: -77.021 },
    location: "Washington",
    name: "Capitals",
    tier: "NHL",
    parentTeam: "WAS"
  },{
    coordinates: { latitude: 49.893, longitude: -97.144 },
    location: "Winnipeg",
    name: "Jets",
    tier: "NHL",
    parentTeam: "WIN"
  },{
    coordinates: { latitude: 32.755, longitude: -117.212 },
    location: "San Diego",
    name: "Gulls",
    tier: "AHL",
    parentTeam: "ANA"
  },{
    coordinates: { latitude: 41.824, longitude: -71.418 },
    location: "Providence",
    name: "Bruins",
    tier: "AHL",
    parentTeam: "BOS"
  },{
    coordinates: { latitude: 43.154, longitude: -77.611 },
    location: "Rochester",
    name: "Americans",
    tier: "AHL",
    parentTeam: "BUF"
  },{
    coordinates: { latitude: 42.005, longitude: -87.888 },
    location: "Chicago",
    name: "Wolves",
    tier: "AHL",
    parentTeam: "CAR"
  },{
    coordinates: { latitude: 41.496, longitude: -81.688 },
    location: "Cleveland",
    name: "Monsters",
    tier: "AHL",
    parentTeam: "CBJ"
  },{
    coordinates: { latitude: 51.037, longitude: -114.052 },
    location: "Calgary",
    name: "Wranglers",
    tier: "AHL",
    parentTeam: "CGY"
  },{
    coordinates: { latitude: 42.270, longitude: -89.096 },
    location: "Rockford",
    name: "Ice Hogs",
    tier: "AHL",
    parentTeam: "CHI"
  },{
    coordinates: { latitude: 40.444, longitude: -104.990 },
    location: "Colorado",
    name: "Eagles",
    tier: "AHL",
    parentTeam: "COL"
  },{
    coordinates: { latitude: 30.541, longitude: -97.820 },
    location: "Texas",
    name: "Stars",
    tier: "AHL",
    parentTeam: "DAL"
  },{
    coordinates: { latitude: 42.962, longitude: -85.672 },
    location: "Grand Rapids",
    name: "Griffins",
    tier: "AHL",
    parentTeam: "DET"
  },{
    coordinates: { latitude: 35.372, longitude: -119.013 },
    location: "Bakersfield",
    name: "Condors",
    tier: "AHL",
    parentTeam: "EDM"
  },{
    coordinates: { latitude: 35.205, longitude: -80.795 },
    location: "Charlotte",
    name: "Checkers",
    tier: "AHL",
    parentTeam: "FLA"
  },{
    coordinates: { latitude: 34.073, longitude: -117.566 },
    location: "Ontario",
    name: "Reign",
    tier: "AHL",
    parentTeam: "LAK"
  },{
    coordinates: { latitude: 41.593, longitude: -93.621 },
    location: "Iowa",
    name: "Wild",
    tier: "AHL",
    parentTeam: "MIN"
  },{
    coordinates: { latitude: 45.556, longitude: -73.721 },
    location: "Laval",
    name: "Rocket",
    tier: "AHL",
    parentTeam: "MTL"
  },{
    coordinates: { latitude: 43.105, longitude: -75.233 },
    location: "Utica",
    name: "Comets",
    tier: "AHL",
    parentTeam: "NJD"
  },{
    coordinates: { latitude: 43.042, longitude: -87.917 },
    location: "Milwaukee",
    name: "Admirals",
    tier: "AHL",
    parentTeam: "NSH"
  },{
    coordinates: { latitude: 43.259, longitude: -79.872 },
    location: "Hamilton",
    name: "Hammers",
    tier: "AHL",
    parentTeam: "NYI"
  },{
    coordinates: { latitude: 41.768, longitude: -72.677 },
    location: "Hartford",
    name: "Wolf Pack",
    tier: "AHL",
    parentTeam: "NYR"
  },{
    coordinates: { latitude: 44.188, longitude: -77.383 },
    location: "Belleville",
    name: "Senators",
    tier: "AHL",
    parentTeam: "OTT"
  },{
    coordinates: { latitude: 40.603, longitude: -75.473 },
    location: "Lehigh Valley",
    name: "Phantoms",
    tier: "AHL",
    parentTeam: "PHI"
  },{
    coordinates: { latitude: 41.241, longitude: -75.849 },
    location: "Wilkes-Barre/Scranton",
    name: "Penguins",
    tier: "AHL",
    parentTeam: "PIT"
  },{
    coordinates: { latitude: 33.780, longitude: -116.340 },
    location: "Coachella Valley",
    name: "Firebirds",
    tier: "AHL",
    parentTeam: "SEA"
  },{
    coordinates: { latitude: 37.319, longitude: -121.864 },
    location: "San Jose",
    name: "Barracuda",
    tier: "AHL",
    parentTeam: "SJS"
  },{
    coordinates: { latitude: 42.102, longitude: -72.587 },
    location: "Springfield",
    name: "Thunderbirds",
    tier: "AHL",
    parentTeam: "STL"
  },{
    coordinates: { latitude: 43.045, longitude: -76.148 },
    location: "Syracuse",
    name: "Crunch",
    tier: "AHL",
    parentTeam: "TBL"
  },{
    coordinates: { latitude: 43.636, longitude: -79.415 },
    location: "Toronto",
    name: "Marlies",
    tier: "AHL",
    parentTeam: "TOR"
  },{
    coordinates: { latitude: 32.218, longitude: -110.974 },
    location: "Tucson",
    name: "Roadrunners",
    tier: "AHL",
    parentTeam: "UTA"
  },{
    coordinates: { latitude: 49.031, longitude: -122.287 },
    location: "Abbotsford",
    name: "Canucks",
    tier: "AHL",
    parentTeam: "VAN"
  },{
    coordinates: { latitude: 36.019, longitude: -115.081 },
    location: "Henderson",
    name: "Silver Knights",
    tier: "AHL",
    parentTeam: "VEG"
  },{
    coordinates: { latitude: 40.286, longitude: -76.669 },
    location: "Hershey",
    name: "Bears",
    tier: "AHL",
    parentTeam: "WAS"
  },{
    coordinates: { latitude: 49.893, longitude: -97.144 },
    location: "Manitoba",
    name: "Moose",
    tier: "AHL",
    parentTeam: "WIN"
  },{
    coordinates: { latitude: 36.153, longitude: -95.996 },
    location: "Tulsa",
    name: "Oilers",
    tier: "ECHL",
    parentTeam: "ANA"
  },{
    coordinates: { latitude: 43.656, longitude: -70.259 },
    location: "Maine",
    name: "Mariners",
    tier: "ECHL",
    parentTeam: "BOS"
  },{
    coordinates: { latitude: 42.265, longitude: -71.799 },
    location: "Worcester",
    name: "Railers",
    tier: "ECHL",
    parentTeam: "BUF"
  },{
    coordinates: { latitude: 36.060, longitude: -79.826 },
    location: "Greensboro",
    name: "Gargoyles",
    tier: "ECHL",
    parentTeam: "CAR"
  },{
    coordinates: { latitude: 44.089, longitude: -103.227 },
    location: "Rapid City",
    name: "Rush",
    tier: "ECHL",
    parentTeam: "CGY"
  },{
    coordinates: { latitude: 39.948, longitude: -86.004 },
    location: "Indy",
    name: "Fuel",
    tier: "ECHL",
    parentTeam: "CHI"
  },{
    coordinates: { latitude: 35.309, longitude: -106.687 },
    location: "New Mexico",
    name: "Goatheads",
    tier: "ECHL",
    parentTeam: "COL"
  },{
    coordinates: { latitude: 43.614, longitude: -116.204 },
    location: "Idaho",
    name: "Steelheads",
    tier: "ECHL",
    parentTeam: "DAL"
  },{
    coordinates: { latitude: 41.651, longitude: -83.537 },
    location: "Toledo",
    name: "Walleye",
    tier: "ECHL",
    parentTeam: "DET"
  },{
    coordinates: { latitude: 41.116, longitude: -85.124 },
    location: "Fort Wayne",
    name: "Komets",
    tier: "ECHL",
    parentTeam: "EDM"
  },{
    coordinates: { latitude: 32.074, longitude: -81.112 },
    location: "Savannah",
    name: "Ghost Pirates",
    tier: "ECHL",
    parentTeam: "FLA"
  },{
    coordinates: { latitude: 34.853, longitude: -82.392 },
    location: "Greenville",
    name: "Swamp Rabbits",
    tier: "ECHL",
    parentTeam: "LAK"
  },{
    coordinates: { latitude: 30.326, longitude: -81.645 },
    location: "Jacksonville",
    name: "Icemen",
    tier: "ECHL",
    parentTeam: "MIN"
  },{
    coordinates: { latitude: 46.322, longitude: -72.591 },
    location: "Trois-Rivières",
    name: "Lions",
    tier: "ECHL",
    parentTeam: "MTL"
  },{
    coordinates: { latitude: 43.308, longitude: -73.642 },
    location: "Adirondack",
    name: "Thunder",
    tier: "ECHL",
    parentTeam: "NJD"
  },{
    coordinates: { latitude: 33.991, longitude: -84.094 },
    location: "Atlanta",
    name: "Gladiators",
    tier: "ECHL",
    parentTeam: "NSH"
  },{
    coordinates: { latitude: 40.213, longitude: -74.758 },
    location: "Trenton",
    name: "Ironhawks",
    tier: "ECHL",
    parentTeam: "NYI"
  },{
    coordinates: { latitude: 40.478, longitude: -88.996 },
    location: "Bloomington",
    name: "Bison",
    tier: "ECHL",
    parentTeam: "NYR"
  },{
    coordinates: { latitude: 33.127, longitude: -96.655 },
    location: "Allen",
    name: "Americans",
    tier: "ECHL",
    parentTeam: "OTT"
  },{
    coordinates: { latitude: 40.335, longitude: -75.923 },
    location: "Reading",
    name: "Royals",
    tier: "ECHL",
    parentTeam: "PHI"
  },{
    coordinates: { latitude: 40.065, longitude: -80.725 },
    location: "Wheeling",
    name: "Nailers",
    tier: "ECHL",
    parentTeam: "PIT"
  },{
    coordinates: { latitude: 39.040, longitude: -94.357 },
    location: "Kansas City",
    name: "Mavericks",
    tier: "ECHL",
    parentTeam: "SEA"
  },{
    coordinates: { latitude: 37.683, longitude: -97.332 },
    location: "Wichita",
    name: "Thunder",
    tier: "ECHL",
    parentTeam: "SJS"
  },{
    coordinates: { latitude: 26.440, longitude: -81.779 },
    location: "Florida",
    name: "Everblades",
    tier: "ECHL",
    parentTeam: "STL"
  },{
    coordinates: { latitude: 28.539, longitude: -81.384 },
    location: "Orlando",
    name: "Solar Bears",
    tier: "ECHL",
    parentTeam: "TBL"
  },{
    coordinates: { latitude: 39.098, longitude: -84.504 },
    location: "Cincinnati",
    name: "Cyclones",
    tier: "ECHL",
    parentTeam: "TOR"
  },{
    coordinates: { latitude: 42.254, longitude: -85.535 },
    location: "Kalamazoo",
    name: "Wings",
    tier: "ECHL",
    parentTeam: "VAN"
  },{
    coordinates: { latitude: 38.963, longitude: -119.938 },
    location: "Tahoe",
    name: "Knight Monsters",
    tier: "ECHL",
    parentTeam: "VEG"
  },{
    coordinates: { latitude: 32.866, longitude: -80.022 },
    location: "South Carolina",
    name: "Stingrays",
    tier: "ECHL",
    parentTeam: "WAS"
  },{
    coordinates: { latitude: 36.853, longitude: -76.287 },
    location: "Norfolk",
    name: "Admirals",
    tier: "ECHL",
    parentTeam: "WIN"
  },
];