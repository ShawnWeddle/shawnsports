import { useState } from "react";
import { cn } from "~/lib/utils";
import { NBAteamData, TeamNameEnum } from "~/data/NBA/NBAdata";
import { NBAstyleDataFull } from "~/data/NBA/NBAstyleData";
import { AllNBAPicks } from "~/data/NBA/AllNBApicks";
import { AllNBAPicks2, type PickType } from "~/data/NBA/nbaPickBreakdown";
import { pickNoteCreator } from "~/utils/nba";
// import type { PickType } from "~/data/NBA/AllNBApicks";
import { Dialog, DialogTitle, DialogContent, DialogHeader } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

const NBApickTable: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activePick, setActivePick] = useState<PickType | null>(null);

  const NBArows = Object.entries(AllNBAPicks2).map((teamPicks, rowIndex) => {
    const activeTeamCode = TeamNameEnum.parse(teamPicks[0]);
    const activeTeamPicks = teamPicks[1];
    const NBAcells = Object.values(activeTeamPicks).map((picks, cellIndex) => {
      const activePicks = picks.map((pick, pickIndex) => {
        const activeTeam = pick.nativeTeam;
        const { swap } = pick;
        return (
          <button
            key={`pick-${rowIndex}-${cellIndex}-${pickIndex}`}
            className={cn(
              "border-x-2 first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2",
              NBAstyleDataFull[activeTeam]?.primaryBackground,
              NBAstyleDataFull[activeTeam]?.simpleText,
              NBAstyleDataFull[activeTeam]?.secondaryBorder,
              {
                "font-bold": swap && swap[0] === "positive",
                lowercase: swap && swap[0] === "negative",
              }
            )}
            onClick={() => {
              setActivePick(pick);
              setDialogOpen(true);
            }}
          >
            {activeTeam !== "NBA" ? activeTeam : "+++"}
          </button>
        );
      });
      return (
        <TableCell
          key={`cell-${rowIndex}-${cellIndex}`}
          className="px-px py-1 text-center align-top last:pr-1 sm:px-0.5"
        >
          {activePicks.length > 0 && (
            <div className="flex flex-col">{activePicks}</div>
          )}
        </TableCell>
      );
    });
    return (
      <TableRow
        key={`row-${rowIndex}`}
        className="odd:bg-nba/10 hover:bg-nba/20"
      >
        <TableCell className="hidden px-2 sm:block">
          {NBAteamData[activeTeamCode].location}{" "}
          {NBAteamData[activeTeamCode].name}
        </TableCell>
        <TableCell className="px-2 sm:hidden">
          {NBAteamData[activeTeamCode].nickName ??
            NBAteamData[activeTeamCode].name}
        </TableCell>
        {NBAcells}
      </TableRow>
    );
  });

  const modalNamer = (inputPick: PickType | null) => {
    if (inputPick) {
      const { year, nativeTeam } = inputPick;
      if (nativeTeam === "NBA") {
        return (
          <span>
            {year}{" "}
            <span
              className={cn("rounded border-b border-r px-1 py-0.5", {
                [NBAstyleDataFull[nativeTeam].primaryBackground]: true,
                [NBAstyleDataFull[nativeTeam].secondaryBorder]: true,
                [NBAstyleDataFull[nativeTeam].simpleText]: true,
              })}
            >
              NBA
            </span>{" "}
            First Round Pick
          </span>
        );
      }
      const teamLocation = NBAteamData[nativeTeam].location;
      const teamName = NBAteamData[nativeTeam].name;
      return (
        <span>
          {year}{" "}
          <span
            className={cn("rounded border-b border-r px-1 py-0.5", {
              [NBAstyleDataFull[nativeTeam].primaryBackground]: true,
              [NBAstyleDataFull[nativeTeam].secondaryBorder]: true,
              [NBAstyleDataFull[nativeTeam].simpleText]: true,
            })}
          >
            {teamLocation + " " + teamName}
          </span>{" "}
          First Round Pick
        </span>
      );
    } else {
      return <span></span>;
    }
  };

  return (
    <>
      {activePick && (
        <Dialog
          open={dialogOpen}
          onOpenChange={(isOpen) => {
            if (isOpen === true) return;
            setDialogOpen(false);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{modalNamer(activePick)}</DialogTitle>
            </DialogHeader>
            {pickNoteCreator(activePick).map((note, index) => {
              return <p key={index}>{note}</p>;
            })}
          </DialogContent>
        </Dialog>
      )}
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold sm:text-4xl">
        Future NBA First Round Picks
      </h1>
      <div className="flex justify-center">
        <div>
          <Table className="w-full sm:w-auto">
            <TableHeader>
              <TableRowNoHover>
                <TableHead className="px-0">Team</TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2026
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2027
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2028
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2029
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2030
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2031
                </TableHead>
                <TableHead className="hidden px-0 sm:table-cell">
                  2032
                </TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}26</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}27</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}28</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}29</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}30</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}31</TableHead>
                <TableHead className="px-0 sm:hidden">{"'"}32</TableHead>
              </TableRowNoHover>
            </TableHeader>
            <TableBody className="text-xs sm:text-base">{NBArows}</TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default NBApickTable;

/*
            {pick.swap && pick.swap === "positive" && "⭡"}
            {pick.swap && pick.swap === "negative" && "⭣"}
            {pick.swap && pick.swap === "neutral" && "-"}
*/
