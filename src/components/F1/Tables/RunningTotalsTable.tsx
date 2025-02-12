import { cn } from "~/lib/utils";
import { createStandings } from "~/data/F1/2024/convert";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceData";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { driverToConstructor2024 } from "~/data/F1/2024/F1data24";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";
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
