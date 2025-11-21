import { cn } from "~/lib/utils";
import { resultsSortedByDriver, createStandings } from "~/data/F1/2025/convert";
import { FormulaOneRaceResults } from "~/data/F1/2025/raceData";
import { F1styleData } from "~/data/F1/2025/F1styleData";
import { driverToConstructor2025 } from "~/data/F1/2025/F1data";
import type { RaceModeProps } from "~/data/F1/2025/F1data";
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
              "bg-gold/60": !sprint && finishPosition === 1,
            },
            {
              "bg-silver/60": !sprint && finishPosition === 2,
            },
            {
              "bg-bronze/60": !sprint && finishPosition === 3,
            },
            {
              "bg-superEmerald":
                !sprint &&
                finishPosition !== "DNF" &&
                finishPosition !== "DNR" &&
                finishPosition !== "DQ" &&
                finishPosition < 11 &&
                finishPosition > 3,
            },
            {
              "bg-lightTeal":
                sprint &&
                finishPosition !== "DNF" &&
                finishPosition !== "DNR" &&
                finishPosition !== "DQ" &&
                finishPosition < 9,
            },
            {
              "bg-lightTeal/50":
                sprint &&
                (finishPosition === "DNF" ||
                  finishPosition === "DNR" ||
                  finishPosition === "DQ" ||
                  finishPosition > 8),
            },
            { "text-formulaOne": finishPosition === "DNF" },
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
      F1styleData[driverToConstructor2025(activeDriver)].secondaryText;
    const driverBg =
      F1styleData[driverToConstructor2025(activeDriver)].primaryBackground;
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
