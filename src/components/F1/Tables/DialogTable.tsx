import { cn } from "~/utils/cn";
import {
  driverToConstructor2024,
  driverNames2024,
  calculatePoints,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { type F1RaceType } from "~/data/F1/2024/raceResults2024";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRowNoHover,
} from "~/components/ui/table";

interface SingleRaceProps {
  race: F1RaceType;
}

export const SingleRaceTable: React.FC<SingleRaceProps> = (
  props: SingleRaceProps
) => {
  const { race } = props;
  const { finalOrder, DNFs, sprint, completed, DQs, fastestLap, polePosition } =
    race;
  const driverOrder = DQs
    ? [...finalOrder, ...DNFs, ...DQs]
    : [...finalOrder, ...DNFs];
  const driverPointsPairs = driverOrder.map((driver, index) => {
    const driverPoints = calculatePoints(index, sprint, driver === fastestLap);
    if (completed) {
      return (
        <TableRowNoHover
          key={index}
          className={cn("w-auto font-semibold sm:text-base")}
        >
          <TableCell className="px-1 text-center"> {index + 1} </TableCell>
          <TableCell
            className={cn("px-3", {
              [F1styleData[driverToConstructor2024(driver)].primaryBGstyle]:
                true,
              [F1styleData[driverToConstructor2024(driver)].secondaryTextStyle]:
                true,
            })}
          >
            <span className="sm:hidden md:inline">
              {driverNames2024[driver].first}
            </span>{" "}
            {driverNames2024[driver].last}
          </TableCell>
          <TableCell
            className={cn(
              "px-3 text-center",
              {
                "bg-teal-200": sprint && driverPoints !== 0,
              },
              {
                "bg-yellow-200/60": !sprint && index === 0,
              },
              {
                "bg-gray-400/60": !sprint && index === 1,
              },
              {
                "bg-amber-600/60": !sprint && index === 2,
              },
              {
                "bg-emerald-100": !sprint && index < 10 && index > 2,
              },
              { "bg-red-500/50 text-white": DNFs.includes(driver) },
              { "bg-black text-white": DQs && DQs.includes(driver) }
            )}
          >
            {driverPoints !== 0 && driverPoints}
            {DNFs.includes(driver) && "DNF"}
            {DQs && DQs.includes(driver) && "DQ"}
          </TableCell>
        </TableRowNoHover>
      );
    }
  });

  return (
    <div className="flex flex-col items-center">
      <Table>
        <TableHeader>
          <TableRowNoHover>
            <TableHead></TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Points</TableHead>
          </TableRowNoHover>
        </TableHeader>
        <TableBody>{driverPointsPairs}</TableBody>
      </Table>
      {polePosition && (
        <div className="mt-1">
          Pole: {driverNames2024[polePosition].first}{" "}
          {driverNames2024[polePosition].last}
        </div>
      )}
      {fastestLap && (
        <div>
          Fastest Lap: {driverNames2024[fastestLap].first}{" "}
          {driverNames2024[fastestLap].last}
        </div>
      )}
    </div>
  );
};

export default SingleRaceTable;
