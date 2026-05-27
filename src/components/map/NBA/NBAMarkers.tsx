import { cn } from "~/lib/utils";
import { useNBAMapContext } from "~/hooks/useNBAmap";
import { type NBATeamType, type TierType } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { FaBasketball } from "react-icons/fa6";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { nbaMinorList } from "~/data/NBA/NBAstadiums";
import { Button } from "~/components/ui/button";
import TeamTag from "./NBAgLeagueTag";

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
    case "WNBA":
      return "W";
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
      const { coordinates, parentTeam, tier } = team;
      const activeStyles = (): [string, string, string] => {
        if (parentTeam) {
          return [
            NBAstyleData[parentTeam].primaryBackground,
            NBAstyleData[parentTeam].secondaryBorder,
            NBAstyleData[parentTeam].simpleText,
          ];
        } else {
          return [
            NBAstyleData["IND"].primaryBackground,
            NBAstyleData["IND"].secondaryBorder,
            NBAstyleData["IND"].simpleText,
          ];
        }
      };
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
                  [activeStyles()[0]]: teamColors === true,
                  [activeStyles()[1]]: teamColors === true,
                  "bg-white": teamColors === false,
                  "border-nba": teamColors === false && tier === "NBA",
                  "border-aaa": teamColors === false && tier === "NGL",
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [activeStyles()[2]]: teamColors === true,
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
              <TeamTag team={team.parentTeam} tier={tier} />
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
