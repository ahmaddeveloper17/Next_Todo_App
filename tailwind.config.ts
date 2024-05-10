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
        Accent: "#F4F4F4",
        Background: "#232020",
        Border: "#FF7315",
        textColor: {
          100: "#2D4659",
          200: "#F0EB8D",
          300: "#EA5455",
          400: "#210062",
          500: "#F0F0F0",
          600: "#222222",
          700: "#4A0E5C",
          800: "#FFBE00",
          900: "#CBE4DE",
        },
        bgColor: {
          100: "#FDFBDA",
          200: "#413543",
          300: "#F9F5EB",
          400: "#009FBD",
          500: "#F45050",
          600: "#F3EFE0",
          700: "#CCF0C3",
          800: "#E6E6D4",
          900: "#2E4F4F",
        },
        borderColor: {
          100: "#819F7F",
          200: "#8F43EE",
          300: "#002B5B",
          400: "#77037B",
          500: "#F9D949",
          600: "#22A39F",
          700: "#BCA3CA",
          800: "#005874",
          900: "#2C3333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
