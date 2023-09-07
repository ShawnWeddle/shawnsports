import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { cn } from "~/utils/cn";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";

const SuperBowlList: React.FC = () => {
  const superBowls = SuperBowlData.map((series, index) => {
    const { romanNumeral, score, winningTeam, losingTeam } = series;
    return (
      <tr key={index} className="even:bg-nfl/10">
        <td className="px-1 text-center font-semibold">{romanNumeral}</td>
        <td>
          <button
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
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Super Bowl Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nfl text-white">
          <tr>
            <th></th>
            <th>Winning Team</th>
            <th>Score</th>
            <th>Losing Team</th>
          </tr>
        </thead>
        <tbody>{superBowls}</tbody>
      </table>
    </>
  );
};

export default SuperBowlList;
