import { type NBATeamType } from "../NBApickData";
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

  //Unprotected Picks

  let activePick;

  activePick = fullOrder[teamDraftOrder["BRK"]];
  if(!!activePick){
    activePick.newTeam = "HOU";
  }

  activePick = fullOrder[teamDraftOrder["LAC"]];
  if(!!activePick){
    activePick.newTeam = "OKC";
  }

  activePick = fullOrder[teamDraftOrder["LAL"]];
  if(!!activePick){
    activePick.newTeam = "NOP";
  }

  //Protected Picks

  if(teamDraftOrder["CHO"] > 13){
    const activePick = fullOrder[teamDraftOrder["CHO"]];
    if(!!activePick){
      activePick.newTeam = "SAS";
    }
  }

  if(teamDraftOrder["DAL"] > 9){
    const activePick = fullOrder[teamDraftOrder["DAL"]];
    if(!!activePick){
      activePick.newTeam = "NYK";
    }
  }

  if(teamDraftOrder["DET"] > 17){
    const activePick = fullOrder[teamDraftOrder["DET"]];
    if(!!activePick){
      activePick.newTeam = "NYK";
    }
  }

  if(teamDraftOrder["GSW"] > 9){
    const activePick = fullOrder[teamDraftOrder["GSW"]];
    if(!!activePick){
      activePick.newTeam = "POR";
    }
  }

  if(teamDraftOrder["HOU"] > 3){
    const activePick = fullOrder[teamDraftOrder["HOU"]];
    if(!!activePick){
      activePick.newTeam = "OKC";
    }
  }

  if(teamDraftOrder["POR"] > 13){
    const activePick = fullOrder[teamDraftOrder["POR"]];
    if(!!activePick){
      activePick.newTeam = "CHO";
    }
  }

  if(teamDraftOrder["SAC"] > 13){
    const activePick = fullOrder[teamDraftOrder["SAC"]];
    if(!!activePick){
      activePick.newTeam = "ATL";
    }
  }

  if(teamDraftOrder["TOR"] > 5){
    const activePick = fullOrder[teamDraftOrder["TOR"]];
    if(!!activePick){
      activePick.newTeam = "SAS";
    }
  }

  if(teamDraftOrder["UTA"] > 9){
    const activePick = fullOrder[teamDraftOrder["UTA"]];
    if(!!activePick){
      activePick.newTeam = "OKC";
    }
  }

  if(teamDraftOrder["WAS"] > 11){
    const activePick = fullOrder[teamDraftOrder["WAS"]];
    if(!!activePick){
      activePick.newTeam = "NYK";
    }
  }

  //Pick Swaps

  if(teamDraftOrder["NOP"] > teamDraftOrder["MIL"]){
    const NOP_Pick = fullOrder[teamDraftOrder["NOP"]];
    const MIL_Pick = fullOrder[teamDraftOrder["MIL"]];
    if(!!NOP_Pick && !!MIL_Pick){
      NOP_Pick.newTeam = "MIL";
      MIL_Pick.newTeam = "NOP";
    }
  }

  if(teamDraftOrder["WAS"] < 11 && teamDraftOrder["WAS"] > teamDraftOrder["PHO"]){
    const WAS_Pick = fullOrder[teamDraftOrder["WAS"]];
    const PHO_Pick = fullOrder[teamDraftOrder["PHO"]];
    if(teamDraftOrder["MEM"] > teamDraftOrder["WAS"]){
      const MEM_Pick = fullOrder[teamDraftOrder["MEM"]];
      if(!!WAS_Pick && !!PHO_Pick && MEM_Pick){
        WAS_Pick.newTeam = "MEM";
        PHO_Pick.newTeam = "WAS";
        MEM_Pick.newTeam = "PHO";
      }
    } else {
      if(!!WAS_Pick && !!PHO_Pick){
        WAS_Pick.newTeam = "PHO";
        PHO_Pick.newTeam = "WAS";
      }
    }
  } else {
    if(teamDraftOrder["MEM"] > teamDraftOrder["PHO"]){
      const MEM_Pick = fullOrder[teamDraftOrder["MEM"]];
      const PHO_Pick = fullOrder[teamDraftOrder["PHO"]];
      if(!!PHO_Pick && MEM_Pick){
        PHO_Pick.newTeam = "MEM";
        MEM_Pick.newTeam = "PHO";
      }
    }
  }

  //OKC worst pick to IND

  const Last_OKC_Pick = [...fullOrder].filter(pick => pick.newTeam === "OKC").pop();
  if(!!Last_OKC_Pick){
    const activeTeam = Last_OKC_Pick.nativeTeam;
    const OKC_Pick = fullOrder[teamDraftOrder[activeTeam]];
    if(!!OKC_Pick){
      OKC_Pick.newTeam = "IND";
    }
  }

  return fullOrder;
}