import { NBALotteryContext } from "~/context/NBAlotteryContext";
import { useContext } from "react";

export const useNBALotteryContext = () => {
  const context = useContext(NBALotteryContext);

  if(!context){
    throw Error("useNBALotteryContext must be used inside an NBALotteryContextProvider");
  }

  return context;
}