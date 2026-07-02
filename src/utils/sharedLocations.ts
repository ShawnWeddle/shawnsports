import type { MapDataInputType } from "~/types/MapTypes";
import { type LeagueType } from "~/data/map/mapData";

export const getSharedLocations = (activeLeagues: Set<LeagueType>) => {
  const sharedActiveLocations = sharedLocations.flatMap((location) => {
    const newLocation: MapDataInputType[] = [];
    location.forEach((LAT) => {
      if(activeLeagues.has(LAT.league)){
        newLocation.push(LAT);
      } 
    });
    return newLocation.length > 1 ? [newLocation] : [];
  });

  const removedLocations = sharedActiveLocations.flat();

  return { sharedActiveLocations, removedLocations };
}

const sharedLocations: MapDataInputType[][] = [
  [
    {
      "league": "NFL",
      "team": "LAR"
    },
    {
      "league": "NFL",
      "team": "LAC"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "SEA"
    },
    {
      "league": "MLS",
      "team": "SEA"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "NYJ"
    },
    {
      "league": "NFL",
      "team": "NYG"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "CHI"
    },
    {
      "league": "MLS",
      "team": "CHI"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "ATL"
    },
    {
      "league": "MLS",
      "team": "ATL"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "TEN"
    },
    {
      "league": "MLS",
      "team": "NSH"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "NWE"
    },
    {
      "league": "MLS",
      "team": "NER"
    }
  ],
  [
    {
      "league": "NFL",
      "team": "CAR"
    },
    {
      "league": "MLS",
      "team": "CLT"
    }
  ],
  [
    {
      "league": "CFL",
      "team": "TOR"
    },
    {
      "league": "MLS",
      "team": "TOR"
    }
  ],
  [
    {
      "league": "CFL",
      "team": "BCL"
    },
    {
      "league": "MLS",
      "team": "VAN"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "FSH"
    },
    {
      "league": "ECHL",
      "team": "ECHL-CHI"
    },
    {
      "league": "MLV",
      "team": "IND"
    },
  ],
  [
    {
      "league": "IFL",
      "team": "IBS"
    },
    {
      "league": "NGL",
      "team": "NGL-MIN"
    },
    {
      "league": "AHL",
      "team": "AHL-MIN"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "JAX"
    },
    {
      "league": "ECHL",
      "team": "ECHL-MIN"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "ORL"
    },
    {
      "league": "NBA",
      "team": "ORL"
    },
        {
      "league": "ECHL",
      "team": "ECHL-TBL"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "SDS"
    },
    {
      "league": "NGL",
      "team": "NGL-LAC"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "TSS"
    },
    {
      "league": "AHL",
      "team": "AHL-UTA"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "TUL"
    },
    {
      "league": "ECHL",
      "team": "ECHL-ANA"
    }
  ],
  [
    {
      "league": "IFL",
      "team": "VEG"
    },
    {
      "league": "AHL",
      "team": "AHL-VEG"
    }
  ],
  [
    {
      "league": "UFL",
      "team": "DAL"
    },
    {
      "league": "MLS",
      "team": "DAL"
    }
  ],
  [
    {
      "league": "UFL",
      "team": "DCD"
    },
    {
      "league": "MLS",
      "team": "DCU"
    }
  ],
  [
    {
      "league": "UFL",
      "team": "HOU"
    },
    {
      "league": "MLS",
      "team": "HOU"
    }
  ],
  [
    {
      "league": "UFL",
      "team": "ORL"
    },
    {
      "league": "MLS",
      "team": "ORL"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "BOS"
    },
    {
      "league": "NHL",
      "team": "BOS"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "OKC"
    },
    {
      "league": "NGL",
      "team": "NGL-OKC"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "DEN"
    },
    {
      "league": "NHL",
      "team": "COL"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "MIN"
    },
    {
      "league": "WNBA",
      "team": "MIN"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "DAL"
    },
    {
      "league": "NHL",
      "team": "DAL"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "NYK"
    },
    {
      "league": "NHL",
      "team": "NYR"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "PHI"
    },
    {
      "league": "NHL",
      "team": "PHI"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "IND"
    },
    {
      "league": "WNBA",
      "team": "IND"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "CLE"
    },
    {
      "league": "AHL",
      "team": "AHL-CBJ"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "PHO"
    },
    {
      "league": "WNBA",
      "team": "PHO"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "GSW"
    },
    {
      "league": "WNBA",
      "team": "GSV"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "LAL"
    },
    {
      "league": "WNBA",
      "team": "LAS"
    },      {
      "league": "NHL",
      "team": "LAK"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "UTA"
    },
    {
      "league": "NHL",
      "team": "UTA"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "TOR"
    },
    {
      "league": "NHL",
      "team": "TOR"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "CHI"
    },
    {
      "league": "NHL",
      "team": "CHI"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "POR"
    },
    {
      "league": "WNBA",
      "team": "POR"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "DET"
    },
    {
      "league": "NHL",
      "team": "DET"
    },
        {
      "league": "PWHL",
      "team": "DET"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "WAS"
    },
    {
      "league": "NHL",
      "team": "WAS"
    }
  ],
  [
    {
      "league": "NBA",
      "team": "BRK"
    },
    {
      "league": "WNBA",
      "team": "NYL"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-ATL"
    },
    {
      "league": "WNBA",
      "team": "ATL"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-CHO"
    },
    {
      "league": "ECHL",
      "team": "ECHL-CAR"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-DEN"
    },
    {
      "league": "AHL",
      "team": "AHL-DET"
    },
    {
      "league": "MLV",
      "team": "GRR"
    },
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-LAL"
    },
    {
      "league": "AHL",
      "team": "AHL-SEA"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-SAS"
    },
    {
      "league": "AHL",
      "team": "AHL-DAL"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-WAS"
    },
    {
      "league": "WNBA",
      "team": "WAS"
    }
  ],
  [
    {
      "league": "WNBA",
      "team": "SEA"
    },
    {
      "league": "NHL",
      "team": "SEA"
    },
    {
      "league": "PWHL",
      "team": "SEA"
    }
  ],
  [
    {
      "league": "WNBA",
      "team": "TOR"
    },
    {
      "league": "AHL",
      "team": "AHL-TOR"
    },
    {
      "league": "PWHL",
      "team": "TOR"
    }
  ],
  [
    {
      "league": "MLB",
      "team": "NYY"
    },
    {
      "league": "MLS",
      "team": "NYC"
    }
  ],
  [
    {
      "league": "MLB",
      "team": "OAK"
    },
    {
      "league": "AAA",
      "team": "AAA-SFG"
    }
  ],
  [
    {
      "league": "SA",
      "team": "SA-MIA"
    },
    {
      "league": "SA",
      "team": "SA-STL"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "VEG"
    },
    {
      "league": "PWHL",
      "team": "VEG"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "NJD"
    },
    {
      "league": "PWHL",
      "team": "NYS"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "MIN"
    },
    {
      "league": "PWHL",
      "team": "MIN"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "WIN"
    },
    {
      "league": "AHL",
      "team": "AHL-WIN"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "CGY"
    },
    {
      "league": "AHL",
      "team": "AHL-CGY"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "SJS"
    },
    {
      "league": "PWHL",
      "team": "SJS"
    }
  ],
  [
    {
      "league": "AHL",
      "team": "AHL-MTL"
    },
    {
      "league": "PWHL",
      "team": "MTL"
    }
  ],
  [
    {
      "league": "AHL",
      "team": "AHL-NYI"
    },
    {
      "league": "PWHL",
      "team": "HAM"
    }
  ],
  [
    {
      "league": "ECHL",
      "team": "ECHL-NSH"
    },
    {
      "league": "MLV",
      "team": "ATL"
    }
  ],
  [
    {
      "league": "NHL",
      "team": "CBJ"
    },
    {
      "league": "MLV",
      "team": "CLF"
    }
  ],
  [
    {
      "league": "NGL",
      "team": "NGL-DAL"
    },
    {
      "league": "MLV",
      "team": "DAL"
    }
  ],
]

/*

*/