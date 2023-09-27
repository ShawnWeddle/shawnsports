import { WNBAteamData } from "~/data/WNBA/WNBAdata";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { cn } from "~/utils/cn";
import { WNBAFinalsData } from "~/data/WNBA/WNBAFinalsData";

const WNBAFinalsList: React.FC = () => {
  const wnbaFinals = WNBAFinalsData.map((series, index) => {
    const { year, splits, winningTeam, losingTeam } = series;
    return (
      <tr key={index} className="even:bg-nba/10">
        <td className="px-1 text-center font-semibold">{year}</td>
        <td>
          <button
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
        <td className="text-center font-semibold">{splits}</td>
        <td>
          <button
            className={cn(
              "m-0.5 hidden w-full rounded-lg border-2 px-1 text-center font-semibold sm:inline-block",
              {
                [WNBAstyleData[losingTeam].primaryBGstyle]: true,
                [WNBAstyleData[losingTeam].secondaryBorderStyle]: true,
                [WNBAstyleData[losingTeam].primaryPlainText]: true,
              }
            )}
          >
            {WNBAteamData[losingTeam].location} {WNBAteamData[losingTeam].name}
          </button>
          <button
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
        <tbody>{wnbaFinals}</tbody>
      </table>
    </>
  );
};

export default WNBAFinalsList;
