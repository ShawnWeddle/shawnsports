import { useState } from "react";
import { cn } from "~/utils/cn";
import { WNBAteamData, type AllWNBATeamType } from "~/data/WNBA/WNBAdata";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { WNBAFinalsData } from "~/data/WNBA/WNBAFinalsData";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

const WNBAFinalsList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllWNBATeamType | null>(null);

  const wnbaFinals = (team: AllWNBATeamType | null, inModal: boolean) =>
    WNBAFinalsData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "LVA" &&
          [game.losingTeam, game.winningTeam].includes("SAS")) ||
        (team === "SAS" && [game.losingTeam, game.winningTeam].includes("LVA"))
      ) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, splits, winningTeam, losingTeam } = series;
      return (
        <TableRow
          key={index}
          className={cn("odd:bg-nba/10 hover:bg-nba/20", {
            "text-sm": inModal,
          })}
        >
          <TableCell className="px-1 text-center font-semibold">
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
                  [WNBAstyleData[winningTeam].primaryBGstyle]: true,
                  [WNBAstyleData[winningTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[winningTeam].primaryPlainText]: true,
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
                <div className="whitespace-nowrap">
                  {WNBAteamData[winningTeam].location}
                </div>
                <div>{WNBAteamData[winningTeam].name}</div>
              </div>
            </button>
          </TableCell>
          <TableCell className="px-1 text-center font-semibold">
            {splits}
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
                  [WNBAstyleData[losingTeam].primaryBGstyle]: true,
                  [WNBAstyleData[losingTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[losingTeam].primaryPlainText]: true,
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
                <div className="whitespace-nowrap">
                  {WNBAteamData[losingTeam].location}
                </div>
                <div>{WNBAteamData[losingTeam].name}</div>
              </div>
            </button>
          </TableCell>
        </TableRow>
      );
    });

  const modalNamer = (inputTeam: AllWNBATeamType | null) => {
    if (inputTeam) {
      const teamName = WNBAteamData[inputTeam].name;

      return teamName + "  Finals";
    } else {
      return "";
    }
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
        <DialogModalContent title={modalNamer(activeTeam)} description="">
          <Table>
            <TableBody>{wnbaFinals(activeTeam, true)}</TableBody>
          </Table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        WNBA Champions
      </h1>
      <div className="flex justify-center">
        <div>
          <Table className="w-full sm:w-auto">
            <TableHeader>
              <TableRowNoHover>
                <TableHead>Year</TableHead>
                <TableHead>Winning Team</TableHead>
                <TableHead>Games</TableHead>
                <TableHead>Losing Team</TableHead>
              </TableRowNoHover>
            </TableHeader>
            <TableBody>{wnbaFinals(null, false)}</TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default WNBAFinalsList;
