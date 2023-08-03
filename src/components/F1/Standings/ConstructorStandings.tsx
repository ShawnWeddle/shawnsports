import { cn } from "~/utils/cn";
import { F1styleData } from "~/data/F1/F1styleData";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { createStandings } from "~/data/F1/F1converters";

export const ConstructorStandings: React.FC = () => {
  const { constructorStandings, constructorOrder } = createStandings(
    FormulaOneRaceResults
  );

  const constructorPointsPairs = constructorOrder.map((constructor, index) => {
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
      </tr>
    );
  });

  return (
    <div className="rounded-xl sm:m-4 sm:border-2">
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold lg:text-4xl">
        Constructor Standings
      </h1>
      <table className="mb-4 flex justify-center">
        <tbody>{constructorPointsPairs}</tbody>
      </table>
    </div>
  );
};

export default ConstructorStandings;
