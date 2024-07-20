import { cn } from "~/utils/cn";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { createStandings } from "~/data/F1/2024/F1converters24";
import PodiumLogo from "../PodiumLogo";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export const ConstructorStandings: React.FC = () => {
  const { constructorStandings, constructorOrder, constructorPodiums } =
    createStandings(FormulaOneRaceResults);

  const constructorPointsPairs = constructorOrder.map((constructor, index) => {
    const podiums = constructorPodiums[constructor];
    return (
      <TableRow key={index} className="w-auto font-semibold sm:text-base">
        <TableCell className="text-center"> {index + 1} </TableCell>
        <TableCell
          className={cn("px-3", {
            [F1styleData[constructor].primaryBGstyle]: true,
            [F1styleData[constructor].secondaryTextStyle]: true,
          })}
        >
          {constructor}
        </TableCell>
        <TableCell className="px-3 text-center">
          {constructorStandings[constructor].total}
        </TableCell>
        <TableCell className="px-3 text-center">{podiums}</TableCell>
      </TableRow>
    );
  });

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="text-center">Constructor Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pb-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Team</TableHead>
                <TableHead>
                  <p className="font-bold">P</p>
                </TableHead>
                <TableHead>
                  <PodiumLogo />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{constructorPointsPairs}</TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConstructorStandings;
