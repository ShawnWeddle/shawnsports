import { type NFLTeamType } from "./NFLdata";
import { type GameType } from "./NFLscheduleData";

export const recordForTeam = (team: NFLTeamType, games: GameType[]) : {wins: number, losses: number, unpicked: number} => {
  console.log(games);
  let wins = 0;
  let losses = 0;
  let unpicked = 0;
  games.forEach((game) => {
    if(game.Winner){
      if(game.Winner === team){
        wins += 1;
      } else {
        losses += 1;
      }
    } else {
      unpicked += 1;
    }
  })
  console.log({wins, losses, unpicked});
  return {wins, losses, unpicked}
}
