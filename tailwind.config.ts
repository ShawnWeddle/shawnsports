import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "all":"45rem",
      },
      height: {
        "all":"45rem",
        "22":"5.5rem",
      },
      fontFamily: {"CG": "CriqueGrotesk-BlackItalic"},
      colors: {
        formulaOne: "#E10600",
        home: "#0600A8",
        nba: "#00A806", 
        nfl: "#E07800", 
      }
    },
  },
  plugins: [],
} satisfies Config;
