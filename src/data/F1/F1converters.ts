import { driverCodes, constructorNames, driverToConstructor, calculatePoints } from "~/data/F1/F1data";
import type { DriverCodeType, ConstructorNameType } from "~/data/F1/F1data";
import type { RaceResultsType } from "~/data/F1/raceResults";

type FullDriverType = {
  driverName: DriverCodeType | undefined;
  finishPosition: number | "DNF" | "DNR";
  sprint: boolean;
  fastestLap: boolean;
  polePosition: boolean;
  points: number;
};

export const locationHeaders = (results: RaceResultsType) => {
  const headers = results.map((result) => {
    const { location, sprint } = result;
    return {
      locationName: location,
      sprint: sprint
    }
  })
  return {headers: headers} 
}

export const resultsSortedByPlace = (results: RaceResultsType) => {
  const headers = results.map((result) => {
    return result.sprint ? result.location + " Sprint" : result.location;
  })

  const numberOfRaces = results.length;

  const findPlaceArray = (place: number) => {
    const placeArray: FullDriverType[] = results.map((result) => {
      const {finalOrder, sprint, fastestLap, polePosition} = result;
      const driver = finalOrder[place];
        const fullDriver: FullDriverType = {
          driverName: driver,
          sprint: sprint,
          fastestLap: driver === fastestLap,
          polePosition: driver === polePosition,
          finishPosition: place,
          points: 1,
        }
        return fullDriver;
    })
    return placeArray;
  }

  const findDNFArray = (place: number) => {
    const placeArray: FullDriverType[] = results.map((result) => {
      const {DNFs, sprint, fastestLap, polePosition} = result;
      const driver = DNFs[place];
        const fullDriver: FullDriverType = {
          driverName: driver,
          sprint: sprint,
          fastestLap: driver === fastestLap,
          polePosition: driver === polePosition,
          finishPosition: "DNF",
          points: 0,
        }
        return fullDriver;
  })
  return placeArray;
  }

  const fullFinishOrder = () => {
    const fullArray: FullDriverType[][] = [];
    for (let i=0; i<20; i++){
      fullArray[i] = findPlaceArray(i);
    }
    return fullArray;
  }

  const fullDNFOrder = () => {
    const fullArray: FullDriverType[][] = [];
    for (let i=0; i<3; i++){
      fullArray[i] = findDNFArray(i);
    }
    return fullArray;
  }

  return {headers: headers, fullResults: fullFinishOrder(), DNFs: fullDNFOrder() };
}

// Results Sorted By Driver * Results Sorted By Driver * Results Sorted By Driver //

export const resultsSortedByDriver = (results: RaceResultsType, order: DriverCodeType[]) => {
  const findPlaceArray = (driver: DriverCodeType) => {
    const driverArray: FullDriverType[] = results.map((result) => {
      const { finalOrder, DNFs, sprint, fastestLap, polePosition } = result;
      return{
        driverName: (finalOrder.includes(driver) || DNFs.includes(driver)) ? driver : undefined,
        sprint: sprint,
        fastestLap: driver === fastestLap,
        polePosition: driver === polePosition,
        finishPosition: finalOrder.includes(driver) ? finalOrder.indexOf(driver) + 1 : DNFs.includes(driver) ? "DNF" : "DNR",
        points: 0,
      }
    })
    return driverArray;
  }

  const fullResults = order.map((driver) => {
    return findPlaceArray(driver);
  })

  return { fullResults: fullResults }
}

// Create Driver and Constructor Standings * Create Driver and Constructor Standings //

