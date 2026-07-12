import type { SportType } from "~/data/map/mapData";

function getMapName(input: SportType | "All") {
  switch(input){
    case "Football":
    case "Basketball":
    case "Baseball":
    case "Hockey":
    case "Soccer":
    case "Volleyball":
      return input + " Map"
    case "All":
      return "All Sports Map"
  }
}

export default getMapName;