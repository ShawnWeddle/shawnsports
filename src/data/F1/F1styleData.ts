import type { ConstructorNameType } from "./F1data"

export const F1styleData: {
  [Key in ConstructorNameType]: {twStyle: string, primary: string, textColor: string};
} = {
  "Alfa Romeo": {twStyle: "bg-[#A51D2F] text-[#FFFFFF]", primary: "#A51D2F", textColor: "#FFFFFF"},
  AlphaTauri: {twStyle: "bg-[#01102F] text-[#FFFFFF]", primary: "#01102F", textColor: "#FFFFFF"},
  Alpine: {twStyle: "bg-[#FF99C4] text-[#FFFFFF]", primary: "#FF99C4", textColor: "#FFFFFF"},
  "Aston Martin": {twStyle: "bg-[#00594F] text-[#FFFFFF]", primary: "#00594F", textColor: "#FFFFFF"},
  Ferrari: {twStyle: "bg-[#E0001A] text-[#FFEC01]", primary: "#E0001A", textColor: "#FFFFFF"},
  Haas: {twStyle: "bg-[#ED1A3B] text-[#FFFFFF]", primary: "#ED1A3B", textColor: "#FFFFFF"},
  McLaren: {twStyle: "bg-[#FF9700] text-[#FFFFFF]", primary: "#FF9700", textColor: "#FFFFFF"},
  Mercedes: {twStyle: "bg-[#009994] text-[#FFFFFF]", primary: "#009994", textColor: "#FFFFFF"},
  "Red Bull": {twStyle: "bg-[#0F1C2C] text-[#EA1D2C]", primary: "#0F1C2C", textColor: "#FFFFFF"},
  Williams: {twStyle: "bg-[#121C66] text-[#FFFFFF]", primary: "#121C66", textColor: "#FFFFFF"},
};