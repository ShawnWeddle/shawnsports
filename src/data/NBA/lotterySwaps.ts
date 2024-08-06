import { type NBATeamType } from "./NBAdata";
import { type FinishOrderType} from "~/data/NBA/lotteryWork";

const teamDraftOrder: { [Key in NBATeamType] : number} = {
  ATL: 30,
  BOS: 30,
  BRK: 30,
  CHI: 30,
  CHO: 30,
  CLE: 30,
  DAL: 30,
  DEN: 30,
  DET: 30,
  GSW: 30,
  HOU: 30,
  IND: 30,
  LAC: 30,
  LAL: 30,
  MEM: 30,
  MIA: 30,
  MIL: 30,
  MIN: 30,
  NOP: 30,
  NYK: 30,
  OKC: 30,
  ORL: 30,
  PHI: 30,
  PHO: 30,
  POR: 30,
  SAC: 30,
  SAS: 30,
  TOR: 30,
  UTA: 30,
  WAS: 30,
}

export type PickType = {
  nativeTeam: NBATeamType,
  newTeam: NBATeamType,
  index: number,
}

export const lotterySwaps: (finishOrder : FinishOrderType) => PickType[] = (finishOrder) => {
  finishOrder.forEach((team, index) => {
    teamDraftOrder[team] = index;
  });

  const fullOrder = finishOrder.map((team, index) => {
    const pick: PickType = {
      nativeTeam: team,
      newTeam: team,
      index: index,
    };
    return pick;
  });

  const simpleSwap = (nativeT: NBATeamType, newT: NBATeamType, limit: number) => {
    const activePick = fullOrder[teamDraftOrder[nativeT]];
    if(teamDraftOrder[nativeT] > limit - 1){
      if(!!activePick){
        activePick.newTeam = newT;
      }
    }
  }

  //Unprotected Picks

  simpleSwap("ATL", "SAS", 0);
  simpleSwap("CLE", "UTA", 0);
  simpleSwap("LAL", "ATL", 0);
  simpleSwap("MIN", "UTA", 0);
  simpleSwap("NYK", "BRK", 0);
  simpleSwap("MIL", "NOP", 0);

  //Protected Picks

  simpleSwap("CHI", "SAS", 10);
  simpleSwap("DEN", "ORL", 5);
  simpleSwap("DET", "NYK", 13);
  simpleSwap("MIL", "BRK", 4);
  simpleSwap("PHI", "OKC", 6);
  simpleSwap("SAC", "ATL", 12);
  simpleSwap("UTA", "OKC", 10);
  simpleSwap("WAS", "NYK", 10);

  //Pick Swaps

  return fullOrder;
}