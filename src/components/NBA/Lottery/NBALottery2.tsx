import { useState } from "react";
import { cn } from "~/utils/cn";
import { useNBALotteryContext } from "~/hooks/useNBALottery";
import { NBAteamData, nbaTeamsRankedWorst } from "~/data/NBApickData";
import { rankedTeamVerification, Lotterizer } from "~/data/NBA/lotteryWork";

import NBATeamTile from "~/components/NBA/Lottery/TeamTile";
import TileLanding from "~/components/NBA/Lottery/TileLanding";

const NBALottery2: React.FC = () => {
  const { nbaLotteryState, nbaLotteryDispatch } = useNBALotteryContext();

  const teamTiles = nbaTeamsRankedWorst.map((team, index) => {
    return <NBATeamTile key={index} team={team} />;
  });

  const tileLandings = nbaLotteryState.rankedTeams.map((team, index) => {
    return <TileLanding key={index} place={index + 1} team={team} />;
  });

  return (
    <div className="mt-2 flex flex-col items-center">
      <div className="flex w-full justify-between">
        <div className="grid grid-cols-3">{tileLandings}</div>
        <div className="flex flex-col justify-center">
          <button
            disabled={
              //!rankedTeamVerification(nbaLotteryState.rankedTeams).success
              false
            }
            className={cn("bg-green-500 p-1 disabled:bg-red-500")}
            onClick={() => {
              console.log(
                Lotterizer(
                  //rankedTeamVerification(nbaLotteryState.rankedTeams).newTeams
                  [
                    "WAS",
                    "HOU",
                    "POR",
                    "DET",
                    "CHO",
                    "SAS",
                    "TOR",
                    "ORL",
                    "UTA",
                    "BRK",
                    "IND",
                    "NOP",
                    "MIN",
                    "DAL",
                  ]
                )
              );
            }}
          >
            CLICK
          </button>
        </div>
        <div className="h-48 w-48 bg-red-500">F</div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {teamTiles}
      </div>
    </div>
  );
};

export default NBALottery2;

/*[
"WAS", "HOU", "POR", "DET", "CHO", "SAS", "TOR", "ORL", 
  "UTA", "BRK", "IND", "NOP", "MIN", "DAL",
]*/
