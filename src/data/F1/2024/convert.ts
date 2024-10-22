import { driverCodes2024, constructorNames2024, driverToConstructor2024, calculatePoints, constructorToDrivers2024, beatTeammate } from "~/data/F1/2024/F1data24";
import type { DriverCode24Type, ConstructorName24Type } from "~/data/F1/2024/F1data24";
import type { RaceResultsType, F1RaceType } from "~/data/F1/2024/raceData";
import { flip2DArrays } from "~/utils/cuA";
import { dcSort } from "~/utils/sorting";

type FullDriverResultType = {
  driverName: DriverCode24Type | undefined;
  constructor: ConstructorName24Type | undefined;
  finishPosition: number | "DNF" | "DNR" | "DQ";
  sprint: boolean;
  fastestLap: boolean;
  polePosition: boolean;
  points: number;
  completed: boolean;
};

// Location Headers

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

//Results sorted by Driver

export const resultsSortedByDriver = (results: RaceResultsType, order: DriverCode24Type[]) => {
  const findPlaceArray = (driver: DriverCode24Type) => {
    const driverArray: FullDriverResultType[] = results.map((result) => {
      const { finalOrder, DNFs, DQs, sprint, fastestLap, polePosition, completed } = result;
      const allEntries = [...finalOrder, ...DNFs];
      const findDAC = allEntries.map((dac) => dac.driver).indexOf(driver);

      return {
        driverName: findDAC > -1 ? allEntries[findDAC]?.driver : undefined,
        constructor: findDAC > -1 ? allEntries[findDAC]?.constructor : undefined,
        sprint,
        fastestLap: driver === fastestLap?.driver,
        polePosition: driver === polePosition?.driver,
        finishPosition: finalOrder.map((dac) => dac.driver).includes(driver) ? finalOrder.map((dac) => dac.driver).indexOf(driver) + 1 : DNFs.map((dac) => dac.driver).includes(driver) ? "DNF" : DQs?.map((dac) => dac.driver).includes(driver) ? "DQ" : "DNR",
        points: 0,
        completed,
      }
    })
    return driverArray;
  }

  const fullResults = order.map((driver) => {
    return findPlaceArray(driver);
  })

  return { fullResults }
}

//Results sorted by Place

export const resultsSortedByPlace = (results: RaceResultsType) => {
  const headers = results.map((result) => {
    return result.sprint ? result.location + " Sprint" : result.location;
  })

  const numberOfRaces = results.length;

  const findPlaceArray = (place: number) => {
    const placeArray: FullDriverResultType[] = results.map((result) => {
      const {finalOrder, sprint, fastestLap, polePosition, completed} = result;
      const driver = finalOrder[place]?.driver;
      const constructor = finalOrder[place]?.constructor;
      const fullDriver: FullDriverResultType = {
        driverName: driver,
        constructor,
        sprint: sprint,
        fastestLap: driver === fastestLap?.driver,
        polePosition: driver === polePosition?.driver,
        finishPosition: place,
        points: 1,
        completed,
      }
      return fullDriver;
    })
    return placeArray;
  }

  const findDNFArray = (place: number) => {
    const placeArray: FullDriverResultType[] = results.map((result) => {
      const {DNFs, sprint, fastestLap, polePosition, completed} = result;
      const driver = DNFs[place]?.driver;
      const constructor = DNFs[place]?.constructor;
      const fullDriver: FullDriverResultType = {
        driverName: driver,
        constructor,
        sprint: sprint,
        fastestLap: false,
        polePosition: driver === polePosition,
        finishPosition: "DNF",
        points: 0,
        completed
      }
      return fullDriver;
  })
  return placeArray;
  }

  const findDQArray = (place: number) => {
    const placeArray: FullDriverResultType[] = results.map((result) => {
      const {DQs, sprint, fastestLap, polePosition, completed} = result;
      const driver = DQs ? DQs[place]?.driver : undefined;
      const constructor = DQs ? DQs[place]?.constructor : undefined;
      const fullDriver: FullDriverResultType = {
        driverName: driver,
        constructor,
        sprint: sprint,
        fastestLap: false,
        polePosition: driver === polePosition,
        finishPosition: "DQ",
        points: 0,
        completed,
      }
      return fullDriver;
    })
    return placeArray;
  }

  const fullFinishOrder = () => {
    const fullArray: FullDriverResultType[][] = [];
    for (let i=0; i<20; i++){
      fullArray[i] = findPlaceArray(i);
    }
    return fullArray;
  }

  const mostDNFs = Math.max(...results.map((result, index) => result.DNFs.length));
  const fullDNFOrder = () => {
    const fullArray: FullDriverResultType[][] = [];
    for (let i=0; i<mostDNFs; i++){
      fullArray[i] = findDNFArray(i);
    }
    return fullArray;
  }

  const mostDQs = Math.max(...results.map((result, index) => result.DQs ? result.DQs.length : 0));
  const fullDQOrder = () => {
    const fullArray: FullDriverResultType[][] = [];
    for (let i=0; i<mostDQs; i++){
      fullArray[i] = findDQArray(i);
    }
    return fullArray;
  }

  return {headers, fullResults: fullFinishOrder(), DNFs: fullDNFOrder(), DQs: fullDQOrder() };
}

//Standings
//Driver Standings Object & Array
//Constructor Standings Object & Array
//Driver Order
//Constructor Order
//Driver Places Order
//Constructor Places Order
//Driver Podiums
//Constructor Podiums

