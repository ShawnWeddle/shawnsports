import { createContext, useReducer } from "react";
import {
  type WNBATeamType,
  wnbaTeamsRanked,
  nullArray12,
} from "~/data/WNBA/WNBAdata";

export const WNBARankContext = createContext<ContextType | null>(null);

type ContextType = {
  wnbaRankState: WNBARankReducerState;
  wnbaRankDispatch: React.Dispatch<WNBARankReducerAction>;
};

type WNBARankContextProviderProps = {
  children: React.ReactNode;
};

type WNBARankReducerState = {
  unRankedTeams: (WNBATeamType | null)[];
  rankedTeams: (WNBATeamType | null)[];
};

type WNBARankPayloadType = {
  team: WNBATeamType | null;
  rank: number;
  prevRank?: number;
};

type WNBARankReducerAction = {
  type: "RANK_TEAM" | "UNRANK_TEAM" | "RERANK_TEAM" | "MOVE_UP" | "MOVE_DOWN";
  payload: WNBARankPayloadType;
};

const fullRank = new Map<WNBATeamType, number>();
wnbaTeamsRanked.forEach((team, index) => {
  fullRank.set(team, index);
});

export const wnbaRankReducer = (
  state: WNBARankReducerState,
  action: WNBARankReducerAction
) => {
  switch (action.type) {
    case "RANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 12 && team !== null) {
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
          if (endIndex === 12) {
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
      if (rank > -1 && rank < 12 && team !== null) {
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
        newRank < 12 &&
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
          if (endIndex === 12) {
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
      if (rank > -1 && rank < 12 && team !== null) {
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
      if (rank > -1 && rank < 12 && team !== null) {
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

export const WNBARankContextProvider = ({
  children,
}: WNBARankContextProviderProps) => {
  const [wnbaRankState, wnbaRankDispatch] = useReducer(wnbaRankReducer, {
    unRankedTeams: [...wnbaTeamsRanked],
    rankedTeams: [...nullArray12],
  });

  return (
    <WNBARankContext.Provider value={{ wnbaRankState, wnbaRankDispatch }}>
      {children}
    </WNBARankContext.Provider>
  );
};
