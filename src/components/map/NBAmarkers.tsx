import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { NBAteamData, nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { NBAstadiumCoordinates } from "~/data/NBA/NBAstadiumData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { FaBasketball } from "react-icons/fa6";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const NBAmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = nbaTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NBAstadiumCoordinates[team].latitude}
        longitude={NBAstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <FaBasketball className={cn("size-4 text-nba/60 shadow-lg")} />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NBAstyleData[team].primaryBackground]: true,
                [NBAstyleData[team].secondaryBorder]: true,
                [NBAstyleData[team].simpleText]: true,
              })}
            >
              {NBAteamData[team].location} {NBAteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NBAstadiumCoordinates[team].latitude},{" "}
              {NBAstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
