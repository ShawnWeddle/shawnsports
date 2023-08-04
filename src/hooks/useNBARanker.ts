import { NBARankContext } from "~/context/NBArankContext";
import { useContext } from "react";

export const useNBARankContext = () => {
  const context = useContext(NBARankContext);

  if(!context){
    throw Error("useNBARankContext must be used inside an NBARankContextProvider");
  }

  return context;
}