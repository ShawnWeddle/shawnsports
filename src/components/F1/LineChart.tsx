import { useState, useEffect } from "react";
import { z } from "zod";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartDataset } from "chart.js";
import { FormulaOneRaceResults } from "~/data/F1/raceResults";
import { createStandings } from "~/data/F1/F1converters";
import type { DriverCodeType, ConstructorNameType } from "~/data/F1/F1data";
import { F1styleData } from "~/data/F1/F1styleData";
import {
  driverCodes,
  constructorNames,
  driverTcamColors,
  driverToConstructor,
} from "~/data/F1/F1data";
import { cn } from "~/utils/cn";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const labels: string[] = FormulaOneRaceResults.map((race) => {
  return race.sprint ? race.location + " Sprint" : race.location;
});

const { driverStandings, constructorStandings } = createStandings(
  FormulaOneRaceResults
);

const pointsHolderOptions = [...driverCodes, ...constructorNames].map(
  (pointsHolder, index) => {
    return (
      <option key={index}>
        {pointsHolder} {}
      </option>
    );
  }
);

const driverEnum = z.enum(driverCodes);
const constructorEnum = z.enum(constructorNames);
const pointsHolderEnum = z.enum([
  ...driverCodes,
  ...constructorNames,
  "No Selection",
]);

type PointsHolderType = {
  name: DriverCodeType | ConstructorNameType | "No Selection";
  type: "Driver" | "Constructor" | "No Selection";
  driver?: DriverCodeType;
  constructor?: ConstructorNameType;
};

const doc = (
  name: DriverCodeType | ConstructorNameType | "No Selection"
): PointsHolderType => {
  if (driverEnum.safeParse(name).success) {
    return {
      name: name,
      type: "Driver",
      driver: driverEnum.parse(name),
      constructor: undefined,
    };
  } else if (constructorEnum.safeParse(name).success) {
    return {
      name: name,
      type: "Constructor",
      constructor: constructorEnum.parse(name),
      driver: undefined,
    };
  } else {
    return {
      name: "No Selection",
      type: "No Selection",
      constructor: undefined,
      driver: undefined,
    };
  }
};

