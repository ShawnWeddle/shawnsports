export type StyleBookType = {
  primary: string;
  secondary: string;
  primaryBackground: string;
  primaryBackgroundHover: string;
  secondaryBorder: string;
  secondaryBorderHover: string;
  secondaryText: string;
  secondaryTextHover: string;
  simpleText: string;
  simpleTextHover: string;
};

export const NullBook: StyleBookType = {
  primary: "#222222",
  secondary: "#DDDDDD",
  primaryBackground: "bg-[#222222]",
  primaryBackgroundHover: "hover:bg-[#222222]",
  secondaryBorder: "border-[#DDDDDD]",
  secondaryBorderHover: "hover:border-[#DDDDDD]",
  secondaryText: "text-[#DDDDDD]",
  secondaryTextHover: "hover:text-[#DDDDDD]",
  simpleText: "text-white",
  simpleTextHover: "hover:text-white",
};

/*
    primary: "#BLUE", 
    secondary: "#WHITE",
    primaryBackground: "bg-[#BLUE]",
    primaryBackgroundHover: "hover:bg-[#BLUE]",
    secondaryBorder: "border-[#WHITE]",
    secondaryBorderHover: "hover:border-[#WHITE]",
    secondaryText: "text-[#WHITE]",
    secondaryTextHover: "hover:text-[#WHITE]",
    simpleText: "text-[#WHITE]",
    simpleTextHover: "hover:text-[#WHITE]",
*/