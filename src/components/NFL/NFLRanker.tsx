import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import type { NFLTeamType } from "~/data/NFL/NFLdata";
import { teamInfo } from "~/data/NFL/NFLdata";
import { nflStyleData } from "~/data/NFL/NFLstyleData";
import { cn } from "~/utils/cn";
import { useNFLRankContext } from "~/hooks/useNFLRanker";

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
    <tr className="border-b-2 border-gray-200 font-semibold last:border-0">
      {unRankedTeam ? (
        <td
          className={cn("w-52 pl-2", {
            [nflStyleData[unRankedTeam].primaryBGstyle]: true,
            [nflStyleData[unRankedTeam].textColorStyle]: true,
          })}
        >
          {teamInfo[unRankedTeam].location} {teamInfo[unRankedTeam].name}
        </td>
      ) : (
        <td className={cn("w-52 bg-nfl/30")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
          <input
            type="number"
            min={1}
            max={32}
            className="w-10 bg-gray-100 text-center"
            onChange={(e) => {
              const inputRank = e.target.value;
              setNewRank(inputRank);
            }}
            value={newRank}
          />
          <button
            className="px-1 py-0.5 text-white"
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
            <FaArrowRight />
          </button>
        </div>
      </td>
      <td>
        <div className="flex justify-between">
          <button
            className="rounded px-1 py-0.5 text-nfl"
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
            <FaArrowLeft />
          </button>
          <span className="px-1 text-center font-bold">{index + 1}</span>
        </div>
      </td>
      {rankedTeam ? (
        <td
          className={cn("w-52 pl-2", {
            [nflStyleData[rankedTeam].primaryBGstyle]: true,
            [nflStyleData[rankedTeam].textColorStyle]: true,
          })}
        >
          {teamInfo[rankedTeam].location} {teamInfo[rankedTeam].name}
        </td>
      ) : (
        <td className={cn("w-52 bg-nfl/30")}></td>
      )}
      <td>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
          <input
            type="number"
            min={1}
            max={32}
            className="w-10 bg-gray-100 text-center"
            onChange={(e) => {
              const inputRank = e.target.value;
              setReRank(inputRank);
            }}
            value={reRank}
          />
          <button
            className="px-1 py-0.5 text-white"
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
            <FaArrowRight />
          </button>
          <div className="flex h-6 flex-col justify-between">
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
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
              <BsChevronCompactUp />
            </button>
            <button
              className="h-3 px-0.5 text-sm text-white disabled:bg-white/50"
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
              <BsChevronCompactDown />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

const Ranker: React.FC = () => {
  const { nflRankState } = useNFLRankContext();
  const { unRankedTeams, rankedTeams } = nflRankState;

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
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{nflRows}</tbody>
      </table>
    </>
  );
};

export default Ranker;
