import type { DriverCodeType, FullDriverCodeType } from "~/data/F1/F1data";
import type { RaceResultsType,  } from "~/data/F1/raceResults";

export const sortResultsByPlace = (results: RaceResultsType) => {
  const headers = results.map((result, index) => {
    return result.sprint ? result.location + " Sprint" : result.location;
  })

  const numberOfRaces = results.length;

  const findPlaceArray = (place: number) => {
    const placeArray: FullDriverCodeType[] = results.map((result, index) => {
        const {finalOrder} = result;
        return finalOrder[place] ?? undefined;
    })
    return placeArray;
  }

  const findDNFArray = (place: number) => {
    const placeArray: FullDriverCodeType[] = results.map((result, index) => {
        const {DNFs} = result;
        return DNFs[place] ?? undefined;
    })
    return placeArray;
  }

  const fullFinishOrder = () => {
    const fullArray: FullDriverCodeType[][] = [];
    for (let i=0; i<20; i++){
      fullArray[i] = findPlaceArray(i);
    }
    return fullArray;
  }

  const fullDNFOrder = () => {
    const fullArray: FullDriverCodeType[][] = [];
    for (let i=0; i<3; i++){
      fullArray[i] = findDNFArray(i);
    }
    return fullArray;
  }

  return {headers: headers, results: fullFinishOrder(), DNFs: fullDNFOrder(), };
}