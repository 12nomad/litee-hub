import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-powder": "#FDFFFC",
        "red-engine": "#C1292E",
        "yellow-bus": "#F1D302",
        "blue-teal": "#1F7A8C",
        "black-raisin": "#242325",
      },
    },
  },
  plugins: [],
};
export default config;
