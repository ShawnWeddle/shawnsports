import type { DriverCode24Type, ConstructorName24Type } from "~/data/F1/2024/F1data24"

export type DriverSortType = {
  name: DriverCode24Type,
  points: number,
  places: number[],
}

export type ConstructorSortType = {
  name: ConstructorName24Type,
  points: number,
  places: number[],
}

export const driverSort = (driver1: DriverSortType, driver2: DriverSortType) => {
  if(driver1.points > driver2.points){
    return -1;
  } else if (driver1.points < driver2.points){
    return 1;
  } else {
    for(let i=0; i<Math.max(driver1.places.length, driver2.places.length); i++){
      const place1 = driver1.places[i];
      const place2 = driver2.places[i];
      if(place1 && place2){
        if(place1 > place2){
          return 1;
        } else if (place1 < place2) {
          return -1;
        }
      } else if(place1 && !place2){
        return 1;
      } else if(!place1 && place2){
        return -1;
      } else {
        return 0;
      }
    }
  }
  return 0;
}

export const constructorSort = (constructor1: ConstructorSortType, constructor2: ConstructorSortType) => {
  if(constructor1.points > constructor2.points){
    return -1;
  } else if (constructor1.points < constructor2.points){
    return 1;
  } else {
    for(let i=0; i<Math.max(constructor1.places.length, constructor2.places.length); i++){
      const place1 = constructor1.places[i];
      const place2 = constructor2.places[i];
      if(place1 && place2){
        if(place1 > place2){
          return 1;
        } else if (place1 < place2) {
          return -1;
        }
      } else if(place1 && !place2){
        return -1;
      } else if(!place1 && place2){
        return 1;
      } else {
        return 0;
      }
    }
  }
  return 0;
}