import { useRef, useState, Fragment } from "react";
import { cn } from "~/utils/cn";
import { NFLteamData, type NFLTeamType } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import {
  type NFLPickType,
  type NFLActivePickType,
  NFLpickOrderByRound,
} from "~/data/NFL/NFL2024picks";

type ActivePickType = {
  team: NFLTeamType;
  picks: NFLActivePickType[];
};

type DraftChartModalProps = { teams: [NFLTeamType, NFLTeamType] };

const DraftChartModal = (props: DraftChartModalProps) => {
  const team0 = props.teams[0];
  const team1 = props.teams[1];

  const activePickList = (team: NFLTeamType) => {
    return NFLpickOrderByRound.flat()
      .filter((pick) => {
        const { nativeTeam, tradedTeam } = pick;
        const activeTeam = tradedTeam ?? nativeTeam;
        return activeTeam === team;
      })
      .map((pick) => {
        return { ...pick, active: false };
      });
  };

  const [activePicks, setActivePicks] = useState<
    [ActivePickType, ActivePickType]
  >([
    {
      team: team0,
      picks: activePickList(team0),
    },
    {
      team: team1,
      picks: activePickList(team1),
    },
  ]);

  const handlePickClick = (pick: NFLActivePickType) => {
    const { nativeTeam, tradedTeam } = pick;
    const activeTeam = tradedTeam ?? nativeTeam;

    if (activeTeam === team0) {
      const newPicks = [...activePicks[0].picks];
      const activeIndex = newPicks.indexOf(pick);
      const activePick = newPicks[activeIndex];
      if (activeIndex > -1 && activePick) {
        activePick.active = !activePick.active;
      }
      setActivePicks([
        {
          team: activeTeam,
          picks: newPicks,
        },
        activePicks[1],
      ]);
    } else if (activeTeam === team1) {
      const newPicks = [...activePicks[1].picks];
      const activeIndex = newPicks.indexOf(pick);
      const activePick = newPicks[activeIndex];
      if (activeIndex > -1 && activePick) {
        activePick.active = !activePick.active;
      }
      setActivePicks([
        activePicks[0],
        {
          team: activeTeam,
          picks: newPicks,
        },
      ]);
    } else {
    }
  };

  const teamPickList = (team: NFLTeamType, num: 0 | 1) => {
    const pointsTotal = NFLpickOrderByRound.flat()
      .filter((pick) => {
        const { nativeTeam, tradedTeam } = pick;
        const activeTeam = tradedTeam ?? nativeTeam;
        return activeTeam === team;
      })
      .map((pick) => {
        return pick.value;
      })
      .reduce((a, c) => a + c);

    const activePointsTotal = activePicks[num].picks
      .filter((pick) => {
        return pick.active;
      })
      .map((pick) => {
        return pick.value;
      })
      .reduce((a, c) => a + c, 0);

    const picks = activePicks[num].picks.map((pick, index) => {
      return (
        <div key={index}>
          <button
            onClick={() => handlePickClick(pick)}
            className={cn("w-full", {
              [NFLstyleData[team].primaryBackground]: [team0, team1].includes(
                team
              ),
              [NFLstyleData[team].primaryBackground]: pick.active,
              [NFLstyleData[team].secondaryText]: pick.active,
            })}
          >
            <div className="flex justify-center">
              <div className="w-16 text-center">
                ({pick.round})
                <span className="font-semibold"> {pick.pickNum}</span>
              </div>
              <div className="w-4 text-center"></div>
              <div className="w-8 text-center">{pick.value}</div>
            </div>
          </button>
        </div>
      );
    });

    return (
      <div className="text-center">
        <div
          className={cn("border-2", {
            [NFLstyleData[team].primaryBackground]: [team0, team1].includes(
              team
            ),
            [NFLstyleData[team].secondaryBorder]: [team0, team1].includes(team),
            [NFLstyleData[team].simpleText]: [team0, team1].includes(team),
          })}
        >
          <div>
            <span>{NFLteamData[team].location}</span>{" "}
            <span>{NFLteamData[team].name}</span>: <span>{pointsTotal}</span>
          </div>
          <div className="text-2xl">{activePointsTotal}</div>
        </div>
        {picks}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2">
      {team0 && teamPickList(team0, 0)}
      {team1 && teamPickList(team1, 1)}
    </div>
  );
};

export default DraftChartModal;
