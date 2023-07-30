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
      },
      fontFamily: {"CG": "CriqueGrotesk-BlackItalic"},
    },
  },
  plugins: [],
} satisfies Config;
