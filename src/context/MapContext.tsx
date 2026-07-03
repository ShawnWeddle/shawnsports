import { createContext, useReducer } from "react";
import type { LeagueType, SportType } from "~/data/map/mapData";
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
  sport: SportType | "All";
};

type MapPayloadType = {
  league: LeagueType;
};

type MapReducerAction = {
  type: "CHANGE_LEAGUES" | "ALL_LEAGUES" | "NO_LEAGUES";
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
    default:
      return state;
  }
};

export const MapContextProvider = (props: MapContextProviderProps) => {
  const { sport, children } = props;
  const [mapState, mapDispatch] = useReducer(mapReducer, {
    activeLeagues: initialLeagueList(sport).start,
    sport,
  });

  return (
    <MapContext.Provider value={{ mapState, mapDispatch }}>
      {children}
    </MapContext.Provider>
  );
};
