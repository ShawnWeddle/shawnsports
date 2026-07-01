import type { MLBTeamLeagueParent } from "~/utils/getBaseballArc";
import {
  MLBFieldData,
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { cn } from "~/lib/utils";

export const BaseballTag: React.FC<MLBTeamLeagueParent> = (
  props: MLBTeamLeagueParent
) => {
  const { league, parentTeam } = props;
  if (parentTeam) {
    return (
      <>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "MLB",
            [MLBstyleData[parentTeam].primaryBackground]: league === "MLB",
            [MLBstyleData[parentTeam].secondaryBorder]: league === "MLB",
            [MLBstyleData[parentTeam].simpleText]: league === "MLB",
          })}
        >
          <span className="font-bold">MLB: </span>
          {MLBFieldData[parentTeam].location} {MLBFieldData[parentTeam].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "AAA",
            [MLBstyleData[parentTeam].primaryBackground]: league === "AAA",
            [MLBstyleData[parentTeam].secondaryBorder]: league === "AAA",
            [MLBstyleData[parentTeam].simpleText]: league === "AAA",
          })}
        >
          <span className="font-bold">AAA: </span>
          {AAAFieldData[`AAA-${parentTeam}`].location}{" "}
          {AAAFieldData[`AAA-${parentTeam}`].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "AA",
            [MLBstyleData[parentTeam].primaryBackground]: league === "AA",
            [MLBstyleData[parentTeam].secondaryBorder]: league === "AA",
            [MLBstyleData[parentTeam].simpleText]: league === "AA",
          })}
        >
          <span className="font-bold">AA: </span>
          {AAFieldData[`AA-${parentTeam}`].location}{" "}
          {AAFieldData[`AA-${parentTeam}`].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "HA",
            [MLBstyleData[parentTeam].primaryBackground]: league === "HA",
            [MLBstyleData[parentTeam].secondaryBorder]: league === "HA",
            [MLBstyleData[parentTeam].simpleText]: league === "HA",
          })}
        >
          <span className="font-bold">High-A: </span>
          {HAFieldData[`HA-${parentTeam}`].location}{" "}
          {HAFieldData[`HA-${parentTeam}`].name}
        </p>
        <p
          className={cn("rounded px-1 py-0.5", {
            "border-2 py-1": league === "SA",
            [MLBstyleData[parentTeam].primaryBackground]: league === "SA",
            [MLBstyleData[parentTeam].secondaryBorder]: league === "SA",
            [MLBstyleData[parentTeam].simpleText]: league === "SA",
          })}
        >
          <span className="font-bold">Single-A: </span>
          {SAFieldData[`SA-${parentTeam}`].location}{" "}
          {SAFieldData[`SA-${parentTeam}`].name}
        </p>
      </>
    );
  } else {
    return <></>;
  }
};
