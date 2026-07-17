import { SuperLoserData } from "~/data/NFL/SuperLoserData"
import type { SuperLoserType } from "~/types/ChampTypes"

export const SuperLoserSort = (sortby: 
  "Name_A-Z" |
  "Name_Z-A" |
  "Position_A-Z" |
  "Position_Z-A" |
  "Losses"
): SuperLoserType[] => {
  switch(sortby){
    case "Name_A-Z": {
      return SuperLoserData.toSorted((a,b) => {
        return a.lastName > b.lastName ? 1 : -1
      });
    }
    case "Name_Z-A": {
      return SuperLoserData.toSorted((a,b) => {
        return a.lastName > b.lastName ? -1 : 1
      });
    }
    case "Position_A-Z": {
      return SuperLoserData.toSorted((a,b) => {
        return a.position < b.position ? -1 : 1
      });
    }
    case "Position_Z-A": {
      return SuperLoserData.toSorted((a,b) => {
        return a.position > b.position ? -1 : 1
      });
    }
    case "Losses": {
      return SuperLoserData.toSorted((a,b) => {
        if(a.losses.length !== b.losses.length){
          return a.losses.length > b.losses.length ? -1 : 1
        } else if (a.losses[0] && b.losses[0] && a.losses[0] !== b.losses[0]) {
          return a.losses[0] > b.losses[0] ? 1 : -1;
        } else if(a.losses[1] && b.losses[1] && a.losses[1] !== b.losses[1]) {
          return a.losses[1] > b.losses[1] ? 1 : -1;
        } else {
          return a.lastName > b.lastName ? 1 : -1;
        }
      });
    }
  }
}