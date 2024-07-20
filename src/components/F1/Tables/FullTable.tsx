import { useState } from "react";
import { TableHeaders } from "./TableHeaders";
import { RaceResultTable } from "~/components/F1/Tables/RaceResultTable";
import { DriverResultTable } from "~/components/F1/Tables/DriverResultTable";
import { RunningResultTable } from "~/components/F1/Tables/RunningTotalsTable";
import { TeammateBattleTable } from "./TeammateBattleTable";
import type { RaceModeType } from "~/data/F1/2023/F1data23";

type TableModeType =
  | "DriverSort"
  | "PlaceSort"
  | "RunningTotal"
  | "TeammateBattle";

const FormulaOneTable: React.FC = () => {
  const [tableMode, setTableMode] = useState<TableModeType>("PlaceSort");
  const [raceMode, setRaceMode] = useState<RaceModeType>(
    "Both Grands Prix and Sprint Races"
  );

  const TableModeInputs: React.FC = () => {
    return (
      <fieldset className="rounded-xl border p-2">
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
        <div className="flex justify-start">
          <input
            type="radio"
            id="Teammate"
            checked={tableMode === "TeammateBattle"}
            onChange={() => {
              setTableMode("TeammateBattle");
            }}
          />
          <label htmlFor="Teammate" className="px-1">
            Teammate Battle
          </label>
        </div>
      </fieldset>
    );
  };

  const RaceModeInputs: React.FC = () => {
    return (
      <fieldset className="rounded-xl border p-2">
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
        2024 Formula One Season
      </h1>
      <div className="flex w-full justify-center gap-4">
        <TableModeInputs />
        <RaceModeInputs />
      </div>
      <div className="flex w-full justify-start overflow-auto">
        <table>
          <thead>
            <tr>
              <th></th>
              <TableHeaders raceMode={raceMode} />
            </tr>
          </thead>
          <tbody>
            {tableMode === "PlaceSort" && (
              <RaceResultTable raceMode={raceMode} />
            )}
            {tableMode === "DriverSort" && (
              <DriverResultTable raceMode={raceMode} />
            )}
            {tableMode === "RunningTotal" && (
              <RunningResultTable raceMode={raceMode} />
            )}
            {tableMode === "TeammateBattle" && (
              <TeammateBattleTable raceMode={raceMode} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormulaOneTable;
