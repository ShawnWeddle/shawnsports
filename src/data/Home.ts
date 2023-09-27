export const allNavHeads = {"Home": ["Home",], "NBA": ["Future Picks", "Lottery", "Finals", "Rank",], "NFL": ["Schedule", "Super Bowls", "Rank"], "F1": ["Tables", "Standings", "Compare", "Rank"], "MLB": ["World Series", "Rank", ], "NHL": ["Stanley Cups", "Rank"], "WNBA": ["Finals", "Rank", ]} as const;
export const pageHeads = ["F1", "NFL", "NBA", "MLB", "NHL", "WNBA",] as const;
export type NavHeadsType = typeof allNavHeads;
export type PageHeadsType = keyof NavHeadsType;
export type UnderPageHeadsType = typeof allNavHeads[PageHeadsType][number];

export const pageRouter = (page: PageHeadsType) : string => {
  switch(page){
    case "Home": {
      return "/"
    }
    case "NBA": {
      return "/NBA"
    }
    case "NFL": {
      return "/NFL"
    }
    case "MLB": {
      return "/MLB"
    } 
    case "NHL": {
      return "/NHL"
    }
    case "F1": {
      return "/F1"
    }
    case "WNBA": {
      return "/WNBA"
    }
  }
}