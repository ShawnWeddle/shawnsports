import { createContext, useReducer } from "react";
import {
  type MLBTeamType,
  mlbTeamsRanked,
  nullArray30,
} from "~/data/MLB/MLBdata";

export const MLBRankContext = createContext<ContextType | null>(null);

type ContextType = {
  mlbRankState: MLBRankReducerState;
  mlbRankDispatch: React.Dispatch<MLBRankReducerAction>;
};

type MLBRankContextProviderProps = {
  children: React.ReactNode;
};

type MLBRankReducerState = {
  unRankedTeams: (MLBTeamType | null)[];
  rankedTeams: (MLBTeamType | null)[];
};

type MLBRankPayloadType = {
  team: MLBTeamType | null;
  rank: number;
  prevRank?: number;
};

type MLBRankReducerAction = {
  type: "RANK_TEAM" | "UNRANK_TEAM" | "RERANK_TEAM" | "MOVE_UP" | "MOVE_DOWN";
  payload: MLBRankPayloadType;
};

const fullRank = new Map<MLBTeamType, number>();
mlbTeamsRanked.forEach((team, index) => {
  fullRank.set(team, index);
});

export const mlbRankReducer = (
  state: MLBRankReducerState,
  action: MLBRankReducerAction
) => {
  switch (action.type) {
    case "RANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 30 && team !== null) {
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
          if (endIndex === 30) {
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
        newRank < 30 &&
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
          if (endIndex === 30) {
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
      if (rank > -1 && rank < 30 && team !== null) {
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
      if (rank > -1 && rank < 30 && team !== null) {
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

export const MLBRankContextProvider = ({
  children,
}: MLBRankContextProviderProps) => {
  const [mlbRankState, mlbRankDispatch] = useReducer(mlbRankReducer, {
    unRankedTeams: [...mlbTeamsRanked],
    rankedTeams: [...nullArray30],
  });

  return (
    <MLBRankContext.Provider value={{ mlbRankState, mlbRankDispatch }}>
      {children}
    </MLBRankContext.Provider>
  );
};
