import { useState } from "react";
import { cn } from "~/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";
import { nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { AHLstyleData } from "~/styles/AHLstyleData";
import { ECHLstyleData } from "~/styles/ECHLstyleData";
import {
  NHLArenaData,
  AHLArenaData,
  ECHLArenaData,
} from "~/data/NHL/HockeyArenaData";
import { getAHLafils, getECHLafils } from "~/utils/getHockeyAfils";

const HockeyAfilTable: React.FC = () => {
  const rows = nhlTeamsRanked
    .toSorted((a, b) => {
      return a > b ? 1 : -1;
    })
    .map((team, index) => {
      const nhlTeamData = NHLArenaData[team];
      const ahlTeamData = AHLArenaData[`AHL-${team}`];
      const echlTeamData =
        team === "CBJ" || team === "UTA"
          ? undefined
          : ECHLArenaData[`ECHL-${team}`];
      return (
        <TableRowNoHover key={team + index.toString()}>
          <TableCell>
            <div
              className={cn("m-1 rounded border-2 p-0.5 text-center", {
                [NHLstyleData[team].primaryBackground]: true,
                [NHLstyleData[team].secondaryBorder]: true,
                [NHLstyleData[team].simpleText]: true,
              })}
            >
              <span className="whitespace-nowrap">{nhlTeamData.location}</span>{" "}
              <span className="whitespace-nowrap">{nhlTeamData.name}</span>
            </div>
          </TableCell>
          <TableCell>
            <div
              className={cn("m-1 rounded border-2 p-0.5 text-center", {
                [AHLstyleData[getAHLafils(`AHL-${team}`)].primaryBackground]:
                  true,
                [AHLstyleData[getAHLafils(`AHL-${team}`)].secondaryBorder]:
                  true,
                [AHLstyleData[getAHLafils(`AHL-${team}`)].simpleText]: true,
              })}
            >
              <span className="whitespace-nowrap">{ahlTeamData.location}</span>{" "}
              <span className="whitespace-nowrap">{ahlTeamData.name}</span>
            </div>
          </TableCell>
          {team !== "CBJ" && team !== "UTA" && (
            <TableCell>
              <div
                className={cn("m-1 rounded border-2 p-0.5 text-center", {
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)]
                    .primaryBackground]: true,
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)].secondaryBorder]:
                    true,
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)].simpleText]:
                    true,
                })}
              >
                <span className="whitespace-nowrap">
                  {echlTeamData?.location}
                </span>{" "}
                <span className="whitespace-nowrap">{echlTeamData?.name}</span>
              </div>
            </TableCell>
          )}
        </TableRowNoHover>
      );
    });

  return (
    <Table>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default HockeyAfilTable;
