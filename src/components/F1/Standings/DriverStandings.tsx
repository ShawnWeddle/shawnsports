import { cn } from "~/lib/utils";
import {
  driverToConstructor2024,
  driverNames2024,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceData";
import { createStandings } from "~/data/F1/2024/convert";
import PodiumLogo from "../PodiumLogo";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

export const DriverStandings: React.FC = () => {
  const { driverStandings, driverOrder, driverPodiums } = createStandings(
    FormulaOneRaceResults
  );

  const driverPointsPairs = driverOrder.map((driver, index) => {
    const podiums = driverPodiums[driver];
    return (
      <TableRow key={index} className="w-auto font-semibold sm:text-base">
        <TableCell className="px-1 text-center"> {index + 1} </TableCell>
        <TableCell
          className={cn("px-3", {
            [F1styleData[driverToConstructor2024(driver)].primaryBackground]:
              true,
            [F1styleData[driverToConstructor2024(driver)].secondaryText]: true,
          })}
        >
          {driverNames2024[driver].first} {driverNames2024[driver].last}
        </TableCell>
        <TableCell className="px-3 text-center">
          {driverStandings[driver].total}
        </TableCell>
        <TableCell className="px-3 text-center">{podiums}</TableCell>
      </TableRow>
    );
  });

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="text-center">Driver Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pb-4">
          <Table>
            <TableHeader>
              <TableRowNoHover>
                <TableHead></TableHead>
                <TableHead>Team</TableHead>
                <TableHead>
                  <p className="font-bold">P</p>
                </TableHead>
                <TableHead>
                  <PodiumLogo />
                </TableHead>
              </TableRowNoHover>
            </TableHeader>
            <TableBody>{driverPointsPairs}</TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverStandings;
