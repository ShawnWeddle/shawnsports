import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData, type AllNFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";

const SuperBowlList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllNFLTeamType | null>(null);

  const superBowls = (team: AllNFLTeamType | null) =>
    SuperBowlData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "OAK" &&
          [game.losingTeam, game.winningTeam].includes("LRD")) ||
        (team === "LRD" && [game.losingTeam, game.winningTeam].includes("OAK"))
      ) {
        isTeam = true;
      }
      if (
        (team === "STL" &&
          [game.losingTeam, game.winningTeam].includes("LAR")) ||
        (team === "LAR" && [game.losingTeam, game.winningTeam].includes("STL"))
      ) {
        isTeam = true;
      }
      if (
        (team === "BCS" &&
          [game.losingTeam, game.winningTeam].includes("IND")) ||
        (team === "IND" && [game.losingTeam, game.winningTeam].includes("BCS"))
      ) {
        isTeam = true;
      }
      return isTeam;
    }).map((game, index) => {
      const { romanNumeral, score, winningTeam, losingTeam, year } = game;
      return (
        <tr key={index} className="even:bg-nfl/10">
          <td className="px-1 text-center font-semibold">{romanNumeral}</td>
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
              {NFLteamData[losingTeam].location} {NFLteamData[losingTeam].name}
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
              {NFLteamData[activeTeam].name} Super Bowls
            </h1>
            <table>
              <tbody>{superBowls(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>

      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Super Bowl Champions
        </h1>
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

/*
  const superBowls = SuperBowlData.map((game, index) => {
    const { romanNumeral, score, winningTeam, losingTeam, year } = game;
    return (
      <tr key={index} className="even:bg-nfl/10">
        <td className="px-1 text-center font-semibold">{romanNumeral}</td>
        <td className="px-1 text-center font-semibold">{year}</td>
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
            {NFLteamData[winningTeam].location} {NFLteamData[winningTeam].name}
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
            {NFLteamData[losingTeam].location} {NFLteamData[losingTeam].name}
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
*/
