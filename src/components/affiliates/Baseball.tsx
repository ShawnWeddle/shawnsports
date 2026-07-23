import { cn } from "~/lib/utils";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";
import { mlbTeamsRanked, type MLBTeamType } from "~/data/MLB/MLBdata";
import {
  sortedBaseballTeams,
  type BaseballDirectionType,
} from "~/utils/sortBaseballMinors";
import { MLBstyleData } from "~/styles/MLBstyleData";
import {
  MLBFieldData,
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";
import { ChevronDown, ChevronUp } from "lucide-react";

type AfilRowProps = {
  team: MLBTeamType;
  key: number;
};

const BaseballMinorList: React.FC = () => {
  const [tableSort, setTableSort] = useState<BaseballDirectionType>("MLB_A-Z");

  const AfilRow: React.FC<AfilRowProps> = (props: AfilRowProps) => {
    const { team, key } = props;
    return (
      <TableRowNoHover key={key} className={cn("odd:bg-mlb/10")}>
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [MLBstyleData[team].primaryBackground]: true,
                [MLBstyleData[team].secondaryBorder]: true,
                [MLBstyleData[team].simpleText]: true,
              }
            )}
          >
            <div className={cn("flex flex-col justify-center gap-1")}>
              <div className="whitespace-nowrap">
                {MLBFieldData[team].location}
              </div>
              <div className="whitespace-nowrap">{MLBFieldData[team].name}</div>
            </div>
          </button>
        </TableCell>
        <TableCell className="hidden px-1 sm:table-cell">
          <button
            className={cn(
              "w-full px-1 text-center font-semibold sm:inline-block"
            )}
          >
            <div className={cn("flex flex-col justify-center gap-1")}>
              <div className="whitespace-nowrap">
                {AAAFieldData[`AAA-${team}`].location}
              </div>
              <div className="whitespace-nowrap">
                {AAAFieldData[`AAA-${team}`].name}
              </div>
            </div>
          </button>
        </TableCell>
        <TableCell className="hidden px-1 sm:table-cell">
          <button
            className={cn(
              "w-full px-1 text-center font-semibold sm:inline-block"
            )}
          >
            <div className={cn("flex flex-col justify-center gap-1")}>
              <div className="whitespace-nowrap">
                {AAFieldData[`AA-${team}`].location}
              </div>
              <div className="whitespace-nowrap">
                {AAFieldData[`AA-${team}`].name}
              </div>
            </div>
          </button>
        </TableCell>
        <TableCell className="hidden px-1 sm:table-cell">
          <button
            className={cn(
              "w-full px-1 text-center font-semibold sm:inline-block"
            )}
          >
            <div className={cn("flex flex-col justify-center gap-1")}>
              <div className="whitespace-nowrap">
                {HAFieldData[`HA-${team}`].location}
              </div>
              <div className="whitespace-nowrap">
                {HAFieldData[`HA-${team}`].name}
              </div>
            </div>
          </button>
        </TableCell>
        <TableCell className="hidden px-1 sm:table-cell">
          <button
            className={cn(
              "w-full px-1 text-center font-semibold sm:inline-block"
            )}
          >
            <div className={cn("flex flex-col justify-center gap-1")}>
              <div className="whitespace-nowrap">
                {SAFieldData[`SA-${team}`].location}
              </div>
              <div className="whitespace-nowrap">
                {SAFieldData[`SA-${team}`].name}
              </div>
            </div>
          </button>
        </TableCell>
        <TableCell className="px-1 sm:hidden">
          <Table>
            <TableBody>
              <TableRowNoHover>
                <TableCell>AAA: </TableCell>
                <TableCell>
                  {" "}
                  {AAAFieldData[`AAA-${team}`].location}{" "}
                  {AAAFieldData[`AAA-${team}`].name}
                </TableCell>
              </TableRowNoHover>
              <TableRowNoHover>
                <TableCell>AA: </TableCell>
                <TableCell>
                  {" "}
                  {AAFieldData[`AA-${team}`].location}{" "}
                  {AAFieldData[`AA-${team}`].name}
                </TableCell>
              </TableRowNoHover>
              <TableRowNoHover>
                <TableCell className="whitespace-nowrap">High-A: </TableCell>
                <TableCell>
                  {" "}
                  {HAFieldData[`HA-${team}`].location}{" "}
                  {HAFieldData[`HA-${team}`].name}
                </TableCell>
              </TableRowNoHover>
              <TableRowNoHover>
                <TableCell className="whitespace-nowrap pr-2">
                  Single-A:{" "}
                </TableCell>
                <TableCell>
                  {" "}
                  {SAFieldData[`SA-${team}`].location}{" "}
                  {SAFieldData[`SA-${team}`].name}
                </TableCell>
              </TableRowNoHover>
            </TableBody>
          </Table>
        </TableCell>
      </TableRowNoHover>
    );
  };

  const allTeams = () => {
    return sortedBaseballTeams(tableSort).map((team, index) => {
      return <AfilRow key={index} team={team} />;
    });
  };

  return (
    <>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        MLB Affiliates
      </h1>
      <Table>
        <TableHeader>
          <TableRowNoHover>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  setTableSort(tableSort === "MLB_A-Z" ? "MLB_Z-A" : "MLB_A-Z");
                }}
                className="flex w-full justify-center"
              >
                MLB
                {tableSort === "MLB_A-Z" && <ChevronDown />}
                {tableSort === "MLB_Z-A" && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  setTableSort(tableSort === "AAA_A-Z" ? "AAA_Z-A" : "AAA_A-Z");
                }}
                className="flex w-full justify-center"
              >
                AAA
                {tableSort === "AAA_A-Z" && <ChevronDown />}
                {tableSort === "AAA_Z-A" && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  setTableSort(tableSort === "AA_A-Z" ? "AA_Z-A" : "AA_A-Z");
                }}
                className="flex w-full justify-center"
              >
                AA
                {tableSort === "AA_A-Z" && <ChevronDown />}
                {tableSort === "AA_Z-A" && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  setTableSort(tableSort === "HA_A-Z" ? "HA_Z-A" : "HA_A-Z");
                }}
                className="flex w-full justify-center"
              >
                High-A
                {tableSort === "HA_A-Z" && <ChevronDown />}
                {tableSort === "HA_Z-A" && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  setTableSort(tableSort === "SA_A-Z" ? "SA_Z-A" : "SA_A-Z");
                }}
                className="flex w-full justify-center"
              >
                Single-A
                {tableSort === "SA_A-Z" && <ChevronDown />}
                {tableSort === "SA_Z-A" && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="sm:hidden">Parent Team</TableHead>
            <TableHead className="sm:hidden">Affiliates</TableHead>
          </TableRowNoHover>
        </TableHeader>
        <TableBody>{allTeams()}</TableBody>
      </Table>
    </>
  );
};

export default BaseballMinorList;
