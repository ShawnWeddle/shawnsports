import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { WNBAteamData, type AllWNBATeamType } from "~/data/WNBA/WNBAdata";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { WNBAFinalsData } from "~/data/WNBA/WNBAFinalsData";

const WNBAFinalsList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllWNBATeamType | null>(null);

  const wnbaFinals = (team: AllWNBATeamType | null) =>
    WNBAFinalsData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "LVA" &&
          [game.losingTeam, game.winningTeam].includes("SAS")) ||
        (team === "SAS" && [game.losingTeam, game.winningTeam].includes("LVA"))
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
                  [WNBAstyleData[winningTeam].primaryBGstyle]: true,
                  [WNBAstyleData[winningTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {WNBAteamData[winningTeam].location}{" "}
              {WNBAteamData[winningTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(winningTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [WNBAstyleData[winningTeam].primaryBGstyle]: true,
                  [WNBAstyleData[winningTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {WNBAteamData[winningTeam].name}
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
                  [WNBAstyleData[losingTeam].primaryBGstyle]: true,
                  [WNBAstyleData[losingTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {WNBAteamData[losingTeam].location}{" "}
              {WNBAteamData[losingTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [WNBAstyleData[losingTeam].primaryBGstyle]: true,
                  [WNBAstyleData[losingTeam].secondaryBorderStyle]: true,
                  [WNBAstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {WNBAteamData[losingTeam].name}
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
              {WNBAteamData[activeTeam].name} Finals
            </h1>
            <table>
              <tbody>{wnbaFinals(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          WNBA Champions
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
        <tbody>{wnbaFinals(null)}</tbody>
      </table>
    </>
  );
};

export default WNBAFinalsList;
