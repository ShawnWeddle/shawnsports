import { cn } from "~/utils/cn";
import { useState } from "react";
import {
  nflDivisions,
  type NFLTeamType,
  NFLteamData,
} from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import ScheduleForTeam from "./ScheduleByTeam";

const NFLSchedule: React.FC = () => {
  const [scheduleMode, setScheduleMode] = useState<"Menu" | "Team">("Menu");
  const [activeTeam, setActiveTeam] = useState<NFLTeamType>("KAN");

  const handleTeamClick = (team: NFLTeamType) => {
    setScheduleMode("Team");
    setActiveTeam(team);
  };

  const NFLTeams = Object.entries(nflDivisions).map(
    (conference, conferenceIndex) => {
      const [conferenceName, newConference] = conference;
      const conferenceList = Object.entries(newConference).map(
        (division, divisionIndex) => {
          const [divisionName, newDivision] = division;
          const teamButtons = newDivision.map((team, teamIndex) => {
            return (
              <button
                key={teamIndex}
                className={cn("m-0.5 rounded-lg border-2 px-1 text-center", {
                  [NFLstyleData[team].primaryBGstyle]: true,
                  [NFLstyleData[team].secondaryBorderStyle]: true,
                  [NFLstyleData[team].textColorStyle]: true,
                })}
                onClick={() => {
                  handleTeamClick(team);
                }}
              >
                {NFLteamData[team].location} {NFLteamData[team].name}
              </button>
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
    <>
      <div>2023 NFL Schedule</div>
      <div>
        <button
          onClick={() => {
            setScheduleMode("Menu");
          }}
        >
          Go back
        </button>
      </div>
      {scheduleMode === "Menu" && (
        <div className="grid grid-cols-2 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-2">
          {NFLTeams}
        </div>
      )}
      {scheduleMode === "Team" && <ScheduleForTeam team={activeTeam} />}
    </>
  );
};

export default NFLSchedule;
