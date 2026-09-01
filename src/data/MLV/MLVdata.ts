export const mlvTeamsList = [
  "ATL",
  "CLF",
  "DAL",
  "GRR",
  "IND",
  "LAC",
  "MIN",
  "OMA",
  "ORL",
  "SJC",
  "VEG",
  "WAS",
] as const;

export type MLVTeamType = typeof mlvTeamsList[number];

