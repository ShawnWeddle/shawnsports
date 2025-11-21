import { cn } from "~/lib/utils";
import { driverNames2025, calculatePoints } from "~/data/F1/2025/F1data";
import { F1styleData } from "~/data/F1/2025/F1styleData";
import { type F1RaceType } from "~/data/F1/2025/raceData";
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
      const driverDidScore = driverPoints !== 0;
      const driverDidDNF = DNFs.map((dac) => dac.driver).includes(driver);
      const driverDidDQ = DQs && DQs.map((dac) => dac.driver).includes(driver);
      const driverDidFinishNoScore =
        !driverDidScore && !driverDidDNF && !driverDidDQ;
      return (
        <TableRowNoHover
          key={index}
          className={cn("w-auto font-semibold sm:text-base")}
        >
          <TableCell className="px-1 text-center">
            {" "}
            {!driverDidDNF && !driverDidDQ ? index + 1 : "-"}{" "}
          </TableCell>
          <TableCell
            className={cn("px-3", {
              [F1styleData[constructor].primaryBackground]: true,
              [F1styleData[constructor].secondaryText]: true,
            })}
          >
            <span className="sm:hidden md:inline">
              {driverNames2025[driver].first}
            </span>{" "}
            {driverNames2025[driver].last}
          </TableCell>
          <TableCell
            className={cn(
              "px-3 text-center",
              {
                "bg-lightTeal": sprint && driverDidScore,
              },
              {
                "bg-gold/60": !sprint && index === 0,
              },
              {
                "bg-silver/60": !sprint && index === 1,
              },
              {
                "bg-bronze/60": !sprint && index === 2,
              },
              {
                "bg-superEmerald": !sprint && index < 10 && index > 2,
              },
              {
                "bg-formulaOne/50 text-white": driverDidDNF,
              },
              {
                "bg-black text-white": driverDidDQ,
              },
              {
                "bg-gray-100": driverDidFinishNoScore,
              }
            )}
          >
            {driverDidScore && driverPoints}
            {driverDidDNF && "DNF"}
            {driverDidDQ && "DQ"}
            {driverDidFinishNoScore && "-"}
          </TableCell>
        </TableRowNoHover>
      );
    }
  });

  return (
    <div className="flex flex-col items-center gap-4">
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
      <Table>
        <TableBody>
          {polePosition && (
            <TableRowNoHover>
              <TableCell className="pr-2 text-lg font-semibold">
                Pole:
              </TableCell>
              <TableCell className="pl-1 text-lg">
                {driverNames2025[polePosition.driver].first}{" "}
                {driverNames2025[polePosition.driver].last}
              </TableCell>
            </TableRowNoHover>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SingleRaceTable;
