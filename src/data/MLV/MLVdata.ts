export const mlvTeamsList = [
  "ATL",
  "CLF",
  "DAL",
  "GRR",
  "IND",
  "MIN",
  "OMA",
  "ORL",
  "SAC",
  "VEG",
  "WAS",
] as const;

export type MLVTeamType = typeof mlvTeamsList[number];

