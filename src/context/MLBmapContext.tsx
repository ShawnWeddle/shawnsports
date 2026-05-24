import { createContext, useReducer } from "react";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { type TierType } from "~/data/MLB/ballparks";
import { tierMapList } from "~/components/map/MLBmap";

export const MLBMapContext = createContext<ContextType | null>(null);

type ContextType = {
  mlbMapState: MLBMapReducerState;
  mlbMapDispatch: React.Dispatch<MLBMapReducerAction>;
};

type MLBMapContextProviderProps = {
  children: React.ReactNode;
};

type MLBMapReducerState = {
  activeTiers: Set<TierType>;
  activeTeam: MLBTeamType | undefined;
  mapMode: "Tiers" | "Paths";
};

type MLBMapPayloadType = {
  team?: MLBTeamType;
  tier?: TierType;
  mode?: "Tiers" | "Paths";
};

type MLBMapReducerAction = {
  type: "CHANGE_TIERS" | "CHANGE_TEAM" | "CHANGE_MAP_MODE";
  payload: MLBMapPayloadType;
};

export const mlbMapReducer = (
  state: MLBMapReducerState,
  action: MLBMapReducerAction
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

export const MLBMapContextProvider = ({
  children,
}: MLBMapContextProviderProps) => {
  const [mlbMapState, mlbMapDispatch] = useReducer(mlbMapReducer, {
    activeTiers: tierMapList,
    activeTeam: undefined,
    mapMode: "Tiers",
  });

  return (
    <MLBMapContext.Provider value={{ mlbMapState, mlbMapDispatch }}>
      {children}
    </MLBMapContext.Provider>
  );
};
