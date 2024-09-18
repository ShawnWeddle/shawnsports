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
import { FormulaOneRaceResults } from "~/data/F1/2024/raceResults2024";
import { createStandings } from "~/data/F1/2024/F1converters24";
import type {
  DriverCode24Type,
  ConstructorName24Type,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import {
  driverCodes2024,
  constructorNames2024,
  driverTcamColors2024,
  driverToConstructor2024,
  allToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { cn } from "~/lib/utils";

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

const pointsHolderOptions = [...driverCodes2024, ...constructorNames2024].map(
  (pointsHolder, index) => {
    return (
      <option key={index}>
        {pointsHolder} {}
      </option>
    );
  }
);

const driverEnum = z.enum(driverCodes2024);
const constructorEnum = z.enum(constructorNames2024);
const pointsHolderEnum = z.enum([
  ...driverCodes2024,
  ...constructorNames2024,
  "No Selection",
]);

type PointsHolderType = {
  name: DriverCode24Type | ConstructorName24Type | "No Selection";
  type: "Driver" | "Constructor" | "No Selection";
  driver?: DriverCode24Type;
  constructor?: ConstructorName24Type;
};

const doc = (
  name: DriverCode24Type | ConstructorName24Type | "No Selection"
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
    doc("NOR")
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
          borderColor: F1styleData[driverToConstructor2024(driver)].primary,
          backgroundColor:
            driverTcamColors2024[driver] === "Black"
              ? "#33424d"
              : driverTcamColors2024[driver] === "Yellow"
              ? "#d9ff00"
              : "#00ffd9",
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
    setActiveDrivers([doc("VER"), doc("NOR")]);
  }, []);

  return (
    <div className="flex w-full max-w-screen-md flex-col items-start sm:items-center">
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Compare Drivers and Constructors
        </h1>
      </div>
      <Line data={data} />
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <div
          className={cn(
            "flex justify-center gap-2 rounded-md p-2",
            {
              [F1styleData[
                allToConstructor2024(
                  pointsHolder1.name !== "No Selection"
                    ? pointsHolder1.name
                    : "ALB"
                )
              ].primaryBackground]: pointsHolder1.name !== "No Selection",
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
                  driverTcamColors2024[pointsHolder1.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder1.driver &&
                  driverTcamColors2024[pointsHolder1.driver] === "Yellow",
              },
              {
                "bg-[#00ffd9]":
                  pointsHolder1.driver &&
                  driverTcamColors2024[pointsHolder1.driver] === "Cyan",
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
                allToConstructor2024(
                  pointsHolder2.name !== "No Selection"
                    ? pointsHolder2.name
                    : "ALB"
                )
              ].primaryBackground]: pointsHolder2.name !== "No Selection",
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
                  driverTcamColors2024[pointsHolder2.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder2.driver &&
                  driverTcamColors2024[pointsHolder2.driver] === "Yellow",
              },
              {
                "bg-[#00ffd9]":
                  pointsHolder2.driver &&
                  driverTcamColors2024[pointsHolder2.driver] === "Cyan",
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
                allToConstructor2024(
                  pointsHolder3.name !== "No Selection"
                    ? pointsHolder3.name
                    : "ALB"
                )
              ].primaryBackground]: pointsHolder3.name !== "No Selection",
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
                  driverTcamColors2024[pointsHolder3.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder3.driver &&
                  driverTcamColors2024[pointsHolder3.driver] === "Yellow",
              },
              {
                "bg-[#00ffd9]":
                  pointsHolder3.driver &&
                  driverTcamColors2024[pointsHolder3.driver] === "Cyan",
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
                allToConstructor2024(
                  pointsHolder4.name !== "No Selection"
                    ? pointsHolder4.name
                    : "ALB"
                )
              ].primaryBackground]: pointsHolder4.name !== "No Selection",
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
                  driverTcamColors2024[pointsHolder4.driver] === "Black",
              },
              {
                "bg-[#d9ff00]":
                  pointsHolder4.driver &&
                  driverTcamColors2024[pointsHolder4.driver] === "Yellow",
              },
              {
                "bg-[#00ffd9]":
                  pointsHolder4.driver &&
                  driverTcamColors2024[pointsHolder4.driver] === "Cyan",
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
