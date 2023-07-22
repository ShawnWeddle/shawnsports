import { useState } from "react";
import { cn } from "~/utils/cn";
import { resultsSortedByPlace } from "~/data/F1/F1converters";
import { driverTcamColors, driverToConstructor } from "~/data/F1/F1data";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { driverActivation, handleActivate } from "~/data/F1/HandleActivation";
import { F1styleData } from "~/data/F1/F1styleData";
import type { RaceModeProps } from "~/data/F1/F1data";

export const RaceResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;

  const [activeDrivers, setActiveDrivers] = useState(driverActivation);

  const { headers, fullResults, DNFs } = resultsSortedByPlace(
    FormulaOneRaceResults
  );
  const tableHeaders = headers.map((header, index) => {
    return (
      <th key={index}>
        <div className="w-0 -rotate-[30deg] transform whitespace-nowrap px-4">
          {header}
        </div>
      </th>
    );
  });
  const tableRows = fullResults.map((result, rowIndex) => {
    const tableCells = result.map((driver, cellIndex) => {
      const { driverName, sprint, finishPosition, polePosition, fastestLap } =
        driver;
      const isDriver =
        driverName !== undefined && activeDrivers[driverName].active;
      if (driverName) {
        const activeStyleGuide = F1styleData[driverToConstructor(driverName)];
        const Tcam = driverTcamColors[driverName];
        const outlineColor =
          activeDrivers[driverName].teammateActive && Tcam === "Black"
            ? "bg-[#33424d]" //black
            : "bg-[#d9ff00]"; //yellow
        const activeBg = activeStyleGuide.primaryBGstyle;
        const activeTextColor = activeStyleGuide.secondaryTextStyle;
        return (
          <td
            key={`c-${cellIndex}`}
            onClick={() => {
              setActiveDrivers(handleActivate(driverName, activeDrivers));
            }}
            className={cn(
              {
                "bg-teal-200": sprint,
                "border-b-2 border-black": !sprint && finishPosition === 9,
              },
              {
                [outlineColor]:
                  activeDrivers[driverName].teammateActive && isDriver,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <div
              className={cn("relative mx-0.5 rounded-full px-1 font-mono", {
                [activeTextColor]: isDriver,
                [activeBg]: isDriver,
              })}
            >
              {driverName}
              {polePosition && (
                <span className="absolute -right-1 -top-1 text-sm text-black">
                  P
                </span>
              )}
              {fastestLap && (
                <span className="absolute -bottom-1 -right-1 text-sm text-black">
                  F
                </span>
              )}
            </div>
          </td>
        );
      } else {
        return (
          <td
            key={`c-${cellIndex}`}
            className={cn(
              {
                "bg-teal-200": sprint,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></td>
        );
      }
    });
    return (
      <tr key={`r-${rowIndex}`} className="border-b-2 border-white font-mono">
        <td className="text-center">{rowIndex + 1}</td>
        {tableCells}
      </tr>
    );
  });
  const DNFRows = DNFs.map((dnf, rowIndex) => {
    const DNFCells = dnf.map((driver, cellIndex) => {
      const { driverName, sprint } = driver;
      const isDriver =
        driverName !== undefined && activeDrivers[driverName].active;
      if (driverName) {
        const activeStyleGuide = F1styleData[driverToConstructor(driverName)];
        const Tcam = driverTcamColors[driverName];
        const outlineColor =
          activeDrivers[driverName].teammateActive && Tcam === "Black"
            ? "bg-[#33424d]" //black
            : "bg-[#d9ff00]"; //yellow
        const activeBg = activeStyleGuide.primaryBGstyle;
        const activeTextColor = activeStyleGuide.secondaryTextStyle;
        return (
          <td
            key={`c-${cellIndex}`}
            className={cn(
              {
                [outlineColor]:
                  activeDrivers[driverName].teammateActive && isDriver,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <div
              className={cn(
                "relative mx-0.5 rounded-full px-1",
                {
                  [activeTextColor]: isDriver,
                },
                {
                  [activeBg]: isDriver,
                }
              )}
            >
              {driverName}
            </div>
          </td>
        );
      } else {
        return (
          <td
            key={`c-${cellIndex}`}
            className={cn(
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></td>
        );
      }
    });
    return (
      <tr key={`r-${rowIndex}`} className="bg-red-500/30 font-mono">
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
    <>
      {tableRows}
      {DNFRows}
    </>
  );
};

/*return (
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
    </div>
  ); */
