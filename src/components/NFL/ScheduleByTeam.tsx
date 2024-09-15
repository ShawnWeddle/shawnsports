import { cn } from "~/lib/utils";
import { useNFLScheduleContext } from "~/hooks/useNFLSchedule";
import { NFLscheduleData, type GameType } from "~/data/NFL/NFLscheduleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { type NFLTeamType, NFLteamData, nullArray18 } from "~/data/NFL/NFLdata";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

interface ScheduleForTeamProps {
  team: NFLTeamType;
}

const ScheduleForTeam: React.FC<ScheduleForTeamProps> = (
  props: ScheduleForTeamProps
) => {
  const { team } = props;

  const allGames: (GameType | null)[] = [...nullArray18];

  const allGamesNoBye = NFLscheduleData.schedule.filter((game) => {
    const { Away, Home } = game;
    if (Away === team || Home === team) {
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

  const { nflScheduleDispatch } = useNFLScheduleContext();

  const schedule = allGames.map((game, gameIndex) => {
    if (game) {
      const { Away, Code, Home, Week, Winner } = game;
      return (
        <TableRow
          key={gameIndex}
          className="border-b-2 border-gray-200 last:border-0"
        >
          <TableCell className="hidden px-1 sm:inline-block">
            Week {Week}
          </TableCell>
          <TableCell className="px-1 sm:hidden">W{Week}</TableCell>

          <TableCell>
            <button
              className={cn("w-full rounded border px-1 text-center", {
                [NFLstyleData[Away].primaryBackground]: true,
                [NFLstyleData[Away].secondaryBorder]: true,
                [NFLstyleData[Away].simpleText]: true,
              })}
              onClick={() => {
                nflScheduleDispatch({
                  type: "PICK",
                  payload: [{ Code: Code, Winner: Away }],
                });
              }}
            >
              {NFLteamData[Away].name}
            </button>
          </TableCell>
          <TableCell className={cn("text-center")}> @ </TableCell>
          <TableCell>
            <button
              className={cn("w-full rounded border px-1 text-center", {
                [NFLstyleData[Home].primaryBackground]: true,
                [NFLstyleData[Home].secondaryBorder]: true,
                [NFLstyleData[Home].simpleText]: true,
              })}
              onClick={() => {
                nflScheduleDispatch({
                  type: "PICK",
                  payload: [{ Code: Code, Winner: game.Home }],
                });
              }}
            >
              {NFLteamData[game.Home].name}
            </button>
          </TableCell>
          <TableCell className={cn("text-center")}> :: </TableCell>
          <TableCell>
            {Winner && (
              <button
                className={cn("w-full rounded border px-1 text-center", {
                  [NFLstyleData[Winner].primaryBackground]: true,
                  [NFLstyleData[Winner].secondaryBorder]: true,
                  [NFLstyleData[Winner].simpleText]: true,
                })}
                onClick={() => {
                  nflScheduleDispatch({
                    type: "PICK",
                    payload: [{ Code: Code, Winner: undefined }],
                  });
                }}
              >
                {Winner ? NFLteamData[Winner].name : "/"}
              </button>
            )}
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <TableRow key={gameIndex}>
          <TableCell className="hidden px-1 sm:inline-block">
            Week {gameIndex + 1}
          </TableCell>
          <TableCell className="px-1 sm:hidden">W{gameIndex + 1}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="text-center">BYE</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      );
    }
  });
  return (
    <>
      <div className="flex w-full justify-center">
        <div>
          <Table className="w-auto">
            <TableHeader>
              <TableRowNoHover>
                <TableHead></TableHead>
                <TableHead>Away</TableHead>
                <TableHead></TableHead>
                <TableHead>Home</TableHead>
                <TableHead></TableHead>
                <TableHead>Winner</TableHead>
              </TableRowNoHover>
            </TableHeader>
            <TableBody className="text-sm sm:text-base">{schedule}</TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="p-1 hover:font-semibold"
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
