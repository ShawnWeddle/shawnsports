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
} from "react-icons/fa6";
import { markerData } from "~/data/map/allMapData";
import type { MapDataInputType } from "~/types/MapTypes";

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
  }
};

const Marker: React.FC<MapDataInputType> = (props: MapDataInputType) => {
  const { league } = props;
  const { coordinates, name, location } = markerData(props);
  return (
    <MapMarker
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
    >
      <MarkerContent>
        <div
          className={cn(
            "flex size-6 flex-row items-center justify-center rounded-full border-2 bg-white shadow-lg",
            leagueStyles(league)
          )}
        >
          <Icon sport={convertLeagueToSport(league)} />
        </div>
      </MarkerContent>
      <MarkerPopup>
        <div className="rounded bg-white p-1">
          {location} {name}
        </div>
      </MarkerPopup>
    </MapMarker>
  );
};

export default Marker;

/*
<div className="flex items-center justify-center rounded-full bg-transparent p-1 shadow-lg">
          <div
            className={cn(
              "flex size-6 flex-row items-center justify-center rounded-full border-2 bg-white shadow-lg",
              leagueStyles(league)
            )}
          >
            <Icon sport={convertLeagueToSport(league)} />
          </div>
          
        </div>
*/
