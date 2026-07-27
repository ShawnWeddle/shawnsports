import { type NBATeamType } from "../NBAdata";
import { shuffle } from "lodash";

type NBATeamTuple = [
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
];

export const exampleLotteryTeamList: NBATeamTuple = [
  "WAS", "IND", "BRK", "UTA",
  "SAC", "MEM", "NOP", "DAL",
  "CHI", "MIL", "GSW", "LAC",
  "MIA", "CHO", "PHO", "ORL",
];

const generateLottery = (inputTeams: NBATeamTuple) => {
  const lotteryBalls: NBATeamType[] = [];
  const lotteryResults: NBATeamType[] = [];
  const displayOrder = [0, 13, 11, 3, 5, 8, 1, 6, 2, 7, 4, 9, 12, 10, 14, 15];
  for(let i=0; i<16; i++){
    const dI = displayOrder[i];
    if(dI === undefined) {
      break;
    }
    const activeTeam = inputTeams[dI];
    if(!activeTeam) break;

    switch(dI){
      case 0:
      case 1:
      case 2:
      case 10:
      case 11:
      case 12:
      case 13:
        lotteryBalls.push(activeTeam, activeTeam);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        lotteryBalls.push(activeTeam, activeTeam, activeTeam);
        break;
      case 14:
      case 15:
        lotteryBalls.push(activeTeam);
        break; 
      default:
        break;
    }
  }

  let LOTTERY_BALLS: NBATeamType[] = [...lotteryBalls];

  return LOTTERY_BALLS;

  for(let i=0; i<16; i++){
    //Special logic to prevent top 3 inputTeams from falling out of top 12
    let setTeamEarly = true;
    if(i === 9){
      const TIP1 = lotteryResults.includes(inputTeams[0]) ? 1 : 0;
      const TIP2 = lotteryResults.includes(inputTeams[1]) ? 1 : 0;
      const TIP3 = lotteryResults.includes(inputTeams[2]) ? 1 : 0;
      if(TIP1 + TIP2 + TIP3 === 3){
        setTeamEarly = false;
      } 
      if(TIP1 + TIP2 + TIP3 === 0){
        lotteryResults[i] = inputTeams[0];
        lotteryResults[i + 1] = inputTeams[1];
        lotteryResults[i + 2] = inputTeams[2];
        i += 2;
        setTeamEarly = false;
        continue;
      } 
    }

    if(setTeamEarly && i === 10){
      const TIP1 = lotteryResults.includes(inputTeams[0]) ? 1 : 0;
      const TIP2 = lotteryResults.includes(inputTeams[1]) ? 1 : 0;
      const TIP3 = lotteryResults.includes(inputTeams[2]) ? 1 : 0;
      if(TIP1 + TIP2 + TIP3 === 1){
        setTeamEarly = false;
        if(TIP1 === 1){
          lotteryResults[i] = inputTeams[1];
          lotteryResults[i + 1] = inputTeams[2];
          i += 1;
          continue;
        } else if(TIP2 === 1){
          lotteryResults[i] = inputTeams[0];
          lotteryResults[i + 1] = inputTeams[2];
          i += 1;
          continue;
        } else if(TIP3 === 1){
          lotteryResults[i] = inputTeams[0];
          lotteryResults[i + 1] = inputTeams[1];
          i += 1;
          continue;
        } else {
          console.log("something broke");
        }
      }
    }

    if(setTeamEarly && i === 11){
      setTeamEarly = false;
      const TIP1 = lotteryResults.includes(inputTeams[0]) ? 1 : 0;
      const TIP2 = lotteryResults.includes(inputTeams[1]) ? 1 : 0;
      const TIP3 = lotteryResults.includes(inputTeams[2]) ? 1 : 0;
      if(TIP1 === 0){
        lotteryResults[i] = inputTeams[0];
        continue;
      } else if(TIP2 === 0){
        lotteryResults[i] = inputTeams[1];
        continue;
      } else if(TIP3 === 0){
        lotteryResults[i] = inputTeams[2];
        continue;
      } else {
        console.log("something broke");
      }
    }

    const pickedTeam = shuffle(LOTTERY_BALLS)[0]!;

    

    LOTTERY_BALLS = LOTTERY_BALLS.filter((team) => {
      return team !== pickedTeam;
    });

    lotteryResults[i] = pickedTeam;
    
  }
};

export default generateLottery;

/**
 * 
 *     if(i<3){
      lotteryBalls.push(activeTeam, activeTeam);
    }
    if(i>2 && i<10){
      lotteryBalls.push(activeTeam, activeTeam, activeTeam);
    }
    if(i>9 && i<14){
      lotteryBalls.push(activeTeam, activeTeam);
    }
    if(i>13 && i<16){
      lotteryBalls.push(activeTeam);
    }
 */