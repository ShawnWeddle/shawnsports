import { cn } from "~/utils/cn";
import {
  resultsSortedByDriver,
  createStandings,
} from "~/data/F1/2024/F1converters24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { driverToConstructor2024 } from "~/data/F1/2024/F1data24";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";
import { TableCell, TableRowNoHover } from "~/components/ui/table";

export const TeammateBattleTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;
  const { driverByConstructorOrder } = createStandings(FormulaOneRaceResults);
  const { fullResults } = resultsSortedByDriver(
    FormulaOneRaceResults,
    driverByConstructorOrder
  );

  const tableRows = fullResults.map((result, index) => {
    const activeDriver = driverByConstructorOrder[index] ?? "ALB";
    const tableCells = result.map((place, Cindex) => {
      const { sprint, finishPosition, beatTeammate } = place;
      return (
        <TableCell
          key={`${index} - ${Cindex}`}
          className={cn(
            "w-10 text-center",
            { "bg-teal-100": sprint },
            { "bg-emerald-200": beatTeammate === true && !sprint },
            { "bg-red-200": beatTeammate === false && !sprint },
            { "bg-teal-300": beatTeammate === true && sprint },
            { "bg-fuchsia-200": beatTeammate === false && sprint },
            { "text-red-500": finishPosition === "DNF" },
            { hidden: sprint && raceMode === "Grands Prix Only" },
            { hidden: !sprint && raceMode === "Sprint Races Only" }
          )}
        >
          {finishPosition !== "DNR" ? finishPosition : ""}
        </TableCell>
      );
    });
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
          {driverByConstructorOrder[index]}
        </TableCell>
        {tableCells}
      </TableRowNoHover>
    );
  });

  return <>{tableRows}</>;
};
