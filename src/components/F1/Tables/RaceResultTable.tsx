import { useState } from "react";
import { cn } from "~/lib/utils";
import { resultsSortedByPlace } from "~/data/F1/2024/convert";
import {
  driverTcamColors2024,
  driverToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { FormulaOneRaceResults } from "~/data/F1/2024/raceData";
import {
  driverActivation2024,
  handleActivate2024,
} from "~/data/F1/2024/HandleActivation24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import type { RaceModeProps } from "~/data/F1/2024/F1data24";
import { TableCell, TableRowNoHover } from "~/components/ui/table";

export const RaceResultTable: React.FC<RaceModeProps> = (
  props: RaceModeProps
) => {
  const { raceMode } = props;

  const [activeDrivers, setActiveDrivers] = useState(driverActivation2024);

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
      const isDriver = !!driverName && !!activeDrivers[driverName];
      if (driverName && constructor) {
        const activeStyleGuide = F1styleData[constructor];
        const Tcam = driverTcamColors2024[driverName];
        const newActiveDriver = activeDrivers[driverName];
        const outlineColor =
          newActiveDriver && newActiveDriver.teammateActive && Tcam === "Black"
            ? "bg-[#33424d]"
            : Tcam === "Yellow"
            ? "bg-[#d9ff00]"
            : "bg-[#00ffd9]";
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
              {
                [outlineColor]:
                  newActiveDriver && newActiveDriver.teammateActive && isDriver,
              },
              { hidden: sprint && raceMode === "Grands Prix Only" },
              { hidden: !sprint && raceMode === "Sprint Races Only" }
            )}
          >
            <button
              onClick={() => {
                setActiveDrivers(handleActivate2024(driverName, activeDrivers));
              }}
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
      const isDriver = !!driverName && !!activeDrivers[driverName];
      if (driverName) {
        const activeStyleGuide =
          F1styleData[driverToConstructor2024(driverName)];
        const Tcam = driverTcamColors2024[driverName];
        const newActiveDriver = activeDrivers[driverName];
        const outlineColor =
          newActiveDriver && newActiveDriver.teammateActive && Tcam === "Black"
            ? "bg-[#33424d]" //black
            : "bg-[#d9ff00]"; //yellow
        const activeBg = activeStyleGuide.primaryBackground;
        const activeTextColor = activeStyleGuide.secondaryText;
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              {
                [outlineColor]:
                  newActiveDriver && newActiveDriver.teammateActive && isDriver,
              },
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
      const isDriver = !!driverName && !!activeDrivers[driverName];
      if (driverName) {
        const activeStyleGuide =
          F1styleData[driverToConstructor2024(driverName)];
        const Tcam = driverTcamColors2024[driverName];
        const newActiveDriver = activeDrivers[driverName];
        const outlineColor =
          newActiveDriver && newActiveDriver.teammateActive && Tcam === "Black"
            ? "bg-[#33424d]" //black
            : "bg-[#d9ff00]"; //yellow
        const activeBg = activeStyleGuide.primaryBackground;
        const activeTextColor = activeStyleGuide.secondaryText;
        return (
          <TableCell
            key={`c-${cellIndex}`}
            className={cn(
              {
                [outlineColor]:
                  newActiveDriver && newActiveDriver.teammateActive && isDriver,
              },
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
