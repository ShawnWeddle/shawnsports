export const allNavHeads = {"Home": ["Top",], "NBA": ["Future Picks",], "NFL": ["Rank",], "F1": ["Tables", "Standings", "Charts"]} as const;
export const pageHeads = ["Home", "NBA", "NFL", "F1",] as const;
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
    case "F1": {
      return "/F1"
    }
  }
}

export const underPageDefault = (page: PageHeadsType) : UnderPageHeadsType => {
  switch(page){
    case "Home": {
      return "Top"
    }
    case "NBA": {
      return "Future Picks"
    }
    case "NFL": {
      return "Rank"
    }
    case "F1": {
      return "Tables"
    }
  }
}