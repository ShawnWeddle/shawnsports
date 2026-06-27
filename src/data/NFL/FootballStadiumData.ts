import { type NFLTeamType} from "~/data/NFL/NFLdata";
import type { CFLTeamType, IFLTeamType, UFLTeamType  } from "~/data/CFL/CFLdata";
import type { TeamInfoType } from "~/types/MapTypes";

export const NFLStadiumData: {[Key in NFLTeamType] : TeamInfoType} = {
    ARI: {
        coordinates: {
            latitude: 33.528,
            longitude: -112.263,
        },
        location: "Arizona",
        name: "Cardinals",
    },
    ATL: {
        coordinates: {
            latitude: 33.755,
            longitude: -84.401,
        },
        location: "Atlanta",
        name: "Falcons",
    },
    BAL: {
        coordinates: {
            latitude: 39.278,
            longitude: -76.623,
        },
        location: "Baltimore",
        name: "Ravens",
    },
    BUF: {
        coordinates: {
            latitude: 42.774,
            longitude: -78.787,
        },
        location: "Buffalo",
        name: "Bills",
    },
    CAR: {
        coordinates: {
            latitude: 35.226,
            longitude: -80.853,
        },
        location: "Carolina",
        name: "Panthers",
    },
    CHI: {
        coordinates: {
            latitude: 41.862,
            longitude: -87.617,
        },
        location: "Chicago",
        name: "Bears",
    },
    CIN: {
        coordinates: {
            latitude: 39.095,
            longitude: -84.516,
        },
        location: "Cincinnati",
        name: "Bengals",
    },
    CLE: {
        coordinates: {
            latitude: 41.506,
            longitude: -81.699,
        },
        location: "Cleveland",
        name: "Browns",
    },
    DAL: {
        coordinates: {
            latitude: 32.748,
            longitude: -97.093,
        },
        location: "Dallas",
        name: "Cowboys",
    },
    DEN: {
        coordinates: {
            latitude: 39.744,
            longitude: -105.02,
        },
        location: "Denver",
        name: "Broncos",
    },
    DET: {
        coordinates: {
            latitude: 42.34,
            longitude: -83.046,
        },
        location: "Detroit",
        name: "Lions",
    },
    GNB: {
        coordinates: {
            latitude: 44.501,
            longitude: -88.062,
        },
        location: "Green Bay",
        name: "Packers",
    },
    HOU: {
        coordinates: {
            latitude: 29.685,
            longitude: -95.411,
        },
        location: "Houston",
        name: "Texans",
    },
    IND: {
        coordinates: {
            latitude: 39.76,
            longitude: -86.164,
        },
        location: "Indianapolis",
        name: "Colts",
    },
    JAX: {
        coordinates: {
            latitude: 30.324,
            longitude: -81.638,
        },
        location: "Jacksonville",
        name: "Jaguars",
    },
    KAN: {
        coordinates: {
            latitude: 39.049,
            longitude: -94.484,
        },
        location: "Kansas City",
        name: "Chiefs",
    },
    LAC: {
        coordinates: {
            latitude: 33.953,
            longitude: -118.339,
        },
        location: "Los Angeles",
        name: "Chargers",
    },
    LAR: {
        coordinates: {
            latitude: 33.953,
            longitude: -118.339,
        },
        location: "Los Angeles",
        name: "Rams",
    },
    LVR: {
        coordinates: {
            latitude: 36.091,
            longitude: -115.184,
        },
        location: "Las Vegas",
        name: "Raiders",
    },
    MIA: {
        coordinates: {
            latitude: 25.958,
            longitude: -80.239,
        },
        location: "Miami",
        name: "Dolphins",
    },
    MIN: {
        coordinates: {
            latitude: 44.974,
            longitude: -93.258,
        },
        location: "Minnesota",
        name: "Vikings",
    },
    NOR: {
        coordinates: {
            latitude: 29.951,
            longitude: -90.081,
        },
        location: "New Orleans",
        name: "Saints",
    },
    NWE: {
        coordinates: {
            latitude: 42.091,
            longitude: -71.264,
        },
        location: "New England",
        name: "Patriots",
    },
    NYG: {
        coordinates: {
            latitude: 40.813,
            longitude: -74.074,
        },
        location: "New York",
        name: "Giants",
    },
    NYJ: {
        coordinates: {
            latitude: 40.813,
            longitude: -74.074,
        },
        location: "New York",
        name: "Jets",
    },
    PHI: {
        coordinates: {
            latitude: 39.901,
            longitude: -75.168,
        },
        location: "Philadelphia",
        name: "Eagles",
    },
    PIT: {
        coordinates: {
            latitude: 40.447,
            longitude: -80.016,
        },
        location: "Pittsburgh",
        name: "Steelers",
    },
    SEA: {
        coordinates: {
            latitude: 47.595,
            longitude: -122.332,
        },
        location: "Seattle",
        name: "Seahawks",
    },
    SFO: {
        coordinates: {
            latitude: 37.403,
            longitude: -121.97,
        },
        location: "San Francisco",
        name: "49ers",
    },
    TAM: {
        coordinates: {
            latitude: 27.976,
            longitude: -82.503,
        },
        location: "Tampa Bay",
        name: "Buccaneers",
    },
    TEN: {
        coordinates: {
            latitude: 36.166,
            longitude: -86.771,
        },
        location: "Tennessee",
        name: "Titans",
    },
    WAS: {
        coordinates: {
            latitude: 38.908,
            longitude: -76.864,
        },
        location: "Washington",
        name: "Commanders",
    }
};

