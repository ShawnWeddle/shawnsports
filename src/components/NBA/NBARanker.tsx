import { useState } from "react";
import { cn } from "~/utils/cn";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import { useNBARankContext } from "~/hooks/useNBARanker";
import { type NBATeamType, NBAteamData } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

interface RankerRowProps {
  unRankedTeam: NBATeamType | null;
  rankedTeam: NBATeamType | null;
  index: number;
}

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedTeam, rankedTeam, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");

  const { nbaRankDispatch } = useNBARankContext();

  return (
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedTeam ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [NBAstyleData[unRankedTeam].primaryBGstyle]: true,
                [NBAstyleData[unRankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {NBAteamData[unRankedTeam].location}{" "}
            {NBAteamData[unRankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NBAstyleData[unRankedTeam].primaryBGstyle]: true,
              [NBAstyleData[unRankedTeam].primaryPlainText]: true,
            })}
          >
            {NBAteamData[unRankedTeam].name}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nba/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nba">
          <input
            type="number"
            min={1}
            max={30}
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
              nbaRankDispatch({
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
            className="rounded px-1 text-nba"
            onClick={() => {
              nbaRankDispatch({
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
                [NBAstyleData[rankedTeam].primaryBGstyle]: true,
                [NBAstyleData[rankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {NBAteamData[rankedTeam].location} {NBAteamData[rankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [NBAstyleData[rankedTeam].primaryBGstyle]: true,
              [NBAstyleData[rankedTeam].primaryPlainText]: true,
            })}
          >
            {NBAteamData[rankedTeam].name}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nba/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nba">
          <div className="flex h-6 justify-between text-sm">
            <input
              type="number"
              min={1}
              max={30}
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
                nbaRankDispatch({
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
                nbaRankDispatch({
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
              disabled={index === 29}
              onClick={() => {
                nbaRankDispatch({
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

const NBARanker: React.FC = () => {
  const { nbaRankState } = useNBARankContext();
  const { unRankedTeams, rankedTeams } = nbaRankState;

  const nbaRows = unRankedTeams.map((unRankedTeam, index) => {
    const rankedTeam: NBATeamType | null = rankedTeams[index] ?? null;

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
        Rank NBA Teams
      </h1>
      <Table className="text-xs sm:text-base">
        <TableBody>{nbaRows}</TableBody>
      </Table>
    </div>
  );
};

export default NBARanker;
