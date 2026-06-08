import { cn } from "~/lib/utils";
import { useNHLMapContext } from "~/hooks/useNHLmap";
import { type NHLTeamType, type LeagueType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { nhlMinorList } from "~/data/NHL/NHLstadiums";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { FaHockeyPuck } from "react-icons/fa6";
import TeamTag from "~/components/map/NHL/NHLminorTag";
import { Button } from "~/components/ui/button";

type MarkerProps = {
  activeLeagues: Set<LeagueType>;
  activeTeam: NHLTeamType | undefined;
  mapMode: "Leagues" | "Paths";
  teamColors: boolean;
};

const leagueToText = (league: LeagueType): string => {
  switch (league) {
    case "NHL":
      return "N";
    case "AHL":
      return "A";
    case "ECHL":
      return "E";
    case "PWHL":
      return "W";
    default:
      return "";
  }
};

export const NHLmarkers = (props: MarkerProps) => {
  const { nhlMapDispatch } = useNHLMapContext();
  const { activeTeam, activeLeagues, mapMode, teamColors } = props;
  const nm = nhlMinorList
    .filter((team) => {
      switch (mapMode) {
        case "Leagues":
          return activeLeagues.has(team.tier);
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
                  {leagueToText(tier)}
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
              {mapMode === "Leagues" && (
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
                  "border-nhl": teamColors === false && league === "NHL",
                  "border-ahl": teamColors === false && league === "AHL",
                  "border-echl": teamColors === false && league === "ECHL",
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [NHLstyleData[parentTeam].simpleText]: true,
                  })}
                >
                  {leagueToText(league)}
                </p>
              )}
              {teamColors === false && (
                <FaHockeyPuck
                  className={cn("size-4", {
                    "text-nhl": league === "NHL",
                    "text-ahl": league === "AHL",
                    "text-echl": league === "ECHL",
                  })}
                />
              )}
            </div>
          </MarkerContent>
*/
