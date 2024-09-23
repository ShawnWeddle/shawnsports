import { driverCodes2024, constructorNames2024, driverToConstructor2024, calculatePoints, constructorToDrivers2024, beatTeammate } from "~/data/F1/2024/F1data24";
import type { DriverCode24Type, ConstructorName24Type } from "~/data/F1/2024/F1data24";
import type { RaceResultsType, F1RaceType } from "~/data/F1/2024/raceData";
import { flip2DArrays } from "~/utils/cuA";
import { dcSort } from "~/utils/sorting";

//Results sorted by Driver

//Results sorted by Place

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
  };
}

//RunningDriverResults

//RunningConstructorResults