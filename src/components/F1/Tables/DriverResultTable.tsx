import { cn } from "~/lib/utils";
import {
  resultsSortedByDriver,
  createStandings,
} from "~/data/F1/2024/F1converters24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { driverToConstructor2024 } from "~/data/F1/2024/F1data24";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";
import { TableCell, TableRowNoHover } from "~/components/ui/table";

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
        <TableCell
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
        </TableCell>
      );
    });
    const activeDriver = driverOrder[index] ?? "ALB";
    const driverTextColor =
      F1styleData[driverToConstructor2024(activeDriver)].secondaryText;
    const driverBg =
      F1styleData[driverToConstructor2024(activeDriver)].primaryBackground;
    return (
      <TableRowNoHover
        key={`r-${index}`}
        className="border-b-2 border-gray-200 font-mono"
      >
        <TableCell
          className={cn("px-2 text-center", {
            [driverTextColor]: true,
            [driverBg]: true,
          })}
        >
          {driverOrder[index]}
        </TableCell>
        {tableCells}
      </TableRowNoHover>
    );
  });

  return <>{tableRows}</>;
};
