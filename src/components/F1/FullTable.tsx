import { useState } from "react";
import { TableHeaders } from "./TableHeaders";
import { RaceResultTable } from "~/components/F1/RaceResultTable";
import { DriverResultTable } from "~/components/F1/DriverResultTable";
import { RunningResultTable } from "~/components/F1/RunningTotalsTable";
import type { RaceModeType } from "~/data/F1/F1data";

type TableModeType = "DriverSort" | "PlaceSort" | "RunningTotal";

const FormulaOneTable: React.FC = () => {
  const [tableMode, setTableMode] = useState<TableModeType>("PlaceSort");
  const [raceMode, setRaceMode] = useState<RaceModeType>(
    "Both Grands Prix and Sprint Races"
  );

  const TableModeInputs: React.FC = () => {
    return (
      <fieldset className="">
        <div className="flex justify-start">
          <label htmlFor="Driver" className="px-1">
            Driver
          </label>
          <input
            type="radio"
            id="Driver"
            checked={tableMode === "DriverSort"}
            onChange={() => {
              setTableMode("DriverSort");
            }}
          />
        </div>
        <div className="flex justify-start">
          <label htmlFor="Place" className="px-1">
            Place
          </label>
          <input
            type="radio"
            id="Place"
            checked={tableMode === "PlaceSort"}
            onChange={() => {
              setTableMode("PlaceSort");
            }}
          />
        </div>
        <div className="flex justify-start">
          <label htmlFor="Running" className="px-1">
            Running
          </label>
          <input
            type="radio"
            id="Running"
            checked={tableMode === "RunningTotal"}
            onChange={() => {
              setTableMode("RunningTotal");
            }}
          />
        </div>
      </fieldset>
    );
  };

  const RaceModeInputs: React.FC = () => {
    return (
      <fieldset className="">
        <div className="flex justify-start">
          <label htmlFor="All" className="px-1">
            Both Grands Prix and Sprint Races
          </label>
          <input
            type="radio"
            id="All"
            checked={raceMode === "Both Grands Prix and Sprint Races"}
            onChange={() => {
              setRaceMode("Both Grands Prix and Sprint Races");
            }}
          />
        </div>
        <div className="flex justify-start">
          <label htmlFor="GPonly" className="px-1">
            Grands Prix Only
          </label>
          <input
            type="radio"
            id="GPonly"
            checked={raceMode === "Grands Prix Only"}
            onChange={() => {
              setRaceMode("Grands Prix Only");
            }}
          />
        </div>
        <div className="flex justify-start">
          <label htmlFor="SRonly" className="px-1">
            Sprint Races Only
          </label>
          <input
            type="radio"
            id="SRonly"
            checked={raceMode === "Sprint Races Only"}
            onChange={() => {
              setRaceMode("Sprint Races Only");
            }}
          />
        </div>
      </fieldset>
    );
  };

  return (
    <div className="bg-blue-100">
      <TableModeInputs />
      <RaceModeInputs />
      <table>
        <thead>
          <tr>
            <th></th>
            <TableHeaders raceMode={raceMode} />
          </tr>
        </thead>
        <tbody>
          {tableMode === "PlaceSort" && <RaceResultTable raceMode={raceMode} />}
          {tableMode === "DriverSort" && (
            <DriverResultTable raceMode={raceMode} />
          )}
          {tableMode === "RunningTotal" && (
            <RunningResultTable raceMode={raceMode} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormulaOneTable;
