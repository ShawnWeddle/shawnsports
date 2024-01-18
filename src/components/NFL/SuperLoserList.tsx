import { cn } from "~/utils/cn";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
import { sNames } from "~/data/NFL/SOLnames";

const SuperLoserList: React.FC = () => {
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

  return (
    <>
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
