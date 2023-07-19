import { NBAteamData, NBApickData, TeamNameEnum } from "~/data/NBApickData";
import { pickCodeSeparator } from "~/data/dep/pickCodeSeparator";

const NBArows = Object.entries(NBApickData).map((team, rowIndex) => {
  const activeTeam = TeamNameEnum.parse(team[0]);
  const activePicks = team[1];
  const NBACells = activePicks.map((picks, cellIndex) => {
    const NBApicks = picks.map((pick, pickIndex) => {
      const { PCyear, PCteam } = pickCodeSeparator(pick);
      if (PCteam === activeTeam) {
        return (
          <p
            key={`pick-${rowIndex}-${cellIndex}-${pickIndex}`}
            className="border-x-2 border-orange-600 bg-green-600 text-white first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2" //{NBAteamData[PCteam].fullStyle}
          >
            {PCteam}
          </p>
        );
      } else {
        return (
          <p
            key={`pick-${rowIndex}-${cellIndex}-${pickIndex}`}
            className="border-x-2 border-green-600 bg-orange-600 text-white first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2" //{NBAteamData[PCteam].fullStyle}
          >
            {PCteam}
          </p>
        );
      }
    });
    return (
      <td key={`cell-${rowIndex}-${cellIndex}`}>
        <div className="text-center font-mono">{NBApicks}</div>
      </td>
    );
  });
  return (
    <tr key={`row-${rowIndex}`} className="odd:bg-white/10 even:bg-white/20">
      <td className="pl-2 text-white">
        {NBAteamData[activeTeam].location} {NBAteamData[activeTeam].name}
      </td>
      {NBACells}
    </tr>
  );
});

const NBApickTable: React.FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr className="text-xl text-white">
            <th>Team</th>
            <th>2024</th>
            <th>2025</th>
            <th>2026</th>
            <th>2027</th>
            <th>2028</th>
            <th>2029</th>
            <th>2030</th>
          </tr>
        </thead>
        <tbody>{NBArows}</tbody>
      </table>
      <dialog>NEW TEXT</dialog>
    </>
  );
};

export default NBApickTable;
