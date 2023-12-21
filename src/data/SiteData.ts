import { z } from "zod";

const titlesArray = [
  "Home", "NBA_Future_Picks", "NBA_Lottery", "NBA_Finals", "NBA_Rank", "NFL_Schedule", "NFL_Super_Bowls", "NFL_Rank", "F1_Tables", "F1_Standings", "F1_Compare", "F1_Rank", "MLB_World_Series", "MLB_Rank", "NHL_Stanley_Cups", "NHL_Rank", "WNBA_Finals", "WNBA_Rank", 
] as const;
export const TitlesEnum = z.enum(titlesArray);

export const allNavHeads = {
  "Home": ["Home",], 
  "NBA": ["NBA_Future_Picks", "NBA_Lottery", "NBA_Finals", "NBA_Rank",], 
  "NFL": ["NFL_Schedule", "NFL_Super_Bowls", "NFL_Rank", ], 
  "F1": ["F1_Tables", "F1_Standings", "F1_Compare", "F1_Rank", ], 
  "MLB": ["MLB_World_Series", "MLB_Rank", ], 
  "NHL": ["NHL_Stanley_Cups", "NHL_Rank", ], 
  "WNBA": ["WNBA_Finals", "WNBA_Rank", ]
} as const;

export type HomeTitlesType = typeof allNavHeads["Home"][number];
export type F1TitlesType = typeof allNavHeads["F1"][number];
export type NFLTitlesType = typeof allNavHeads["NFL"][number];
export type NBATitlesType = typeof allNavHeads["NBA"][number];
export type MLBTitlesType = typeof allNavHeads["MLB"][number];
export type NHLTitlesType = typeof allNavHeads["NHL"][number];
export type WNBATitlesType = typeof allNavHeads["WNBA"][number];

export const HomeTitlesDesc: {[Key in HomeTitlesType] : string} = {
  "Home": "",
};
export const F1TitlesDesc: {[Key in F1TitlesType] : string} = {
  "F1_Tables": "See the results for every race this season",
  "F1_Standings": "See the current standings for each driver and constructor",
  "F1_Compare": "Compare cumulative points totals for every driver and constructor in the 2023 F1 season",
  "F1_Rank": "Rank all 22 drivers from the 2023 season",
};
export const NFLTitlesDesc: {[Key in NFLTitlesType] : string} = {
  "NFL_Schedule": "See every team's schedule for the 2023 NFL season",
  "NFL_Super_Bowls": "See all 57 Super Bowl matchups",
  "NFL_Rank": "Rank all 32 NFL teams",
};
export const NBATitlesDesc: {[Key in NBATitlesType] : string} = {
  "NBA_Future_Picks": "See which team owns each first round pick through 2030",
  "NBA_Lottery": "Select any 14 teams and simulate the 2024 NBA draft lottery",
  "NBA_Finals": "See all NBA Finals since 1947",
  "NBA_Rank": "Rank all 30 NBA teams",
};
export const MLBTitlesDesc: {[Key in MLBTitlesType] : string} = {
  "MLB_World_Series": "See all World Series since 1903",
  "MLB_Rank": "Rank all 30 MLB teams",
};
export const NHLTitlesDesc: {[Key in NHLTitlesType] : string} = {
  "NHL_Stanley_Cups": "See all Stanley Cup Finals since 1927",
  "NHL_Rank": "Rank all 32 NHL teams",
};
export const WNBATitlesDesc: {[Key in WNBATitlesType] : string} = {
  "WNBA_Finals": "See all WNBA Finals since 1997",
  "WNBA_Rank": "Rank all 12 WNBA teams",
};

type HomeTitlesDescType = typeof HomeTitlesDesc;
type F1TitlesDescType = typeof F1TitlesDesc;
type NFLTitlesDescType = typeof NFLTitlesDesc;
type NBATitlesDescType = typeof NBATitlesDesc;
type MLBTitlesDescType = typeof MLBTitlesDesc;
type NHLTitlesDescType = typeof NHLTitlesDesc;
type WNBATitlesDescType = typeof WNBATitlesDesc;
export type TitlesDescType = HomeTitlesDescType | F1TitlesDescType | NFLTitlesDescType | NBATitlesDescType | MLBTitlesDescType | NHLTitlesDescType | WNBATitlesDescType;
export type TitlesDescType2 = {[Key in UnderPageHeadsType] : string};

