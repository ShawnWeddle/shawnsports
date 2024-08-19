import { useState } from "react";
import { cn } from "~/utils/cn";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import { useF1RankContext } from "~/hooks/useF1Ranker";
import {
  type DriverCode24Type,
  driverToConstructor2024,
  driverNames2024,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

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
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedDriver ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [F1styleData[driverToConstructor2024(unRankedDriver)]
                  .primaryBGstyle]: true,
                [F1styleData[driverToConstructor2024(unRankedDriver)]
                  .secondaryTextStyle]: true,
              }
            )}
          >
            {driverNames2024[unRankedDriver].first}{" "}
            {driverNames2024[unRankedDriver].last}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(unRankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {unRankedDriver !== "ZHO"
              ? driverNames2024[unRankedDriver].last
              : driverNames2024[unRankedDriver].first}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-formulaOne/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-formulaOne">
          <input
            type="number"
            min={1}
            max={21}
            className="h-6 w-6 bg-gray-100 text-center sm:w-10"
            onChange={(e) => {
              const inputRank = e.target.value;
              setNewRank(inputRank);
            }}
            value={newRank}
          />
          <button
            className="px-1 text-white"
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
            <MoveRight />
          </button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex justify-between">
          <button
            className="rounded px-1 text-formulaOne"
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
            <MoveLeft />
          </button>
          <span className="px-1 text-center text-sm font-bold">
            {index + 1}
          </span>
        </div>
      </TableCell>
      {rankedDriver ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [F1styleData[driverToConstructor2024(rankedDriver)]
                  .primaryBGstyle]: true,
                [F1styleData[driverToConstructor2024(rankedDriver)]
                  .secondaryTextStyle]: true,
              }
            )}
          >
            {driverNames2024[rankedDriver].first}{" "}
            {driverNames2024[rankedDriver].last}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .primaryBGstyle]: true,
              [F1styleData[driverToConstructor2024(rankedDriver)]
                .secondaryTextStyle]: true,
            })}
          >
            {rankedDriver === "ZHO"
              ? driverNames2024[rankedDriver].first
              : driverNames2024[rankedDriver].last}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-formulaOne/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-formulaOne">
          <div className="flex h-6 justify-between text-sm">
            <input
              type="number"
              min={1}
              max={21}
              className="hidden h-6 w-6 bg-gray-100 text-center sm:block sm:w-10"
              onChange={(e) => {
                const inputRank = e.target.value;
                setReRank(inputRank);
              }}
              value={reRank}
            />
            <button
              className="hidden px-1 text-white sm:block"
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
              <MoveRight />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
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
              <MoveUp size={20} />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
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
              <MoveDown size={20} />
            </button>
          </div>
        </div>
      </TableCell>
    </TableRow>
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
      <Table className="text-xs sm:text-base">
        <TableBody>{f1Rows}</TableBody>
      </Table>
    </div>
  );
};

export default F1Ranker;
