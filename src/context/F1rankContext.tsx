import { createContext, useReducer } from "react";
import type { DriverCodeType } from "~/data/F1/F1data";
import { driverCodes, driverNames, nullArray21 } from "~/data/F1/F1data";
import { F1styleData } from "~/data/F1/F1styleData";

export const F1RankContext = createContext<ContextType | null>(null);

type ContextType = {
  f1RankState: F1RankReducerState;
  f1RankDispatch: React.Dispatch<F1RankReducerAction>;
};

type F1RankContextProviderProps = {
  children: React.ReactNode;
};

type F1RankReducerState = {
  unRankedDrivers: (DriverCodeType | null)[];
  rankedDrivers: (DriverCodeType | null)[];
};

type F1RankPayloadType = {
  driver: DriverCodeType | null;
  rank: number;
  prevRank?: number;
};

type F1RankReducerAction = {
  type:
    | "RANK_DRIVER"
    | "UNRANK_DRIVER"
    | "RERANK_DRIVER"
    | "MOVE_UP"
    | "MOVE_DOWN";
  payload: F1RankPayloadType;
};

export const F1RankReducer = (
  state: F1RankReducerState,
  action: F1RankReducerAction
) => {
  switch (action.type) {
    case "RANK_DRIVER": {
      const { unRankedDrivers, rankedDrivers } = state;
      const { driver, rank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 21 && driver !== null) {
        // Remove from Unranked
        const newUnRankedDrivers = [...unRankedDrivers];
        newUnRankedDrivers[driverNames[driver].alphabeticOrder] = null;

        // Add to Ranked
        const newRankedDrivers = [...rankedDrivers];
        if (newRankedDrivers[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedDrivers.length; endIndex++) {
            if (newRankedDrivers[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 21) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (newRankedDrivers[startIndex] === null) {
                break;
              }
            }
            newRankedDrivers.splice(startIndex, 1);
            newRankedDrivers.splice(newRank, 0, null);
          } else {
            newRankedDrivers.splice(endIndex, 1);
            newRankedDrivers.splice(newRank, 0, null);
          }
        }
        newRankedDrivers[newRank] = driver;

        const newState = {
          unRankedDrivers: newUnRankedDrivers,
          rankedDrivers: newRankedDrivers,
        };
        return newState;
      } else {
        return {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: [...rankedDrivers],
        };
      }
    }
    case "UNRANK_DRIVER": {
      const { unRankedDrivers, rankedDrivers } = state;
      const { driver, rank } = action.payload;
      if (rank > -1 && rank < 21 && driver !== null) {
        // Remove from Ranked
        const newRankedDrivers = [...rankedDrivers];
        newRankedDrivers[rank] = null;

        // Add to Unranked
        const newUnRankedDrivers = [...unRankedDrivers];
        newUnRankedDrivers[driverNames[driver].alphabeticOrder] = driver;

        const newState = {
          unRankedDrivers: newUnRankedDrivers,
          rankedDrivers: newRankedDrivers,
        };
        return newState;
      } else {
        return {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: [...rankedDrivers],
        };
      }
    }
    case "RERANK_DRIVER": {
      const { unRankedDrivers, rankedDrivers } = state;
      const { driver, rank, prevRank } = action.payload;
      const newRank = rank - 1;
      if (newRank > -1 && newRank < 21 && driver !== null && prevRank) {
        // Remove from Ranked
        const newRankedDrivers = [...rankedDrivers];
        newRankedDrivers[prevRank] = null;

        // Add to Ranked
        if (newRankedDrivers[newRank] !== null) {
          let endIndex = newRank;
          for (true; endIndex < newRankedDrivers.length; endIndex++) {
            if (newRankedDrivers[endIndex] === null) {
              break;
            }
          }
          if (endIndex === 21) {
            let startIndex = newRank;
            for (true; startIndex > 0; startIndex--) {
              if (newRankedDrivers[startIndex] === null) {
                break;
              }
            }
            newRankedDrivers.splice(startIndex, 1);
            newRankedDrivers.splice(newRank, 0, null);
          } else {
            newRankedDrivers.splice(endIndex, 1);
            newRankedDrivers.splice(newRank, 0, null);
          }
        }
        newRankedDrivers[newRank] = driver;

        const newState = {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: newRankedDrivers,
        };
        return newState;
      } else {
        return {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: [...rankedDrivers],
        };
      }
    }
    case "MOVE_UP": {
      const { unRankedDrivers, rankedDrivers } = state;
      const { driver, rank } = action.payload;
      if (rank > -1 && rank < 21 && driver !== null) {
        const newRankedDrivers = [...rankedDrivers];
        const driver1 = newRankedDrivers[rank];
        const driver2 = newRankedDrivers[rank - 1];
        newRankedDrivers[rank] = driver2 ?? null;
        newRankedDrivers[rank - 1] = driver1 ?? null;

        const newState = {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: newRankedDrivers,
        };
        return newState;
      } else {
        return {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: [...rankedDrivers],
        };
      }
    }
    case "MOVE_DOWN": {
      const { unRankedDrivers, rankedDrivers } = state;
      const { driver, rank } = action.payload;
      if (rank > -1 && rank < 21 && driver !== null) {
        const newRankedDrivers = [...rankedDrivers];
        const driver1 = newRankedDrivers[rank];
        const driver2 = newRankedDrivers[rank + 1];
        newRankedDrivers[rank] = driver2 ?? null;
        newRankedDrivers[rank + 1] = driver1 ?? null;

        const newState = {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: newRankedDrivers,
        };
        return newState;
      } else {
        return {
          unRankedDrivers: [...unRankedDrivers],
          rankedDrivers: [...rankedDrivers],
        };
      }
    }
    default:
      return state;
  }
};

export const F1RankContextProvider = ({
  children,
}: F1RankContextProviderProps) => {
  const [f1RankState, f1RankDispatch] = useReducer(F1RankReducer, {
    unRankedDrivers: [...driverCodes],
    rankedDrivers: [...nullArray21],
  });

  return (
    <F1RankContext.Provider value={{ f1RankState, f1RankDispatch }}>
      {children}
    </F1RankContext.Provider>
  );
};
