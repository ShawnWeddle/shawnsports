import { useState } from "react";
import { api } from "~/utils/api";
import { cn } from "~/utils/cn";
import { z } from "zod";
import { useRankContext } from "~/hooks/useRanker";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import {
  type DriverCode24Type,
  driverToConstructor2024,
  driverNames2024,
  driverCodes2024,
} from "~/data/F1/2024/F1data24";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Button } from "../../ui/button";
import {
  createRankSchema,
  type CreateRankInput,
} from "~/server/api/rank/schema";

interface RankerRowProps {
  unRankedDriver: DriverCode24Type | null;
  rankedDriver: DriverCode24Type | null;
  index: number;
}

const F1enum = z.enum(driverCodes2024);

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedDriver, rankedDriver, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");
  const { rankDispatch } = useRankContext();

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
              rankDispatch({
                type: "RANK_ENTRY",
                payload: {
                  entry: unRankedDriver,
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
              rankDispatch({
                type: "UNRANK_ENTRY",
                payload: {
                  entry: rankedDriver,
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
                rankDispatch({
                  type: "RERANK_ENTRY",
                  payload: {
                    entry: rankedDriver,
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
                rankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    entry: rankedDriver,
                    rank: index,
                  },
                });
              }}
            >
              <MoveUp size={20} />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
              disabled={index === 21}
              onClick={() => {
                rankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    entry: rankedDriver,
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
  const { rankState, rankDispatch } = useRankContext();
  const { unRankedEntries, rankedEntries } = rankState;

  const { authState } = useAuthContext();
  const { user } = authState;

  const postRank = api.rank.createRank.useMutation();

  const handleSubmit = () => {
    const order = rankedEntries as string[];
    if (user) {
      const { userId, username, email } = user;
      const rankPost: CreateRankInput = {
        sport: "F1",
        order,
        client: {
          userId,
          username,
          email,
        },
      };
      const rankValidation = createRankSchema.safeParse(rankPost);
      if (rankValidation) {
        postRank.mutate({ ...rankPost });
      }
    }
  };

  const f1Rows = unRankedEntries.map((unRankedDriver, index) => {
    const rankedDriver: string | null = rankedEntries[index] ?? null;

    const newUnrankedDriver = unRankedDriver
      ? F1enum.parse(unRankedDriver)
      : null;
    const newRankedDriver = rankedDriver ? F1enum.parse(rankedDriver) : null;

    return (
      <RankerRow
        unRankedDriver={newUnrankedDriver}
        rankedDriver={newRankedDriver}
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
      <div className="flex justify-center">
        <Button
          className="m-1"
          variant={"formulaOne"}
          onClick={() => {
            rankState.rankedEntries.map((team, index) => {
              if (team) {
                rankDispatch({
                  type: "UNRANK_ENTRY",
                  payload: { entry: team, rank: index },
                });
              }
            });
          }}
        >
          RESET
        </Button>
        <Button
          className="m-1"
          disabled={rankedEntries.includes(null)}
          variant={"formulaOne"}
          onClick={() => {
            handleSubmit();
          }}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default F1Ranker;
