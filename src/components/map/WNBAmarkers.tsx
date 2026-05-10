import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { WNBAteamData, wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import { WNBAstadiumCoordinates } from "~/data/WNBA/WNBAstadiumData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";

type MarkerOptionsType = {
  teamColorsOn: boolean;
};

export const WNBAmarkers = (options: MarkerOptionsType) => {
  const { teamColorsOn } = options;
  const nm = wnbaTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={WNBAstadiumCoordinates[team].latitude}
        longitude={WNBAstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [WNBAstyleData[team].primaryBackground]: teamColorsOn,
              [WNBAstyleData[team].secondaryBorder]: teamColorsOn,
              "bg-[#E00078]": !teamColorsOn,
              "border-white": !teamColorsOn,
            })}
          />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [WNBAstyleData[team].primaryBackground]: true,
                [WNBAstyleData[team].secondaryBorder]: true,
                [WNBAstyleData[team].simpleText]: true,
              })}
            >
              {WNBAteamData[team].location} {WNBAteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {WNBAstadiumCoordinates[team].latitude},{" "}
              {WNBAstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });
  return nm;
};

/**
 * 
 * 
          <div className="flex size-4 rounded-full shadow-lg">
            <div
              className={cn("w-full rounded-l-full border-2 border-r-0", {
                [WNBAstyleData[team].primaryBackground]: teamColorsOn,
                [WNBAstyleData[team].secondaryBorder]: teamColorsOn,
                "bg-[#E00078]": !teamColorsOn,
                "border-white": !teamColorsOn,
              })}
            />
            <div
              className={cn("w-full rounded-r-full border-2 border-l-0", {
                [WNBAstyleData[team].primaryBackground]: !teamColorsOn,
                [WNBAstyleData[team].secondaryBorder]: !teamColorsOn,
                "bg-[#E00078]": teamColorsOn,
                "border-white": teamColorsOn,
              })}
            />
          </div>
 */
