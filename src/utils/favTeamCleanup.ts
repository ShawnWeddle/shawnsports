import type { FavoriteTeamType } from "~/data/universal/listData";
import type { FavoritePostType } from "~/types/MapTypes";
import { FavoritePost, FavoriteLeagueOrder } from "~/data/map/mapData";

export const favoriteCleanup = (input: FavoriteTeamType) : FavoriteTeamType => {
  return Object.fromEntries(Object.entries(input).filter((team) => {
    return team[1] !== undefined
  }).sort((a,b) => {
    return FavoriteLeagueOrder.indexOf(a[1].league) < FavoriteLeagueOrder.indexOf(b[1].league) ? -1 : 1;
  }))
}

export const favoriteCleanPost = (input: FavoriteTeamType): FavoritePostType => {
  const newFavorite = {...FavoritePost};

  FavoriteLeagueOrder.forEach((activeLeague) => {
    // const newLT = input[activeLeague];
    // if(newLT && newLT.league === activeLeague){
    //   const {league, team} = newLT;
    //   newFavorite[league] = team;
    // }

    const newLT = input[activeLeague];
    if(newLT && newLT.league === activeLeague){
      const {team} = newLT;
      newFavorite[activeLeague] = team;
    }
  })

  return newFavorite;
}