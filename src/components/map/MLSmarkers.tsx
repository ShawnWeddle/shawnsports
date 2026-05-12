import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { MLSteamData, allMLSteams } from "~/data/MLS/MLSdata";
import { MLSstadiumCoordinates } from "~/data/MLS/MLSstadiumData";
import { MLSstyleData } from "~/data/MLS/MLSstyleData";
import { FaFutbol } from "react-icons/fa";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const MLSmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = allMLSteams.map((team, index) => {
    const fullTeamName = MLSteamData[team].reverse
      ? MLSteamData[team].name + " " + MLSteamData[team].location
      : MLSteamData[team].location + " " + MLSteamData[team].name;
    return (
      <MapMarker
        key={index}
        latitude={MLSstadiumCoordinates[team].latitude}
        longitude={MLSstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <FaFutbol className={cn("size-4 text-mls/60 shadow-lg")} />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [MLSstyleData[team].primaryBackground]: true,
                [MLSstyleData[team].secondaryBorder]: true,
                [MLSstyleData[team].simpleText]: true,
              })}
            >
              {fullTeamName}
            </p>
            <p className="text-xs text-muted-foreground">
              {MLSstadiumCoordinates[team].latitude},{" "}
              {MLSstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
