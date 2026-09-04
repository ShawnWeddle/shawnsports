export const mlvTeamsList = [
  "ATL",
  "CLF",
  "DAL",
  "GRR",
  "IND",
  "LAC",
  "MIN",
  "NCR",
  "OMA",
  "ORL",
  "VEG",
  "WAS",
] as const;

export type MLVTeamType = typeof mlvTeamsList[number];

