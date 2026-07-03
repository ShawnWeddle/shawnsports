import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import type { SportType } from "~/data/map/mapData";
import { convertLeagueToSport } from "~/data/map/mapData";
import { leagueStyles } from "~/data/map/mapStyles";
import {
  FaBaseball,
  FaBasketball,
  FaFootball,
  FaHockeyPuck,
  FaFutbol,
  FaVolleyball,
} from "react-icons/fa6";
import { markerData } from "~/data/map/allMapData";
import type { LeagueTeamType } from "~/types/MapTypes";
import { MapTag } from "./MapTag";

type IconProps = {
  sport: SportType;
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { sport } = props;
  switch (sport) {
    case "Baseball":
      return <FaBaseball />;
    case "Basketball":
      return <FaBasketball />;
    case "Football":
      return <FaFootball />;
    case "Hockey":
      return <FaHockeyPuck />;
    case "Soccer":
      return <FaFutbol />;
    case "Volleyball":
      return <FaVolleyball />;
  }
};

type MultiMarkerProps = {
  data: LeagueTeamType[];
};

const MultiMarker: React.FC<MultiMarkerProps> = (props: MultiMarkerProps) => {
  let latitude = 0;
  let longitude = 0;
  const names: string[] = [];
  const { data } = props;
  const markerGroup = data.map((activeTeam, index) => {
    const { coordinates, location, name } = markerData(activeTeam);
    names.push(location + " " + name);
    if (index === 0) {
      latitude = coordinates.latitude;
      longitude = coordinates.longitude;
    }
    return (
      <div
        key={index}
        className={cn(
          "flex size-6 flex-row items-center justify-center rounded-full border-2 bg-white shadow-lg",
          leagueStyles(activeTeam.league)
        )}
      >
        <Icon sport={convertLeagueToSport(activeTeam.league)} />
      </div>
    );
  });

  return (
    <MapMarker latitude={latitude} longitude={longitude}>
      <MarkerContent>
        <div className="flex items-center justify-center rounded-full bg-transparent p-1 shadow-lg">
          {markerGroup}
        </div>
      </MarkerContent>
      <MarkerPopup>
        <MapTag data={data} />
      </MarkerPopup>
    </MapMarker>
  );
};

export default MultiMarker;
