import { useState } from "react";
import { cn } from "~/utils/cn";
import { z } from "zod";
import { useRankContext } from "~/hooks/useRanker";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import {
  type WNBATeamType,
  WNBAteamData,
  wnbaTeamsRanked,
} from "~/data/WNBA/WNBAdata";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

interface RankerRowProps {
  unRankedTeam: WNBATeamType | null;
  rankedTeam: WNBATeamType | null;
  index: number;
}

const WNBAenum = z.enum(wnbaTeamsRanked);

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
                [WNBAstyleData[unRankedTeam].primaryBGstyle]: true,
                [WNBAstyleData[unRankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {WNBAteamData[unRankedTeam].location}{" "}
            {WNBAteamData[unRankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [WNBAstyleData[unRankedTeam].primaryBGstyle]: true,
              [WNBAstyleData[unRankedTeam].primaryPlainText]: true,
            })}
          >
            {WNBAteamData[unRankedTeam].name}
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
            max={12}
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
            className="rounded px-1 text-nba"
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
                [WNBAstyleData[rankedTeam].primaryBGstyle]: true,
                [WNBAstyleData[rankedTeam].primaryPlainText]: true,
              }
            )}
          >
            {WNBAteamData[rankedTeam].location} {WNBAteamData[rankedTeam].name}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [WNBAstyleData[rankedTeam].primaryBGstyle]: true,
              [WNBAstyleData[rankedTeam].primaryPlainText]: true,
            })}
          >
            {WNBAteamData[rankedTeam].name}
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
              max={12}
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
              disabled={index === 11}
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

const WNBARanker: React.FC = () => {
  const { rankState } = useRankContext();
  const { unRankedEntries, rankedEntries } = rankState;

  const wnbaRows = unRankedEntries.map((unRankedTeam, index) => {
    const rankedTeam: string | null = rankedEntries[index] ?? null;

    const newUnrankedTeam = unRankedTeam ? WNBAenum.parse(unRankedTeam) : null;
    const newRankedTeam = rankedTeam ? WNBAenum.parse(rankedTeam) : null;

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
        Rank WNBA Teams
      </h1>
      <Table className="text-xs sm:text-base">
        <TableBody>{wnbaRows}</TableBody>
      </Table>
    </div>
  );
};

export default WNBARanker;
