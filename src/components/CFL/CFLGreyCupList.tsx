import { useState } from "react";
import { cn } from "~/utils/cn";
import { CFLteamData, type AllCFLTeamType } from "~/data/CFL/CFLdata";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { GreyCupData } from "~/data/CFL/GreyCupData";
import { cflTeamPreNames } from "~/utils/cfl";
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

const GreyCupList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllCFLTeamType | null>(null);

  const greyCups = (team: AllCFLTeamType | null, inModal: boolean) =>
    GreyCupData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, score, winningTeam, losingTeam } = series;

      if (year === 2020) {
        return (
          <tr
            key={index}
            className={cn("odd:bg-cfl/10 hover:bg-cfl/20", {
              "text-sm": inModal,
            })}
          >
            <td className="px-1 text-center font-semibold">{year}</td>
            <td colSpan={3} className="py-1 text-center font-semibold">
              No 2020 CFL season
            </td>
          </tr>
        );
      }

      return (
        <TableRow
          key={index}
          className={cn("odd:bg-cfl/10 hover:bg-cfl/20", {
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
                  [CFLstyleData[winningTeam].primaryBGstyle]: true,
                  [CFLstyleData[winningTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[winningTeam].primaryPlainText]: true,
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
                  {CFLteamData[winningTeam].location}
                </div>
                <div className="whitespace-nowrap">
                  {CFLteamData[winningTeam].name}
                </div>
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
                  [CFLstyleData[losingTeam].primaryBGstyle]: true,
                  [CFLstyleData[losingTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[losingTeam].primaryPlainText]: true,
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
                  {CFLteamData[losingTeam].location}
                </div>
                <div className="whitespace-nowrap">
                  {CFLteamData[losingTeam].name}
                </div>
              </div>
            </button>
          </TableCell>
        </TableRow>
      );
    });

  const modalNamer = (inputTeam: AllCFLTeamType | null) => {
    if (inputTeam) {
      const teamName = cflTeamPreNames(inputTeam);
      return teamName + "  Grey Cups";
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
            <TableBody>{greyCups(activeTeam, true)}</TableBody>
          </Table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Grey Cup Champions
      </h1>
      <div className="flex justify-center">
        <div>
          <Table className="w-full sm:w-auto">
            <TableHeader>
              <TableRowNoHover>
                <TableHead>Year</TableHead>
                <TableHead>Winning Team</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Losing Team</TableHead>
              </TableRowNoHover>
            </TableHeader>
            <TableBody>{greyCups(null, false)}</TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default GreyCupList;
