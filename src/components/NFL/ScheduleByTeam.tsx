import { cn } from "~/utils/cn";
import { useNFLScheduleContext } from "~/hooks/useNFLSchedule";
import { NFLscheduleData, type GameType } from "~/data/NFL/NFLscheduleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLTeamType, NFLteamData, nullArray18 } from "~/data/NFL/NFLdata";
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

interface ScheduleForTeamProps {
  team: NFLTeamType;
}

const ScheduleForTeam: React.FC<ScheduleForTeamProps> = (
  props: ScheduleForTeamProps
) => {
  const { team } = props;
  const allGames: (GameType | null)[] = [...nullArray18];

  const allGamesNoBye = NFLscheduleData.schedule.filter((game) => {
    if (game.Away === team || game.Home === team) {
      return game;
    }
  });

  allGamesNoBye.forEach((game) => {
    allGames[game.Week - 1] = game;
  });

  const allVariableGames = allGamesNoBye.filter((game) => {
    if (game && !game.readOnly) {
      return game;
    }
  });

  const { nflScheduleState, nflScheduleDispatch } = useNFLScheduleContext();

  const schedule = allGames.map((game, gameIndex) => {
    if (game) {
      const winnerBGstyle = game.Winner
        ? NFLstyleData[game.Winner].primaryBGstyle
        : "bg-nfl50";
      const winnerTextStyle = game.Winner
        ? NFLstyleData[game.Winner].secondaryTextStyle
        : "text-white";
      return (
        <tr
          key={gameIndex}
          className="border-b-2 border-gray-200 last:border-0"
        >
          <td className="hidden px-1 sm:inline-block">Week {game.Week}</td>
          <td className="px-1 sm:hidden">W{game.Week}</td>

          <td
            className={cn({
              [NFLstyleData[game.Away].primaryBGstyle]: true,
              [NFLstyleData[game.Away].secondaryTextStyle]: true,
            })}
          >
            <button
              className="w-24 px-1 text-center sm:w-28"
              disabled={game.readOnly}
              onClick={() => {
                nflScheduleDispatch({
                  type: "PICK",
                  payload: [{ Code: game.Code, Winner: game.Away }],
                });
              }}
            >
              {NFLteamData[game.Away].name}
            </button>
          </td>
          <td
            className={cn("w-4 text-center", {
              "bg-gray-800 text-white": game.readOnly,
            })}
          >
            {" "}
            @{" "}
          </td>
          <td
            className={cn({
              [NFLstyleData[game.Home].primaryBGstyle]: true,
              [NFLstyleData[game.Home].secondaryTextStyle]: true,
            })}
          >
            <button
              className="w-24 px-1 text-center sm:w-28"
              disabled={game.readOnly}
              onClick={() => {
                nflScheduleDispatch({
                  type: "PICK",
                  payload: [{ Code: game.Code, Winner: game.Home }],
                });
              }}
            >
              {NFLteamData[game.Home].name}
            </button>
          </td>
          <td
            className={cn("w-4 text-center", {
              "bg-gray-800 text-white": game.readOnly,
            })}
          >
            {" "}
            ::{" "}
          </td>
          <td
            className={cn({
              "bg-gray-800 text-white": game.readOnly,
            })}
          >
            <button
              className={cn("w-24 px-1 text-center sm:w-28", {
                [winnerBGstyle]: true,
                [winnerTextStyle]: true,
              })}
              disabled={game.readOnly}
              onClick={() => {
                nflScheduleDispatch({
                  type: "PICK",
                  payload: [{ Code: game.Code, Winner: undefined }],
                });
              }}
            >
              {game.Winner ? NFLteamData[game.Winner].name : "/"}
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={gameIndex}>
          <td className="hidden px-1 sm:inline-block">Week {gameIndex + 1}</td>
          <td className="px-1 sm:hidden">W{gameIndex + 1}</td>
          <td></td>
          <td></td>
          <td className="text-center">BYE</td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  });
  return (
    <>
      <div className="flex w-full justify-start overflow-auto sm:justify-center">
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
          <tbody className="text-sm sm:text-base">{schedule}</tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          className="p-1 hover:underline"
          onClick={() => {
            const clearAllTeamGames = allVariableGames.map((game) => {
              const clearGame = { Code: game.Code, Winner: undefined };
              return clearGame;
            });
            nflScheduleDispatch({ type: "PICK", payload: clearAllTeamGames });
          }}
        >
          Clear {team} Selections
        </button>
      </div>
    </>
  );
};

export default ScheduleForTeam;