type HomeTitlesDescKeyType = keyof HomeTitlesDescType;
type F1TitlesDescKeyType = keyof F1TitlesDescType;
type NFLTitlesDescKeyType = keyof NFLTitlesDescType;
type NBATitlesDescKeyType = keyof NBATitlesDescType;
type MLBTitlesDescKeyType = keyof MLBTitlesDescType;
type NHLTitlesDescKeyType = keyof NHLTitlesDescType;
type WNBATitlesDescKeyType = keyof WNBATitlesDescType;
export type TitlesDescKeyType = HomeTitlesDescKeyType | F1TitlesDescKeyType | NFLTitlesDescKeyType | NBATitlesDescKeyType | MLBTitlesDescKeyType | NHLTitlesDescKeyType | WNBATitlesDescKeyType;

export const homePageData: {[Key in PageHeadsType] : TitlesDescType } = {
  Home: HomeTitlesDesc,
  F1: F1TitlesDesc,
  NFL: NFLTitlesDesc,
  NBA: NBATitlesDesc,
  MLB: MLBTitlesDesc,
  NHL: NHLTitlesDesc,
  WNBA: WNBATitlesDesc,
};

export const underPageTitles = [
"",
"tables",
"standings",
"compare",
"rank",
"future-picks",
"lottery",
"finals",
"schedule",
"super-bowls",
"world-series",
"stanley-cups",
] as const;

export const underPageData: {[Key in UnderPageHeadsType]: {navTitle: string, urlName: PageURLType}} = {
  Home: { navTitle: "Home", urlName: "/",},
  F1_Tables: { navTitle: "Tables", urlName: "/f1/tables",},
  F1_Standings: { navTitle: "Standings", urlName: "/f1/standings",},
  F1_Compare: { navTitle: "Compare", urlName: "/f1/compare",},
  F1_Rank: { navTitle: "Rank", urlName: "/f1/rank",},
  NBA_Future_Picks: { navTitle: "Future Picks", urlName: "/nba/future-picks",},
  NBA_Lottery: { navTitle: "Lottery", urlName: "/nba/lottery",},
  NBA_Finals: { navTitle: "Finals", urlName: "/nba/finals",},
  NBA_Rank: { navTitle: "Rank", urlName: "/nba/rank",},
  NFL_Schedule: { navTitle: "Schedule", urlName: "/nfl/schedule",},
  NFL_Super_Bowls: { navTitle: "Super Bowls", urlName: "/nfl/super-bowls",},
  NFL_Rank: { navTitle: "Rank", urlName: "/nfl/rank",},
  MLB_World_Series: { navTitle: "World Series", urlName: "/mlb/world-series",},
  MLB_Rank: { navTitle: "Rank", urlName: "/mlb/rank",},
  NHL_Stanley_Cups: { navTitle: "Stanley Cups", urlName: "/nhl/stanley-cups",},
  NHL_Rank: { navTitle: "Rank", urlName: "/nhl/rank",},
  WNBA_Finals: { navTitle: "Finals", urlName: "/wnba/finals",},
  WNBA_Rank: { navTitle: "Rank", urlName: "/wnba/rank",},
};

export const pageData: {[Key in PageHeadsType] : LowerPageHeadType} = {
  "Home":"", "F1":"f1", "NFL":"nfl", "NBA":"nba", "MLB":"mlb", "NHL":"nfl", "WNBA":"wnba",
}

export const pageHeads = ["F1", "NFL", "NBA", "MLB", "NHL", "WNBA",] as const;
export type NavHeadsType = typeof allNavHeads;
export type PageHeadsType = keyof NavHeadsType;
export type UnderPageHeadsType = typeof allNavHeads[PageHeadsType][number];

export const lowerPageHeads = ["", "f1", "nfl", "nba", "mlb", "nhl", "wnba",] as const;
export type LowerPageHeadType = typeof lowerPageHeads[number];
export type UnderPageTitleType = typeof underPageTitles[number];

export type PageURLType = `/${LowerPageHeadType}/${UnderPageTitleType}` | "/";

export const pageRouter = (page: PageHeadsType) : PageURLType => {
  switch(page){
    case "Home": {
      return "/"
    }
    case "NBA": {
      return "/nba/future-picks"
    }
    case "NFL": {
      return "/nfl/schedule"
    }
    case "MLB": {
      return "/mlb/world-series"
    } 
    case "NHL": {
      return "/nhl/stanley-cups"
    }
    case "F1": {
      return "/f1/tables"
    }
    case "WNBA": {
      return "/wnba/finals"
    }
  }
}

export const leagueNames: {[Key in PageHeadsType] : string} = {
  "Home": "",
  "F1": "Formula One",
  "NBA": "National Basketball Association",
  "NFL": "National Football League",
  "MLB": "Major League Baseball",
  "NHL": "National Hockey League",
  "WNBA": "Women's National Basketball Association",
};