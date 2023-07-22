export const cumulativeArray = (array: number[]) => {
  let sum: number;
  return array.map((sum = 0, n => sum += n));
}