import { cn } from "~/utils/cn";
import {
  resultsSortedByDriver,
  createStandings,
  runningTotal,
} from "~/data/F1/F1converters";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { F1styleData } from "~/data/F1/F1styleData";
import { driverToConstructor, driverCodes } from "~/data/F1/F1data";
import type { RaceModeProps } from "~/data/F1/F1data";

export const RunningResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;
  const { driverOrder } = createStandings(FormulaOneRaceResults);

  const { fullResults } = runningTotal(FormulaOneRaceResults, driverOrder);

  const tableRows = fullResults.map((result, index) => {
    const tableCells = result.map((place, Cindex) => {
      const { sprint, points } = place;
      return (
        <td
          key={`${index} - ${Cindex}`}
          className={cn(
            "w-8 px-2 text-center",
            {
              "bg-teal-200": sprint,
            },
            { hidden: sprint && raceMode === "Grands Prix Only" },
            { hidden: !sprint && raceMode === "Sprint Races Only" }
          )}
        >
          {points}
        </td>
      );
    });
    const activeDriver = driverOrder[index] ?? "ALB";
    const driverTextColor =
      F1styleData[driverToConstructor(activeDriver)].secondaryTextStyle;
    const driverBg =
      F1styleData[driverToConstructor(activeDriver)].primaryBGstyle;
    return (
      <tr key={`r-${index}`} className="border-b-2 border-white font-mono">
        <td
          className={cn("rounded-br-xl rounded-tl-xl px-2 text-center", {
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

/*return (
    <div className="bg-blue-100 pt-16">
      <table>
        <thead>
          <tr>
            <th></th>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  ); */
