import { useState } from "react";
import { api } from "~/utils/api";
import { cn } from "~/utils/cn";
import { z } from "zod";
import { useRankContext } from "~/hooks/useRanker";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import {
  type NFLTeamType,
  NFLteamData,
  nflTeamsRanked,
} from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Button } from "../ui/button";
import {
  createRankSchema,
  type CreateRankInput,
} from "~/server/api/rank/schema";
interface RankerRowProps {
  unRankedTeam: NFLTeamType | null;
  rankedTeam: NFLTeamType | null;
  index: number;
}

const NFLenum = z.enum(nflTeamsRanked);

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedTeam, rankedTeam, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");
  const { rankDispatch } = useRankContext();

  return (
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedTeam ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [NFLstyleData[unRankedTeam].primaryBackground]: true,
                [NFLstyleData[unRankedTeam].simpleText]: true,
              }
            )}
          >
            {NFLteamData[unRankedTeam].location}{" "}
            {NFLteamData[unRankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NFLstyleData[unRankedTeam].primaryBackground]: true,
              [NFLstyleData[unRankedTeam].simpleText]: true,
            })}
          >
            {NFLteamData[unRankedTeam].name}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nfl/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
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
                  entry: unRankedTeam,
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
            className="rounded px-1 text-nfl"
            onClick={() => {
              rankDispatch({
                type: "UNRANK_ENTRY",
                payload: {
                  entry: rankedTeam,
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
      {rankedTeam ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [NFLstyleData[rankedTeam].primaryBackground]: true,
                [NFLstyleData[rankedTeam].simpleText]: true,
              }
            )}
          >
            {NFLteamData[rankedTeam].location} {NFLteamData[rankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NFLstyleData[rankedTeam].primaryBackground]: true,
              [NFLstyleData[rankedTeam].simpleText]: true,
            })}
          >
            {NFLteamData[rankedTeam].name}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nfl/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
          <div className="flex h-6 justify-between text-sm">
            <input
              type="number"
              min={1}
              max={32}
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
                    entry: rankedTeam,
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
                    entry: rankedTeam,
                    rank: index,
                  },
                });
              }}
            >
              <MoveUp size={20} />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
              disabled={index === 31}
              onClick={() => {
                rankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    entry: rankedTeam,
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

const NFLRanker: React.FC = () => {
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
        sport: "NFL",
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

  const nflRows = unRankedEntries.map((unRankedTeam, index) => {
    const rankedTeam: string | null = rankedEntries[index] ?? null;

    const newUnrankedTeam = unRankedTeam ? NFLenum.parse(unRankedTeam) : null;
    const newRankedTeam = rankedTeam ? NFLenum.parse(rankedTeam) : null;

    return (
      <RankerRow
        unRankedTeam={newUnrankedTeam}
        rankedTeam={newRankedTeam}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Rank NFL Teams
      </h1>
      <Table className="w-min text-xs md:text-base">
        <TableBody>{nflRows}</TableBody>
      </Table>
      <div className="flex justify-center">
        <Button
          className="m-1"
          variant={"nfl"}
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
          variant={"nfl"}
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

export default NFLRanker;
