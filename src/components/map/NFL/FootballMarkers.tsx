import { cn } from "~/lib/utils";
import { useNFLMapContext } from "~/hooks/useNFLmap";
import { type NFLTeamType, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { FaFootball } from "react-icons/fa6";
import {
  cflTeamsRanked,
  uflTeamsList,
  iflTeamsList,
  type UFLTeamType,
  type IFLTeamType,
  type CFLTeamType,
} from "~/data/CFL/CFLdata";
import {
  type FootballInfoType,
  NFLStadiumData,
  CFLStadiumData,
  UFLStadiumData,
  IFLStadiumData,
} from "~/data/NFL/Football_Stadium_Data";

export const FootballMarkers = () => {
  const { nflMapState } = useNFLMapContext();

  const { activeLeagues } = nflMapState;

  const nflMarkers = nflTeamsRanked.map((team, index) => {
    const { coordinates, name, location } = NFLStadiumData[team];
    return (
      <FootballMarker
        key={index.toString() + "NFL"}
        coordinates={coordinates}
        location={location}
        name={name}
        league="NFL"
        team={team}
      />
    );
  });

  const cflMarkers = cflTeamsRanked.map((team, index) => {
    const { coordinates, name, location } = CFLStadiumData[team];
    return (
      <FootballMarker
        key={index.toString() + "CFL"}
        coordinates={coordinates}
        location={location}
        name={name}
        league="CFL"
        team={team}
      />
    );
  });

  const uflMarkers = uflTeamsList.map((team, index) => {
    const { coordinates, name, location } = UFLStadiumData[team];
    return (
      <FootballMarker
        key={index.toString() + "UFL"}
        coordinates={coordinates}
        location={location}
        name={name}
        league="UFL"
        team={team}
      />
    );
  });

  const iflMarkers = iflTeamsList.map((team, index) => {
    const { coordinates, name, location } = IFLStadiumData[team];
    return (
      <FootballMarker
        key={index.toString() + "IFL"}
        coordinates={coordinates}
        location={location}
        name={name}
        league="IFL"
        team={team}
      />
    );
  });

  const markers = [];
  if (activeLeagues.has("NFL")) {
    markers.push(...nflMarkers);
  }
  if (activeLeagues.has("CFL")) {
    markers.push(...cflMarkers);
  }
  if (activeLeagues.has("UFL")) {
    markers.push(...uflMarkers);
  }
  if (activeLeagues.has("IFL")) {
    markers.push(...iflMarkers);
  }
  return markers;
};

type FootballMarkerProps = FootballInfoType &
  (
    | {
        league: "NFL";
        team: NFLTeamType;
      }
    | {
        league: "CFL";
        team: CFLTeamType;
      }
    | {
        league: "UFL";
        team: UFLTeamType;
      }
    | {
        league: "IFL";
        team: IFLTeamType;
      }
  );

const FootballMarker: React.FC<FootballMarkerProps> = (
  props: FootballMarkerProps
) => {
  const { nflMapDispatch } = useNFLMapContext();
  const { coordinates, league, location, name, team } = props;
  return (
    <MapMarker
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
    >
      <MarkerContent>
        <div
          className={cn(
            "flex size-6 flex-row items-center justify-center rounded-full border-2 shadow-lg",
            {
              "bg-white": true,
              "border-nfl": league === "NFL",
              "border-cfl": league === "CFL",
              "border-home": league === "IFL",
              "border-black": league === "UFL",
            }
          )}
        >
          {
            <FaFootball
              className={cn("size-4", {
                "text-nfl": league === "NFL",
                "text-cfl": league === "CFL",
                "text-home": league === "IFL",
                "text-black": league === "UFL",
              })}
            />
          }
        </div>
      </MarkerContent>
      <MarkerPopup>
        <div className="rounded-md bg-white p-1">
          {location} {name}
        </div>
      </MarkerPopup>
    </MapMarker>
  );
};

/*

*/
