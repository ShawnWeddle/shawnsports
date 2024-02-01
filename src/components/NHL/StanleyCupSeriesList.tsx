import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { NHLteamData, type AllNHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { StanleyCupData } from "~/data/NHL/StanleyCupData";

const StanleyCupSeriesList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllNHLTeamType | null>(null);

  const stanleyCups = (team: AllNHLTeamType | null) =>
    StanleyCupData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "DAL" &&
          [game.losingTeam, game.winningTeam].includes("MNS")) ||
        (team === "MNS" && [game.losingTeam, game.winningTeam].includes("DAL"))
      ) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, splits, winningTeam, losingTeam } = series;
      if (series.year === 2005) {
        return (
          <tr key={index} className="even:bg-mlb/10">
            <td className="px-1 text-center font-semibold">{year}</td>
            <td colSpan={3} className="py-1 text-center font-semibold">
              No 2004-05 NHL season
            </td>
          </tr>
        );
      }

      return (
        <tr key={index} className="even:bg-nhl/10">
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
                  [NHLstyleData[winningTeam].primaryBGstyle]: true,
                  [NHLstyleData[winningTeam].secondaryBorderStyle]: true,
                  [NHLstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {NHLteamData[winningTeam].location}{" "}
              {NHLteamData[winningTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(winningTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [NHLstyleData[winningTeam].primaryBGstyle]: true,
                  [NHLstyleData[winningTeam].secondaryBorderStyle]: true,
                  [NHLstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {NHLteamData[winningTeam].name}
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
                  [NHLstyleData[losingTeam].primaryBGstyle]: true,
                  [NHLstyleData[losingTeam].secondaryBorderStyle]: true,
                  [NHLstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {NHLteamData[losingTeam].location} {NHLteamData[losingTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [NHLstyleData[losingTeam].primaryBGstyle]: true,
                  [NHLstyleData[losingTeam].secondaryBorderStyle]: true,
                  [NHLstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {NHLteamData[losingTeam].name}
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
              {activeTeam === "MNS" ? "Stars" : NHLteamData[activeTeam].name}{" "}
              Stanley Cups
            </h1>
            <table>
              <tbody>{stanleyCups(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>

      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Stanley Cup Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nhl text-white">
          <tr>
            <th>Year</th>
            <th>Winning Team</th>
            <th>Games</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{stanleyCups(null)}</tbody>
      </table>
    </>
  );
};

export default StanleyCupSeriesList;
