import { useRef, useState, Fragment } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData, type NFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLPickType, NFLpickOrderByRound } from "~/data/NFL/NFL2024picks";
import DraftChartModal from "./DraftChartModal";

type ActiveTeamType = NFLTeamType | undefined;

const DraftChart: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeams, setActiveTeams] = useState<
    [ActiveTeamType, ActiveTeamType]
  >([undefined, undefined]);

  const handleSet = (pick: NFLPickType) => {
    const { pickNum, nativeTeam, round, local, value, tradedTeam } = pick;
    const activeTeam = tradedTeam ?? nativeTeam;

    if (!activeTeams[0]) {
      setActiveTeams([activeTeam, undefined]);
      return;
    }

    if (activeTeam === activeTeams[0]) {
      if (activeTeams[1]) {
        setActiveTeams([activeTeams[1], undefined]);
        return;
      } else {
        setActiveTeams([undefined, undefined]);
        return;
      }
    }

    if (!activeTeams[1]) {
      setActiveTeams([activeTeams[0], activeTeam]);
      dialog.current?.showModal();
      return;
    }

    if (activeTeam === activeTeams[1]) {
      setActiveTeams([activeTeams[0], undefined]);
      return;
    }

    return;
  };

  const createCell = (pick: NFLPickType | undefined) => {
    if (pick) {
      const { pickNum, nativeTeam, round, local, value, tradedTeam } = pick;
      const activeTeam = tradedTeam ?? nativeTeam;

      return (
        <td key={pickNum} className="border border-black p-0">
          <button
            className={cn("flex justify-start", {
              [NFLstyleData[activeTeam].primaryBGstyle]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(activeTeam),
              [NFLstyleData[activeTeam].secondaryTextStyle]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(activeTeam),
            })}
            onClick={() => handleSet(pick)}
          >
            <div className="w-6 text-center font-semibold">{pickNum}</div>
            <div className="w-8 text-center">{activeTeam}</div>
            <div className="w-8 text-center">{value}</div>
          </button>
        </td>
      );
    } else {
      return <td key={Math.random()}></td>;
    }
  };

  const createRow = (local: number, width: "FULL" | "TOP" | "BOTTOM") => {
    const round1 = NFLpickOrderByRound[0];
    const round2 = NFLpickOrderByRound[1];
    const round3 = NFLpickOrderByRound[2];
    const round4 = NFLpickOrderByRound[3];
    const round5 = NFLpickOrderByRound[4];
    const round6 = NFLpickOrderByRound[5];
    const round7 = NFLpickOrderByRound[6];

    if (width === "TOP") {
      return (
        <tr key={local}>
          {round1 && createCell(round1[local])}
          {round2 && createCell(round2[local])}
          {round3 && createCell(round3[local])}
          {round4 && createCell(round4[local])}
        </tr>
      );
    }

    if (width === "BOTTOM") {
      return (
        <tr key={local}>
          {round5 && createCell(round5[local])}
          {round6 && createCell(round6[local])}
          {round7 && createCell(round7[local])}
        </tr>
      );
    }

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

  const fullRows = [];
  for (let i = 0; i < 44; i++) {
    fullRows.push(createRow(i, "FULL"));
  }

  const topRows = [];
  for (let i = 0; i < 44; i++) {
    topRows.push(createRow(i, "TOP"));
  }

  const bottomRows = [];
  for (let i = 0; i < 44; i++) {
    bottomRows.push(createRow(i, "BOTTOM"));
  }

  const tableHead = (width: number) => {
    const cellHead = (round: number) => (
      <th key={round}>
        <p className="inline-block w-6 text-center">#</p>
        <p className="inline-block w-8 text-center">T</p>
        <p className="inline-block w-8 text-center">V</p>
      </th>
    );
    const rowHead: JSX.Element[] = [];
    for (let i = 0; i < width; i++) {
      rowHead.push(cellHead(i + 1));
    }
    return <tr className="border border-nfl">{rowHead}</tr>;
  };

  const team0 = activeTeams[0];
  const team1 = activeTeams[1];

  return (
    <>
      <dialog
        ref={dialog}
        className="m-auto w-full max-w-screen-sm items-center rounded-xl align-middle backdrop:bg-gray-500/50"
      >
        <div className="flex w-full justify-end">
          <button
            onClick={() => {
              dialog.current?.close();
            }}
            className="font-semibold"
          >
            ✕
          </button>
        </div>
        {team0 && team1 && <DraftChartModal teams={[team0, team1]} />}
      </dialog>

      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NFL Draft Pick Value Chart
        </h1>
      </div>
      <table className="hidden w-auto font-mono text-sm sm:table">
        <thead className="bg-nfl text-white">{tableHead(7)}</thead>
        <tbody>{fullRows}</tbody>
      </table>
      <table className="table w-auto font-mono text-sm sm:hidden">
        <thead className="bg-nfl text-white">{tableHead(4)}</thead>
        <tbody>{topRows}</tbody>
      </table>
      <table className="table w-auto font-mono text-sm sm:hidden">
        <thead className="bg-nfl text-white">{tableHead(3)}</thead>
        <tbody>{bottomRows}</tbody>
      </table>
    </>
  );
};

