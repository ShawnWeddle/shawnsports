import { useState } from "react";
import F1TableHeaders from "./TableHeaders";
import { RaceResultTable } from "~/components/F1/Tables/RaceResultTable";
import { DriverResultTable } from "~/components/F1/Tables/DriverResultTable";
import { RunningResultTable } from "~/components/F1/Tables/RunningTotalsTable";
import type { RaceModeType } from "~/data/F1/2023/F1data23";
import { Card } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableHeader,
  TableRowNoHover,
} from "~/components/ui/table";

type TableModeType = "DriverSort" | "PlaceSort" | "RunningTotal";

const FormulaOneTable: React.FC = () => {
  const [tableMode, setTableMode] = useState<TableModeType>("PlaceSort");
  const [raceMode, setRaceMode] = useState<RaceModeType>(
    "Both Grands Prix and Sprint Races"
  );

  const TableModeInputs: React.FC = () => {
    return (
      <fieldset>
        <div className="flex justify-start">
          <input
            type="radio"
            id="Place"
            checked={tableMode === "PlaceSort"}
            onChange={() => {
              setTableMode("PlaceSort");
            }}
          />
          <label htmlFor="Place" className="px-1">
            Sorted by Place
          </label>
        </div>
        <div className="flex justify-start">
          <input
            type="radio"
            id="Driver"
            checked={tableMode === "DriverSort"}
            onChange={() => {
              setTableMode("DriverSort");
            }}
          />
          <label htmlFor="Driver" className="px-1">
            Sorted by Driver
          </label>
        </div>
        <div className="flex justify-start">
          <input
            type="radio"
            id="Running"
            checked={tableMode === "RunningTotal"}
            onChange={() => {
              setTableMode("RunningTotal");
            }}
          />
          <label htmlFor="Running" className="px-1">
            Cumulative Points
          </label>
        </div>
      </fieldset>
    );
  };

  const RaceModeInputs: React.FC = () => {
    return (
      <fieldset>
        <div className="flex justify-start">
          <input
            type="radio"
            id="All"
            checked={raceMode === "Both Grands Prix and Sprint Races"}
            onChange={() => {
              setRaceMode("Both Grands Prix and Sprint Races");
            }}
          />
          <label htmlFor="All" className="px-1">
            Both
          </label>
        </div>
        <div className="flex justify-start">
          <input
            type="radio"
            id="GPonly"
            checked={raceMode === "Grands Prix Only"}
            onChange={() => {
              setRaceMode("Grands Prix Only");
            }}
          />
          <label htmlFor="GPonly" className="px-1">
            Grands Prix Only
          </label>
        </div>
        <div className="flex justify-start">
          <input
            type="radio"
            id="SRonly"
            checked={raceMode === "Sprint Races Only"}
            onChange={() => {
              setRaceMode("Sprint Races Only");
            }}
          />
          <label htmlFor="SRonly" className="px-1">
            Sprint Races Only
          </label>
        </div>
      </fieldset>
    );
  };

  return (
    <>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        2025 Formula One Season
      </h1>
      <Card className="flex justify-center gap-2 p-2">
        <div>
          <TableModeInputs />
        </div>
        <div>
          <RaceModeInputs />
        </div>
      </Card>
      <div className="flex w-full justify-start">
        <Table className="w-fit text-sm sm:text-base">
          <TableHeader>
            <TableRowNoHover>
              <F1TableHeaders raceMode={raceMode} />
            </TableRowNoHover>
          </TableHeader>
          <TableBody>
            {tableMode === "PlaceSort" && (
              <RaceResultTable raceMode={raceMode} />
            )}
            {tableMode === "DriverSort" && (
              <DriverResultTable raceMode={raceMode} />
            )}
            {tableMode === "RunningTotal" && (
              <RunningResultTable raceMode={raceMode} />
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default FormulaOneTable;
