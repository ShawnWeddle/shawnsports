import type { PageHeadsType } from "~/data/SiteData";

const getFavicon = (sport: PageHeadsType): string => {
  switch(sport){
    case "CFL": return "/favicon_cfl.ico";
    case "F1": return "/favicon_f1.ico";
    case "Home": return "/favicon_home.ico";
    case "MLB": return "/favicon_mlb.ico";
    case "MLS": return "/favicon_mls.ico";
    case "NBA": return "/favicon_nba.ico";
    case "NFL": return "/favicon_nfl.ico";
    case "NHL": return "/favicon_nhl.ico";
    case "WNBA": return "/favicon_wnba.ico";
  }
}

export default getFavicon;