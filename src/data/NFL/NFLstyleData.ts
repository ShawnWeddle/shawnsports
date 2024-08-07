import type { AllNFLTeamType } from "./NFLdata"

export const NFLstyleData: { [Key in AllNFLTeamType] : {
  primary: string, 
  secondary: string, 
  primaryBGstyle: string,
  primaryBGHover: string,
  primaryBGfadeHover: string,
  primaryAsText: string,
  secondaryBGstyle: string,
  secondaryTextStyle: string,
  secondaryBorderStyle: string,
  secondaryBorderStyleHover: string,
  primaryPlainText: string,
  primaryPlainTextHover: string,
  secondaryPlainText: string,
}} = {
  "ARI":{
    primary: "#97233F",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#97233F]",
    primaryBGfadeHover: "hover:bg-[#97233F]/50",
    primaryBGHover: "hover:bg-[#97233F]",
    primaryAsText: "text-[#97233F]",
    secondaryBGstyle: "bg-[#FFB612]",
    secondaryTextStyle: "text-[#FFB612]",
    secondaryBorderStyle: "border-[#FFB612]",
    secondaryBorderStyleHover: "hover:border-[#FFB612]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  }, 
  "ATL":{
    primary: "#A71930",
    secondary: "#000000",
    primaryBGstyle: "bg-[#A71930]",
    primaryBGfadeHover: "hover:bg-[#A71930]/50",
    primaryBGHover: "hover:bg-[#A71930]",
    primaryAsText: "text-[#A71930]",
    secondaryBGstyle: "bg-[#000000]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    secondaryBorderStyleHover: "hover:border-[#000000]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "BAL":{
    primary: "#241773",
    secondary: "#9E7C0C",
    primaryBGstyle: "bg-[#241773]",
    primaryBGfadeHover: "hover:bg-[#241773]/50",
    primaryBGHover: "hover:bg-[#241773]",
    primaryAsText: "text-[#241773]",
    secondaryBGstyle: "bg-[#9E7C0C]",
    secondaryTextStyle: "text-[#9E7C0C]",
    secondaryBorderStyle: "border-[#9E7C0C]",
    secondaryBorderStyleHover: "hover:border-[#9E7C0C]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "BCS":{
    primary: "#002C5F",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#002C5F]",
    primaryBGfadeHover: "hover:bg-[#002C5F]/50",
    primaryBGHover: "hover:bg-[#002C5F]",
    primaryAsText: "text-[#002C5F]",
    secondaryBGstyle: "bg-[#FFFFFF]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    secondaryBorderStyleHover: "hover:border-[#FFFFFF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "BUF":{
    primary: "#00338D",
    secondary: "#C60C30",
    primaryBGstyle: "bg-[#00338D]",
    primaryBGfadeHover: "hover:bg-[#00338D]/50",
    primaryBGHover: "hover:bg-[#00338D]",
    primaryAsText: "text-[#00338D]",
    secondaryBGstyle: "bg-[#C60C30]",
    secondaryTextStyle: "text-[#C60C30]",
    secondaryBorderStyle: "border-[#C60C30]",
    secondaryBorderStyleHover: "hover:border-[#C60C30]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "CAR":{
    primary: "#0085CA",
    secondary: "#101820",
    primaryBGstyle: "bg-[#0085CA]",
    primaryBGfadeHover: "hover:bg-[#0085CA]/50",
    primaryBGHover: "hover:bg-[#0085CA]",
    primaryAsText: "text-[#0085CA]",
    secondaryBGstyle: "bg-[#101820]",
    secondaryTextStyle: "text-[#101820]",
    secondaryBorderStyle: "border-[#101820]",
    secondaryBorderStyleHover: "hover:border-[#101820]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "CHI":{
    primary: "#0B162A",
    secondary: "#C83803",
    primaryBGstyle: "bg-[#0B162A]",
    primaryBGfadeHover: "hover:bg-[#0B162A]/50",
    primaryBGHover: "hover:bg-[#0B162A]",
    primaryAsText: "text-[#0B162A]",
    secondaryBGstyle: "bg-[#C83803]",
    secondaryTextStyle: "text-[#C83803]",
    secondaryBorderStyle: "border-[#C83803]",
    secondaryBorderStyleHover: "hover:border-[#C83803]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "CIN":{
    primary: "#FB4F14",
    secondary: "#000000",
    primaryBGstyle: "bg-[#FB4F14]",
    primaryBGfadeHover: "hover:bg-[#FB4F14]/50",
    primaryBGHover: "hover:bg-[#FB4F14]",
    primaryAsText: "text-[#FB4F14]",
    secondaryBGstyle: "bg-[#000000]",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
    secondaryBorderStyleHover: "hover:border-[#000000]",
    primaryPlainText: "text-black",
    primaryPlainTextHover: "hover:text-black",
    secondaryPlainText: "text-white",
  },
  "CLE":{
    primary: "#FF3C00",
    secondary: "#311D00",
    primaryBGstyle: "bg-[#FF3C00]",
    primaryBGfadeHover: "hover:bg-[#FF3C00]/50",
    primaryBGHover: "hover:bg-[#FF3C00]",
    primaryAsText: "text-[#FF3C00]",
    secondaryBGstyle: "bg-[#311D00]",
    secondaryTextStyle: "text-[#311D00]",
    secondaryBorderStyle: "border-[#311D00]",
    secondaryBorderStyleHover: "hover:border-[#311D00]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "DAL":{
    primary: "#041E42",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#041E42]",
    primaryBGfadeHover: "hover:bg-[#041E42]/50",
    primaryBGHover: "hover:bg-[#041E42]",
    primaryAsText: "text-[#041E42]",
    secondaryBGstyle: "bg-[#FFFFFF]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    secondaryBorderStyleHover: "hover:border-[#FFFFFF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "DEN":{
    primary: "#FB4F14",
    secondary: "#002244",
    primaryBGstyle: "bg-[#FB4F14]",
    primaryBGfadeHover: "hover:bg-[#FB4F14]/50",
    primaryBGHover: "hover:bg-[#FB4F14]",
    primaryAsText: "text-[#FB4F14]",
    secondaryBGstyle: "bg-[#002244]",
    secondaryTextStyle: "text-[#002244]",
    secondaryBorderStyle: "border-[#002244]",
    secondaryBorderStyleHover: "hover:border-[#002244]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "DET":{
    primary: "#0076B6",
    secondary: "#B0B7BC",
    primaryBGstyle: "bg-[#0076B6]",
    primaryBGfadeHover: "hover:bg-[#0076B6]/50",
    primaryBGHover: "hover:bg-[#0076B6]",
    primaryAsText: "text-[#0076B6]",
    secondaryBGstyle: "bg-[#B0B7BC]",
    secondaryTextStyle: "text-[#B0B7BC]",
    secondaryBorderStyle: "border-[#B0B7BC]",
    secondaryBorderStyleHover: "hover:border-[#B0B7BC]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "GNB":{
    primary: "#203731",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#203731]",
    primaryBGfadeHover: "hover:bg-[#203731]/50",
    primaryBGHover: "hover:bg-[#203731]",
    primaryAsText: "text-[#203731]",
    secondaryBGstyle: "bg-[#FFB612]",
    secondaryTextStyle: "text-[#FFB612]",
    secondaryBorderStyle: "border-[#FFB612]",
    secondaryBorderStyleHover: "hover:border-[#FFB612]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "HOL":{
    primary: "#0C2340",
    secondary: "#4B92DB",
    primaryBGstyle: "bg-[#0C2340]",
    primaryBGfadeHover: "hover:bg-[#0C2340]/50",
    primaryBGHover: "hover:bg-[#0C2340]",
    primaryAsText: "text-[#0C2340]",
    secondaryBGstyle: "bg-[#4B92DB]",
    secondaryTextStyle: "text-[#4B92DB]",
    secondaryBorderStyle: "border-[#4B92DB]",
    secondaryBorderStyleHover: "hover:border-[#4B92DB]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "HOU":{
    primary: "#03202F",
    secondary: "#A71930",
    primaryBGstyle: "bg-[#03202F]",
    primaryBGfadeHover: "hover:bg-[#03202F]/50",
    primaryBGHover: "hover:bg-[#03202F]",
    primaryAsText: "text-[#03202F]",
    secondaryBGstyle: "bg-[#A71930]",
    secondaryTextStyle: "text-[#A71930]",
    secondaryBorderStyle: "border-[#A71930]",
    secondaryBorderStyleHover: "hover:border-[#A71930]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "IND":{
    primary: "#002C5F",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#002C5F]",
    primaryBGfadeHover: "hover:bg-[#002C5F]/50",
    primaryBGHover: "hover:bg-[#002C5F]",
    primaryAsText: "text-[#002C5F]",
    secondaryBGstyle: "bg-[#FFFFFF]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    secondaryBorderStyleHover: "hover:border-[#FFFFFF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "JAX":{
    primary: "#006778",
    secondary: "#9F792C",
    primaryBGstyle: "bg-[#006778]",
    primaryBGfadeHover: "hover:bg-[#006778]/50",
    primaryBGHover: "hover:bg-[#006778]",
    primaryAsText: "text-[#006778]",
    secondaryBGstyle: "bg-[#9F792C]",
    secondaryTextStyle: "text-[#9F792C]",
    secondaryBorderStyle: "border-[#9F792C]",
    secondaryBorderStyleHover: "hover:border-[#9F792C]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "KAN":{
    primary: "#E31837",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#E31837]",
    primaryBGfadeHover: "hover:bg-[#E31837]/50",
    primaryBGHover: "hover:bg-[#E31837]",
    primaryAsText: "text-[#E31837]",
    secondaryBGstyle: "bg-[#FFFFFF]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    secondaryBorderStyleHover: "hover:border-[#FFFFFF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "LAC":{
    primary: "#0080C6",
    secondary: "#FFC20E",
    primaryBGstyle: "bg-[#0080C6]",
    primaryBGfadeHover: "hover:bg-[#0080C6]/50",
    primaryBGHover: "hover:bg-[#0080C6]",
    primaryAsText: "text-[#0080C6]",
    secondaryBGstyle: "bg-[#FFC20E]",
    secondaryTextStyle: "text-[#FFC20E]",
    secondaryBorderStyle: "border-[#FFC20E]",
    secondaryBorderStyleHover: "hover:border-[#FFC20E]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "LAR":{
    primary: "#003594",
    secondary: "#FFA300",
    primaryBGstyle: "bg-[#003594]",
    primaryBGfadeHover: "hover:bg-[#003594]/50",
    primaryBGHover: "hover:bg-[#003594]",
    primaryAsText: "text-[#003594]",
    secondaryBGstyle: "bg-[#FFA300]",
    secondaryTextStyle: "text-[#FFA300]",
    secondaryBorderStyle: "border-[#FFA300]",
    secondaryBorderStyleHover: "hover:border-[#FFA300]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "LRD":{
    primary: "#000000",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#000000]",
    primaryBGfadeHover: "hover:bg-[#000000]/50",
    primaryBGHover: "hover:bg-[#000000]",
    primaryAsText: "text-[#000000]",
    secondaryBGstyle: "bg-[#A5ACAF]",
    secondaryTextStyle: "text-[#A5ACAF]",
    secondaryBorderStyle: "border-[#A5ACAF]",
    secondaryBorderStyleHover: "hover:border-[#A5ACAF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "LVR":{
    primary: "#000000",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#000000]",
    primaryBGfadeHover: "hover:bg-[#000000]/50",
    primaryBGHover: "hover:bg-[#000000]",
    primaryAsText: "text-[#000000]",
    secondaryBGstyle: "bg-[#A5ACAF]",
    secondaryTextStyle: "text-[#A5ACAF]",
    secondaryBorderStyle: "border-[#A5ACAF]",
    secondaryBorderStyleHover: "hover:border-[#A5ACAF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "MIA":{
    primary: "#008E97",
    secondary: "#FC4C02",
    primaryBGstyle: "bg-[#008E97]",
    primaryBGfadeHover: "hover:bg-[#008E97]/50",
    primaryBGHover: "hover:bg-[#008E97]",
    primaryAsText: "text-[#008E97]",
    secondaryBGstyle: "bg-[#FC4C02]",
    secondaryTextStyle: "text-[#FC4C02]",
    secondaryBorderStyle: "border-[#FC4C02]",
    secondaryBorderStyleHover: "hover:border-[#FC4C02]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "MIN":{
    primary: "#4F2683",
    secondary: "#FFC62F",
    primaryBGstyle: "bg-[#4F2683]",
    primaryBGfadeHover: "hover:bg-[#4F2683]/50",
    primaryBGHover: "hover:bg-[#4F2683]",
    primaryAsText: "text-[#4F2683]",
    secondaryBGstyle: "bg-[#FFC62F]",
    secondaryTextStyle: "text-[#FFC62F]",
    secondaryBorderStyle: "border-[#FFC62F]",
    secondaryBorderStyleHover: "hover:border-[#FFC62F]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "NWE":{
    primary: "#002244",
    secondary: "#C60C30",
    primaryBGstyle: "bg-[#002244]",
    primaryBGfadeHover: "hover:bg-[#002244]/50",
    primaryBGHover: "hover:bg-[#002244]",
    primaryAsText: "text-[#002244]",
    secondaryBGstyle: "bg-[#C60C30]",
    secondaryTextStyle: "text-[#C60C30]",
    secondaryBorderStyle: "border-[#C60C30]",
    secondaryBorderStyleHover: "hover:border-[#C60C30]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "NOR":{
    primary: "#D3BC8D",
    secondary: "#101820",
    primaryBGstyle: "bg-[#D3BC8D]",
    primaryBGfadeHover: "hover:bg-[#D3BC8D]/50",
    primaryBGHover: "hover:bg-[#D3BC8D]",
    primaryAsText: "text-[#D3BC8D]",
    secondaryBGstyle: "bg-[#101820]",
    secondaryTextStyle: "text-[#101820]",
    secondaryBorderStyle: "border-[#101820]",
    secondaryBorderStyleHover: "hover:border-[#101820]",
    primaryPlainText: "text-black",
    primaryPlainTextHover: "hover:text-black",
    secondaryPlainText: "text-white",
  },
  "NYG":{
    primary: "#0B2265",
    secondary: "#A71930",
    primaryBGstyle: "bg-[#0B2265]",
    primaryBGfadeHover: "hover:bg-[#0B2265]/50",
    primaryBGHover: "hover:bg-[#0B2265]",
    primaryAsText: "text-[#0B2265]",
    secondaryBGstyle: "bg-[#A71930]",
    secondaryTextStyle: "text-[#A71930]",
    secondaryBorderStyle: "border-[#A71930]",
    secondaryBorderStyleHover: "hover:border-[#A71930]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "NYJ":{
    primary: "#125740",
    secondary: "#FFFFFF",
    primaryBGstyle: "bg-[#125740]",
    primaryBGfadeHover: "hover:bg-[#125740]/50",
    primaryBGHover: "hover:bg-[#125740]",
    primaryAsText: "text-[#125740]",
    secondaryBGstyle: "bg-[#FFFFFF]",
    secondaryTextStyle: "text-[#FFFFFF]",
    secondaryBorderStyle: "border-[#FFFFFF]",
    secondaryBorderStyleHover: "hover:border-[#FFFFFF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "OAK":{
    primary: "#000000",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#000000]",
    primaryBGfadeHover: "hover:bg-[#000000]/50",
    primaryBGHover: "hover:bg-[#000000]",
    primaryAsText: "text-[#000000]",
    secondaryBGstyle: "bg-[#A5ACAF]",
    secondaryTextStyle: "text-[#A5ACAF]",
    secondaryBorderStyle: "border-[#A5ACAF]",
    secondaryBorderStyleHover: "hover:border-[#A5ACAF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-black",
  },
  "PHI":{
    primary: "#004C54",
    secondary: "#A5ACAF",
    primaryBGstyle: "bg-[#004C54]",
    primaryBGfadeHover: "hover:bg-[#004C54]/50",
    primaryBGHover: "hover:bg-[#004C54]",
    primaryAsText: "text-[#004C54]",
    secondaryBGstyle: "bg-[#A5ACAF]",
    secondaryTextStyle: "text-[#A5ACAF]",
    secondaryBorderStyle: "border-[#A5ACAF]",
    secondaryBorderStyleHover: "hover:border-[#A5ACAF]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "PIT":{
    primary: "#FFB612",
    secondary: "#101820",
    primaryBGstyle: "bg-[#FFB612]",
    primaryBGfadeHover: "hover:bg-[#FFB612]/50",
    primaryBGHover: "hover:bg-[#FFB612]",
    primaryAsText: "text-[#FFB612]",
    secondaryBGstyle: "bg-[#101820]",
    secondaryTextStyle: "text-[#101820]",
    secondaryBorderStyle: "border-[#101820]",
    secondaryBorderStyleHover: "hover:border-[#101820]",
    primaryPlainText: "text-black",
    primaryPlainTextHover: "hover:text-black",
    secondaryPlainText: "text-white",
  },
  "SEA":{
    primary: "#002244",
    secondary: "#69BE28",
    primaryBGstyle: "bg-[#002244]",
    primaryBGfadeHover: "hover:bg-[#002244]/50",
    primaryBGHover: "hover:bg-[#002244]",
    primaryAsText: "text-[#002244]",
    secondaryBGstyle: "bg-[#69BE28]",
    secondaryTextStyle: "text-[#69BE28]",
    secondaryBorderStyle: "border-[#69BE28]",
    secondaryBorderStyleHover: "hover:border-[#69BE28]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "SDC":{
    primary: "#0080C6",
    secondary: "#FFC20E",
    primaryBGstyle: "bg-[#0080C6]",
    primaryBGfadeHover: "hover:bg-[#0080C6]/50",
    primaryBGHover: "hover:bg-[#0080C6]",
    primaryAsText: "text-[#0080C6]",
    secondaryBGstyle: "bg-[#FFC20E]",
    secondaryTextStyle: "text-[#FFC20E]",
    secondaryBorderStyle: "border-[#FFC20E]",
    secondaryBorderStyleHover: "hover:border-[#FFC20E]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "SFO":{
    primary: "#AA0000",
    secondary: "#B3995D",
    primaryBGstyle: "bg-[#AA0000]",
    primaryBGfadeHover: "hover:bg-[#AA0000]/50",
    primaryBGHover: "hover:bg-[#AA0000]",
    primaryAsText: "text-[#AA0000]",
    secondaryBGstyle: "bg-[#B3995D]",
    secondaryTextStyle: "text-[#B3995D]",
    secondaryBorderStyle: "border-[#B3995D]",
    secondaryBorderStyleHover: "hover:border-[#B3995D]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "STL":{
    primary: "#003594",
    secondary: "#FFA300",
    primaryBGstyle: "bg-[#003594]",
    primaryBGfadeHover: "hover:bg-[#003594]/50",
    primaryBGHover: "hover:bg-[#003594]",
    primaryAsText: "text-[#003594]",
    secondaryBGstyle: "bg-[#FFA300]",
    secondaryTextStyle: "text-[#FFA300]",
    secondaryBorderStyle: "border-[#FFA300]",
    secondaryBorderStyleHover: "hover:border-[#FFA300]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "TAM":{
    primary: "#D50A0A",
    secondary: "#34302B",
    primaryBGstyle: "bg-[#D50A0A]",
    primaryBGfadeHover: "hover:bg-[#D50A0A]/50",
    primaryBGHover: "hover:bg-[#D50A0A]",
    primaryAsText: "text-[#D50A0A]",
    secondaryBGstyle: "bg-[#34302B]",
    secondaryTextStyle: "text-[#34302B]",
    secondaryBorderStyle: "border-[#34302B]",
    secondaryBorderStyleHover: "hover:border-[#34302B]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "TEN":{
    primary: "#0C2340",
    secondary: "#4B92DB",
    primaryBGstyle: "bg-[#0C2340]",
    primaryBGfadeHover: "hover:bg-[#0C2340]/50",
    primaryBGHover: "hover:bg-[#0C2340]",
    primaryAsText: "text-[#0C2340]",
    secondaryBGstyle: "bg-[#4B92DB]",
    secondaryTextStyle: "text-[#4B92DB]",
    secondaryBorderStyle: "border-[#4B92DB]",
    secondaryBorderStyleHover: "hover:border-[#4B92DB]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "WAS":{
    primary: "#5A1414",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#5A1414]",
    primaryBGfadeHover: "hover:bg-[#5A1414]/50",
    primaryBGHover: "hover:bg-[#5A1414]",
    primaryAsText: "text-[#5A1414]",
    secondaryBGstyle: "bg-[#FFB612]",
    secondaryTextStyle: "text-[#FFB612]",
    secondaryBorderStyle: "border-[#FFB612]",
    secondaryBorderStyleHover: "hover:border-[#FFB612]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  },
  "WRS":{
    primary: "#5A1414",
    secondary: "#FFB612",
    primaryBGstyle: "bg-[#5A1414]",
    primaryBGfadeHover: "hover:bg-[#5A1414]/50",
    primaryBGHover: "hover:bg-[#5A1414]",
    primaryAsText: "text-[#5A1414]",
    secondaryBGstyle: "bg-[#FFB612]",
    secondaryTextStyle: "text-[#FFB612]",
    secondaryBorderStyle: "border-[#FFB612]",
    secondaryBorderStyleHover: "hover:border-[#FFB612]",
    primaryPlainText: "text-white",
    primaryPlainTextHover: "hover:text-white",
    secondaryPlainText: "text-white",
  }
}