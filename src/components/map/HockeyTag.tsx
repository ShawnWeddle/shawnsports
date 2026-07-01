import { cn } from "~/lib/utils";
import type { NHLTeamLeagueParent } from "~/utils/getHockeyArc";
import {
  NHLArenaData,
  AHLArenaData,
  ECHLArenaData,
} from "~/data/NHL/HockeyArenaData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";

export const HockeyTag: React.FC<NHLTeamLeagueParent> = (
  props: NHLTeamLeagueParent
) => {
  const { league, parentTeam } = props;
  if (parentTeam) {
    return (
      <>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "NHL",
            [NHLstyleData[parentTeam].primaryBackground]: league === "NHL",
            [NHLstyleData[parentTeam].secondaryBorder]: league === "NHL",
            [NHLstyleData[parentTeam].simpleText]: league === "NHL",
          })}
        >
          <span className="font-bold">NHL: </span>
          {NHLArenaData[parentTeam].location} {NHLArenaData[parentTeam].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "AHL",
            [NHLstyleData[parentTeam].primaryBackground]: league === "AHL",
            [NHLstyleData[parentTeam].secondaryBorder]: league === "AHL",
            [NHLstyleData[parentTeam].simpleText]: league === "AHL",
          })}
        >
          <span className="font-bold">AHL: </span>
          {AHLArenaData[`AHL-${parentTeam}`].location}{" "}
          {AHLArenaData[`AHL-${parentTeam}`].name}
        </p>
        {parentTeam !== "CBJ" && parentTeam !== "UTA" && (
          <p
            className={cn("rounded px-1 py-0.5", {
              "border-2 py-1": league === "ECHL",
              [NHLstyleData[parentTeam].primaryBackground]: league === "ECHL",
              [NHLstyleData[parentTeam].secondaryBorder]: league === "ECHL",
              [NHLstyleData[parentTeam].simpleText]: league === "ECHL",
            })}
          >
            <span className="font-bold">ECHL: </span>
            {ECHLArenaData[`ECHL-${parentTeam}`].location}{" "}
            {ECHLArenaData[`ECHL-${parentTeam}`].name}
          </p>
        )}
      </>
    );
  } else {
    return <></>;
  }
};
