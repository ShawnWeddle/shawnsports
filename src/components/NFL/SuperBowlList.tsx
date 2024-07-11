import { useState } from "react";
import { cn } from "~/utils/cn";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import { NFLteamData, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "~/data/NFL/ConferenceChampData";
import { nameMatcher } from "~/utils/nfl";

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

  const TableModeInputs: React.FC = () => {
    return (
      <fieldset className="rounded-xl border p-2 sm:flex sm:gap-1">
        <div className="flex justify-start sm:border-r">
          <input
            type="radio"
            id="superbowl"
            checked={tableMode === "Super Bowls"}
            onChange={() => {
              setTableMode("Super Bowls");
            }}
          />
          <label htmlFor="superbowl" className="px-1">
            Super Bowls
          </label>
        </div>
        <div className="flex justify-start sm:border-r">
          <input
            type="radio"
            id="AFC"
            checked={tableMode === "AFC"}
            onChange={() => {
              setTableMode("AFC");
            }}
          />
          <label htmlFor="AFC" className="px-1">
            AFC Championships
          </label>
        </div>
        <div className="flex justify-start">
          <input
            type="radio"
            id="NFC"
            checked={tableMode === "NFC"}
            onChange={() => {
              setTableMode("NFC");
            }}
          />
          <label htmlFor="NFC" className="px-1">
            NFC Championships
          </label>
        </div>
      </fieldset>
    );
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
          <tr key={index} className="even:bg-nfl/10">
            <td className="px-1 text-center font-semibold">
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
            </td>
            <td
              className={cn(
                "hidden px-1 text-center font-semibold sm:table-cell",
                {
                  "hidden sm:hidden": inModal,
                }
              )}
            >
              {year}
            </td>
            <td>
              <button
                onClick={() => {
                  setActiveTeam(winningTeam);
                  setDialogOpen(true);
                }}
                className={cn(
                  "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                  {
                    [NFLstyleData[winningTeam].primaryBGstyle]: true,
                    [NFLstyleData[winningTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[winningTeam].primaryPlainText]: true,
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
            </td>
            <td className="whitespace-nowrap px-1 text-center font-semibold">
              {score}
            </td>
            <td>
              <button
                onClick={() => {
                  setActiveTeam(losingTeam);
                  setDialogOpen(true);
                }}
                className={cn(
                  "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                  {
                    [NFLstyleData[losingTeam].primaryBGstyle]: true,
                    [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[losingTeam].primaryPlainText]: true,
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
            </td>
          </tr>
        );
      });

  const modalNamer = (
    inputTeam: AllNFLTeamType | null,
    inputMode: TableModeType
  ) => {
    if (inputTeam) {
      const teamName = NFLteamData[inputTeam].name;
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
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NFL Champions
        </h1>
      </div>
      <div className="my-2 flex w-full justify-center">
        <TableModeInputs />
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nfl text-white">
          <tr>
            <th className="hidden sm:inline-block"></th>
            <th>Year</th>
            <th>Winning Team</th>
            <th>Score</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{superBowls(null, false)}</tbody>
      </table>
    </>
  );
};

export default SuperBowlList;
