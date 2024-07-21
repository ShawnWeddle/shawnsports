import { useState } from "react";
import { cn } from "~/utils/cn";
import { MLBteamData, type AllMLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import {
  WorldSeriesData,
  ALCSData,
  NLCSData,
} from "~/data/MLB/WorldSeriesData";
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

type TableModeType = "World Series" | "ALCS" | "NLCS";

const WorldSeriesList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllMLBTeamType | null>(null);
  const [tableMode, setTableMode] = useState<TableModeType>("World Series");

  const activeData = (input: TableModeType) => {
    switch (input) {
      case "World Series":
        return WorldSeriesData;
      case "ALCS":
        return ALCSData;
      case "NLCS":
        return NLCSData;
    }
  };

  const worldSeries = (team: AllMLBTeamType | null, inModal: boolean) =>
    activeData(tableMode)
      .filter((game) => {
        if (!team) return true;
        let isTeam = false;
        if ([game.losingTeam, game.winningTeam].includes(team)) {
          isTeam = true;
        }
        if (
          (team === "OAK" &&
            [game.losingTeam, game.winningTeam].includes("PHA")) ||
          (team === "PHA" &&
            [game.losingTeam, game.winningTeam].includes("OAK"))
        ) {
          isTeam = true;
        }
        if (
          (team === "SFG" &&
            [game.losingTeam, game.winningTeam].includes("NYG")) ||
          (team === "NYG" &&
            [game.losingTeam, game.winningTeam].includes("SFG"))
        ) {
          isTeam = true;
        }
        if (
          (team === "BAL" &&
            [game.losingTeam, game.winningTeam].includes("SLB")) ||
          (team === "SLB" &&
            [game.losingTeam, game.winningTeam].includes("BAL"))
        ) {
          isTeam = true;
        }
        if (
          (team === "MIN" &&
            [game.losingTeam, game.winningTeam].includes("WAS")) ||
          (team === "WAS" &&
            [game.losingTeam, game.winningTeam].includes("MIN"))
        ) {
          isTeam = true;
        }
        if (
          (team === "LAD" &&
            [game.losingTeam, game.winningTeam].includes("BKD")) ||
          (team === "BKD" &&
            [game.losingTeam, game.winningTeam].includes("BKR")) ||
          (team === "BKR" &&
            [game.losingTeam, game.winningTeam].includes("LAD")) ||
          (team === "LAD" &&
            [game.losingTeam, game.winningTeam].includes("BKR")) ||
          (team === "BKD" &&
            [game.losingTeam, game.winningTeam].includes("LAD")) ||
          (team === "BKR" &&
            [game.losingTeam, game.winningTeam].includes("BKD"))
        ) {
          isTeam = true;
        }
        if (
          (team === "ATL" &&
            [game.losingTeam, game.winningTeam].includes("MLB")) ||
          (team === "MLB" &&
            [game.losingTeam, game.winningTeam].includes("BOB")) ||
          (team === "BOB" &&
            [game.losingTeam, game.winningTeam].includes("ATL")) ||
          (team === "ATL" &&
            [game.losingTeam, game.winningTeam].includes("BOB")) ||
          (team === "MLB" &&
            [game.losingTeam, game.winningTeam].includes("ATL")) ||
          (team === "BOB" &&
            [game.losingTeam, game.winningTeam].includes("MLB"))
        ) {
          isTeam = true;
        }
        return isTeam;
      })
      .map((series, index) => {
        const { year, splits, winningTeam, losingTeam } = series;
        if (series.year === 1994) {
          return (
            <TableRow
              key={index}
              className={cn("odd:bg-mlb/10 hover:bg-mlb/20", {
                "text-sm": inModal,
              })}
            >
              <TableCell className="px-1 text-center font-semibold">
                {year}
              </TableCell>
              <TableCell colSpan={3} className="py-1 text-center font-semibold">
                No {tableMode} held in 1994
              </TableCell>
            </TableRow>
          );
        }

        return (
          <TableRow
            key={index}
            className={cn("odd:bg-mlb/10 hover:bg-mlb/20", {
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
                    [MLBstyleData[winningTeam].primaryBGstyle]: true,
                    [MLBstyleData[winningTeam].secondaryBorderStyle]: true,
                    [MLBstyleData[winningTeam].primaryPlainText]: true,
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
                    {MLBteamData[winningTeam].location}
                  </div>
                  <div>{MLBteamData[winningTeam].name}</div>
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
                    [MLBstyleData[losingTeam].primaryBGstyle]: true,
                    [MLBstyleData[losingTeam].secondaryBorderStyle]: true,
                    [MLBstyleData[losingTeam].primaryPlainText]: true,
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
                    {MLBteamData[losingTeam].location}
                  </div>
                  <div>{MLBteamData[losingTeam].name}</div>
                </div>
              </button>
            </TableCell>
          </TableRow>
        );
      });

  const modalNamer = (
    inputTeam: AllMLBTeamType | null,
    inputMode: TableModeType
  ) => {
    if (inputTeam) {
      const teamName = MLBteamData[inputTeam].name;
      const final = inputMode;
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
            <TableBody>{worldSeries(activeTeam, true)}</TableBody>
          </table>
        </DialogModalContent>
      </Dialog>

      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        World Series Champions
      </h1>

      <Tabs defaultValue="World Series">
        <TabsList className="grid w-full grid-cols-3 bg-mlb">
          <TabsTrigger
            className="text-white"
            value="World Series"
            onClick={() => {
              setTableMode("World Series");
            }}
          >
            World Series
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="ALCS"
            onClick={() => {
              setTableMode("ALCS");
            }}
          >
            ALCS
          </TabsTrigger>
          <TabsTrigger
            className="text-white"
            value="NLCS"
            onClick={() => {
              setTableMode("NLCS");
            }}
          >
            NLCS
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
          <TableBody>{worldSeries(null, false)}</TableBody>
        </Table>
      </Tabs>
    </>
  );
};

export default WorldSeriesList;
