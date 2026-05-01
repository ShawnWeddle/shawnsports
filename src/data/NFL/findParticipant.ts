import { allWinners, type PlayerGameType } from "./UnEditedWinnersList";
import { allLosers } from "./UnEditedSuperLoserList";

type ManType = {
  name: string,
  birthDate: string,
  wins: GameType[],
  losses: GameType[],
}

type GameType = {
  year: number
  team: string,
}

export const allMultiParticipants = () => {
  const men: ManType[] = [];
  const allMen: PlayerGameType[] = [...allWinners, ...allLosers];
  for(let i=0; i<allMen.length; i++){
    for (let j = i + 1; j < allMen.length; j++) {
      const ap1 = allMen[i];
      const ap2 = allMen[j];
      if(ap1 && ap2){
        if (ap1.player === ap2.player) {
          if(ap1.birthDate === ap2.birthDate){
            if (ap1.team !== ap2.team) {
              let addToMen = true;
              for(let k=0; k<men.length; k++){
                if(ap1.player === men[k]?.name && ap1.birthDate === men[k]?.birthDate){
                  addToMen = false;
                }
              }
              if(addToMen){
                men.push({
                  name: ap1.player,
                  birthDate: ap1.birthDate,
                  wins: [],
                  losses: [],
                });
              }
            }
          }
        }
      }
    }
  }
  const trueMen = men.map((activeGuy) => {
    const newGuy = {...activeGuy};
    const activeName = activeGuy.name;
    const activeBirthDate = activeGuy.birthDate;
    for(let j=0; j<allWinners.length; j++){
      const activeWinner = allWinners[j];
      if(activeWinner && activeName === activeWinner.player && activeBirthDate === activeWinner.birthDate){
        newGuy.wins.push({
          year: activeWinner.year,
          team: activeWinner.team,
        })
      }
    }
    for(let j=0; j<allLosers.length; j++){
      const activeLoser = allLosers[j];
      if(activeLoser && activeName === activeLoser.player && activeBirthDate === activeLoser.birthDate){
        newGuy.losses.push({
          year: activeLoser.year,
          team: activeLoser.team,
        })
      }
    }
    return newGuy;
  });
  console.log(trueMen);
}