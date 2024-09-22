import { useState } from "react";
import { cn } from "~/lib/utils";
import { type UniversalFinalsType } from "~/types/ChampTypes";
import { type SportType } from "~/data/SiteData";
import {
  champInfo,
  activeData,
  GlobalSportData,
  modalNamer,
} from "~/data/universal/champData";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

type TableModeType = 0 | 1 | 2;

interface ChampProps {
  sport: SportType;
}

const ChampionshipList: React.FC<ChampProps> = (props: ChampProps) => {
  const { sport } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<string | null>(null);
  const [tableMode, setTableMode] = useState<TableModeType>(0);

  type ChampRowProps = UniversalFinalsType & {
    index: number;
    inModal: boolean;
  };

  const ChampRow: React.FC<ChampRowProps> = (props: ChampRowProps) => {
    const {
      winningTeam,
      losingTeam,
      score,
      year,
      index,
      romanNumeral,
      wonChamp,
      inModal,
    } = props;

    const winningInfo = champInfo(winningTeam, sport);
    const losingInfo = champInfo(losingTeam, sport);

    if (sport === "NHL" && year === 2005) {
      return (
        <TableRow
          key={"NHL-2005"}
          className={cn("odd:bg-nhl/10 hover:bg-nhl/20", {
            "text-sm": inModal,
          })}
        >
          <TableCell></TableCell>
          <TableCell
            className={cn(
              "hidden px-1 text-center font-semibold sm:table-cell",
              {
                "hidden sm:hidden": inModal,
              }
            )}
          >
            {year}
          </TableCell>
          <TableCell colSpan={3}>
            <div className="flex justify-center p-1 font-semibold">
              No 2004-05 NHL season
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (sport === "CFL" && year === 2020) {
      return (
        <TableRow
          key={"CFL-2020"}
          className={cn("odd:bg-cfl/10 hover:bg-cfl/20", {
            "text-sm": inModal,
          })}
        >
          <TableCell></TableCell>
          <TableCell
            className={cn(
              "hidden px-1 text-center font-semibold sm:table-cell",
              {
                "hidden sm:hidden": inModal,
              }
            )}
          >
            {year}
          </TableCell>
          <TableCell colSpan={3}>
            <div className="flex justify-center p-1 font-semibold">
              No 2020 CFL season
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (sport === "MLB" && year === 1994) {
      return (
        <TableRow
          key={"MLB-1994"}
          className={cn("odd:bg-mlb/10 hover:bg-mlb/20", {
            "text-sm": inModal,
          })}
        >
          <TableCell></TableCell>
          <TableCell
            className={cn(
              "hidden px-1 text-center font-semibold sm:table-cell",
              {
                "hidden sm:hidden": inModal,
              }
            )}
          >
            {year}
          </TableCell>
          <TableCell colSpan={3}>
            <div className="flex justify-center p-1 font-semibold">
              No 1994 MLB Playoffs
            </div>
          </TableCell>
        </TableRow>
      );
    }

    return (
      <TableRow
        key={index}
        className={cn("", {
          "text-sm": inModal,
          "odd:bg-cfl/10 hover:bg-cfl/20": sport === "CFL",
          "odd:bg-mlb/10 hover:bg-mlb/20": sport === "MLB",
          "odd:bg-mls/10 hover:bg-mls/20": sport === "MLS",
          "odd:bg-nba/10 hover:bg-nba/20": sport === "NBA" || sport === "WNBA",
          "odd:bg-nfl/10 hover:bg-nfl/20": sport === "NFL",
          "odd:bg-nhl/10 hover:bg-nhl/20": sport === "NHL",
        })}
      >
        <TableCell className="px-1 text-center font-semibold">
          <div className="flex flex-col">
            <div>{romanNumeral}</div>
            <div
              className={cn("sm:hidden", {
                "table-cell sm:table-cell": inModal,
              })}
            >
              {year}
            </div>
          </div>
        </TableCell>
        <TableCell
          className={cn("hidden px-1 text-center font-semibold sm:table-cell", {
            "hidden sm:hidden": inModal,
          })}
        >
          {year}
        </TableCell>
        <TableCell className="px-1">
          <button
            onClick={() => {
              setActiveTeam(winningTeam);
              setDialogOpen(true);
            }}
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [winningInfo.style.primaryBackground]: true,
                [winningInfo.style.secondaryBorder]: true,
                [winningInfo.style.simpleText]: true,
              }
            )}
          >
            <div
              className={cn(
                "flex flex-col justify-center sm:flex-row sm:gap-1",
                {
                  "sm:flex-col": inModal,
                }
              )}
            >
              <div className="whitespace-nowrap">{winningInfo.location}</div>
              <div className="whitespace-nowrap">{winningInfo.name}</div>
            </div>
          </button>
        </TableCell>
        <TableCell className="whitespace-nowrap px-1 text-center font-semibold">
          {score}
        </TableCell>
        <TableCell className="px-1">
          <button
            onClick={() => {
              setActiveTeam(losingTeam);
              setDialogOpen(true);
            }}
            className={cn(
              "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [losingInfo.style.primaryBackground]: true,
                [losingInfo.style.secondaryBorder]: true,
                [losingInfo.style.simpleText]: true,
              }
            )}
          >
            <div
              className={cn(
                "flex flex-col justify-center sm:flex-row sm:gap-1",
                {
                  "sm:flex-col": inModal,
                }
              )}
            >
              <div className="whitespace-nowrap">{losingInfo.location}</div>
              <div className="whitespace-nowrap">{losingInfo.name}</div>
            </div>
          </button>
        </TableCell>
      </TableRow>
    );
  };

  const championships = (team: string | null, inModal: boolean) => {
    return activeData(sport, team, tableMode).map((game, index) => {
      const { romanNumeral, wonChamp, score, winningTeam, losingTeam, year } =
        game;
      return (
        <ChampRow
          key={index}
          index={index}
          winningTeam={winningTeam}
          losingTeam={losingTeam}
          score={score}
          year={year}
          romanNumeral={romanNumeral}
          wonChamp={wonChamp}
          inModal={inModal}
        />
      );
    });
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          if (isOpen === true) return;
          setDialogOpen(false);
        }}
      >
        <DialogModalContent
          title={modalNamer(sport, activeTeam, tableMode)}
          description=""
        >
          <table>
            <tbody>{championships(activeTeam, true)}</tbody>
          </table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        {GlobalSportData[sport].title}
      </h1>
      <Tabs defaultValue="0">
        <TabsList
          className={cn("grid w-full grid-cols-3", {
            "bg-mlb": sport === "MLB",
            "bg-nba": sport === "NBA",
            "bg-nhl": sport === "NHL",
            "bg-nfl": sport === "NFL",
            hidden: sport === "WNBA" || sport === "CFL" || sport === "MLS",
          })}
        >
          <TabsTrigger
            className="text-white"
            value="0"
            onClick={() => {
              setTableMode(0);
            }}
          >
            {GlobalSportData[sport].finalNames[0]}
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="1"
            onClick={() => {
              setTableMode(1);
            }}
          >
            {GlobalSportData[sport].finalNames[1]}
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="2"
            onClick={() => {
              setTableMode(2);
            }}
          >
            {GlobalSportData[sport].finalNames[2]}
          </TabsTrigger>
        </TabsList>
        <Table>
          <TableHeader>
            <TableRowNoHover>
              <TableHead className="hidden sm:inline-block"></TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Winning Team</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Losing Team</TableHead>
            </TableRowNoHover>
          </TableHeader>
          <TableBody>{championships(null, false)}</TableBody>
        </Table>
      </Tabs>
    </>
  );
};

export default ChampionshipList;
