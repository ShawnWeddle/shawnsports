import { cn } from "~/lib/utils";
import { useNBAMapContext } from "~/hooks/useNBAmap";
import { type NBATeamType } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { FaBasketball } from "react-icons/fa6";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { nbaMinorList, type TierType } from "~/data/NBA/NBAstadiums";
import { Button } from "../ui/button";

type MarkerProps = {
  activeTiers: Set<TierType>;
  activeTeam: NBATeamType | undefined;
  mapMode: "Tiers" | "Paths";
  teamColors: boolean;
};

const tierToText = (tier: TierType): string => {
  switch (tier) {
    case "NBA":
      return "N";
    case "NGL":
      return "G";
  }
};

export const NBAmarkers = (props: MarkerProps) => {
  const { nbaMapDispatch } = useNBAMapContext();
  const { activeTeam, activeTiers, mapMode, teamColors } = props;
  const nm = nbaMinorList
    .filter((team) => {
      switch (mapMode) {
        case "Tiers":
          return activeTiers.has(team.tier);
        case "Paths":
          return activeTeam === team.parentTeam;
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
                  [NBAstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [NBAstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  "bg-white": teamColors === false,
                  "border-nba": teamColors === false && tier === "NBA",
                  "border-aaa": teamColors === false && tier === "NGL",
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [NBAstyleData[parentTeam].simpleText]: true,
                  })}
                >
                  {tierToText(tier)}
                </p>
              )}
              {teamColors === false && (
                <FaBasketball
                  className={cn("size-4", {
                    "text-nba": tier === "NBA",
                    "text-aaa": tier === "NGL",
                  })}
                />
              )}
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="bg-white p-1">
              <p
                className={cn("px-1 py-0.5", {
                  [NBAstyleData[parentTeam].primaryBackground]: tier === "NBA",
                  [NBAstyleData[parentTeam].secondaryBorder]: tier === "NBA",
                  [NBAstyleData[parentTeam].simpleText]: tier === "NBA",
                  "rounded border font-bold": tier === "NBA",
                })}
              >
                {location} {name}
              </p>
              {mapMode === "Tiers" && (
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      nbaMapDispatch({
                        type: "CHANGE_TEAM",
                        payload: { team: parentTeam },
                      });
                      nbaMapDispatch({
                        type: "CHANGE_MAP_MODE",
                        payload: { mode: "Paths" },
                      });
                    }}
                  >
                    Show path
                  </Button>
                </div>
              )}
            </div>
          </MarkerPopup>
        </MapMarker>
      );
    });
  return nm;
};
