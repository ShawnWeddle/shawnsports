import { NFLRankContext } from "~/context/NFLrankContext";
import { useContext } from "react";

export const useNFLRankContext = () => {
  const context = useContext(NFLRankContext);

  if(!context){
    throw Error("useNFLRankContext must be used inside an NFLRankContextProvider");
  }

  return context;
}