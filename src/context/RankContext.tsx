import { createContext, useReducer } from "react";
import { type SportType } from "~/data/SiteData";
import { nullArray, initialValues } from "~/utils/initRC";

export const RankContext = createContext<ContextType | null>(null);

type ContextType = {
  rankState: RankReducerState;
  rankDispatch: React.Dispatch<RankReducerAction>;
};

type RankContextProviderProps = {
  children: React.ReactNode;
  sport: SportType;
};

type RankReducerState = {
  sport: SportType;
  unRankedEntries: (string | null)[];
  rankedEntries: (string | null)[];
};

type RankPayloadType = {
  entry: string | null;
  rank: number;
  prevRank?: number;
};

type RankReducerAction = {
  type:
    | "RANK_ENTRY"
    | "UNRANK_ENTRY"
    | "RERANK_ENTRY"
    | "MOVE_UP"
    | "MOVE_DOWN";
  payload: RankPayloadType;
};

export const RankReducer = (
  state: RankReducerState,
  action: RankReducerAction
) => {
  const { unRankedEntries, rankedEntries, sport } = state;
  const { entry, rank, prevRank } = action.payload;
  const numOfEntries = initialValues[sport].length;
  const fullRank = new Map<string, number>();
  initialValues[sport].forEach((team, index) => {
    fullRank.set(team, index);
  });
  switch (action.type) {
    case "RANK_ENTRY": {
      const newRank = rank - 1;
      if (newRank > -1 && newRank < numOfEntries && entry !== null) {
        // Remove from Unranked
        const newUnRankedEntries = [...unRankedEntries];
        const eRank = fullRank.get(entry) ?? 100;
        newUnRankedEntries[eRank] = null;

        // Add to Ranked
        const newRankedEntries = [...rankedEntries];
        if (newRankedEntries[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedEntries.length; endIndex++) {
            if (newRankedEntries[endIndex] === null) {
              break;
            }
          }
          if (endIndex === numOfEntries) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (newRankedEntries[startIndex] === null) {
                break;
              }
            }
            newRankedEntries.splice(startIndex, 1);
            newRankedEntries.splice(newRank, 0, null);
          } else {
            newRankedEntries.splice(endIndex, 1);
            newRankedEntries.splice(newRank, 0, null);
          }
        }
        newRankedEntries[newRank] = entry;

        const newState = {
          unRankedEntries: newUnRankedEntries,
          rankedEntries: newRankedEntries,
          sport,
        };
        return newState;
      } else {
        return {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: [...rankedEntries],
          sport,
        };
      }
    }
    case "UNRANK_ENTRY": {
      if (rank > -1 && rank < numOfEntries && entry !== null) {
        // Remove from Ranked
        const newRankedEntries = [...rankedEntries];
        newRankedEntries[rank] = null;

        // Add to Unranked
        const newUnRankedEntries = [...unRankedEntries];
        const eRank = fullRank.get(entry) ?? 100;
        newUnRankedEntries[eRank] = entry;

        const newState = {
          unRankedEntries: newUnRankedEntries,
          rankedEntries: newRankedEntries,
          sport,
        };
        return newState;
      } else {
        return {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: [...rankedEntries],
          sport,
        };
      }
    }
    case "RERANK_ENTRY": {
      const newRank = rank - 1;
      if (
        newRank > -1 &&
        newRank < numOfEntries &&
        entry !== null &&
        prevRank !== undefined
      ) {
        // Remove from Ranked
        const newRankedEntries = [...rankedEntries];
        newRankedEntries[prevRank] = null;

        // Add to Ranked
        if (newRankedEntries[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedEntries.length; endIndex++) {
            if (newRankedEntries[endIndex] === null) {
              break;
            }
          }
          if (endIndex === numOfEntries) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (newRankedEntries[startIndex] === null) {
                break;
              }
            }
            newRankedEntries.splice(startIndex, 1);
            newRankedEntries.splice(newRank, 0, null);
          } else {
            newRankedEntries.splice(endIndex, 1);
            newRankedEntries.splice(newRank, 0, null);
          }
        }
        newRankedEntries[newRank] = entry;
        const newState = {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: newRankedEntries,
          sport,
        };
        return newState;
      } else {
        return {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: [...rankedEntries],
          sport,
        };
      }
    }
    case "MOVE_UP": {
      if (rank > -1 && rank < numOfEntries && entry !== null) {
        const newRankedEntries = [...rankedEntries];
        const entry1 = newRankedEntries[rank];
        const entry2 = newRankedEntries[rank - 1];
        newRankedEntries[rank] = entry2 ?? null;
        newRankedEntries[rank - 1] = entry1 ?? null;

        const newState = {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: newRankedEntries,
          sport,
        };
        return newState;
      } else {
        return {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: [...rankedEntries],
          sport,
        };
      }
    }
    case "MOVE_DOWN": {
      if (rank > -1 && rank < numOfEntries && entry !== null) {
        const newRankedEntries = [...rankedEntries];
        const entry1 = newRankedEntries[rank];
        const entry2 = newRankedEntries[rank + 1];
        newRankedEntries[rank] = entry2 ?? null;
        newRankedEntries[rank + 1] = entry1 ?? null;

        const newState = {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: newRankedEntries,
          sport,
        };
        return newState;
      } else {
        return {
          unRankedEntries: [...unRankedEntries],
          rankedEntries: [...rankedEntries],
          sport,
        };
      }
    }
    default:
      return state;
  }
};

export const RankContextProvider = (props: RankContextProviderProps) => {
  const { children, sport } = props;
  const [rankState, rankDispatch] = useReducer(RankReducer, {
    unRankedEntries: initialValues[sport],
    rankedEntries: nullArray[sport],
    sport,
  });

  return (
    <RankContext.Provider value={{ rankState, rankDispatch }}>
      {children}
    </RankContext.Provider>
  );
};
