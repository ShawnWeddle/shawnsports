import { useState } from "react";
import { cn } from "~/utils/cn";
import { NHLteamData, type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { StanleyCupData, EastData, WestData } from "~/data/NHL/StanleyCupData";
import { nameMatcher, nhlTeamPreNames } from "~/utils/nhl";
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
import { Card, CardDescription, CardHeader } from "../ui/card";

type TableModeType = "Stanley Cups" | "Eastern" | "Western";

const StanleyCupSeriesList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<AllNHLTeamType | null>(null);
  const [tableMode, setTableMode] = useState<TableModeType>("Stanley Cups");

  const activeData = (input: TableModeType) => {
    switch (input) {
      case "Stanley Cups":
        return StanleyCupData;
      case "Eastern":
        return EastData;
      case "Western":
        return WestData;
    }
  };

  const stanleyCups = (team: AllNHLTeamType | null, inModal: boolean) =>
    activeData(tableMode)
      .filter((game) => {
        if (!team) return true;
        const isTeam = nameMatcher(team, game.winningTeam, game.losingTeam);
        return isTeam;
      })
      .map((series, index) => {
        const { year, splits, winningTeam, losingTeam } = series;
        if (year === 2005) {
          return (
            <TableRow
              key={index}
              className={cn("odd:bg-nhl/10 hover:bg-nhl/20", {
                "text-sm": inModal,
              })}
            >
              <TableCell className="px-1 text-center font-semibold">
                {year}
              </TableCell>
              <TableCell colSpan={3} className="py-1 text-center font-semibold">
                No 2004-05 NHL season
              </TableCell>
            </TableRow>
          );
        }

        return (
          <TableRow
            key={index}
            className={cn("odd:bg-nhl/10 hover:bg-nhl/20", {
              "text-sm": inModal,
            })}
          >
            <TableCell className="px-1 text-center font-semibold">
              {year}
              {year === 2021 && tableMode !== "Stanley Cups" && "*"}
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
                    [NHLstyleData[winningTeam].primaryBGstyle]: true,
                    [NHLstyleData[winningTeam].secondaryBorderStyle]: true,
                    [NHLstyleData[winningTeam].primaryPlainText]: true,
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
                    {NHLteamData[winningTeam].location}
                  </div>
                  <div className="whitespace-nowrap">
                    {NHLteamData[winningTeam].name}
                  </div>
                </div>
              </button>
            </TableCell>
            <TableCell className="whitespace-nowrap px-1 text-center font-semibold">
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
                    [NHLstyleData[losingTeam].primaryBGstyle]: true,
                    [NHLstyleData[losingTeam].secondaryBorderStyle]: true,
                    [NHLstyleData[losingTeam].primaryPlainText]: true,
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
                    {NHLteamData[losingTeam].location}
                  </div>
                  <div className="whitespace-nowrap">
                    {NHLteamData[losingTeam].name}
                  </div>
                </div>
              </button>
            </TableCell>
          </TableRow>
        );
      });

  const modalNamer = (
    inputTeam: AllNHLTeamType | null,
    inputMode: TableModeType
  ) => {
    if (inputTeam) {
      const teamName = nhlTeamPreNames(inputTeam);
      const final =
        inputMode === "Stanley Cups"
          ? "Stanley Cups"
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
            <TableBody>{stanleyCups(activeTeam, true)}</TableBody>
          </table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Stanley Cup Champions
      </h1>
      <Tabs defaultValue="Stanley Cups">
        <TabsList className="grid w-full grid-cols-3 bg-nhl">
          <TabsTrigger
            className="text-white"
            value="Stanley Cups"
            onClick={() => {
              setTableMode("Stanley Cups");
            }}
          >
            Stanley Cups
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
          <TableBody>{stanleyCups(null, false)}</TableBody>
        </Table>
      </Tabs>
      <Card className="m-2">
        <CardHeader>
          <CardDescription>
            The Eastern Conference was called the Prince of Wales Conference
            from 1982-93
          </CardDescription>
          <CardDescription>
            The Western Conference was called the Clarence Campbell Conference
            from 1982-93
          </CardDescription>
          <CardDescription>
            The 2021 playoffs were not separated by conference
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default StanleyCupSeriesList;
