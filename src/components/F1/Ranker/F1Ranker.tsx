import { useState } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import { cn } from "~/utils/cn";
import { useF1RankContext } from "~/hooks/useF1Ranker";
import {
  type DriverCode24Type,
  driverToConstructor2024,
  driverNames2024,
} from "~/data/F1/2024/F1data24";

import { F1styleData } from "~/data/F1/2024/F1styleData24";

interface RankerRowProps {
  unRankedDriver: DriverCode24Type | null;
  rankedDriver: DriverCode24Type | null;
  index: number;
}

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedDriver, rankedDriver, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");

  const { f1RankDispatch } = useF1RankContext();

  return (
    <tr className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedDriver ? (
        <>
          <td
            className={cn("-pr-2 hidden w-52 pl-2 sm:block", {
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {driverNames2024[unRankedDriver].first}{" "}
            {driverNames2024[unRankedDriver].last}
          </td>
          <td
            className={cn("-pr-2 w-24 pl-2 sm:hidden", {
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {unRankedDriver !== "ZHO"
              ? driverNames2024[unRankedDriver].last
              : driverNames2024[unRankedDriver].first}
          </td>
        </>
      ) : (
        <td className={cn("w-24 bg-formulaOne/30 sm:w-52")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-formulaOne">
          <input
            type="number"
            min={1}
            max={32}
            className="h-6 w-6 bg-gray-100 text-center sm:w-10"
            onChange={(e) => {
              const inputRank = e.target.value;
              setNewRank(inputRank);
            }}
            value={newRank}
          />
          <button
            className="px-1 py-0.5 text-white"
            onClick={() => {
              f1RankDispatch({
                type: "RANK_DRIVER",
                payload: {
                  driver: unRankedDriver,
                  rank: parseInt(newRank),
                },
              });
              setNewRank("");
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </td>
      <td>
        <div className="flex justify-between">
          <button
            className="rounded px-1 py-0.5 text-formulaOne"
            onClick={() => {
              f1RankDispatch({
                type: "UNRANK_DRIVER",
                payload: {
                  driver: rankedDriver,
                  rank: index,
                },
              });
            }}
          >
            <FaArrowLeft />
          </button>
          <span className="px-1 text-center font-bold">{index + 1}</span>
        </div>
      </td>
      {rankedDriver ? (
        <>
          <td
            className={cn("-pr-2 hidden w-52 pl-2 sm:block", {
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {driverNames2024[rankedDriver].first}{" "}
            {driverNames2024[rankedDriver].last}
          </td>
          <td
            className={cn("-pr-2 w-24 pl-2 sm:hidden", {
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {rankedDriver !== "ZHO"
              ? driverNames2024[rankedDriver].last
              : driverNames2024[rankedDriver].first}
          </td>
        </>
      ) : (
        <td className={cn("w-24 bg-formulaOne/30 sm:w-52")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-formulaOne">
          <input
            type="number"
            min={1}
            max={32}
            className="h-6 w-6 bg-gray-100 text-center sm:w-10"
            onChange={(e) => {
              const inputRank = e.target.value;
              setReRank(inputRank);
            }}
            value={reRank}
          />
          <button
            className="px-1 py-0.5 text-white"
            onClick={() => {
              f1RankDispatch({
                type: "RERANK_DRIVER",
                payload: {
                  driver: rankedDriver,
                  rank: parseInt(reRank),
                  prevRank: index,
                },
              });
              setReRank("");
            }}
          >
            <FaArrowRight />
          </button>
          <div className="hidden h-6 flex-col justify-between sm:flex">
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 0}
              onClick={() => {
                f1RankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    driver: rankedDriver,
                    rank: index,
                  },
                });
              }}
            >
              <BsChevronCompactUp />
            </button>
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 20}
              onClick={() => {
                f1RankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    driver: rankedDriver,
                    rank: index,
                  },
                });
              }}
            >
              <BsChevronCompactDown />
            </button>
          </div>
          <div className="flex h-6 justify-between sm:hidden">
            <button
              className="h-6 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 0}
              onClick={() => {
                f1RankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    driver: rankedDriver,
                    rank: index,
                  },
                });
              }}
            >
              <FaArrowUp />
            </button>
            <button
              className="h-6 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 20}
              onClick={() => {
                f1RankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    driver: rankedDriver,
                    rank: index,
                  },
                });
              }}
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

const F1Ranker: React.FC = () => {
  const { f1RankState } = useF1RankContext();
  const { unRankedDrivers, rankedDrivers } = f1RankState;

  const f1Rows = unRankedDrivers.map((unRankedDriver, index) => {
    const rankedDriver: DriverCode24Type | null = rankedDrivers[index] ?? null;

    return (
      <RankerRow
        unRankedDriver={unRankedDriver}
        rankedDriver={rankedDriver}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Rank F1 Drivers
      </h1>
      <table className="text-xs sm:text-base">
        <tbody>{f1Rows}</tbody>
      </table>
    </div>
  );
};

export default F1Ranker;
