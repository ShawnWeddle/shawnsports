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
import { FormulaOneRaceResults } from "~/data/F1/2026/raceData";
import { createStandings } from "~/data/F1/2026/convert";
import type {
  DriverCode26Type,
  ConstructorName26Type,
} from "~/data/F1/2026/F1data";
import { F1styleData } from "~/data/F1/2026/F1styleData";
import {
  driverCodes2026,
  constructorNames2026,
  driverToConstructor2026,
  allToConstructor2026,
} from "~/data/F1/2026/F1data";
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

const pointsHolderOptions = [...driverCodes2026, ...constructorNames2026].map(
  (pointsHolder, index) => {
    return (
      <option key={index}>
        {pointsHolder} {}
      </option>
    );
  }
);

const driverEnum = z.enum(driverCodes2026);
const constructorEnum = z.enum(constructorNames2026);
const pointsHolderEnum = z.enum([
  ...driverCodes2026,
  ...constructorNames2026,
  "No Selection",
]);

type PointsHolderType = {
  name: DriverCode26Type | ConstructorName26Type | "No Selection";
  type: "Driver" | "Constructor" | "No Selection";
  driver?: DriverCode26Type;
  constructor?: ConstructorName26Type;
};

const doc = (
  name: DriverCode26Type | ConstructorName26Type | "No Selection"
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
    doc("ANT")
  );
  const [pointsHolder2, setPointsHolder2] = useState<PointsHolderType>(
    doc("LEC")
  );
  const [pointsHolder3, setPointsHolder3] = useState<PointsHolderType>(
    doc("NOR")
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

  console.log(driverStandings, constructorStandings);

  const createData = (
    pointsHolders: PointsHolderType[]
  ): ChartDataset<"line">[] => {
    const datasets = pointsHolders.map((pointsHolder) => {
      if (pointsHolder.type === "Driver") {
        const driver = driverEnum.parse(pointsHolder.name);
        return {
          label: driver,
          data: driverStandings[driver].runTotal,
          borderColor: F1styleData[driverToConstructor2026(driver)].primary,
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
    setActiveDrivers([doc("VER"), doc("NOR"), doc("LEC")]);
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
                allToConstructor2026(
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
            className={cn("m-auto h-3 w-3 rounded-full", {
              "bg-white": pointsHolder1.constructor,
            })}
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
                allToConstructor2026(
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
                allToConstructor2026(
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
                allToConstructor2026(
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

/*
backgroundColor:
            driverTcamColors2026[driver] === "Black"
              ? "#33426d"
              : driverTcamColors2026[driver] === "Yellow"
              ? "#d9ff00"
              : "#00ffd9",
*/
