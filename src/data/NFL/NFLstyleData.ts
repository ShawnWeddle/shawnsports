import type { NFLTeamType } from "./NFLdata"

export const nflStyleData: { [Key in NFLTeamType] : {
  primary: string, 
  secondary: string, 
  primaryBGstyle: string,
  textColorStyle: string,
}} = {
  "ARI":{
    primary: "#97233F",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#97233F]",
    textColorStyle: "text-white",
  },
  "ATL":{
    primary: "#A71930",
    secondary: "#000000",
    primaryBGstyle: "bg-[#A71930]",
    textColorStyle: "text-white",
  },
  "BAL":{
    primary: "#241773",
    secondary: "#9E7C0C",
    primaryBGstyle: "bg-[#241773]",
    textColorStyle: "text-white",
  },
  "BUF":{
    primary: "#00338D",
    secondary: "#C60C30",
    primaryBGstyle: "bg-[#00338D]",
    textColorStyle: "text-white",
  },
  "CAR":{
    primary: "#0085CA",
    secondary: "#101820",
    primaryBGstyle: "bg-[#0085CA]",
    textColorStyle: "text-white",
  },
  "CHI":{
    primary: "#0B162A",
    secondary: "#C83803",
    primaryBGstyle: "bg-[#0B162A]",
    textColorStyle: "text-white",
  },
  "CIN":{
    primary: "#FB4F14",
    secondary: "#000000",
    primaryBGstyle: "bg-[#FB4F14]",
    textColorStyle: "text-white",
  },
  "CLE":{
    primary: "#FF3C00",
    secondary: "#311D00",
    primaryBGstyle: "bg-[#FF3C00]",
    textColorStyle: "text-white",
  },
  "DAL":{
    primary: "#041E42",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#041E42]",
    textColorStyle: "text-white",
  },
  "DEN":{
    primary: "#FB4F14",
    secondary: "#002244",
    primaryBGstyle: "bg-[#FB4F14]",
    textColorStyle: "text-white",
  },
  "DET":{
    primary: "#0076B6",
    secondary: "#B0B7BC",
    primaryBGstyle: "bg-[#0076B6]",
    textColorStyle: "text-white",
  },
  "GB":{
    primary: "#203731",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#203731]",
    textColorStyle: "text-white",
  },
  "HOU":{
    primary: "#03202F",
    secondary: "#A71930",
    primaryBGstyle: "bg-[#03202F]",
    textColorStyle: "text-white",
  },
  "IND":{
    primary: "#002C5F",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#002C5F]",
    textColorStyle: "text-white",
  },
  "JAX":{
    primary: "#006778",
    secondary: "#9F792C",
    primaryBGstyle: "bg-[#006778]",
    textColorStyle: "text-white",
  },
  "KC":{
    primary: "#E31837",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#E31837]",
    textColorStyle: "text-white",
  },
  "LAC":{
    primary: "#0080C6",
    secondary: "#FFC20E",
    primaryBGstyle: "bg-[#0080C6]",
    textColorStyle: "text-white",
  },
  "LAR":{
    primary: "#003594",
    secondary: "#FFA300",
    primaryBGstyle: "bg-[#003594]",
    textColorStyle: "text-white",
  },
  "LV":{
    primary: "#000000",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#000000]",
    textColorStyle: "text-white",
  },
  "MIA":{
    primary: "#008E97",
    secondary: "#FC4C02",
    primaryBGstyle: "bg-[#008E97]",
    textColorStyle: "text-white",
  },
  "MIN":{
    primary: "#4F2683",
    secondary: "#FFC62F",
    primaryBGstyle: "bg-[#4F2683]",
    textColorStyle: "text-white",
  },
  "NE":{
    primary: "#002244",
    secondary: "#C60C30",
    primaryBGstyle: "bg-[#002244]",
    textColorStyle: "text-white",
  },
  "NO":{
    primary: "#D3BC8D",
    secondary: "#101820",
    primaryBGstyle: "bg-[#D3BC8D]",
    textColorStyle: "text-black",
  },
  "NYG":{
    primary: "#0B2265",
    secondary: "#A71930",
    primaryBGstyle: "bg-[#0B2265]",
    textColorStyle: "text-white",
  },
  "NYJ":{
    primary: "#125740",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#125740]",
    textColorStyle: "text-white",
  },
  "PHI":{
    primary: "#004C54",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#004C54]",
    textColorStyle: "text-white",
  },
  "PIT":{
    primary: "#FFB612",
    secondary: "#101820",
    primaryBGstyle: "bg-[#FFB612]",
    textColorStyle: "text-black",
  },
  "SEA":{
    primary: "#002244",
    secondary: "#69BE28",
    primaryBGstyle: "bg-[#002244]",
    textColorStyle: "text-white",
  },
  "SF":{
    primary: "#AA0000",
    secondary: "#B3995D",
    primaryBGstyle: "bg-[#AA0000]",
    textColorStyle: "text-white",
  },
  "TB":{
    primary: "#D50A0A",
    secondary: "#34302B",
    primaryBGstyle: "bg-[#D50A0A]",
    textColorStyle: "text-white",
  },
  "TEN":{
    primary: "#0C2340",
    secondary: "#4B92DB",
    primaryBGstyle: "bg-[#0C2340]",
    textColorStyle: "text-white",
  },
  "WAS":{
    primary: "#5A1414",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#5A1414]",
    textColorStyle: "text-white",
  }
}