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
import { nhlTeamsRanked, type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/styles/NHLstyleData";
import { AHLstyleData } from "~/styles/AHLstyleData";
import { ECHLstyleData } from "~/styles/ECHLstyleData";
import {
  NHLArenaData,
  AHLArenaData,
  ECHLArenaData,
} from "~/data/NHL/HockeyArenaData";
import { getAHLafils, getECHLafils } from "~/utils/getHockeyAfils";

type AfilRowProps = {
  team: NHLTeamType;
  key: number;
};

const HockeyMinorList: React.FC = () => {
  const AfilRow: React.FC<AfilRowProps> = (props: AfilRowProps) => {
    const { team, key } = props;
    return (
      <TableRowNoHover
        key={key}
        className={cn("odd:bg-nhl/10 hover:bg-nhl/20")}
      >
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [NHLstyleData[team].primaryBackground]: true,
                [NHLstyleData[team].secondaryBorder]: true,
                [NHLstyleData[team].simpleText]: true,
              }
            )}
          >
            <div
              className={cn(
                "flex flex-col justify-center sm:flex-row sm:gap-1"
              )}
            >
              <div className="whitespace-nowrap">
                {NHLArenaData[team].location}
              </div>
              <div className="whitespace-nowrap">{NHLArenaData[team].name}</div>
            </div>
          </button>
        </TableCell>
        <TableCell className="px-1">
          <button
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [AHLstyleData[getAHLafils(`AHL-${team}`)].primaryBackground]:
                  true,
                [AHLstyleData[getAHLafils(`AHL-${team}`)].secondaryBorder]:
                  true,
                [AHLstyleData[getAHLafils(`AHL-${team}`)].simpleText]: true,
              }
            )}
          >
            <div
              className={cn(
                "flex flex-col justify-center sm:flex-row sm:gap-1"
              )}
            >
              <div className="whitespace-nowrap">
                {AHLArenaData[`AHL-${team}`].location}
              </div>
              <div className="whitespace-nowrap">
                {AHLArenaData[`AHL-${team}`].name}
              </div>
            </div>
          </button>
        </TableCell>
        <TableCell className="px-1">
          {team !== "CBJ" && team !== "UTA" && (
            <button
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                {
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)]
                    .primaryBackground]: true,
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)].secondaryBorder]:
                    true,
                  [ECHLstyleData[getECHLafils(`ECHL-${team}`)].simpleText]:
                    true,
                }
              )}
            >
              <div
                className={cn(
                  "flex flex-col justify-center sm:flex-row sm:gap-1"
                )}
              >
                <div className="whitespace-nowrap">
                  {ECHLArenaData[`ECHL-${team}`].location}
                </div>
                <div className="whitespace-nowrap">
                  {ECHLArenaData[`ECHL-${team}`].name}
                </div>
              </div>
            </button>
          )}
          {(team === "CBJ" || team === "UTA") && (
            <div className="text-center font-semibold">None</div>
          )}
        </TableCell>
      </TableRowNoHover>
    );
  };

  const allTeams = () => {
    return nhlTeamsRanked.toSorted().map((team, index) => {
      return <AfilRow key={index} team={team} />;
    });
  };

  return (
    <>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        NHL Affiliates
      </h1>
      <Table>
        <TableHeader>
          <TableRowNoHover>
            <TableHead>NHL</TableHead>
            <TableHead>AHL</TableHead>
            <TableHead>ECHL</TableHead>
          </TableRowNoHover>
        </TableHeader>
        <TableBody>{allTeams()}</TableBody>
      </Table>
    </>
  );
};

export default HockeyMinorList;
