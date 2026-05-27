import { createContext, useReducer } from "react";
import {
  type NHLTeamType,
  type TierType,
  tierMapList,
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
  activeTiers: Set<TierType>;
  activeTeam: NHLTeamType | undefined;
  mapMode: "Tiers" | "Paths";
};

type NHLMapPayloadType = {
  team?: NHLTeamType;
  tier?: TierType;
  mode?: "Tiers" | "Paths";
};

type NHLMapReducerAction = {
  type: "CHANGE_TIERS" | "CHANGE_TEAM" | "CHANGE_MAP_MODE";
  payload: NHLMapPayloadType;
};

export const nhlMapReducer = (
  state: NHLMapReducerState,
  action: NHLMapReducerAction
) => {
  switch (action.type) {
    case "CHANGE_TIERS":
      const newTiers = new Set<TierType>([...state.activeTiers]);
      const activeTier = action.payload.tier;
      if (activeTier) {
        if (newTiers.has(activeTier)) {
          newTiers.delete(activeTier);
        } else {
          newTiers.add(activeTier);
        }
      }

      return { ...state, activeTiers: newTiers };
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
    activeTiers: tierMapList,
    activeTeam: undefined,
    mapMode: "Tiers",
  });

  return (
    <NHLMapContext.Provider value={{ nhlMapState, nhlMapDispatch }}>
      {children}
    </NHLMapContext.Provider>
  );
};
