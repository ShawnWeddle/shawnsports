import { cn } from "~/utils/cn";
import { locationHeaders } from "~/data/F1/2024/F1converters24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";
import { TableHead } from "~/components/ui/table";

const { headers } = locationHeaders(FormulaOneRaceResults);

const F1TableHeaders: React.FC<RaceModeProps> = (props: RaceModeProps) => {
  const tableHeaders = headers.map((location, index) => {
    const { locationName, sprint } = location;
    const { raceMode } = props;
    return (
      <TableHead
        key={index}
        className={cn(
          "px-0 pt-16",
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
      </TableHead>
    );
  });

  return <>{tableHeaders}</>;
};

export default F1TableHeaders;
