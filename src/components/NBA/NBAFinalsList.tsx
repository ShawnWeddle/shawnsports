import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { NBAteamData, type AllNBATeamType } from "~/data/NBApickData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NBAFinalsData } from "~/data/NBA/NBAFinalsData";

const NBAFinalsList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllNBATeamType | null>(null);

  const nbaFinals = (team: AllNBATeamType | null) =>
    NBAFinalsData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "LAL" &&
          [game.losingTeam, game.winningTeam].includes("MNL")) ||
        (team === "MNL" && [game.losingTeam, game.winningTeam].includes("LAL"))
      ) {
        isTeam = true;
      }
      if (
        (team === "PHI" &&
          [game.losingTeam, game.winningTeam].includes("SYR")) ||
        (team === "SYR" && [game.losingTeam, game.winningTeam].includes("PHI"))
      ) {
        isTeam = true;
      }
      if (
        (team === "DET" &&
          [game.losingTeam, game.winningTeam].includes("FWP")) ||
        (team === "FWP" && [game.losingTeam, game.winningTeam].includes("DET"))
      ) {
        isTeam = true;
      }
      if (
        (team === "ATL" &&
          [game.losingTeam, game.winningTeam].includes("STL")) ||
        (team === "STL" && [game.losingTeam, game.winningTeam].includes("ATL"))
      ) {
        isTeam = true;
      }
      if (
        (team === "OKC" &&
          [game.losingTeam, game.winningTeam].includes("SEA")) ||
        (team === "SEA" && [game.losingTeam, game.winningTeam].includes("OKC"))
      ) {
        isTeam = true;
      }
      if (
        (team === "WSB" &&
          [game.losingTeam, game.winningTeam].includes("BAL")) ||
        (team === "BAL" && [game.losingTeam, game.winningTeam].includes("WSB"))
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
        (team === "SFW" && [game.losingTeam, game.winningTeam].includes("PHW"))
      ) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, splits, winningTeam, losingTeam } = series;
      return (
        <tr key={index} className="even:bg-nba/10">
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
                  [NBAstyleData[winningTeam].primaryBGstyle]: true,
                  [NBAstyleData[winningTeam].secondaryBorderStyle]: true,
                  [NBAstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {NBAteamData[winningTeam].location}{" "}
              {NBAteamData[winningTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(winningTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [NBAstyleData[winningTeam].primaryBGstyle]: true,
                  [NBAstyleData[winningTeam].secondaryBorderStyle]: true,
                  [NBAstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {NBAteamData[winningTeam].name}
            </button>
          </td>
          <td className="px-1 text-center font-semibold">{splits}</td>
          <td>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                {
                  [NBAstyleData[losingTeam].primaryBGstyle]: true,
                  [NBAstyleData[losingTeam].secondaryBorderStyle]: true,
                  [NBAstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {NBAteamData[losingTeam].location} {NBAteamData[losingTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [NBAstyleData[losingTeam].primaryBGstyle]: true,
                  [NBAstyleData[losingTeam].secondaryBorderStyle]: true,
                  [NBAstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {NBAteamData[losingTeam].name}
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
              {["OKC", "SEA"].includes(activeTeam) && "Thunder / Supersonics"}
              {["PHI", "SYR"].includes(activeTeam) && "76ers"}
              {!["OKC", "SEA", "PHI", "SYR"].includes(activeTeam) &&
                NBAteamData[activeTeam].name}{" "}
              Finals
            </h1>
            <table>
              <tbody>{nbaFinals(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NBA Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nba text-white">
          <tr>
            <th>Year</th>
            <th>Winning Team</th>
            <th>Games</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{nbaFinals(null)}</tbody>
      </table>
    </>
  );
};

export default NBAFinalsList;
