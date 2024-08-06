import { CFLRankContext } from "~/context/CFLrankContext";
import { useContext } from "react";

export const useCFLRankContext = () => {
  const context = useContext(CFLRankContext);

  if(!context){
    throw Error("useCFLRankContext must be used inside an CFLRankContextProvider");
  }

  return context;
}