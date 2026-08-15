import { cn } from "~/lib/utils";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRowNoHover,
} from "~/components/ui/table";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { sortedBaseballTeams, type SortType } from "~/utils/sortBaseballMinors";
import { MLBstyleData } from "~/styles/MLBstyleData";
import {
  MLBFieldData,
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "../ui/card";

type AfilRowProps = {
  team: MLBTeamType;
  key: number;
};

const BaseballMinorList: React.FC = () => {
  const [tableSort, setTableSort] = useState<SortType>({
    league: "MLB",
    field: "Alphabet",
    down: true,
  });

  const AfilRow: React.FC<AfilRowProps> = (props: AfilRowProps) => {
    const { team, key } = props;
    return (
      <TableRowNoHover key={key} className={cn("odd:bg-mlb/10")}>
        <TableCell className="px-1">
          <button
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
      <Card className="hidden justify-center gap-2 p-2 sm:flex">
        <div className="font-semibold">Sort by: </div>
        <fieldset className="flex gap-2">
          <div>
            <input
              type="radio"
              id="Alphabet"
              checked={tableSort.field === "Alphabet"}
              onClick={() => {
                setTableSort({ ...tableSort, field: "Alphabet" });
              }}
            />
            <label htmlFor="Alphabet">Alphabetically</label>
          </div>
          <div>
            <input
              type="radio"
              id="Latitude"
              checked={tableSort.field === "Latitude"}
              onClick={() => {
                setTableSort({ ...tableSort, field: "Latitude" });
              }}
            />
            <label htmlFor="Latitude">Latitude</label>
          </div>
          <div>
            <input
              type="radio"
              id="Longitude"
              checked={tableSort.field === "Longitude"}
              onClick={() => {
                setTableSort({ ...tableSort, field: "Longitude" });
              }}
            />
            <label htmlFor="Longitude">Longitude</label>
          </div>
        </fieldset>
      </Card>
      <Table>
        <TableHeader>
          <TableRowNoHover>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  if (tableSort.league === "MLB") {
                    setTableSort({ ...tableSort, down: !tableSort.down });
                  } else {
                    setTableSort({ ...tableSort, league: "MLB" });
                  }
                }}
                className="flex w-full justify-center"
              >
                MLB
                {tableSort.league === "MLB" && tableSort.down && (
                  <ChevronDown />
                )}
                {tableSort.league === "MLB" && !tableSort.down && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  if (tableSort.league === "AAA") {
                    setTableSort({ ...tableSort, down: !tableSort.down });
                  } else {
                    setTableSort({ ...tableSort, league: "AAA" });
                  }
                }}
                className="flex w-full justify-center"
              >
                AAA
                {tableSort.league === "AAA" && tableSort.down && (
                  <ChevronDown />
                )}
                {tableSort.league === "AAA" && !tableSort.down && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  if (tableSort.league === "AA") {
                    setTableSort({ ...tableSort, down: !tableSort.down });
                  } else {
                    setTableSort({ ...tableSort, league: "AA" });
                  }
                }}
                className="flex w-full justify-center"
              >
                AA
                {tableSort.league === "AA" && tableSort.down && <ChevronDown />}
                {tableSort.league === "AA" && !tableSort.down && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  if (tableSort.league === "HA") {
                    setTableSort({ ...tableSort, down: !tableSort.down });
                  } else {
                    setTableSort({ ...tableSort, league: "HA" });
                  }
                }}
                className="flex w-full justify-center"
              >
                High-A
                {tableSort.league === "HA" && tableSort.down && <ChevronDown />}
                {tableSort.league === "HA" && !tableSort.down && <ChevronUp />}
              </button>
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              <button
                onClick={() => {
                  if (tableSort.league === "SA") {
                    setTableSort({ ...tableSort, down: !tableSort.down });
                  } else {
                    setTableSort({ ...tableSort, league: "SA" });
                  }
                }}
                className="flex w-full justify-center"
              >
                Single-A
                {tableSort.league === "SA" && tableSort.down && <ChevronDown />}
                {tableSort.league === "SA" && !tableSort.down && <ChevronUp />}
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
