import { NBAMapContext } from "~/context/NBAmapContext";
import { useContext } from "react";

export const useNBAMapContext = () => {
  const context = useContext(NBAMapContext);

  if (!context) {
    throw Error(
      "useNBAMapContext must be used inside an NBAMapContextProvider"
    );
  }

  return context;
};
