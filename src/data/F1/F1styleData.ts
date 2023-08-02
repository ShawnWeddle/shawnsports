import type { ConstructorNameType } from "./F1data"

export const F1styleData: {
  [Key in ConstructorNameType]: {primary: string, secondary: string, primaryBGstyle: string, primaryTextStyle: string, secondaryTextStyle: string};
} = {
  "Alfa Romeo": { primary: "#A51D2F", secondary: "#FFFFFF", primaryBGstyle: "bg-[#A51D2F]", primaryTextStyle: "text-[#A51D2F]", secondaryTextStyle: "text-[#FFFFFF]"},
  AlphaTauri: { primary: "#002841", secondary: "#FFFFFF", primaryBGstyle: "bg-[#002841]", primaryTextStyle: "text-[#002841]", secondaryTextStyle: "text-[#FFFFFF]"},
  Alpine: { primary: "#FF99C4", secondary: "#FFFFFF", primaryBGstyle: "bg-[#FF99C4]", primaryTextStyle: "text-[#FF99C4]", secondaryTextStyle: "text-[#FFFFFF]"},
  "Aston Martin": { primary: "#00594F", secondary: "#FFFFFF", primaryBGstyle: "bg-[#00594F]", primaryTextStyle: "text-[#00594F]", secondaryTextStyle: "text-[#FFFFFF]"},
  Ferrari: { primary: "#E0001A", secondary: "#FFEC01", primaryBGstyle: "bg-[#E0001A]", primaryTextStyle: "text-[#E0001A]", secondaryTextStyle: "text-[#FFEC01]"},
  Haas: { primary: "#ED1A3B", secondary: "#FFFFFF", primaryBGstyle: "bg-[#ED1A3B]", primaryTextStyle: "text-[#ED1A3B]", secondaryTextStyle: "text-[#FFFFFF]"},
  McLaren: { primary: "#FF9700", secondary: "#FFFFFF", primaryBGstyle: "bg-[#FF9700]", primaryTextStyle: "text-[#FF9700]", secondaryTextStyle: "text-[#FFFFFF]"},
  Mercedes: { primary: "#009994", secondary: "#FFFFFF", primaryBGstyle: "bg-[#009994]", primaryTextStyle: "text-[#009994]", secondaryTextStyle: "text-[#FFFFFF]"},
  "Red Bull": { primary: "#0F1C2C", secondary: "#EA1D2C", primaryBGstyle: "bg-[#0F1C2C]", primaryTextStyle: "text-[#0F1C2C]", secondaryTextStyle: "text-[#EA1D2C]"},
  Williams: { primary: "#121C66", secondary: "#FFFFFF", primaryBGstyle: "bg-[#121C66]", primaryTextStyle: "text-[#121C66]", secondaryTextStyle: "text-[#FFFFFF]"},
};