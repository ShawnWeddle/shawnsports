import { NFLScheduleContext } from "~/context/NFLscheduleContext";
import { useContext } from "react";

export const useNFLScheduleContext = () => {
  const context = useContext(NFLScheduleContext);

  if(!context){
    throw Error("useNFLScheduleContext must be used inside an NFLScheduleContextProvider");
  }

  return context;
}