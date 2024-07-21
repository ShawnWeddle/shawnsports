import { useState } from "react";
import { cn } from "~/utils/cn";
import { NBAteamData, type AllNBATeamType } from "~/data/NBApickData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NBAFinalsData } from "~/data/NBA/NBAFinalsData";
import {
  EasternChampData,
  WesternChampData,
} from "~/data/NBA/ConferenceChampData";
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

type TableModeType = "Finals" | "Eastern" | "Western";

const NBAFinalsList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllNBATeamType | null>(null);
  const [tableMode, setTableMode] = useState<TableModeType>("Finals");

  const activeData = (input: TableModeType) => {
    switch (input) {
      case "Finals":
        return NBAFinalsData;
      case "Eastern":
        return EasternChampData;
      case "Western":
        return WesternChampData;
    }
  };

  const nbaFinals = (team: AllNBATeamType | null, inModal: boolean) =>
    activeData(tableMode)
      .filter((game) => {
        if (!team) return true;
        let isTeam = false;
        if ([game.losingTeam, game.winningTeam].includes(team)) {
          isTeam = true;
        }
        if (
          (team === "LAL" &&
            [game.losingTeam, game.winningTeam].includes("MNL")) ||
          (team === "MNL" &&
            [game.losingTeam, game.winningTeam].includes("LAL"))
        ) {
          isTeam = true;
        }
        if (
          (team === "PHI" &&
            [game.losingTeam, game.winningTeam].includes("SYR")) ||
          (team === "SYR" &&
            [game.losingTeam, game.winningTeam].includes("PHI"))
        ) {
          isTeam = true;
        }
        if (
          (team === "DET" &&
            [game.losingTeam, game.winningTeam].includes("FWP")) ||
          (team === "FWP" &&
            [game.losingTeam, game.winningTeam].includes("DET"))
        ) {
          isTeam = true;
        }
        if (
          (team === "ATL" &&
            [game.losingTeam, game.winningTeam].includes("STL")) ||
          (team === "STL" &&
            [game.losingTeam, game.winningTeam].includes("ATL"))
        ) {
          isTeam = true;
        }
        if (
          (team === "OKC" &&
            [game.losingTeam, game.winningTeam].includes("SEA")) ||
          (team === "SEA" &&
            [game.losingTeam, game.winningTeam].includes("OKC"))
        ) {
          isTeam = true;
        }
        if (
          (team === "WSB" &&
            [game.losingTeam, game.winningTeam].includes("BAL")) ||
          (team === "BAL" &&
            [game.losingTeam, game.winningTeam].includes("WSB"))
        ) {
          isTeam = true;
        }
        if (
          (team === "GSW" &&
            [game.losingTeam, game.winningTeam].includes("PHW")) ||
          (team === "PHW" &&
            [game.losingTeam, game.winningTeam].includes("SFW")) ||
          (team === "SFW" &&
            [game.losingTeam, game.winningTeam].includes("GSW")) ||
          (team === "GSW" &&
            [game.losingTeam, game.winningTeam].includes("SFW")) ||
          (team === "PHW" &&
            [game.losingTeam, game.winningTeam].includes("GSW")) ||
          (team === "SFW" &&
            [game.losingTeam, game.winningTeam].includes("PHW"))
        ) {
          isTeam = true;
        }
        return isTeam;
      })
      .map((series, index) => {
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
                    [NBAstyleData[winningTeam].primaryBGstyle]: true,
                    [NBAstyleData[winningTeam].secondaryBorderStyle]: true,
                    [NBAstyleData[winningTeam].primaryPlainText]: true,
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
                    {NBAteamData[winningTeam].location}
                  </div>
                  <div>{NBAteamData[winningTeam].name}</div>
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
                    [NBAstyleData[losingTeam].primaryBGstyle]: true,
                    [NBAstyleData[losingTeam].secondaryBorderStyle]: true,
                    [NBAstyleData[losingTeam].primaryPlainText]: true,
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
                    {NBAteamData[losingTeam].location}
                  </div>
                  <div>{NBAteamData[losingTeam].name}</div>
                </div>
              </button>
            </TableCell>
          </TableRow>
        );
      });

  const modalNamer = (
    inputTeam: AllNBATeamType | null,
    inputMode: TableModeType
  ) => {
    if (inputTeam) {
      const teamName = NBAteamData[inputTeam].name;
      const final =
        inputMode === "Finals"
          ? "Finals"
          : inputMode === "Eastern"
          ? "Eastern" + " Finals"
          : "Western" + " Finals";
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
            <TableBody>{nbaFinals(activeTeam, true)}</TableBody>
          </table>
        </DialogModalContent>
      </Dialog>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NBA Champions
        </h1>
      </div>
      <Tabs defaultValue="Finals">
        <TabsList className="grid w-full grid-cols-3 bg-nba">
          <TabsTrigger
            className="text-white"
            value="Finals"
            onClick={() => {
              setTableMode("Finals");
            }}
          >
            Finals
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="Eastern"
            onClick={() => {
              setTableMode("Eastern");
            }}
          >
            Eastern
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="Western"
            onClick={() => {
              setTableMode("Western");
            }}
          >
            Western
          </TabsTrigger>
        </TabsList>
        <Table className="w-full sm:w-auto">
          <TableHeader>
            <TableRowNoHover>
              <TableHead>Year</TableHead>
              <TableHead>Winning Team</TableHead>
              <TableHead>Games</TableHead>
              <TableHead>Losing Team</TableHead>
            </TableRowNoHover>
          </TableHeader>
          <TableBody>{nbaFinals(null, false)}</TableBody>
        </Table>
      </Tabs>
    </>
  );
};

export default NBAFinalsList;

/*
{["OKC", "SEA"].includes(activeTeam) && "Thunder / Supersonics"}
              {["PHI", "SYR"].includes(activeTeam) && "76ers"}
              {!["OKC", "SEA", "PHI", "SYR"].includes(activeTeam) &&
                NBAteamData[activeTeam].name}{" "}
*/
