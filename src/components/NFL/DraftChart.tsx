import { useRef, useState, Fragment } from "react";
import { cn } from "~/lib/utils";
import { NFLteamData, type NFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLActivePickType, NFLpicks2025 } from "~/data/NFL/NFLpicks2025";
import DraftChartModal from "./DraftChartModal";

type ActiveTeamType = NFLTeamType | undefined;

const DraftChart: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const [activeTeams, setActiveTeams] = useState<
    [ActiveTeamType, ActiveTeamType]
  >([undefined, undefined]);

  const handleSet = (pick: NFLActivePickType) => {
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

  const createCell = (pick: NFLActivePickType | undefined) => {
    if (pick) {
      const { pickNum, nativeTeam, round, local, value, tradedTeam } = pick;
      const activeTeam = tradedTeam ?? nativeTeam;

      return (
        <td key={pickNum} className="border border-black p-0">
          <button
            className={cn("flex justify-start", {
              [NFLstyleData[activeTeam].primaryBackground]: [
                activeTeams[0],
                activeTeams[1],
              ].includes(activeTeam),
              [NFLstyleData[activeTeam].secondaryText]: [
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
    const round1 = NFLpicks2025[0];
    const round2 = NFLpicks2025[1];
    const round3 = NFLpicks2025[2];
    const round4 = NFLpicks2025[3];
    const round5 = NFLpicks2025[4];
    const round6 = NFLpicks2025[5];
    const round7 = NFLpicks2025[6];

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
