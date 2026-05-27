import { cn } from "~/lib/utils";
import { useNHLMapContext } from "~/hooks/useNHLmap";
import { type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { nhlMinorList, type TierType } from "~/data/NHL/NHLstadiums";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { FaHockeyPuck } from "react-icons/fa6";
import TeamTag from "~/components/map/NHL/NHLminorTag";
import { Button } from "~/components/ui/button";

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
      const { coordinates, parentTeam, tier } = team;
      return (
        <MapMarker
          key={index}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          <MarkerContent>
            <div
              className={cn(
                "flex size-6 flex-row items-center justify-center rounded-full border-2 shadow-lg",
                {
                  [NHLstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [NHLstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  "bg-white": teamColors === false,
                  "border-nhl": teamColors === false && tier === "NHL",
                  "border-aa": teamColors === false && tier === "AHL",
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
                    "text-aa": tier === "AHL",
                    "text-echl": tier === "ECHL",
                  })}
                />
              )}
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="rounded-md bg-white p-1">
              <TeamTag team={parentTeam} tier={tier} />
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

/*
<MarkerContent>
            <div
              className={cn(
                "flex size-6 flex-row items-center justify-center rounded-full border-2 opacity-50  shadow-lg",
                {
                  [NHLstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [NHLstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  "bg-white": teamColors === false,
                  "border-nhl": teamColors === false && tier === "NHL",
                  "border-ahl": teamColors === false && tier === "AHL",
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
                    "text-ahl": tier === "AHL",
                    "text-echl": tier === "ECHL",
                  })}
                />
              )}
            </div>
          </MarkerContent>
*/
