import { MLBteamData } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { cn } from "~/utils/cn";
import { WorldSeriesData } from "~/data/MLB/WorldSeriesData";

const WorldSeriesList: React.FC = () => {
  const worldSeries = WorldSeriesData.map((series, index) => {
    const { year, splits, winningTeam, losingTeam } = series;
    return (
      <tr key={index} className="even:bg-mlb/10">
        <td className="px-1 text-center font-semibold">{year}</td>
        <td>
          <button
            className={cn(
              "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [MLBstyleData[winningTeam].primaryBGstyle]: true,
                [MLBstyleData[winningTeam].secondaryBorderStyle]: true,
                [MLBstyleData[winningTeam].primaryPlainText]: true,
              }
            )}
          >
            {MLBteamData[winningTeam].location} {MLBteamData[winningTeam].name}
          </button>
          <button
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
        <td className="text-center font-semibold">{splits}</td>
        <td>
          <button
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
        <tbody>{worldSeries}</tbody>
      </table>
    </>
  );
};

export default WorldSeriesList;
