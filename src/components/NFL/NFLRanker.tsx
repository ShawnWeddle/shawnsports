import { useState } from "react";
import { cn } from "~/utils/cn";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import { useAuthContext } from "~/hooks/useAuthContext";
import { useNFLRankContext } from "~/hooks/useNFLRanker";
import { type NFLTeamType, NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import {
  createRankSchema,
  type CreateRankInput,
} from "~/server/api/rank/schema";
import { api } from "~/utils/api";
interface RankerRowProps {
  unRankedTeam: NFLTeamType | null;
  rankedTeam: NFLTeamType | null;
  index: number;
}

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedTeam, rankedTeam, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");
  const { nflRankDispatch } = useNFLRankContext();

  return (
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedTeam ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [NFLstyleData[unRankedTeam].primaryBGstyle]: true,
                [NFLstyleData[unRankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {NFLteamData[unRankedTeam].location}{" "}
            {NFLteamData[unRankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NFLstyleData[unRankedTeam].primaryBGstyle]: true,
              [NFLstyleData[unRankedTeam].primaryPlainText]: true,
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
              nflRankDispatch({
                type: "RANK_TEAM",
                payload: {
                  team: unRankedTeam,
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
              nflRankDispatch({
                type: "UNRANK_TEAM",
                payload: {
                  team: rankedTeam,
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
                [NFLstyleData[rankedTeam].primaryBGstyle]: true,
                [NFLstyleData[rankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {NFLteamData[rankedTeam].location} {NFLteamData[rankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NFLstyleData[rankedTeam].primaryBGstyle]: true,
              [NFLstyleData[rankedTeam].primaryPlainText]: true,
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
                nflRankDispatch({
                  type: "RERANK_TEAM",
                  payload: {
                    team: rankedTeam,
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
                nflRankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    team: rankedTeam,
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
                nflRankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    team: rankedTeam,
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
  const { nflRankState } = useNFLRankContext();
  const { unRankedTeams, rankedTeams } = nflRankState;

  const { authState } = useAuthContext();
  const { user } = authState;

  const postRank = api.rank.createRank.useMutation();

  const handleSubmit = () => {
    const order = rankedTeams as string[];
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
        postRank.mutate(
          { ...rankPost },
          {
            onSuccess() {
              console.log("Success");
            },
          }
        );
      }
    }
  };

  const nflRows = unRankedTeams.map((unRankedTeam, index) => {
    const rankedTeam: NFLTeamType | null = rankedTeams[index] ?? null;

    return (
      <RankerRow
        unRankedTeam={unRankedTeam}
        rankedTeam={rankedTeam}
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

      <button
        disabled={rankedTeams.includes(null)}
        className="m-2 rounded-md border-2 border-nfl bg-nfl/50 p-1 text-lg font-semibold text-white hover:bg-nfl/60 disabled:bg-gray-500"
        onClick={() => {
          handleSubmit();
        }}
      >
        {" "}
        SAVE{" "}
      </button>
    </div>
  );
};

export default NFLRanker;
