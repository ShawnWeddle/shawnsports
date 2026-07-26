import { createContext, useReducer } from "react";
import type { F1RaceType } from "~/data/F1/2026/raceData";

export const MapContext = createContext<ContextType | null>(null);

type ContextType = {
  mapState: MapReducerState;
  mapDispatch: React.Dispatch<MapReducerAction>;
};

type MapContextProviderProps = {
  children: React.ReactNode;
};

type MapReducerState = {
  activeRaces:
    | {
        grandPrix: F1RaceType;
        sprintRace?: F1RaceType;
      }
    | undefined;
  dialogOpen: boolean;
};

type MapPayloadType = {
  activeRaces:
    | {
        grandPrix: F1RaceType;
        sprintRace?: F1RaceType;
      }
    | undefined;
};

type MapReducerAction = {
  type: "SET_ACTIVE_RACE" | "CLOSE_DIALOG";
  payload: MapPayloadType;
};

export const mapReducer = (
  state: MapReducerState,
  action: MapReducerAction
) => {
  switch (action.type) {
    case "SET_ACTIVE_RACE":
      return { activeRaces: action.payload.activeRaces, dialogOpen: true };
    case "CLOSE_DIALOG":
      return { ...state, dialogOpen: false };
    default:
      return state;
  }
};

export const MapContextProvider = (props: MapContextProviderProps) => {
  const { children } = props;
  const [mapState, mapDispatch] = useReducer(mapReducer, {
    activeRaces: undefined,
    dialogOpen: false,
  });

  return (
    <MapContext.Provider value={{ mapState, mapDispatch }}>
      {children}
    </MapContext.Provider>
  );
};
