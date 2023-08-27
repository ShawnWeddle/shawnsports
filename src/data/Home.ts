export const allNavHeads = {"Home": ["Home",], "NBA": ["Future Picks", "Rank",], "NFL": ["Schedule", "Super Bowls", "Rank"], "F1": ["Tables", "Standings", "Compare", "Rank"], "NHL": ["Stanley Cups", "Rank"], } as const;
export const pageHeads = ["Home", "F1", "NBA", "NFL", "NHL",] as const;
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
    case "NHL": {
      return "/NHL"
    }
    case "F1": {
      return "/F1"
    }
  }
}