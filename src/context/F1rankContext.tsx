import { createContext, useReducer } from "react";
import {
  type DriverCode24Type,
  driverCodes2024,
  nullArray20,
} from "~/data/F1/2024/F1data24";

export const F1RankContext = createContext<ContextType | null>(null);

type ContextType = {
  f1RankState: F1RankReducerState;
  f1RankDispatch: React.Dispatch<F1RankReducerAction>;
};

type F1RankContextProviderProps = {
  children: React.ReactNode;
};

type F1RankReducerState = {
  unRankedDrivers: (DriverCode24Type | null)[];
  rankedDrivers: (DriverCode24Type | null)[];
};

type F1RankPayloadType = {
  driver: DriverCode24Type | null;
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

const fullRank = new Map<DriverCode24Type, number>();
driverCodes2024.forEach((team, index) => {
  fullRank.set(team, index);
});

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
        const eRank = fullRank.get(driver) ?? 100;
        newUnRankedDrivers[eRank] = null;

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
        const eRank = fullRank.get(driver) ?? 100;
        newUnRankedDrivers[eRank] = driver;

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
      if (
        newRank > -1 &&
        newRank < 21 &&
        driver !== null &&
        prevRank !== undefined
      ) {
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
    unRankedDrivers: [...driverCodes2024],
    rankedDrivers: [...nullArray20],
  });

  return (
    <F1RankContext.Provider value={{ f1RankState, f1RankDispatch }}>
      {children}
    </F1RankContext.Provider>
  );
};
