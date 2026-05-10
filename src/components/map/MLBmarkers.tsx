import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { MLBteamData, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { MLBstadiumCoordinates } from "~/data/MLB/MLBstadiumData";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

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
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [MLBstyleData[team].primaryBackground]: teamColorsOn,
              [MLBstyleData[team].secondaryBorder]: teamColorsOn,
              "bg-mlb": !teamColorsOn,
              "border-white": !teamColorsOn,
            })}
          />
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
