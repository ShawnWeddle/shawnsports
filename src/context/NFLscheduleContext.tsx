import { createContext, useReducer, useEffect } from "react";
import {
  type GameType,
  type GameWinner,
  type NFLScheduleType,
  NFLscheduleData,
} from "~/data/NFL/NFLScheduleData";

export const NFLScheduleContext = createContext<ContextType | null>(null);

type ContextType = {
  nflScheduleState: NFLScheduleType;
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
  state: NFLScheduleType,
  action: NFLScheduleReducerAction
) => {
  switch (action.type) {
    case "PICK": {
      const newState = {
        weeksCompleted: state.weeksCompleted,
        schedule: [...state.schedule],
      };
      action.payload.forEach((winner) => {
        const { Code, Winner } = winner;
        const foundIndex = newState.schedule.findIndex(
          (game) => game.Code === Code
        );
        const newGame = newState.schedule[foundIndex];
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
    {
      weeksCompleted: NFLscheduleData.weeksCompleted,
      schedule: [...NFLscheduleData.schedule],
    }
  );

  useEffect(() => {
    const scheduleCheck: string | null = localStorage.getItem("schedule");
    const schedule: NFLScheduleType | null = scheduleCheck //eslint-disable-line
      ? JSON.parse(scheduleCheck) //eslint-disable-line
      : null; //eslint-disable-line

    if (schedule) {
      if (schedule.weeksCompleted === NFLscheduleData.weeksCompleted) {
        nflScheduleDispatch({
          type: "PICK",
          payload: [...schedule.schedule],
        });
      }
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
