import { cn } from "~/lib/utils";
import { useMapContext } from "~/hooks/useMap";
import type { NHLTeamType } from "~/data/NHL/NHLdata";
import {
  NHLArenaData,
  AHLArenaData,
  ECHLArenaData,
} from "~/data/NHL/HockeyArenaData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { Button } from "../ui/button";

export const CGYWINTag: React.FC<{ team: NHLTeamType }> = (props: {
  team: NHLTeamType;
}) => {
  const { team } = props;
  const { mapState, mapDispatch } = useMapContext();
  const { sport, activeTeam } = mapState;
  if (team === "CGY" || team === "WIN") {
    return (
      <>
        <div
          className={cn("rounded border-2 py-0.5", {
            [NHLstyleData[team].primaryBackground]: true,
            [NHLstyleData[team].secondaryBorder]: true,
          })}
        >
          <p
            className={cn("px-1 py-0.5", {
              [NHLstyleData[team].simpleText]: true,
            })}
          >
            <span className="font-bold">NHL: </span>
            {NHLArenaData[team].location} {NHLArenaData[team].name}
          </p>
          <p
            className={cn("px-1 py-0.5", {
              [NHLstyleData[team].simpleText]: true,
            })}
          >
            <span className="font-bold">AHL: </span>
            {AHLArenaData[`AHL-${team}`].location}{" "}
            {AHLArenaData[`AHL-${team}`].name}
          </p>
        </div>
        <p className={cn("rounded px-1 py-0.5")}>
          <span className="font-bold">ECHL: </span>
          {ECHLArenaData[`ECHL-${team}`].location}{" "}
          {ECHLArenaData[`ECHL-${team}`].name}
        </p>
        {sport == "Hockey" && (
          <div className="flex w-full justify-center">
            <Button
              variant="ghost"
              size="xs"
              onClick={() => {
                mapDispatch({
                  type: "SET_ACTIVE_TEAM",
                  payload: {
                    team: activeTeam
                      ? undefined
                      : { league: "NHL", team: team },
                  },
                });
              }}
            >
              {activeTeam === undefined ? "Show Path" : "Hide Path"}
            </Button>
          </div>
        )}
      </>
    );
  } else {
    return <></>;
  }
};
