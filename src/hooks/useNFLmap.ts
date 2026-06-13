import { NFLMapContext } from "~/context/NFLmapContext";
import { useContext } from "react";

export const useNFLMapContext = () => {
  const context = useContext(NFLMapContext);

  if(!context){
    throw Error("useNFLMapContext must be used inside an NFLMapContextProvider");
  }

  return context;
}