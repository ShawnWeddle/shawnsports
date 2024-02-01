import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { MLBteamData, type AllMLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { WorldSeriesData } from "~/data/MLB/WorldSeriesData";

const WorldSeriesList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeam, setActiveTeam] = useState<AllMLBTeamType | null>(null);

  const worldSeries = (team: AllMLBTeamType | null) =>
    WorldSeriesData.filter((game) => {
      if (!team) return true;
      let isTeam = false;
      if ([game.losingTeam, game.winningTeam].includes(team)) {
        isTeam = true;
      }
      if (
        (team === "OAK" &&
          [game.losingTeam, game.winningTeam].includes("PHA")) ||
        (team === "PHA" && [game.losingTeam, game.winningTeam].includes("OAK"))
      ) {
        isTeam = true;
      }
      if (
        (team === "SFG" &&
          [game.losingTeam, game.winningTeam].includes("NYG")) ||
        (team === "NYG" && [game.losingTeam, game.winningTeam].includes("SFG"))
      ) {
        isTeam = true;
      }
      if (
        (team === "BAL" &&
          [game.losingTeam, game.winningTeam].includes("SLB")) ||
        (team === "SLB" && [game.losingTeam, game.winningTeam].includes("BAL"))
      ) {
        isTeam = true;
      }
      if (
        (team === "MIN" &&
          [game.losingTeam, game.winningTeam].includes("WAS")) ||
        (team === "WAS" && [game.losingTeam, game.winningTeam].includes("MIN"))
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
        (team === "BKR" && [game.losingTeam, game.winningTeam].includes("BKD"))
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
        (team === "BOB" && [game.losingTeam, game.winningTeam].includes("MLB"))
      ) {
        isTeam = true;
      }
      return isTeam;
    }).map((series, index) => {
      const { year, splits, winningTeam, losingTeam } = series;
      if (series.year === 1994) {
        return (
          <tr key={index} className="even:bg-mlb/10">
            <td className="px-1 text-center font-semibold">{year}</td>
            <td colSpan={3} className="py-1 text-center font-semibold">
              No World Series held in 1994
            </td>
          </tr>
        );
      }

      return (
        <tr key={index} className="even:bg-mlb/10">
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
                  [MLBstyleData[winningTeam].primaryBGstyle]: true,
                  [MLBstyleData[winningTeam].secondaryBorderStyle]: true,
                  [MLBstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {MLBteamData[winningTeam].location}{" "}
              {MLBteamData[winningTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(winningTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [MLBstyleData[winningTeam].primaryBGstyle]: true,
                  [MLBstyleData[winningTeam].secondaryBorderStyle]: true,
                  [MLBstyleData[winningTeam].primaryPlainText]: true,
                }
              )}
            >
              {MLBteamData[winningTeam].name}
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
                  [MLBstyleData[losingTeam].primaryBGstyle]: true,
                  [MLBstyleData[losingTeam].secondaryBorderStyle]: true,
                  [MLBstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {MLBteamData[losingTeam].location} {MLBteamData[losingTeam].name}
            </button>
            <button
              onClick={() => {
                setActiveTeam(losingTeam);
                dialog.current?.showModal();
              }}
              className={cn(
                "m-0.5 w-full rounded-lg border-2 px-1 text-center font-semibold sm:hidden",
                {
                  [MLBstyleData[losingTeam].primaryBGstyle]: true,
                  [MLBstyleData[losingTeam].secondaryBorderStyle]: true,
                  [MLBstyleData[losingTeam].primaryPlainText]: true,
                }
              )}
            >
              {MLBteamData[losingTeam].name}
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
              {MLBteamData[activeTeam].name} World Series
            </h1>
            <table>
              <tbody>{worldSeries(activeTeam)}</tbody>
            </table>
          </div>
        )}
      </dialog>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          World Series Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-mlb text-white">
          <tr>
            <th>Year</th>
            <th>Winning Team</th>
            <th>Games</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{worldSeries(null)}</tbody>
      </table>
    </>
  );
};

export default WorldSeriesList;
