import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "22":"5.5rem",
      },
      height: {
        "22":"5.5rem",
        "13":"3.25rem",
      },
      fontFamily: {"CG": "CriqueGrotesk-BlackItalic"},
      colors: {
        formulaOne: "#E10600",
        home: "#00A806",
        nba: "#E07800", 
        nfl: "#0000A8",
        nfl50: "#8080FF",
        nhl: "#008080",
        mlb: "#A80000",
        ylo: "#E0E000",
      },
      spacing: {
        "13":"3.25rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
