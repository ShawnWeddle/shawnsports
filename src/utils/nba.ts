import { type AllNBATeamType, NBAteamData, NBATeamType } from "~/data/NBA/NBAdata";
import { AllNBAPicks2, type PickType } from "~/data/NBA/nbaPickBreakdown";

export const nameMatcherNBA = (checkTeam: AllNBATeamType, winningTeam: AllNBATeamType, losingTeam?: AllNBATeamType) => {
  let isTeam = false;
  if ([losingTeam, winningTeam].includes(checkTeam)) {
    isTeam = true;
  }
  if (
    (checkTeam === "LAL" &&
      [losingTeam, winningTeam].includes("MNL")) ||
    (checkTeam === "MNL" &&
      [losingTeam, winningTeam].includes("LAL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "PHI" &&
      [losingTeam, winningTeam].includes("SYR")) ||
    (checkTeam === "SYR" &&
      [losingTeam, winningTeam].includes("PHI"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "DET" &&
      [losingTeam, winningTeam].includes("FWP")) ||
    (checkTeam === "FWP" &&
      [losingTeam, winningTeam].includes("DET"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "ATL" &&
      [losingTeam, winningTeam].includes("STL")) ||
    (checkTeam === "STL" &&
      [losingTeam, winningTeam].includes("ATL"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "SAC" &&
      [losingTeam, winningTeam].includes("KCK")) ||
    (checkTeam === "KCK" &&
      [losingTeam, winningTeam].includes("SAC"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "OKC" &&
      [losingTeam, winningTeam].includes("SEA")) ||
    (checkTeam === "SEA" &&
      [losingTeam, winningTeam].includes("OKC"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "WSB" &&
      [losingTeam, winningTeam].includes("BAL")) ||
    (checkTeam === "BAL" &&
      [losingTeam, winningTeam].includes("WSB"))
  ) {
    isTeam = true;
  }
  if (
    (checkTeam === "GSW" &&
      [losingTeam, winningTeam].includes("PHW")) ||
    (checkTeam === "PHW" &&
      [losingTeam, winningTeam].includes("SFW")) ||
    (checkTeam === "SFW" &&
      [losingTeam, winningTeam].includes("GSW")) ||
    (checkTeam === "GSW" &&
      [losingTeam, winningTeam].includes("SFW")) ||
    (checkTeam === "PHW" &&
      [losingTeam, winningTeam].includes("GSW")) ||
    (checkTeam === "SFW" &&
      [losingTeam, winningTeam].includes("PHW"))
  ) {
    isTeam = true;
  }
  return isTeam;
}

export const nbaTeamPreNames = (checkTeam: AllNBATeamType): string => {
  switch(checkTeam){

    case "PHI":
    case "SYR":
      return "76ers/Nationals"
    case "OKC":
    case "SEA":
      return "Thunder/Supersonics"
    case "BAL":
    case "WAS":
    case "WSB":
      return "Wizards/Bullets"
    case "KCK":
    case "ROC":
    case "SAC":
      return "Kings/Royals"
    default:
      return NBAteamData[checkTeam].name
  }
}

const tns = (team: NBATeamType | "NBA") => {
  let teamShort = "";
  switch(team){
    case "NBA":
      return "";
    case "LAC":
    case "LAL":
      teamShort = NBAteamData[team].location + " (" + NBAteamData[team].name + ")";
      return teamShort;
    case "ATL":
    case "BOS":
    case "BRK":
    case "CHI":
    case "CHO":
    case "CLE":
    case "DAL":
    case "DEN":
    case "DET":
    case "GSW":
    case "HOU":
    case "IND":
    case "MEM":
    case "MIA":
    case "MIL":
    case "MIN":
    case "NOP":
    case "NYK":
    case "OKC":
    case "ORL":
    case "PHI":
    case "PHO":
    case "POR":
    case "SAC":
    case "SAS":
    case "TOR":
    case "UTA":
    case "WAS":
      teamShort = NBAteamData[team].location;
      return teamShort;
  }
}

export const pickNoteCreator = (pick: PickType): string[] => {
  const activeTeam = pick.nativeTeam;
  const { history, swap, conditions, nativeTeam } = pick;
  const notes: string[] = [];

  const baseNote = tns(activeTeam) + " has not yet traded this pick."
  let historyNote = "";
  let swapNote = "";
  let conNote = "";

  if(swap){
    let inside = "";
    const direction = swap[0];
    const swapTeam = swap[1];
    if(direction === "positive"){
      inside = "greater"
    } else if (direction === "negative"){
      inside = "lesser"
    }
    swapNote = tns(nativeTeam) + " will receive the " + inside + " of their native pick and " + tns(swapTeam) + "'s pick.";
    notes.push(swapNote);
  }

  if(conditions){
    let inside = "";
    const {rank, teams, owner } = conditions;
    switch(rank){
      case "MF":
        inside = "most favorable";
        break;
      case "SMF":
        inside = "second most favorable";
        break;
      case "SLF":
        inside = "second least favorable";
        break;
      case "LF":
        inside = "least favorable";
        break;
    }
    const rest = teams.map((team, index) => {
      return (index === teams.length - 1 ? "and " : "") + tns(team) + "'s pick"
    }).join(", ")
    conNote = tns(owner) + " will receive the " + inside + " of " + rest + ".";
    notes.push(conNote);
  }

  if(history){
    let inside = "";
    for(let i=0; i<history.length; i++){
      const newTeam = history[i];
      const atEnd = i === history.length - 1 ? "." : " to ";
      if(newTeam){
        inside = inside + tns(newTeam) + atEnd;
        }
      }
    historyNote = "Traded from " + inside;
    notes.push(historyNote);
  }

  if(!history && !swap && !conditions){
    notes.push(baseNote);
  }

  return notes;
}