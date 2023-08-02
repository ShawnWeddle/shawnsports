export const cumulativeArray = (array: number[]) => {
  let sum: number;
  return array.map((sum = 0, n => sum += n));
}

export const flip2DArrays = (fullArray: number[][]) : number[][] => {
  const combinedArray: number[][] = [];

  const fullMapLength = fullArray.length;
  const innerArrayLength = Math.max(...fullArray.map((insideArray) => {return insideArray.length}));

  for(let i=0; i<innerArrayLength; i++){ //3
    const newArray: number[] = [];
    for(let j=0; j<fullMapLength; j++){ //4
      const activeArray = fullArray[j];
      if(activeArray !== undefined && activeArray[i] !== undefined ){
        const activeNumber = activeArray[i];
        if(activeNumber !== undefined){
          newArray[j] = activeNumber;
        }
      }
    }
    combinedArray[i] = newArray;
  }
  return combinedArray;
}

/**

  const lengths = fullArray.map((insideArray, insideArrayIndex) => { // Length 2 or 3
    const heights = insideArray.map((points, pointsIndex) => { // Length 15
     
    })
    return heights;
  }); */