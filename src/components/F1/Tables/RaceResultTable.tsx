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

  const { fullResults, DNFs } = resultsSortedByPlace(FormulaOneRaceResults);
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
            ? "bg-[#33424d]"
            : "bg-[#d9ff00]";
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
                "bg-teal-100": sprint,
              },
              {
                "bg-teal-200":
                  sprint &&
                  finishPosition !== "DNF" &&
                  finishPosition !== "DNR" &&
                  finishPosition < 8,
              },
              {
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
                "bg-teal-100": sprint,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></td>
        );
      }
    });
    return (
      <tr
        key={`r-${rowIndex}`}
        className="border-b-2 border-gray-200 font-mono"
      >
        <td
          className={cn(
            "text-center",
            {
              "bg-yellow-200/60": rowIndex === 0,
            },
            {
              "bg-gray-400/60": rowIndex === 1,
            },
            {
              "bg-amber-600/60": rowIndex === 2,
            },
            {
              "bg-emerald-100": rowIndex > 2 && rowIndex < 10,
            },
            {
              "border-b-2 border-black": rowIndex === 9,
            }
          )}
        >
          {rowIndex + 1}
        </td>
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

  return (
    <>
      {tableRows}
      {DNFRows}
    </>
  );
};
