import { MLBMapContext } from "~/context/MLBmapContext";
import { useContext } from "react";

export const useMLBMapContext = () => {
  const context = useContext(MLBMapContext);

  if(!context){
    throw Error("useMLBMapContext must be used inside an MLBMapContextProvider");
  }

  return context;
}