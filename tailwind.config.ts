import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Display Medium", "sans-serif"],
        lexend: ["Lexend", "sans-serif"], // Add Lexend font family
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        green: "#34afcb",
      },
      backgroundColor: {
        green: "#34afcb",
      },
    },
  },
  plugins: [],
};

export default config;
