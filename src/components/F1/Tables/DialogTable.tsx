import { cn } from "~/lib/utils";
import {
  driverToConstructor2024,
  driverNames2024,
  calculatePoints,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { type F1RaceType } from "~/data/F1/2024/raceData";
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
  const driverPointsPairs = driverOrder.map((dac, index) => {
    const { driver, constructor } = dac;
    const driverPoints = calculatePoints(
      index,
      sprint,
      driver === fastestLap?.driver
    );
    if (completed) {
      return (
        <TableRowNoHover
          key={index}
          className={cn("w-auto font-semibold sm:text-base")}
        >
          <TableCell className="px-1 text-center"> {index + 1} </TableCell>
          <TableCell
            className={cn("px-3", {
              [F1styleData[constructor].primaryBackground]: true,
              [F1styleData[constructor].secondaryText]: true,
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
              {
                "bg-red-500/50 text-white": DNFs.map(
                  (dac) => dac.driver
                ).includes(driver),
              },
              {
                "bg-black text-white":
                  DQs && DQs.map((dac) => dac.driver).includes(driver),
              }
            )}
          >
            {driverPoints !== 0 && driverPoints}
            {DNFs.map((dac) => dac.driver).includes(driver) && "DNF"}
            {DQs && DQs.map((dac) => dac.driver).includes(driver) && "DQ"}
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
          Pole: {driverNames2024[polePosition.driver].first}{" "}
          {driverNames2024[polePosition.driver].last}
        </div>
      )}
      {fastestLap && (
        <div>
          Fastest Lap: {driverNames2024[fastestLap.driver].first}{" "}
          {driverNames2024[fastestLap.driver].last}
        </div>
      )}
    </div>
  );
};

export default SingleRaceTable;
