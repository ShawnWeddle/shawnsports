import { RankContext } from "~/context/RankContext";
import { useContext } from "react";

export const useRankContext = () => {
  const context = useContext(RankContext);

  if(!context){
    throw Error("useRankContext must be used inside a RankContextProvider");
  }

  return context;
}