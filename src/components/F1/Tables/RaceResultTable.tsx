import { useState } from "react";
import { cn } from "~/lib/utils";
import { resultsSortedByPlace } from "~/data/F1/2025/convert";
import { driverToConstructor2025 } from "~/data/F1/2025/F1data";
import { FormulaOneRaceResults } from "~/data/F1/2025/raceData";

import { F1styleData } from "~/data/F1/2025/F1styleData";
import type { RaceModeProps } from "~/data/F1/2025/F1data";
import { TableCell, TableRowNoHover } from "~/components/ui/table";

export const RaceResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;

  const { fullResults, DNFs, DQs } = resultsSortedByPlace(
    FormulaOneRaceResults
  );

  const tableRows = fullResults.map((result, rowIndex) => {
    const tableCells = result.map((driver, cellIndex) => {
      const {
        driverName,
        constructor,
        sprint,
        finishPosition,
        polePosition,
        fastestLap,
      } = driver;
      const isDriver = !!driverName;
      if (driverName && constructor) {
        const activeStyleGuide = F1styleData[constructor];
        const activeBg = activeStyleGuide.primaryBackground;
        const activeTextColor = activeStyleGuide.secondaryText;
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              {
                "bg-lightTeal/50": sprint,
              },
              {
                "bg-lightTeal":
                  sprint &&
                  finishPosition !== "DNF" &&
                  finishPosition !== "DNR" &&
                  finishPosition !== "DQ" &&
                  finishPosition < 8,
              },
              {
                "border-b-2 border-black": !sprint && finishPosition === 9,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <button
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
            </button>
          </TableCell>
        );
      } else {
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              {
                "bg-lightTeal/50": sprint,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></TableCell>
        );
      }
    });
    return (
      <TableRowNoHover
        key={`r-${rowIndex}`}
        className="border-b-2 border-gray-200 font-mono"
      >
        <TableCell
          className={cn(
            "text-center",
            {
              "bg-gold/60": rowIndex === 0,
            },
            {
              "bg-silver/60": rowIndex === 1,
            },
            {
              "bg-bronze/60": rowIndex === 2,
            },
            {
              "bg-superEmerald": rowIndex > 2 && rowIndex < 10,
            },
            {
              "border-b-2 border-black": rowIndex === 9,
            }
          )}
        >
          {rowIndex + 1}
        </TableCell>
        {tableCells}
      </TableRowNoHover>
    );
  });
  const DNFRows = DNFs.map((dnf, rowIndex) => {
    const DNFCells = dnf.map((driver, cellIndex) => {
      const { driverName, sprint, polePosition } = driver;
      const isDriver = !!driverName;
      if (driverName) {
        const activeStyleGuide =
          F1styleData[driverToConstructor2025(driverName)];

        const activeBg = activeStyleGuide.primaryBackground;
        const activeTextColor = activeStyleGuide.secondaryText;
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <button
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
              {polePosition && (
                <span className="absolute -right-1 -top-1 text-sm text-black">
                  P
                </span>
              )}
            </button>
          </TableCell>
        );
      } else {
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></TableCell>
        );
      }
    });
    return (
      <TableRowNoHover
        key={`r-${rowIndex}`}
        className="bg-formulaOne/30 font-mono"
      >
        <TableCell>{rowIndex === 0 ? "DNF" : ""}</TableCell>
        {DNFCells}
      </TableRowNoHover>
    );
  });
  const DQRows = DQs.map((dq, rowIndex) => {
    const DQCells = dq.map((driver, cellIndex) => {
      const { driverName, sprint, polePosition } = driver;
      const isDriver = !!driverName;
      if (driverName) {
        const activeStyleGuide =
          F1styleData[driverToConstructor2025(driverName)];
        const activeBg = activeStyleGuide.primaryBackground;
        const activeTextColor = activeStyleGuide.secondaryText;
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <button
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
              {polePosition && (
                <span className="absolute -right-1 -top-1 text-sm text-black">
                  P
                </span>
              )}
            </button>
          </TableCell>
        );
      } else {
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          ></TableCell>
        );
      }
    });
    return (
      <TableRowNoHover
        key={`r-${rowIndex}`}
        className="bg-black/40 font-mono text-white"
      >
        <TableCell>{rowIndex === 0 ? "DQ" : ""}</TableCell>
        {DQCells}
      </TableRowNoHover>
    );
  });

  return (
    <>
      {tableRows}
      {DNFRows}
      {DQRows}
    </>
  );
};
