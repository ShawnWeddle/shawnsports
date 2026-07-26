import { type MLBTeamType, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import {
  AAAFieldData,
  AAFieldData,
  HAFieldData,
  MLBFieldData,
  SAFieldData,
} from "~/data/MLB/BaseballStadiumData";

type BaseballLeagueType = "MLB" | "AAA" | "AA" | "HA" | "SA";
type SortFieldType = "Alphabet" | "Latitude" | "Longitude";

export type SortType = {
  league: BaseballLeagueType;
  field: SortFieldType;
  down: boolean;
};

export const sortedBaseballTeams = (order: SortType): MLBTeamType[] => {
  switch(order.league){
    case "MLB": {
      switch(order.field){
        case "Alphabet": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return a > b ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return a < b ? 1 : -1;
            })
          }
        }
        case "Latitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return MLBFieldData[a].coordinates.latitude < MLBFieldData[b].coordinates.latitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return MLBFieldData[a].coordinates.latitude > MLBFieldData[b].coordinates.latitude ? 1 : -1;
            })
          }
        }
        case "Longitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return MLBFieldData[a].coordinates.longitude > MLBFieldData[b].coordinates.longitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return MLBFieldData[a].coordinates.longitude < MLBFieldData[b].coordinates.longitude ? 1 : -1;
            })
          }
        }
      }
    }
    case "AAA": {
      switch(order.field){
        case "Alphabet": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].location > AAAFieldData[`AAA-${b}`].location ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].location < AAAFieldData[`AAA-${b}`].location ? 1 : -1;
            })
          }
        }
        case "Latitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].coordinates.latitude < AAAFieldData[`AAA-${b}`].coordinates.latitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].coordinates.latitude > AAAFieldData[`AAA-${b}`].coordinates.latitude ? 1 : -1;
            })
          }
        }
        case "Longitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].coordinates.longitude > AAAFieldData[`AAA-${b}`].coordinates.longitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAAFieldData[`AAA-${a}`].coordinates.longitude < AAAFieldData[`AAA-${b}`].coordinates.longitude ? 1 : -1;
            })
          }
        }
      }
    }
    case "AA": {
      switch(order.field){
        case "Alphabet": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].location > AAFieldData[`AA-${b}`].location ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].location < AAFieldData[`AA-${b}`].location ? 1 : -1;
            })
          }
        }
        case "Latitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].coordinates.latitude < AAFieldData[`AA-${b}`].coordinates.latitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].coordinates.latitude > AAFieldData[`AA-${b}`].coordinates.latitude ? 1 : -1;
            })
          }
        }
        case "Longitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].coordinates.longitude > AAFieldData[`AA-${b}`].coordinates.longitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return AAFieldData[`AA-${a}`].coordinates.longitude < AAFieldData[`AA-${b}`].coordinates.longitude ? 1 : -1;
            })
          }
        }
      }
    }
    case "HA": {
      switch(order.field){
        case "Alphabet": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].location > HAFieldData[`HA-${b}`].location ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].location < HAFieldData[`HA-${b}`].location ? 1 : -1;
            })
          }
        }
        case "Latitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].coordinates.latitude < HAFieldData[`HA-${b}`].coordinates.latitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].coordinates.latitude > HAFieldData[`HA-${b}`].coordinates.latitude ? 1 : -1;
            })
          }
        }
        case "Longitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].coordinates.longitude > HAFieldData[`HA-${b}`].coordinates.longitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return HAFieldData[`HA-${a}`].coordinates.longitude < HAFieldData[`HA-${b}`].coordinates.longitude ? 1 : -1;
            })
          }
        }
      }
    }
    case "SA": {
      switch(order.field){
        case "Alphabet": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].location > SAFieldData[`SA-${b}`].location ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].location < SAFieldData[`SA-${b}`].location ? 1 : -1;
            })
          }
        }
        case "Latitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].coordinates.latitude < SAFieldData[`SA-${b}`].coordinates.latitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].coordinates.latitude > SAFieldData[`SA-${b}`].coordinates.latitude ? 1 : -1;
            })
          }
        }
        case "Longitude": {
          if(order.down){
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].coordinates.longitude > SAFieldData[`SA-${b}`].coordinates.longitude ? 1 : -1;
            })
          } else {
            return mlbTeamsRanked.toSorted((a,b) => {
              return SAFieldData[`SA-${a}`].coordinates.longitude < SAFieldData[`SA-${b}`].coordinates.longitude ? 1 : -1;
            })
          }
        }
      }
    }
  }
}