export const CFLStadiumData: {[Key in CFLTeamType] : TeamInfoType} = {
    BCL: {
        coordinates: {
            latitude: 49.277,
            longitude: -123.112,
        },
        location: "BC",
        name: "Lions",
    },
    CGY: {
        coordinates: {
            latitude: 51.07,
            longitude: -114.121,
        },
        location: "Calgary",
        name: "Stampeders",
    },
    EDM: {
        coordinates: {
            latitude: 53.56,
            longitude: -113.476,
        },
        location: "Edmonton",
        name: "Elks",
    },
    HAM: {
        coordinates: {
            latitude: 43.252,
            longitude: -79.83,
        },
        location: "Hamilton",
        name: "Tiger-Cats",
    },
    MTL: {
        coordinates: {
            latitude: 45.51,
            longitude: -73.581,
        },
        location: "Montreal",
        name: "Allouettes",
    },
    OTT: {
        coordinates: {
            latitude: 45.398,
            longitude: -75.683,
        },
        location: "Ottawa",
        name: "Redblacks",
    },
    SSK: {
        coordinates: {
            latitude: 50.45,
            longitude: -104.633,
        },
        location: "Saskatchewan",
        name: "Roughriders",
    },
    TOR: {
        coordinates: {
            latitude: 43.633,
            longitude: -79.419,
        },
        location: "Toronto",
        name: "Argonauts",
    },
    WPG: {
        coordinates: {
            latitude: 49.807,
            longitude: -97.142,
        },
        location: "Winnipeg",
        name: "Blue Bombers",
    }
};

export const IFLStadiumData: {[Key in IFLTeamType] : TeamInfoType} = {
  ARI: {
    coordinates: {
      latitude: 33.532,
      longitude: -112.261,
    },
    location: "Arizona",
    name: "Rattlers",
  },
  FSH: {
    coordinates: {
      latitude: 39.948,
      longitude: -86.004,
    },
    location: "Fishers",
    name: "Freight",
  },
  GBB: {
    coordinates: {
      latitude: 44.499,
      longitude: -88.055,
    },
    location: "Green Bay",
    name: "Blizzard",
  },
  IBS: {
    coordinates: {
      latitude: 41.593,
      longitude: -93.621,
    },
    location: "Iowa",
    name: "Barnstormers",
  },
  JAX: {
    coordinates: {
      latitude: 30.326,
      longitude: -81.645,
    },
    location: "Jacksonville",
    name: "Sharks",
  },
  NAW: {
    coordinates: {
      latitude: 34.590,
      longitude: -112.336,
    },
    location: "Northern Arizona",
    name: "Wranglers",
  },
  NMC: {
    coordinates: {
      latitude: 35.082,
      longitude: -106.573,
    },
    location: "New Mexico",
    name: "Chupacabras",
  },
  ORL: {
    coordinates: {
      latitude: 28.539,
      longitude: -81.384,
    },
    location: "Orlando",
    name: "Pirates",
  },
  QCS: {
    coordinates: {
      latitude: 41.508,
      longitude: -90.520,
    },
    location: "Quad City",
    name: "Steamwheelers",
  },
  SAG: {
    coordinates: {
      latitude: 29.427,
      longitude: -98.439,
    },
    location: "San Antonio",
    name: "Gunslingers",
  },
  SDS: {
    coordinates: {
      latitude: 33.207,
      longitude: -117.315,
    },
    location: "San Diego",
    name: "Strike Force",
  },
  TSS: {
    coordinates: {
      latitude: 32.218,
      longitude: -110.974,
    },
    location: "Tucson",
    name: "Sugar Skulls",
  },
  TUL: {
    coordinates: {
      latitude: 36.153,
      longitude: -95.996,
    },
    location: "Tulsa",
    name: "Oilers",
  },
  VEG: {
    coordinates: {
      latitude: 36.019,
      longitude: -115.081,
    },
    location: "Vegas",
    name: "Knight Hawks",
  },
};

export const UFLStadiumData: {[Key in UFLTeamType] : TeamInfoType} = {
  BHM: {
    coordinates: {
      latitude: 33.529,
      longitude: -86.809,
    },
    location: "Birmingham",
    name: "Stallions",
  },
  CBA: {
    coordinates: {
      latitude: 40.010,
      longitude: -82.991,
    },
    location: "Columbus",
    name: "Aviators",
  },
  DAL: {
    coordinates: {
      latitude: 33.154,
      longitude: -96.835,
    },
    location: "Dallas",
    name: "Renegades",
  },
  DCD: {
    coordinates: {
      latitude: 38.868,
      longitude: -77.012,
    },
    location: "DC",
    name: "Defenders",
  },
  HOU: {
    coordinates: {
      latitude: 29.752,
      longitude: -95.352,
    },
    location: "Houston",
    name: "Gamblers",
  },
  LOU: {
    coordinates: {
      latitude: 38.259,
      longitude: -85.733,
    },
    location: "Louisville",
    name: "Kings",
  },
  ORL: {
    coordinates: {
      latitude: 28.624,
      longitude: -81.389,
    },
    location: "Orlando",
    name: "Storm",
  },
  STL: {
    coordinates: {
      latitude: 38.633,
      longitude: -90.188,
    },
    location: "St. Louis",
    name: "Battlehawks",
  },
};