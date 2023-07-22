import { NBAteamData, TeamNameEnum } from "~/data/NBApickData";
import { AllNBAPicks } from "~/data/AllNBApicks";
import { cn } from "~/utils/cn";

const NBApickTable: React.FC = () => {
  const NBArows = Object.entries(AllNBAPicks).map((allPicks, rowIndex) => {
    const activeTeamCode = TeamNameEnum.parse(allPicks[0]);
    const activeTeamPicks = allPicks[1];
    const NBAcells = Object.values(activeTeamPicks).map((picks, cellIndex) => {
      const activePicks = picks.map((pick, pickIndex) => {
        return (
          <button
            key={`pick-${rowIndex}-${cellIndex}-${pickIndex}`}
            className={cn(
              "border-x-2 first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2",
              NBAteamData[pick.nativeTeam].fullStyle
            )}
          >
            {pick.nativeTeam}
            {pick.swap && pick.swap === "positive" && "⭡"}
            {pick.swap && pick.swap === "negative" && "⭣"}
            {pick.swap && pick.swap === "neutral" && "-"}
          </button>
        );
      });
      return (
        <td
          key={`cell-${rowIndex}-${cellIndex}`}
          className="py-1 text-center align-top last:pr-1"
        >
          {activePicks.length > 0 && (
            <div className="flex flex-col">{activePicks}</div>
          )}
        </td>
      );
    });
    return (
      <tr
        key={`row-${rowIndex}`}
        className="odd:bg-blue-800/20 even:bg-blue-800/10"
      >
        <td className="hidden px-2 sm:block">
          {NBAteamData[activeTeamCode].location}{" "}
          {NBAteamData[activeTeamCode].name}
        </td>
        <td className="px-2 sm:hidden">
          {NBAteamData[activeTeamCode].nickName ??
            NBAteamData[activeTeamCode].name}
        </td>
        {NBAcells}
      </tr>
    );
  });
  return (
    <>
      <table className="w-full bg-blue-100 sm:w-auto">
        <thead>
          <tr className="sm:text-xl">
            <th>Team</th>
            <th>2024</th>
            <th>2025</th>
            <th>2026</th>
            <th>2027</th>
            <th>2028</th>
            <th>2029</th>
            <th className="pr-1">2030</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base">{NBArows}</tbody>
      </table>
    </>
  );
};

export default NBApickTable;
