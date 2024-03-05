import { cn } from "~/utils/cn";
import { driverToConstructor, driverNames } from "~/data/F1/F1data";
import { F1styleData } from "~/data/F1/F1styleData";
import { FormulaOneRaceResults } from "~/data/F1/raceResults2023";
import { createStandings } from "~/data/F1/F1converters";

export const DriverStandings: React.FC = () => {
  const { driverStandings, driverOrder } = createStandings(
    FormulaOneRaceResults
  );

  const driverPointsPairs = driverOrder.map((driver, index) => {
    return (
      <tr
        key={index}
        className="border-b-2 border-gray-200 font-semibold last:border-0"
      >
        <td
          className={cn("px-3", {
            [F1styleData[driverToConstructor(driver)].primaryBGstyle]: true,
            [F1styleData[driverToConstructor(driver)].secondaryTextStyle]: true,
          })}
        >
          {driverNames[driver].first} {driverNames[driver].last}
        </td>
        <td className="px-3 text-center">{driverStandings[driver].total}</td>
      </tr>
    );
  });

  return (
    <div className="rounded-xl sm:m-4 sm:border-2">
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold lg:text-4xl">
        Driver Standings
      </h1>
      <table className="mb-4 flex justify-center">
        <tbody>{driverPointsPairs}</tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
