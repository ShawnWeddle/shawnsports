import { cn } from "~/lib/utils";
import { useNHLMapContext } from "~/hooks/useNHLmap";
import { type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { FaHockeyPuck } from "react-icons/fa6";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { nhlMinorList, type TierType } from "~/data/NHL/NHLstadiums";
import { Button } from "../ui/button";

type MarkerProps = {
  activeTiers: Set<TierType>;
  activeTeam: NHLTeamType | undefined;
  mapMode: "Tiers" | "Paths";
  teamColors: boolean;
};

const tierToText = (tier: TierType): string => {
  switch (tier) {
    case "NHL":
      return "N";
    case "AHL":
      return "A";
    case "ECHL":
      return "E";
  }
};

export const NHLmarkers = (props: MarkerProps) => {
  const { nhlMapDispatch } = useNHLMapContext();
  const { activeTeam, activeTiers, mapMode, teamColors } = props;
  const nm = nhlMinorList
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
                  [NHLstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [NHLstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  "bg-white": teamColors === false,
                  "border-nhl": teamColors === false && tier === "NHL",
                  "border-aaa": teamColors === false && tier === "AHL",
                  "border-echl": teamColors === false && tier === "ECHL",
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [NHLstyleData[parentTeam].simpleText]: true,
                  })}
                >
                  {tierToText(tier)}
                </p>
              )}
              {teamColors === false && (
                <FaHockeyPuck
                  className={cn("size-4", {
                    "text-nhl": tier === "NHL",
                    "text-aaa": tier === "AHL",
                    "text-echl": tier === "ECHL",
                  })}
                />
              )}
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="bg-white p-1">
              <p
                className={cn("px-1 py-0.5", {
                  [NHLstyleData[parentTeam].primaryBackground]: tier === "NHL",
                  [NHLstyleData[parentTeam].secondaryBorder]: tier === "NHL",
                  [NHLstyleData[parentTeam].simpleText]: tier === "NHL",
                  "rounded border font-bold": tier === "NHL",
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
                      nhlMapDispatch({
                        type: "CHANGE_TEAM",
                        payload: { team: parentTeam },
                      });
                      nhlMapDispatch({
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
