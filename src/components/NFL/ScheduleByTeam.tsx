import { cn } from "~/utils/cn";
import { NFLscheduleData, type GameType } from "~/data/NFL/NFLscheduleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLTeamType, NFLteamData, nullArray18 } from "~/data/NFL/NFLdata";

interface ScheduleForTeamProps {
  team: NFLTeamType;
}

const ScheduleForTeam: React.FC<ScheduleForTeamProps> = (
  props: ScheduleForTeamProps
) => {
  const { team } = props;
  const allGames: (GameType | null)[] = [...nullArray18];
  NFLscheduleData.filter(
    (game) => game.Away === team || game.Home === team
  ).forEach((game) => {
    allGames[game.Week - 1] = game;
  });

  console.log(allGames);

  const schedule = allGames.map((game, gameIndex) => {
    if (game) {
      return (
        <tr key={gameIndex}>
          <td className="px-1">Week {game.Week}</td>

          <td
            className={cn("w-28 border-2 px-1 text-center", {
              [NFLstyleData[game.Away].primaryBGstyle]: true,
              [NFLstyleData[game.Away].secondaryTextStyle]: true,
            })}
          >
            {NFLteamData[game.Away].name}
          </td>
          <td> @ </td>
          <td
            className={cn("w-28 border-2 px-1 text-center", {
              [NFLstyleData[game.Home].primaryBGstyle]: true,
              [NFLstyleData[game.Home].secondaryTextStyle]: true,
            })}
          >
            {NFLteamData[game.Home].name}
          </td>
          <td> : : </td>
          <td className={cn("w-28 border-2 bg-nfl/50 px-1 text-center")}></td>
        </tr>
      );
    } else {
      return (
        <tr key={gameIndex}>
          <td className="px-1">Week {gameIndex + 1}</td>

          <td className="text-center"></td>
          <td></td>
          <td className="text-center">BYE</td>
        </tr>
      );
    }
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Away</th>
            <th></th>
            <th>Home</th>
            <th></th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>{schedule}</tbody>
      </table>
    </div>
  );
};

export default ScheduleForTeam;
