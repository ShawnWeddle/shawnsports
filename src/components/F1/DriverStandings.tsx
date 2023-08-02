import { cn } from "~/utils/cn";
import {
  constructorNames,
  constructorToDrivers,
  driverToConstructor,
} from "~/data/F1/F1data";
import type { DriverCodeType } from "~/data/F1/F1data";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { createStandings } from "~/data/F1/F1converters";

export const DriverStandings: React.FC = () => {
  const { driverStandings, constructorStandings } = createStandings(
    FormulaOneRaceResults
  );
  const work = constructorNames.map((constructor, index) => {
    const play = constructorToDrivers(constructor)
      .map((driver) => {
        const driverTuple: [DriverCodeType, number] = [
          driver,
          driverStandings[driver].total,
        ];

        return driverTuple;
      })
      .sort((a, b) => a[1] - b[1])
      .map((driver, index) => {
        const percentage = Math.round(
          (driver[1] / constructorStandings[driverToConstructor(driver[0])]) *
            100
        );
        const classWidth = `w-[${percentage}%]`;
        return (
          <div key={index} className={cn("bg-green-600", classWidth)}>
            DRW
          </div>
        );
      });
    return (
      <div key={index}>
        <p>{constructor}</p>
        <div className="flex w-48 justify-start">{play}</div>
      </div>
    );
  });
  return <div>{work}</div>;
};

export default DriverStandings;
