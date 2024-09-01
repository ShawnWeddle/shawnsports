import { cn } from "~/utils/cn";
import { useState, Fragment } from "react";
import { useNFLScheduleContext } from "~/hooks/useNFLSchedule";
import { useAuthContext } from "~/hooks/useAuthContext";
import { api } from "~/utils/api";
import {
  nflDivisions,
  type NFLTeamType,
  NFLteamData,
} from "~/data/NFL/NFLdata";
import {
  NFLscheduleData,
  type FinishGameType,
  GameCheck,
} from "~/data/NFL/NFLscheduleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import ScheduleForTeam from "./ScheduleByTeam";
import { recordForTeam } from "~/data/NFL/NFLscheduleRecord";
import {
  createScheduleSchema,
  type CreateScheduleInput,
} from "~/server/api/schedule/schema";
import { FaArrowLeft } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableRowNoHover,
} from "~/components/ui/table";
import { Button } from "../ui/button";

const NFLSchedule: React.FC = () => {
  const [scheduleMode, setScheduleMode] = useState<"Menu" | "Team">("Menu");
  const [activeTeam, setActiveTeam] = useState<NFLTeamType | "NFL">("NFL");

  const { nflScheduleState, nflScheduleDispatch } = useNFLScheduleContext();
  const { schedule } = nflScheduleState;

  const { authState } = useAuthContext();
  const { user } = authState;

  const postSchedule = api.schedule.createSchedule.useMutation();

  // const handleSubmit = () => {
  //   const newSchedule: FinishGameType[] = schedule.map((game, index) => {
  //     const { Winner } = game;
  //     if (Winner) {
  //     }
  //   });
  //   if (user) {
  //     const { userId, username, email } = user;
  //     const schedulePost: CreateScheduleInput = {
  //       sport: "NFL",
  //       schedule,
  //       client: {
  //         userId,
  //         username,
  //         email,
  //       },
  //     };
  //     const scheduleValidation = createScheduleSchema.safeParse(schedulePost);
  //     if (scheduleValidation) {
  //       postSchedule.mutate(
  //         { ...schedulePost },
  //         {
  //           onSuccess() {
  //             console.log("Success");
  //           },
  //         }
  //       );
  //     }
  //   }
  // };

  const NFLTeams = Object.entries(nflDivisions).map(
    (conference, conferenceIndex) => {
      const [conferenceName, newConference] = conference;
      const conferenceList = Object.entries(newConference).map(
        (division, divisionIndex) => {
          const [divisionName, newDivision] = division;
          const teamButtons = newDivision.map((team, teamIndex) => {
            const games = [...nflScheduleState.schedule].filter(
              (game) => game.Away === team || game.Home === team
            );
            const { wins, losses } = recordForTeam(team, games);
            const allGamesPicked = wins + losses === 17;
            return (
              <TableRowNoHover key={team + teamIndex.toString()}>
                <TableCell className="px-2">
                  <div className="flex w-full flex-col justify-center p-0.5 sm:p-0">
                    <button
                      className={cn(
                        "grow rounded-lg border-2 px-1 text-center text-sm sm:m-0.5 sm:text-base",
                        {
                          [NFLstyleData[team].primaryPlainTextHover]: true,
                          [NFLstyleData[team].primaryPlainText]: allGamesPicked,
                          [NFLstyleData[team].primaryBGHover]: true,
                          [NFLstyleData[team].secondaryBorderStyleHover]: true,
                          [NFLstyleData[team].primaryBGstyle]: allGamesPicked,
                          [NFLstyleData[team].secondaryBorderStyle]:
                            allGamesPicked,
                        }
                      )}
                      onClick={() => {
                        setScheduleMode("Team");
                        setActiveTeam(team);
                      }}
                    >
                      <div className={cn("font-semibold sm:font-normal", {})}>
                        {team === "WAS" ? "D.C." : NFLteamData[team].location}{" "}
                        {NFLteamData[team].name}
                      </div>
                      <div className={cn("sm:hidden")}>
                        2024 Record: {wins}-{losses}
                      </div>
                    </button>
                  </div>
                </TableCell>
                <TableCell
                  className={cn(
                    "hidden px-2 text-center font-semibold sm:table-cell",
                    {
                      "font-bold text-nfl": allGamesPicked,
                    }
                  )}
                >
                  {wins}-{losses}
                </TableCell>
              </TableRowNoHover>
            );
          });
          return (
            <Fragment key={"Division" + divisionIndex.toString()}>
              <TableRowNoHover>
                <TableCell className="px-2 py-1 text-center font-semibold">
                  {conferenceName} {divisionName}
                </TableCell>
              </TableRowNoHover>
              {teamButtons}
            </Fragment>
          );
        }
      );
      return (
        <Table key={conferenceIndex}>
          <TableBody>{conferenceList}</TableBody>
        </Table>
      );
    }
  );

  return (
    <>
      <h1 className="mx-2 mt-4 text-2xl font-semibold sm:text-4xl">
        2024 {activeTeam} Schedule
      </h1>

      {scheduleMode === "Menu" && (
        <>
          <div className="grid grid-cols-2 p-2">{NFLTeams}</div>
          <div className="flex justify-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"nfl"} className="m-1">
                  RESET
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to clear all selections?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action can not be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <button>Cancel</button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <button
                      onClick={() => {
                        const clearAllGames = NFLscheduleData.schedule.map(
                          (game) => {
                            const clearGame = {
                              Code: game.Code,
                              Winner: undefined,
                            };
                            return clearGame;
                          }
                        );
                        nflScheduleDispatch({
                          type: "PICK",
                          payload: clearAllGames,
                        });
                      }}
                    >
                      Clear
                    </button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              className="m-1"
              disabled={true}
              variant={"nfl"}
              onClick={() => {
                console.log("F");
              }}
            >
              SAVE
            </Button>
          </div>
        </>
      )}
      {scheduleMode === "Team" && (
        <>
          <div className="flex w-full justify-center">
            <button
              className="text-sm font-semibold sm:text-base"
              onClick={() => {
                setActiveTeam("NFL");
                setScheduleMode("Menu");
              }}
            >
              <div className="flex items-center justify-center text-sm hover:font-bold">
                <FaArrowLeft />
                <span className="px-1 text-base"> Back to Menu</span>
              </div>
            </button>
          </div>
          <ScheduleForTeam team={activeTeam === "NFL" ? "KAN" : activeTeam} />
          <div className="flex w-full justify-center">
            <button
              className="text-sm font-semibold sm:text-base"
              onClick={() => {
                setActiveTeam("NFL");
                setScheduleMode("Menu");
              }}
            >
              <div className="flex items-center justify-center text-sm hover:font-bold">
                <FaArrowLeft />
                <span className="px-1 text-base"> Back to Menu</span>
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default NFLSchedule;
