import { F1RankContext } from "~/context/F1rankContext";
import { useContext } from "react";

export const useF1RankContext = () => {
  const context = useContext(F1RankContext);

  if(!context){
    throw Error("useF1RankContext must be used inside an F1RankContextProvider");
  }

  return context;
}