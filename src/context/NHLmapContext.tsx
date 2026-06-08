import { createContext, useReducer } from "react";
import {
  type NHLTeamType,
  type LeagueType,
  leagueMapList,
} from "~/data/NHL/NHLdata";

export const NHLMapContext = createContext<ContextType | null>(null);

type ContextType = {
  nhlMapState: NHLMapReducerState;
  nhlMapDispatch: React.Dispatch<NHLMapReducerAction>;
};

type NHLMapContextProviderProps = {
  children: React.ReactNode;
};

type NHLMapReducerState = {
  activeLeagues: Set<LeagueType>;
  activeTeam: NHLTeamType | undefined;
  mapMode: "Leagues" | "Paths";
};

type NHLMapPayloadType = {
  team?: NHLTeamType;
  league?: LeagueType;
  mode?: "Leagues" | "Paths";
};

type NHLMapReducerAction = {
  type: "CHANGE_LEAGUES" | "CHANGE_TEAM" | "CHANGE_MAP_MODE";
  payload: NHLMapPayloadType;
};

export const nhlMapReducer = (
  state: NHLMapReducerState,
  action: NHLMapReducerAction
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
    case "CHANGE_TEAM":
      const team = action.payload.team;
      return { ...state, activeTeam: team };
    case "CHANGE_MAP_MODE":
      const mode = action.payload.mode ?? state.mapMode;
      return { ...state, mapMode: mode };
    default:
      return state;
  }
};

export const NHLMapContextProvider = ({
  children,
}: NHLMapContextProviderProps) => {
  const [nhlMapState, nhlMapDispatch] = useReducer(nhlMapReducer, {
    activeLeagues: leagueMapList,
    activeTeam: undefined,
    mapMode: "Leagues",
  });

  return (
    <NHLMapContext.Provider value={{ nhlMapState, nhlMapDispatch }}>
      {children}
    </NHLMapContext.Provider>
  );
};