export default DraftChart;

/*
const teamFullPicks = (
        <div className="text-center">
          <div
            className={cn("border-2", {
              [NFLstyleData[team].primaryBGstyle]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(team),
              [NFLstyleData[team].secondaryBorderStyle]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(team),
              [NFLstyleData[team].primaryPlainText]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(team),
            })}
          >
            <div>
              <span>{NFLteamData[team].location}</span>{" "}
              <span>{NFLteamData[team].name}</span>
            </div>
            <div className="text-2xl">0</div>
          </div>
          {teamPickList}
        </div>
      );
 */

/*
<div className="flex w-full max-w-screen-sm justify-center">
        <div className="grid w-full grid-cols-2">
          {teamActivePick(activeTeams[0]?.team, 1)}
          {teamActivePick(activeTeams[1]?.team, 2)}
        </div>
      </div>
*/

/*
const handleSet = (pick: NFLPickType) => {
    const { pickNum, nativeTeam, round, local, value, tradedTeam } = pick;
    const activeTeam = tradedTeam ?? nativeTeam;

    if (!activeTeams[0]) {
      setActiveTeams([
        {
          team: activeTeam,
          picks: [pick],
        },
        undefined,
      ]);
      return;
    }

    if (activeTeam === activeTeams[0]?.team) {
      if (activeTeams[0].picks.includes(pick)) {
        if (activeTeams[0].picks.length > 1) {
          const newPicks = [...activeTeams[0].picks];
          const deleteIndex = newPicks.findIndex(
            (apick) => apick.pickNum === pickNum
          );
          if (deleteIndex > -1) {
            newPicks.splice(deleteIndex, 1);
          }
          setActiveTeams([
            { ...activeTeams[0], picks: newPicks },
            activeTeams[1],
          ]);
          return;
        } else {
          if (activeTeams[1]) {
            setActiveTeams([activeTeams[1], undefined]);
            return;
          } else {
            setActiveTeams([undefined, undefined]);
            return;
          }
        }
      } else {
        setActiveTeams([
          { ...activeTeams[0], picks: [...activeTeams[0].picks, pick] },
          activeTeams[1],
        ]);
        return;
      }
    }

    if (!activeTeams[1]) {
      setActiveTeams([
        activeTeams[0],
        {
          team: activeTeam,
          picks: [pick],
        },
      ]);
      return;
    }

    if (activeTeam === activeTeams[1]?.team) {
      if (activeTeams[1].picks.includes(pick)) {
        if (activeTeams[1].picks.length > 1) {
          const newPicks = [...activeTeams[1].picks];
          const deleteIndex = newPicks.findIndex(
            (apick) => apick.pickNum === pickNum
          );
          if (deleteIndex > -1) {
            newPicks.splice(deleteIndex, 1);
          }
          setActiveTeams([
            activeTeams[0],
            { ...activeTeams[1], picks: newPicks },
          ]);
          return;
        } else {
          setActiveTeams([activeTeams[0], undefined]);
          return;
        }
      } else {
        setActiveTeams([
          activeTeams[0],
          { ...activeTeams[1], picks: [...activeTeams[1].picks, pick] },
        ]);
        return;
      }
    }

    return;
  };

        const newPicks = activeTeams[num - 1]?.picks.map((apick, index) => {
        return (
          <p key={index}>
            {apick.pickNum} - {apick.value}
          </p>
        );
      });
*/

/*
  const teamActivePick = (team: NFLTeamType | undefined, num: number) => {
    if (team) {
      const pointsTotal = (team: NFLTeamType) => {
        return NFLpickOrderByRound.flat()
          .filter((pick) => {
            const { nativeTeam, tradedTeam } = pick;
            const activeTeam = tradedTeam ?? nativeTeam;
            return activeTeam === team;
          })
          .map((pick) => {
            return pick.value;
          })
          .reduce((a, c) => a + c);
      };

      return (
        <div className="text-center">
          <button
            className={cn("w-full border p-1", {
              [NFLstyleData[team].primaryBGstyle]: true,
              [NFLstyleData[team].secondaryBorderStyle]: true,
              [NFLstyleData[team].primaryPlainText]: true,
            })}
          >
            {NFLteamData[team].location} {NFLteamData[team].name}
          </button>
          <p>Total points: {pointsTotal(team)}</p>
        </div>
      );
    } else {
      return (
        <div className="text-center">
          <p className="border p-1">Team {num} Not Selected</p>
        </div>
      );
    }
  };
*/
