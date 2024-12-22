import { type NBATeamType } from "./NBAdata";

const teamDraftOrder: { [Key in NBATeamType] : { owner: NBATeamType, position: number}} = {
  ATL: {
    owner: "ATL",
    position: 30,
  },
  BOS: {
    owner: "BOS",
    position: 30,
  },
  BRK: {
    owner: "BRK",
    position: 30,
  },
  CHI: {
    owner: "CHI",
    position: 30,
  },
  CHO: {
    owner: "CHO",
    position: 30,
  },
  CLE: {
    owner: "CLE",
    position: 30,
  },
  DAL: {
    owner: "DAL",
    position: 30,
  },
  DEN: {
    owner: "DEN",
    position: 30,
  },
  DET: {
    owner: "DET",
    position: 30,
  },
  GSW: {
    owner: "GSW",
    position: 30,
  },
  HOU: {
    owner: "HOU",
    position: 30,
  },
  IND: {
    owner: "IND",
    position: 30,
  },
  LAC: {
    owner: "LAC",
    position: 30,
  },
  LAL: {
    owner: "LAL",
    position: 30,
  },
  MEM: {
    owner: "MEM",
    position: 30,
  },
  MIA: {
    owner: "MIA",
    position: 30,
  },
  MIL: {
    owner: "MIL",
    position: 30,
  },
  MIN: {
    owner: "MIN",
    position: 30,
  },
  NOP: {
    owner: "NOP",
    position: 30,
  },
  NYK: {
    owner: "NYK",
    position: 30,
  },
  OKC: {
    owner: "OKC",
    position: 30,
  },
  ORL: {
    owner: "ORL",
    position: 30,
  },
  PHI: {
    owner: "PHI",
    position: 30,
  },
  PHO: {
    owner: "PHO",
    position: 30,
  },
  POR: {
    owner: "POR",
    position: 30,
  },
  SAC: {
    owner: "SAC",
    position: 30,
  },
  SAS: {
    owner: "SAS",
    position: 30,
  },
  TOR: {
    owner: "TOR",
    position: 30,
  },
  UTA: {
    owner: "UTA",
    position: 30,
  },
  WAS: {
    owner: "WAS",
    position: 30,
  },
}

export const createOrder = (lotteryOrder: NBATeamType[]) => {
  const newOrder = {...teamDraftOrder};
  lotteryOrder.forEach((team, index) => {
    const activePick = newOrder[team];
    newOrder[team] = {...activePick, position: index + 1}
  });

  const simpleConvey = (nativeT: NBATeamType, newT: NBATeamType, limit: number) => {
    if(newOrder[nativeT].position > limit){
      newOrder[nativeT].owner = newT;
    }
  };

  const simpleSwap = (bottomT: NBATeamType, topT: NBATeamType, limit: number) => {
    if(newOrder[bottomT].position > limit){
      [newOrder[bottomT].owner, newOrder[topT].owner] = [newOrder[topT].owner, newOrder[bottomT].owner];
    }
  };



  //Unprotected Picks

  simpleConvey("ATL", "SAS", 0);
  simpleConvey("CLE", "UTA", 0);
  simpleConvey("LAL", "ATL", 0);
  simpleConvey("MIN", "UTA", 0);
  simpleConvey("NYK", "BRK", 0);
  simpleConvey("MIL", "NOP", 0);
  simpleConvey("PHO", "BRK", 0);

  //Protected Picks

  simpleConvey("CHI", "SAS", 10);
  simpleConvey("DEN", "ORL", 5);
  simpleConvey("DET", "NYK", 13);
  simpleConvey("MIL", "BRK", 4);
  simpleConvey("PHI", "OKC", 6);
  simpleConvey("SAC", "ATL", 12);
  simpleConvey("UTA", "OKC", 10);
  simpleConvey("WAS", "NYK", 10);

  const LAC_OKC_swap = newOrder["LAC"].position < newOrder["OKC"].position;
  if(LAC_OKC_swap){
    simpleSwap("LAC", "OKC", 0);
  }

  const LAC_OR_OKC = LAC_OKC_swap ? "LAC" : "OKC";
  const HOU_OKC_swap = newOrder["HOU"].position < newOrder[LAC_OR_OKC].position;
  if(HOU_OKC_swap){
    simpleSwap("HOU", LAC_OR_OKC, 0);
  }

  const HOU_LAC_OR_OKC = HOU_OKC_swap ? LAC_OKC_swap ? "LAC" : "OKC" : "HOU"
  const PHO_HOU_swap = newOrder["PHO"].position < newOrder[HOU_LAC_OR_OKC].position;
  if(PHO_HOU_swap){
    simpleSwap("PHO", HOU_LAC_OR_OKC, 0);
  }

  return newOrder;
}