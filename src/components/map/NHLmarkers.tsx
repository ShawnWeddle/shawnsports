import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { NHLteamData, nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { NHLstadiumCoordinates } from "~/data/NHL/NHLstadiumData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { FaHockeyPuck } from "react-icons/fa6";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const NHLmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = nhlTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NHLstadiumCoordinates[team].latitude}
        longitude={NHLstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <FaHockeyPuck className={cn("size-4 text-nhl/60 shadow-lg")} />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NHLstyleData[team].primaryBackground]: true,
                [NHLstyleData[team].secondaryBorder]: true,
                [NHLstyleData[team].simpleText]: true,
              })}
            >
              {NHLteamData[team].location} {NHLteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NHLstadiumCoordinates[team].latitude},{" "}
              {NHLstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
