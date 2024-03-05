import { cn } from "~/utils/cn";
import { resultsSortedByDriver, createStandings } from "~/data/F1/F1converters";
import { FormulaOneRaceResults } from "~/data/F1/raceResults2023";
import { F1styleData } from "~/data/F1/F1styleData";
import { driverToConstructor } from "~/data/F1/F1data";
import type { RaceModeProps } from "~/data/F1/F1data";

export const DriverResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;
  const { driverOrder } = createStandings(FormulaOneRaceResults);
  const { fullResults } = resultsSortedByDriver(
    FormulaOneRaceResults,
    driverOrder
  );

  const tableRows = fullResults.map((result, index) => {
    const tableCells = result.map((place, Cindex) => {
      const { sprint, finishPosition } = place;
      return (
        <td
          key={`${index} - ${Cindex}`}
          className={cn(
            "w-10",
            "text-center",
            {
              "bg-yellow-200/60": !sprint && finishPosition === 1,
            },
            {
              "bg-gray-400/60": !sprint && finishPosition === 2,
            },
            {
              "bg-amber-600/60": !sprint && finishPosition === 3,
            },
            {
              "bg-emerald-100":
                !sprint &&
                finishPosition !== "DNF" &&
                finishPosition !== "DNR" &&
                finishPosition !== "DQ" &&
                finishPosition < 11 &&
                finishPosition > 3,
            },
            {
              "bg-teal-200":
                sprint &&
                finishPosition !== "DNF" &&
                finishPosition !== "DNR" &&
                finishPosition !== "DQ" &&
                finishPosition < 9,
            },
            {
              "bg-teal-100":
                sprint &&
                (finishPosition === "DNF" ||
                  finishPosition === "DNR" ||
                  finishPosition === "DQ" ||
                  finishPosition > 8),
            },
            { "text-red-500": finishPosition === "DNF" },
            { "bg-black text-white": finishPosition === "DQ" },
            { hidden: sprint && raceMode === "Grands Prix Only" },
            { hidden: !sprint && raceMode === "Sprint Races Only" }
          )}
        >
          {finishPosition !== "DNR" ? finishPosition : ""}
        </td>
      );
    });
    const activeDriver = driverOrder[index] ?? "ALB";
    const driverTextColor =
      F1styleData[driverToConstructor(activeDriver)].secondaryTextStyle;
    const driverBg =
      F1styleData[driverToConstructor(activeDriver)].primaryBGstyle;
    return (
      <tr key={`r-${index}`} className="border-b-2 border-gray-200 font-mono">
        <td
          className={cn("px-2 text-center", {
            [driverTextColor]: true,
            [driverBg]: true,
          })}
        >
          {driverOrder[index]}
        </td>
        {tableCells}
      </tr>
    );
  });

  return <>{tableRows}</>;
};
