import { createContext, useReducer } from "react";
import {
  type NHLTeamType,
  nhlTeamsRanked,
  nullArray32,
} from "~/data/NHL/NHLdata";

export const NHLRankContext = createContext<ContextType | null>(null);

type ContextType = {
  nhlRankState: NHLRankReducerState;
  nhlRankDispatch: React.Dispatch<NHLRankReducerAction>;
};

type NHLRankContextProviderProps = {
  children: React.ReactNode;
};

type NHLRankReducerState = {
  unRankedTeams: (NHLTeamType | null)[];
  rankedTeams: (NHLTeamType | null)[];
};

type NHLRankPayloadType = {
  team: NHLTeamType | null;
  rank: number;
  prevRank?: number;
};

type NHLRankReducerAction = {
  type: "RANK_TEAM" | "UNRANK_TEAM" | "RERANK_TEAM" | "MOVE_UP" | "MOVE_DOWN";
  payload: NHLRankPayloadType;
};

const fullRank = new Map<NHLTeamType, number>();
nhlTeamsRanked.forEach((team, index) => {
  fullRank.set(team, index);
});

export const nhlRankReducer = (
  state: NHLRankReducerState,
  action: NHLRankReducerAction
) => {
  switch (action.type) {
    case "RANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 32 && team !== null) {
        // Remove from Unranked
        const newUnRankedTeams = [...unRankedTeams];
        const eRank = fullRank.get(team) ?? 100;
        newUnRankedTeams[eRank] = null;

        // Add to Ranked
        const newRankedTeams = [...rankedTeams];
        if (newRankedTeams[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedTeams.length; endIndex++) {
            if (newRankedTeams[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 32) {
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
      if (rank > -1 && rank < 32 && team !== null) {
        // Remove from Ranked
        const newRankedTeams = [...rankedTeams];
        newRankedTeams[rank] = null;

        // Add to Unranked
        const newUnRankedTeams = [...unRankedTeams];
        const eRank = fullRank.get(team) ?? 100;
        newUnRankedTeams[eRank] = team;

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
    case "RERANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank, prevRank } = action.payload;
      const newRank = rank - 1;
      if (
        newRank > -1 &&
        newRank < 32 &&
        team !== null &&
        prevRank !== undefined
      ) {
        // Remove from Ranked
        const newRankedTeams = [...rankedTeams];
        newRankedTeams[prevRank] = null;

        // Add to Ranked
        if (newRankedTeams[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedTeams.length; endIndex++) {
            if (newRankedTeams[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 32) {
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
          unRankedTeams: [...unRankedTeams],
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
    case "MOVE_UP": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      if (rank > -1 && rank < 32 && team !== null) {
        const newRankedTeams = [...rankedTeams];
        const team1 = newRankedTeams[rank];
        const team2 = newRankedTeams[rank - 1];
        newRankedTeams[rank] = team2 ?? null;
        newRankedTeams[rank - 1] = team1 ?? null;

        const newState = {
          unRankedTeams: [...unRankedTeams],
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
    case "MOVE_DOWN": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      if (rank > -1 && rank < 32 && team !== null) {
        const newRankedTeams = [...rankedTeams];
        const team1 = newRankedTeams[rank];
        const team2 = newRankedTeams[rank + 1];
        newRankedTeams[rank] = team2 ?? null;
        newRankedTeams[rank + 1] = team1 ?? null;

        const newState = {
          unRankedTeams: [...unRankedTeams],
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

export const NHLRankContextProvider = ({
  children,
}: NHLRankContextProviderProps) => {
  const [nhlRankState, nhlRankDispatch] = useReducer(nhlRankReducer, {
    unRankedTeams: [...nhlTeamsRanked],
    rankedTeams: [...nullArray32],
  });

  return (
    <NHLRankContext.Provider value={{ nhlRankState, nhlRankDispatch }}>
      {children}
    </NHLRankContext.Provider>
  );
};
