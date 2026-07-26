import { MapContext } from "~/context/F1MapContext";
import { useContext } from "react";

export const useMapContext = () => {
  const context = useContext(MapContext);

  if(!context){
    throw Error("useMapContext must be used inside an MapContextProvider");
  }

  return context;
}