import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
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
        "black-raisin": "#121213",
        "black-raisin-shade": "#0b0a0b",
        "black-raisin-tint": "#19191a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
