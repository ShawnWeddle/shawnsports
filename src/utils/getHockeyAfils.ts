import type { NHLTeamType, AHLTeamType, AHLTeamTypeReal, ECHLTeamType, ECHLTeamTypeReal } from "~/data/NHL/NHLdata";

export const getAHLafils = (inputTeam: AHLTeamType): AHLTeamTypeReal => {
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
};

export const getECHLafils = (inputTeam: ECHLTeamType): ECHLTeamTypeReal => {
  switch(inputTeam){
    case "ECHL-ANA": return "TUL";
    case "ECHL-BOS": return "MNE";
    case "ECHL-BUF": return "WHL";
    case "ECHL-CAR": return "GSO";
    case "ECHL-CGY": return "RCR";
    case "ECHL-CHI": return "IND";
    case "ECHL-COL": return "NMG";
    case "ECHL-DAL": return "IDH";
    case "ECHL-DET": return "TOL";
    case "ECHL-EDM": return "FWK";
    case "ECHL-FLA": return "SAV";
    case "ECHL-LAK": return "GVL";
    case "ECHL-MIN": return "JAX";
    case "ECHL-MTL": return "TRL";
    case "ECHL-NJD": return "ADK";
    case "ECHL-NSH": return "ATL";
    case "ECHL-NYI": return "TRE";
    case "ECHL-NYR": return "NOR";
    case "ECHL-OTT": return "ALN";
    case "ECHL-PHI": return "REA";
    case "ECHL-PIT": return "FLA";
    case "ECHL-SEA": return "KCM";
    case "ECHL-SJS": return "WIC";
    case "ECHL-STL": return "WOR";
    case "ECHL-TBL": return "ORL";
    case "ECHL-TOR": return "CIN";
    case "ECHL-VAN": return "KAL";
    case "ECHL-VEG": return "TAH";
    case "ECHL-WAS": return "SCS";
    case "ECHL-WIN": return "BLM";
  }
}
