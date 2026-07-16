import { cn } from "~/lib/utils";
import type { NBATeamType } from "~/data/NBA/NBAdata";
import { NBAArenaData, NGLArenaData } from "~/data/NBA/BasketballArenaData";
import { NBAstyleData } from "~/styles/NBAstyleData";

export const OKCTag: React.FC<{ team: NBATeamType }> = (props: {
  team: NBATeamType;
}) => {
  const { team } = props;
  if (team === "OKC") {
    return (
      <>
        <div
          className={cn("rounded border-2 py-0.5", {
            [NBAstyleData[team].primaryBackground]: true,
            [NBAstyleData[team].secondaryBorder]: true,
          })}
        >
          <p
            className={cn("px-1 py-0.5", {
              [NBAstyleData[team].simpleText]: true,
            })}
          >
            <span className="font-bold">NBA: </span>
            {NBAArenaData[team].location} {NBAArenaData[team].name}
          </p>
          <p
            className={cn("px-1 py-0.5", {
              [NBAstyleData[team].simpleText]: true,
            })}
          >
            <span className="font-bold">G Leaguen: </span>
            {NGLArenaData[`NGL-${team}`].location}{" "}
            {NGLArenaData[`NGL-${team}`].name}
          </p>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
