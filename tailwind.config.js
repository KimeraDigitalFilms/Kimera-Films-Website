/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OverusedGroteskBold: ["Overused Grotesk", "sans-serif"],
        Recoleta: ["Recoleta", "sans-serif"],
        RecoletaBold: ["Recoleta-Bold", "sans-serif"],
        NeueMontreal: ["Neue Montreal", "sans-serif"],
        NeueMontrealLight: ["Neue Montreal-Light", "sans-serif"],
        InclusiveSans: ["Inclusive Sans", "sans-serif"],
        FoundersGrotesk: ["Founders Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    createThemes({
      main: {
        primary: "#ED6E0B",
        secondary1: "#ffffff",
        secondary2: "#C9D9EE",
        primaryBg: "#0A0A0A",
        primaryFg: "#2b190a",
        shadow: "#26211e",
        buttonBg: "#383838",
      },
      alt1: {
        primary: "#ED6E0B", 
        secondary1: "#000000",
        primaryBg: "#ffffff",
        shadow: "#0000004d",
        primaryFg: "#060426",
        buttonBg: "#383838",
      },
    }),
  ],
}
