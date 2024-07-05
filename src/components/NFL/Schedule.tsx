import { cn } from "~/utils/cn";
import { useState, useRef, Fragment } from "react";
import { useNFLScheduleContext } from "~/hooks/useNFLSchedule";
import {
  nflDivisions,
  type NFLTeamType,
  NFLteamData,
} from "~/data/NFL/NFLdata";
import { NFLscheduleData } from "~/data/NFL/NFLscheduleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import ScheduleForTeam from "./ScheduleByTeam";
import { recordForTeam } from "~/data/NFL/NFLscheduleRecord";
import { FaArrowLeft } from "react-icons/fa";

const NFLSchedule: React.FC = () => {
  const [scheduleMode, setScheduleMode] = useState<"Menu" | "Team">("Menu");
  const [activeTeam, setActiveTeam] = useState<NFLTeamType | "NFL">("NFL");

  const { nflScheduleState, nflScheduleDispatch } = useNFLScheduleContext();

  const dialog = useRef<HTMLDialogElement>(null);

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
            return (
              <tr key={team + teamIndex.toString()}>
                <td>
                  <div className="flex w-full flex-col justify-center p-0.5 sm:p-0">
                    <button
                      className={cn(
                        "grow rounded-t-lg px-1 text-center text-sm sm:m-0.5 sm:rounded-b-lg sm:border-2 sm:text-base",
                        {
                          [NFLstyleData[team].primaryBGstyle]: true,
                          [NFLstyleData[team].secondaryBorderStyle]: true,
                          [NFLstyleData[team].primaryPlainText]: true,
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
                    <p
                      className={cn(
                        "rounded-b-lg text-center text-sm sm:hidden",
                        {
                          [NFLstyleData[team].secondaryBGstyle]: true,
                          [NFLstyleData[team].secondaryPlainText]: true,
                        }
                      )}
                    >
                      2023 Record: {wins}-{losses}
                    </p>
                  </div>
                </td>
                <td
                  className={cn(
                    "hidden text-center font-semibold sm:table-cell",
                    {
                      "bg-nfl/40": wins + losses === 17,
                    }
                  )}
                >
                  {wins}-{losses}
                </td>
              </tr>
            );
          });
          return (
            <Fragment key={"Division" + divisionIndex.toString()}>
              <tr>
                <td className="text-center font-semibold">
                  {conferenceName} {divisionName}
                </td>
              </tr>
              {teamButtons}
            </Fragment>
          );
        }
      );
      return (
        <table key={conferenceIndex}>
          <tbody>{conferenceList}</tbody>
        </table>
      );
    }
  );

  return (
    <>
      <dialog
        ref={dialog}
        className="mx-auto my-auto w-full max-w-screen-sm rounded-xl align-middle backdrop:bg-gray-500/50"
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              dialog.current?.close();
            }}
            className="font-semibold"
          >
            ✕
          </button>
        </div>
        <p className="text-center">
          Are you sure you want to clear all selections?
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              console.log(NFLscheduleData);
              nflScheduleDispatch({
                type: "PICK",
                payload: [...NFLscheduleData.schedule],
              });
              console.log(NFLscheduleData);
              dialog.current?.close();
            }}
            className="rounded-lg bg-red-500 p-1 font-semibold text-white"
          >
            Clear
          </button>
          <button
            onClick={() => {
              dialog.current?.close();
            }}
            className="rounded-lg bg-gray-500 p-1 text-white"
          >
            Cancel
          </button>
        </div>
      </dialog>

      <div className="w-full bg-nfl/10 sm:max-w-screen-sm">
        <div className="flex w-full justify-center">
          <h1 className="mx-2 mt-4 text-2xl font-semibold sm:text-4xl">
            2023 {activeTeam} Schedule
          </h1>
        </div>
        {scheduleMode === "Team" && (
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
        )}
        {scheduleMode === "Menu" && (
          <>
            <div className="grid grid-cols-2 p-2">{NFLTeams}</div>
            <div className="flex justify-center">
              <button
                className="p-2 hover:font-semibold"
                onClick={() => {
                  dialog.current?.showModal();
                }}
              >
                Clear All Selections
              </button>
            </div>
          </>
        )}
        {scheduleMode === "Team" && (
          <>
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
                  <span className="mb-2 px-1 text-base"> Back to Menu</span>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NFLSchedule;
