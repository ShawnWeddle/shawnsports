import { createContext, useReducer, useEffect } from "react";
import type { PageHeadsType, UnderPageHeadsType } from "~/data/SiteData";

export const NavContext = createContext<ContextType | null>(null);

type ContextType = {
  navState: NavReducerState;
  navDispatch: React.Dispatch<NavReducerAction>;
};

type NavContextProviderProps = {
  children: React.ReactNode;
};

type NavReducerState = {
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
};
type NavReducerAction = {
  type: "CHANGE_PAGE" | "CHANGE_UNDERPAGE";
  payload: NavReducerState;
};

export const navReducer = (
  state: NavReducerState,
  action: NavReducerAction
) => {
  switch (action.type) {
    case "CHANGE_PAGE": {
      return {
        pageMode: action.payload.pageMode,
        underPageMode: action.payload.underPageMode,
      };
    }
    case "CHANGE_UNDERPAGE": {
      return {
        pageMode: action.payload.pageMode,
        underPageMode: action.payload.underPageMode,
      };
    }
    default:
      return state;
  }
};

export const NavContextProvider = ({ children }: NavContextProviderProps) => {
  const [navState, navDispatch] = useReducer(navReducer, {
    pageMode: "Home",
    underPageMode: "Home",
  });

  return (
    <NavContext.Provider value={{ navState, navDispatch }}>
      {children}
    </NavContext.Provider>
  );
};