export const createStandings = (results: RaceResultsType) => {
  const driverStandings: {[Key in DriverCode24Type] : {total: number, runTotal: number[]}} = {
    ALB : {total: 0, runTotal: [0]}, 
    ALO : {total: 0, runTotal: [0]}, 
    BEA : {total: 0, runTotal: [0]},
    BOT : {total: 0, runTotal: [0]}, 
    COL : {total: 0, runTotal: [0]}, 
    GAS : {total: 0, runTotal: [0]}, 
    HAM : {total: 0, runTotal: [0]}, 
    HUL : {total: 0, runTotal: [0]}, 
    LAW : {total: 0, runTotal: [0]}, 
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

  const driverPlaces: {[Key in DriverCode24Type]?: number[]} = {};
  const constructorPlaces: {[Key in ConstructorName24Type]? : number[]} = {};

  const driverPodiums: {[Key in DriverCode24Type]?: number} = {};
  const constructorPodiums: {[Key in ConstructorName24Type]? : number} = {};

  const constructorStandings: {[Key in ConstructorName24Type] : {total: number, runTotal: number[]}} = {
    Alpine : {total: 0, runTotal: [0]},
    "Aston Martin" : {total: 0, runTotal: [0]},
    Haas : {total: 0, runTotal: [0]},
    Ferrari : {total: 0, runTotal: [0]},
    McLaren : {total: 0, runTotal: [0]},
    Mercedes : {total: 0, runTotal: [0]},
    RB : {total: 0, runTotal: [0]},
    "Red Bull" : {total: 0, runTotal: [0]},
    Sauber : {total: 0, runTotal: [0]},
    Williams : {total: 0, runTotal: [0]},
  }

  results.forEach((result) => {
    const { finalOrder, sprint, fastestLap } = result;

    finalOrder.forEach((dac, index) => {
      const { driver, constructor} = dac;
      const addition = calculatePoints(index, sprint, driver === fastestLap?.driver);
      driverStandings[driver].total += addition;
      constructorStandings[constructor].total += addition;

      if(sprint) return;

      const activeDriverPlaces = driverPlaces[driver];
      if(activeDriverPlaces){
        activeDriverPlaces.push(index + 1);     
        activeDriverPlaces.sort((a, b) => a - b); 
      } else{
        driverPlaces[driver] = [index + 1];
      }

      const activeConstructorPlaces = constructorPlaces[constructor];
      if(activeConstructorPlaces){
        activeConstructorPlaces.push(index + 1);
        activeConstructorPlaces.sort((a, b) => a - b); 
      } else {
        constructorPlaces[constructor] = [index + 1];
      }

      if(index > 2) return;

      const activeDriverPodiums = driverPodiums[driver];
      driverPodiums[driver] = activeDriverPodiums ? activeDriverPodiums + 1 : 1;

      const activeConstructorPodiums = constructorPodiums[constructor];
      constructorPodiums[constructor] = activeConstructorPodiums ? activeConstructorPodiums + 1 : 1;
    })
  });

  const constructorStandingsArray = constructorNames2024.map((constructor) => {
    const constructorInfo = {
      name: constructor,
      points: constructorStandings[constructor].total,
      places: constructorPlaces[constructor] ?? [],
    }
    return constructorInfo;
  }).sort((a,b) => dcSort(a,b));

  const driverStandingsArray = driverCodes2024.map((driver) => {
    const driverInfo = {
      name: driver,
      points: driverStandings[driver].total,
      places: driverPlaces[driver] ?? [],
    }
    return driverInfo;
  }).sort((a,b) => dcSort(a,b));

  const driverOrder = driverStandingsArray.map((driver) => {
    return driver.name;
  });
  
  const constructorOrder = constructorStandingsArray.map((constructor) => {
    return constructor.name;
  });

  const findPlaceArray = (driver: DriverCode24Type) => {
    const driverArray: FullDriverResultType[] = results.map((result) => {
      const { finalOrder, sprint, fastestLap, polePosition, completed } = result;
      const place = finalOrder.map((dac) => dac.driver).indexOf(driver);
      const constructor = finalOrder[place]?.constructor;
      const points = calculatePoints(place, sprint, driver === fastestLap?.driver);
      return {
        driverName: driver,
        constructor,
        sprint: sprint,
        fastestLap: driver === fastestLap?.driver,
        polePosition: driver === polePosition?.driver,
        finishPosition: place !== -1 ? place : "DNF",
        beatTeammate: undefined,
        points,
        completed,
      }
    })
    return driverArray;
  }

  const cumulativeArray = (array: FullDriverResultType[]) : FullDriverResultType[] => {
    let sum: number;
    return array.filter((race) => race.completed).map((sum = 0, n => {
      const newN = {
        ...n,
        points: sum += n?.points,
      };
      return newN;
    }));
  }

  const runningDriverResults = driverOrder.map((driver) => {
    const fullRunningArray =  cumulativeArray(findPlaceArray(driver).map((place) => {
      const pointTotal: FullDriverResultType = {
        ...place
      }
      return pointTotal;
    }))

    driverStandings[driver].runTotal = fullRunningArray.map((place) => { return place.points});
    return fullRunningArray;
  });

  const runningConstructorResults = constructorOrder.map((constructor)=>{
    const driverPoints = constructorToDrivers2024(constructor).map((driver) => {
      const driverRunArray = driverStandings[driver].runTotal;
      return driverRunArray;
    });
    const constructorRunningArray = flip2DArrays(driverPoints).map((pointsArray) => {return pointsArray.reduce((total, num) => total + num)});
    constructorStandings[constructor].runTotal = constructorRunningArray;
    return constructorRunningArray;
  })

  return {
    driverStandings, 
    constructorStandings, 
    driverStandingsArray,
    constructorStandingsArray,
    driverOrder,
    constructorOrder,
    driverPlaces,
    constructorPlaces,
    driverPodiums,
    constructorPodiums,
    runningDriverResults,
    runningConstructorResults,
  };
}

//RunningDriverResults

//RunningConstructorResults