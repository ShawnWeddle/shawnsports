export const twCombin = (string1: string, string2: string) => {
  const fullString = string1 + " " + string2;
  return fullString;
};

export const twCombine = (stringArray: string[]) => {
  const fullString = stringArray.join(" ");
  return fullString;
};