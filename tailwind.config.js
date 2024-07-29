/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-sm": "0px 8px 10px 0px rgba(1, 255, 255, 0.15)", //White shadow
        blue: "0 1px 3px 0 rgba(0, 0, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 255, 0.06)", //Blue shadow (for testing purposes)
      },
      colors: {
        // primary: "#ED6E0B",
        // secondary1: "#C9D9EE",
        // primaryBg: "#0A0A0A",
        // primaryFg: "#282724",
        // accent1:'',
        // secondary2: "",
        // accentBg1: "",
        // accentFg1:"",
        // accent2:'',
        // secondary3: "",
        // accentBg2: "",
        // accentFg2:"",
        // "primary-content": "#0a0802",
        // "primary-dark": "#b29126",
        // "primary-light": "#ddc061",
        // "secondary-content": "#ffffff",
        // "secondary-dark": "#4b26b2",
        // "secondary-light": "#8161dd",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Dancing: ["Dancing Script", "cursive"],
        AvenirBook: ["Avenir-Book", "sans-serif"],
      },
    },
  },
  plugins: [
    createThemes({
      main: {
        primary: "#ED6E0B",
        secondary1: "#C9D9EE",
        //  'primaryBg': '#211106',
        primaryBg: "#0A0A0A",
        primaryFg: "#2b190a",
      },
      alt1: {
        primary: "#f2b200",
        secondary1: "#cdfaf4",
        primaryBg: "#1B1A55",
        primaryFg: "#060426",
      },
      alt2: {
        primary: "#C4B2BC",
        secondary1: "#D8D4F2",
        primaryBg: "#123524",
        primaryFg: "#021a0b",
      },
    }),
  ],
}
