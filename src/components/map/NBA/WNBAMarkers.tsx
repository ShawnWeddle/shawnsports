import { cn } from "~/lib/utils";
import { useNBAMapContext } from "~/hooks/useNBAmap";
import { type NBATeamType, type TierType } from "~/data/NBA/NBAdata";
import { type WNBATeamType } from "~/data/WNBA/WNBAdata";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { FaBasketball } from "react-icons/fa6";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { wnbaList } from "~/data/WNBA/W";
import { Button } from "~/components/ui/button";

type MarkerProps = {
  activeTiers: Set<TierType>;
  activeTeam: NBATeamType | undefined;
  mapMode: "Tiers" | "Paths";
  teamColors: boolean;
};

export const WNBAmarkers = (props: MarkerProps) => {
  const { nbaMapDispatch } = useNBAMapContext();
  const { activeTiers, mapMode, teamColors } = props;

  const nm = wnbaList
    .filter((team) => {
      switch (mapMode) {
        case "Tiers":
          return activeTiers.has(team.tier);
        case "Paths":
          return false;
        default:
          return true;
      }
    })
    .map((team, index) => {
      const { coordinates, location, name, parentTeam, tier } = team;
      return (
        <MapMarker
          key={index}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          <MarkerContent>
            <div
              className={cn(
                "flex size-6 flex-row items-center justify-center rounded-full border-2  shadow-lg",
                {
                  [WNBAstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [WNBAstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  [WNBAstyleData[parentTeam].simpleText]: teamColors === true,
                  "bg-white": teamColors === false,
                  "border-wnba": teamColors === false,
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [WNBAstyleData[parentTeam].simpleText]: teamColors === true,
                  })}
                >
                  W
                </p>
              )}
              {teamColors === false && (
                <FaBasketball
                  className={cn("size-4", {
                    "text-wnba": true,
                  })}
                />
              )}
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="bg-white p-1">
              <div key={index} className="text-md m-1 flex flex-row">
                <p className="pl-2 font-bold">{tier} : </p>
                <p
                  className={cn("mx-1 px-1", {
                    "rounded border font-bold": true,
                    [WNBAstyleData[parentTeam].primaryBackground]: true,
                    [WNBAstyleData[parentTeam].secondaryBorder]: true,
                    [WNBAstyleData[parentTeam].simpleText]: true,
                  })}
                >
                  {location} {name}
                </p>
              </div>
            </div>
          </MarkerPopup>
        </MapMarker>
      );
    });
  return nm;
};
