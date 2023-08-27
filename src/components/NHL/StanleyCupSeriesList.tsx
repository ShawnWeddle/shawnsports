import { NHLteamData } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { cn } from "~/utils/cn";
import { StanleyCupData } from "~/data/NHL/StanleyCupData";

const StanleyCupSeriesList: React.FC = () => {
  const stanleyCups = StanleyCupData.map((series, index) => {
    const { year, splits, winningTeam, losingTeam } = series;
    return (
      <tr key={index} className="even:bg-nhl/10">
        <td className="px-1 text-center font-semibold">{year}</td>
        <td>
          <button
            className={cn(
              "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [NHLstyleData[winningTeam].primaryBGstyle]: true,
                [NHLstyleData[winningTeam].secondaryBorderStyle]: true,
                [NHLstyleData[winningTeam].primaryPlainText]: true,
              }
            )}
          >
            {NHLteamData[winningTeam].location} {NHLteamData[winningTeam].name}
          </button>
          <button
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
        <td className="text-center font-semibold">{splits}</td>
        <td>
          <button
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
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Stanley Cup Champions
        </h1>
      </div>
      <table className="w-full sm:w-auto">
        <thead className="bg-nhl text-white">
          <th>Year</th>
          <th>Winning Team</th>
          <th>Games</th>
          <th>Losing Team</th>
        </thead>
        <tbody>{stanleyCups}</tbody>
      </table>
    </>
  );
};

export default StanleyCupSeriesList;
