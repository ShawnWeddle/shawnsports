export const mlvTeamsList = [
  "ATL",
  "CLF",
  "DAL",
  "GRR",
  "IND",
  "OMA",
  "ORL",
] as const;

export type MLVTeamType = typeof mlvTeamsList[number];

