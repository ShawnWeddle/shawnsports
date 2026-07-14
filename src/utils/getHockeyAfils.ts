import type { NHLTeamType, AHLTeamType, AHLTeamTypeReal } from "~/data/NHL/NHLdata";

export const getHockeyAfils = (inputTeam: AHLTeamType): AHLTeamTypeReal => {
  switch(inputTeam){
    case "AHL-ANA": return "SDG";
    case "AHL-BOS": return "PRO";
    case "AHL-BUF": return "ROC";
    case "AHL-CAR": return "CHI";
    case "AHL-CBJ": return "CLE";
    case "AHL-CGY": return "CGY";
    case "AHL-CHI": return "RFD";
    case "AHL-COL": return "COL";
    case "AHL-DAL": return "TEX";
    case "AHL-DET": return "GRG";
    case "AHL-EDM": return "BAK";
    case "AHL-FLA": return "CLT";
    case "AHL-LAK": return "ONT";
    case "AHL-MIN": return "IOW";
    case "AHL-MTL": return "LAV";
    case "AHL-NJD": return "UTI";
    case "AHL-NSH": return "MIL";
    case "AHL-NYI": return "HAM";
    case "AHL-NYR": return "HFD";
    case "AHL-OTT": return "BEL";
    case "AHL-PHI": return "LVP";
    case "AHL-PIT": return "WBS";
    case "AHL-SEA": return "CVF";
    case "AHL-SJS": return "SJB";
    case "AHL-STL": return "SPR";
    case "AHL-TBL": return "SYR";
    case "AHL-TOR": return "TOR";
    case "AHL-UTA": return "TUC";
    case "AHL-VAN": return "ABB";
    case "AHL-VEG": return "HSK";
    case "AHL-WAS": return "HER";
    case "AHL-WIN": return "MBM";
  }
}