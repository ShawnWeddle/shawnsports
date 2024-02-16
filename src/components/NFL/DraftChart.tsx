import { cn } from "~/utils/cn";
import { useRef, useState, Fragment } from "react";
import { NFLteamData, type NFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLPickType, NFLpickOrderByRound } from "~/data/NFL/NFL2024picks";

const DraftChart: React.FC = () => {
  const [activeTeams, setActiveTeams] = useState<
    [NFLTeamType | null, NFLTeamType | null]
  >([null, null]);

  const handleSet = (team: NFLTeamType) => {
    if (activeTeams[0] === team) {
      setActiveTeams([activeTeams[1], null]);
    } else if (activeTeams[1] === team) {
      setActiveTeams([activeTeams[0], null]);
    } else {
      if (activeTeams[0]) {
        setActiveTeams([activeTeams[0], team]);
      } else {
        setActiveTeams([team, null]);
      }
    }
  };

  const createCell = (pick: NFLPickType | undefined) => {
    if (pick) {
      const { pickNum, nativeTeam, round, local, value, tradedTeam } = pick;
      const activeTeam = tradedTeam ?? nativeTeam;
      return (
        <Fragment key={pickNum}>
          <td
            className={cn(
              "border-y border-l border-black text-center font-semibold",
              {
                [NFLstyleData[activeTeam].primaryBGstyle]:
                  activeTeams.includes(activeTeam),
                [NFLstyleData[activeTeam].primaryPlainText]:
                  activeTeams.includes(activeTeam),
              }
            )}
          >
            <button
              disabled={
                !activeTeams.includes(null) && !activeTeams.includes(activeTeam)
              }
              onClick={() => {
                handleSet(activeTeam);
              }}
            >
              {pickNum}
            </button>
          </td>
          <td
            className={cn("border-y border-black px-0.5", {
              [NFLstyleData[activeTeam].primaryBGstyle]:
                activeTeams.includes(activeTeam),
              [NFLstyleData[activeTeam].secondaryTextStyle]:
                activeTeams.includes(activeTeam),
            })}
          >
            <button
              disabled={
                !activeTeams.includes(null) && !activeTeams.includes(activeTeam)
              }
              onClick={() => {
                handleSet(activeTeam);
              }}
            >
              {activeTeam}
            </button>
          </td>
          <td
            className={cn(
              "border-y border-r border-black bg-nfl/30 px-0.5 text-center",
              {
                [NFLstyleData[activeTeam].primaryBGstyle]:
                  activeTeams.includes(activeTeam),
                [NFLstyleData[activeTeam].primaryPlainText]:
                  activeTeams.includes(activeTeam),
              }
            )}
          >
            <button
              disabled={
                !activeTeams.includes(null) && !activeTeams.includes(activeTeam)
              }
              onClick={() => {
                handleSet(activeTeam);
              }}
            >
              {value}
            </button>
          </td>
        </Fragment>
      );
    } else {
      return (
        <Fragment key={Math.random()}>
          <td></td>
          <td></td>
          <td></td>
        </Fragment>
      );
    }
  };

  const createRow = (local: number) => {
    const round1 = NFLpickOrderByRound[0];
    const round2 = NFLpickOrderByRound[1];
    const round3 = NFLpickOrderByRound[2];
    const round4 = NFLpickOrderByRound[3];
    const round5 = NFLpickOrderByRound[4];
    const round6 = NFLpickOrderByRound[5];
    const round7 = NFLpickOrderByRound[6];
    return (
      <tr key={local}>
        {round1 && createCell(round1[local])}
        {round2 && createCell(round2[local])}
        {round3 && createCell(round3[local])}
        {round4 && createCell(round4[local])}
        {round5 && createCell(round5[local])}
        {round6 && createCell(round6[local])}
        {round7 && createCell(round7[local])}
      </tr>
    );
  };

  const allRows = [];
  for (let i = 0; i < 44; i++) {
    allRows.push(createRow(i));
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NFL Draft Pick Value Chart
        </h1>
      </div>
      <table className="w-full font-mono text-sm sm:w-auto">
        <thead className="bg-nfl text-white">
          <tr>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
            <th>#</th>
            <th>T</th>
            <th>V</th>
          </tr>
        </thead>
        <tbody>{allRows}</tbody>
      </table>
    </>
  );
};

export default DraftChart;
