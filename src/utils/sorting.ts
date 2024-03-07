export type SortType = {
  name: any,
  points: number,
  places: number[],
}

export const dcSort = (input1: SortType, input2: SortType) => {
  if(input1.points > input2.points){
    return -1;
  } else if (input1.points < input2.points){
    return 1;
  } else {
    for(let i=0; i<Math.max(input1.places.length, input2.places.length); i++){
      const place1 = input1.places[i];
      const place2 = input2.places[i];
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
