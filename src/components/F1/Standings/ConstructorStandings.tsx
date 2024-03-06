import { cn } from "~/utils/cn";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { createStandings } from "~/data/F1/2024/F1converters24";
import PodiumLogo from "../PodiumLogo";

export const ConstructorStandings: React.FC = () => {
  const { constructorStandings, constructorOrder, constructorPodiums } =
    createStandings(FormulaOneRaceResults);

  const constructorPointsPairs = constructorOrder.map((constructor, index) => {
    const podiums = constructorPodiums[constructor];
    return (
      <tr
        key={index}
        className="border-b-2 border-gray-200 font-semibold last:border-0"
      >
        <td
          className={cn("px-3", {
            [F1styleData[constructor].primaryBGstyle]: true,
            [F1styleData[constructor].secondaryTextStyle]: true,
          })}
        >
          {constructor}
        </td>
        <td className="px-3 text-center">
          {constructorStandings[constructor].total}
        </td>
        <td className="px-3 text-center">{podiums}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col items-center rounded-xl sm:border-2">
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold lg:text-4xl">
        Constructor Standings
      </h1>
      <table className="sm:mx-4 sm:mb-4">
        <thead>
          <tr>
            <td></td>
            <td>
              <p className="text-center text-sm font-bold text-gray-500">P</p>
            </td>
            <td>
              <PodiumLogo />
            </td>
          </tr>
        </thead>
        <tbody>{constructorPointsPairs}</tbody>
      </table>
    </div>
  );
};

export default ConstructorStandings;
