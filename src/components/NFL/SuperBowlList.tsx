import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { AFCChampData, NFCChampData } from "~/data/NFL/ConferenceChampData";
import { nameMatcher } from "~/utils/nfl";

type TableModeType = "Super Bowls" | "AFC" | "NFC";

const SuperBowlList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

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
      <fieldset className="rounded-xl border p-2">
        <div className="flex justify-start">
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
        <div className="flex justify-start">
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

  const superBowls = (team: AllNFLTeamType | null) =>
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
            </td>
            <td className="hidden px-1 text-center font-semibold sm:table-cell">
              {year}
            </td>
            <td>
              <button
                onClick={() => {
                  setActiveTeam(winningTeam);
                  dialog.current?.showModal();
                }}
                className={cn(
                  "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                  {
                    [NFLstyleData[winningTeam].primaryBGstyle]: true,
                    [NFLstyleData[winningTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[winningTeam].primaryPlainText]: true,
                  }
                )}
              >
                {NFLteamData[winningTeam].location}{" "}
                {NFLteamData[winningTeam].name}
              </button>
              <button
                onClick={() => {
                  setActiveTeam(winningTeam);
                  dialog.current?.showModal();
                }}
                className={cn(
                  "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                  {
                    [NFLstyleData[winningTeam].primaryBGstyle]: true,
                    [NFLstyleData[winningTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[winningTeam].primaryPlainText]: true,
                  }
                )}
              >
                {NFLteamData[winningTeam].name}
              </button>
            </td>
            <td className="whitespace-nowrap px-1 text-center font-semibold">
              {score}
            </td>
            <td>
              <button
                onClick={() => {
                  setActiveTeam(losingTeam);
                  dialog.current?.showModal();
                }}
                className={cn(
                  "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                  {
                    [NFLstyleData[losingTeam].primaryBGstyle]: true,
                    [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[losingTeam].primaryPlainText]: true,
                  }
                )}
              >
                {NFLteamData[losingTeam].location}{" "}
                {NFLteamData[losingTeam].name}
              </button>
              <button
                onClick={() => {
                  setActiveTeam(losingTeam);
                  dialog.current?.showModal();
                }}
                className={cn(
                  "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                  {
                    [NFLstyleData[losingTeam].primaryBGstyle]: true,
                    [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
                    [NFLstyleData[losingTeam].primaryPlainText]: true,
                  }
                )}
              >
                {NFLteamData[losingTeam].name}
              </button>
            </td>
          </tr>
        );
      });

  return (
    <>
      <dialog
        ref={dialog}
        className="m-auto w-full max-w-screen-sm items-center rounded-xl align-middle backdrop:bg-gray-500/50"
      >
        <div className="flex w-full justify-end">
          <button
            onClick={() => {
              dialog.current?.close();
            }}
            className="font-semibold"
          >
            ✕
          </button>
        </div>
        {activeTeam && (
          <div className="flex flex-col items-center">
            <h1 className="mb-2 text-center text-2xl font-semibold">
              {NFLteamData[activeTeam].name} {tableMode}{" "}
              {tableMode === "Super Bowls" ? "" : " Championships"}
            </h1>
            <table>
              <tbody>{superBowls(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>

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
            <th></th>
            <th className="hidden sm:inline-block">Year</th>
            <th>Winning Team</th>
            <th>Score</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{superBowls(null)}</tbody>
      </table>
    </>
  );
};

export default SuperBowlList;
