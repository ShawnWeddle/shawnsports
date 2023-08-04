import { createContext, useReducer } from "react";
import type { NBATeamType } from "~/data/NBApickData";
import { nbaTeams, NBAteamData, nullArray32 } from "~/data/NBApickData";

export const NBARankContext = createContext<ContextType | null>(null);

type ContextType = {
  nbaRankState: NBARankReducerState;
  nbaRankDispatch: React.Dispatch<NBARankReducerAction>;
};

type NBARankContextProviderProps = {
  children: React.ReactNode;
};

type NBARankReducerState = {
  unRankedTeams: (NBATeamType | null)[];
  rankedTeams: (NBATeamType | null)[];
};

type NBARankPayloadType = {
  team: NBATeamType | null;
  rank: number;
};

type NBARankReducerAction = {
  type: "RANK_TEAM" | "UNRANK_TEAM";
  payload: NBARankPayloadType;
};

export const nbaRankReducer = (
  state: NBARankReducerState,
  action: NBARankReducerAction
) => {
  switch (action.type) {
    case "RANK_TEAM": {
      const { unRankedTeams, rankedTeams } = state;
      const { team, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 32 && team !== null) {
        // Remove from Unranked
        const newUnRankedTeams = [...unRankedTeams];
        newUnRankedTeams[NBAteamData[team].rank] = null;

        // Add to Ranked
        const newRankedTeams = [...rankedTeams];
        if (rankedTeams[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < rankedTeams.length; endIndex++) {
            if (rankedTeams[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 32) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (rankedTeams[startIndex] === null) {
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

export const NBARankContextProvider = ({
  children,
}: NBARankContextProviderProps) => {
  const [nbaRankState, nbaRankDispatch] = useReducer(nbaRankReducer, {
    unRankedTeams: [...nbaTeams],
    rankedTeams: [...nullArray32],
  });

  return (
    <NBARankContext.Provider value={{ nbaRankState, nbaRankDispatch }}>
      {children}
    </NBARankContext.Provider>
  );
};
