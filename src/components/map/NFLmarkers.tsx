import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { NFLteamData, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { NFLstadiumCoordinates } from "~/data/NFL/NFLstadiumData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { FaFootball } from "react-icons/fa6";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const NFLmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = nflTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NFLstadiumCoordinates[team].latitude}
        longitude={NFLstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <FaFootball className={cn("size-3 text-nfl/60 shadow-lg")} />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NFLstyleData[team].primaryBackground]: true,
                [NFLstyleData[team].secondaryBorder]: true,
                [NFLstyleData[team].simpleText]: true,
              })}
            >
              {NFLteamData[team].location} {NFLteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NFLstadiumCoordinates[team].latitude},{" "}
              {NFLstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};
