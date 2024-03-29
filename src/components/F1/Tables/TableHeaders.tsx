import { cn } from "~/utils/cn";
import { locationHeaders } from "~/data/F1/2024/F1converters24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";

const { headers } = locationHeaders(FormulaOneRaceResults);

export const TableHeaders: React.FC<RaceModeProps> = (props: RaceModeProps) => {
  const tableHeaders = headers.map((location, index) => {
    const { locationName, sprint } = location;
    const { raceMode } = props;
    return (
      <th
        key={index}
        className={cn(
          "pt-16",
          { hidden: sprint && raceMode === "Grands Prix Only" },
          { hidden: !sprint && raceMode === "Sprint Races Only" }
        )}
      >
        <p
          className={cn(
            "w-0 -rotate-[30deg] transform whitespace-nowrap px-4 font-semibold "
          )}
        >
          {sprint ? locationName + " Sprint" : locationName}
        </p>
      </th>
    );
  });

  return <>{tableHeaders}</>;
};
