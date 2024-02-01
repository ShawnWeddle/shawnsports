import { useRef, useState } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
import { type SuperBowlType } from "~/types/ChampTypes";

const SuperLoserList: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeSuperBowl, setActiveSuperBowl] = useState<SuperBowlType | null>(
    null
  );

  const superLosers = SuperLoserData.map((player, index) => {
    const { firstName, lastName, losses } = player;
    const lossList = losses.map((loss, lIndex) => {
      const game = SuperBowlData[SuperBowlData.length - loss];
      if (!game) {
        return <></>;
      }
      const { losingTeam, romanNumeral } = game;
      return (
        <button
          key={lIndex}
          onClick={() => {
            setActiveSuperBowl(game);
            dialog.current?.showModal();
          }}
          className={cn(
            "w-full border-x-2 px-1 text-center font-semibold first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2 sm:m-0.5 sm:rounded-lg sm:border-y-2",
            {
              [NFLstyleData[losingTeam].primaryBGstyle]: true,
              [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
              [NFLstyleData[losingTeam].primaryPlainText]: true,
            }
          )}
        >
          {romanNumeral} - {NFLteamData[losingTeam].name}
        </button>
      );
    });
    return (
      <tr key={index} className="even:bg-nfl/10">
        <td className="px-1 text-center font-semibold">
          {firstName} {lastName}
        </td>
        <td>
          <div className="m-1 sm:m-0 sm:grid sm:grid-cols-3 sm:gap-1">
            {lossList}
          </div>
        </td>
      </tr>
    );
  });

  const singleGameLosersTable = (game: SuperBowlType) => {
    const activeLosers = SuperLoserData.filter((player) => {
      let didPlay = false;
      player.losses.forEach((loss) => {
        if (
          game.romanNumeral ===
          SuperBowlData[SuperBowlData.length - loss]?.romanNumeral
        ) {
          didPlay = true;
        }
      });
      return didPlay;
    });

    const activeTable = activeLosers.map((player, index) => {
      const { firstName, lastName, losses } = player;
      const lossList = losses.map((loss, lIndex) => {
        const game = SuperBowlData[SuperBowlData.length - loss];
        if (!game) {
          return <></>;
        }
        const { losingTeam, romanNumeral } = game;
        return (
          <button
            key={lIndex}
            className={cn(
              "w-full border-x-2 px-1 text-center font-semibold first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2 sm:m-0.5 sm:rounded-lg sm:border-y-2",
              {
                [NFLstyleData[losingTeam].primaryBGstyle]: true,
                [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
                [NFLstyleData[losingTeam].primaryPlainText]: true,
              }
            )}
          >
            {romanNumeral} - {NFLteamData[losingTeam].name}
          </button>
        );
      });

      return (
        <tr key={index} className="even:bg-nfl/10">
          <td className="px-1 text-center font-semibold">
            {firstName} {lastName}
          </td>
          <td>
            <div className="m-1">{lossList}</div>
          </td>
        </tr>
      );
    });
    return activeTable;
  };

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
        {activeSuperBowl && (
          <div className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-semibold">
              Super Bowl {activeSuperBowl?.romanNumeral}
            </h1>
            <p>
              {NFLteamData[activeSuperBowl.winningTeam].name}{" "}
              {activeSuperBowl.score}{" "}
              {NFLteamData[activeSuperBowl.losingTeam].name}
            </p>
            <table>
              <tbody>{singleGameLosersTable(activeSuperBowl)}</tbody>
            </table>
          </div>
        )}
      </dialog>

      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Super Losers
        </h1>
      </div>
      <div className="flex w-full justify-center">
        <p className="mb-4 w-96 text-center italic">
          *** Super Losers are players who have not won a Super Bowl, but have
          played in and lost Super Bowls with more than one team. ***
        </p>
      </div>
      <div>
        <p className="mb-4 w-96 text-center italic">
          *** Either Richie James of the Chiefs or Javon Hargrave of the 49ers
          will join this list after Super Bowl LVIII ***
        </p>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nfl text-white">
          <tr>
            <th>Player</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>{superLosers}</tbody>
      </table>
    </>
  );
};

export default SuperLoserList;
