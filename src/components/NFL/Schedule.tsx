import { cn } from "~/utils/cn";
import { useState } from "react";
import { useNFLScheduleContext } from "~/hooks/useNFLSchedule";
import {
  nflDivisions,
  type NFLTeamType,
  NFLteamData,
} from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import ScheduleForTeam from "./ScheduleByTeam";
import { recordForTeam } from "~/data/NFL/NFLscheduleRecord";

const NFLSchedule: React.FC = () => {
  const [scheduleMode, setScheduleMode] = useState<"Menu" | "Team">("Menu");
  const [activeTeam, setActiveTeam] = useState<NFLTeamType>("KAN");

  const { nflScheduleState, nflScheduleDispatch } = useNFLScheduleContext();

  const NFLTeams = Object.entries(nflDivisions).map(
    (conference, conferenceIndex) => {
      const [conferenceName, newConference] = conference;
      const conferenceList = Object.entries(newConference).map(
        (division, divisionIndex) => {
          const [divisionName, newDivision] = division;
          const teamButtons = newDivision.map((team, teamIndex) => {
            const games = [...nflScheduleState].filter(
              (game) => game.Away === team || game.Home === team
            );
            const { wins, losses } = recordForTeam(team, games);
            return (
              <div
                key={teamIndex}
                className="flex w-full flex-col justify-center sm:flex-row "
              >
                <button
                  className={cn(
                    "m-0.5 grow rounded-lg border-2 px-1 text-center text-sm sm:text-base",
                    {
                      [NFLstyleData[team].primaryBGstyle]: true,
                      [NFLstyleData[team].secondaryBorderStyle]: true,
                      [NFLstyleData[team].textColorStyle]: true,
                    }
                  )}
                  onClick={() => {
                    setScheduleMode("Team");
                    setActiveTeam(team);
                  }}
                >
                  {team === "WAS" ? "D.C." : NFLteamData[team].location}{" "}
                  {NFLteamData[team].name}
                </button>
                <div>
                  <p className="px-1 font-semibold">
                    {wins}-{losses}
                  </p>
                </div>
              </div>
            );
          });
          return (
            <div key={divisionIndex} className="flex flex-col">
              <p className="text-center font-semibold">
                {conferenceName} {divisionName}
              </p>
              {teamButtons}
            </div>
          );
        }
      );
      return <div key={conferenceIndex}>{conferenceList}</div>;
    }
  );

  return (
    <div className="w-full sm:max-w-screen-sm">
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          2023 NFL Schedule
        </h1>
      </div>
      {scheduleMode === "Team" && (
        <div className="flex w-full justify-center">
          <button
            className="text-lg font-semibold sm:text-xl"
            onClick={() => {
              setScheduleMode("Menu");
            }}
          >
            Back to Menu
          </button>
        </div>
      )}
      {scheduleMode === "Menu" && (
        <div className="grid grid-cols-2 p-2">{NFLTeams}</div>
      )}
      {scheduleMode === "Team" && <ScheduleForTeam team={activeTeam} />}
    </div>
  );
};

export default NFLSchedule;
