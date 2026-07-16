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
import { mlbTeamsRanked, type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/styles/MLBstyleData";
import {
  MLBFieldData,
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";

type AfilRowProps = {
  team: MLBTeamType;
  key: number;
};

const BaseballMinorList: React.FC = () => {
  const AfilRow: React.FC<AfilRowProps> = (props: AfilRowProps) => {
    const { team, key } = props;
    return (
      <TableRow key={key} className={cn("odd:bg-mlb/10 hover:bg-mlb/20")}>
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
        <TableCell className="px-1">
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
      </TableRow>
    );
  };

  const allTeams = () => {
    return mlbTeamsRanked.toSorted().map((team, index) => {
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
            <TableHead>Parent Team</TableHead>
            <TableHead>Affiliates</TableHead>
          </TableRowNoHover>
        </TableHeader>
        <TableBody>{allTeams()}</TableBody>
      </Table>
    </>
  );
};

export default BaseballMinorList;

/*
      <TableRow key={key} className={cn("odd:bg-mlb/10 hover:bg-mlb/20")}>
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
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block"
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
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block"
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
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block"
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
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block"
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
      </TableRow>
*/
