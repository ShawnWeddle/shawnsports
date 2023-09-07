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
        nfl: "#0600A8",
        nhl: "#008080",
        ylo: "#E0E000", 
      }
    },
  },
  plugins: [],
} satisfies Config;
