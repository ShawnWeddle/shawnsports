import { useState } from "react";
import { cn } from "~/lib/utils";
import { NBAteamData, TeamNameEnum } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { AllNBAPicks } from "~/data/NBA/AllNBApicks";
import type { PickType } from "~/data/NBA/AllNBApicks";
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

  const activePickNotes = activePick?.notes.map((note, index) => {
    return <p key={index}>{note}</p>;
  });

  const NBArows = Object.entries(AllNBAPicks).map((teamPicks, rowIndex) => {
    const activeTeamCode = TeamNameEnum.parse(teamPicks[0]);
    const activeTeamPicks = teamPicks[1];
    const NBAcells = Object.values(activeTeamPicks).map((picks, cellIndex) => {
      const activePicks = picks.map((pick, pickIndex) => {
        return (
          <button
            key={`pick-${rowIndex}-${cellIndex}-${pickIndex}`}
            className={cn(
              "border-x-2 first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2",
              NBAstyleData[pick.nativeTeam]?.primaryBackground,
              NBAstyleData[pick.nativeTeam]?.simpleText,
              NBAstyleData[pick.nativeTeam]?.secondaryBorder,
              {
                "font-bold italic": pick.swap !== undefined,
              }
            )}
            onClick={() => {
              setActivePick(pick);
              setDialogOpen(true);
            }}
          >
            {pick.nativeTeam}
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
      const teamLocation = NBAteamData[nativeTeam].location;
      const teamName = NBAteamData[nativeTeam].name;
      return (
        <span>
          {year}{" "}
          <span
            className={cn("rounded border-b border-r px-1 py-0.5", {
              [NBAstyleData[nativeTeam].primaryBackground]: true,
              [NBAstyleData[nativeTeam].secondaryBorder]: true,
              [NBAstyleData[nativeTeam].simpleText]: true,
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
            {activePickNotes}
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
                <TableHead className="px-0">2025</TableHead>
                <TableHead className="px-0">2026</TableHead>
                <TableHead className="px-0">2027</TableHead>
                <TableHead className="px-0">2028</TableHead>
                <TableHead className="px-0">2029</TableHead>
                <TableHead className="px-0">2030</TableHead>
                <TableHead className="px-0">2031</TableHead>
                <TableHead className="px-0">2032</TableHead>
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
