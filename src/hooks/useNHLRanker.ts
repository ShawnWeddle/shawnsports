import { NHLRankContext } from "~/context/NHLrankContext";
import { useContext } from "react";

export const useNHLRankContext = () => {
  const context = useContext(NHLRankContext);

  if(!context){
    throw Error("useNHLRankContext must be used inside an NHLRankContextProvider");
  }

  return context;
}