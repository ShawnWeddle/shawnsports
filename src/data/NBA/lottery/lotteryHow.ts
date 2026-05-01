import { type NBATeamType } from "../NBAdata";
import { shuffle } from "lodash";

export const LotteryTest = (teams: NBATeamType[]) : NBATeamType[] => {

  if(teams.length !== 14){
    return [];
  }

  const work: NBATeamType[] = [...teams];
  
  const omittedTeams: NBATeamType[] = work.slice(0,3);

  const winners: NBATeamType[] = shuffle([...work.slice(3)]).slice(0,3);

  const theRest: NBATeamType[] = work.filter(team => ![...omittedTeams, ...winners].includes(team));

  const final: NBATeamType[] = [...winners, ...omittedTeams, ...theRest];

  return final;
}

export const Eternal = (teams: NBATeamType[]) => {
  const results = new Map<NBATeamType, number[]>();

  for(let i=0; i<teams.length; i++){
    const activeTeam = teams[i];
    if(activeTeam){
      results.set(activeTeam, [
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0
      ]);
    }
  }

  for(let i=0; i<1000000; i++){
    const activeResults = LotteryTest(teams);
    for(let j=0; j<activeResults.length; j++){
      const activeTeam = activeResults[j];
      if(!activeTeam){
        break;
      }
      const scores = results.get(activeTeam);
      if(!scores){
        break;
      }
      const newScores = [...scores];
      const currentPlace = newScores[j];
      if(currentPlace === undefined){
        break;
      }
      let timesThisPlace = currentPlace;
      if(timesThisPlace === undefined){
        break;
      }
      timesThisPlace++;
      newScores[j] = timesThisPlace;
      results.set(activeTeam, newScores);
    }
  }

  console.log("MF", results);
}