import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { FaHockeyPuck } from "react-icons/fa6";
import { pwhlTeamsAll, PWHLTeamType } from "~/data/NHL/NHLdata";
import { PWHLArenaData } from "~/data/NHL/Hockey_Arena_Data";

export const PWHLMarkers = () => {
  const nm = pwhlTeamsAll.map((team, index) => {
    const { coordinates, location, name, parentTeam } = PWHLArenaData[team];
    return (
      <MapMarker
        key={index}
        latitude={coordinates.latitude}
        longitude={coordinates.longitude}
      >
        <MarkerContent>
          <div
            className={cn(
              "flex size-6 flex-row items-center justify-center rounded-full border-2 shadow-lg",
              {
                "bg-white": true,
                "border-cfl": true,
              }
            )}
          >
            <FaHockeyPuck
              className={cn("size-4", {
                "text-cfl": true,
              })}
            />
          </div>
        </MarkerContent>
        <MarkerPopup>
          <div className="rounded-md bg-white p-1">
            {location} {name}
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
