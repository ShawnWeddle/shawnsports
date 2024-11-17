export const allMLSteams = [
  "ATL", "ATX", "MTL", "CLT", "CHI", "COL", 
  "CLB", "DCU", "CIN", "DAL", "HOU", "MIA", 
  "LAF", "LAG", "MIN", "NSH", "NER", "NYC", 
  "NYR", "ORL", "PHI", "POR", "RSL", "SJE", 
  "SEA", "SKC", "STL", "TOR", "VAN", 
] as const;

export type MLSTeamType = typeof allMLSteams[number];

export type teamInfoType = {location: string, name: string, reverse: boolean };

export const MLSteamData: { [Key in MLSTeamType] : teamInfoType} = {
  ATL: { location: "Atlanta", name: "United", reverse: false },
  ATX: { location: "Austin", name: "FC", reverse: false },
  MTL: { location: "Montreal", name: "CF", reverse: true },
  CLT: { location: "Charlotte", name: "FC", reverse: false },
  CHI: { location: "Chicago", name: "Fire", reverse: false },
  COL: { location: "Colorado", name: "Rapids", reverse: false },
  CLB: { location: "Columbus", name: "Crew SC", reverse: false },
  DCU: { location: "D.C.", name: "United", reverse: false },
  CIN: { location: "Cincinnati", name: "FC", reverse: true },
  DAL: { location: "Dallas", name: "FC ", reverse: true },
  HOU: { location: "Houston", name: "Dynamo", reverse: false },
  MIA: { location: "Miami", name: "Inter", reverse: true },
  LAF: { location: "Los Angeles", name: "FC", reverse: false },
  LAG: { location: "Los Angeles", name: "Galaxy", reverse: false },
  MIN: { location: "Minnesota", name: "United FC", reverse: false },
  NSH: { location: "Nashville", name: "SC", reverse: false },
  NER: { location: "New England", name: "Revolution", reverse: false },
  NYC: { location: "New York City", name: "FC", reverse: false },
  NYR: { location: "New York", name: "Red Bulls", reverse: false },
  ORL: { location: "Orlando", name: "City", reverse: false },
  PHI: { location: "Philadelphia", name: "Union", reverse: false },
  POR: { location: "Portland", name: "Timbers", reverse: false },
  RSL: { location: "Salt Lake", name: "Real", reverse: true },
  SJE: { location: "San Jose", name: "Earthquakes", reverse: false },
  SEA: { location: "Seattle", name: "Sounders", reverse: false },
  SKC: { location: "Kansas City", name: "Sporting", reverse: true },
  STL: { location: "St Louis", name: "City SC", reverse: false },
  TOR: { location: "Toronto", name: "FC", reverse: false },
  VAN: { location: "Vancouver", name: "Whitecaps", reverse: false },
};