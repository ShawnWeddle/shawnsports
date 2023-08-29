import type { AllNBATeamType } from "~/data/NBApickData";

export const NBAstyleData: {
  [Key in AllNBATeamType] : {
    primary: string;
    secondary: string;
    fullStyle: string;
    primaryBGstyle: string;
    primaryPlainText: string;
    secondaryTextStyle: string;
    secondaryBorderStyle: string;
  }
} = {
  ATL:{
    primary: "#E03A3E",
    secondary: "#C1D32F",  
    fullStyle: "bg-[#E03A3E] border-[#C1D32F] text-white",  
    primaryBGstyle: "bg-[#E03A3E]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#C1D32F]",
    secondaryBorderStyle: "border-[#C1D32F]",
  },
  BOS:{
    primary: "#007A33",
    secondary: "#BA9653",  
    fullStyle: "bg-[#007A33] border-[#BA9653] text-white",  
    primaryBGstyle: "bg-[#007A33]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#BA9653]",
  },
  BRK:{
    primary: "#000000",
    secondary: "#FFFFFF",  
    fullStyle: "bg-[#000000] border-[#FFFFFF] text-white",  
    primaryBGstyle: "bg-[#000000]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#FFFFFF]",
  },
  CHI:{
    primary: "#CE1141",
    secondary: "#000000",  
    fullStyle: "bg-[#CE1141] border-[#000000] text-white",  
    primaryBGstyle: "bg-[#CE1141]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#000000]",
    secondaryBorderStyle: "border-[#000000]",
  },
  CHO:{
    primary: "#1D1160",
    secondary: "#00788C",  
    fullStyle: "bg-[#1D1160] border-[#00788C] text-white",  
    primaryBGstyle: "bg-[#1D1160]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#00788C]",
    secondaryBorderStyle: "border-[#00788C]",
  },
  CLE:{
    primary: "#860038",
    secondary: "#FDBB30",  
    fullStyle: "bg-[#860038] border-[#FDBB30] text-white",  
    primaryBGstyle: "bg-[#860038]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#FDBB30]",
    secondaryBorderStyle: "border-[#FDBB30]",
  },
  DAL:{
    primary: "#00538C",
    secondary: "#B8C4CA",  
    fullStyle: "bg-[#00538C] border-[#B8C4CA] text-white",  
    primaryBGstyle: "bg-[#00538C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#B8C4CA]",
    secondaryBorderStyle: "border-[#B8C4CA]",
  },
  DEN:{
    primary: "#0E2240",
    secondary: "#FEC524",  
    fullStyle: "bg-[#0E2240] border-[#FEC524] text-white",  
    primaryBGstyle: "bg-[#0E2240]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#FEC524]",
    secondaryBorderStyle: "border-[#FEC524]",
  },
  DET:{
    primary: "#1D42BA",
    secondary: "#C8102E",  
    fullStyle: "bg-[#1D42BA] border-[#C8102E] text-white",  
    primaryBGstyle: "bg-[#1D42BA]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#C8102E]",
  },
  GSW:{
    primary: "#FFC72C",
    secondary: "#1D428A",  
    fullStyle: "bg-[#FFC72C] border-[#1D428A] text-white",  
    primaryBGstyle: "bg-[#FFC72C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#1D428A]",
    secondaryBorderStyle: "border-[#1D428A]",
  },
  HOU:{
    primary: "#CE1141",
    secondary: "#C4CED4",  
    fullStyle: "bg-[#CE1141] border-[#C4CED4] text-white",  
    primaryBGstyle: "bg-[#CE1141]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#C4CED4]",
  },
  IND:{
    primary: "#002D62",
    secondary: "#FDBB30",  
    fullStyle: "bg-[#002D62] border-[#FDBB30] text-white",  
    primaryBGstyle: "bg-[#002D62]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#FDBB30]",
    secondaryBorderStyle: "border-[#FDBB30]",
  },
  LAC:{
    primary: "#C8102E",
    secondary: "#1D428A",  
    fullStyle: "bg-[#C8102E] border-[#1D428A] text-white",  
    primaryBGstyle: "bg-[#C8102E]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#1D428A]",
  },
  LAL:{
    primary: "#FDB927",
    secondary: "#552583",  
    fullStyle: "bg-[#FDB927] border-[#552583] text-white", 
    primaryBGstyle: "bg-[#FDB927]",
    primaryPlainText: "text-[#552583]",
    secondaryTextStyle: "text-[#552583]",
    secondaryBorderStyle: "border-[#552583]",
  },
  MEM:{
    primary: "#5D76A9",
    secondary: "#12173F",  
    fullStyle: "bg-[#5D76A9] border-[#12173F] text-white",  
    primaryBGstyle: "bg-[#5D76A9]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#12173F]",
    secondaryBorderStyle: "border-[#12173F]",
  },
  MIA:{
    primary: "#98002E",
    secondary: "#F9A01B",  
    fullStyle: "bg-[#98002E] border-[#F9A01B] text-white",  
    primaryBGstyle: "bg-[#98002E]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#F9A01B]",
    secondaryBorderStyle: "border-[#F9A01B]",
  },
  MIL:{
    primary: "#00471B",
    secondary: "#EEE1C6",  
    fullStyle: "bg-[#00471B] border-[#EEE1C6] text-white",  
    primaryBGstyle: "bg-[#00471B]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#EEE1C6]",
    secondaryBorderStyle: "border-[#EEE1C6]",
  },
  MIN:{
    primary: "#0C2340",
    secondary: "#78BE20",  
    fullStyle: "bg-[#0C2340] border-[#78BE20] text-white",  
    primaryBGstyle: "bg-[#0C2340]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#78BE20]",
    secondaryBorderStyle: "border-[#78BE20]",
  },
  NOP:{
    primary: "#0C2340",
    secondary: "#85714D",  
    fullStyle: "bg-[#0C2340] border-[#85714D] text-white",  
    primaryBGstyle: "bg-[#0C2340]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#85714D]",
    secondaryBorderStyle: "border-[#85714D]",
  },
  NYK:{
    primary: "#F58426",
    secondary: "#006BB6",  
    fullStyle: "bg-[#F58426] border-[#006BB6] text-white",  
    primaryBGstyle: "bg-[#F58426]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#006BB6]",
    secondaryBorderStyle: "border-[#006BB6]",
  },
  OKC:{
    primary: "#007AC1",
    secondary: "#EF3B24",  
    fullStyle: "bg-[#007AC1] border-[#EF3B24] text-white",  
    primaryBGstyle: "bg-[#007AC1]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#EF3B24]",
  },
  ORL:{
    primary: "#0077C0",
    secondary: "#C4CED4",  
    fullStyle: "bg-[#0077C0] border-[#C4CED4] text-white",  
    primaryBGstyle: "bg-[#0077C0]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#C4CED4]",
  },
  PHI:{
    primary: "#006BB6",
    secondary: "#ED174C",  
    fullStyle: "bg-[#006BB6] border-[#ED174C] text-white",  
    primaryBGstyle: "bg-[#006BB6]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#ED174C]",
  },
  PHO:{
    primary: "#E56020",
    secondary: "#1D1160",  
    fullStyle: "bg-[#E56020] border-[#1D1160] text-white",  
    primaryBGstyle: "bg-[#E56020]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#1D1160]",
    secondaryBorderStyle: "border-[#1D1160]",
  },
  POR:{
    primary: "#E03A3E",
    secondary: "#000000",  
    fullStyle: "bg-[#E03A3E] border-[#000000] text-white",
    primaryBGstyle: "bg-[#E03A3E]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#000000]",
  },
  SAC:{
    primary: "#5A2D81",
    secondary: "#63727A",  
    fullStyle: "bg-[#5A2D81] border-[#63727A] text-white",  
    primaryBGstyle: "bg-[#5A2D81]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#63727A]",
  },
  SAS:{
    primary: "#C4CED4",
    secondary: "#000000",  
    fullStyle: "bg-[#C4CED4] border-[#000000] text-black",  
    primaryBGstyle: "bg-[#C4CED4]",
    primaryPlainText: "text-black",
    secondaryTextStyle: "text-black",
    secondaryBorderStyle: "border-[#000000]",
  },
  TOR:{
    primary: "#CE1141",
    secondary: "#000000",  
    fullStyle: "bg-[#CE1141] border-[#000000] text-white",  
    primaryBGstyle: "bg-[#CE1141]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#000000]",
  },
  UTA:{
    primary: "#00471B",
    secondary: "#F9A01B",  
    fullStyle: "bg-[#00471B] border-[#F9A01B] text-white",  
    primaryBGstyle: "bg-[#00471B]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#F9A01B]",
    secondaryBorderStyle: "border-[#F9A01B]",
  },
  WAS:{
    primary: "#002B5C",
    secondary: "#E31837",  
    fullStyle: "bg-[#002B5C] border-[#E31837] text-white",  
    primaryBGstyle: "bg-[#002B5C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#E31837]",
    secondaryBorderStyle: "border-[#E31837]",
  },
  BAL:{
    primary: "#002B5C",
    secondary: "#E31837",  
    fullStyle: "bg-[#002B5C] border-[#E31837] text-white",  
    primaryBGstyle: "bg-[#002B5C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#E31837]",
    secondaryBorderStyle: "border-[#E31837]",
  },
  CHS:{
    primary: "#002F70",
    secondary: "#EC0028",  
    fullStyle: "bg-[#002F70] border-[#EC0028] text-white",  
    primaryBGstyle: "bg-[#002F70]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#EC0028]",
  },
  FWP:{
    primary: "#1D42BA",
    secondary: "#C8102E",  
    fullStyle: "bg-[#1D42BA] border-[#C8102E] text-white",  
    primaryBGstyle: "bg-[#1D42BA]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#C8102E]",
  },
  MNL:{
    primary: "#FDB927",
    secondary: "#552583",  
    fullStyle: "bg-[#FDB927] border-[#552583] text-white", 
    primaryBGstyle: "bg-[#FDB927]",
    primaryPlainText: "text-[#552583]",
    secondaryTextStyle: "text-[#552583]",
    secondaryBorderStyle: "border-[#552583]",
  },
  NJN:{
    primary: "#000000",
    secondary: "#FFFFFF",  
    fullStyle: "bg-[#000000] border-[#FFFFFF] text-white",  
    primaryBGstyle: "bg-[#000000]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#FFFFFF]",
  },
  PHW:{
    primary: "#FFC72C",
    secondary: "#1D428A",  
    fullStyle: "bg-[#FFC72C] border-[#1D428A] text-white",  
    primaryBGstyle: "bg-[#FFC72C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#1D428A]",
    secondaryBorderStyle: "border-[#1D428A]",
  },
  ROC:{
    primary: "#5A2D81",
    secondary: "#63727A",  
    fullStyle: "bg-[#5A2D81] border-[#63727A] text-white",  
    primaryBGstyle: "bg-[#5A2D81]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#63727A]",
  },
  SEA:{
    primary: "#00653A",
    secondary: "#FFC200",  
    fullStyle: "bg-[#00653A] border-[#FFC200] text-white",  
    primaryBGstyle: "bg-[#00653A]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#FFC200]",
  },
  SFW:{
    primary: "#FFC72C",
    secondary: "#1D428A",  
    fullStyle: "bg-[#FFC72C] border-[#1D428A] text-white",  
    primaryBGstyle: "bg-[#FFC72C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#1D428A]",
    secondaryBorderStyle: "border-[#1D428A]",
  },
  STL:{
    primary: "#E03A3E",
    secondary: "#C1D32F",  
    fullStyle: "bg-[#E03A3E] border-[#C1D32F] text-white",  
    primaryBGstyle: "bg-[#E03A3E]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#C1D32F]",
    secondaryBorderStyle: "border-[#C1D32F]",
  },
  SYR:{
    primary: "#006BB6",
    secondary: "#ED174C",  
    fullStyle: "bg-[#006BB6] border-[#ED174C] text-white",  
    primaryBGstyle: "bg-[#006BB6]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#ED174C]",
  },
  WSC:{
    primary: "#008348",
    secondary: "#FFFFFF",  
    fullStyle: "bg-[#008348] border-[#FFFFFF] text-white",  
    primaryBGstyle: "bg-[#008348]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-white",
    secondaryBorderStyle: "border-[#FFFFFF]",
  },
  WSB:{
    primary: "#002B5C",
    secondary: "#E31837",  
    fullStyle: "bg-[#002B5C] border-[#E31837] text-white",  
    primaryBGstyle: "bg-[#002B5C]",
    primaryPlainText: "text-white",
    secondaryTextStyle: "text-[#E31837]",
    secondaryBorderStyle: "border-[#E31837]",
  },
};