import type { MLVTeamType } from "~/data/MLV/MLVdata";
import type { StyleBookType } from "~/types/StyleBook";

export const MLVstyleData: {[Key in MLVTeamType] : StyleBookType} = {
  ATL: {
    primary: "#EF3240",
    secondary: "#8EC8E9",
    primaryBackground: "bg-[#EF3240]",
    secondaryBorder: "border-[#8EC8E9]",
    secondaryText: "text-[#8EC8E9]",
    simpleText: "text-[#FFFFFF]",
  },
  CLF: {
    primary: "#EE303A",
    secondary: "#F2CD0D",
    primaryBackground: "bg-[#EE303A]",
    secondaryBorder: "border-[#F2CD0D]",
    secondaryText: "text-[#F2CD0D]",
    simpleText: "text-[#FFFFFF]",
  },
  DAL: {
    primary: "#012152",
    secondary: "#5FD0F5",
    primaryBackground: "bg-[#012152]",
    secondaryBorder: "border-[#5FD0F5]",
    secondaryText: "text-[#5FD0F5]",
    simpleText: "text-[#FFFFFF]",
  },
  GRR: {
    primary: "#A70A3D",
    secondary: "#133157",
    primaryBackground: "bg-[#A70A3D]",
    secondaryBorder: "border-[#133157]",
    secondaryText: "text-[#133157]",
    simpleText: "text-[#FFFFFF]",
  },
  IND: {
    primary: "#0092BC",
    secondary: "#FA4B0A",
    primaryBackground: "bg-[#0092BC]",
    secondaryBorder: "border-[#FA4B0A]",
    secondaryText: "text-[#FA4B0A]",
    simpleText: "text-[#FFFFFF]",
  },
  OMA: {
    primary: "#0092BC",
    secondary: "#E0004D",
    primaryBackground: "bg-[#0092BC]",
    secondaryBorder: "border-[#E0004D]",
    secondaryText: "text-[#E0004D]",
    simpleText: "text-[#FFFFFF]",
  },
  ORL: {
    primary: "#1B365D",
    secondary: "#41B6E6",
    primaryBackground: "bg-[#1B365D]",
    secondaryBorder: "border-[#41B6E6]",
    secondaryText: "text-[#41B6E6]",
    simpleText: "text-[#FFFFFF]",
  },
}