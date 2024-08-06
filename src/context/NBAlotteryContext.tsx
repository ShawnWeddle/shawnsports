import { createContext, useReducer } from "react";
import {
  type NBATeamType,
  nbaTeamsRanked,
  NBAteamData,
  nullArray14,
} from "~/data/NBA/NBAdata";

export const NBALotteryContext = createContext<ContextType | null>(null);

type ContextType = {
  nbaLotteryState: NBALotteryReducerState;
  nbaLotteryDispatch: React.Dispatch<NBALotteryReducerAction>;
};

type NBALotteryContextProviderProps = {
  children: React.ReactNode;
};

type NBALotteryReducerState = {
  unRankedTeams: (NBATeamType | null)[];
  rankedTeams: (NBATeamType | null)[];
};

type NBALotteryPayloadType = {
  team: NBATeamType | null;
  rank: number;
  prevRank?: number;
};

type NBALotteryReducerAction = {
  type: "RANK_TEAM" | "UNRANK_TEAM";
  payload: NBALotteryPayloadType;
};

export const nbaLotteryReducer = (
  state: NBALotteryReducerState,
  action: NBALotteryReducerAction
) => {
  switch (action.type) {
    case "RANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 14 && team !== null) {
        // Remove from Unranked
        const newUnRankedTeams = [...unRankedTeams];
        newUnRankedTeams[NBAteamData[team].rank] = null;

        // Add to Ranked
        const newRankedTeams = [...rankedTeams];
        if (newRankedTeams[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedTeams.length; endIndex++) {
            if (newRankedTeams[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 14) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (newRankedTeams[startIndex] === null) {
                break;
              }
            }
            newRankedTeams.splice(startIndex, 1);
            newRankedTeams.splice(newRank, 0, null);
          } else {
            newRankedTeams.splice(endIndex, 1);
            newRankedTeams.splice(newRank, 0, null);
          }
        }
        newRankedTeams[newRank] = team;

        const newState = {
          unRankedTeams: newUnRankedTeams,
          rankedTeams: newRankedTeams,
        };
        return newState;
      } else {
        return {
          unRankedTeams: [...unRankedTeams],
          rankedTeams: [...rankedTeams],
        };
      }
    }
    case "UNRANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      if (rank > -1 && rank < 30 && team !== null) {
        // Remove from Ranked
        const newRankedTeams = [...rankedTeams];
        newRankedTeams[rank] = null;

        // Add to Unranked
        const newUnRankedTeams = [...unRankedTeams];
        newUnRankedTeams[NBAteamData[team].rank] = team;

        const newState = {
          unRankedTeams: newUnRankedTeams,
          rankedTeams: newRankedTeams,
        };
        return newState;
      } else {
        return {
          unRankedTeams: [...unRankedTeams],
          rankedTeams: [...rankedTeams],
        };
      }
    }
    default:
      return state;
  }
};

export const NBALotteryContextProvider = ({
  children,
}: NBALotteryContextProviderProps) => {
  const [nbaLotteryState, nbaLotteryDispatch] = useReducer(nbaLotteryReducer, {
    unRankedTeams: [...nbaTeamsRanked].reverse(),
    rankedTeams: [...nullArray14],
  });

  return (
    <NBALotteryContext.Provider value={{ nbaLotteryState, nbaLotteryDispatch }}>
      {children}
    </NBALotteryContext.Provider>
  );
};
