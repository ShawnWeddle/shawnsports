import { createContext, useReducer, useEffect } from "react";
import {
  type GameType,
  type GameWinner,
  NFLscheduleData,
} from "~/data/NFL/NFLscheduleData";

export const NFLScheduleContext = createContext<ContextType | null>(null);

type ContextType = {
  nflScheduleState: GameType[];
  nflScheduleDispatch: React.Dispatch<NFLScheduleReducerAction>;
};

type NFLScheduleContextProviderProps = {
  children: React.ReactNode;
};

type NFLScheduleReducerAction = {
  type: "PICK";
  payload: GameWinner[];
};

export const nflScheduleReducer = (
  state: GameType[],
  action: NFLScheduleReducerAction
) => {
  switch (action.type) {
    case "PICK": {
      const newState = [...state];
      action.payload.forEach((winner) => {
        const { Code, Winner } = winner;
        const foundIndex = newState.findIndex((game) => game.Code === Code);
        const newGame = newState[foundIndex];
        if (newGame) {
          newGame.Winner = Winner;
        }
      });
      localStorage.setItem("schedule", JSON.stringify(newState));
      return newState;
    }
    default:
      localStorage.setItem("schedule", JSON.stringify(state));
      return state;
  }
};

export const NFLScheduleContextProvider = ({
  children,
}: NFLScheduleContextProviderProps) => {
  const [nflScheduleState, nflScheduleDispatch] = useReducer(
    nflScheduleReducer,
    [...NFLscheduleData]
  );

  useEffect(() => {
    const scheduleCheck: string | null = localStorage.getItem("schedule");
    const schedule: GameType[] | null = scheduleCheck //eslint-disable-line
      ? JSON.parse(scheduleCheck) //eslint-disable-line
      : null; //eslint-disable-line

    if (schedule) {
      nflScheduleDispatch({
        type: "PICK",
        payload: [...schedule],
      });
    }
  }, []);

  return (
    <NFLScheduleContext.Provider
      value={{ nflScheduleState, nflScheduleDispatch }}
    >
      {children}
    </NFLScheduleContext.Provider>
  );
};
