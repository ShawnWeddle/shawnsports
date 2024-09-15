import { useState } from "react";
import { cn } from "~/lib/utils";
import { useNBALotteryContext } from "~/hooks/useNBALottery";
import {
  NBAteamData,
  nbaTeamsRankedWorst,
  type NBATeamType,
} from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { rankedTeamVerification, Lotterizer } from "~/data/NBA/lotteryWork";
import { type PickType, lotterySwaps } from "~/data/NBA/lotterySwaps";

import NBATeamTile from "~/components/NBA/Lottery/TeamTile";
import TileLanding from "~/components/NBA/Lottery/TileLanding";

const NBALottery: React.FC = () => {
  const { nbaLotteryState, nbaLotteryDispatch } = useNBALotteryContext();

  const [activeTeam, setActiveTeam] = useState<NBATeamType | null>(null);

  const [lotteryResults, setLotteryResults] = useState<PickType[]>([]);

  const activeTeamStyleData = activeTeam
    ? NBAstyleData[activeTeam]
    : {
        primary: "",
        secondary: "",
        primaryBackground: "",
        secondaryText: "",
        secondaryBorder: "",
        simpleText: "",
      };

  const teamTiles = nbaTeamsRankedWorst.map((team, index) => {
    return (
      <NBATeamTile
        key={index}
        team={team}
        activeTeam={activeTeam}
        setActiveTeam={setActiveTeam}
      />
    );
  });

  const tileLandings = nbaLotteryState.rankedTeams.map((team, index) => {
    return (
      <TileLanding
        key={index}
        place={index + 1}
        team={team}
        activeTeam={activeTeam}
        setActiveTeam={setActiveTeam}
        isActive={!!activeTeam}
      />
    );
  });

  const lotteryResultOrder = lotteryResults
    .filter((pick) => pick.index < 14)
    .map((pick, index) => {
      const { newTeam, nativeTeam } = pick;
      return (
        <p key={index} className="border-b border-nba">
          <span className="font-semibold">
            {pick.index + 1}
            {". "}
          </span>
          <span
            className={cn("font-bold", {
              [NBAstyleData[newTeam].primaryBackground]: true,
            })}
          >
            {NBAteamData[newTeam].location}
          </span>
          {newTeam === nativeTeam ? (
            ""
          ) : (
            <span>
              {" (via "}
              {NBAteamData[nativeTeam].location}
              {")"}
            </span>
          )}
        </p>
      );
    });

  return (
    <div className="mt-2 flex w-full flex-col items-center">
      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          NBA Lottery
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-around sm:flex-row">
        <div className="flex w-fit flex-col justify-center">
          <div className="grid grid-cols-3">{tileLandings}</div>
          <div className="flex flex-col justify-center">
            <button
              disabled={
                !rankedTeamVerification(nbaLotteryState.rankedTeams).success
              }
              className={cn(
                "rounded-b-lg bg-gray-300 px-2 py-1 text-xl font-semibold text-red-600 hover:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-300"
              )}
              onClick={() => {
                setLotteryResults(
                  lotterySwaps(
                    Lotterizer(
                      rankedTeamVerification(nbaLotteryState.rankedTeams)
                        .newTeams
                    )
                  )
                );
              }}
            >
              Simulate Lottery
            </button>
          </div>
        </div>

        <div>{lotteryResultOrder}</div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        <button
          onClick={() => {
            setActiveTeam(null);
          }}
          disabled={!activeTeam}
          className={cn(
            "col-span-3 m-1 flex h-12 items-center justify-center border border-black bg-gray-200 sm:col-span-5 md:col-span-6 lg:col-span-8",
            {
              [activeTeamStyleData.primaryBackground]: activeTeam,
              [activeTeamStyleData.secondaryBorder]: activeTeam,
              [activeTeamStyleData.simpleText]: activeTeam,
            }
          )}
        >
          {activeTeam ? NBAteamData[activeTeam].location : "No Team"}{" "}
          {activeTeam ? NBAteamData[activeTeam].name : "Selected"}
        </button>
        {teamTiles}
      </div>
    </div>
  );
};

export default NBALottery;
