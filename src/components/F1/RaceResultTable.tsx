import { useState } from "react";
import { sortResultsByPlace } from "~/data/F1/F1converters";
import { driverToConstructor } from "~/data/F1/F1data";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { driverActivation, handleActivate } from "~/data/F1/HandleActivation";
import { F1styleData } from "~/data/F1/F1styleData";
import { cn } from "~/utils/cn";
import { twCombine } from "~/data/twCombine";

export const RaceResultTable: React.FC = () => {
  const [activeDrivers, setActiveDrivers] = useState(driverActivation);

  const { headers, results, DNFs } = sortResultsByPlace(FormulaOneRaceResults);
  const tableHeaders = headers.map((header, index) => {
    return (
      <th key={index}>
        <div className="w-0 -rotate-[30deg] transform whitespace-nowrap text-red-500">
          {header}
        </div>
      </th>
    );
  });
  const tableRows = results.map((result, rowIndex) => {
    const tableCells = result.map((driver, cellIndex) => {
      const isDriver = driver !== undefined && activeDrivers[driver].active;
      const activeStyle = isDriver
        ? F1styleData[driverToConstructor(driver)].twStyle
        : "";
      return (
        <td
          key={`c-${cellIndex}`}
          onClick={() => {
            setActiveDrivers(handleActivate(driver, activeDrivers));
          }}
        >
          <div className={cn("px-1 font-mono", { [activeStyle]: isDriver })}>
            {driver}
          </div>
        </td>
      );
    });
    return (
      <tr key={`r-${rowIndex}`} className="odd:bg-white/50">
        <td className="text-center">{rowIndex + 1}</td>
        {tableCells}
      </tr>
    );
  });
  const DNFRows = DNFs.map((dnf, rowIndex) => {
    const DNFCells = dnf.map((driver, cellIndex) => {
      const className =
        driver && activeDrivers[driver].active
          ? twCombine([
              "font-mono px-1",
              F1styleData[driverToConstructor(driver)].twStyle,
            ])
          : "font-mono px-1";
      return (
        <td key={`c-${cellIndex}`}>
          <div className={className}>{driver}</div>
        </td>
      );
    });
    return (
      <tr key={`r-${rowIndex}`} className="bg-red-500/30">
        <td>{rowIndex === 0 ? "DNF" : ""}</td>
        {DNFCells}
      </tr>
    );
  });

  const activeDriverMap = Object.entries(activeDrivers).map((driver, index) => {
    const [name, bool] = driver;
    return <div key={index}>{bool && name}</div>;
  });

  return (
    <div className="bg-blue-100 pt-16">
      <table>
        <thead>
          <tr>
            <th></th>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {tableRows}
          {DNFRows}
        </tbody>
      </table>
      {false && activeDriverMap}
    </div>
  );
};
