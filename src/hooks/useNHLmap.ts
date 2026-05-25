import { NHLMapContext } from "~/context/NHLmapContext";
import { useContext } from "react";

export const useNHLMapContext = () => {
  const context = useContext(NHLMapContext);

  if(!context){
    throw Error("useNHLMapContext must be used inside an NHLMapContextProvider");
  }

  return context;
}