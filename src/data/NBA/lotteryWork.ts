import { type NBATeamType } from "../NBApickData";

type NBATeamOrNullType = NBATeamType | null;

const pickOdds = [
  28, 28, 28,
  25, 21, 18,
  15, 12, 9,
  6, 4, 3,
  2, 1,
];

const teamDraftPlaces: { [Key in NBATeamType] : number} = {
  ATL: 0,
  BOS: 0,
  BRK: 0,
  CHI: 0,
  CHO: 0,
  CLE: 0,
  DAL: 0,
  DEN: 0,
  DET: 0,
  GSW: 0,
  HOU: 0,
  IND: 0,
  LAC: 0,
  LAL: 0,
  MEM: 0,
  MIA: 0,
  MIL: 0,
  MIN: 0,
  NOP: 0,
  NYK: 0,
  OKC: 0,
  ORL: 0,
  PHI: 0,
  PHO: 0,
  POR: 0,
  SAC: 0,
  SAS: 0,
  TOR: 0,
  UTA: 0,
  WAS: 0,
}

export const rankedTeamVerification = (teams: (NBATeamType | null)[]):{success: boolean, newTeams: NBATeamType[]} => {
  const newTeams: NBATeamType[] = teams.flatMap(team => team ? [team] : []);
  if(newTeams.length === 14){
    return {success: true, newTeams};
  } else {
    return {success: false, newTeams: []};
  }
}

export const Lotterizer = (teams: NBATeamType[]) => {
  const teamBreakdown: NBATeamType[] = [];
  teams.forEach((team, index) => {
    const pickOddTeam: number = pickOdds[index] ?? -1;
    for(let i = 0; i<pickOddTeam; i++){
      teamBreakdown.push(team);
    }
  })

  const newTeams = [...teams];

  const winners: [NBATeamOrNullType, NBATeamOrNullType, NBATeamOrNullType, NBATeamOrNullType] = [null, null, null, null];

  for(let i=0; i<4; i++){
    const X = Math.floor(Math.random() * 200);
    const winner = teamBreakdown[X];
    if(winner && !winners.includes(winner)){
      winners[i] = winner;
    } else {
      i -= 1;
    }
  }

  const newWinners: NBATeamType[] = winners.flatMap(team => team ? [team] : []);
  const losers: NBATeamType[] = newTeams.filter(team => !winners.includes(team));
  const teamArray: NBATeamType[] = [...newWinners, ...losers];

  const Final = teamArray.map((team, index) => {
    return {
      nativeTeam: team,
      newTeam: "F",
      rank: index + 1,
    }
  })
  
  return Final;
}

/*
const odds = [
  28, 56, 84, 
  109, 130, 148, 
  163, 175, 184, 
  190, 194, 197, 
  199, 200, 
]; 
*/