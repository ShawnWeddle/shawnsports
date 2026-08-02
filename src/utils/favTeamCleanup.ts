import type { FavoriteTeamType } from "~/data/universal/listData";
import { FavTeamLeagueOrder } from "~/data/map/mapData";

export const favTeamCleanup = (input: FavoriteTeamType) : FavoriteTeamType => {
  return Object.fromEntries(Object.entries(input).filter((team) => {
    return team[1] !== undefined
  }).sort((a,b) => {
    return FavTeamLeagueOrder.indexOf(a[1].league) < FavTeamLeagueOrder.indexOf(b[1].league) ? -1 : 1;
  }))
}

