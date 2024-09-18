import { useState } from "react";
import { cn } from "~/lib/utils";
import { NBAteamData, type AllNBATeamType } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NBAFinalsData } from "~/data/NBA/NBAFinalsData";
import {
  EasternChampData,
  WesternChampData,
} from "~/data/NBA/ConferenceChampData";
import { nameMatcher, nbaTeamPreNames } from "~/utils/nba";
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
        const isTeam = nameMatcher(team, game.winningTeam, game.losingTeam);
        return isTeam;
      })
      .map((series, index) => {
        const { year, score, winningTeam, losingTeam } = series;
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
                  [NBAstyleData[winningTeam]?.primaryBackground],
                  [NBAstyleData[winningTeam]?.secondaryBorder],
                  [NBAstyleData[winningTeam]?.simpleText]
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
                  [NBAstyleData[losingTeam]?.primaryBackground],
                  [NBAstyleData[losingTeam]?.secondaryBorder],
                  [NBAstyleData[losingTeam]?.simpleText]
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
      const teamName = nbaTeamPreNames(inputTeam);
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
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        NBA Champions
      </h1>
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
              <TableHead className="hidden"></TableHead>
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
