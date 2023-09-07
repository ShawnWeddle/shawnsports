import { NBAteamData } from "~/data/NBApickData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { cn } from "~/utils/cn";
import { NBAFinalsData } from "~/data/NBA/NBAFinalsData";

const NBAFinalsList: React.FC = () => {
  const nbaFinals = NBAFinalsData.map((series, index) => {
    const { year, splits, winningTeam, losingTeam } = series;
    return (
      <tr key={index} className="even:bg-nba/10">
        <td className="px-1 text-center font-semibold">{year}</td>
        <td>
          <button
            className={cn(
              "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [NBAstyleData[winningTeam].primaryBGstyle]: true,
                [NBAstyleData[winningTeam].secondaryBorderStyle]: true,
                [NBAstyleData[winningTeam].primaryPlainText]: true,
              }
            )}
          >
            {NBAteamData[winningTeam].location} {NBAteamData[winningTeam].name}
          </button>
          <button
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
        <td className="text-center font-semibold">{splits}</td>
        <td>
          <button
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
        <tbody>{nbaFinals}</tbody>
      </table>
    </>
  );
};

export default NBAFinalsList;
