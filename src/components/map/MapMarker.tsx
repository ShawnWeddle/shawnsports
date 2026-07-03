import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { convertLeagueToSport } from "~/data/map/mapData";
import { leagueStyles } from "~/data/map/mapStyles";
import { markerData } from "~/data/map/allMapData";
import type { LeagueTeamType } from "~/types/MapTypes";
import Icon from "./MapIcon";
import { MapTag } from "./MapTag";

const Marker: React.FC<LeagueTeamType> = (props: LeagueTeamType) => {
  const { league } = props;
  const { coordinates } = markerData(props);
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
        <MapTag data={[props]} />
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
