import { WNBARankContext } from "~/context/WNBArankContext";
import { useContext } from "react";

export const useWNBARankContext = () => {
  const context = useContext(WNBARankContext);

  if(!context){
    throw Error("useWNBARankContext must be used inside an WNBARankContextProvider");
  }

  return context;
}