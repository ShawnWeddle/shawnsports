import { useState } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "~/data/NFL/ConferenceChampData";
import { nameMatcher, nflTeamPreNames } from "~/utils/nfl";
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

type TableModeType = "Super Bowls" | "AFC" | "NFC";

const SuperBowlList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllNFLTeamType | null>(null);
  const [tableMode, setTableMode] = useState<TableModeType>("Super Bowls");

  const activeData = (input: TableModeType) => {
    switch (input) {
      case "Super Bowls":
        return SuperBowlData;
      case "AFC":
        return AFCChampData;
      case "NFC":
        return NFCChampData;
    }
  };

  const superBowls = (team: AllNFLTeamType | null, inModal: boolean) =>
    activeData(tableMode)
      .filter((game) => {
        if (!team) return true;
        const isTeam = nameMatcher(team, game.winningTeam, game.losingTeam);
        return isTeam;
      })
      .map((game, index) => {
        const { romanNumeral, wonSB, score, winningTeam, losingTeam, year } =
          game;
        return (
          <TableRow
            key={index}
            className={cn("odd:bg-nfl/10 hover:bg-nfl/20", {
              "text-sm": inModal,
            })}
          >
            <TableCell className="px-1 text-center font-semibold">
              <div className="flex flex-col">
                <div>
                  {romanNumeral}
                  {wonSB ? (
                    team ? (
                      nameMatcher(team, winningTeam) ? (
                        <p className="text-amber-400">★</p>
                      ) : (
                        ""
                      )
                    ) : (
                      <p className="text-amber-400">★</p>
                    )
                  ) : (
                    ""
                  )}
                </div>
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
              className={cn(
                "hidden px-1 text-center font-semibold sm:table-cell",
                {
                  "hidden sm:hidden": inModal,
                }
              )}
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
                    [NFLstyleData[winningTeam].primaryBackground]: true,
                    [NFLstyleData[winningTeam].secondaryBorder]: true,
                    [NFLstyleData[winningTeam].simpleText]: true,
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
                    {NFLteamData[winningTeam].location}
                  </div>
                  <div>{NFLteamData[winningTeam].name}</div>
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
                    [NFLstyleData[losingTeam].primaryBackground]: true,
                    [NFLstyleData[losingTeam].secondaryBorder]: true,
                    [NFLstyleData[losingTeam].simpleText]: true,
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
                    {NFLteamData[losingTeam].location}
                  </div>
                  <div>{NFLteamData[losingTeam].name}</div>
                </div>
              </button>
            </TableCell>
          </TableRow>
        );
      });

  const modalNamer = (
    inputTeam: AllNFLTeamType | null,
    inputMode: TableModeType
  ) => {
    if (inputTeam) {
      const teamName = nflTeamPreNames(inputTeam);
      const final =
        inputMode === "Super Bowls"
          ? "Super Bowls"
          : inputMode === "AFC"
          ? "AFC" + " Championships"
          : "NFC" + " Championships";
      return teamName + " " + final;
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
        <DialogModalContent
          title={modalNamer(activeTeam, tableMode)}
          description=""
        >
          <table>
            <tbody>{superBowls(activeTeam, true)}</tbody>
          </table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        NFL Champions
      </h1>
      <Tabs defaultValue="Super Bowls">
        <TabsList className="grid w-full grid-cols-3 border border-nfl bg-nfl">
          <TabsTrigger
            className="text-white"
            value="Super Bowls"
            onClick={() => {
              setTableMode("Super Bowls");
            }}
          >
            Super Bowls
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="AFC"
            onClick={() => {
              setTableMode("AFC");
            }}
          >
            AFC
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="NFC"
            onClick={() => {
              setTableMode("NFC");
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
          <TableBody>{superBowls(null, false)}</TableBody>
        </Table>
      </Tabs>
    </>
  );
};

export default SuperBowlList;