export const createStandings = (results: RaceResultsType) => {
  const driverStandings: {[Key in DriverCodeType] : {total: number, runTotal: number[]}} = {
    ALB : {total: 0, runTotal: [0]}, 
    ALO : {total: 0, runTotal: [0]}, 
    BOT : {total: 0, runTotal: [0]}, 
    DEV : {total: 0, runTotal: [0]}, 
    GAS : {total: 0, runTotal: [0]}, 
    HAM : {total: 0, runTotal: [0]}, 
    HUL : {total: 0, runTotal: [0]}, 
    LEC : {total: 0, runTotal: [0]}, 
    MAG : {total: 0, runTotal: [0]}, 
    NOR : {total: 0, runTotal: [0]}, 
    OCO : {total: 0, runTotal: [0]}, 
    PER : {total: 0, runTotal: [0]}, 
    PIA : {total: 0, runTotal: [0]}, 
    RIC : {total: 0, runTotal: [0]}, 
    RUS : {total: 0, runTotal: [0]}, 
    SAI : {total: 0, runTotal: [0]}, 
    SAR : {total: 0, runTotal: [0]}, 
    STR : {total: 0, runTotal: [0]}, 
    TSU : {total: 0, runTotal: [0]}, 
    VER : {total: 0, runTotal: [0]}, 
    ZHO : {total: 0, runTotal: [0]}, 
  }

  const driverBestFinish: {[Key in DriverCodeType] : number} = {
    ALB : 21,
    ALO : 21,
    BOT : 21,
    DEV : 21,
    GAS : 21,
    HAM : 21,
    HUL : 21,
    LEC : 21,
    MAG : 21,
    NOR : 21,
    OCO : 21,
    PER : 21,
    PIA : 21,
    RIC : 21,
    RUS : 21,
    SAI : 21,
    SAR : 21,
    STR : 21,
    TSU : 21,
    VER : 21,
    ZHO : 21,
  }

  const constructorStandings: {[Key in ConstructorNameType] : number} = {
    "Alfa Romeo" : 0,
    AlphaTauri : 0,
    Alpine : 0,
    "Aston Martin" : 0,
    Haas : 0,
    Ferrari : 0,
    McLaren : 0,
    Mercedes : 0,
    "Red Bull" : 0,
    Williams : 0,
  }


  const standings = results.map((result) => {
    const { finalOrder, sprint, fastestLap } = result;
    const addPoints = finalOrder.map((driver, index) => {
      const addition = calculatePoints(index, sprint, driver === fastestLap);
      driverStandings[driver].total += addition;
        constructorStandings[driverToConstructor(driver)] += addition;
      if(index + 1 < driverBestFinish[driver]){
        driverBestFinish[driver] = index + 1;
      }
    })
  });

  const driverStandingsArray = driverCodes.map((driver) => {
    const driverTuple: [DriverCodeType, number, number] = [driver, driverStandings[driver].total, driverBestFinish[driver]];
    return driverTuple;
  }).sort((a,b) => b[1] - a[1] || a[2] - b[2]);

  const constructorStandingsArray = constructorNames.map((constructor) => {
    const constructorTuple: [ConstructorNameType, number] = [constructor, constructorStandings[constructor]];
    return constructorTuple;
  }).sort((a,b) => b[1] - a[1]);

  const driverOrder = driverStandingsArray.map((driver) => {
    return driver[0];
  })
  
  const constructorOrder = constructorStandingsArray.map((constructor) => {
    return constructor[0];
  })

  return {
    driverStandings: driverStandings, 
    constructorStandings: constructorStandings, 
    driverStandingsArray: driverStandingsArray,
    constructorStandingsArray: constructorStandingsArray,
    driverOrder: driverOrder,
    constructorOrder: constructorOrder,
    driverBestFinish: driverBestFinish,
  };
}

export const runningTotal = (results: RaceResultsType, order: DriverCodeType[]) => {
  const headers = results.map((result) => {
    return result.sprint ? result.location + " Sprint" : result.location;
  })

  const findPlaceArray = (driver: DriverCodeType) => {
    const driverArray: FullDriverType[] = results.map((result) => {
      const { finalOrder, sprint, fastestLap, polePosition } = result;
      const place = finalOrder.indexOf(driver);
      const points = calculatePoints(place, sprint, driver === fastestLap);
      return {
        driverName: driver,
          sprint: sprint,
          fastestLap: driver === fastestLap,
          polePosition: driver === polePosition,
          finishPosition: place !== -1 ? place : "DNF",
          points: points,
      }
    })
    return driverArray;
  }

  const cumulativeArray = (array: FullDriverType[]) : FullDriverType[] => {
    let sum: number;
    return array.map((sum = 0, n => {
      const newN = {
        ...n,
        points: sum += n?.points,
      };
      return newN;
    }));
  }

  const fullResults = order.map((driver) => {
    return cumulativeArray(findPlaceArray(driver).map((place) => {
      const pointTotal: FullDriverType = {
        driverName: place.driverName,
        points: place.points,
        finishPosition: place.finishPosition,
        sprint: place.sprint,
        fastestLap: place.fastestLap,
        polePosition: place.polePosition,
      }
      return pointTotal;
    })
  )});

  return { headers: headers, fullResults: fullResults, driverOrder: order }
}