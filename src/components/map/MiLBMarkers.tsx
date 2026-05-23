import { cn } from "~/lib/utils";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { FaBaseball } from "react-icons/fa6";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { milbList, type TierType, MiLBobject } from "~/data/MLB/ballparks";

type MarkerProps = {
  activeTiers: Set<TierType>;
  activeTeams: Set<MLBTeamType>;
  mapMode: "Tiers" | "Paths";
  teamColors: boolean;
};

const tierToText = (tier: TierType): string => {
  switch (tier) {
    case "MLB":
      return "ML";
    case "AAA":
      return "3A";
    case "AA":
      return "2A";
    case "High-A":
      return "HA";
    case "Single-A":
      return "1A";
  }
};

export const MiLBmarkers = (props: MarkerProps) => {
  const { activeTiers, activeTeams, mapMode, teamColors } = props;
  const nm = milbList
    .filter((team) => {
      switch (mapMode) {
        case "Tiers":
          return activeTiers.has(team.tier);
        case "Paths":
          return activeTeams.has(team.parentTeam);
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
                "flex size-6 flex-row items-center justify-center rounded-full border-2  shadow-lg",
                {
                  [MLBstyleData[parentTeam].primaryBackground]:
                    teamColors === true,
                  [MLBstyleData[parentTeam].secondaryBorder]:
                    teamColors === true,
                  "bg-white": teamColors === false,
                  "border-mlb": teamColors === false && tier === "MLB",
                  "border-aaa": teamColors === false && tier === "AAA",
                  "border-aa": teamColors === false && tier === "AA",
                  "border-higha": teamColors === false && tier === "High-A",
                  "border-singlea": teamColors === false && tier === "Single-A",
                }
              )}
            >
              {teamColors === true && (
                <p
                  className={cn("text-xs", {
                    [MLBstyleData[parentTeam].simpleText]: true,
                  })}
                >
                  {tierToText(tier)}
                </p>
              )}
              {teamColors === false && (
                <FaBaseball
                  className={cn("size-4", {
                    "text-mlb": tier === "MLB",
                    "text-aaa": tier === "AAA",
                    "text-aa": tier === "AA",
                    "text-higha": tier === "High-A",
                    "text-singlea": tier === "Single-A",
                  })}
                />
              )}
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="space-y-1">
              <p
                className={cn("px-1 py-0.5", {
                  [MLBstyleData[parentTeam].primaryBackground]: tier === "MLB",
                  [MLBstyleData[parentTeam].secondaryBorder]: tier === "MLB",
                  [MLBstyleData[parentTeam].simpleText]: tier === "MLB",
                  "rounded border font-bold": tier === "MLB",
                })}
              >
                MLB: {MiLBobject[parentTeam]["MLB"].location}{" "}
                {MiLBobject[parentTeam]["MLB"].name}
              </p>
              <p
                className={cn("px-1 py-0.5", {
                  "rounded bg-aaa font-bold": tier === "AAA",
                })}
              >
                AAA: {MiLBobject[parentTeam]["AAA"].location}{" "}
                {MiLBobject[parentTeam]["AAA"].name}
              </p>
              <p
                className={cn("px-1 py-0.5", {
                  "rounded bg-aa font-bold text-white": tier === "AA",
                })}
              >
                AA: {MiLBobject[parentTeam]["AA"].location}{" "}
                {MiLBobject[parentTeam]["AA"].name}
              </p>
              <p
                className={cn("px-1 py-0.5", {
                  "rounded bg-higha font-bold text-white": tier === "High-A",
                })}
              >
                High-A: {MiLBobject[parentTeam]["High-A"].location}{" "}
                {MiLBobject[parentTeam]["High-A"].name}
              </p>
              <p
                className={cn("px-1 py-0.5", {
                  "rounded bg-singlea font-bold text-white":
                    tier === "Single-A",
                })}
              >
                Single-A: {MiLBobject[parentTeam]["Single-A"].location}{" "}
                {MiLBobject[parentTeam]["Single-A"].name}
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      );
    });
  return nm;
};
