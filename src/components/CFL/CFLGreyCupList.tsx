import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { CFLteamData, type AllCFLTeamType } from "~/data/CFL/CFLdata";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { GreyCupData } from "~/data/CFL/GreyCupData";

const GreyCupList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllCFLTeamType | null>(null);

  const greyCups = (team: AllCFLTeamType | null) =>
    GreyCupData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, score, winningTeam, losingTeam } = series;

      if (year === 2020) {
        return (
          <tr key={index} className="even:bg-cfl/10">
            <td className="px-1 text-center font-semibold">{year}</td>
            <td colSpan={3} className="py-1 text-center font-semibold">
              No 2020 CFL season
            </td>
          </tr>
        );
      }

      return (
        <tr key={index} className="even:bg-cfl/10">
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
                  [CFLstyleData[winningTeam].primaryBGstyle]: true,
                  [CFLstyleData[winningTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {CFLteamData[winningTeam].location}{" "}
              {CFLteamData[winningTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(winningTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [CFLstyleData[winningTeam].primaryBGstyle]: true,
                  [CFLstyleData[winningTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {CFLteamData[winningTeam].name}
            </button>
          </td>
          <td className="px-1 text-center font-semibold">{score}</td>
          <td>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
                {
                  [CFLstyleData[losingTeam].primaryBGstyle]: true,
                  [CFLstyleData[losingTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {CFLteamData[losingTeam].location} {CFLteamData[losingTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [CFLstyleData[losingTeam].primaryBGstyle]: true,
                  [CFLstyleData[losingTeam].secondaryBorderStyle]: true,
                  [CFLstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {CFLteamData[losingTeam].name}
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
              {CFLteamData[activeTeam].name} Grey Cups
            </h1>
            <table>
              <tbody>{greyCups(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Grey Cup Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-cfl text-white">
          <tr>
            <th>Year</th>
            <th>Winning Team</th>
            <th>Score</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{greyCups(null)}</tbody>
      </table>
    </>
  );
};

export default GreyCupList;
