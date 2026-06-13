import { createContext, useReducer } from "react";

export const NFLMapContext = createContext<ContextType | null>(null);

type ContextType = {
  nflMapState: NFLMapReducerState;
  nflMapDispatch: React.Dispatch<NFLMapReducerAction>;
};

type NFLMapContextProviderProps = {
  children: React.ReactNode;
};

export type LeagueType = "NFL" | "CFL" | "UFL" | "IFL";

export const leagueList: Set<LeagueType> = new Set([
  "NFL",
  "CFL",
  "UFL",
  "IFL",
]);

type NFLMapReducerState = {
  activeLeagues: Set<LeagueType>;
};

type NFLMapPayloadType = {
  league?: LeagueType;
};

type NFLMapReducerAction = {
  type: "CHANGE_LEAGUES";
  payload: NFLMapPayloadType;
};

export const nflMapReducer = (
  state: NFLMapReducerState,
  action: NFLMapReducerAction
) => {
  switch (action.type) {
    case "CHANGE_LEAGUES":
      const newLeagues = new Set<LeagueType>([...state.activeLeagues]);
      const activeLeague = action.payload.league;
      if (activeLeague) {
        if (newLeagues.has(activeLeague)) {
          newLeagues.delete(activeLeague);
        } else {
          newLeagues.add(activeLeague);
        }
      }

      return { ...state, activeLeagues: newLeagues };
    default:
      return state;
  }
};

export const NFLMapContextProvider = ({
  children,
}: NFLMapContextProviderProps) => {
  const [nflMapState, nflMapDispatch] = useReducer(nflMapReducer, {
    activeLeagues: leagueList,
  });

  return (
    <NFLMapContext.Provider value={{ nflMapState, nflMapDispatch }}>
      {children}
    </NFLMapContext.Provider>
  );
};
