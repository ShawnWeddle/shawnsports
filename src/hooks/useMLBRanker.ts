import { MLBRankContext } from "~/context/MLBrankContext";
import { useContext } from "react";

export const useMLBRankContext = () => {
  const context = useContext(MLBRankContext);

  if(!context){
    throw Error("useMLBRankContext must be used inside an MLBRankContextProvider");
  }

  return context;
}