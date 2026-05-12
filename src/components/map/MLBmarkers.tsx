import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { MLBteamData, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { MLBstadiumCoordinates } from "~/data/MLB/MLBstadiumData";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { FaBaseball } from "react-icons/fa6";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const MLBmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = mlbTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={MLBstadiumCoordinates[team].latitude}
        longitude={MLBstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <FaBaseball className={cn("size-4 text-mlb/60 shadow-lg")} />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [MLBstyleData[team].primaryBackground]: true,
                [MLBstyleData[team].secondaryBorder]: true,
                [MLBstyleData[team].simpleText]: true,
              })}
            >
              {MLBteamData[team].location} {MLBteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {MLBstadiumCoordinates[team].latitude},{" "}
              {MLBstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
