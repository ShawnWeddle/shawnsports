import { useState } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import { cn } from "~/utils/cn";
import { useCFLRankContext } from "~/hooks/useCFLRanker";
import type { CFLTeamType } from "~/data/CFL/CFLdata";
import { CFLteamData } from "~/data/CFL/CFLdata";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
interface RankerRowProps {
  unRankedTeam: CFLTeamType | null;
  rankedTeam: CFLTeamType | null;
  index: number;
}

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedTeam, rankedTeam, index } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");
  const { cflRankDispatch } = useCFLRankContext();

  return (
    <tr className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedTeam ? (
        <>
          <td
            className={cn("-pr-2 hidden w-52 pl-2 sm:block", {
              [CFLstyleData[unRankedTeam].primaryBGstyle]: true,
              [CFLstyleData[unRankedTeam].primaryPlainText]: true,
            })}
          >
            {CFLteamData[unRankedTeam].location}{" "}
            {CFLteamData[unRankedTeam].name}
          </td>
          <td
            className={cn("-pr-2 w-24 pl-2 sm:hidden", {
              [CFLstyleData[unRankedTeam].primaryBGstyle]: true,
              [CFLstyleData[unRankedTeam].primaryPlainText]: true,
            })}
          >
            {CFLteamData[unRankedTeam].name}
          </td>
        </>
      ) : (
        <td className={cn("w-24 bg-cfl/30 sm:w-52")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-cfl">
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
              cflRankDispatch({
                type: "RANK_TEAM",
                payload: {
                  team: unRankedTeam,
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
            className="text-Cfl rounded px-1 py-0.5"
            onClick={() => {
              cflRankDispatch({
                type: "UNRANK_TEAM",
                payload: {
                  team: rankedTeam,
                  rank: index,
                },
              });
            }}
          >
            <FaArrowLeft />
          </button>
          <span className="px-1 text-center text-sm font-bold">
            {index + 1}
          </span>
        </div>
      </td>
      {rankedTeam ? (
        <>
          <td
            className={cn("-pr-2 hidden w-52 pl-2 sm:block", {
              [CFLstyleData[rankedTeam].primaryBGstyle]: true,
              [CFLstyleData[rankedTeam].primaryPlainText]: true,
            })}
          >
            {CFLteamData[rankedTeam].location} {CFLteamData[rankedTeam].name}
          </td>
          <td
            className={cn("-pr-2 w-24 pl-2 sm:hidden", {
              [CFLstyleData[rankedTeam].primaryBGstyle]: true,
              [CFLstyleData[rankedTeam].primaryPlainText]: true,
            })}
          >
            {CFLteamData[rankedTeam].name}
          </td>
        </>
      ) : (
        <td className={cn("w-24 bg-cfl/30 sm:w-52")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-cfl">
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
              cflRankDispatch({
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
            <FaArrowRight />
          </button>
          <div className="hidden h-6 flex-col justify-between sm:flex">
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 0}
              onClick={() => {
                cflRankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    team: rankedTeam,
                    rank: index,
                  },
                });
              }}
            >
              <BsChevronCompactUp />
            </button>
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 8}
              onClick={() => {
                cflRankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    team: rankedTeam,
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
                cflRankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    team: rankedTeam,
                    rank: index,
                  },
                });
              }}
            >
              <FaArrowUp />
            </button>
            <button
              className="h-6 px-0.5 text-sm text-white disabled:bg-white/50"
              disabled={index === 9}
              onClick={() => {
                cflRankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    team: rankedTeam,
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

const CFLRanker: React.FC = () => {
  const { cflRankState } = useCFLRankContext();
  const { unRankedTeams, rankedTeams } = cflRankState;

  const cflRows = unRankedTeams.map((unRankedTeam, index) => {
    const rankedTeam: CFLTeamType | null = rankedTeams[index] ?? null;

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
        Rank CFL Teams
      </h1>
      <table className="text-xs sm:text-base">
        <tbody>{cflRows}</tbody>
      </table>
    </div>
  );
};

export default CFLRanker;
