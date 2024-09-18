import { useState } from "react";
import { cn } from "~/lib/utils";
import { NFLteamData, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "~/data/NFL/ConferenceChampData";
import { nameMatcher, nflTeamPreNames } from "~/utils/nfl";
import { type UniversalFinalsType } from "~/types/ChampTypes";
import { type SportType } from "~/data/SiteData";
import { champInfo, activeData } from "~/data/universal/champData";
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

    return (
      <TableRow
        key={index}
        className={cn("odd:bg-nfl/10 hover:bg-nfl/20", {
          "text-sm": inModal,
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
              <div>{winningInfo.name}</div>
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
              <div>{losingInfo.name}</div>
            </div>
          </button>
        </TableCell>
      </TableRow>
    );
  };

  const championships = (team: string | null, inModal: boolean) =>
    activeData(sport, tableMode).map((game, index) => {
      const { romanNumeral, wonChamp, score, winningTeam, losingTeam, year } =
        game;
      return (
        <ChampRow
          key={index}
          winningTeam={winningTeam}
          losingTeam={losingTeam}
          score={score}
          year={year}
          romanNumeral={romanNumeral}
          wonChamp={wonChamp}
          index={index}
          inModal={inModal}
        />
      );
    });

  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          if (isOpen === true) return;
          setDialogOpen(false);
        }}
      >
        <DialogModalContent title="" description="">
          <table>
            <tbody>{championships(activeTeam, true)}</tbody>
          </table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        NFL Champions
      </h1>
      <Tabs defaultValue="Finals">
        <TabsList className="grid w-full grid-cols-3 border border-nfl bg-nfl">
          <TabsTrigger
            className="text-white"
            value="Finals"
            onClick={() => {
              setTableMode(0);
            }}
          >
            Finals
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="AFC"
            onClick={() => {
              setTableMode(1);
            }}
          >
            AFC
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="NFC"
            onClick={() => {
              setTableMode(2);
            }}
          >
            NFC
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
