import { type NBATeamType } from "../NBAdata";
import { shuffle } from "lodash";

export const exampleLotteryTeamList: NBATeamType[] = [
  "WAS", "IND", "BRK", "UTA",
  "SAC", "MEM", "NOP", "DAL",
  "CHI", "MIL", "GSW", "LAC",
  "MIA", "CHO", "PHO", "ORL",
];

type NBATeamTuple = [
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
  NBATeamType, NBATeamType, NBATeamType, NBATeamType, 
];

const generateLottery = (inputTeams: NBATeamTuple) => {
  const lotteryBalls: NBATeamType[] = [];
  const lotteryResults: NBATeamType[] = [];
  for(let i=0; i<16; i++){
    const activeTeam = inputTeams[i];
    if(!activeTeam) break;
    if(i<3){
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
  }

  let LOTTERY_BALLS: NBATeamType[] = [...lotteryBalls];
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
  console.log(lotteryResults);
};

export default generateLottery;