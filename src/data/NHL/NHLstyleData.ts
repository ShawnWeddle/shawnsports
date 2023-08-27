import type { AllNHLTeamType } from "./NHLdata"

export const NHLstyleData: { [Key in AllNHLTeamType] : {
  primary: string, 
  secondary: string, 
  primaryBGstyle: string,
  secondaryTextStyle: string,
  secondaryBorderStyle: string,
  primaryPlainText: string,
}} = {
  "ANA": {
    primary: "#000000",
    secondary: "#B9975B",
    primaryBGstyle: "bg-[#000000]",
    secondaryTextStyle: "text-[#B9975B]",
    secondaryBorderStyle: "border-[#B9975B]",
    primaryPlainText: "text-white",
  }, "ARI": {
    primary: "#8C2633",
    secondary: "#E2D6B5",
    primaryBGstyle: "bg-[#8C2633]",
    secondaryTextStyle: "text-[#E2D6B5]",
    secondaryBorderStyle: "border-[#E2D6B5]",
    primaryPlainText: "text-white",
  }, "BOS": {
    primary: "#FFB81C",
    secondary: "#000000",
    primaryBGstyle: "bg-[#FFB81C]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    primaryPlainText: "text-black",
  }, "BUF": {
    primary: "#003087",
    secondary: "#FFB81C",
    primaryBGstyle: "bg-[#003087]",
    secondaryTextStyle: "text-[#FFB81C]",
    secondaryBorderStyle: "border-[#FFB81C]",
    primaryPlainText: "text-white",
  }, "CAR": {
    primary: "#CE1126",
    secondary: "#000000",
    primaryBGstyle: "bg-[#CE1126]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    primaryPlainText: "text-white",
  }, "CBJ": {
    primary: "#002654",
    secondary: "#CE1126",
    primaryBGstyle: "bg-[#002654]",
    secondaryTextStyle: "text-[#CE1126]",
    secondaryBorderStyle: "border-[#CE1126]",
    primaryPlainText: "text-white",
  }, "CGY": {
    primary: "#D2001C",
    secondary: "#FAAF19",
    primaryBGstyle: "bg-[#D2001C]",
    secondaryTextStyle: "text-[#FAAF19]",
    secondaryBorderStyle: "border-[#FAAF19]",
    primaryPlainText: "text-white",
  }, "CHI": {
    primary: "#CF0A2C",
    secondary: "#FFD100",
    primaryBGstyle: "bg-[#CF0A2C]",
    secondaryTextStyle: "text-[#FFD100]",
    secondaryBorderStyle: "border-[#FFD100]",
    primaryPlainText: "text-white",
  }, "COL": {
    primary: "#6F263D",
    secondary: "#236192",
    primaryBGstyle: "bg-[#6F263D]",
    secondaryTextStyle: "text-[#236192]",
    secondaryBorderStyle: "border-[#236192]",
    primaryPlainText: "text-white",
  }, "DAL": {
    primary: "#006847",
    secondary: "#8F8F8C",
    primaryBGstyle: "bg-[#006847]",
    secondaryTextStyle: "text-[#8F8F8C]",
    secondaryBorderStyle: "border-[#8F8F8C]",
    primaryPlainText: "text-white",
  }, "DET": {
    primary: "#CE1126",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#CE1126]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    primaryPlainText: "text-white",
  }, "EDM": {
    primary: "#041E42",
    secondary: "#FF4C00",
    primaryBGstyle: "bg-[#041E42]",
    secondaryTextStyle: "text-[#FF4C00]",
    secondaryBorderStyle: "border-[#FF4C00]",
    primaryPlainText: "text-white",
  }, "FLA": {
    primary: "#041E42",
    secondary: "#B9975B",
    primaryBGstyle: "bg-[#041E42]",
    secondaryTextStyle: "text-[#B9975B]",
    secondaryBorderStyle: "border-[#B9975B]",
    primaryPlainText: "text-white",
  }, "LAK": {
    primary: "#111111",
    secondary: "#A2AAAD",
    primaryBGstyle: "bg-[#111111]",
    secondaryTextStyle: "text-[#A2AAAD]",
    secondaryBorderStyle: "border-[#A2AAAD]",
    primaryPlainText: "text-white",
  }, "MIN": {
    primary: "#154734",
    secondary: "#A6192E",
    primaryBGstyle: "bg-[#154734]",
    secondaryTextStyle: "text-[#A6192E]",
    secondaryBorderStyle: "border-[#A6192E]",
    primaryPlainText: "text-white",
  }, "MMR": {
    primary: "#7B0424",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#7B0424]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    primaryPlainText: "text-white",
  }, "MNS": {
    primary: "#007A33",
    secondary: "#C69214",
    primaryBGstyle: "bg-[#007A33]",
    secondaryTextStyle: "text-[#C69214]",
    secondaryBorderStyle: "border-[#C69214]",
    primaryPlainText: "text-white",
  }, "MTL": {
    primary: "#AF1E2D",
    secondary: "#192168",
    primaryBGstyle: "bg-[#AF1E2D]",
    secondaryTextStyle: "text-[#192168]",
    secondaryBorderStyle: "border-[#192168]",
    primaryPlainText: "text-white",
  }, "NJD": {
    primary: "#CE1126",
    secondary: "#000000",
    primaryBGstyle: "bg-[#CE1126]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    primaryPlainText: "text-white",
  }, "NSH": {
    primary: "#FFB81C",
    secondary: "#041E42",
    primaryBGstyle: "bg-[#FFB81C]",
    secondaryTextStyle: "text-[#041E42]",
    secondaryBorderStyle: "border-[#041E42]",
    primaryPlainText: "text-black",
  }, "NYI": {
    primary: "#00539B",
    secondary: "#F47D30",
    primaryBGstyle: "bg-[#00539B]",
    secondaryTextStyle: "text-[#F47D30]",
    secondaryBorderStyle: "border-[#F47D30]",
    primaryPlainText: "text-white",
  }, "NYR": {
    primary: "#0038A8",
    secondary: "#CE1126",
    primaryBGstyle: "bg-[#0038A8]",
    secondaryTextStyle: "text-[#CE1126]",
    secondaryBorderStyle: "border-[#CE1126]",
    primaryPlainText: "text-white",
  }, "OTT": {
    primary: "#000000",
    secondary: "#DA1A32",
    primaryBGstyle: "bg-[#000000]",
    secondaryTextStyle: "text-[#DA1A32]",
    secondaryBorderStyle: "border-[#DA1A32]",
    primaryPlainText: "text-white",
  }, "PHI": {
    primary: "#F74902",
    secondary: "#000000",
    primaryBGstyle: "bg-[#F74902]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    primaryPlainText: "text-black",
  }, "PIT": {
    primary: "#000000",
    secondary: "#CFC493",
    primaryBGstyle: "bg-[#000000]",
    secondaryTextStyle: "text-[#CFC493]",
    secondaryBorderStyle: "border-[#CFC493]",
    primaryPlainText: "text-white",
  }, "SEA": {
    primary: "#001628",
    secondary: "#99D9D9",
    primaryBGstyle: "bg-[#001628]",
    secondaryTextStyle: "text-[#99D9D9]",
    secondaryBorderStyle: "border-[#99D9D9]",
    primaryPlainText: "text-white",
  }, "SJS": {
    primary: "#006D75",
    secondary: "#EA7200",
    primaryBGstyle: "bg-[#006D75]",
    secondaryTextStyle: "text-[#EA7200]",
    secondaryBorderStyle: "border-[#EA7200]",
    primaryPlainText: "text-white",
  }, "STL": {
    primary: "#002F87",
    secondary: "#FCB514",
    primaryBGstyle: "bg-[#002F87]",
    secondaryTextStyle: "text-[#FCB514]",
    secondaryBorderStyle: "border-[#FCB514]",
    primaryPlainText: "text-white",
  }, "TBL": {
    primary: "#002868",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#002868]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    primaryPlainText: "text-white",
  }, "TOR": {
    primary: "#00205B",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#00205B]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    primaryPlainText: "text-white",
  }, "VAN": {
    primary: "#00205B",
    secondary: "#00843D",
    primaryBGstyle: "bg-[#00205B]",
    secondaryTextStyle: "text-[#00843D]",
    secondaryBorderStyle: "border-[#00843D]",
    primaryPlainText: "text-white",
  }, "VEG": {
    primary: "#333F42",
    secondary: "#B4975A",
    primaryBGstyle: "bg-[#333F42]",
    secondaryTextStyle: "text-[#B4975A]",
    secondaryBorderStyle: "border-[#B4975A]",
    primaryPlainText: "text-white",
  }, "WAS": {
    primary: "#041E42",
    secondary: "#C8102E",
    primaryBGstyle: "bg-[#041E42]",
    secondaryTextStyle: "text-[#C8102E]",
    secondaryBorderStyle: "border-[#C8102E]",
    primaryPlainText: "text-white",
  }, "WIN": {
    primary: "#041E42",
    secondary: "#8E9090",
    primaryBGstyle: "bg-[#041E42]",
    secondaryTextStyle: "text-[#8E9090]",
    secondaryBorderStyle: "border-[#8E9090]",
    primaryPlainText: "text-white",
  },
}
