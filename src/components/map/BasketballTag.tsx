import { cn } from "~/lib/utils";
import { useMapContext } from "~/hooks/useMap";
import type { NBATeamLeagueParent } from "~/utils/getBasketballArc";
import { NBAArenaData, NGLArenaData } from "~/data/NBA/BasketballArenaData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { Button } from "../ui/button";

export const BasketballTag: React.FC<NBATeamLeagueParent> = (
  props: NBATeamLeagueParent
) => {
  const { team, parentTeam } = props;
  const { league } = team;
  const { mapState, mapDispatch } = useMapContext();
  const { sport, activeTeam } = mapState;
  if (parentTeam) {
    return (
      <>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "NBA",
            [NBAstyleData[parentTeam].primaryBackground]: league === "NBA",
            [NBAstyleData[parentTeam].secondaryBorder]: league === "NBA",
            [NBAstyleData[parentTeam].simpleText]: league === "NBA",
          })}
        >
          <span className="font-bold">NBA: </span>
          {NBAArenaData[parentTeam].location} {NBAArenaData[parentTeam].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "NGL",
            [NBAstyleData[parentTeam].primaryBackground]: league === "NGL",
            [NBAstyleData[parentTeam].secondaryBorder]: league === "NGL",
            [NBAstyleData[parentTeam].simpleText]: league === "NGL",
          })}
        >
          <span className="font-bold">G League: </span>
          {NGLArenaData[`NGL-${parentTeam}`].location}{" "}
          {NGLArenaData[`NGL-${parentTeam}`].name}
        </p>
        {sport == "Basketball" && (
          <div className="flex w-full justify-center">
            <Button
              variant="ghost"
              size="xs"
              onClick={() => {
                mapDispatch({
                  type: "SET_ACTIVE_TEAM",
                  payload: { team: activeTeam ? undefined : team },
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
