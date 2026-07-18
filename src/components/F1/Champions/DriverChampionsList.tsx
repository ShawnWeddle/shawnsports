import { useState } from "react";
import { cn } from "~/lib/utils";
import { type F1ChampionType } from "~/types/ChampTypes";
import {
  driverChampionsData,
  constructorChampionsData,
} from "~/data/F1/championData";
import ReactCountryFlag from "react-country-flag";
import { Dialog } from "~/components/ui/dialog";
import DialogModalContent from "~/components/Page/DialogModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

type DCCType = ["Driver" | "Constructor" | "Country" | null, string | null];

const ChampionshipList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeDCC, setActiveDCC] = useState<DCCType>([null, null]);

  type ChampRowProps = F1ChampionType & {
    index: number;
    inModal: boolean;
  };

  const ChampRow: React.FC<ChampRowProps> = (props: ChampRowProps) => {
    const { driver, constructor, year, index, inModal } = props;
    return (
      <TableRow
        key={index}
        className={cn("", {
          "text-sm": inModal,
          "odd:bg-formulaOne/10 hover:bg-formulaOne/20": true,
        })}
      >
        <TableCell className="px-1 text-center font-semibold">
          <div>{year}</div>
        </TableCell>
        <TableCell className="px-1">
          <div className="m-0.5 flex w-full justify-center gap-2 px-1 text-center">
            <button
              onClick={() => {
                setActiveDCC(["Country", driver.country]);
                setDialogOpen(true);
              }}
              className=""
            >
              <ReactCountryFlag
                style={{
                  width: "1.5em",
                  height: "1.5em",
                }}
                countryCode={driver.countryCode}
                svg
              />
            </button>
            <button
              onClick={() => {
                setActiveDCC(["Driver", driver.name]);
                setDialogOpen(true);
              }}
              className="font-semibold hover:underline"
            >
              {driver.name}
            </button>
          </div>
        </TableCell>
        <TableCell className="px-1">
          <button
            onClick={() => {
              setActiveDCC(["Constructor", constructor.name]);
              setDialogOpen(true);
            }}
            className="m-0.5 w-full px-1 text-center font-semibold hover:underline"
          >
            {constructor.name}
          </button>
        </TableCell>
      </TableRow>
    );
  };

  const championships = (dcc: DCCType) => {
    return driverChampionsData
      .filter((champ) => {
        if (dcc[0] === null) {
          return true;
        }
        switch (dcc[0]) {
          case "Constructor":
            return champ.constructor.name === dcc[1];
          case "Driver":
            return champ.driver.name === dcc[1];
          case "Country":
            return champ.driver.country === dcc[1];
        }
      })
      .map((champ, index) => {
        return (
          <ChampRow key={index} index={index} {...champ} inModal={false} />
        );
      });
  };

  const modalNamer = (input: DCCType) => {
    if (input[0] === null) {
      return "F1 Drivers' Champions";
    }
    switch (input[0]) {
      case "Constructor":
      case "Driver":
        return input[1] === null ? "F1" : input[1] + " Drivers' Championships";
      case "Country":
        return (
          "Drivers' Champions from " + (input[1] === null ? "F1" : input[1])
        );
    }
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          if (isOpen === true) return;
          setDialogOpen(false);
        }}
      >
        <DialogModalContent title={modalNamer(activeDCC)} description="">
          <table>
            <tbody>{championships(activeDCC)}</tbody>
          </table>
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Formula One Championships
      </h1>
      <Table>
        <TableHeader>
          <TableRowNoHover>
            <TableHead>Year</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Constructor</TableHead>
          </TableRowNoHover>
        </TableHeader>
        <TableBody>{championships([null, null])}</TableBody>
      </Table>
    </>
  );
};

export default ChampionshipList;
