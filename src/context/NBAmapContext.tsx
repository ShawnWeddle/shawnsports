import { createContext, useReducer } from "react";
import {
  type NBATeamType,
  type TierType,
  tierMapList,
} from "~/data/NBA/NBAdata";

export const NBAMapContext = createContext<ContextType | null>(null);

type ContextType = {
  nbaMapState: NBAMapReducerState;
  nbaMapDispatch: React.Dispatch<NBAMapReducerAction>;
};

type NBAMapContextProviderProps = {
  children: React.ReactNode;
};

type NBAMapReducerState = {
  activeTiers: Set<TierType>;
  activeTeam: NBATeamType | undefined;
  mapMode: "Tiers" | "Paths";
};

type NBAMapPayloadType = {
  team?: NBATeamType;
  tier?: TierType;
  mode?: "Tiers" | "Paths";
};

type NBAMapReducerAction = {
  type: "CHANGE_TIERS" | "CHANGE_TEAM" | "CHANGE_MAP_MODE";
  payload: NBAMapPayloadType;
};

export const nbaMapReducer = (
  state: NBAMapReducerState,
  action: NBAMapReducerAction
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

export const NBAMapContextProvider = ({
  children,
}: NBAMapContextProviderProps) => {
  const [nbaMapState, nbaMapDispatch] = useReducer(nbaMapReducer, {
    activeTiers: tierMapList,
    activeTeam: undefined,
    mapMode: "Tiers",
  });

  return (
    <NBAMapContext.Provider value={{ nbaMapState, nbaMapDispatch }}>
      {children}
    </NBAMapContext.Provider>
  );
};
