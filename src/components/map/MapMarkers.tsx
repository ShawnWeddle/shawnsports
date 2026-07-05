import { nflTeamsRanked } from "~/data/NFL/NFLdata";
import { cflTeamsRanked, iflTeamsList, uflTeamsList } from "~/data/CFL/CFLdata";
import { nbaTeamsRanked, nglTeamsOrder } from "~/data/NBA/NBAdata";
import { wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import {
  mlbTeamsRanked,
  AAAteamsList,
  AAteamsList,
  HAteamsList,
  SAteamsList,
} from "~/data/MLB/MLBdata";
import {
  nhlTeamsRanked,
  ahlTeamsList,
  echlTeamsList,
  pwhlTeamsAll,
} from "~/data/NHL/NHLdata";
import { mlsTeamsList } from "~/data/MLS/MLSdata";
import { mlvTeamsList } from "~/data/MLV/MLVdata";
import { useMapContext } from "~/hooks/useMap";
import { getSharedLocations } from "~/utils/sharedLocations";
import filterMarkers from "~/utils/filterMarkers";
import Marker from "./MapMarker";
import MultiMarker from "./MapMultiMarker";

const SportsMarkers = () => {
  const { mapState } = useMapContext();
  const { activeLeagues, activeTeam } = mapState;
  const { sharedActiveLocations, removedLocations } =
    getSharedLocations(activeLeagues);
  //Football 4
  const NFLMarkers = nflTeamsRanked
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "NFL";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"NFL" + index.toString()} league="NFL" team={team} />;
    });
  const CFLMarkers = cflTeamsRanked
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "CFL";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"CFL" + index.toString()} league="CFL" team={team} />;
    });
  const IFLMarkers = iflTeamsList
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "IFL";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"IFL" + index.toString()} league="IFL" team={team} />;
    });
  const UFLMarkers = uflTeamsList
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "UFL";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"UFL" + index.toString()} league="UFL" team={team} />;
    });
  //Basketball 3
  const NBAMarkers = nbaTeamsRanked
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "NBA", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return <Marker key={"NBA" + index.toString()} league="NBA" team={team} />;
    });
  const NGLMarkers = nglTeamsOrder
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "NGL", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return <Marker key={"NGL" + index.toString()} league="NGL" team={team} />;
    });
  const WNBAMarkers = wnbaTeamsRanked
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "WNBA", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return (
        <Marker key={"WNBA" + index.toString()} league="WNBA" team={team} />
      );
    });
  //Baseball 5
  const MLBMarkers = mlbTeamsRanked
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "MLB", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return <Marker key={"MLB" + index.toString()} league="MLB" team={team} />;
    });
  const AAAMarkers = AAAteamsList.filter((team) =>
    filterMarkers({
      leagueAndTeam: { league: "AAA", team: team },
      removedLocations: removedLocations,
      activeTeam: activeTeam,
    })
  ).map((team, index) => {
    return <Marker key={"AAA" + index.toString()} league="AAA" team={team} />;
  });
  const AAMarkers = AAteamsList.filter((team) =>
    filterMarkers({
      leagueAndTeam: { league: "AA", team: team },
      removedLocations: removedLocations,
      activeTeam: activeTeam,
    })
  ).map((team, index) => {
    return <Marker key={"AA" + index.toString()} league="AA" team={team} />;
  });
  const HAMarkers = HAteamsList.filter((team) =>
    filterMarkers({
      leagueAndTeam: { league: "HA", team: team },
      removedLocations: removedLocations,
      activeTeam: activeTeam,
    })
  ).map((team, index) => {
    return <Marker key={"HA" + index.toString()} league="HA" team={team} />;
  });
  const SAMarkers = SAteamsList.filter((team) =>
    filterMarkers({
      leagueAndTeam: { league: "SA", team: team },
      removedLocations: removedLocations,
      activeTeam: activeTeam,
    })
  ).map((team, index) => {
    return <Marker key={"SA" + index.toString()} league="SA" team={team} />;
  });
  //Hockey
  const NHLMarkers = nhlTeamsRanked
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "NHL", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return <Marker key={"NHL" + index.toString()} league="NHL" team={team} />;
    });
  const AHLMarkers = ahlTeamsList
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "AHL", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return <Marker key={"AHL" + index.toString()} league="AHL" team={team} />;
    });
  const ECHLMarkers = echlTeamsList
    .filter((team) =>
      filterMarkers({
        leagueAndTeam: { league: "ECHL", team: team },
        removedLocations: removedLocations,
        activeTeam: activeTeam,
      })
    )
    .map((team, index) => {
      return (
        <Marker key={"ECHL" + index.toString()} league="ECHL" team={team} />
      );
    });
  const PWHLMarkers = pwhlTeamsAll
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "PWHL";
        }) === undefined
      );
    })
    .map((team, index) => {
      return (
        <Marker key={"PWHL" + index.toString()} league="PWHL" team={team} />
      );
    });
  //Soccer
  const MLSMarkers = mlsTeamsList
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "MLS";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"MLS" + index.toString()} league="MLS" team={team} />;
    });
  //Volleyball
  const MLVMarkers = mlvTeamsList
    .filter((team) => {
      return (
        removedLocations.find((X) => {
          return X.team === team && X.league === "MLV";
        }) === undefined
      );
    })
    .map((team, index) => {
      return <Marker key={"MLV" + index.toString()} league="MLV" team={team} />;
    });
  //Shared
  const SharedMarkers = sharedActiveLocations
    .filter(() => {
      return activeTeam === undefined;
    })
    .map((teams, index) => {
      return <MultiMarker key={"SMW" + index.toString()} data={teams} />;
    });

  const getLeagues = () => {
    if (activeTeam) {
      const { team, league } = activeTeam;
      switch (league) {
        case "NFL":
        case "CFL":
        case "UFL":
        case "IFL":
        case "WNBA":
        case "PWHL":
        case "MLS":
        case "MLV":
          return [];
        case "NBA":
        case "NGL":
          return ["NGL", "NBA"];
        case "MLB":
        case "AAA":
        case "AA":
        case "HA":
        case "SA":
          return ["SA", "HA", "AA", "AAA", "MLB"];
        case "NHL":
        case "AHL":
        case "ECHL":
          return ["ECHL", "AHL", "NHL"];
      }
    } else {
      return [...activeLeagues];
    }
  };

  const leagueList = getLeagues().map((league) => {
    switch (league) {
      case "NFL":
        return NFLMarkers;
      case "CFL":
        return CFLMarkers;
      case "UFL":
        return UFLMarkers;
      case "IFL":
        return IFLMarkers;
      case "NBA":
        return NBAMarkers;
      case "NGL":
        return NGLMarkers;
      case "WNBA":
        return WNBAMarkers;
      case "NHL":
        return NHLMarkers;
      case "AHL":
        return AHLMarkers;
      case "ECHL":
        return ECHLMarkers;
      case "PWHL":
        return PWHLMarkers;
      case "MLB":
        return MLBMarkers;
      case "AAA":
        return AAAMarkers;
      case "AA":
        return AAMarkers;
      case "HA":
        return HAMarkers;
      case "SA":
        return SAMarkers;
      case "MLS":
        return MLSMarkers;
      case "MLV":
        return MLVMarkers;
    }
  });
  return [...leagueList.flat(), ...SharedMarkers];
};

export default SportsMarkers;
