import { type WNBATeamType } from "~/data/WNBA/WNBAdata";

export const WNBAstyleData: {[Key in WNBATeamType] : {
  primary: string;
  secondary: string;
  primaryBGstyle: string;
  primaryPlainText: string;
  secondaryTextStyle: string;
  secondaryBorderStyle: string;
  }
} = {
  ATL:{
    primary: "#C8102E",
    secondary: "#418FDE",
    primaryBGstyle: "bg-[#C8102E]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#418FDE]",
    secondaryBorderStyle: "border-[#418FDE]",
  },
  CHI:{
    primary: "#418FDE",
    secondary: "#FFCD00",
    primaryBGstyle: "bg-[#418FDE]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#FFCD00]",
    secondaryBorderStyle: "border-[#FFCD00]",
  },
  CON:{
    primary: "#DC4405",
    secondary: "#041E42",
    primaryBGstyle: "bg-[#DC4405]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#041E42]",
    secondaryBorderStyle: "border-[#041E42]",
  },
  DAL:{
    primary: "#0C2340",
    secondary: "#C4D600",
    primaryBGstyle: "bg-[#0C2340]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#C4D600]",
    secondaryBorderStyle: "border-[#C4D600]",
  },
  IND:{
    primary: "#041E42",
    secondary: "#FFCD00",
    primaryBGstyle: "bg-[#041E42]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#FFCD00]",
    secondaryBorderStyle: "border-[#FFCD00]",
  },
  LVA:{
    primary: "#000000",
    secondary: "#BA0C2F",
    primaryBGstyle: "bg-[#000000]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#BA0C2F]",
    secondaryBorderStyle: "border-[#BA0C2F]",
  },
  LAS:{
    primary: "#FFC72C",
    secondary: "#702F8A",
    primaryBGstyle: "bg-[#FFC72C]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#702F8A]",
    secondaryBorderStyle: "border-[#702F8A]",
  },
  MIN:{
    primary: "#0C2340",
    secondary: "#78BE20",
    primaryBGstyle: "bg-[#0C2340]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#78BE20]",
    secondaryBorderStyle: "border-[#78BE20]",
  },
  NYL:{
    primary: "#003DA5",
    secondary: "#FF671F",
    primaryBGstyle: "bg-[#003DA5]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#FF671F]",
    secondaryBorderStyle: "border-[#FF671F]",
  },
  PHO:{
    primary: "#201747",
    secondary: "#CB6015",
    primaryBGstyle: "bg-[#201747]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#CB6015]",
    secondaryBorderStyle: "border-[#CB6015]",
  },
  SEA:{
    primary: "#2C5234",
    secondary: "#FBE122",
    primaryBGstyle: "bg-[#2C5234]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#FBE122]",
    secondaryBorderStyle: "border-[#FBE122]",
  },
  WAS:{
    primary: "#0C2340",
    secondary: "#C8102E",
    primaryBGstyle: "bg-[#0C2340]",
    primaryPlainText: "bg-black",
    secondaryTextStyle: "text-[#C8102E]",
    secondaryBorderStyle: "border-[#C8102E]",
  },
};