import { cn } from "~/lib/utils";
import { createStandings } from "~/data/F1/2026/convert";
import { FormulaOneRaceResults } from "~/data/F1/2026/raceData";
import { F1styleData } from "~/data/F1/2026/F1styleData";
import { driverToConstructor2026 } from "~/data/F1/2026/F1data";
import type { RaceModeProps } from "~/data/F1/2026/F1data";
import { TableCell, TableRowNoHover } from "~/components/ui/table";

export const RunningResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;
  const { driverOrder, runningDriverResults } = createStandings(
    FormulaOneRaceResults
  );

  const tableRows = runningDriverResults.map((result, index) => {
    const tableCells = result.map((place, Cindex) => {
      const { sprint, points } = place;
      return (
        <TableCell
          key={`${index} - ${Cindex}`}
          className={cn(
            "w-8 px-2 text-center",
            {
              "bg-lightTeal/50": sprint,
            },
            { hidden: sprint && raceMode === "Grands Prix Only" },
            { hidden: !sprint && raceMode === "Sprint Races Only" }
          )}
        >
          {points}
        </TableCell>
      );
    });
    const activeDriver = driverOrder[index] ?? "ALB";
    const driverTextColor =
      F1styleData[driverToConstructor2026(activeDriver)].secondaryText;
    const driverBg =
      F1styleData[driverToConstructor2026(activeDriver)].primaryBackground;
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
