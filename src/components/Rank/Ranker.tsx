import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import { nflTeams } from "~/data/NFL/NFLdata";
import type { NFLTeamType } from "~/data/NFL/NFLdata";
import { teamInfo } from "~/data/NFL/NFLdata";
import { nflStyleData } from "~/data/NFL/NFLstyleData";
import { cn } from "~/utils/cn";

const Ranker: React.FC = () => {
  const [unRankedTeams, setUnrankedTeams] = useState<(NFLTeamType | null)[]>([
    ...nflTeams,
  ]);
  const [rankedTeams, setRankedTeams] = useState<(NFLTeamType | null)[]>(
    new Array(32).fill(null)
  );
  const nflRows = unRankedTeams.map((team, index) => {
    return (
      <tr
        key={index}
        className="border-b-2 border-gray-200 font-semibold last:border-0"
      >
        {team ? (
          <td
            className={cn("w-52 pl-2", {
              [nflStyleData[team].primaryBGstyle]: true,
              [nflStyleData[team].textColorStyle]: true,
            })}
          >
            {teamInfo[team].location} {teamInfo[team].name}
          </td>
        ) : (
          <td></td>
        )}
        <td>
          <input type="number" min={1} max={32} className="w-10 text-center" />
          <button className="rounded bg-nfl p-0.5 text-white">
            <FaArrowRight />
          </button>
        </td>
        <td>
          <button className="rounded p-0.5 text-nfl">
            <FaArrowLeft />
          </button>
        </td>
        <td className="px-1 text-center font-bold">{index + 1}</td>
        <td className="w-52 bg-black"></td>
        <td>
          <input type="number" min={1} max={32} className="w-10 text-center" />
          <button className="rounded bg-nfl p-0.5 font-semibold text-white">
            <FaArrowRight />
          </button>
        </td>
        <td>
          <div className="flex h-6 flex-col justify-between">
            <button className="h-3">
              <BsChevronCompactUp />
            </button>
            <button className="h-3">
              <BsChevronCompactDown />
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="">
          <table>
            <thead>
              <tr>
                <th></th>
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
        </div>
      </main>
    </>
  );
};

export default Ranker;
