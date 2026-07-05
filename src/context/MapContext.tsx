import { createContext, useReducer } from "react";
import type { LeagueType, SportType } from "~/data/map/mapData";
import type { LeagueTeamType } from "~/types/MapTypes";
import { initialLeagueList } from "~/data/map/mapData";

export const MapContext = createContext<ContextType | null>(null);

type ContextType = {
  mapState: MapReducerState;
  mapDispatch: React.Dispatch<MapReducerAction>;
};

type MapContextProviderProps = {
  children: React.ReactNode;
  sport: SportType | "All";
};

type MapReducerState = {
  activeLeagues: Set<LeagueType>;
  activeTeam: LeagueTeamType | undefined;
  sport: SportType | "All";
};

type MapPayloadType = {
  league?: LeagueType;
  team?: LeagueTeamType;
};

type MapReducerAction = {
  type:
    | "CHANGE_LEAGUES"
    | "CHANGE_MAP_MODE"
    | "ALL_LEAGUES"
    | "NO_LEAGUES"
    | "SET_ACTIVE_TEAM";
  payload: MapPayloadType;
};

export const mapReducer = (
  state: MapReducerState,
  action: MapReducerAction
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
    case "ALL_LEAGUES":
      return { ...state, activeLeagues: initialLeagueList("All").options };
    case "NO_LEAGUES":
      return { ...state, activeLeagues: new Set<LeagueType>([]) };
    case "SET_ACTIVE_TEAM":
      return { ...state, activeTeam: action.payload.team };
    default:
      return state;
  }
};

export const MapContextProvider = (props: MapContextProviderProps) => {
  const { sport, children } = props;
  const [mapState, mapDispatch] = useReducer(mapReducer, {
    activeLeagues: initialLeagueList(sport).start,
    activeTeam: undefined,
    sport,
  });

  return (
    <MapContext.Provider value={{ mapState, mapDispatch }}>
      {children}
    </MapContext.Provider>
  );
};
