import { cn } from "~/utils/cn";
import {
  driverToConstructor2024,
  driverNames2024,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { createStandings } from "~/data/F1/2024/F1converters24";
import PodiumLogo from "../PodiumLogo";

export const DriverStandings: React.FC = () => {
  const { driverStandings, driverOrder, driverPodiums } = createStandings(
    FormulaOneRaceResults
  );

  const driverPointsPairs = driverOrder.map((driver, index) => {
    const podiums = driverPodiums[driver];
    return (
      <tr
        key={index}
        className="border-b-2 border-gray-200 font-semibold last:border-0"
      >
        <td className="px-1 text-center"> {index + 1} </td>
        <td
          className={cn("px-3", {
            [F1styleData[driverToConstructor2024(driver)].primaryBGstyle]: true,
            [F1styleData[driverToConstructor2024(driver)].secondaryTextStyle]:
              true,
          })}
        >
          {driverNames2024[driver].first} {driverNames2024[driver].last}
        </td>
        <td className="px-3 text-center">{driverStandings[driver].total}</td>
        <td className="px-3 text-center">{podiums}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col items-center rounded-xl sm:border-2">
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold lg:text-4xl">
        Driver Standings
      </h1>
      <table className="sm:mx-4 sm:mb-4">
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td>
              <p className="text-center text-sm font-bold text-gray-500">P</p>
            </td>
            <td>
              <PodiumLogo />
            </td>
          </tr>
        </thead>
        <tbody>{driverPointsPairs}</tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