const LineChart: React.FC = () => {
  const [pointsHolder1, setPointsHolder1] = useState<PointsHolderType>(
    doc("VER")
  );
  const [pointsHolder2, setPointsHolder2] = useState<PointsHolderType>(
    doc("HAM")
  );
  const [pointsHolder3, setPointsHolder3] = useState<PointsHolderType>(
    doc("No Selection")
  );
  const [pointsHolder4, setPointsHolder4] = useState<PointsHolderType>(
    doc("No Selection")
  );
  const [activeDrivers, setActiveDrivers] = useState<PointsHolderType[]>([
    pointsHolder1,
    pointsHolder2,
    pointsHolder3,
    pointsHolder4,
  ]);

  const createData = (
    pointsHolders: PointsHolderType[]
  ): ChartDataset<"line">[] => {
    const datasets = pointsHolders.map((pointsHolder) => {
      if (pointsHolder.type === "Driver") {
        const driver = driverEnum.parse(pointsHolder.name);
        return {
          label: driver,
          data: driverStandings[driver].runTotal,
          borderColor: F1styleData[driverToConstructor(driver)].primary,
          backgroundColor:
            driverTcamColors[driver] === "Black" ? "#33424d" : "#d9ff00",
        };
      } else if (pointsHolder.type === "Constructor") {
        const constructor = constructorEnum.parse(pointsHolder.name);
        return {
          label: constructor,
          data: constructorStandings[constructor].runTotal,
          borderColor: F1styleData[constructor].primary,
          backgroundColor: "#FFFFFF",
        };
      } else {
        return {
          label: pointsHolder.name,
          data: [0],
        };
      }
    });
    return datasets;
  };

  const data: ChartData<"line"> = {
    labels: labels,
    datasets: createData(activeDrivers),
  };

  useEffect(() => {
    setActiveDrivers([doc("VER"), doc("HAM")]);
  }, []);

  return (
    <div className="flex min-h-max w-full max-w-screen-md flex-col items-start sm:items-center">
      <Line data={data} />
      <div className="flex flex-wrap justify-center gap-2">
        <div
          className={cn(
            "flex justify-center gap-2 rounded-md p-2",
            {
              [F1styleData[
                driverToConstructor(
                  pointsHolder1.name !== "No Selection"
                    ? pointsHolder1.name
                    : "ALB"
                )
              ].primaryBGstyle]: pointsHolder1.name !== "No Selection",
            },
            {
              "bg-gray-300": pointsHolder1.name === "No Selection",
            }
          )}
        >
          <div
            className={cn(
              "m-auto h-3 w-3 rounded-full",
              {
                "bg-[#33424d]":
                  pointsHolder1.driver &&
                  driverTcamColors[pointsHolder1.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder1.driver &&
                  driverTcamColors[pointsHolder1.driver] === "Yellow",
              },
              {
                "bg-white": pointsHolder1.constructor,
              }
            )}
          ></div>
          <select
            onChange={(e) => {
              const newPointsHolder = pointsHolderEnum.parse(e.target.value);
              setPointsHolder1(doc(newPointsHolder));
              setActiveDrivers([
                doc(newPointsHolder),
                pointsHolder2,
                pointsHolder3,
                pointsHolder4,
              ]);
            }}
            value={pointsHolder1.name}
          >
            {pointsHolderOptions}
          </select>
        </div>

        <div
          className={cn(
            "flex justify-center gap-2 rounded-md p-2",
            {
              [F1styleData[
                driverToConstructor(
                  pointsHolder2.name !== "No Selection"
                    ? pointsHolder2.name
                    : "ALB"
                )
              ].primaryBGstyle]: pointsHolder2.name !== "No Selection",
            },
            {
              "bg-gray-300": pointsHolder2.name === "No Selection",
            }
          )}
        >
          <div
            className={cn(
              "m-auto h-3 w-3 rounded-full",
              {
                "bg-[#33424d]":
                  pointsHolder2.driver &&
                  driverTcamColors[pointsHolder2.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder2.driver &&
                  driverTcamColors[pointsHolder2.driver] === "Yellow",
              },
              {
                "bg-white": pointsHolder2.constructor,
              },
              {
                "bg-gray-300": pointsHolder2.name === "No Selection",
              }
            )}
          ></div>
          <select
            onChange={(e) => {
              const newPointsHolder = pointsHolderEnum.parse(e.target.value);
              setPointsHolder2(doc(newPointsHolder));
              setActiveDrivers([
                pointsHolder1,
                doc(newPointsHolder),
                pointsHolder3,
                pointsHolder4,
              ]);
            }}
            value={pointsHolder2.name}
          >
            <option>{`No Selection`}</option>
            {pointsHolderOptions}
          </select>
        </div>

        <div
          className={cn(
            "flex justify-center gap-2 rounded-md p-2",
            {
              [F1styleData[
                driverToConstructor(
                  pointsHolder3.name !== "No Selection"
                    ? pointsHolder3.name
                    : "ALB"
                )
              ].primaryBGstyle]: pointsHolder3.name !== "No Selection",
            },
            {
              "bg-gray-300": pointsHolder3.name === "No Selection",
            }
          )}
        >
          <div
            className={cn(
              "m-auto h-3 w-3 rounded-full",
              {
                "bg-[#33424d]":
                  pointsHolder3.driver &&
                  driverTcamColors[pointsHolder3.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder3.driver &&
                  driverTcamColors[pointsHolder3.driver] === "Yellow",
              },
              {
                "bg-white": pointsHolder3.constructor,
              },
              {
                "bg-gray-300": pointsHolder3.name === "No Selection",
              }
            )}
          ></div>
          <select
            onChange={(e) => {
              const newPointsHolder = pointsHolderEnum.parse(e.target.value);
              setPointsHolder3(doc(newPointsHolder));
              setActiveDrivers([
                pointsHolder1,
                pointsHolder2,
                doc(newPointsHolder),
                pointsHolder4,
              ]);
            }}
            value={pointsHolder3.name}
          >
            <option>{`No Selection`}</option>
            {pointsHolderOptions}
          </select>
        </div>

        <div
          className={cn(
            "flex justify-center gap-2 rounded-md p-2",
            {
              [F1styleData[
                driverToConstructor(
                  pointsHolder4.name !== "No Selection"
                    ? pointsHolder4.name
                    : "ALB"
                )
              ].primaryBGstyle]: pointsHolder4.name !== "No Selection",
            },
            {
              "bg-gray-300": pointsHolder4.name === "No Selection",
            }
          )}
        >
          <div
            className={cn(
              "m-auto h-3 w-3 rounded-full",
              {
                "bg-[#33424d]":
                  pointsHolder4.driver &&
                  driverTcamColors[pointsHolder4.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder4.driver &&
                  driverTcamColors[pointsHolder4.driver] === "Yellow",
              },
              {
                "bg-white": pointsHolder4.constructor,
              },
              {
                "bg-gray-300": pointsHolder4.name === "No Selection",
              }
            )}
          ></div>
          <select
            onChange={(e) => {
              const newPointsHolder = pointsHolderEnum.parse(e.target.value);
              setPointsHolder4(doc(newPointsHolder));
              setActiveDrivers([
                pointsHolder1,
                pointsHolder2,
                pointsHolder3,
                doc(newPointsHolder),
              ]);
            }}
            value={pointsHolder4.name}
          >
            <option>{`No Selection`}</option>
            {pointsHolderOptions}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
