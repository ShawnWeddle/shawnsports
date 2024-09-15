import { useState } from "react";
import { api } from "~/utils/api";
import { cn } from "~/lib/utils";
import { useRankContext } from "~/hooks/useRanker";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Button } from "../ui/button";
import { type SportType } from "~/data/SiteData";
import { rankerInfo, GlobalSportData } from "~/data/universal/rankerData";
import {
  createRankSchema,
  type CreateRankInput,
} from "~/server/api/rank/schema";

interface RankerRowProps {
  unRankedEntry: string | null;
  rankedEntry: string | null;
  index: number;
  sport: SportType;
}

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedEntry, rankedEntry, index, sport } = props;
  const { rankDispatch } = useRankContext();
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");

  const unrankedInfo = unRankedEntry ? rankerInfo(unRankedEntry, sport) : null;
  const rankedInfo = rankedEntry ? rankerInfo(rankedEntry, sport) : null;

  return (
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unrankedInfo ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [unrankedInfo.style.primaryBackground]: true,
                [unrankedInfo.style.simpleText]: true,
              }
            )}
          >
            {unrankedInfo.text.long}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [unrankedInfo.style.primaryBackground]: true,
              [unrankedInfo.style.simpleText]: true,
            })}
          >
            {unrankedInfo.text.short}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap py-0 pl-2 sm:w-52",
              {
                "bg-cfl/30": sport === "CFL",
                "bg-formulaOne/30": sport === "F1",
                "bg-mlb/30": sport === "MLB",
                "bg-nba/30": sport === "NBA" || sport === "WNBA",
                "bg-nfl/30": sport === "NFL",
                "bg-nhl/30": sport === "NHL",
              }
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div
          className={cn("flex justify-center overflow-hidden rounded", {
            "bg-cfl": sport === "CFL",
            "bg-formulaOne": sport === "F1",
            "bg-mlb": sport === "MLB",
            "bg-nba": sport === "NBA" || sport === "WNBA",
            "bg-nfl": sport === "NFL",
            "bg-nhl": sport === "NHL",
          })}
        >
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
            className="px-1 text-white"
            onClick={() => {
              rankDispatch({
                type: "RANK_ENTRY",
                payload: {
                  entry: unRankedEntry,
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
            className={cn("rounded px-1", {
              "text-cfl": sport === "CFL",
              "text-formulaOne": sport === "F1",
              "text-mlb": sport === "MLB",
              "text-nba": sport === "NBA" || sport === "WNBA",
              "text-nfl": sport === "NFL",
              "text-nhl": sport === "NHL",
            })}
            onClick={() => {
              rankDispatch({
                type: "UNRANK_ENTRY",
                payload: {
                  entry: rankedEntry,
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
      {rankedInfo ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [rankedInfo.style.primaryBackground]: true,
                [rankedInfo.style.simpleText]: true,
              }
            )}
          >
            {rankedInfo.text.long}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [rankedInfo.style.primaryBackground]: true,
              [rankedInfo.style.simpleText]: true,
            })}
          >
            {rankedInfo.text.short}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap py-0 pl-2 sm:w-52",
              {
                "bg-cfl/30": sport === "CFL",
                "bg-formulaOne/30": sport === "F1",
                "bg-mlb/30": sport === "MLB",
                "bg-nba/30": sport === "NBA" || sport === "WNBA",
                "bg-nfl/30": sport === "NFL",
                "bg-nhl/30": sport === "NHL",
              }
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div
          className={cn("flex justify-center overflow-hidden rounded", {
            "bg-cfl": sport === "CFL",
            "bg-formulaOne": sport === "F1",
            "bg-mlb": sport === "MLB",
            "bg-nba": sport === "NBA" || sport === "WNBA",
            "bg-nfl": sport === "NFL",
            "bg-nhl": sport === "NHL",
          })}
        >
          <div className="flex h-6 justify-between text-sm">
            <input
              type="number"
              min={1}
              max={GlobalSportData[sport].totalNum}
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
                    entry: rankedEntry,
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
                    entry: rankedEntry,
                    rank: index,
                  },
                });
              }}
            >
              <MoveUp size={20} />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
              disabled={index === GlobalSportData[sport].totalNum - 1}
              onClick={() => {
                rankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    entry: rankedEntry,
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

type RankerProps = {
  sport: SportType;
};

const Ranker: React.FC<RankerProps> = (props: RankerProps) => {
  const { rankState, rankDispatch } = useRankContext();
  const { unRankedEntries, rankedEntries } = rankState;
  const { sport } = props;

  const { authState } = useAuthContext();
  const { user } = authState;

  const postRank = api.rank.createRank.useMutation();

  const gsd = GlobalSportData[sport];

  const handleSubmit = () => {
    const order = rankedEntries as string[];
    if (user) {
      const { userId, username, email } = user;
      const rankPost: CreateRankInput = {
        sport,
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

  const rows = unRankedEntries.map((unRankedEntry, index) => {
    const rankedEntry: string | null = rankedEntries[index] ?? null;

    return (
      <RankerRow
        unRankedEntry={unRankedEntry}
        rankedEntry={rankedEntry}
        sport={sport}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Rank {gsd.title}
      </h1>
      <Table className="w-min text-xs md:text-base">
        <TableBody>{rows}</TableBody>
      </Table>
      <div className="flex justify-center">
        <Button
          className="m-1"
          variant={gsd.variant}
          onClick={() => {
            rankState.rankedEntries.map((entry, index) => {
              if (entry) {
                rankDispatch({
                  type: "UNRANK_ENTRY",
                  payload: { entry, rank: index },
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
          variant={gsd.variant}
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

export default Ranker;
